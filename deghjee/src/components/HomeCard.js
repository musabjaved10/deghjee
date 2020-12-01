import React,{useContext,useEffect,useState} from 'react';
import {DataContext} from './CardData.js';
import CardN from './CardN.js';

import '../App.css';

export default function HomeCard() {
  const value = useContext(DataContext)
  const [products] = value.products
   const[limit,setLimit]=useState(8);
   
  return (
    <div className="card">
      <div >
            
                { products.slice(0,limit).map((val,index)=>{
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
              <br/><br/>
              <div style={{marginTop:"0%"}}>
              {limit <= 14 ?
              <button className="loadmore" onClick={()=>setLimit(limit+4)}>Load More</button>
              :<br/>}
              </div>
              <br/>
              
             
         
    </div>
  )
}
