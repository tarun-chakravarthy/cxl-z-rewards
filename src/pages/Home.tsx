import ProductCard from "../components/ProductCard"

function Home() {

  return (
    <main className="bg-primary px-4 pb-8 max-w-[400px] mx-auto">
        <div className="container bg-white ">
            <h1 className="text-4xl font-bold text-primary">TEST</h1>
            <ProductCard
              name="Test"
              image="/images/products/water.png"
              isLocked={true}
              pointsRequired={500}
            />
        </div>
    </main>
  )
}

export default Home
