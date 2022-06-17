import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Suspense, useMemo } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";

import { Button, ContentCard } from "components";
import { IDataItem } from "components/base/DropDown/components/Option";
import { JobItem } from "components/JobItem/JobItem";
import LoadingSchema from "components/LoadingSchema";

import { LogsRequestError } from "core/request/LogsRequestError";
import { useCreateConnection, ValuesProps } from "hooks/services/useConnectionHook";
import { LegacyTrackActionType, TrackActionActions, TrackActionNamespace, useTrackAction } from "hooks/useTrackAction";
import ConnectionForm from "views/Connection/ConnectionForm";

import { DestinationRead, SourceRead, WebBackendConnectionRead } from "../../core/request/AirbyteClient";
import { useDiscoverSchema } from "../../hooks/services/useSourceHook";
import TryAfterErrorBlock from "./components/TryAfterErrorBlock";

const SkipButton = styled.div`
  margin-top: 6px;

  & > button {
    min-width: 239px;
    margin-left: 9px;
  }
`;

const TryArrow = styled(FontAwesomeIcon)`
  margin: 0 10px -1px 0;
  font-size: 14px;
`;

interface CreateConnectionContentProps {
  additionBottomControls?: React.ReactNode;
  source: SourceRead;
  destination: DestinationRead;
  afterSubmitConnection?: (connection: WebBackendConnectionRead) => void;
  noTitles?: boolean;
}

const CreateConnectionContent: React.FC<CreateConnectionContentProps> = ({
  source,
  destination,
  afterSubmitConnection,
  additionBottomControls,
  noTitles,
}) => {
  const { mutateAsync: createConnection } = useCreateConnection();
  const trackNewConnectionAction = useTrackAction(
    TrackActionNamespace.CONNECTION,
    LegacyTrackActionType.NEW_CONNECTION
  );

  const { schema, isLoading, schemaErrorStatus, catalogId, onDiscoverSchema } = useDiscoverSchema(source.sourceId);

  const connection = useMemo(
    () => ({
      syncCatalog: schema,
      destination,
      source,
      catalogId,
    }),
    [schema, destination, source, catalogId]
  );

  const onSubmitConnectionStep = async (values: ValuesProps) => {
    const connection = await createConnection({
      values,
      source,
      destination,
      sourceDefinition: {
        sourceDefinitionId: source?.sourceDefinitionId ?? "",
      },
      destinationDefinition: {
        name: destination?.name ?? "",
        destinationDefinitionId: destination?.destinationDefinitionId ?? "",
      },
      sourceCatalogId: catalogId,
    });

    return {
      onSubmitComplete: () => {
        afterSubmitConnection?.(connection);
      },
    };
  };

  const onSelectFrequency = (item: IDataItem | null) => {
    const enabledStreams = connection.syncCatalog.streams.filter((stream) => stream.config?.selected).length;

    if (item) {
      trackNewConnectionAction("Select a frequency", [TrackActionActions.FREQUENCY], {
        frequency: item.label,
        connector_source_definition: source?.sourceName,
        connector_source_definition_id: source?.sourceDefinitionId,
        connector_destination_definition: destination?.destinationName,
        connector_destination_definition_id: destination?.destinationDefinitionId,
        available_streams: connection.syncCatalog.streams.length,
        enabled_streams: enabledStreams,
      });
    }
  };

  if (schemaErrorStatus) {
    const job = LogsRequestError.extractJobInfo(schemaErrorStatus);
    return (
      <ContentCard title={noTitles ? null : <FormattedMessage id="onboarding.setConnection" />}>
        <TryAfterErrorBlock
          onClick={onDiscoverSchema}
          additionControl={<SkipButton>{additionBottomControls}</SkipButton>}
        />
        {job && <JobItem job={job} />}
      </ContentCard>
    );
  }

  return (
    <ContentCard title={noTitles ? null : <FormattedMessage id="onboarding.setConnection" />}>
      {isLoading ? (
        <LoadingSchema />
      ) : (
        <Suspense fallback={<LoadingSchema />}>
          <ConnectionForm
            mode="create"
            connection={connection}
            additionBottomControls={additionBottomControls}
            onDropDownSelect={onSelectFrequency}
            additionalSchemaControl={
              <Button onClick={onDiscoverSchema} type="button">
                <TryArrow icon={faRedoAlt} />
                <FormattedMessage id="connection.refreshSchema" />
              </Button>
            }
            onSubmit={onSubmitConnectionStep}
          />
        </Suspense>
      )}
    </ContentCard>
  );
};

export default CreateConnectionContent;
