import Image from 'next/image';

const BrandInfo = () => {
  return (
    <div>
      <div className="flex items-center gap-0.5">
        <div className="w-max">
          <Image src="/next.svg" alt="logo" width={20} height={20} />
        </div>
        <p className="text-lg font-semibold text-indigo-700">Vercel</p>
      </div>
    </div>
  );
};

export default BrandInfo;
