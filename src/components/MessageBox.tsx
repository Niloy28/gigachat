export default function MessageBox() {
	return (
		<div className="flex content-center justify-around px-8 bg-blue-400 rounded-lg">
			<form className="px-9 py-3 flex flex-[2_1_0%] justify-around">
				<input type="text" id="message-input" placeholder="Enter Message" />
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