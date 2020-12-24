import React from 'react';
import TextField from '@material-ui/core/TextField';

export const BasicTextField = ({label, name, reg, handleChange}) => {

  return (
      <TextField id="search" inputRef={reg} name={name}
      label={label} onChange={handleChange}/>
  );
}
