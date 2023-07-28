import React, { useState } from "react";
import Modal from "react-modal";
import "./Login-P.css";
function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate server-side validation (replace with actual server-side validation)
    // if (formData.email === "admin" && formData.password === "password") {
    //   setIsModalOpen(true);
    // } else {
    //   alert("Invalid credentials. Please try again.");
    // }

    if (formData.email && formData.password) {
        const regEmail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
        if (regEmail.test(formData.email)) {

          if (formData.password.length >= 6) {
  
            // axios.post('/api/login', data).then((response) => {
            //   if (!response.data.auth) {
            //     swal('sorry', response.data.message, 'error');
            //   } else {
            //     localStorage.setItem('userToken', response.data.token);
            //     navigate('/home');
            //   }
            // });
          } else {
       alert("Invalid credentials.  Minimum 6 character");

          }
        } else {
         alert("Invalid credentials.  Please enter valid Email");

        }
      } else {
         alert("All feilds are required. Please try again.");

      }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  return (
    <div className="App">
      <form className="login-form" onSubmit={handleLogin}>
        <h1 className="text-2xl">LOGIN</h1>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
          className="h-12"
            type="text"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="h-12"
            type="password"
            id="password"
            name="password"
            placeholder="******"
            required
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-between">
            <div className="flex">
                <input type="checkbox" name="" id="" />
                <h5>Remember Me</h5>
            </div>
            <div >
           <h5> Forget Password ?</h5>
            </div>
        </div>
        <div className="flex justify-center">
          <button className="w-24 bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 border border-red-500 rounded">
            Login
          </button>
        </div>
        <div className="flex justify-center">
            <h4>Not Registered?</h4>
            <h4 className="text-red-600">Click here to join</h4>
        </div>
      </form>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Welcome, {formData.email}!</h2>
        <p>You have successfully logged in.</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default Login;
