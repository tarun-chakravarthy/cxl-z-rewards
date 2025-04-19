import { useSearchParams } from 'react-router-dom';
import ProductCarousel from '../components/ProductCarousel';
import Points from '../components/Points';
import CTA from '../components/CTA';
import MilestoneBar from '../components/MileStoneBar';

function Home() {
  const [params] = useSearchParams();
  const userPoints = parseInt(params.get('points') || '0', 10)
  return (
    <main className='bg-primary px-4 pb-8 max-w-[400px] mx-auto'>
        <div className='container bg-white '>
          <div className='px-[16px] pb-[24px]'>
            <Points points={userPoints} />
            <MilestoneBar points={userPoints} />
          </div>
          <div className='mt-[24px]'>
            <ProductCarousel />
          </div>
        </div>
        <div className='bg-secondary p-4 flex justify-between text-left gap-12'>
          <CTA text='Learn how your order helps feed others in need.' href='/?uid=1&points=500' />
        </div>
    </main>
  )
}

export default Home
