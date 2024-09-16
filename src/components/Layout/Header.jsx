'use client'

import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from "next/navigation";

const links = [
  { href: "/#about", text: "About" },
  { href: "/#project", text: "Project" },
  { href: "/#team", text: "Team" },
  { href: "/#contact", text: "Contact" },
];

function NavItem({ label, link}) {
  const path = usePathname();
  return (
    <a href={link}>
      <li className={`${link === path ? "font-bold text-md" : "font-normal"} font-bold font-primary uppercase pt-2 p-1 text-md relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}>
        {label}
      </li>
    </a>
  );
}

function NavList() {
  return (
    <ul className="mb-4 mt-2 px-4 py-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-5">
      <NavItem label="About" link={'/#about'} />
      <NavItem label="Solution" link={'/#solution'} />
      <NavItem label="Team" link={'/#team'} />
      <NavItem label="Contact" link={'/#contact'} />
    </ul>
  );
}

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <nav className="sticky top-4 h-[60px] lg:h-[70px] z-50 my-4 mx-4 lg:mx-12 rounded-md bg-[#000b37] backdrop-filter backdrop-blur-lg bg-opacity-85" fullWidth >
      <div className="container mx-auto flex items-center p-2 justify-between text-white">
        <Link href="/">
          <Image src="/images/logo-RD-white.png" width={100} height={100} alt="Logo Royal Defense" priority />
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          variant="text"
          color="blue-gray"
          onClick={handleOpen}
          className="ml-auto inline-block text-blue-gray-900 lg:hidden"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6 text-white" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="rounded-xl bg-white backdrop-filter p-2">
          <NavList />
        </div>
      </Collapse>
    </nav>
  );
}
