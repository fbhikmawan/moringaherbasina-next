import React from 'react';

// Function to convert \r\n to <br /> elements
export const renderLineBreaks = (description) => {
  return description.split('\r\n').map((line, index, array) => (
    <React.Fragment key={index}>
      {line}
      {index < array.length - 1 && <br />}
    </React.Fragment>
  ));
};