"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";

type Props = {};

const navList = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Product",
    href: "/product",
  },
  {
    title: "Publishing",
    href: "/publishing",
  },
  {
    title: "Career",
    href: "/career",
  },
  {
    title: "About us",
    href: "/about",
  },
];

const HeaderNav: FC<Props> = ({}) => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-11">
      {navList.map((nav) => {
        return (
          <Link
            key={nav.href}
            className={
              pathname === nav.href
                ? "text-main-2 font-bold transition"
                : "font-bold"
            }
            href={nav.href}
          >
            {nav.title}
          </Link>
        );
      })}
    </nav>
  );
};
export default HeaderNav;
