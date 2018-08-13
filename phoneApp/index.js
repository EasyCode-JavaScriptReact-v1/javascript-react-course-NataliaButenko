let headerAndFooter = new HeaderAndFooter('Contacts');
headerAndFooter.renderTemplate();

let usersContacts = new UsersContacts();
usersContacts.loadData();

let buttonKeypad = document.querySelector('a.Keypad');

buttonKeypad.addEventListener('click', function(event) {
  event.preventDefault();
  let keypad = new Keypad();
  keypad.renderKeypad();
});


let buttonEditContact = document.querySelector('a.Edit');

buttonEditContact.addEventListener('click', function(event) {
  event.preventDefault();
  let editContact = new EditContact();
  editContact.renderEditContact();
});

let buttonUser = document.querySelector('a.User');

buttonUser.addEventListener('click', function(event) {
  event.preventDefault();
/*  let user = new User();
  user.renderUser();*/
});

let buttonAddUser = document.querySelector('a.Add');

buttonAddUser.addEventListener('click', function(event) {
  event.preventDefault();
  let addUser = new AddUser();
  addUser.renderAddUser();
});

let buttonContacts = document.querySelector('a.Contacts');

buttonContacts.addEventListener('click', function(event) {
  event.preventDefault();
  let contacts = new UsersContacts();
  contacts.loadData();
});
