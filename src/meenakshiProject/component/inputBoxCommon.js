import React from 'react';
import "../cssFiles/login.css";

export default function InputBox({label,type,value,onChange,placeholder}) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} placeholder={placeholder}/>
    </div>
  );
};

