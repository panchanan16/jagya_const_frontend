// import '@/styles/login.css'

import AdminLoginForm from "@/forms/adminLogin/AdminLoginForm";

function AdminLogin() {
  return (
    <section className="login-wrapper">
      <div class="login-container">
        <div class="left-login">
          <img src="/img/logo.jpg" alt="logo" id="logo" />
        </div>
        <div class="right-login">
          <h1>JAGYA CONSTRUCTION</h1>
          <p>Welcome, Admin</p>
          <AdminLoginForm />
        </div>
      </div>
    </section>
  );
}

export default AdminLogin;
