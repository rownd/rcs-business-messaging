import { google } from "googleapis";
import { nanoid } from 'nanoid';
import { Rcsbusinessmessaging } from "../rbm/v1.js";
export default class RbmApiHelper {
    constructor(authClient) {
        // configure a JWT auth client
        this.authClient = authClient;
        // initialize the RBM API
        this.rbmApi = new Rcsbusinessmessaging({}, google);
    }
    /**
     * Uses the RBM API to perform a synchronous capability check.
     * @param {string} msisdn The phone number in E.164 format.
     */
    async checkCapability(msisdn, requestId) {
        requestId = requestId || nanoid();
        // set the params
        const params = {
            name: "phones/" + msisdn,
            requestId: requestId,
            auth: this.authClient,
        };
        const result = await this.rbmApi.phones.getCapabilities(params, {});
        return result.data;
    }
    async getUsers(msisdns) {
        // set the params
        let params = {
            auth: this.authClient,
            resource: {
                users: msisdns,
            },
        };
        const result = await this.rbmApi.users.batchGet(params, {});
        return result.data;
    }
    /**
     * Uses the RMB API to stop the message from being delivered to msisdn.
     * @param {string} msisdn The phone number in E.164 format.
     * @param {string} messageId The identifier for the message that was sent.
     */
    async revokeMessage(msisdn, messageId) {
        // Setup the parameters for the API call
        const params = {
            name: "phones/" + msisdn + "/agentMessages/" + messageId,
            auth: this.authClient,
        };
        // Remove the message from the delivery queue
        const result = await this.rbmApi.phones.agentMessages.create(params, {});
        return result.data;
    }
    async sendTesterInvite(msisdn) {
        // set the params
        let params = { parent: "phones/" + msisdn, auth: this.authClient };
        // send a tester request
        const result = await this.rbmApi.phones.testers.create(params, {});
        return result.data;
    }
    async sendIsTypingMessage(msisdn) {
        // generate a random message id for this event
        let eventId = nanoid();
        // create the JSON message payload to send
        let options = {
            eventType: "IS_TYPING",
        };
        // setup the parameters for the API call
        let params = {
            parent: "phones/" + msisdn,
            eventId: eventId,
            auth: this.authClient,
            resource: options, // POST body
        };
        // send the client the message
        const result = await this.rbmApi.phones.agentEvents.create(params, options);
        return result.data;
    }
    /**
     * Sends the device a rich card over RCS.
     * @param {object} params An object of parameters needed for a richcard.
     */
    async sendRichCard(params) {
        const imageUrl = params.imageUrl;
        const msisdn = params.msisdn;
        // Generate a random message id for this message
        const messageId = nanoid();
        // Create the JSON message payload to send
        const options = {
            contentMessage: {
                richCard: {
                    standaloneCard: {
                        cardOrientation: "VERTICAL",
                        cardContent: {
                            media: {
                                height: params.height || "TALL",
                                contentInfo: {
                                    fileUrl: imageUrl,
                                    forceRefresh: false,
                                },
                            },
                            title: params.messageText,
                            description: params.messageDescription,
                        },
                    },
                },
            },
        };
        // Add suggested replies if they exist
        if (params.suggestions && params.suggestions.length) {
            options.contentMessage.richCard.standaloneCard.cardContent.suggestions =
                params.suggestions;
        }
        // Setup the parameters for the API call
        const apiParams = {
            parent: "phones/" + msisdn,
            messageId,
            auth: this.authClient,
            resource: options, // POST body
        };
        // Send the client the message
        const result = await this.rbmApi.phones.agentMessages.create(apiParams, options);
        return result.data;
    }
    async sendCarouselCard(params) {
        let cardWidth = params.cardWidth || "MEDIUM";
        let cardContents = params.cardContents;
        // msisdn to send the message to
        let msisdn = params.msisdn;
        // generate a random message id for this message
        let messageId = nanoid();
        // create the JSON message payload to send
        let options = {
            contentMessage: {
                richCard: {
                    carouselCard: {
                        cardWidth: cardWidth,
                        cardContents: cardContents,
                    },
                },
            },
        };
        // setup the parameters for the API call
        let apiParams = {
            parent: "phones/" + msisdn,
            messageId: messageId,
            auth: this.authClient,
            resource: options, // POST body
        };
        // send the client the message
        const response = await this.rbmApi.phones.agentMessages.create(apiParams, options);
        return response.data;
    }
    /**
     * Uses the RBM API to send the device an RBM message.
     * @param {object} params An object of parameters needed for messaging.
     */
    async sendMessage(params) {
        // Generate a random message id for this message
        const messageId = nanoid();
        // Get the message text and msisdn from the parameters
        const messageText = params.messageText;
        const msisdn = params.msisdn;
        // Create the JSON message payload to send
        const options = {
            contentMessage: {},
        };
        // Add text if it exists
        if (messageText) {
            options.contentMessage.text = messageText;
        }
        // Add suggested replies if they exist
        if (params.suggestions && params.suggestions.length > 0) {
            options.contentMessage.suggestions = params.suggestions;
        }
        // Add an image if a media item exists
        if (params.fileUrl) {
            options.contentMessage.contentInfo = {
                fileUrl: params.fileUrl,
            };
        }
        // Setup the parameters for the API call
        const apiParams = {
            parent: "phones/" + msisdn,
            messageId: messageId,
            auth: this.authClient,
            resource: options, // POST body
        };
        // Send the client the message
        const result = await this.rbmApi.phones.agentMessages.create(apiParams, options);
        return result.data;
    }
    async sendReadMessage(msisdn, messageId) {
        // Generate a random message id for this event
        const eventId = nanoid();
        // Create the JSON message payload to send
        const options = {
            eventType: "READ",
            messageId: messageId,
        };
        // Setup the parameters for the API call
        const params = {
            parent: "phones/" + msisdn,
            eventId: eventId,
            auth: this.authClient,
            resource: options, // POST body
        };
        // Send the client the message
        const result = await this.rbmApi.phones.agentEvents.create(params, options);
        return result.data;
    }
}
//# sourceMappingURL=rbm_api_helper.js.map