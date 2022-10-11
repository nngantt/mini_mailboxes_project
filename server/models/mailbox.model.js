const mongoose = require('mongoose');

const MailboxSchema = new mongoose.Schema({
    size: {
        type: String
    },
    pinNumber: {
        type: String
    },
    userId: {
        type: String
    }
}, {
    timestamps: true,
});

const Mailbox = mongoose.model('Mailbox', MailboxSchema);

module.exports = Mailbox;