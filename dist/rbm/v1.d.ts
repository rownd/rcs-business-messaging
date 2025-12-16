import { GaxiosResponse, APIRequestContext, GoogleConfigurable, GlobalOptions, MethodOptions, StreamMethodOptions } from "googleapis-common";
import * as types from "./types";
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
export declare class Rcsbusinessmessaging {
    files: Resource$Files;
    phones: Resource$Phones;
    users: Resource$Users;
    context: APIRequestContext;
    constructor(options: GlobalOptions, google?: GoogleConfigurable);
}
export declare class Resource$Files {
    context: APIRequestContext;
    constructor(context: APIRequestContext);
    create<T extends MethodOptions | StreamMethodOptions>(params?: types.Params$Resource$Files$Create, options?: MethodOptions | StreamMethodOptions): Promise<GaxiosResponse<T extends MethodOptions ? types.Schema$File : Readable>>;
}
export declare class Resource$Phones {
    context: APIRequestContext;
    agentEvents: Resource$Phones$Agentevents;
    agentMessages: Resource$Phones$Agentmessages;
    capability: Resource$Phones$Capability;
    dialogflowMessages: Resource$Phones$Dialogflowmessages;
    testers: Resource$Phones$Testers;
    constructor(context: APIRequestContext);
    getCapabilities<T extends MethodOptions | StreamMethodOptions>(params?: types.Params$Resource$Phones$Getcapabilities, options?: MethodOptions | StreamMethodOptions): Promise<GaxiosResponse<T extends MethodOptions ? types.Schema$Capabilities : Readable>>;
}
export declare class Resource$Phones$Agentevents {
    context: APIRequestContext;
    constructor(context: APIRequestContext);
    create<T extends MethodOptions | StreamMethodOptions>(params?: types.Params$Resource$Phones$Agentevents$Create, options?: MethodOptions | StreamMethodOptions): Promise<GaxiosResponse<T extends MethodOptions ? types.Schema$AgentEvent : Readable>>;
}
export declare class Resource$Phones$Agentmessages {
    context: APIRequestContext;
    constructor(context: APIRequestContext);
    create<T extends MethodOptions | StreamMethodOptions>(params?: types.Params$Resource$Phones$Agentmessages$Create, options?: MethodOptions | StreamMethodOptions): Promise<GaxiosResponse<T extends MethodOptions ? types.Schema$AgentMessage : Readable>>;
    delete<T extends MethodOptions | StreamMethodOptions>(params?: types.Params$Resource$Phones$Agentmessages$Delete, options?: MethodOptions | StreamMethodOptions): Promise<GaxiosResponse<T extends MethodOptions ? types.Schema$Empty : Readable>>;
}
export declare class Resource$Phones$Capability {
    context: APIRequestContext;
    constructor(context: APIRequestContext);
    requestCapabilityCallback<T extends MethodOptions | StreamMethodOptions>(params?: types.Params$Resource$Phones$Capability$Requestcapabilitycallback, options?: MethodOptions | StreamMethodOptions): Promise<GaxiosResponse<T extends MethodOptions ? types.Schema$Empty : Readable>>;
}
export declare class Resource$Phones$Dialogflowmessages {
    context: APIRequestContext;
    constructor(context: APIRequestContext);
    create<T extends MethodOptions | StreamMethodOptions>(params?: types.Params$Resource$Phones$Dialogflowmessages$Create, options?: T): Promise<GaxiosResponse<T extends MethodOptions ? types.Schema$DialogflowEvent : Readable>>;
}
export declare class Resource$Phones$Testers {
    context: APIRequestContext;
    constructor(context: APIRequestContext);
    create<T extends MethodOptions | StreamMethodOptions>(params?: types.Params$Resource$Phones$Testers$Create, options?: MethodOptions | StreamMethodOptions): Promise<GaxiosResponse<T extends MethodOptions ? types.Schema$Tester : Readable>>;
}
export declare class Resource$Users {
    context: APIRequestContext;
    constructor(context: APIRequestContext);
    batchGet<T extends MethodOptions | StreamMethodOptions>(params?: types.Params$Resource$Users$Batchget, options?: MethodOptions | StreamMethodOptions): Promise<GaxiosResponse<T extends MethodOptions ? types.Schema$BatchGetUsersResponse : Readable>>;
}
