import React from 'react';

export const App = (props) => {
  const { message } = props;
  return(
    <div>
      The message is {message}.
    </div>
  )
}
