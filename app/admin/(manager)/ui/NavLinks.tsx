'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { Home, GraduationCap, Code2, Rocket, Indent, SquareStack } from 'lucide-react';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/admin/dashboard', icon: Home },
  { name: 'Projects',href: '/admin/projects',icon: Code2},
  { name: 'Formations', href: '/admin/formations', icon: GraduationCap },
  { name: 'Experiences', href: '/admin/experiences', icon: Indent },
  { name: 'Competences', href: '/admin/competences', icon: Rocket },
  { name: 'Technologies', href: '/admin/technologies', icon: SquareStack },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center my-2 gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
