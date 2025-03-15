export function cartReducer(products, action) {
  switch (action.type) {
    case 'add-product': {
      const { id, price, quantity } = action.product

      const productIndex = products.findIndex(p => p.id === id)
      if (productIndex !== -1) {
        return products.map(p => {
          if (p.id === id) {
            const totalQuantity = p.quantity + quantity
            return {
              ...p,
              quantity: totalQuantity,
              totalPrice: price * totalQuantity
            }
          }
          return p
        })
      }

      return [...products, { ...action.product, totalPrice: price * quantity }]
    }
    case 'remove-product': {
      return products.filter(p => p.id !== action.productId)
    }
    default: {
      throw new Error('action not available')
    }
  }
}