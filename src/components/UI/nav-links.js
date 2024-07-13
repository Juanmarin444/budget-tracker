'use client';

import {
  CreditCardIcon,
  HomeIcon,
  UserIcon,
  ChartPieIcon,
  BanknotesIcon,
  ScaleIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { budgetData } from '@/utils/placeholderdata';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  // { name: 'Overview', href: '/dashboard/overview', icon: ChartPieIcon },
  { name: 'Income', href: '/dashboard/income-management', icon: BanknotesIcon },
  { name: 'Expenses', href: '/dashboard/expense-management', icon: CreditCardIcon },
  { name: 'Budgeting', href: '/dashboard/budget-management', icon: ScaleIcon },
  { name: 'Cash Flow', href: '/dashboard/cash-flow-management', icon: ChartPieIcon },
  { name: 'Savings Goals', href: '/dashboard/savings-goals', icon: HeartIcon },
  { name: `${budgetData.user.name}`, href:'/dashboard/user-profile', icon: UserIcon },
  { name: 'Income', href: '/dashboard/income-management', icon: BanknotesIcon },
  { name: 'Expenses', href: '/dashboard/expense-management', icon: CreditCardIcon },
  { name: 'Budgeting', href: '/dashboard/budget-management', icon: ScaleIcon },
  { name: 'Cash Flow', href: '/dashboard/cash-flow-management', icon: ChartPieIcon },
  { name: 'Savings Goals', href: '/dashboard/savings-goals', icon: HeartIcon },
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