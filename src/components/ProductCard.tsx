import React from 'react';
import lockedImage from '../assets/z-pin.svg'

interface ProductCardProps {
    name: string,
    image: string,
    pointsRequired: number,
    isLocked: boolean
}


const ProductCard:React.FC<ProductCardProps> = ({name, image, pointsRequired, isLocked}) => {
    return(
        <div className={`relative max-w-[107px] ${isLocked? 'opacity-50': ''}`}>
            {isLocked && (
                <div className='absolute bottom-0 right-[20px]'>
                    <img src={lockedImage} alt="img-lock" className='w-[12px]'/>
                </div>
            )}
            <img src={image} alt={name} className='w-auto'/>
            <div className='bg-primary'><p className='text-white text-center'>{pointsRequired} pts</p></div>
            <h4>{name}</h4>
        </div>
    )
}

export default ProductCard