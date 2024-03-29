import React from 'react';
import { ErrorMessage, useField } from 'formik';

function TextBar ({ label, ...props }){
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name} style={{display:"flex",justifyContent:'flex-start',fontSize:17}}>{label}</label>
      <input
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" className="error" name={field.name} />
    </div>
  )
}
export default TextBar;