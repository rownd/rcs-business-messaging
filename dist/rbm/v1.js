"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource$Users = exports.Resource$Phones$Testers = exports.Resource$Phones$Dialogflowmessages = exports.Resource$Phones$Capability = exports.Resource$Phones$Agentmessages = exports.Resource$Phones$Agentevents = exports.Resource$Phones = exports.Resource$Files = exports.Rcsbusinessmessaging = void 0;
const googleapis_common_1 = require("googleapis-common");
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
class Rcsbusinessmessaging {
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
exports.Rcsbusinessmessaging = Rcsbusinessmessaging;
class Resource$Files {
    constructor(context) {
        this.context = context;
    }
    create(params, options) {
        return __awaiter(this, void 0, void 0, function* () {
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
            return yield (0, googleapis_common_1.createAPIRequest)(parameters);
        });
    }
}
exports.Resource$Files = Resource$Files;
class Resource$Phones {
    constructor(context) {
        this.context = context;
        this.agentEvents = new Resource$Phones$Agentevents(this.context);
        this.agentMessages = new Resource$Phones$Agentmessages(this.context);
        this.capability = new Resource$Phones$Capability(this.context);
        this.dialogflowMessages = new Resource$Phones$Dialogflowmessages(this.context);
        this.testers = new Resource$Phones$Testers(this.context);
    }
    getCapabilities(params, options) {
        return __awaiter(this, void 0, void 0, function* () {
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
            return yield (0, googleapis_common_1.createAPIRequest)(parameters);
        });
    }
}
exports.Resource$Phones = Resource$Phones;
class Resource$Phones$Agentevents {
    constructor(context) {
        this.context = context;
    }
    create(params, options) {
        return __awaiter(this, void 0, void 0, function* () {
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
            return yield (0, googleapis_common_1.createAPIRequest)(parameters);
        });
    }
}
exports.Resource$Phones$Agentevents = Resource$Phones$Agentevents;
class Resource$Phones$Agentmessages {
    constructor(context) {
        this.context = context;
    }
    create(params, options) {
        return __awaiter(this, void 0, void 0, function* () {
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
            return yield (0, googleapis_common_1.createAPIRequest)(parameters);
        });
    }
    delete(params, options) {
        return __awaiter(this, void 0, void 0, function* () {
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
            return yield (0, googleapis_common_1.createAPIRequest)(parameters);
        });
    }
}
exports.Resource$Phones$Agentmessages = Resource$Phones$Agentmessages;
class Resource$Phones$Capability {
    constructor(context) {
        this.context = context;
    }
    requestCapabilityCallback(params, options) {
        return __awaiter(this, void 0, void 0, function* () {
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
            return yield (0, googleapis_common_1.createAPIRequest)(parameters);
        });
    }
}
exports.Resource$Phones$Capability = Resource$Phones$Capability;
class Resource$Phones$Dialogflowmessages {
    constructor(context) {
        this.context = context;
    }
    create(params, options) {
        return __awaiter(this, void 0, void 0, function* () {
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
            return yield (0, googleapis_common_1.createAPIRequest)(parameters);
        });
    }
}
exports.Resource$Phones$Dialogflowmessages = Resource$Phones$Dialogflowmessages;
class Resource$Phones$Testers {
    constructor(context) {
        this.context = context;
    }
    create(params, options) {
        return __awaiter(this, void 0, void 0, function* () {
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
            return yield (0, googleapis_common_1.createAPIRequest)(parameters);
        });
    }
}
exports.Resource$Phones$Testers = Resource$Phones$Testers;
class Resource$Users {
    constructor(context) {
        this.context = context;
    }
    batchGet(params, options) {
        return __awaiter(this, void 0, void 0, function* () {
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
            return yield (0, googleapis_common_1.createAPIRequest)(parameters);
        });
    }
}
exports.Resource$Users = Resource$Users;
//# sourceMappingURL=v1.js.map