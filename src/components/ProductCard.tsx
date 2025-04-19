import React from 'react';
import lockedImage from '../assets/lock-icon.svg';

// Product card props
export interface ProductCardProps {
  name: string;
  image: string;
  pointsRequired: number;
  isLocked: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  pointsRequired,
  isLocked,
}) => {
  return (
    <div className='relative w-[107px] h-[180px] flex-shrink-0'>
      <div className={`${isLocked ? 'opacity-50' : ''} h-full w-full`}>
        <div className='h-[100px] w-full flex items-center justify-center bg-[#E6EFD5]'>
          <img
            src={image}
            alt={name}
            className='max-h-full max-w-full object-contain'
          />
        </div>
        <div className='bg-primary py-[4px]'>
          <span className='text-white text-center block text-sm font-regular'>
            {pointsRequired} pts
          </span>
        </div>
        <p className='text-center mt-[12px] font-regular'>{name}</p>
      </div>
      {isLocked && (
        <div className='absolute bottom-[86px] right-[6px]'>
          <img src={lockedImage} alt='img-lock' className='w-[16px]' />
        </div>
      )}
    </div>
  );
};

export default ProductCard;
