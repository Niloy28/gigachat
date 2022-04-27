interface TopBarProps {
	onSignOut: () => void;
}

function TopBar(props: TopBarProps) {
	return (
		<div className="w-full h-20 space-x-20 bg-slate-600 rounded-xl flex content-center justify-between items-center px-4 py-4">
			<h3 className="text-2xl font-semibold text-cyan-500">GIGACHAT</h3>
			<button
				className="w-20 h-10 rounded text-white border-2 border-white hover:bg-slate-200"
				onClick={props.onSignOut}
			>
				Sign Out
			</button>
		</div>
	);
}

export default TopBar;
