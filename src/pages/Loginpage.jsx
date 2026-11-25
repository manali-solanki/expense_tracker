import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { useState } from "react";
import { FaWallet } from "react-icons/fa6";
import logo from "../assets/image.png";

function Loginpage() {
  const navigate = useNavigate();

  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, SetErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata((prev) => ({
      ...prev,
      [name]: value,
    }));

    SetErrors((prev) => ({ ...prev, [name]: "" }));
  };
  const handlesubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formdata.name.trim()) newErrors.name = "Name is required";
    if (!formdata.email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!formdata.password) {
      newErrors.password = "Pasword is required";
    } else if (formdata.password.length < 6) {
      newErrors.password = "passwoed must be at least 6 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      SetErrors(newErrors);
    }

    localStorage.setItem("user", JSON.stringify(formdata));
    navigate("/");
  };
  return (
    <div className="login-page">
      {/* LEFT SECTION */}
      <div className="login-left">
        <img src={logo} alt="Logo" />
        <h1>Personal Expense Tracker</h1>
        <p>Track, manage & control your daily expense easily</p>
      </div>
      {/* RIGHT SECTION*/}
      <div className="login-right">
        <div className="login-card">
          <div className="header-row">
            <FaWallet className="login-icon" />
            <h3 className="app-title">Welcome Back</h3>
          </div>

          <h2 className="login-title">Login Now!</h2>

          <form onSubmit={handlesubmit} noValidate>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={formdata.name}
              onChange={handleChange}
            />
            {errors.name && <p className="validation">{errors.name}</p>}
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formdata.email}
              onChange={handleChange}
            />
            {errors.email && <p className="validation">{console.email}</p>}
            <label>password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={formdata.password}
              onChange={handleChange}
            />
            {errors.passord && <p className="validation">{errors.password}</p>}
            <button type="submit" className="signin-btn">
              SIGN IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
