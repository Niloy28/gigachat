import { ChangeEvent, FormEvent, useState } from "react";

interface RecipientSelectorProps {
	onSubmit: (arg0: string) => void;
}

export default function RecipientSelector(props: RecipientSelectorProps) {
	const [recipient, setRecipient] = useState("");

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		props.onSubmit(recipient);
	}

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		setRecipient(e.target.value);
	}

	return (
		<div className="text-center">
			<form onSubmit={handleSubmit}>
				<h2 className="text-2xl font-extrabold py-3 m-2">
					Enter the email of your recipient
				</h2>
				<label htmlFor="target-email">E-Mail: </label>
				<input
					onChange={handleChange}
					className="border-2 m-1"
					type="email"
					id="target-email"
					placeholder="example@gmail.com"
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
