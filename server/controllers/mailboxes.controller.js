const Mailbox = require('../models/mailbox.model');

module.exports.findMailboxesOfUser = (req, res) => {
	Mailbox.find({ 
        userId: req.params.userId,
    })
    .then((mailboxes) => {
        res.json({ mailboxes })
    })
    .catch((err) => {
        res.json({ message: 'Cannot retrieve mailbox data.', error: err});
    });
}

module.exports.findAllMailboxes = (req, res) => {
	Mailbox.find()
		.then((mailboxes) => {
            res.json({ mailboxes })
		})
		.catch((err) => {
				res.json({ message: 'Cannot retrieve mailbox data.', error: err});
		});
}


module.exports.purchaseMailbox = (req, res) => {
	Mailbox.findOneAndUpdate(
			{ _id: req.body.mailboxId },
			req.body,
			{ new: true, runValidators: true }
	)
			.then(updatedMailbox => {
					res.json({ mailbox: updatedMailbox })
			})
			.catch((err) => {
					res.json({ message: 'Something went wrong', error: err })
			});
}