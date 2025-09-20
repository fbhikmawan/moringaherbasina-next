import React from 'react';

// Function to convert line breaks to <br /> elements
export const renderLineBreaks = (description: string | null | undefined): React.ReactNode => {
  if (!description) return null;
  
  // Normalize line breaks to \n and then split
  const normalizedText = description.replace(/\r\n|\r/g, '\n');
  
  return normalizedText.split('\n').map((line: string, index: number, array: string[]) =>
    React.createElement(
      React.Fragment,
      { key: index },
      line,
      index < array.length - 1 && React.createElement('br')
    )
  );
};