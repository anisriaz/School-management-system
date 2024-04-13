import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="body-font bg-zinc-700 text-white">
      <div className="container flex flex-wrap p-5 md:flex-row items-center justify-between">
        <div className="mr-9 flex items-center">
          <Link href="/">
            <h1 className="text-left text-xl">School Management</h1>
          </Link>
          <div className="ml-4 flex">
            <Link href="/">
              <h1 className="mr-4 hover:text-fuchsia-600">Home</h1>
            </Link>
            <Link href="/Admin">
              <h1 className="hover:text-fuchsia-600">Admin</h1>
            </Link>
          </div>
        </div>
        <nav className="flex flex-wrap text-base">
          <Link href="/AboutUS">
            <h1 className="mr-9 hover:text-fuchsia-600">About US</h1>
          </Link>
          <Link href="/ContactUS">
            <h1 className="hover:text-fuchsia-600">Contact US</h1>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

