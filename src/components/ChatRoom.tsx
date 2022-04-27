import { Auth } from "firebase/auth";
import "../index.css";
import TopBar from "./TopBar";

interface ChatRoomProps {
	auth: Auth;
}

export default function ChatRoom(props: ChatRoomProps) {
	const signOut = () => {
		props.auth.signOut();
	};

	return (
		<div className="h-10/12 w-8/12 flex">
			<TopBar onSignOut={signOut} />
		</div>
	);
}
