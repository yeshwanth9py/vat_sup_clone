import React, { useEffect, useState } from 'react'


const PREFIX = "whatsapp-clone-";


function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;
  //function + useState only gonna run fr 1st time
  const [value, setValue] = useState(()=>{
    const jsonvalue = localStorage.getItem(prefixedKey);
    if(jsonvalue != null) return JSON.parse(jsonvalue);
    if(typeof initialValue === "function"){
        return initialValue()
    }
    else{
        return initialValue
    }
  })
  useEffect(()=>{
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  },[prefixedKey, value])

  return [value, setValue]


}

export default useLocalStorage