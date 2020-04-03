jQuery(document).ready(function() {
	$("#actividadesNavbar").addClass("active");
});

// Initialize Firebase
var config = {
apiKey: "AIzaSyD03G77hqsICi7lKAMzzvyOkfxDmBg0xw4",
authDomain: "webasodecsj.firebaseapp.com",
databaseURL: "https://webasodecsj.firebaseio.com",
projectId: "webasodecsj",
storageBucket: "webasodecsj.appspot.com",
messagingSenderId: "595397153077"
};
firebase.initializeApp(config);
var database = firebase.database()

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    $("#account").html(user.email);
  } else {
    window.location.replace("login.html");
  }
});
