import { OAuth2Client } from "googleapis-common";
import { Rcsbusinessmessaging } from "../rbm/v1";
import { Schema$Capabilities, Schema$AgentMessage, Schema$AgentEvent, Schema$CarouselCard } from "../rbm/types";
import { Schema$Tester } from "../rbm/types";
import { Schema$BatchGetUsersResponse } from "../rbm/types";
declare interface SendMessageParams {
    msisdn: string;
    suggestions?: Suggestion[];
    messageText?: string;
    fileUrl?: string;
}
declare interface SendRichCardParams {
    msisdn: string;
    messageText: string;
    messageDescription: string;
    imageUrl: string;
    suggestions?: Suggestion[];
    height?: "TALL" | "MEDIUM" | "SHORT";
}
declare interface SendCarouselCardParams extends Schema$CarouselCard {
    msisdn: string;
}
declare type Suggestion = ReplySuggestion | ActionSuggestion;
declare interface ReplySuggestion {
    reply: {
        text: string;
        postbackData: any;
    };
}
declare interface ActionSuggestion {
    action: {
        text: string;
        postbackData: any;
        openUrlAction: {
            url: string;
        };
    };
}
export default class RbmApiHelper {
    rbmApi: Rcsbusinessmessaging;
    authClient: OAuth2Client;
    constructor(authClient: OAuth2Client);
    /**
     * Uses the RBM API to perform a synchronous capability check.
     * @param {string} msisdn The phone number in E.164 format.
     */
    checkCapability(msisdn: string, requestId?: string): Promise<Schema$Capabilities>;
    getUsers(msisdns: string): Promise<Schema$BatchGetUsersResponse>;
    /**
     * Uses the RMB API to stop the message from being delivered to msisdn.
     * @param {string} msisdn The phone number in E.164 format.
     * @param {string} messageId The identifier for the message that was sent.
     */
    revokeMessage(msisdn: string, messageId: string): Promise<Schema$AgentMessage>;
    sendTesterInvite(msisdn: string): Promise<Schema$Tester>;
    sendIsTypingMessage(msisdn: string): Promise<Schema$AgentEvent>;
    /**
     * Sends the device a rich card over RCS.
     * @param {object} params An object of parameters needed for a richcard.
     */
    sendRichCard(params: SendRichCardParams): Promise<Schema$AgentMessage>;
    sendCarouselCard(params: SendCarouselCardParams): Promise<Schema$AgentMessage>;
    /**
     * Uses the RBM API to send the device an RBM message.
     * @param {object} params An object of parameters needed for messaging.
     */
    sendMessage(params: SendMessageParams): Promise<Schema$AgentMessage>;
    sendReadMessage(msisdn: string, messageId: string): Promise<Schema$AgentEvent>;
}
export {};
