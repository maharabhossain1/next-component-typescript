import Link from 'next/link';
import BrandInfo from './brand-info';
import UserDropdownMenu from './user-dropdown-menu';

const Header = () => {
  return (
    <div className="h-16 items-center justify-between border-b-2 border-neutral-200 bg-neutral px-4 lg:flex">
      <div className="flex w-full  items-center justify-between">
        <div>
          <Link href="/dashboard">
            <BrandInfo />
          </Link>
        </div>
        <div>
          <UserDropdownMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
