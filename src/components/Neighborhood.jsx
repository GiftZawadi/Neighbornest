import React, { useState, useEffect } from 'react';

const Neighborhood = () => {
  const [neighborhoods, setNeighborhoods] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentNeighborhood, setCurrentNeighborhood] = useState({
    name: '',
    location: '',
    image_url: ''
  });
  const [imageFile, setImageFile] = useState(null);

  // Fetch neighborhoods from the JSON server when the component mounts
  useEffect(() => {
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

    fetchNeighborhoods();
  }, []);

  const handleAddNeighborhoodClick = () => {
    setCurrentNeighborhood({ name: '', location: '', image_url: '' });
    setImageFile(null);
    setIsEditing(true);
  };

  const handleEditClick = (neighborhood) => {
    setCurrentNeighborhood(neighborhood);
    setImageFile(null); // Reset the image file input when editing
    setIsEditing(true);
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:5001/neighborhoods/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete neighborhood');
      }
      setNeighborhoods(neighborhoods.filter(neighborhood => neighborhood.id !== id));
    } catch (error) {
      console.error('Error deleting neighborhood:', error);
    }
  };

  const handleSaveClick = async () => {
    try {
      const formData = new FormData();
      formData.append('name', currentNeighborhood.name);
      formData.append('location', currentNeighborhood.location);
      if (imageFile) {
        formData.append('image_url', imageFile.name); // For JSON server, you might use the file name or a static URL
      }

      let response;
      if (currentNeighborhood.id) {
        // Update neighborhood
        response = await fetch(`http://localhost:5001/neighborhoods/${currentNeighborhood.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...currentNeighborhood,
            image_url: imageFile ? URL.createObjectURL(imageFile) : currentNeighborhood.image_url
          }),
        });
      } else {
        // Add new neighborhood
        response = await fetch('http://localhost:5001/neighborhoods', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...currentNeighborhood,
            image_url: imageFile ? URL.createObjectURL(imageFile) : currentNeighborhood.image_url
          }),
        });
      }

      if (!response.ok) {
        throw new Error('Failed to save neighborhood');
      }

      const data = await response.json();
      if (currentNeighborhood.id) {
        setNeighborhoods(neighborhoods.map(neighborhood => (neighborhood.id === currentNeighborhood.id ? data : neighborhood)));
      } else {
        setNeighborhoods([...neighborhoods, data]);
      }

      setIsEditing(false);
      setCurrentNeighborhood({ name: '', location: '', image_url: '' });
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
            <div className="Thumbnail h-[150px] w-[150px] rounded flex-col justify-center items-center flex">
              <img className="Thumbnail h-full w-full object-cover rounded" src={neighborhood.image_url} alt={neighborhood.name} />
            </div>
            <div className="BodyContent self-stretch pt-6 pb-4 bg-white flex-col justify-center items-start gap-[26px] flex">
              <div className="TagTitle self-stretch h-[62px] flex-col justify-start items-start gap-5 flex">
                <div className="Frame27 flex-col justify-center items-start gap-6 flex">
                  <div className="KilimaniApartments text-[#2d2e2e] text-base font-semibold font-['Inter']">{neighborhood.name}</div>
                  <div className="Kilimani text-[#2d2e2e] text-base font-semibold font-['Inter']">{neighborhood.location}</div>
                </div>
              </div>
              <div className="actions flex justify-between">
                <button 
                  onClick={() => handleEditClick(neighborhood)} 
                  className="edit-btn text-white bg-green-500 py-1 px-3 rounded">
                  Edit
                </button>
                <button 
                  onClick={() => handleDeleteClick(neighborhood.id)} 
                  className="delete-btn text-white bg-red-500 py-1 px-3 rounded">
                  Delete
                </button>
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
