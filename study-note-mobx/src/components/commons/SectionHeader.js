import React from 'react';

const SectionHeader = (props) => {
  return (
      <div className="section-header">
          <h2>
              {props.title}
          </h2>
      </div>
  );
};

export default SectionHeader;