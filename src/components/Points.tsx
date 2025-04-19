import React from 'react';
import Button from './Button';

interface PointsProps {
  points: number;
}

const Points: React.FC<PointsProps> = ({ points }) => {
  return (
    <div className='text-left flex justify-between px-[16px] pt-[30px] pb-[24px]'>
      <div>
        <h1 className='text-4xl font-bold text-primary'>{points}</h1>
        <p className='font-regular'>points</p>
      </div>
      <Button text='Redeem now' />
    </div>
  );
};

export default Points;
