import './ToDoSearch.css'
import React, { useState } from 'react';

function ToDoSearch({searchValue,setSearchValue}){

    return(
  
      <input placeholder="Cortar cebollas"  value={searchValue} className="ToDoSearch" onChange={(event)=>setSearchValue(event.target.value)}></input>
    )
  }

  export {ToDoSearch};