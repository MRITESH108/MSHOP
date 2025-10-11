import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import gyserimg from '../ad-images/fansgysers.webp'
import { useDispatch } from 'react-redux';
import { saveDBdata} from '../features/cartSlice'


const ProdDesc = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => alert('Product not fetched'));
    }, [id]);

    const handleAddItem = () => {
        dispatch(saveDBdata(product));
    };

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
