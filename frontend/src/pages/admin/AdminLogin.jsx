import React from "react";
import "./AdminLogin.css";

const AdminLogin = () => {
  const imageUrl = "/images/admin_login_background.webp";
  console.log(imageUrl);
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="LoginFormDiv">
          <header>Admin Login</header>
          <div>
            <form
              id="Loginform"
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Form submitted");
              }}
            >
              <div className="input_form">
                <input type="text" name="username" placeholder="Username" />
              </div>
              <div className="input_form">
                <input type="password" name="password" placeholder="Password" />
              </div>

              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
