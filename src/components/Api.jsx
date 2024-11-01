import React, { useEffect, useState } from "react";

function Api() {
  const [users, setUsers] = useState([]);

  const hey = async () => {
    const response = await fetch("https://reqres.in/api/users");

    const json = await response.json();
    // console.log(json);
    setUsers(json.data);
  };

  useEffect(() => {
    hey();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-around">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl">
          <h1 className="text-4xl font-bold text-center text-gray-700 mb-6">
            <span className="text-blue-600">React</span> API Request
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {users.map((user) => {
              return (
                <div
                  key={user.id}
                  className="bg-gray-50 rounded-lg border border-gray-200 p-4 transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:text-white"
                >
                  <img
                    className="rounded-full w-28 h-28 mx-auto mb-4"
                    src={user.avatar}
                    alt={`${user.first_name} ${user.last_name}`}
                  />
                  <h3 className="text-lg font-semibold text-center">{user.first_name} {user.last_name}</h3>
                  <h2 className="text-center">{user.email}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Api;
