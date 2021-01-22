import React from "react";
import { DoverOnsiteCodingChallengeBackendAPI } from "../../../../swaggerapi/doverOnsiteCodingChallengeBackendAPI";
import Button from "../../../common/Button/Button";
import HeaderContainer from "../../../common/HeaderContainer/HeaderContainer";
import {
  publishClickHandler,
  saveClickHandler,
} from "../../OutReachPageHelperFunctions/HelperFunctions";
import Modal from "../Modal/Modal";
import {
  OutReachEditorActions,
  OutReachEditorReducerState,
} from "../OutReachReducer";

export type OutReachHeaderProps = {
  dispatch: (value: OutReachEditorActions) => void;
  state: OutReachEditorReducerState;
  isEditorChanged: boolean;
  client: DoverOnsiteCodingChallengeBackendAPI;
  templateState: string;
};

const OutReachHeader: React.FC<OutReachHeaderProps> = (props) => {
  const { dispatch, state, isEditorChanged, templateState, client } = props;
  return (
    <HeaderContainer className={"EditorHeader"}>
      <div className="row_container">
        <h2>{"Email Template"}</h2>
        <h3>{templateState}</h3>
      </div>
      <div className="row_container">
        <Button
          onClick={() => {
            saveClickHandler(state, dispatch, client);
          }}
          disabled={!isEditorChanged}
        >
          Save Template
        </Button>
        <Button
          onClick={() => {
            publishClickHandler(state, dispatch, client);
          }}
          disabled={!isEditorChanged && state.outreach?.state === "FINALIZED"}
          className={"outreach_button"}
        >
          Publish
        </Button>
      </div>
    </HeaderContainer>
  );
};

export default OutReachHeader;
