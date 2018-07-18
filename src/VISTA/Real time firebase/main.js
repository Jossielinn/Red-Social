var tblUsers = document.getElementById('tbl_users_list');
var databaseRef = firebase.database().ref('users/');

function enviarDatosfirebase(event) {
  event.preventDefault();
  refconvalidaciones.push({
    post: event.target.post
  });
}