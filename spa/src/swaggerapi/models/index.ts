/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ServiceClientOptions } from "@azure/ms-rest-js";
import * as msRest from "@azure/ms-rest-js";

/**
 * An interface representing Outreach.
 */
export interface Outreach {
  /**
   * Id. **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Created. **NOTE: This property will not be serialized. It can only be populated by the
   * server.**
   */
  readonly created?: Date;
  /**
   * Modified. **NOTE: This property will not be serialized. It can only be populated by the
   * server.**
   */
  readonly modified?: Date;
  /**
   * Editor state.
   */
  editorState?: any;
  /**
   * State. Possible values include: 'DRAFT', 'FINALIZED'
   */
  state?: State;
}

/**
 * An interface representing ListOutreachOKResponse.
 */
export interface ListOutreachOKResponse {
  count: number;
  next?: string;
  previous?: string;
  results: Outreach[];
}

/**
 * An interface representing DoverOnsiteCodingChallengeBackendAPIOptions.
 */
export interface DoverOnsiteCodingChallengeBackendAPIOptions extends ServiceClientOptions {
  baseUri?: string;
}

/**
 * Optional Parameters.
 */
export interface DoverOnsiteCodingChallengeBackendAPIListOutreachOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Which field to use when ordering the results.
   */
  ordering?: string;
  /**
   * A search term.
   */
  search?: string;
  state?: string;
  /**
   * Number of results to return per page.
   */
  limit?: number;
  /**
   * The initial index from which to return the results.
   */
  offset?: number;
}

/**
 * Defines values for State.
 * Possible values include: 'DRAFT', 'FINALIZED'
 * @readonly
 * @enum {string}
 */
export type State = 'DRAFT' | 'FINALIZED';

/**
 * Contains response data for the listOutreach operation.
 */
export type ListOutreachResponse = ListOutreachOKResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ListOutreachOKResponse;
    };
};

/**
 * Contains response data for the createOutreach operation.
 */
export type CreateOutreachResponse = Outreach & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Outreach;
    };
};

/**
 * Contains response data for the getOutreach operation.
 */
export type GetOutreachResponse = Outreach & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Outreach;
    };
};

/**
 * Contains response data for the updateOutreach operation.
 */
export type UpdateOutreachResponse = Outreach & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Outreach;
    };
};

/**
 * Contains response data for the partialUpdateOutreach operation.
 */
export type PartialUpdateOutreachResponse = Outreach & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Outreach;
    };
};