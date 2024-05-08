import React, { useState } from 'react'

const App = () => {
  const [fullName , setFullName] = useState({
    fname : "",
    lname : "",
  })

  const [itsTrue , setItsTrue] = useState(false)

  const onChange = (e) => {
    const {name , value} = e.target ;
    setFullName({
      ...fullName,
      [name] : value
    })
  }

    return (
      <section>
        <h1>Full Name Display</h1>
        <form action="" onSubmit={(e) => {
          e.preventDefault()
          setItsTrue(!itsTrue)
        }}>
          <div>
            <label htmlFor="fname">First Name : </label>
            <input 
              type="text" 
              id='fname' 
              className='input' 
              name = "fname"
              value = {fullName.fname}
              onChange={onChange}
              required 
            />
          </div>
          <div>
            <label htmlFor="lname">Last Name : </label>
            <input 
              type="text" 
              id='lname' 
              className='input' 
              name = "lname"
              value = {fullName.lname}
              onChange={onChange}
              required 
            />
          </div>
          <button>Submit</button>
        </form>

        {itsTrue && <p>Full Name: {fullName.fname} {fullName.lname} </p>}
      </section>
    )
}

export default App