import { Auth } from "firebase/auth";

interface ChatRoomProps {
	auth: Auth;
}

export default function ChatRoom(props: ChatRoomProps) {
	const signOut = () => {
		props.auth.signOut();
	};

	return (
		<div>
			<h1>Hello</h1>
			<button onClick={signOut}>Sign Out</button>
		</div>
	);
}
