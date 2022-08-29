//IMPORTS
import './App.css';
import React from 'react'
import Routes from './routes';


import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBtMgz3gr81bJLTk8UQ7tqzt-Zcd8nps7Y",
  authDomain: "barbeiro-destinado-8562b.firebaseapp.com",
  projectId: "barbeiro-destinado-8562b",
  storageBucket: "barbeiro-destinado-8562b.appspot.com",
  messagingSenderId: "1016079130913",
  appId: "1:1016079130913:web:7dcbccd4edd2e5dc125e60",
  measurementId: "G-JY1QS07TT2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {

  async function getVideos(db) {
    const videos = collection(db, 'videos-aulas');
    const videos_aulas = await getDocs(videos, );
    const teste = videos_aulas.docs.map(doc => doc.data());
    console.log('teste', teste[0].url)

  }

  React.useEffect(() => {
    getVideos(db);
  })

  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;
