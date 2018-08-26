import HeaderAndFooter from './headerAndFooter';
import UsersContacts from './userContacts';
import Router from "./router";

let headerAndFooter = new HeaderAndFooter('Contacts');
headerAndFooter.renderTemplate();

let usersContacts = new UsersContacts();
usersContacts.loadData();

let router = new Router();
router.run();
