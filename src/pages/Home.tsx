import { useSearchParams } from "react-router-dom"
import ProductCarousel from "../components/ProductCarousel"
import Points from "../components/Points"

function Home() {
  const [params] = useSearchParams()
  const userPoints = parseInt(params.get('points') || '0', 10)
  return (
    <main className="bg-primary px-4 pb-8 max-w-[400px] mx-auto">
        <div className="container bg-white ">
          <Points points={userPoints} />
          <ProductCarousel />
        </div>
    </main>
  )
}

export default Home
