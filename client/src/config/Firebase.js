import Firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAhBmi1QWYCOooEoo2xBylZgHifZU54lpU",
    authDomain: "rockship-blog.firebaseapp.com",
    databaseURL: "https://rockship-blog.firebaseio.com",
    projectId: "rockship-blog",
    storageBucket: "rockship-blog.appspot.com",
    messagingSenderId: "60966987020",
    appId: "1:60966987020:web:1e81236d313bcb60"
};

const fire = Firebase.initializeApp(firebaseConfig);
export default fire;
