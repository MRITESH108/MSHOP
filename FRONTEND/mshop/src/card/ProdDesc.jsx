import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import gyserimg from '../ad-images/fansgysers.webp'


const ProdDesc = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => alert('Product not fetched'));
    }, [id]);

    const handleAddItem = () => {
        dispatch(addToCart({...product, id: product._id}));
    }

    if (!product) {
        return <div>Loading product...</div>;
    }

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <img src={gyserimg} alt="" />
                <h1>{product.name}</h1>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Description:</strong> {product.description}</p>
                <p><strong>Price:</strong> ${product.price}</p>
                <button onClick={handleAddItem}>Add to cart</button>
            </div>
        </div>
    )
}

export default ProdDesc
