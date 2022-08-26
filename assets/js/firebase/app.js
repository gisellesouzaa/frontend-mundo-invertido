  //configuração basica baixada do projeto no Firestore Database 

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD2hOTrgf43lW5_2Apti6p6zuXCheB67lA",
    authDomain: "form-mundo-invertido.firebaseapp.com",
    projectId: "form-mundo-invertido",
    storageBucket: "form-mundo-invertido.appspot.com",
    messagingSenderId: "967657186010",
    appId: "1:967657186010:web:33dc996652b60bb6c37be3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // exportação devido o codigo principal estar em outro arquivo 'form-mundo-invertido.js':
  export default app;