"use client";

import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import { Link } from "@/navigation";
import { signOut, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import NavLink from "./NavLinks/NavLink";

interface Route {
  name: string;
  url: string;
}

interface NavbarProps {
  routes?: Route[];
  locale?: string;
}

export default function Navbar({ routes }: NavbarProps) {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  // Filter routes to exclude login and register if session exists
  const filteredRoutes = session
    ? routes?.filter(
        (route) => route.url !== "/login" && route.url !== "/register"
      )
    : routes;

  return (
    <nav className='bg-gray-800'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-expanded={isOpen}>
              <span className='sr-only'>Open main menu</span>
              {/* Icon when menu is closed */}
              {!isOpen ? (
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              ) : (
                // Icon when menu is open
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              )}
            </button>
          </div>
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            {/* Logo */}
            <div className='flex-shrink-0'>
              <Link href='/'>
                <p className='text-white text-xl font-bold'>Your Logo</p>
              </Link>
            </div>
            {/* Links */}
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex space-x-4'>
                {filteredRoutes?.map((route, index) => (
                  <NavLink key={index} name={route.name} url={route.url} />
                ))}
                <LanguageSwitcher />
                {session && (
                  <div className='flex items-center gap-5'>
                    <p className='text-white'>{session?.user?.name}</p>
                    <button
                      className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium'
                      onClick={() => signOut()}>
                      {t("logout")}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Login/Register buttons */}
          <div className='hidden absolute inset-y-0 right-0 sm:flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0'></div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className='sm:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            {routes?.map((route, index) => (
              <NavLink key={index} name={route.name} url={route.url} />
            ))}
            <LanguageSwitcher />
            {session && (
              <div className='flex-col items-center justify-between'>
                <p className='text-white mb-3'>{session?.user?.name}</p>
                <button
                  className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium'
                  onClick={() => signOut()}>
                  {t("logout")}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
