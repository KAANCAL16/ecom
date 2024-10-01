    import { initializeApp } from "firebase/app";
    import { getAuth } from "firebase/auth";

    const firebaseConfig = {
    apiKey: "AIzaSyAcsTUaRWRfLA4mxDHDnCaDLZU_D-gZ2rk",
    authDomain: "e-com99-15737.firebaseapp.com",
    projectId: "e-com99-15737",
    storageBucket: "e-com99-15737.appspot.com",
    messagingSenderId: "802967479559",
    appId: "1:802967479559:web:4dfb0cf2cb3e28378691a2",
    };

    export const app = initializeApp(firebaseConfig);
    export const auth = getAuth(app);
