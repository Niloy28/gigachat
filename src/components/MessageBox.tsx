import React, { useRef, useState } from "react";

interface MessageBoxProps {
	onSubmit: (arg0: string) => void;
}

export default function MessageBox(props: MessageBoxProps) {
	const [message, setMessage] = useState("");
	const inputRef = useRef<HTMLTextAreaElement>(null);

	function sendMessage(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		props.onSubmit(message);
		setMessage("");
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}

	function handleMessageTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		setMessage(e.target.value);
	}

	return (
		<div className="flex content-center justify-around px-8 bg-blue-400 rounded-lg">
			<form
				onSubmit={sendMessage}
				className="px-9 py-3 flex flex-[2_1_0%] justify-around"
			>
				<textarea
					rows={2}
					cols={40}
					required
					autoComplete="off"
					ref={inputRef}
					className="break-words resize-none"
					id="message-input"
					placeholder="Enter Message"
					onChange={handleMessageTextChange}
					value={message}
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
