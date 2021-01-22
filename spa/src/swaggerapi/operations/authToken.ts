/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Mappers from "../models/authTokenMappers";
import { DoverOnsiteCodingChallengeBackendAPIContext } from "../doverOnsiteCodingChallengeBackendAPIContext";

/** Class representing a AuthToken. */
export class AuthToken {
  private readonly client: DoverOnsiteCodingChallengeBackendAPIContext;

  /**
   * Create a AuthToken.
   * @param {DoverOnsiteCodingChallengeBackendAPIContext} client Reference to the service client.
   */
  constructor(client: DoverOnsiteCodingChallengeBackendAPIContext) {
    this.client = client;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  create(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  create(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  create(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  create(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      createOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "auth-token/",
  responses: {
    201: {},
    default: {}
  },
  serializer
};