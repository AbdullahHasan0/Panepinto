import React from 'react';
import PropTypes from 'prop-types';

function LeftTextRightImage({ title, description, image, altText, reverseOnLarge }) {
  return (
    <section
      className={`w-full max-w-[1300px] mx-auto flex flex-col md:flex-row ${
        reverseOnLarge ? 'md:flex-row-reverse' : ''
      } items-center justify-between py-[80px] px-[20px] gap-[40px]`}
    >
      {/* Image comes first so it shows on top on mobile */}
      <div className="w-full md:w-[563px] h-[470px] rounded-[5px] overflow-hidden">
        <img
          src={image}
          alt={altText || title || 'Descriptive image'}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-[645px] h-auto flex flex-col justify-center">
        <h2 className="text-[40px] md:text-[56px] leading-[56px] md:leading-[70px] font-manrope font-medium tracking-[-0.02em] text-black mb-6 max-w-[636px]">
          {title}
        </h2>
        <p className="text-[22px] md:text-[26px] leading-[30px] font-manrope font-normal text-gray-700 max-w-[645px]">
          {description}
        </p>
      </div>
    </section>
  );
}

LeftTextRightImage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  altText: PropTypes.string,
  reverseOnLarge: PropTypes.bool,
};

LeftTextRightImage.defaultProps = {
  reverseOnLarge: false,
};

export default LeftTextRightImage;
