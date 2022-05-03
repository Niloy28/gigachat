import { ChangeEvent, FormEvent, useState } from "react";

interface RecipientSelectorProps {
	onRecipientSubmit: (arg0: string) => void;
	onDisplayNameSubmit: (arg0: string) => void;
}

export default function RecipientSelector(props: RecipientSelectorProps) {
	const [recipient, setRecipient] = useState("");
	const [displayName, setDisplayName] = useState("");

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		props.onRecipientSubmit(recipient);
		props.onDisplayNameSubmit(displayName);
	}

	function handleRecipientChange(e: ChangeEvent<HTMLInputElement>) {
		setRecipient(e.target.value);
	}

	function handleDisplayNameChange(e: ChangeEvent<HTMLInputElement>) {
		setDisplayName(e.target.value);
	}

	return (
		<div className="text-center">
			<form onSubmit={handleSubmit}>
				<h2 className="text-2xl font-extrabold py-3 m-2">
					Enter the email of your recipient
				</h2>
				<label htmlFor="target-email">E-Mail: </label>
				<input
					onChange={handleRecipientChange}
					className="border-2 m-1"
					type="email"
					id="target-email"
					value={recipient}
					placeholder="example@gmail.com"
				></input>
				<br />
				<label htmlFor="display-name">Display Name: </label>
				<input
					onChange={handleDisplayNameChange}
					className="border-2 m-1"
					type="text"
					id="display-name"
					value={displayName}
					placeholder="Ex: John Doe"
				></input>
				<button
					className="rounded bg-black text-white px-4 py-1 m-1"
					type="submit"
				>
					Chat
				</button>
			</form>
		</div>
	);
}
