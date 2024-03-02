export default function SignInUpButtonGroup({ handleSignIn, authenticated }) {
  return (
    <div className="button-group">
      <button type="submit" className="sign-in" onClick={handleSignIn}>
        SIGN IN
      </button>
      <div className="separator">OR</div>
      <button type="button" className="sign-in-g">
        Continue with{" "}
        <img className="google" src="/src/assets/images/google.png"></img>
      </button>
    </div>
  )
}
