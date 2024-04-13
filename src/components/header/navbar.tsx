import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type option = {
  displayName: string;
  path: string;
};
type props = {
  options: option[];
};

export default function Navbar({ options }: props) {
  const nav_menu = options.map((menu) => {
    return (
      <li key={menu?.displayName} className={``}>
        <Link to={`${menu?.path}`}>{menu?.displayName}</Link>
      </li>
    );
  });

  return (
    <div>
      <nav
        className={
          "p-2 m-0 list-none overflow-hidden flex justify-between bg-slate-700"
        }
      >
        {nav_menu}
      </nav>
    </div>
  );
}
