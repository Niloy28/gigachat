import { Auth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

interface SignInProps {
	auth: Auth;
}

export default function SignIn(props: SignInProps) {
	const signInWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(props.auth, provider);
	};

	return (
		<div>
			<button onClick={signInWithGoogle}>Sign In With Google</button>
		</div>
	);
}
