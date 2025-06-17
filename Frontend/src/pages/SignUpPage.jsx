import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookSquare } from "react-icons/fa";
import { useState } from "react";

const SignUpPage = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const onHandleInputs = (event) => {
    const { name, value } = event.target;
    setUser((user) => ({
      ...user,
      [name]: value,
    }));
  };

  const signUpSuccess = () => {
    alert("User registered successfully");
    navigate("/signin");
  };

  const formSubmit = async (event) => {
    event.preventDefault();
    console.log(user);
    try {
      const singUpUrl = "http://localhost:5000/api/users/signup";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      };
      const response = await fetch(singUpUrl, options);
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        signUpSuccess();
      }
      setUser({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <div className="p-4 text-2xl font-semibold">
        <h1>QuickBite</h1>
      </div>

      <section className="flex justify-center items-center min-h-[90vh] px-4">
        <form
          className="flex flex-col gap-4 w-full max-w-sm p-4 rounded-md border-orange-400"
          onSubmit={formSubmit}
        >
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-1">Create an account</h2>
            <p className="text-sm text-gray-600">Join QuickBite today</p>
          </div>

          {/* Full Name */}
          <div className="flex flex-col">
            <label htmlFor="fullname" className="mb-1 text-sm font-medium">
              Full Name
            </label>
            <input
              id="fullname"
              type="text"
              placeholder="John Doe"
              className="border border-gray-400 h-10 px-3 rounded bg-[#f1f1f1]-100 outline-none"
              required
              name="name"
              value={user.name}
              onChange={onHandleInputs}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@mail.com"
              className="border border-gray-400 h-10 px-3 rounded bg-[#f1f1f1]-100 outline-none"
              required
              name="email"
              value={user.email}
              onChange={onHandleInputs}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="border border-gray-400 h-10 px-3 rounded bg-[#f1f1f1]-100 outline-none"
              required
              name="password"
              value={user.password}
              onChange={onHandleInputs}
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col">
            <label
              htmlFor="confirmPassword"
              className="mb-1 text-sm font-medium"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
              className="border border-gray-400 h-10 px-3 rounded bg-[#f1f1f1]-100 outline-none"
              required
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={onHandleInputs}
            />
          </div>

          {/* Terms */}
          <label className="text-sm flex items-center gap-2 mt-2">
            <input type="checkbox" required className="accent-orange-400" />I
            agree to the{" "}
            <span className="text-orange-500 underline cursor-pointer">
              Terms and Conditions
            </span>
          </label>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="bg-orange-400 hover:bg-orange-500 text-white h-10 rounded font-medium transition"
          >
            Sign Up
          </button>

          {/* Already have an account */}
          <p className="text-sm text-center">
            Already have an account?{" "}
            <span className="text-orange-500 hover:underline cursor-pointer">
              <Link to="/signin">Sign in</Link>
            </span>
          </p>

          {/* Divider */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <hr className="flex-grow border-t border-gray-300" />
            Or sign up with
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          {/* Social Signups */}
          <div className="flex justify-center gap-4 mt-2">
            <button
              type="button"
              className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-200 flex justify-center items-center gap-1"
            >
              <FaGoogle />
              Google
            </button>
            <button
              type="button"
              className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-200 flex justify-center items-center gap-1"
            >
              <FaFacebookSquare />
              Facebook
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default SignUpPage;
