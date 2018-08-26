export const API_URL = 'http://easycode-js.herokuapp.com/Butenko_N/users';
export let data = {users: []};
export const additionalOptions = [
  'Notes', 'Send message', 'Share contact', 'Add to favorites', 'Share my location', 'Block this caller'
];
export const buttonsContent = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];
export const options = [
  {option: 'message', class: 'glyphicon-comment'},
	{option: 'call', class: 'glyphicon-earphone'},
	{option: 'video', class: 'glyphicon-facetime-video'},
	{option: 'mail', class: 'glyphicon-envelope'}
];
export const basicUserInfo = [
  {placeholder: 'First Name', fieldName: 'firstName'},
  {placeholder: 'Last Name', fieldName: 'lastName'},
  {placeholder: 'Mobile phone', fieldName: 'phone'},
  {placeholder: 'Email', fieldName: 'email'}
];
export const additionalUserInfo = [
  {placeholder: 'add home phone', fieldName: 'addHomePhone'},
  {placeholder: 'company', fieldName: 'company'},
  {placeholder: 'add address', fieldName: 'addAddres'},
  {placeholder: 'add birthday', fieldName: 'addBirthday'},
  {placeholder: 'add social profile', fieldName: 'addSocialProfile'},
  {placeholder: 'add field', fieldName: 'addField'}
];
