import { useState } from "react";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-[400px]">

        <h1 className="text-3xl font-bold text-center mb-6">
          Sign Up
        </h1>

        <form
          onSubmit={handleSignup}
          className="space-y-4"
        >

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            className="
              w-full
              bg-green-600
              text-white
              py-3
              rounded-lg
            "
          >
            Create Account
          </button>

        </form>

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;