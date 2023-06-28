class Mailcatcher {
    constructor(configuration) {
        this.configuration = configuration;
    }

    getLastMessage() {
        return cy.request(this.configuration.baseUrl + '/messages')
            .then((response) => {
                const body = response.body;
                if (!body.length) {
                    throw new Error('No messages found in Mailcatcher');
                }

                const message = body[body.length - 1];
                return cy.request(this.configuration.baseUrl + '/messages/' + message.id + '.html')
                    .then(response => response.body)
                    .then(response => {
                        return {
                            contents: new DOMParser().parseFromString(response, 'text/html')
                        }
                    });
            })
    }
}

module.exports = Mailcatcher;