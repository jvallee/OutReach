import React from "react";
import { EditorState, RawDraftContentState } from "draft-js";
import {
  ListOutreachResponse,
  Outreach,
  PartialUpdateOutreachResponse,
} from "../../../swaggerapi/models";
import {
  getEditorContentAsString,
  stringToEditorState,
} from "../../../util/HelperFunctions/TextEditorHelpers";
import { HasDraftReturnType } from "../OutReachPageHelperFunctions/HelperFunctions";
// import { Client, Job } from "../../../util/gen/api/dist";

export type OutReachEditorReducerState = {
  //   job?: Job;
  editorState: EditorState;
  isDirty: boolean;
  isModalOpen: boolean;
  content: string;
  subject: string;
  outreach?: Outreach;
  outreaches?: Outreach[];
  hasDraft: HasDraftReturnType;
};

export type OutReachEditorActions =
  | {
      type: "CLOSE_MODAL";
      payload: { editorState: EditorState; loadedContent: string };
    }
  | {
      type: "EDITOR_EDITED_200";
      payload: EditorState;
    }
  | {
      type: "SUBJECT_CHANGE";
      payload: string;
    }
  | {
      type: "USE_FINAL";
    }
  | {
      type: "USE_DRAFT";
    }
  | {
      type: "EDITOR_LOADED_200";
      payload: {
        outreach: Outreach;
        hasDraft: HasDraftReturnType;
        outreaches: Outreach[];
      };
    }
  /*added this to update state of outrach after put/post */
  | {
      type: "EDITOR_PUT_POST_200";
      payload: PartialUpdateOutreachResponse;
    };

export default function reducer(
  state: OutReachEditorReducerState,
  action: OutReachEditorActions
): OutReachEditorReducerState {
  switch (action.type) {
    case "EDITOR_LOADED_200":
      /* TODO: Figure our serialization of text editor State*/
      const isModallOpen = action.payload.hasDraft.finalIndex !== undefined;
      debugger;

      return {
        ...state,
        outreach: action.payload.outreach,
        editorState: stringToEditorState(
          action.payload.outreach?.editorState?.body || ""
        ),
        subject: action.payload.outreach?.editorState?.subject || "",
        isModalOpen: isModallOpen,
        outreaches: action.payload.outreaches,
        hasDraft: action.payload.hasDraft,
        content: action.payload.outreach?.editorState?.body || "",
      };

    case "EDITOR_PUT_POST_200":
      debugger;
      /* TODO: Figure our serialization of text editor State*/
      return {
        ...state,
        outreach: action.payload,
      };
    case "SUBJECT_CHANGE":
      /* TODO: Figure our serialization of text editor State*/
      return {
        ...state,
        subject: action.payload,
      };
    case "EDITOR_EDITED_200":
      return {
        ...state,
        editorState: action.payload,
        content: getEditorContentAsString(state.editorState),
      };
    case "CLOSE_MODAL":
      return {
        ...state,
      };

    case "USE_DRAFT":
      if (state.outreaches && state.hasDraft?.finalIndex !== undefined) {
        return {
          ...state,
          outreach: state.outreaches[0],
          isModalOpen: false,
        };
      }
      return {
        ...state,
        isModalOpen: false,
      };
    case "USE_FINAL":
      debugger;
      if (state.outreaches && state.hasDraft?.finalIndex !== undefined) {
        const finalOutreach = state.outreaches[state.hasDraft.finalIndex];
        return {
          ...state,
          isModalOpen: false,
          outreach: state.outreaches[state.hasDraft.finalIndex],
          editorState: stringToEditorState(
            finalOutreach.editorState?.body || ""
          ),
          subject: finalOutreach?.editorState?.subject || "",
          content: finalOutreach.editorState?.body,
        };
      }

    default:
      return state;
  }
}
