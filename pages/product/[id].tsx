import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const ProductItem = () => {
  const [product, setProduct] = useState<TProduct>()
  const {
    query: { id },
  } = useRouter()

  useEffect(async () => {
    const response = await window.fetch(`/api/avo/${id}`)
    const product = await response.json()
    setProduct(product)
  }, [])

  return (
    <div>
      <h1>{product?.name}</h1>
    </div>
  )
}

export default ProductItem
