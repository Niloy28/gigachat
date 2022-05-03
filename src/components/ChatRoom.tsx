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
import { Watch } from "react-loader-spinner";
import "../index.css";
import Inbox from "./Inbox";
import MessageBox from "./MessageBox";
import TopBar from "./TopBar";

interface ChatRoomProps {
	auth: Auth;
	db: Firestore;
	user: User;
	recipient: string;
	displayName: string;
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
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [msgs, loading, error, msgSnapshot] = useCollectionData(q);
	console.log(error);

	return (
		<div className="grid grid-rows-[1fr_8.5fr_1fr] gap-1 w-5/12">
			<TopBar
				displayName={
					props.displayName === "" ? recipientName : props.displayName
				}
				onSignOut={signOut}
			/>
			{!loading ? (
				<Inbox
					msgSnapshot={msgSnapshot as QuerySnapshot<DocumentData>}
					senderEmail={props.user.email as string}
				/>
			) : (
				<div className="flex items-center justify-center">
					<Watch color="blue" height={100} width={100} />
				</div>
			)}
			<MessageBox onSubmit={sendMessage} />
		</div>
	);
}
