/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const LargePurpleSpinner = ({ size = 80 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 38 38" 
      xmlns="http://www.w3.org/2000/svg"
      stroke="#8B5CF6"
    >
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth="2">
          <circle strokeOpacity=".3" cx="18" cy="18" r="18"/>
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  );
};

const CenteredSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75">
      <LargePurpleSpinner />
    </div>
  );
};
LargePurpleSpinner.propTypes = {
  size: PropTypes.number,
};

export default CenteredSpinner;