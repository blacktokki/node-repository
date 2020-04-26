import React from 'react';

const CardNew = ({ name, value }) => {
  return (
    <div className="card card-new">
      <h4>{name}</h4>
      <div>{value}</div>
    </div>
  );
};

export default CardNew;