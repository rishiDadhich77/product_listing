import { useState, useEffect } from 'react';
import ProductCard from '../config';
// import { Products } from '../config';

const Body = () => {
    let [state , setState] = useState([]);

    useEffect(()=>{
      async function getData(){
        const resp =await fetch('https://dummyjson.com/products');
        const json = await resp.json();
        setState(json); 
      }
      getData();
    },[])
    
    

    return (
      <div>
        {
          state.map((elm ,ind)=>{
            return (
              <div>
                <h4>{elm.title}</h4>
                <img src={elm.images} alt="" />
              </div>
            )
          })
        }
      </div>
  )
      

  
  // return (
  //   <div className="restorent-card">
  //       {Products.map((elm) => {
  //         return <ProductCard {...elm} key={elm.id} />;

  //       })}
  //     </div>
  // )
}

export default Body;