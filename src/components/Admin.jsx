import React, { useState, useEffect, useCallback } from 'react';

const Admin = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showAddAdminForm, setShowAddAdminForm] = useState(false);
  const [admins, setAdmins] = useState([]);
  const [adminData, setAdminData] = useState({
    name: 'Lora Smith',
    email: 'lorasmith@riaraapt.com',
    password: '',
    neighborhood: 'Riara Apartments',
    profilePicture: 'https://via.placeholder.com/56x56'
  });
  const [newAdminData, setNewAdminData] = useState({
    name: '',
    email: '',
    password: '',
    neighborhood: '',
    profilePicture: ''
  });

  const fetchAdmins = useCallback(async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/superadmin/1/admins', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAdmins(data);
    } catch (error) {
      console.error('Error fetching admins:', error);
    }
  }, []); // Empty array as dependencies since fetchAdmins doesn't rely on any props or state

  useEffect(() => {
    fetchAdmins();
  }, [fetchAdmins]); // Include fetchAdmins as a dependency

  const handleEditClick = (admin) => {
    setAdminData(admin);
    setIsEditing(true);
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/superadmin/1/admins/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setAdmins(admins.filter(admin => admin.id !== id));
    } catch (error) {
      console.error('Error deleting admin:', error);
    }
  };

  const handleSaveClick = async () => {
    try {
      const formData = new FormData();
      for (const key in adminData) {
        formData.append(key, adminData[key]);
      }

      const response = await fetch(`http://127.0.0.1:5000/superadmin/1/admins/${adminData.id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setAdmins(admins.map(admin => admin.id === adminData.id ? { ...admin, ...data } : admin));
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating admin:', error);
    }
  };

  const handleChange = (e) => {
    setAdminData({
      ...adminData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileUpload = (e) => {
    setAdminData({
      ...adminData,
      profilePicture: e.target.files[0]
    });
  };

  const handleAddAdminClick = () => {
    setShowAddAdminForm(true);
  };

  const handleInputChange = (e) => {
    setNewAdminData({
      ...newAdminData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddAdminSubmit = async () => {
    try {
      const formData = new FormData();
      for (const key in newAdminData) {
        formData.append(key, newAdminData[key]);
      }

      const response = await fetch('http://127.0.0.1:5000/superadmin/1/admins', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setAdmins([...admins, data]);

      // Sending login details to the new admin
      await fetch('http://127.0.0.1:5000/send-login-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ email: newAdminData.email, password: newAdminData.password }),
      });

      setShowAddAdminForm(false);
      setNewAdminData({
        name: '',
        email: '',
        password: '',
        neighborhood: '',
        profilePicture: ''
      });
    } catch (error) {
      console.error('Error adding admin:', error);
    }
  };

  return (
    <div className="Group239184 w-[937px] h-[768px] relative">
      <div className="Frame3 h-10 pl-4 pr-6 py-2 left-0 top-0 absolute bg-[#cfebf9] rounded justify-start items-center gap-3 inline-flex">
        <div className="IcRoundPlus w-6 h-6 relative"></div>
        <div className="AddAdmin text-[#4c4c4c] text-base font-medium font-['Manrope'] leading-normal" onClick={handleAddAdminClick}>
          Add Admin
        </div>
      </div>

      {showAddAdminForm && (
        <div className="AddAdminForm w-[1440px] h-[864px] fixed top-0 left-0 flex justify-center items-center bg-[#cbdae4] bg-opacity-90 z-50">
          <div className="Frame77 h-[769px] p-6 rounded-xl border border-[#ababab] flex-col justify-start items-start gap-2.5 inline-flex bg-white">
            <div className="Frame69 self-stretch h-[721px] flex-col justify-center items-center gap-6 flex">
              <div className="IconPack w-[38px] h-[38px] relative" />
              <div className="AddAdmin self-stretch text-center text-[#2d2e2e] text-[32px] font-semibold font-['Inter']">Add Admin</div>

              <div className="Frame66 self-stretch h-[91px] flex-col justify-start items-start gap-4 flex">
                <div className="Name self-stretch text-[#2d2e2e] text-base font-semibold font-['Inter']">Name</div>
                <input
                  name="name"
                  value={newAdminData.name}
                  onChange={handleInputChange}
                  className="self-stretch px-4 py-[17px] bg-[#f6f6f6] rounded text-[#2d2e2e] text-base font-normal font-['Inter'] leading-snug"
                  placeholder="Enter your name"
                />
              </div>

              <div className="Frame74 self-stretch h-[91px] flex-col justify-start items-start gap-4 flex">
                <div className="Email self-stretch text-[#2d2e2e] text-base font-semibold font-['Inter']">Email</div>
                <input
                  name="email"
                  value={newAdminData.email}
                  onChange={handleInputChange}
                  className="self-stretch px-4 py-[17px] bg-[#f6f6f6] rounded text-[#2d2e2e] text-base font-normal font-['Inter'] leading-snug"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="Frame67 self-stretch h-[91px] flex-col justify-start items-start gap-4 flex">
                <div className="Password self-stretch text-[#2d2e2e] text-base font-semibold font-['Inter']">Password</div>
                <input
                  type="password"
                  name="password"
                  value={newAdminData.password}
                  onChange={handleInputChange}
                  className="self-stretch px-4 py-[17px] bg-[#f6f6f6] rounded text-[#2d2e2e] text-base font-normal font-['Inter'] leading-snug"
                  placeholder="Enter your password"
                />
              </div>

              <div className="Frame75 self-stretch h-[91px] flex-col justify-start items-start gap-4 flex">
                <div className="Neighborhood self-stretch text-[#2d2e2e] text-base font-semibold font-['Inter']">Neighborhood</div>
                <input
                  name="neighborhood"
                  value={newAdminData.neighborhood}
                  onChange={handleInputChange}
                  className="self-stretch px-4 py-[17px] bg-[#f6f6f6] rounded text-[#2d2e2e] text-base font-normal font-['Inter'] leading-snug"
                  placeholder="Neighborhood name"
                />
              </div>

              <div className="Frame73 self-stretch h-14 flex-col justify-center items-start gap-6 flex">
                <div className="Button self-stretch px-[30px] py-[17px] bg-[#cbdae4] rounded justify-center items-center gap-2.5 inline-flex">
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="self-stretch text-center text-black text-lg font-medium font-['Inter']"
                  />
                </div>
              </div>

              <div className="Frame76 self-stretch h-14 flex-col justify-center items-start gap-6 flex">
                <button
                  onClick={handleAddAdminSubmit}
                  className="self-stretch px-[30px] py-[17px] bg-[#264065] rounded justify-center items-center gap-2.5 inline-flex"
                >
                  <div className="ContactUs grow shrink basis-0 text-center text-white text-lg font-medium font-['Inter']">Add Admin</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="Frame29 h-[339px] p-6 left-0 top-[64px] absolute bg-[#f6f6f6] rounded-lg flex-col justify-start items-center gap-4 inline-flex">
        {isEditing ? (
          <div className="edit-form flex-col justify-start items-center gap-4 flex">
            <div className="Avatar w-14 h-14 justify-center items-center inline-flex">
              <input
                type="file"
                name="profilePicture"
                onChange={(e) => setAdminData({ ...adminData, profilePicture: URL.createObjectURL(e.target.files[0]) })}
              />
            </div>
            <input type="text" name="name" value={adminData.name} onChange={handleChange} className="input-field" />
            <input type="email" name="email" value={adminData.email} onChange={handleChange} className="input-field" />
            <input type="password" name="password" value={adminData.password} onChange={handleChange} className="input-field" />
            <input type="text" name="neighborhood" value={adminData.neighborhood} onChange={handleChange} className="input-field" />
            <button onClick={handleSaveClick} className="save-button">Save</button>
          </div>
        ) : (
          <div className="admin-details flex-col justify-start items-center gap-4 flex">
            <div className="Avatar w-14 h-14 justify-center items-center inline-flex">
              <img className="Ellipse1 w-14 h-14 rounded-full" src={adminData.profilePicture} alt="Avatar" />
            </div>
            <div className="Frame27 flex-col justify-center items-center gap-6 flex">
              <div className="LoraSmith text-[#2d2e2e] text-base font-semibold font-['Inter']">{adminData.name}</div>
              <div className="RiaraApartments text-[#2d2e2e] text-base font-semibold font-['Inter']">{adminData.neighborhood}</div>
              <div className="LorasmithRiaraaptCom w-[243px] h-[21px] text-center text-[#2d2e2e] text-base font-normal font-['Inter'] leading-snug">
                {adminData.email}
              </div>
            </div>
            <div className="Frame489 w-[93px] pl-4 pr-6 py-2 bg-[#cfebf9] rounded justify-start items-center gap-3 inline-flex">
              <div className="TablerEdit w-6 h-6 relative">
                <div className="Group w-[17px] h-[17px] left-[4px] top-[3px] absolute"></div>
              </div>
              <div className="Edit text-[#4c4c4c] text-base font-medium font-['Manrope'] leading-normal" onClick={handleEditClick}>Edit</div>
            </div>
            <div className="Frame491 w-[109px] pl-4 pr-6 py-2 bg-[#cfebf9] rounded justify-start items-center gap-3 inline-flex">
              <div className="IcOutlineDelete w-6 h-6 relative"></div>
              <div className="Delete text-[#4c4c4c] text-base font-medium font-['Manrope'] leading-normal" onClick={() => handleDeleteClick(adminData.id)}>Delete</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
