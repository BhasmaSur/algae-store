import { ADMIN_AUTHENTICATION } from '@/lib/demo-data/loginDemoData';
import { setCookieDetails } from '@/lib/utils/loginFunctions';
import jwt from 'jsonwebtoken';
import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const loginPlz = async () => {
    const res = await fetch('api/user/authentication', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    }).then((user) => {
      return user.json();
    });
    const token = res.token;
    if (token) {
      const json = jwt.decode(token) as { [key: string]: string };
      setMessage(`Welcome ${json.username}`);
    } else {
      setMessage('Somthing went wrong');
    }
    setCookieDetails(ADMIN_AUTHENTICATION);
  };
  return (
    <div>
      <h1>{message}</h1>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={loginPlz}>Login</button>
    </div>
  );
};

export default Login;
