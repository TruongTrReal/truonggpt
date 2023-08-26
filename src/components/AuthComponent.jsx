import { useContext } from 'react';
import { UserContext } from '../contexts/user.context';
import { useLocation } from 'react-router-dom';
import Index from '../routes/index';


export default function AuthComponent() {
  
  const { logOutUser } = useContext(UserContext);
  const location = useLocation();
  const { email, plan } = location.state || {};

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
    <div className="flex h-screen">
      {/* User Info and Logout */}
      <div className="w-1/5 bg-gray-200 p-6">
        <p className="text-black mb-4">🐧🚀{email} </p>
        <p className="text-black mb-4">Gói: {plan}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={logOut}
        >
          Logout
        </button>
      </div>
      {/* Index Component */}
      <div className="w-4/5 p-6 bg-red">
        <Index plan={plan} />
      </div>
    </div>
  );
}
