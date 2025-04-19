import { FC, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductGroups } from '../data/productData';
import ProductCard from './ProductCard';
import chevronRight from '../assets/chevron-right.svg'

const ProductCarousel: FC = () => {
    const [params] = useSearchParams();
    const uid = params.get('uid');
    const userPoints = parseInt(params.get('points') || '0', 10);
    const carouselItems = useMemo(() => {
        if (!uid) return []

        const selected: { name: string; image: string; pointsRequired: number; isLocked: boolean }[] = []

        for (const group of ProductGroups) {
            // Avoid Items that have invalid product images
            const pool = group.products.filter(
                (p) => !String(p.image).includes('z-pin.svg')
            )
            const random = pool[Math.floor(Math.random() * pool.length)]
            if (random) {
                selected.push({
                    name: random.name,
                    image: String(random.image),
                    pointsRequired: group.pointsRequired,
                    isLocked: group.pointsRequired > userPoints,
                })
            }
        }

        return selected.slice(0, 5)
    }, [uid, userPoints])


    return (
        <>
        <div className='overflow-x-scroll' style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
            <div className='flex px-1 gap-4 snap-x snap-mandatory scroll-smooth ml-[20px]'>
                {carouselItems.map((item, index) => (
                    <div key={index} className='shrink-0'>
                        <ProductCard
                            name={item.name}
                            image={item.image}
                            pointsRequired={item.pointsRequired}
                            isLocked={item.isLocked}
                        />
                    </div>
                ))}

                <div className='w-full gap-4 min-w-[107px] max-h-[117px] flex items-center'>
                    <a href='/?uid=1&points=500' className='font-medium  max-h-[100px] text-primary hover:underline inline-block items-center h-auto'>
                    See More
                    </a>
                    <img src={chevronRight} alt="icon" />
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductCarousel


