import React, { useState, useEffect } from 'react'
//
function Exersise5() {
  const [result, setResult] = useState('')
  const [avatar, setAvatar] = useState('')
  // const inputChangedHandler=(e,property)=>{
  //  setResult({...result,[property]:e.target.value})
  // }
  //   onChange={(event)=>inputChangedHandler(event,'name')}
  useEffect(() => {
    //
    const getData = () => {
      return fetch(` https://jsonplaceholder.typicode.com/users`).then((res) =>
        res.json(),
      )
    }
    const randomAvatar = () => {
      return fetch(` https://randomuser.me/api/`).then((res) => res.json())
    }
    randomAvatar().then((res) => {
      !avatar && setAvatar(res.results[0].picture.large)
    })

    getData().then((res) => {
      !result && setResult(res[0])
    })
  })
  return (
    <div className="conatiner">
      <h2 className="title">User Profile </h2>
      {result ? (
        <div className=" user-profile">
          <div className="avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="information">
            <label>
              Name
              <input
                defaultValue={result.name}
              
              />
            </label>
            <label>
              Email
              <input defaultValue={result.email} />
            </label>
            <label>
              Website
              <input defaultValue={result.website} />
            </label>
            <label>
              Phone
              <input defaultValue={result.phone} />
            </label>
            <label>
              Comapany
              <input defaultValue={result.company.name} />
            </label>
            <label>
              City
              <input defaultValue={result.address.city} />
            </label>
          </div>
        </div>
      ) : (
        <div className="loader"></div>
      )}
    </div>
  )
}

export default Exersise5
