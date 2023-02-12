import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
 

    function pathLocation(route){
        if(route === location.pathname){
            return true;
        }
    }

  return (
    <div className='bg-white border-b-2 sticky top-0 z-50 shadow-sm'>
        <header className='flex justify-between items-center px-3 py-3 max-w-6xl mx-auto'>
            <div>
                <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo"className='h-5 cursor-pointer' onClick={() => navigate("/")}/>
            </div>
            <div>
                <ul className="flex space-x-10 font-semibold text-sm cursor-pointer text-black">
                    <li className= {`border-b-2 border-b-transparent ${pathLocation("/") && " border-b-red-700"}`} onClick={() => navigate("/")}
                    >Home</li>
                    <li className= {` border-b-2 border-b-transparent ${pathLocation("/offers") && " border-b-red-700"}`} onClick={() => navigate("/offers")}
                    >Offers</li>
                    <li className= {` border-b-2 border-b-transparent ${pathLocation("/login") && "border-b-red-700"}`} onClick={() => navigate("/login")}
                    >Sign in</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
