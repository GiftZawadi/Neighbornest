import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AdminDashboardMainContent = () => {
  const [residents, setResidents] = useState([]);

  // Fetch residents on component mount
  useEffect(() => {
    const fetchResidents = async () => {
      try {
        const response = await axios.get('/api/residents');
        setResidents(response.data);
      } catch (error) {
        console.error("Error fetching residents", error);
      }
    };
    fetchResidents();
  }, []);

  const handleEdit = (id) => {
    setResidents(residents.map(resident =>
      resident.id === id ? { ...resident, isEditing: !resident.isEditing } : resident
    ));
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/residents/${id}`);
      setResidents(residents.filter(resident => resident.id !== id));
    } catch (error) {
      console.error("Error deleting resident", error);
    }
  };

  const handleInputChange = (id, field, value) => {
    setResidents(residents.map(resident =>
      resident.id === id ? { ...resident, [field]: value } : resident
    ));
  };

  const handleSave = async (id) => {
    const residentToUpdate = residents.find(resident => resident.id === id);
    try {
      await axios.put(`/api/residents/${id}`, residentToUpdate);
      setResidents(residents.map(resident =>
        resident.id === id ? { ...resident, isEditing: false } : resident
      ));
    } catch (error) {
      console.error("Error updating resident", error);
    }
  };

  return (
    <div className="p-6">
      <Link to="/add-resident" className="Frame3 h-10 pl-4 pr-6 py-2 bg-[#cfebf9] rounded justify-start items-center gap-3 inline-flex cursor-pointer">
        <div className="IcRoundPlus w-6 h-6 relative" />
        <div className="AddResident text-[#4c4c4c] text-base font-medium font-['Manrope'] leading-normal">Add Resident</div>
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {residents.map((resident) => (
          <div key={resident.id} className="Frame495 h-[339px] p-6 bg-[#f6f6f6] rounded-lg flex-col justify-start items-center gap-4 inline-flex">
            {resident.isEditing ? (
              <>
                <input
                  type="text"
                  value={resident.name}
                  onChange={(e) => handleInputChange(resident.id, 'name', e.target.value)}
                  className="text-[#2d2e2e] text-base font-semibold font-['Inter']"
                />
                <input
                  type="email"
                  value={resident.email}
                  onChange={(e) => handleInputChange(resident.id, 'email', e.target.value)}
                  className="w-[243px] h-[21px] text-center text-[#2d2e2e] text-base font-normal font-['Inter'] leading-snug"
                />
                <input
                  type="text"
                  value={resident.houseNumber}
                  onChange={(e) => handleInputChange(resident.id, 'houseNumber', e.target.value)}
                  className="border p-2 w-full mb-2"
                />
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                  onClick={() => handleSave(resident.id)}
                >
                  Save
                </button>
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={() => handleEdit(resident.id)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-gray-200 h-16 w-16"></div>
                </div>
                <h3 className="text-lg font-semibold">{resident.name}</h3>
                <p>{resident.email}</p>
                <p>House: {resident.houseNumber}</p>
                <div className="flex mt-4">
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                    onClick={() => handleEdit(resident.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => handleDelete(resident.id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboardMainContent;
