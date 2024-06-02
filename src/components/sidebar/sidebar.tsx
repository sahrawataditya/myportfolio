"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SidebarItems } from "../common/Data";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const pathUrl = usePathname();
  return (
    <aside className={`aside ${open ? "open" : ""}`}>
      <div onClick={handleOpen} className="nav-toggler">
        <span />
      </div>
      <div className="aside-inner">
        <div className="logo">
          <Link href="/" onClick={handleClose}>
            Aditya
          </Link>
        </div>
        <ul className="nav">
          {SidebarItems.map((item, indx) => (
            <li onClick={handleClose} key={indx}>
              <Link
                href={item.link}
                className={`${pathUrl == item.link && "active"}`}
              >
                <i className={item.icon} /> {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
