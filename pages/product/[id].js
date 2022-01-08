import { useRouter } from 'next/router'

const ProductItem = () => {

    const router = useRouter()
    
    return (
        <div>
            <h1>Estas en el producto {router.query.id}</h1>
        </div>
    )
}

export default ProductItem
