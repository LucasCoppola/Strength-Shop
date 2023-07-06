import { useContext } from 'react'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { CartContext } from '../contexts/CartProvider'
import ProductType from '../types/productType'

const ProductCard = ({ product, setIsDrawerOpen }: { product: ProductType; setIsDrawerOpen: (open: boolean) => void }) => {
	const [cartProducts, setCartProducts] = useContext(CartContext)

	const isDisabled = cartProducts.some((p: ProductType) => p.id === product.id)

	return (
		<div className="group relative rounded-lg border hover:shadow-lg">
			<a href={`/products/${product.id}`} title={product.attributes.name}>
				<div className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 relative w-full overflow-hidden">
					<img
						src={product.attributes.image.data.attributes.url}
						alt={product.attributes.name}
						className="w-full object-cover object-center transition-opacity duration-300 group-hover:opacity-50 md:h-52 lg:h-36 xl:h-48"
					/>
				</div>
				<h3 className="mt-4 px-2 pb-1 text-sm text-gray-700">{product.attributes.name}</h3>
				<p className="mt-1 px-2 pb-2 text-base font-medium text-gray-900">${product.attributes.price}</p>
			</a>
			<button
				onClick={() => {
					setCartProducts([...cartProducts, product])
					setIsDrawerOpen(true)
				}}
				disabled={isDisabled}
				title="Add to cart"
				className={`absolute bottom-[5rem]  flex items-center rounded-full bg-gray-900 px-6 py-2 opacity-0 transition-colors duration-300 group-hover:opacity-100 ${
					isDisabled ? 'cursor-not-allowed group-hover:opacity-50' : ''
				}`}
				style={{ right: '50%', transform: 'translateX(50%)' }}
			>
				<MdOutlineAddShoppingCart size={24} color="white" />
			</button>
		</div>
	)
}

export default ProductCard
