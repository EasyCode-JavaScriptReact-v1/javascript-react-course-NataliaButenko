class Router {
  constructor() {
    this.buttonKeypad = document.querySelector('a.Keypad');
    this.buttonEditContact = document.querySelector('a.Edit');
    this.buttonUser = document.querySelector('a.User');
    this.buttonAddUser = document.querySelector('a.Add');
    this.buttonContacts = document.querySelector('a.Contacts');
  };

  run() {
     this.buttonKeypad.addEventListener('click', function(event) {
       event.preventDefault();
       let keypad = new Keypad();
       keypad.renderKeypad();
     });

     this.buttonEditContact.addEventListener('click', function(event) {
       event.preventDefault();
       /*  let editContact = new EditContact();
         editContact.renderEditContact();*/
     });

     this.buttonUser.addEventListener('click', function(event) {
       event.preventDefault();
       /*  let user = new User();
         user.renderUser();*/
     });

     this.buttonAddUser.addEventListener('click', function(event) {
       event.preventDefault();
       let addUser = new AddUser();
       addUser.renderAddUser();
     });

     this.buttonContacts.addEventListener('click', function(event) {
       event.preventDefault();
       let contacts = new UsersContacts();
       contacts.loadData();
     });
  };
};
