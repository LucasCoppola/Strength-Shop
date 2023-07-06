import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import NotFoundPage from './pages/NotFoundPage'

import ProductType from './types/productType'
import CartProvider from './contexts/CartProvider'
import data from './data.json'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
	const [products, setProducts] = useState<ProductType[]>([])
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)

	useEffect(() => {
		setProducts(data)
	}, [setProducts])

	return (
		<>
			<CartProvider>
				<Navbar products={products} setIsDrawerOpen={setIsDrawerOpen} />
				<Routes>
					<Route path="/" element={<HomePage products={products} setIsDrawerOpen={setIsDrawerOpen} />} />
					<Route path="/products" element={<ProductsPage products={products} setIsDrawerOpen={setIsDrawerOpen} />} />
					<Route path="/checkout" element={<CheckoutPage />} />
					<Route path="/products/:id" element={<ProductDetailsPage products={products} setIsDrawerOpen={setIsDrawerOpen} />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
				<CartPage isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
			</CartProvider>
			<Footer />
		</>
	)
}

export default App
