This package provides a unified API to access messages in SMTP testing software like Mailhog and Mailcatcher. This is intended to be used with Cypress.

## Installation
```
npm install --save-dev @michielgerritsen/email-tester-api
```

## Configuration

## Mailhog
```js
const emailApi = new EmailTesterApi('mailhog', {
    baseUrl: 'https://mailhog.test/'
});
```

## Mailcatcher
```js
const emailApi = new EmailTesterApi('mailcatcher', {
    baseUrl: 'https://mailcatcher.test/'
});
```

# Usage

When you have an initialized `emailApi` object, you can access the last message like this:

```
const message = await emailApi.getLastMessage();
```

This will return a `DomDocument` object. This allows you to access the contents of the message like this:

```js
message.contents.querySelector('a[target="_blank"]').href
```