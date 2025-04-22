import React from 'react'

function Header() {
  return (
    <div>
       <header className="bg-white text-orange-600 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* <Map size={28} /> */}
            <h1 className="text-3xl font-bold pl-14  ">Mandeer Traffic Guide </h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li className="cursor-pointer hover:underline font-bold text-xl text-black ">Current Traffic</li>
              <li className="cursor-pointer hover:underline font-semibold">Medium</li>
            </ul>
          </nav>
        </div>
      </header>
     
    </div>
  )
}

export default Header
