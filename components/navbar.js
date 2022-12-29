import React from "react";
import Link from "next/link";
function Navbar() {
  return (
<div className='w-1/2 container mx-auto grid text-white border-b'>
<Link href="/">
          <h5 className="p-5 text-center rounded-xl text-white">Anasayfa</h5>
        </Link>
      <ul className="w-1/2 container mx-auto flex text-white justify-between py-5 ">
       
        <Link href="/calisanlar">
          <li>Çalışanlar</li>
        </Link>
        <Link href="/sirketler">
          <li>Şirketler</li>
        </Link>
        <Link href="/projeler">
          <li>Projeler</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
