import { ReactNode } from "react";

interface MessageDisplayProps {
	children: ReactNode;
}

export default function MessageDisplay(props: MessageDisplayProps) {
	return <div className="m-2 text-justify break-all">{props.children}</div>;
}
