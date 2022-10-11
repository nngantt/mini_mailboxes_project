# Mini Mailboxes web project

## How to create my database
###Go into mongodb shell and run the following commands:
```
use mini_mailboxes

 db.users.insertOne({ name: 'Admin', email: 'admin@test.com', password: 'adminpass', role: 'admin' });

 db.mailboxes.insertOne({ size: 'small' });
 db.mailboxes.insertOne({ size: 'small' });
 db.mailboxes.insertOne({ size: 'small' });
 db.mailboxes.insertOne({ size: 'small' });
 db.mailboxes.insertOne({ size: 'small' });
 db.mailboxes.insertOne({ size: 'small' });
 db.mailboxes.insertOne({ size: 'small' });
 db.mailboxes.insertOne({ size: 'small' });
 db.mailboxes.insertOne({ size: 'small' });
 db.mailboxes.insertOne({ size: 'small' });
 db.mailboxes.insertOne({ size: 'small' });
 db.mailboxes.insertOne({ size: 'small' });
 db.mailboxes.insertOne({ size: 'small' });
 db.mailboxes.insertOne({ size: 'small' });
 db.mailboxes.insertOne({ size: 'small' });
 db.mailboxes.insertOne({ size: 'small' });
 db.mailboxes.insertOne({ size: 'small' });
 db.mailboxes.insertOne({ size: 'small' });
 db.mailboxes.insertOne({ size: 'small' });
 db.mailboxes.insertOne({ size: 'small' });

 db.mailboxes.insertOne({ size: 'large' });
 db.mailboxes.insertOne({ size: 'large' });
```

## Go to client folder and run command
```
npm run start
```

## Go to server folder and run command
```
node server.js
```

