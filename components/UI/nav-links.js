'use client';

import {
  CreditCardIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  ChartPieIcon,
  BanknotesIcon,
  ScaleIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Overview and Flow', href: '/dashboard/overview-and-flow', icon: ChartPieIcon },
  { name: 'Budget analysis and Goals', href: '/dashboard/budget-analysis-and-goals', icon: ScaleIcon },
  { name: 'Bills and Debt', href: '/dashboard/bills-and-debt', icon: CreditCardIcon },
  { name: 'Income and Savings', href: '/dashboard/income-and-savings', icon: BanknotesIcon }
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
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-sky-700': pathname === link.href,
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