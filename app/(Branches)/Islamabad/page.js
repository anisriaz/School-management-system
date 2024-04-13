"use client"

import React from 'react';
import Link from 'next/link'


const Islamabad = () => {
    return (
      <div>
        <nav className="flex text-base">
          <Link href="/Islamabad/Dashboard">
            <div className="mr-20 mx-4 my-2 hover:text-fuchsia-600 rounded-lg p-10 bg-blue-300 flex flex-col items-center">
              <img
                src="your_image_url_here" 
                alt="img"
                className="w-40 h-40 mb-4"
              />
              Islamabad
            </div>
          </Link>
        </nav>
      </div>
    )
};

export default Islamabad;