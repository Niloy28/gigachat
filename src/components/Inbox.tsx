import { QuerySnapshot } from "firebase/firestore";
import { useEffect, useRef } from "react";
import MessageDisplay from "./MessageDisplay";

interface InboxProps {
	msgSnapshot: QuerySnapshot;
	senderEmail: string;
}

export default function Inbox(props: InboxProps) {
	const dummyScrollTargetRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		dummyScrollTargetRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [props.msgSnapshot, dummyScrollTargetRef]);

	return (
		<div className="bg-blue-800 px-1 py-1 rounded-lg text-white text-lg h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-purple-300">
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
			<div ref={dummyScrollTargetRef}></div>
		</div>
	);
}
