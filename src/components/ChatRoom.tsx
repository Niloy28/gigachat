import { Auth, User } from "firebase/auth";
import { Firestore } from "firebase/firestore";
import { doc, setDoc, getDocs, collection } from "firebase/firestore";
import "../index.css";
import Inbox from "./Inbox";
import MessageBox from "./MessageBox";
import TopBar from "./TopBar";

interface ChatRoomProps {
	auth: Auth;
	db: Firestore;
	user: User;
}

export default function ChatRoom(props: ChatRoomProps) {
	const setMessage = (message: string) => {
		const userRef = doc(props.db, `users/${props.user.email}`);
		setDoc(userRef, { msg: message }, { merge: true });
	};

	const signOut = () => {
		props.auth.signOut();
	};

	return (
		<div className="grid grid-rows-[1fr_8.5fr_1fr] gap-2 w-5/12">
			<TopBar onSignOut={signOut} />
			<Inbox />
			<MessageBox onSubmit={setMessage} />
		</div>
	);
}
