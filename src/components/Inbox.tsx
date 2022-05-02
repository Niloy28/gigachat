import { QuerySnapshot } from "firebase/firestore";
import MessageDisplay from "./MessageDisplay";

interface InboxProps {
	msgSnapshot: QuerySnapshot;
	senderEmail: string;
}

export default function Inbox(props: InboxProps) {
	return (
		<div className="bg-blue-800 px-1 py-1 rounded-lg text-white text-lg">
			<ul className="flex flex-col justify-start w-12/12">
				{props.msgSnapshot.docs.map((msg) => {
					let isSent: boolean = false;
					if (props.senderEmail === msg.data().sender) {
						isSent = true;
					}

					return (
						<li
							key={msg.id}
							className={
								isSent
									? "px-1 py-1 m-2 place-self-end rounded-lg bg-slate-500 text-white"
									: "px-1 py-1 m-2 place-self-start rounded-lg bg-white text-black"
							}
						>
							<MessageDisplay>{msg.data().msg}</MessageDisplay>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
