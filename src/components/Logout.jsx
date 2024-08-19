import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmLogout = () => {
    // Clear any user data or token
    localStorage.removeItem('token');
    navigate('/login'); // Redirect to the login page
  };

  const handleCancelLogout = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="LogoutContainer flex flex-col items-center justify-center min-h-screen">
      <button
        onClick={handleLogoutClick}
        className="LogoutButton bg-[#34495e] text-white py-2 px-4 rounded-lg text-lg mb-4"
      >
        Logout
      </button>
      <p className="text-gray-700 text-center mt-4">
        Thanks for using our app! We hope to see you back soon. Your presence makes our community stronger and more vibrant. See you again!
      </p>

      {showConfirmation && (
        <div className="ConfirmationDialog fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="DialogBox bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Are you sure you want to logout?</h2>
            <div className="ButtonGroup flex justify-end gap-4">
              <button
                onClick={handleCancelLogout}
                className="CancelButton bg-gray-500 text-white py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmLogout}
                className="ConfirmButton bg-red-500 text-white py-2 px-4 rounded"
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logout;
