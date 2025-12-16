import {
  createAPIRequest,
  GaxiosResponse,
  APIRequestContext,
  GoogleConfigurable,
  GlobalOptions,
  MethodOptions,
  StreamMethodOptions,
} from "googleapis-common";
import * as types from "./types.js";
import { Readable } from "stream";

/**
 * RCS Business Messaging API
 *
 *
 *
 * @example
 * const {google} = require('googleapis');
 * const rcsbusinessmessaging = google.rcsbusinessmessaging('v1');
 *
 * @namespace rcsbusinessmessaging
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Rcsbusinessmessaging
 */
export class Rcsbusinessmessaging {
  files: Resource$Files;
  phones: Resource$Phones;
  users: Resource$Users;
  context: APIRequestContext;

  constructor(options: GlobalOptions, google?: GoogleConfigurable) {
    this.context = {
      _options: options || {},
      google,
    };
    this.files = new Resource$Files(this.context);
    this.phones = new Resource$Phones(this.context);
    this.users = new Resource$Users(this.context);
  }
}

export class Resource$Files {
  context: APIRequestContext;

  constructor(context: APIRequestContext) {
    this.context = context;
  }

  async create<T extends MethodOptions | StreamMethodOptions>(
    params?: types.Params$Resource$Files$Create,
    options?: MethodOptions | StreamMethodOptions
  ): Promise<
    GaxiosResponse<T extends MethodOptions ? types.Schema$File : Readable>
  > {
    params = params || {};
    const _options = options || ({} as T);
    const rootUrl =
      _options.rootUrl || "https://rcsbusinessmessaging.googleapis.com/";
    const parameters = {
      options: Object.assign(
        {
          url: (rootUrl + "/v1/files").replace(/([^:]\/)\/+/g, "$1"),
          method: "POST",
        },
        _options
      ),
      params,
      mediaUrl: (rootUrl + "/upload/v1/files").replace(/([^:]\/)\/+/g, "$1"),
      requiredParams: [],
      pathParams: [],
      context: this.context,
    };

    return await createAPIRequest(parameters);
  }
}

export class Resource$Phones {
  context: APIRequestContext;
  agentEvents: Resource$Phones$Agentevents;
  agentMessages: Resource$Phones$Agentmessages;
  capability: Resource$Phones$Capability;
  dialogflowMessages: Resource$Phones$Dialogflowmessages;
  testers: Resource$Phones$Testers;

  constructor(context: APIRequestContext) {
    this.context = context;
    this.agentEvents = new Resource$Phones$Agentevents(this.context);
    this.agentMessages = new Resource$Phones$Agentmessages(this.context);
    this.capability = new Resource$Phones$Capability(this.context);
    this.dialogflowMessages = new Resource$Phones$Dialogflowmessages(
      this.context
    );
    this.testers = new Resource$Phones$Testers(this.context);
  }

  async getCapabilities<T extends MethodOptions | StreamMethodOptions>(
    params?: types.Params$Resource$Phones$Getcapabilities,
    options?: MethodOptions | StreamMethodOptions
  ): Promise<
    GaxiosResponse<
      T extends MethodOptions ? types.Schema$Capabilities : Readable
    >
  > {
    params = params || {};
    const _options = options || ({} as T);
    const rootUrl =
      _options.rootUrl || "https://rcsbusinessmessaging.googleapis.com/";
    const parameters = {
      options: Object.assign(
        {
          url: (rootUrl + "/v1/{+name}/capabilities").replace(
            /([^:]\/)\/+/g,
            "$1"
          ),
          method: "GET",
        },
        _options
      ),
      params,
      requiredParams: ["name"],
      pathParams: ["name"],
      context: this.context,
    };
    return await createAPIRequest(parameters);
  }
}

export class Resource$Phones$Agentevents {
  context: APIRequestContext;
  constructor(context: APIRequestContext) {
    this.context = context;
  }
  async create<T extends MethodOptions | StreamMethodOptions>(
    params?: types.Params$Resource$Phones$Agentevents$Create,
    options?: MethodOptions | StreamMethodOptions
  ): Promise<
    GaxiosResponse<T extends MethodOptions ? types.Schema$AgentEvent : Readable>
  > {
    params = params || {};
    const _options = options || ({} as T);
    const rootUrl =
      _options.rootUrl || "https://rcsbusinessmessaging.googleapis.com/";
    const parameters = {
      options: Object.assign(
        {
          url: (rootUrl + "/v1/{+parent}/agentEvents").replace(
            /([^:]\/)\/+/g,
            "$1"
          ),
          method: "POST",
        },
        _options
      ),
      params,
      requiredParams: ["parent"],
      pathParams: ["parent"],
      context: this.context,
    };
    return await createAPIRequest(parameters);
  }
}

export class Resource$Phones$Agentmessages {
  context: APIRequestContext;
  constructor(context: APIRequestContext) {
    this.context = context;
  }
  async create<T extends MethodOptions | StreamMethodOptions>(
    params?: types.Params$Resource$Phones$Agentmessages$Create,
    options?: MethodOptions | StreamMethodOptions
  ): Promise<
    GaxiosResponse<
      T extends MethodOptions ? types.Schema$AgentMessage : Readable
    >
  > {
    params = params || {};
    const _options = options || ({} as T);
    const rootUrl =
      _options.rootUrl || "https://rcsbusinessmessaging.googleapis.com/";
    const parameters = {
      options: Object.assign(
        {
          url: (rootUrl + "/v1/{+parent}/agentMessages").replace(
            /([^:]\/)\/+/g,
            "$1"
          ),
          method: "POST",
        },
        _options
      ),
      params,
      requiredParams: ["parent"],
      pathParams: ["parent"],
      context: this.context,
    };
    return await createAPIRequest(parameters);
  }

  async delete<T extends MethodOptions | StreamMethodOptions>(
    params?: types.Params$Resource$Phones$Agentmessages$Delete,
    options?: MethodOptions | StreamMethodOptions
  ): Promise<
    GaxiosResponse<T extends MethodOptions ? types.Schema$Empty : Readable>
  > {
    params = params || {};
    const _options = options || ({} as T);
    const rootUrl =
      _options.rootUrl || "https://rcsbusinessmessaging.googleapis.com/";
    const parameters = {
      options: Object.assign(
        {
          url: (rootUrl + "/v1/{+name}").replace(/([^:]\/)\/+/g, "$1"),
          method: "DELETE",
        },
        _options
      ),
      params,
      requiredParams: ["name"],
      pathParams: ["name"],
      context: this.context,
    };

    return await createAPIRequest(parameters);
  }
}

export class Resource$Phones$Capability {
  context: APIRequestContext;
  constructor(context: APIRequestContext) {
    this.context = context;
  }
  async requestCapabilityCallback<
    T extends MethodOptions | StreamMethodOptions
  >(
    params?: types.Params$Resource$Phones$Capability$Requestcapabilitycallback,
    options?: MethodOptions | StreamMethodOptions
  ): Promise<
    GaxiosResponse<T extends MethodOptions ? types.Schema$Empty : Readable>
  > {
    params = params || {};
    const _options = options || ({} as T);
    const rootUrl =
      _options.rootUrl || "https://rcsbusinessmessaging.googleapis.com/";
    const parameters = {
      options: Object.assign(
        {
          url: (
            rootUrl + "/v1/{+name}/capability:requestCapabilityCallback"
          ).replace(/([^:]\/)\/+/g, "$1"),
          method: "POST",
        },
        _options
      ),
      params,
      requiredParams: ["name"],
      pathParams: ["name"],
      context: this.context,
    };
    return await createAPIRequest(parameters);
  }
}

export class Resource$Phones$Dialogflowmessages {
  context: APIRequestContext;
  constructor(context: APIRequestContext) {
    this.context = context;
  }
  async create<T extends MethodOptions | StreamMethodOptions>(
    params?: types.Params$Resource$Phones$Dialogflowmessages$Create,
    options?: T
  ): Promise<
    GaxiosResponse<
      T extends MethodOptions ? types.Schema$DialogflowEvent : Readable
    >
  > {
    params = params || {};
    const _options: T = options || ({} as T);
    const rootUrl =
      _options.rootUrl || "https://rcsbusinessmessaging.googleapis.com/";
    const parameters = {
      options: Object.assign(
        {
          url: (rootUrl + "/v1/{+parent}/dialogflowMessages").replace(
            /([^:]\/)\/+/g,
            "$1"
          ),
          method: "POST",
        },
        _options
      ),
      params,
      requiredParams: ["parent"],
      pathParams: ["parent"],
      context: this.context,
    };
    return await createAPIRequest(parameters);
  }
}

export class Resource$Phones$Testers {
  context: APIRequestContext;
  constructor(context: APIRequestContext) {
    this.context = context;
  }
  async create<T extends MethodOptions | StreamMethodOptions>(
    params?: types.Params$Resource$Phones$Testers$Create,
    options?: MethodOptions | StreamMethodOptions
  ): Promise<
    GaxiosResponse<T extends MethodOptions ? types.Schema$Tester : Readable>
  > {
    params = params || {};
    const _options = options || ({} as T);
    const rootUrl =
      _options.rootUrl || "https://rcsbusinessmessaging.googleapis.com/";
    const parameters = {
      options: Object.assign(
        {
          url: (rootUrl + "/v1/{+parent}/testers").replace(
            /([^:]\/)\/+/g,
            "$1"
          ),
          method: "POST",
        },
        _options
      ),
      params,
      requiredParams: ["parent"],
      pathParams: ["parent"],
      context: this.context,
    };
    return await createAPIRequest(parameters);
  }
}

export class Resource$Users {
  context: APIRequestContext;
  constructor(context: APIRequestContext) {
    this.context = context;
  }
  async batchGet<T extends MethodOptions | StreamMethodOptions>(
    params?: types.Params$Resource$Users$Batchget,
    options?: MethodOptions | StreamMethodOptions
  ): Promise<
    GaxiosResponse<
      T extends MethodOptions ? types.Schema$BatchGetUsersResponse : Readable
    >
  > {
    params = params || {};
    const _options = options || ({} as T);
    const rootUrl =
      _options.rootUrl || "https://rcsbusinessmessaging.googleapis.com/";
    const parameters = {
      options: Object.assign(
        {
          url: (rootUrl + "/v1/users:batchGet").replace(/([^:]\/)\/+/g, "$1"),
          method: "POST",
        },
        _options
      ),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.context,
    };
    return await createAPIRequest(parameters);
  }
}
