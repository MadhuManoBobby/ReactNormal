import React from 'react'
import { useNavigate } from 'react-router-dom';

export const UpdatedComponent = (OldComponent) => {
    
   function NewComponent() {
    const navigate = useNavigate();
      return <OldComponent navigate={navigate}/>
    }
    
  return NewComponent;
}
