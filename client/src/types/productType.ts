type ProductType = {
	id: number
	attributes: {
		quantity: number
		name: string
		price: number
		description: string
		category: string
		collection: string
		type: string
		publishedAt: string
		image: {
			data: {
				attributes: {
					url: string
				}
			}
		}
	}
}

export default ProductType
