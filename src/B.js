import React from 'react';
import C from './C';

const B = (props) => {
  return (
    <div>
      <C showRandomNumber={props.showRandomNumber}/>
    </div>
  )
}

export default B;
