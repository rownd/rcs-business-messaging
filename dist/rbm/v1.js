import { createAPIRequest, } from "googleapis-common";
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
    constructor(options, google) {
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
    constructor(context) {
        this.context = context;
    }
    async create(params, options) {
        params = params || {};
        const _options = options || {};
        const rootUrl = _options.rootUrl || "https://rcsbusinessmessaging.googleapis.com/";
        const parameters = {
            options: Object.assign({
                url: (rootUrl + "/v1/files").replace(/([^:]\/)\/+/g, "$1"),
                method: "POST",
            }, _options),
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
    constructor(context) {
        this.context = context;
        this.agentEvents = new Resource$Phones$Agentevents(this.context);
        this.agentMessages = new Resource$Phones$Agentmessages(this.context);
        this.capability = new Resource$Phones$Capability(this.context);
        this.dialogflowMessages = new Resource$Phones$Dialogflowmessages(this.context);
        this.testers = new Resource$Phones$Testers(this.context);
    }
    async getCapabilities(params, options) {
        params = params || {};
        const _options = options || {};
        const rootUrl = _options.rootUrl || "https://rcsbusinessmessaging.googleapis.com/";
        const parameters = {
            options: Object.assign({
                url: (rootUrl + "/v1/{+name}/capabilities").replace(/([^:]\/)\/+/g, "$1"),
                method: "GET",
            }, _options),
            params,
            requiredParams: ["name"],
            pathParams: ["name"],
            context: this.context,
        };
        return await createAPIRequest(parameters);
    }
}
export class Resource$Phones$Agentevents {
    constructor(context) {
        this.context = context;
    }
    async create(params, options) {
        params = params || {};
        const _options = options || {};
        const rootUrl = _options.rootUrl || "https://rcsbusinessmessaging.googleapis.com/";
        const parameters = {
            options: Object.assign({
                url: (rootUrl + "/v1/{+parent}/agentEvents").replace(/([^:]\/)\/+/g, "$1"),
                method: "POST",
            }, _options),
            params,
            requiredParams: ["parent"],
            pathParams: ["parent"],
            context: this.context,
        };
        return await createAPIRequest(parameters);
    }
}
export class Resource$Phones$Agentmessages {
    constructor(context) {
        this.context = context;
    }
    async create(params, options) {
        params = params || {};
        const _options = options || {};
        const rootUrl = _options.rootUrl || "https://rcsbusinessmessaging.googleapis.com/";
        const parameters = {
            options: Object.assign({
                url: (rootUrl + "/v1/{+parent}/agentMessages").replace(/([^:]\/)\/+/g, "$1"),
                method: "POST",
            }, _options),
            params,
            requiredParams: ["parent"],
            pathParams: ["parent"],
            context: this.context,
        };
        return await createAPIRequest(parameters);
    }
    async delete(params, options) {
        params = params || {};
        const _options = options || {};
        const rootUrl = _options.rootUrl || "https://rcsbusinessmessaging.googleapis.com/";
        const parameters = {
            options: Object.assign({
                url: (rootUrl + "/v1/{+name}").replace(/([^:]\/)\/+/g, "$1"),
                method: "DELETE",
            }, _options),
            params,
            requiredParams: ["name"],
            pathParams: ["name"],
            context: this.context,
        };
        return await createAPIRequest(parameters);
    }
}
export class Resource$Phones$Capability {
    constructor(context) {
        this.context = context;
    }
    async requestCapabilityCallback(params, options) {
        params = params || {};
        const _options = options || {};
        const rootUrl = _options.rootUrl || "https://rcsbusinessmessaging.googleapis.com/";
        const parameters = {
            options: Object.assign({
                url: (rootUrl + "/v1/{+name}/capability:requestCapabilityCallback").replace(/([^:]\/)\/+/g, "$1"),
                method: "POST",
            }, _options),
            params,
            requiredParams: ["name"],
            pathParams: ["name"],
            context: this.context,
        };
        return await createAPIRequest(parameters);
    }
}
export class Resource$Phones$Dialogflowmessages {
    constructor(context) {
        this.context = context;
    }
    async create(params, options) {
        params = params || {};
        const _options = options || {};
        const rootUrl = _options.rootUrl || "https://rcsbusinessmessaging.googleapis.com/";
        const parameters = {
            options: Object.assign({
                url: (rootUrl + "/v1/{+parent}/dialogflowMessages").replace(/([^:]\/)\/+/g, "$1"),
                method: "POST",
            }, _options),
            params,
            requiredParams: ["parent"],
            pathParams: ["parent"],
            context: this.context,
        };
        return await createAPIRequest(parameters);
    }
}
export class Resource$Phones$Testers {
    constructor(context) {
        this.context = context;
    }
    async create(params, options) {
        params = params || {};
        const _options = options || {};
        const rootUrl = _options.rootUrl || "https://rcsbusinessmessaging.googleapis.com/";
        const parameters = {
            options: Object.assign({
                url: (rootUrl + "/v1/{+parent}/testers").replace(/([^:]\/)\/+/g, "$1"),
                method: "POST",
            }, _options),
            params,
            requiredParams: ["parent"],
            pathParams: ["parent"],
            context: this.context,
        };
        return await createAPIRequest(parameters);
    }
}
export class Resource$Users {
    constructor(context) {
        this.context = context;
    }
    async batchGet(params, options) {
        params = params || {};
        const _options = options || {};
        const rootUrl = _options.rootUrl || "https://rcsbusinessmessaging.googleapis.com/";
        const parameters = {
            options: Object.assign({
                url: (rootUrl + "/v1/users:batchGet").replace(/([^:]\/)\/+/g, "$1"),
                method: "POST",
            }, _options),
            params,
            requiredParams: [],
            pathParams: [],
            context: this.context,
        };
        return await createAPIRequest(parameters);
    }
}
//# sourceMappingURL=v1.js.map