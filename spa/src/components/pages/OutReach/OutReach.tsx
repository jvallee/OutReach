import React, { ChangeEvent, useEffect, useReducer, useState } from "react";
import { EditorState } from "draft-js";
import { Editor, RawDraftContentState } from "react-draft-wysiwyg";
import { DoverOnsiteCodingChallengeBackendAPI } from "../../../swaggerapi/doverOnsiteCodingChallengeBackendAPI";
import reducer, { OutReachEditorReducerState } from "./OutReachReducer";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import "./OutReach.css";
import { TextField } from "@material-ui/core";
import Modal from "./Modal/Modal";
import { hasDraft } from "../OutReachPageHelperFunctions/HelperFunctions";
import OutReachHeader from "./OutReachHeader/OutReachHeader";

const client = new DoverOnsiteCodingChallengeBackendAPI({
  baseUri: "http://localhost:8000",
});

const OutReachEditorPage: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, {
    editorState: EditorState.createEmpty(),
    isDirty: false,
    isModalOpen: false,
    content: "content placeholder",
    subject: "subject placeholder",
    outreach: undefined,
    hasDraft: { hasDraft: true },
  });
  useEffect(() => {
    client.listOutreach().then((value) => {
      dispatch({
        type: "EDITOR_LOADED_200",
        payload: {
          outreach: value.results[0],
          outreaches: value.results,
          hasDraft: hasDraft(value),
        },
      });
    });
  }, []);

  const onEditorStateChange = (editorState: EditorState) => {
    dispatch({ type: "EDITOR_EDITED_200", payload: editorState });
  };

  const onSubjectChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    dispatch({ type: "SUBJECT_CHANGE", payload: event.target.value });
  };

  const templateState =
    state.outreach?.state == "FINALIZED" && !isEditorChanged(state)
      ? "Current Published Template"
      : "Current Draft Template";

  return (
    <div className="OutReachEditor_root">
      <Modal
        clickSavedHandler={() => {
          dispatch({ type: "USE_FINAL" });
        }}
        clickDraftHandler={() => {
          dispatch({ type: "USE_DRAFT" });
        }}
        isOpen={state.isModalOpen}
      />
      <OutReachHeader
        dispatch={dispatch}
        state={state}
        isEditorChanged={isEditorChanged(state)}
        client={client}
        templateState={templateState}
      />
      <TextField
        id="standard-basic"
        label="Subject"
        onChange={onSubjectChange}
        value={state.subject}
        style={{ marginBottom: "20px" }}
      ></TextField>
      <Editor
        editorState={state.editorState}
        onEditorStateChange={onEditorStateChange}
        spellCheck={true}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
      />
    </div>
  );
};

const isEditorChanged = (state: OutReachEditorReducerState) => {
  return !(
    state.outreach?.editorState.body == state.content &&
    state.subject == state.outreach.editorState.subject
  );
};

export default OutReachEditorPage;
