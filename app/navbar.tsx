// @ts-nocheck
'use client';

import { Fragment, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Tables', href: '/tables' },
  { name: 'Charts', href: '/charts' },
  { name: 'Trends', href: '/trends' },
  { name: 'Blog', href: '/blog' },
  { name: 'Downloads', href: '/downloads' },
  { name: 'Contact', href: '/contact-us' }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Navbar() {
  const pathname = usePathname();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 768); // 768px is typically the 'md' breakpoint
    }
    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize the state on component mount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Disclosure as="nav" className="bg-white shadow-sm relative z-10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="hidden sm:flex sm:justify-center sm:space-x-8 sm:ml-6 sm:grow">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        pathname === item.href ? 'border-slate-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                        'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                      )}
                      aria-current={pathname === item.href ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <Disclosure.Button style={{ display: isSmallScreen ? 'inline-flex' : 'none' }} className="items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? <XMarkIcon className="block h-6 w-6" /> : <Bars3Icon className="block h-6 w-6" />}
              </Disclosure.Button>
            </div>
            <Disclosure.Panel className="absolute top-16 right-0 w-full bg-white shadow-md z-20">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      pathname === item.href ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={pathname === item.href ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
