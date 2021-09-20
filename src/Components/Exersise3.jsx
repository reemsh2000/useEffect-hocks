import React, { useState, useEffect } from 'react'
function Exersise3() {
  const [value, setValue] = useState('')
  const [result, setResult] = useState([])
  const key = '8qSz5zbv4c0PrJvw32pQACfuEb6LLwzV'
  useEffect(() => {
    const getData = () => {
      return fetch(
        `https://api.giphy.com/v1/gifs/search?q=${value}&api_key=${key}&limit=6`,
      ).then((res) => res.json())
    }
    getData().then(res=>setResult(res.data))
    return () => {
      document.querySelector('#search-value').removeEventListener('onChange',null)
    }
  }, [value])
  return (
    <div>
      <input
        id="search-value"
        type="text"
        placeholder="Search"
        onChange={(e) => setValue(e.target.value)}
        style={{margin:'15px 250px',width:'300px'}}
      />
      <br/>
      <br/>
      <div className='giff'>
      { 
          
          result?result.map((ele)=>{
           return   <img src={ele.images["480w_still"].url}alt='Gif' key={ele.id}/>

          // return console.log(ele.images["480w_still"].url)

          }):''
      }
      </div>
    </div>
  )
}

export default Exersise3
