import { Auth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleLogo from "../media/google-icon.svg";
import GIGACHAD from "../media/GIGACHAD.gif";

interface SignInProps {
	auth: Auth;
}

export default function SignIn(props: SignInProps) {
	const signInWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(props.auth, provider);
	};

	return (
		<div className="w-5/12 h-8/12 rounded border-2 m-2 px-2 py-4 overflow-hidden shadow-lg flex flex-col space-y-10 justify-center self-center">
			<h1 className="px-8 flex justify-around items-center font-extrabold font-sans fill-slate-700 text-5xl">
				Welcome to GIGACHAT <img src={GIGACHAD} alt="GIGACHAD" />
			</h1>
			<button
				className="w-7/12 self-center bg-white hover:bg-slate-300 active:bg-slate-500 text-black font-bold border-2 border-cyan-900 shadow shadow-slate-500 py-2 px-4 space-x-5"
				onClick={signInWithGoogle}
			>
				<span>
					<img
						src={GoogleLogo}
						width="20px"
						className="inline left-7"
						alt="google icon"
					/>
				</span>
				<span>Sign In With Google</span>
			</button>
		</div>
	);
}
