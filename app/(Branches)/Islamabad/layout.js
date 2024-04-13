import React from 'react';
import Navbar from "../../(Menue)/Navbar/page";
import Link from 'next/link'
import { getServerSession } from 'next-auth';
import AuthProvider from './SessionProvider'


async function IslamabadLayout(props) {
  const session = await getServerSession();
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='flex'>
      <div className='flex h-screen bg-black w-[15vw] text-white'>
    
        <ul className='pt-5 flex flex-col gap-10 px-3'>
        <AuthProvider>
          <li>
          <Link href="/Islamabad/Dashboard">Dashboard</Link></li>   </AuthProvider>
          <li>
          <Link href="/Islamabad/Admin">Admin</Link></li>
          <li>
          <Link href="/Islamabad/Teachers">Teachers</Link></li>
          <li>
          <Link href="/Islamabad/Classes">Classes</Link></li>
          {/* <li>
          <Link href="/Islamabad/students/classDetails">classDetails</Link></li> */}
        </ul>
        </div>
       
      <div className='ml-5 mt-3'> {props.children}</div>
      </div>
    
    </div>
  );
}

export default IslamabadLayout;
