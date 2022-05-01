import {
	CollectionReference,
	DocumentData,
	getDocs,
	addDoc,
} from "firebase/firestore";

interface InboxProps {
	messageRef: CollectionReference<DocumentData>;
}

export default function Inbox() {
	return (
		<div className="bg-blue-800 rounded-lg text-white text-lg">
			<span>Hello World</span>
		</div>
	);
}

async function readMessages(messageRef: CollectionReference) {
	const query = await getDocs(messageRef);
}
