import Link from "next/link";
import React from "react";

function JsNavbar() {
  return (
    <>
      <header className="flex justify-between items-center py-7 px-10">
        <h2 className="cursor-pointer text-green-500">
          Next <span className="text-orange-500">Notes</span>
        </h2>
        <nav>
          <ul className="list-none">
            <li className="font-medium text-base text-slate-100 .no-underline inline-block py-0 px-5">
              <Link href="/javascript/map">
                <a className="font-medium text-base .no-underline text-green-500 hover:text-orange-500">
                  Map
                </a>
              </Link>
            </li>
            <li className="font-medium text-base text-slate-100 .no-underline inline-block py-0 px-5">
              <Link href="">
                <a className="font-medium text-base .no-underline text-green-500 hover:text-orange-500">
                  Fetch API
                </a>
              </Link>
            </li>
            <li className="font-medium text-base text-slate-100 .no-underline inline-block py-0 px-5">
              <Link href="/javascript/javascript">
                <a className="font-medium text-base .no-underline text-green-500 hover:text-orange-500">
                  Javascript
                </a>
              </Link>
            </li>
            <li className="font-medium text-base text-slate-100 .no-underline inline-block py-0 px-5">
              <Link href="">
                <a className="font-medium text-base .no-underline text-green-500 hover:text-orange-500">
                  Phone
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        {/* <Link href="">
          <a>
            <button className="font-medium text-base text-slate-100 .no-underline">
              Contact
            </button>
          </a>
        </Link> */}
      </header>
    </>
  );
}

export default JsNavbar;
