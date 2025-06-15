import React from 'react';
import PropTypes from 'prop-types';

function ResourcesDescription({ text }) {
  return (
    <div
      className="w-full max-w-[1300px] mt-[80px] px-6 md:px-10 mx-auto flex items-center h-auto min-h-[180px]"
    >
      <p className="text-[20px] leading-[28px] tracking-[-0.03em] font-manrope font-normal text-gray-700">
        {text}
      </p>
    </div>
  );
}

ResourcesDescription.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ResourcesDescription;
