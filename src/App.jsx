import React from "react";
import Header from "./nav/Header";

function App() {
  const users = [
    { id: 1, name: "Ali", age: 25, job: "Developer", city: "Tashkent" },
    { id: 2, name: "Bek", age: 30, job: "Designer", city: "Samarkand" },
    { id: 3, name: "Nodir", age: 28, job: "Manager", city: "Bukhara" },
    { id: 4, name: "Olim", age: 22, job: "Marketer", city: "Andijan" },
    { id: 5, name: "Rustam", age: 27, job: "Engineer", city: "Namangan" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Header users={users} />
    </div>
  );
}

export default App;
