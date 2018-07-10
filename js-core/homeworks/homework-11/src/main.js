let user = {
  userName: 'userName'
};

let admin = {
  emailAdmin: 'adminadmin@gmail.com'
};

let guest = {
  guestName: 'guestName'
};

let database = {
  passwordDatabase: 'password-database',
  informationAboutUsers: [],
  registerGuest(obj) {
    this.informationAboutUsers.push(obj);
  }
};

user.__proto__ = admin;
console.log(user.emailAdmin);

admin.__proto__ = database;
console.log(admin.passwordDatabase);

guest.__proto__ = user;

database.registerGuest(guest);
database.registerGuest(guest);

console.log(guest.informationAboutUsers);
