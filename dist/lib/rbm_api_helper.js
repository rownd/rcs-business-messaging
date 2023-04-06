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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const googleapis_1 = require("googleapis");
const nanoid_1 = __importDefault(require("nanoid"));
const v1_1 = require("../rbm/v1");
class RbmApiHelper {
    constructor(authClient) {
        // configure a JWT auth client
        this.authClient = authClient;
        // initialize the RBM API
        this.rbmApi = new v1_1.Rcsbusinessmessaging({}, googleapis_1.google);
    }
    /**
     * Uses the RBM API to perform a synchronous capability check.
     * @param {string} msisdn The phone number in E.164 format.
     */
    checkCapability(msisdn, requestId) {
        return __awaiter(this, void 0, void 0, function* () {
            requestId = requestId || (0, nanoid_1.default)();
            // set the params
            const params = {
                name: "phones/" + msisdn,
                requestId: requestId,
                auth: this.authClient,
            };
            const result = yield this.rbmApi.phones.getCapabilities(params, {});
            return result.data;
        });
    }
    getUsers(msisdns) {
        return __awaiter(this, void 0, void 0, function* () {
            // set the params
            let params = {
                auth: this.authClient,
                resource: {
                    users: msisdns,
                },
            };
            const result = yield this.rbmApi.users.batchGet(params, {});
            return result.data;
        });
    }
    /**
     * Uses the RMB API to stop the message from being delivered to msisdn.
     * @param {string} msisdn The phone number in E.164 format.
     * @param {string} messageId The identifier for the message that was sent.
     */
    revokeMessage(msisdn, messageId) {
        return __awaiter(this, void 0, void 0, function* () {
            // Setup the parameters for the API call
            const params = {
                name: "phones/" + msisdn + "/agentMessages/" + messageId,
                auth: this.authClient,
            };
            // Remove the message from the delivery queue
            const result = yield this.rbmApi.phones.agentMessages.create(params, {});
            return result.data;
        });
    }
    sendTesterInvite(msisdn) {
        return __awaiter(this, void 0, void 0, function* () {
            // set the params
            let params = { parent: "phones/" + msisdn, auth: this.authClient };
            // send a tester request
            const result = yield this.rbmApi.phones.testers.create(params, {});
            return result.data;
        });
    }
    sendIsTypingMessage(msisdn) {
        return __awaiter(this, void 0, void 0, function* () {
            // generate a random message id for this event
            let eventId = (0, nanoid_1.default)();
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
            const result = yield this.rbmApi.phones.agentEvents.create(params, options);
            return result.data;
        });
    }
    /**
     * Sends the device a rich card over RCS.
     * @param {object} params An object of parameters needed for a richcard.
     */
    sendRichCard(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const imageUrl = params.imageUrl;
            const msisdn = params.msisdn;
            // Generate a random message id for this message
            const messageId = (0, nanoid_1.default)();
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
            const result = yield this.rbmApi.phones.agentMessages.create(apiParams, options);
            return result.data;
        });
    }
    sendCarouselCard(params) {
        return __awaiter(this, void 0, void 0, function* () {
            let cardWidth = params.cardWidth || "MEDIUM";
            let cardContents = params.cardContents;
            // msisdn to send the message to
            let msisdn = params.msisdn;
            // generate a random message id for this message
            let messageId = (0, nanoid_1.default)();
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
            const response = yield this.rbmApi.phones.agentMessages.create(apiParams, options);
            return response.data;
        });
    }
    /**
     * Uses the RBM API to send the device an RBM message.
     * @param {object} params An object of parameters needed for messaging.
     */
    sendMessage(params) {
        return __awaiter(this, void 0, void 0, function* () {
            // Generate a random message id for this message
            const messageId = (0, nanoid_1.default)();
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
            const result = yield this.rbmApi.phones.agentMessages.create(apiParams, options);
            return result.data;
        });
    }
    sendReadMessage(msisdn, messageId) {
        return __awaiter(this, void 0, void 0, function* () {
            // Generate a random message id for this event
            const eventId = (0, nanoid_1.default)();
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
            const result = yield this.rbmApi.phones.agentEvents.create(params, options);
            return result.data;
        });
    }
}
exports.default = RbmApiHelper;
//# sourceMappingURL=rbm_api_helper.js.map