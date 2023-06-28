const simpleParser = require('mailparser').simpleParser;

class Mailhog {
    constructor(configuration) {
        this.configuration = configuration;
    }

    getLastMessage() {
        return cy.request(this.configuration.baseUrl + '/api/v2/messages')
            .then(response => response.body)
            .then(response => {
                if (!response.items.length) {
                    throw new Error('No messages found in Mailhog');
                }

                return response.items[0].Raw.Data
            })
            .then(response => simpleParser(response).then(response => response.html))
            .then(response => {
                return {
                    contents: new DOMParser().parseFromString(response, 'text/html')
                }
            })
    }
}

module.exports = Mailhog;