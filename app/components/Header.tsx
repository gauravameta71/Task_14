import React from 'react'

const Header = () => {
  return (
    <>
      <div className="flex justify-end  bg-white  p-2">
        <h1 className="text-2xl font-bold text-black mr-[760px]">SMART SCHOOL</h1>
        <button
          type="submit"
          className="bg-orange-500 text-white m-2 px-1 py-1 h-6  rounded-full hover:bg-orange-600 focus:outline-none focus:ring focus:border-orange-300 text-xs"
        >
          Under Implementation Track Progress
        </button>
        <button
          type="submit"
          className="bg-blue-800 text-white m-2 px-1 py-1 h-6  rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 text-xs"
        >
          Get Help
        </button>
        <button
          type="submit"
          className=" text-black m-2 px-1 py-1 h-6  rounded-full font-bold text-xs"
        >
          AY : 2023-2024
        </button>
        <div className="flex flex-row gap-4">
          <img
            src="/assets/home.png"
            alt="Placeholder Image"
            className="h-4 w-4 mt-[12px]"
          />

          <img
            src="/assets/bell.png"
            alt="Placeholder Image"
            className="h-4 w-4 mt-[12px]"
          />
          <img
            src="/assets/search.png"
            alt="Placeholder Image"
            className="h-4 w-4 mt-[12px]"
          />

          <img
            src="/assets/contact.png"
            alt="Placeholder Image"
            className="h-4 w-4 mt-[12px]"
          />
        </div>
      </div>
      <div className="flex flex-row gap-6 bg-white text-black pl-6 text-xs">
        <a href="/">Staff Details</a>
        <a href="/">Staff Attendence</a>
        <a href="/">Biometric Attendence</a>
        <a href="/">Feedback</a>
        <a href="/">Staff Leaves</a>
        <a href="/">Staff</a>
        <a href="/">Report</a>
      </div>
    </>
  );
}

export default Header