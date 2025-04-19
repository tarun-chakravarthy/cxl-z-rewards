import React from 'react';
import ProductCard from './ProductCard';
import type { ProductCardProps } from './ProductCard';


// Product Cards Section props
interface ProductsLayoutProps {
    products: ProductCardProps[]
    pointsRequired: number
}

const ProductsLayout: React.FC<ProductsLayoutProps> =({products, pointsRequired}) => {
    return (
        <div className='overflow-x-auto'>
            <div className='flex px-1 gap-4 snap-x snap-mandatory scroll-smooth'>
                {products.map(product => 
                    (
                        <div key={product.name}>
                            <ProductCard
                             name={product.name}
                             image={product.image}
                             isLocked={product.isLocked}
                             pointsRequired={pointsRequired}
                             />
                        </div>
                    )
                )}

            </div>
        </div>
    )
}

export default ProductsLayout;