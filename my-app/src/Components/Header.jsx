import React from 'react'

function Header() {
  return (
    <div>
       <header className="bg-orange-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* <Map size={28} /> */}
            <h1 className="text-2xl font-bold">TrafficEase</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li className="cursor-pointer hover:underline">Dashboard</li>
              <li className="cursor-pointer hover:underline">Live Map</li>
              <li className="cursor-pointer hover:underline">Route Planner</li>
              <li className="cursor-pointer hover:underline">About</li>
            </ul>
          </nav>
        </div>
      </header>
      <header className="bg-orange-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* <Map size={28} /> */}
            <h1 className="text-2xl font-bold">TrafficEase</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li className="cursor-pointer hover:underline">Dashboard</li>
              <li className="cursor-pointer hover:underline">Live Map</li>
              <li className="cursor-pointer hover:underline">Route Planner</li>
              <li className="cursor-pointer hover:underline">About</li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
