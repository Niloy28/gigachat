interface TopBarProps {
	displayName: string;
	onSignOut: () => void;
}

function TopBar(props: TopBarProps) {
	return (
		<div className="w-full h-20 space-x-20 bg-slate-600 rounded-xl self-center flex content-center justify-between items-center px-4 py-4">
			<h3 className="text-2xl font-semibold text-cyan-500">
				GIGACHAT with {props.displayName}
			</h3>
			<button
				className="w-20 h-10 rounded text-white border-2 border-white hover:bg-slate-200 hover:text-black"
				onClick={props.onSignOut}
			>
				Sign Out
			</button>
		</div>
	);
}

export default TopBar;
