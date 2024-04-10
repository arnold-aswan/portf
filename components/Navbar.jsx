"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import logo from "@/public/assets/logo.svg";
import menu from "@/public/assets/menu.svg";
import close from "@/public/assets/close.svg";
import Image from "next/image";
import { navLinks } from "@/constants";

const Navbar = () => {
  const [active, setActive] = useState(" ");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`paddingX w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      } `}>
      <div className="w-full flex justify-between items-center ">
        <Link
          href="/"
          className="flex items-center gap-2 "
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <Image src={logo} alt="logo" width={54} height={54} />
          <p className="text-white font-bold text-[18px] cursor-pointer ">
            Arnold Aswani
          </p>
        </Link>

        <div className="md:hidden">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            width={24}
            height={24}
            onClick={() => setToggle(!toggle)}
            className="cursor-pointer"
          />
        </div>

        <ul
          className={`${
            toggle
              ? "flex flex-col p-6 black-gradient gap-4 text-[16px] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl "
              : "hidden"
          } list-none md:flex gap-10 `}>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white font-medium text-[18px] cursor-pointer`}
              onClick={() => {
                setActive(nav.title);
                setToggle(!toggle);
              }}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
