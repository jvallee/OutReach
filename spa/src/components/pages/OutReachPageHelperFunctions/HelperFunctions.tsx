import { ContentState, convertToRaw, EditorState } from "draft-js";
import { DoverOnsiteCodingChallengeBackendAPI } from "../../../swaggerapi/doverOnsiteCodingChallengeBackendAPI";
import { ListOutreachResponse, Outreach } from "../../../swaggerapi/models";
import {
  OutReachEditorReducerState,
  OutReachEditorActions,
} from "../OutReach/OutReachReducer";

export type HasDraftReturnType = {
  hasDraft: boolean;
  finalIndex?: number;
};

export function hasDraft(response: ListOutreachResponse): HasDraftReturnType {
  var firstDraft: undefined | Outreach = undefined;
  if (response.results.length !== 0) {
    const mostRecent = response.results[0];
    if (mostRecent.state == "FINALIZED") {
      return { hasDraft: false };
    }

    for (let index = 0; index < response.results.length; index++) {
      const element = response.results[index];
      if (firstDraft == undefined && element.state == "DRAFT") {
        firstDraft = element;
      } else if (element.state == "FINALIZED") {
        return { hasDraft: true, finalIndex: index };
      }
    }
  }
  return { hasDraft: true };
}

export function isEditorChanged(state: OutReachEditorReducerState) {
  return !(
    state.outreach?.editorState.body == state.content &&
    state.subject == state.outreach.editorState.subject
  );
}

/*TODO: show document history, that is why we are creating new when publishing */
export function publishClickHandler(
  state: OutReachEditorReducerState,
  dispatch: React.Dispatch<OutReachEditorActions>,
  client: DoverOnsiteCodingChallengeBackendAPI
) {
  client
    .createOutreach({
      editorState: {
        body: state.content,
        subject: state.subject,
      },
      state: "FINALIZED",
    })
    .then((value) => {
      dispatch({ type: "EDITOR_PUT_POST_200", payload: value });
    });
}

export function saveClickHandler(
  state: OutReachEditorReducerState,
  dispatch: React.Dispatch<OutReachEditorActions>,
  client: DoverOnsiteCodingChallengeBackendAPI
) {
  debugger;
  /* TODO: create new reducer action to update  state with returned value from api */
  if (state.outreach?.id && state.outreach?.state !== "FINALIZED") {
    client
      .partialUpdateOutreach(
        {
          editorState: {
            body:
              state.content /* TODO: Figure our serialization of text editor State */,
            subject: state.subject,
          },
          state: "DRAFT",
        },
        state.outreach.id
      ) /*added this to update state of outrach after put/post */
      .then((value) => {
        dispatch({ type: "EDITOR_PUT_POST_200", payload: value });
      });
  } else if (isEditorChanged(state)) {
    client
      .createOutreach({
        editorState: {
          body:
            state.content /* TODO: Figure our serialization of text editor State*/,
          subject: state.subject,
        },
        state: "DRAFT",
      }) /*added this to update state of outrach after put/post */
      .then((value) => {
        dispatch({ type: "EDITOR_PUT_POST_200", payload: value });
      });
  }
}
