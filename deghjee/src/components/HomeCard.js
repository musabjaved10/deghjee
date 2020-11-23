import React,{useContext} from 'react';
import {DataContext} from './CardData.js';
import CardN from './CardN.js';

import '../App.css';

export default function HomeCard() {
  const value = useContext(DataContext)
  const [products] = value.products
   
  return (
    <div>
      <div className="card">
            
                { products.map((val,index)=>{
                   return(
                    <CardN
                    key={val._id}
                    id={val._id}
                    feat={val.feat}
                    imgsrc={val.imgsrc}
                    detail={val.detail}
                    delivery={val.delivery}
                    time={val.time}
                    fill={val.fill}
                    price={val.price}
                    mname={val.mname}
                    link={val.links}
                    />
                   )            
                   }
                )
              }
              
          </div>
    </div>
  )
}
