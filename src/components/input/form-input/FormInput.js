import React from 'react'

const FormInput = ([name, placeholder]) => {
  return (
    <div className='d-flex'>
        <label>
            {name}           
        </label>
        <div>
            <input 
                placeholder={placeholder}
                
            />
        </div>
    </div>
  )
}

export default FormInput