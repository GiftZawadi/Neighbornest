import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [admins, setAdmins] = useState([]);
  const [neighborhoods, setNeighborhoods] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentAdmin, setCurrentAdmin] = useState({
    name: '',
    email: '',
    password: '',
    neighborhood_name: '',
    profile_image_url: ''
  });
  const [imageFile, setImageFile] = useState(null);

  // Fetch admins and neighborhoods from the JSON server when the component mounts
  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await fetch('http://localhost:5001/admins');
        if (!response.ok) {
          throw new Error('Failed to fetch admins');
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setAdmins(data);
        } else {
          console.error('Expected an array of admins but got:', data);
          setAdmins([]);
        }
      } catch (error) {
        console.error('Error fetching admins:', error);
      }
    };

    const fetchNeighborhoods = async () => {
      try {
        const response = await fetch('http://localhost:5001/neighborhoods');
        if (!response.ok) {
          throw new Error('Failed to fetch neighborhoods');
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setNeighborhoods(data);
        } else {
          console.error('Expected an array of neighborhoods but got:', data);
          setNeighborhoods([]);
        }
      } catch (error) {
        console.error('Error fetching neighborhoods:', error);
      }
    };

    fetchAdmins();
    fetchNeighborhoods();
  }, []);

  const handleAddAdminClick = () => {
    setCurrentAdmin({ name: '', email: '', password: '', neighborhood_name: '', profile_image_url: '' });
    setImageFile(null);
    setIsEditing(true);
  };

  const handleEditClick = (admin) => {
    setCurrentAdmin(admin);
    setImageFile(null);
    setIsEditing(true);
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:5001/admins/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete admin');
      }
      setAdmins(admins.filter(admin => admin.id !== id));
    } catch (error) {
      console.error('Error deleting admin:', error);
    }
  };

  const handleSaveClick = async () => {
    try {
      const formData = new FormData();
      formData.append('name', currentAdmin.name);
      formData.append('email', currentAdmin.email);
      formData.append('password', currentAdmin.password);
      formData.append('neighborhood_name', currentAdmin.neighborhood_name); 
      if (imageFile) {
        formData.append('profile_image_url', imageFile.name); // For JSON server, you might use the file name or a static URL
      }

      let response;
      if (currentAdmin.id) {
        // Update admin
        response = await fetch(`http://localhost:5001/admins/${currentAdmin.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...currentAdmin,
            profile_image_url: imageFile ? URL.createObjectURL(imageFile) : currentAdmin.profile_image_url
          }),
        });
      } else {
        // Add new admin
        response = await fetch('http://localhost:5001/admins', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...currentAdmin,
            profile_image_url: imageFile ? URL.createObjectURL(imageFile) : currentAdmin.profile_image_url
          }),
        });
      }

      if (!response.ok) {
        throw new Error('Failed to save admin');
      }

      const data = await response.json();
      if (currentAdmin.id) {
        setAdmins(admins.map(admin => (admin.id === currentAdmin.id ? data : admin)));
      } else {
        setAdmins([...admins, data]);
      }

      setIsEditing(false);
      setCurrentAdmin({ name: '', email: '', password: '', neighborhood_name: '', profile_image_url: '' });
      setImageFile(null);
    } catch (error) {
      console.error('Error saving admin:', error);
    }
  };

  const handleChange = (e) => {
    setCurrentAdmin({
      ...currentAdmin,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  return (
    <div className="Group239185 w-full p-4 relative">
      <div className="flex justify-between items-center mb-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleAddAdminClick}>
          Add Admin
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {admins.map(admin => (
          <div key={admin.id} className="CardArticle w-full bg-white rounded-lg flex-col justify-center items-center p-4">
            <div className="Thumbnail h-[120px] w-[120px] rounded flex-col justify-center items-center flex">
              <img className="Thumbnail h-full w-full object-cover rounded" src={admin.profile_image_url} alt={admin.name} />
            </div>
            <div className="BodyContent self-stretch pt-4 pb-2 bg-white flex-col justify-center items-start gap-4 flex">
              <div className="TagTitle self-stretch flex-col justify-start items-start gap-4 flex">
                <div className="Frame27 flex-col justify-center items-start gap-4 flex">
                  <div className="AdminName text-[#2d2e2e] text-base font-semibold">{admin.name}</div>
                  <div className="AdminEmail text-[#2d2e2e] text-base font-semibold">{admin.email}</div>
                  <div className="AdminNeighborhood text-[#2d2e2e] text-base font-semibold">{admin.neighborhood_name}</div>
                </div>
              </div>
              <div className="actions flex justify-between mt-2">
                <button 
                  onClick={() => handleEditClick(admin)} 
                  className="edit-btn text-white bg-[#34495E] py-1 px-3 rounded">
                  Edit
                </button>
                <button 
                  onClick={() => handleDeleteClick(admin.id)} 
                  className="delete-btn text-white bg-[#34495E] py-1 px-3 rounded">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isEditing && (
        <div className="edit-form fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="form-container bg-white p-4 rounded-lg w-96">
            <h2 className="text-lg font-semibold mb-4">{currentAdmin.id ? 'Edit Admin' : 'Add Admin'}</h2>
            <input
              type="text"
              name="name"
              value={currentAdmin.name}
              onChange={handleChange}
              placeholder="Name"
              className="input-field w-full mb-3 p-2 border rounded"
            />
            <input
              type="email"
              name="email"
              value={currentAdmin.email}
              onChange={handleChange}
              placeholder="Email"
              className="input-field w-full mb-3 p-2 border rounded"
            />
            <input
              type="password"
              name="password"
              value={currentAdmin.password}
              onChange={handleChange}
              placeholder="Password"
              className="input-field w-full mb-3 p-2 border rounded"
            />
            <select
              name="neighborhood_name"
              value={currentAdmin.neighborhood_name}
              onChange={handleChange}
              className="input-field w-full mb-3 p-2 border rounded"
            >
              <option value="" disabled>Select Neighborhood</option>
              {neighborhoods.map(neighborhood => (
                <option key={neighborhood.id} value={neighborhood.name}>
                  {neighborhood.name}
                </option>
              ))}
            </select>
            <input
              type="file"
              name="profile_image"
              onChange={handleImageChange}
              className="input-field w-full mb-3 p-2 border rounded"
            />
            <div className="actions flex justify-between">
              <button onClick={handleSaveClick} className="save-btn text-white bg-blue-500 py-2 px-4 rounded">Save</button>
              <button onClick={() => setIsEditing(false)} className="cancel-btn text-white bg-gray-500 py-2 px-4 rounded">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
