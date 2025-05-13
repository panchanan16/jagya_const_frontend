// import '@/styles/login.css'

function AdminLogin() {
  return (
    <div class="login-container">
      <div class="left-login">
        <img src="/img/logo.jpg" alt="logo" id="logo" />
      </div>
      <div class="right-login">
        <h1>JAGYA CONSTRUCTION</h1>
        <p>Welcome, Admin</p>
        <form method="POST" action="/admin/auth" id="login-form">
          <div class="field">
            <label for="your_name">Email Address</label>
            <input type="text" name="Email" id="Email" />
          </div>
          <div class="field">
            <label for="your_pass">Password</label>
            <input type="text" name="Password" id="Password" />
            <i class="uil uil-eye-slash" id="eye"></i>
          </div>
          <div class="field field-btn">
            <button type="submit" name="signin" id="signin" className="btn-primary">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
