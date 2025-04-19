import { ProductGroup } from "../types";

export const ProductGroups: ProductGroup[] =[
    {
    category: 'Drinks',
    pointsRequired: 500,
    products: [
        {
            id: '1',
            name: 'Pepsi',
            image: '/images/products/pepsi.png'
        },
        {
            id: '2',
            name: 'Coke',
            image: '/images/z-pin.svg'
        },
        {
            id: '3',
            name: 'Ice Tea',
            image: '/images/z-pin.svg'
        },
        {
            id: '4',
            name: 'Water',
            image: '/images/products/water.png'
        },
        {
            id: '5',
            name: 'Apple Juice',
            image: '/images/z-pin.svg'
        }
    ]
   },
   {
    category: 'Treats',
    pointsRequired: 500,
    products: [
        {
            id: '1',
            name: 'Ice Cream Sandwich',
            image: '/images/products/ice-cream.png'
        },
        {
            id: '2',
            name: 'Choco Brownie',
            image: '/images/brownie.png'
        },
        {
            id: '3',
            name: 'Caramel Mousse',
            image: '/images/z-pin.svg'
        },
    ]
   },
   {
    category: 'Sides',
    pointsRequired: 1000,
    products: [
        {
            id: '1',
            name: 'Corn Chips',
            image: '/images/products/pepsi.png'
        },
        {
            id: '2',
            name: 'Hot Chips',
            image: '/images/z-pin.svg'
        },
        {
            id: '3',
            name: 'Cheese Sticks',
            image: '/images/z-pin.svg'
        }
    ]
   },
   {
    category: 'Regular',
    pointsRequired: 1750,
    products: [
        {
            id: '1',
            name: 'Nachos',
            image: '/images/products/nachos-pack.png'
        },
        {
            id: '2',
            name: 'Burrito',
            image: '/images/small-burrito-wrap.png'
        },
        {
            id: '3',
            name: 'Burrito Bowl',
            image: '/images/small-bowl.png'
        }
    ]
   },
   {
    category: 'Large',
    pointsRequired: 2250,
    products: [
        {
            id: '1',
            name: 'Large Burrito',
            image: '/images/products/burrito-wrap.png'
        },
        {
            id: '2',
            name: ' Large Burrito Bowl',
            image: '/images/nachos.png'
        }
    ]
   },

]