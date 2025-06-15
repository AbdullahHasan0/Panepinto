import React from 'react';

function ContactSection() {
  return (
    <section className="w-full px-4 py-10 flex justify-center items-center mt-[150px] ml-[30px]">
      <div className="w-full max-w-[1300px] flex flex-col lg:flex-row gap-8">

        {/* Left: Text + Map */}
        <div className="flex flex-col w-full lg:w-[422px]">

          <h2 className="text-black font-manrope font-bold text-[36px] sm:text-[48px] md:text-[56px] leading-[36px] sm:leading-[48px] md:leading-[56px] tracking-[-0.02em] mb-6">
            Contact Us
          </h2>

          <p className="text-gray-700 font-manrope font-normal text-[18px] sm:text-[20px] md:text-[20px] leading-[26px] sm:leading-[28px] md:leading-[32px] tracking-[0] mb-6">
            John Panepinto, PsyD, LCMHCS, NCC <br />
            1001 West Williams Street, Suite 104 <br />
            Apex, NC, United States <br />
            <br />
            (919) 335-3462 <br />
            Johnpanepintopsyd@gmail.com
          </p>

          <div className="w-[320px] h-[200px] sm:h-[240px] md:h-[210px] border border-gray-300 overflow-hidden">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?..." // Replace with actual map link
              className="w-[320px] h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right: Form */}
        <div className="w-full lg:w-[793px]">
          <form className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded px-4 py-3 text-[16px] w-full bg-[#F1F1F1D9]"
            />

            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded px-4 py-3 text-[16px] w-full bg-[#F1F1F1D9]"
            />

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-[25px] h-[25px] border border-[#17151566] rounded-[5px] accent-black bg-white checked:bg-black "
              />
              <span className="text-[14px] text-gray-600">
                Check here to receive email updates
              </span>
            </label>

            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 rounded px-4 py-3 text-[16px] w-full bg-[#F1F1F1D9]"
            />

            <textarea
              placeholder="Message"
              className="border border-gray-300 rounded px-4 py-3 text-[16px] w-full h-[208px] resize-none bg-[#F1F1F1D9]"
            ></textarea>

            <button
              type="submit"
              className="bg-black text-white rounded px-6 py-3 text-[16px] hover:bg-gray-800 transition-colors"
            >
              Submit
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

export default ContactSection;
