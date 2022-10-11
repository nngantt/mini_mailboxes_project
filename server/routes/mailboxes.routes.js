const UserController = require('../controllers/users.controller');
const MailBoxController = require('../controllers/mailboxes.controller');

module.exports = app => {
    app.post('/api/login', UserController.findUserWithEmailPassword);
    app.get('/api/private_mailboxes/:userId', MailBoxController.findMailboxesOfUser);
    app.get('/api/mailboxes', MailBoxController.findAllMailboxes);
    app.post('/api/mailboxes', MailBoxController.purchaseMailbox);
    // TODO 
    // Update one mailbox to another
    // POST /api/private_mailboxes/:user_id/:old_mailbox_id/:new_mailbox_id
}
