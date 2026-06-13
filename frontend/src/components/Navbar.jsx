import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Logout failed");
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-green-500 cursor-pointer hover:scale-105 transition">
          GeoSense AI
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-gray-700 dark:text-gray-200 font-medium">

          <a
            href="#home"
            className="hover:text-green-500 transition duration-300"
          >
            Home
          </a>

          <a
            href="#features"
            className="hover:text-green-500 transition duration-300"
          >
            Features
          </a>

          <a
            href="#analysis"
            className="hover:text-green-500 transition duration-300"
          >
            Analysis
          </a>

          <a
            href="#compare"
            className="hover:text-green-500 transition duration-300"
          >
            Compare
          </a>

          <a
            href="#about"
            className="hover:text-green-500 transition duration-300"
          >
            About
          </a>

        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
              w-12 h-12
              rounded-full
              bg-gray-200
              dark:bg-gray-700
              text-xl
              transition-all
              duration-300
              hover:scale-110
              active:scale-90
              hover:shadow-lg
            "
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Get Started */}
          <a href="#analysis">
            <button
              className="
                bg-green-500
                hover:bg-green-600
                text-white
                px-5 py-2
                rounded-lg
                font-semibold
                transition-all
                duration-300
                hover:scale-105
                active:scale-95
                hover:shadow-lg
              "
            >
              Get Started
            </button>
          </a>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="
              bg-red-500
              hover:bg-red-600
              text-white
              px-5 py-2
              rounded-lg
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              active:scale-95
              hover:shadow-lg
            "
          >
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;