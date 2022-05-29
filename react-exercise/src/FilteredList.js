import React, { useMemo, useState } from "react";

export const FilteredList = ({users}) => {
    const [member,useMember] = useState(users);

     const handleMemberchip= useMemo(()=>{
         return member.filter(item=>item.age >18);
     },[member])
  return (
    <div>
        <h1>FilteredList</h1>
        {handleMemberchip.map(item=>{return(
            <div>
          <p>{item.id}</p>  
          <p>{item.name}</p>  
          <p>{item.age}</p> 
          </div> 
        )})}
    </div>
  );
};
