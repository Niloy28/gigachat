import { Auth, User } from "firebase/auth";
import {
	DocumentData,
	Firestore,
	orderBy,
	query,
	QuerySnapshot,
	serverTimestamp,
} from "firebase/firestore";
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
	const recipientName = props.recipient.split("@")[0];
	const senderName = (props.user.email as string).split("@")[0];

	const roomName =
		senderName > recipientName
			? `room-${senderName}-${recipientName}`
			: `room-${recipientName}-${senderName}`;

	const userRef = collection(props.db, `${roomName}`);

	const sendMessage = (message: string) => {
		addDoc(userRef, {
			msg: message,
			timeStamp: serverTimestamp(),
			sender: props.user.email,
		});
	};

	const signOut = () => {
		props.auth.signOut();
	};

	const q = query(userRef, orderBy("timeStamp"));
	const [msgs, loading, error, msgSnapshot] = useCollectionData(q);
	console.log(error);

	if (msgs) {
		console.log(msgs[0].toString());
	}

	return (
		<div className="grid grid-rows-[1fr_8.5fr_1fr] gap-2 w-5/12">
			<TopBar onSignOut={signOut} />
			{!loading ? (
				<Inbox msgSnapshot={msgSnapshot as QuerySnapshot<DocumentData>} />
			) : (
				<TopBar onSignOut={signOut} />
			)}
			<MessageBox onSubmit={sendMessage} />
		</div>
	);
}
