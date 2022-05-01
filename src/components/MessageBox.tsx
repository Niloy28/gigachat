import React, { useState } from "react";

interface MessageBoxProps {
	onSubmit: (arg0: string) => void;
}

export default function MessageBox(props: MessageBoxProps) {
	const [message, setMessage] = useState("");

	function sendMessage(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		props.onSubmit(message);
	}

	function handleMessageTextChange(e: React.ChangeEvent<HTMLInputElement>) {
		setMessage(e.target.value);
	}

	return (
		<div className="flex content-center justify-around px-8 bg-blue-400 rounded-lg">
			<form
				onSubmit={sendMessage}
				className="px-9 py-3 flex flex-[2_1_0%] justify-around"
			>
				<input
					type="text"
					id="message-input"
					placeholder="Enter Message"
					onChange={handleMessageTextChange}
				/>
				<button
					className="bg-white text-black hover:bg-slate-400 hover:text-white rounded-xl px-5"
					type="submit"
				>
					Send Message
				</button>
			</form>
		</div>
	);
}
