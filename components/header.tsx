import Link from 'next/link';
import BrandInfo from './brand-info';

const Header = () => {
  return (
    <div className="h-16 items-center justify-between border-b-2 border-neutral-200 bg-neutral px-4 lg:flex">
      <div className="max-w-8xl">
        <Link href="/">
          <BrandInfo />
        </Link>
      </div>
    </div>
  );
};

export default Header;
