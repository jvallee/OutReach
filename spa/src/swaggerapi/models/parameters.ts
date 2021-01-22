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

export const id: msRest.OperationURLParameter = {
  parameterPath: "id",
  mapper: {
    required: true,
    serializedName: "id",
    type: {
      name: "Uuid"
    }
  }
};
export const limit: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "limit"
  ],
  mapper: {
    serializedName: "limit",
    type: {
      name: "Number"
    }
  }
};
export const offset: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "offset"
  ],
  mapper: {
    serializedName: "offset",
    type: {
      name: "Number"
    }
  }
};
export const ordering: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "ordering"
  ],
  mapper: {
    serializedName: "ordering",
    type: {
      name: "String"
    }
  }
};
export const search: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "search"
  ],
  mapper: {
    serializedName: "search",
    type: {
      name: "String"
    }
  }
};
export const state: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "state"
  ],
  mapper: {
    serializedName: "state",
    type: {
      name: "String"
    }
  }
};