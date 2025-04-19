
// Product item type
export type Product = {
    id: string
    name: string
    image: String
}

export type ProductGroup = {
    category: string
    pointsRequired: number
    products: Product[]
}

