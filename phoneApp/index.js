let headerAndFooter = new HeaderAndFooter('Contacts');
headerAndFooter.renderTemplate();

let usersContacts = new UsersContacts();
usersContacts.loadData();

let router = new Router();
router.run();
