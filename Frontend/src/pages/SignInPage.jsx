import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookSquare } from "react-icons/fa";
import { useState } from "react";
import Cookies from "js-cookie";

const SignInPage = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleInputs = (event) => {
    const { name, value } = event.target;
    setUser((user) => ({
      ...user,
      [name]: value.trim(),
    }));
  };

  const signInSuccess = (access_token) => {
    Cookies.set("token", access_token, { expires: 30 });
    const token = Cookies.get("token");
    if (token !== undefined) {
      navigate("/");
    } else {
      alert("Login Failure");
    }
  };

  const onSumbitForm = async (event) => {
    event.preventDefault();
    try {
      const loginUrl = "http://localhost:3000/api/users/signin";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      };

      const response = await fetch(loginUrl, options);

      const data = await response.json();

      if (response.ok) {
        alert(`Login successful! Welcome back, ${user.email}.`);
        signInSuccess(data.access_token);
        setUser({ email: "", password: "" });
      } else {
        setError(data.message);
        alert("Login failed. Please try again with valid credentials.");
        console.log("Login failed. Please try again with valid credentials.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="bg-[url('')] bg-cover bg-center h-auto w-full">
      <div className="p-4 text-2xl font-semibold">
        <h1>QuickBite</h1>
      </div>

      <section className="flex justify-center items-center min-h-[90vh] px-4 border">
        <form
          className="flex flex-col gap-4  w-full max-w-sm p-4 rounded-md"
          onSubmit={onSumbitForm}
        >
          {/* Header */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-1">
              Sign in to your account
            </h2>
            <p className="text-sm text-gray-600">Welcome back to QuickBite</p>
          </div>

          {/* Username */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm font-medium">
              Username or Email
            </label>
            <input
              id="email"
              type="email"
              onChange={handleInputs}
              value={user.email}
              name="email"
              placeholder="Enter your email"
              className="border border-gray-400 h-10 px-3 rounded  outline-none bg-[#f1f1f1]-100"
              required
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
              value={user.password}
              name="password"
              onChange={handleInputs}
              placeholder="Enter your password"
              className="border border-gray-400 h-10 px-3 rounded bg-[#f1f1f1]-100 outline-none"
              required
            />
          </div>

          {/* Options */}
          <div className="flex justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-orange-400" />
              Remember me
            </label>
            <button type="button" className="text-orange-500 hover:underline">
              Forgot password?
            </button>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="bg-orange-400 hover:bg-orange-500 text-white h-10 rounded font-medium transition"
          >
            Sign In
          </button>
          {error && <p className="text-red-600">{error}</p>}

          {/* Sign Up */}
          <p className="text-sm text-center">
            Don’t have an account?{" "}
            <span className="text-orange-500 hover:underline cursor-pointer">
              <Link to="/signup">Sign up</Link>
            </span>
          </p>

          {/* Divider */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <hr className="flex-grow border-t border-gray-300" />
            Or continue with
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          {/* Social Logins */}
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
    </section>
  );
};

export default SignInPage;
