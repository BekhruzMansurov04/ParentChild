import React from "react";

function Header({ users }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">User List</h2>
      <ul className="space-y-4">
        {users.map((users) => (
          <li 
            key={users.id}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-gray-50"
          >
            <h3 className="text-lg font-semibold text-gray-900">{users.name}</h3>
            <p className="text-gray-700"><b>Age:</b> {users.age}</p>
            <p className="text-gray-700"><b>Job:</b> {users.job}</p>
            <p className="text-gray-700"><b>City:</b> {users.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;