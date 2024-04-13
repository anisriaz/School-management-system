"use client"


// import { getServerSession } from "next-auth/next"
// import { authOptions } from "../../../api/auth/[...nextauth]/route"
// import { useSession } from "next-auth/react"

// export default function Page() {
//   const { data: session } = useSession()

//   if (typeof window === "undefined") return null

//   if (session) {
//     return (
//       <>
//         <h1>Protected Page</h1>
//         <p>You can view this page because you are signed in.</p>
//       </>
//     )
//   }
//   return <p>Access Denied</p>
// }

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       session: await getServerSession(
//         context.req,
//         context.res,
//         authOptions
//       ),
//     },
//   }
// }
import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import  Profile  from '../../../../public/Clsses.jpg';

const Admindashboard = () => {
  return (
    <div>
    <div>

      <h1 className='text-center mt-5'>Dashboard is this</h1>
  
      <div>
         <nav className="flex text-base mt-9">
          <Link href="/Islamabad/Classes">
            <div className="mr-20 mx-4  hover:text-fuchsia-600 rounded-lg p-10 bg-blue-300 flex flex-col items-center">
              <Image
                src={Profile }
                alt="img"
                className="w-40 h-40 mb-4"
              />
              Classes
            </div>
          </Link>
          <div>
          <Link href="/Islamabad/Teachers">
            <div className="mr-20 mx-4 my-2 hover:text-fuchsia-600 rounded-lg p-10 bg-blue-300 flex flex-col items-center">
              <img
                src="your_image_url_here" 
                alt="img"
                className="w-40 h-40  mb-4"
              />
              Teachers
            </div>
          </Link>
          </div>
        </nav>
      </div>
    </div>
   </div>
  );
};

export default Admindashboard;




