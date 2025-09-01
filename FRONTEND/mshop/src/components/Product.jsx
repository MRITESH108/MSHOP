import { useEffect, useState } from "react"
import axios from 'axios';

const Product = () => {
    const [produc, setProduc] = useState([]);
    const [page, setPage] = useState(1);

    const fetchData = async()=>{
       const res = await axios.get(`http://localhost:3000/?page=${page}`);
       setProduc(res.data.paginatedData);
    };


    useEffect(()=>{
        fetchData(page);

    },[page]);

    const handleprev = ()=>{
        setPage(prev=>Math.max(prev-1,1));
        
    };
    const handlenext = ()=>{
        setPage(next=>Math.min(next+1,3));
        console.log('clicked')
    };

  return (
    <div>
        <div>
            <button onClick={handleprev}>prev</button>
            <button onClick={handlenext}>next</button>
        </div>
      <div>
        {produc.map((prod)=>(
            <div key={prod._id} style={{margin:'5px',border: '2px solid red',display:'flex', justifyContent: 'center', alignItems:'center', flexDirection:'column'}}>
                <h3>{prod.id}.{prod.title}</h3>
                <h5>{prod.category}</h5>
                <p>{prod.description}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Product
