import React from "react";
import "./App.css";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import ChatRoom from "./components/ChatRoom";
import SignIn from "./components/SignIn";

const firebaseConfig = {
	apiKey: "AIzaSyCgEUcESi-nZ_RI3J1C5KWfWtIaMmGvvhI",
	authDomain: "gigachat-fc9d2.firebaseapp.com",
	projectId: "gigachat-fc9d2",
	storageBucket: "gigachat-fc9d2.appspot.com",
	messagingSenderId: "823171472462",
	appId: "1:823171472462:web:18b51937f6645f0ea6771f",
	measurementId: "G-VF5Q4EQWWM",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
	const [user] = useAuthState(auth);

	return (
		<div className="App w-screen h-screen flex items-center content-center justify-center">
			{user ? <ChatRoom auth={auth} /> : <SignIn auth={auth} />}
		</div>
	);
}

export default App;
