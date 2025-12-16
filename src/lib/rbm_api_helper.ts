import { google } from "googleapis";
import { OAuth2Client } from "googleapis-common";
import { nanoid } from 'nanoid'

import { Rcsbusinessmessaging } from "../rbm/v1";
import {
  Schema$Capabilities,
  Schema$AgentMessage,
  Schema$AgentEvent,
  Schema$CarouselCard,
} from "../rbm/types";
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
  // RBM API library reference object
  rbmApi: Rcsbusinessmessaging;

  // JWT cloud authentication reference object
  authClient: OAuth2Client;

  constructor(authClient: OAuth2Client) {
    // configure a JWT auth client
    this.authClient = authClient;

    // initialize the RBM API
    this.rbmApi = new Rcsbusinessmessaging({}, google);
  }

  /**
   * Uses the RBM API to perform a synchronous capability check.
   * @param {string} msisdn The phone number in E.164 format.
   */
  async checkCapability(
    msisdn: string,
    requestId?: string
  ): Promise<Schema$Capabilities> {
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

  async getUsers(msisdns: string): Promise<Schema$BatchGetUsersResponse> {
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
  async revokeMessage(
    msisdn: string,
    messageId: string
  ): Promise<Schema$AgentMessage> {
    // Setup the parameters for the API call
    const params = {
      name: "phones/" + msisdn + "/agentMessages/" + messageId,
      auth: this.authClient,
    };

    // Remove the message from the delivery queue
    const result = await this.rbmApi.phones.agentMessages.create(params, {});
    return result.data;
  }

  async sendTesterInvite(msisdn: string): Promise<Schema$Tester> {
    // set the params
    let params = { parent: "phones/" + msisdn, auth: this.authClient };

    // send a tester request
    const result = await this.rbmApi.phones.testers.create(params, {});
    return result.data;
  }

  async sendIsTypingMessage(msisdn: string): Promise<Schema$AgentEvent> {
    // generate a random message id for this event
    let eventId = nanoid();

    // create the JSON message payload to send
    let options: any = {
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
  async sendRichCard(params: SendRichCardParams): Promise<Schema$AgentMessage> {
    const imageUrl = params.imageUrl;
    const msisdn = params.msisdn;

    // Generate a random message id for this message
    const messageId = nanoid();

    // Create the JSON message payload to send
    const options: any = {
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
    const result = await this.rbmApi.phones.agentMessages.create(
      apiParams,
      options
    );
    return result.data;
  }

  async sendCarouselCard(
    params: SendCarouselCardParams
  ): Promise<Schema$AgentMessage> {
    let cardWidth = params.cardWidth || "MEDIUM";
    let cardContents = params.cardContents;

    // msisdn to send the message to
    let msisdn = params.msisdn;

    // generate a random message id for this message
    let messageId = nanoid();

    // create the JSON message payload to send
    let options: any = {
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
    const response = await this.rbmApi.phones.agentMessages.create(
      apiParams,
      options
    );
    return response.data;
  }

  /**
   * Uses the RBM API to send the device an RBM message.
   * @param {object} params An object of parameters needed for messaging.
   */
  async sendMessage(params: SendMessageParams): Promise<Schema$AgentMessage> {
    // Generate a random message id for this message
    const messageId = nanoid();

    // Get the message text and msisdn from the parameters
    const messageText = params.messageText;
    const msisdn = params.msisdn;

    // Create the JSON message payload to send
    const options: any = {
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
    const result = await this.rbmApi.phones.agentMessages.create(
      apiParams,
      options
    );
    return result.data;
  }

  async sendReadMessage(
    msisdn: string,
    messageId: string
  ): Promise<Schema$AgentEvent> {
    // Generate a random message id for this event
    const eventId = nanoid();

    // Create the JSON message payload to send
    const options: any = {
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
