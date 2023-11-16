import React from 'react'

export default function Input({id,title,type,value,name,changeData,customClasses,errors}) {
  return (
    <div className="mb-3">
        <label htmlFor={id} className="form-label">{title}</label>
        <input type={type} name={name} value={value} className={`form-control ${customClasses}`} id={id}  onChange={changeData}/>
        {errors[name] && <p className='text-danger'>{errors[name]}</p>}
      </div>
  )
}
