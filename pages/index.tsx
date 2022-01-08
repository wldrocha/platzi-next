import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(async () => {
    const response = await window.fetch('/api/avo')
    const { data } = await response.json()

    setProductList(data)
  }, [])

  return (
    <div>
      <Navbar />
      <h1>Holis con avocados</h1>
      {productList.map((product) => (
        <div>{product?.name}</div>
      ))}
    </div>
  )
}

export default Home
