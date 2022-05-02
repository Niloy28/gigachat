import { QuerySnapshot } from "firebase/firestore";

interface InboxProps {
	msgSnapshot: QuerySnapshot;
}

export default function Inbox(props: InboxProps) {
	return (
		<div className="bg-blue-800 rounded-lg text-white text-lg">
			<ul>
				{props.msgSnapshot.docs.map((msg) => {
					return <li key={msg.id}>{msg.data().msg}</li>;
				})}
			</ul>
		</div>
	);
}
