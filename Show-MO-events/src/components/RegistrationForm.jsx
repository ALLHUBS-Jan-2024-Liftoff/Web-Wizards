// src/components/RegistrationForm.js
const RegistrationForm = () => {
    return (
      <div>
        <h2>Register</h2>
        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  };
  
  export default RegistrationForm;
  