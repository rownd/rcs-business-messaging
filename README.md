# @rownd/rcs-business-messaging
A RCS Business Messaging Library for Node

## Installation

```sh
npm install @rownd/rcs-business-messaging
```

## Usage

### Initialize

```typescript
import RbmApiHelper, { JWT } from '@rownd/rcs-business-messaging';

// Initialize the Google auth client
const authClient = new JWT(
  '<CLIENT_EMAIL>',
  void 0,
  '<PRIVATE_KEY>',
  [
    'https://www.googleapis.com/auth/rcsbusinessmessaging'
  ]
);

// Initialize RBM API helper
const rbmApiHelper = new RbmApiHelper(authClient);
```

### Send a message

```typescript
const msisdn = '+19199999999';

// Call checkCapability() to determine if the msisdn supports RCS
try {
  await rbmApiHelper.checkCapability(msisdn);
} catch (err) {
  if (err instanceof GaxiosError && err.response?.status === 404) {
    throw new Error('RCS not supported');
  }
  throw err;
}

const response = await rbmApiHelper.sendMessage({
  messageText: message,
  msisdn: msisdn,
  suggestions: [],
});
```