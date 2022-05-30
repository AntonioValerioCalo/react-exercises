import React, { useEffect, useRef, useState } from 'react'

export const CarDetails = ({ initialData }) => {
    const formRef = useRef(null);
  
    useEffect(() => {
      formRef.current.reset();
    }, [initialData]);
    
    const handleButton=()=>{
        console.log(formRef.current.defaultValue);
    }
  
    return (
      <div>
        <form onSubmit={handleButton} ref={formRef}>
          <input
            defaultValue={initialData.model}
            
            placeholder="Model"
          ></input>
          <input
            defaultValue={initialData.year}
      
            placeholder="Year"
          ></input>
          <input
            defaultValue={initialData.color}
           
            placeholder="Color"
          ></input>
          <button type="submit">Invio</button>
        </form>
         
      </div>
    );
  };


