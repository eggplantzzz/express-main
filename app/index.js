import React from 'react';

export default (props) => {
  const { message } = props;
  return(
    <div>
      The good message for the message to show is {message}.
    </div>
  )
}
