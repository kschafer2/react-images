import React from 'react';

const ImageList = props => {
  const images =  props.images.map(({description, id, urls}) => {
    // assign key property to root element
    return <img alt={description} key={id} src={urls.regular} />
  });

  return <div>{images}</div>;
};

export default ImageList;
