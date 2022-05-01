import { Auth, User } from "firebase/auth";
import { DocumentData, Firestore, serverTimestamp } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import "../index.css";
import Inbox from "./Inbox";
import MessageBox from "./MessageBox";
import TopBar from "./TopBar";

interface ChatRoomProps {
	auth: Auth;
	db: Firestore;
	user: User;
	recipient: string;
}

export default function ChatRoom(props: ChatRoomProps) {
	const sendMessage = (message: string) => {
		const userRef = collection(
			props.db,
			`users/${props.user.email}/${props.recipient}`
		);
		addDoc(userRef, {
			msg: message,
			timeStamp: serverTimestamp(),
			sender: props.user.email,
		});
	};

	const signOut = () => {
		props.auth.signOut();
	};

	const [sentMsgs, sentLoading, sentError] = useCollectionData(
		collection(props.db, `user/${props.user.email}/${props.recipient}`)
	);
	const [receivedMsgs, receivedLoading, receivedError] = useCollectionData(
		collection(props.db, `users/${props.recipient}/${props.user.email}`)
	);
	const allMsgs = sentMsgs?.concat(receivedMsgs as DocumentData[]);

	return (
		<div className="grid grid-rows-[1fr_8.5fr_1fr] gap-2 w-5/12">
			<TopBar onSignOut={signOut} />
			<Inbox />
			<MessageBox onSubmit={sendMessage} />
		</div>
	);
}
