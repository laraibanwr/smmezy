import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access:", location.pathname);
  }, [location.pathname]);

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 relative">
      {/* Main Content */}
      <div className="text-center space-y-8">
        <h1 className="text-8xl md:text-[160px] font-extrabold tracking-wide text-white">
          404
        </h1>
        <p className="text-2xl md:text-4xl text-neutral-300 font-light">
          SORRY, THERE’S{" "}
          <span className="font-bold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
            NOTHING HERE
          </span>
        </p>
        <button
          onClick={goHome}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-8 py-3 mt-6 rounded-full transition-all duration-300"
        >
          GO HOME
        </button>
      </div>

      {/* Bottom Footer */}
      <div className="absolute bottom-4 w-full px-4 flex justify-center text-sm text-neutral-400 tracking-widest">
        <span>© 2025 SMMEZY</span>
      </div>
    </div>
  );
};

export default NotFound;
