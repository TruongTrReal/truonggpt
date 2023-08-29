import { useState, useContext, React } from 'react';
import { UserContext } from '../contexts/user.context';
import { Link, useLocation } from 'react-router-dom';
import Index from '../routes/index';
import { Button } from "@mui/material";

export default function AuthComponent() {
  const { logOutUser } = useContext(UserContext);
  const location = useLocation();
  const { email, plan } = location.state || {};

  const planButton = () => {
    if (plan === 'FREE') {
      return (
        <Button variant="contained" color="primary" component={Link} to="/plans" sx={{ borderRadius: "4px", backgroundColor: "purple", color: "white" }}>
          ✨ Nâng Lên PRO ✨
        </Button>
      );
    } else if (plan === 'PRO') {
      return (
        <Button variant="contained" color="primary" component={Link} to="/plans" sx={{ borderRadius: "4px", backgroundColor: "purple", color: "white" }}>
          ✨ Nâng Lên PREMIUM ✨
        </Button>
      );
    } else if (plan === 'PREMIUM') {
      return (null);
  };

  };

  const logOut = async () => {
    try {
      const loggedOut = await logOutUser();
      if (loggedOut) {
        // Redirect to the login page after logout
        window.location.href = '/';
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="">

      <div className="w-1/5 md:h-[100vh] md:text-base bg-gray-200 p-5 hidden md:block">
        <p className="w-full text-black mb-4">🐧🚀{email}</p>
        <p className="w-full text-black mb-4">Gói: {plan}</p>
        {planButton()}
        <a
          href="/" // Path you want to redirect to
          className="bg-green-500 text-white p-2 rounded mt-5 mb-5 block"
        >
          Trang chủ
        </a>
        <button
          className="absolute bottom-5 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={logOut}
        >
          Đăng Xuất 🚪.
        </button>
      </div>
      
      {/* Index Component */}
      <div className="w-full md:w-4/5 md:absolute md:top-0 md:right-0 p-5 h-[100vh] bg-green-800">
        <Index plan={plan} email={email} logOut={logOut} planButton={planButton()}/>
      </div>
    </div>
  );
}
