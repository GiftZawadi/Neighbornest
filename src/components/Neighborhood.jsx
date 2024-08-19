import React, { useState, useEffect } from 'react';

const Neighborhood = () => {
  const [neighborhoods, setNeighborhoods] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentNeighborhood, setCurrentNeighborhood] = useState({
    id: null,
    name: '',
    location: '',
    image: ''
  });
  const [imageFile, setImageFile] = useState(null);

  const superAdminId = 1; // Assuming the super admin ID is 1, update as needed

  useEffect(() => {
    // Fetch neighborhoods from the backend when the component mounts
    fetch(`https://neighborhood-nest-6.onrender.com/superadmins/${superAdminId}/neighborhoods`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setNeighborhoods(data))
      .catch(error => console.error('Error fetching neighborhoods:', error));
  }, [superAdminId]);

  const handleAddNeighborhoodClick = () => {
    setCurrentNeighborhood({ id: null, name: '', location: '', image: '' });
    setImageFile(null);
    setIsEditing(true);
  };

  const handleEditClick = (neighborhood) => {
    setCurrentNeighborhood(neighborhood);
    setImageFile(null);
    setIsEditing(true);
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`https://neighborhood-nest-6.onrender.com/superadmins/${superAdminId}/neighborhoods/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setNeighborhoods(neighborhoods.filter(neighborhood => neighborhood.id !== id));
    } catch (error) {
      console.error('Error deleting neighborhood:', error);
    }
  };

  const handleSaveClick = async () => {
    const formData = new FormData();
    formData.append('name', currentNeighborhood.name);
    formData.append('location', currentNeighborhood.location);
    if (imageFile) {
      formData.append('image', imageFile);
    }

    try {
      let response;
      if (currentNeighborhood.id) {
        // Update neighborhood
        response = await fetch(`https://neighborhood-nest-6.onrender.com/superadmins/${superAdminId}/neighborhoods/${currentNeighborhood.id}`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
          body: formData,
        });
      } else {
        // Add new neighborhood
        response = await fetch(`https://neighborhood-nest-6.onrender.com/superadmins/${superAdminId}/neighborhoods`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
          body: formData,
        });
      }

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      if (currentNeighborhood.id) {
        setNeighborhoods(neighborhoods.map(neighborhood => (neighborhood.id === currentNeighborhood.id ? data : neighborhood)));
      } else {
        setNeighborhoods([...neighborhoods, data]);
      }

      setIsEditing(false);
      setCurrentNeighborhood({ id: null, name: '', location: '', image: '' });
      setImageFile(null);
    } catch (error) {
      console.error('Error saving neighborhood:', error);
    }
  };

  const handleChange = (e) => {
    setCurrentNeighborhood({
      ...currentNeighborhood,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  return (
    <div className="Group239185 w-full p-6 relative">
      <div className="flex justify-between items-center mb-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleAddNeighborhoodClick}>
          Add Neighborhood
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {neighborhoods.map(neighborhood => (
          <div key={neighborhood.id} className="CardArticle w-full bg-white rounded-lg flex-col justify-center items-center p-4">
            <div className="Thumbnail h-[200px] rounded flex-col justify-center items-center flex">
              <img className="Thumbnail self-stretch grow shrink basis-0" src={neighborhood.image} alt={neighborhood.name} />
            </div>
            <div className="BodyContent self-stretch pt-6 pb-4 bg-white flex-col justify-center items-start gap-[26px] flex">
              <div className="TagTitle self-stretch h-[62px] flex-col justify-start items-start gap-5 flex">
                <div className="Frame27 flex-col justify-center items-start gap-6 flex">
                  <div className="KilimaniApartments text-[#2d2e2e] text-base font-semibold font-['Inter']">{neighborhood.name}</div>
                  <div className="Kilimani text-[#2d2e2e] text-base font-semibold font-['Inter']">{neighborhood.location}</div>
                </div>
              </div>
              <div className="actions flex justify-between">
                <button onClick={() => handleEditClick(neighborhood)} className="edit-btn text-blue-500">Edit</button>
                <button onClick={() => handleDeleteClick(neighborhood.id)} className="delete-btn text-red-500">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isEditing && (
        <div className="edit-form fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="form-container bg-white p-4 rounded-lg">
            <h2 className="text-lg font-semibold">{currentNeighborhood.id ? 'Edit Neighborhood' : 'Add Neighborhood'}</h2>
            <input
              type="text"
              name="name"
              value={currentNeighborhood.name}
              onChange={handleChange}
              placeholder="Name"
              className="input-field w-full mb-4 p-2 border rounded"
            />
            <input
              type="text"
              name="location"
              value={currentNeighborhood.location}
              onChange={handleChange}
              placeholder="Location"
              className="input-field w-full mb-4 p-2 border rounded"
            />
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              className="input-field w-full mb-4 p-2 border rounded"
            />
            <div className="actions flex justify-between">
              <button onClick={handleSaveClick} className="save-btn text-white bg-blue-500 p-2 rounded">Save</button>
              <button onClick={() => setIsEditing(false)} className="cancel-btn text-white bg-gray-500 p-2 rounded">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Neighborhood;
