import NextLink from "@/reusablecomponent/NextLink";
import React, { useState } from "react"
import { FaEye, FaEyeSlash, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };
  return (
    // <div className="container-fluid g-0" style={{ margin: "50px 0px" }}>
    // <div className="container g-0 w-25 shadow p-5 rounded-4">
    <div>
      <h2 className="mb-3 text-start">Sign up to Sandbox</h2>
      <p className=" mb-4 text-start">Registration takes less than a minute.</p>
      <form onSubmit={handleSubmit} className="text-start ">
        <div className="form-floating mb-4">
          <input
            id="name"
            type="text"
            value={name}
            placeholder="Name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="name" className="label">Name</label>
        </div>
        <div className="form-floating mb-4">
          <input
            type="email"
            value={email}
            id="loginEmail"
            placeholder="Email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="loginEmail" className="label">Email</label>
        </div>
        <div className="form-floating mb-4">
          <input
            value={password}
            id="loginPassword"
            placeholder="Password"
            className="form-control"
            type={visiblePassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="password-toggle" onClick={() => setVisiblePassword(!visiblePassword)}>
            <a>
              {
                visiblePassword ?
                  <FaEyeSlash className="p-1 fs-2" />
                  : <FaEye className="p-1 fs-2" />
              }
            </a>
          </span>
          <label htmlFor="loginPassword" className="label">Password</label>
        </div>
        <div className="form-floating mb-4">
          <input
            id="password-confirm"
            value={confirmPassword}
            className="form-control"
            placeholder="Confirm Password"
            type={visiblePassword ? "text" : "password"}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span className="password-toggle" onClick={() => setVisiblePassword(!visiblePassword)}>
            <a>
              {
                visiblePassword ?
                  <FaEyeSlash className="p-1 fs-2" />
                  : <FaEye className="p-1 fs-2" />
              }
            </a>
          </span>
          <label htmlFor="password-confirm" className="label">Confirm Password</label>
        </div>
        <button type="submit" className="btn rounded-pill btn_login w-100 mb-2">
          Sign Up
        </button>
      </form>
      <p className="mb-0 loginformPtext">
        Already have an account? <NextLink title="Sign in" href="./login" className="loginformtext hvr-underline-from-left" />
      </p>
      <div className="ORdivider my-2 text-center fs-5">or</div>
      <nav className="text-center">
        <a href="#" target="__blank" className="btn icon1">
          <FaGoogle />
        </a>
        <a href="#" target="__blank" className="btn icon2">
          <FaFacebookF />
        </a>
        <a href="#" target="__blank" className="btn icon3">
          <FaTwitter />
        </a>
      </nav>
    </div>
    //   </div>
    // </div>
  )
}

export default Register