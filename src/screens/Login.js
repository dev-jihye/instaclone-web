import { isLoggedInVar } from '../apollo';

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => isLoggedInVar(true)}>Log in now!</button>
    </div>
  );
}
