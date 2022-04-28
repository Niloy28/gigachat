import { Auth } from "firebase/auth";
import "../index.css";
import Inbox from "./Inbox";
import MessageBox from "./MessageBox";
import TopBar from "./TopBar";

interface ChatRoomProps {
	auth: Auth;
}

export default function ChatRoom(props: ChatRoomProps) {
	const signOut = () => {
		props.auth.signOut();
	};

	return (
		<div className="grid grid-rows-[1fr_8.5fr_1fr] gap-2 w-5/12">
			<TopBar onSignOut={signOut} />
			<Inbox />
			<MessageBox />
		</div>
	);
}
