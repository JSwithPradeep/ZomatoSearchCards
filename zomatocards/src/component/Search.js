import React, { useEffect, useState } from 'react'
import Fooddata from './FoodData'
import Form from 'react-bootstrap/Form';
import Cards from './Cards';
import Set from './Set';
import "./style.css"
const Search = () => {
    const [fData, setFdata] = useState(Fooddata)
    const [copyData, setCopyData] = useState([]);
    console.log(copyData);

    const changeData = (e)=>{
      let getchangedata = e.toLowerCase();

      if(getchangedata == ""){
        setCopyData(fData)
      }else{
        let storedata = copyData.filter((ele,k)=>{
          return ele.rname.toLowerCase().match(getchangedata);
        }) ;
        setCopyData(storedata);
      }
    }
    const zomatoLogo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png";
  
    useEffect(()=>{
      setTimeout(()=>{
        setCopyData(Fooddata);
      },3000)
      
    },[])
  return (
    <>
    <div className='container d-flex justify-content-between align-items-center'>
        <img src={zomatoLogo} style ={{width:"8rem" , position:"relative", left:"2%", cursor:"pointer"}}alt=''/>
        <h3 style={{color:"#1b1464", cursor:"pointer"}} className='mt-2'>Search Filter App</h3>
    </div>

    <Form className='d-flex justify-content-center align-items-center mt-3'>
          <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">
        
        <Form.Control type="text" placeholder="Search Restaurant" 
        onChange={(e)=>changeData(e.target.value)}/>
      </Form.Group>
      <button className='btn text-light col-lg-1' style={{ background: "#ed4c67"}}>Submit</button>
    </Form>

  <section className='item_section mt-4 container'>
    <h2 className='px-4' style={{fontWeight:400}}>Restaurant in Ahmedabad Open Now</h2>
    <div className='row mt-2 d-flex justify-content-around align-items-center'>
    {copyData && copyData.length ? <Cards data={copyData}/> : <Set sdata={fData}/>}    
    </div>
  </section>

</>
  )
}

export default Search;