import React from 'react';

function AboutServices() {
  return (
    <section className="w-full max-w-[1300px] mx-auto py-10 sm:py-14 md:py-24 px-4">
      {/* Heading */}
      <h2 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] leading-tight font-manrope tracking-[-0.02em] text-center max-w-[982px] mx-auto mb-5 sm:mb-10 md:mb-14">
        <span className="font-bold">Have a glance</span>{' '}
        <span className="font-normal">at our variety of services.</span>
      </h2>

      {/* Description */}
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-manrope text-center max-w-[1175px] mx-auto text-gray-700">
        I am an <span className="whitespace-nowrap">out-of-network</span> provider for insurance carriers.
        Please inquire from your insurance company regarding out-of-network benefits and claim submissions
        from out-of-network providers. This may need to be cleared with your insurance prior to your first
        visit. As a Licensed Professional Counselor, I will provide you with a billing statement to submit
        to your insurance provider. Fees are to be paid at time of service.
      </p>
    </section>
  );
}

export default AboutServices;
