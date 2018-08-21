const API_URL = 'http://easycode-js.herokuapp.com/Butenko_N/users';
let dataUsers = [];
const additionalOptions = [
  'Notes', 'Send message', 'Share contact', 'Add to favorites', 'Share my location', 'Block this caller'
];
const buttonsContent = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];
const options = [
  {option: 'message', class: 'glyphicon-comment'},
	{option: 'call', class: 'glyphicon-earphone'},
	{option: 'video', class: 'glyphicon-facetime-video'},
	{option: 'mail', class: 'glyphicon-envelope'}
];
const basicUserInfo = ['First Name', 'Last Name', 'Mobile phone', 'Email'];
const additionalUserInfo = [
  'add home phone', 'company', 'add address', 'add birthday', 'add social profile', 'add field'
];
