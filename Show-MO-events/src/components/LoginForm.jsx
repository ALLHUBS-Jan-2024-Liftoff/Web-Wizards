// src/components/LoginForm.js
const LoginForm = () => {
    return (
      <div>
        <h2>Welcome to ShowMOEvents</h2>
        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  };
  
  export default LoginForm;
  