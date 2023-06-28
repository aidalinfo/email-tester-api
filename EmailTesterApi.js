const Mailcatcher = require('./EmailService/Mailcatcher');
const Mailhog = require('./EmailService/Mailhog');

class EmailTesterApi {
    constructor(service, configuration = {}) {
        if (service === 'mailcatcher') {
            this.emailService = new Mailcatcher(configuration);
        }

        if (service === 'mailhog') {
            this.emailService = new Mailhog(configuration);
        }
    }

    getLastMessage() {
        return this.emailService.getLastMessage();
    }
}

module.exports = EmailTesterApi;