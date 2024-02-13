import React, { useState } from 'react';

function LoginForm({ handleLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, password };
    handleLogin(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button style={{backgroundColor: "lightgrey", padding: "8px", fontFamily: "Sans-Serif", border: "None"}} type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
