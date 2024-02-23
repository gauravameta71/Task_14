"use client";
import React,{useState} from "react";


function StaffDetails() {
  const [employmentStatus, setEmploymentStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <div className="col-span-full mt-4 flex ">
        <button
          type="button"
          className="bg-blue-500 text-white mt-[6px] px-4 h-8 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Back
        </button>
        <p
          className=" text-blue-800 py-2 px-4 text-xl font-bold "
        >
          Enroll New Staff
        </p>
      </div>

      <h2 className="text-2xl font-bold text-center mb-8 text-black">
        BRANCH: SHAHEEN JUNIOR COLLEGE
      </h2>

      <div className="border-4 border-gray-300 rounded-lg">
        <div className="text-black h-10 w-auto bg-blue-400 p-1 m-4 font-bold rounded-sm">
          Staff Details
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-4 m-4">
          {/* 1 */}
          <div className="col-span-1">
            <label
              htmlFor="employmentStatus"
              className="block mb-2 text-sm font-medium text-blue-600"
            >
              Employment Status:
            </label>
            <select
              id="employmentStatus"
              name="employmentStatus"
              value={employmentStatus}
              onChange={(e) => setEmploymentStatus(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 "
            >
              <option value="">-Select-</option>
              <option value="temporary">Temporary</option>
              <option value="permanent">Permanent</option>
            </select>
          </div>
          {/* 2 */}
          <div className="col-span-1">
            <label
              htmlFor="employmentStatus"
              className="block mb-2 text-sm font-medium text-blue-600"
            >
              Staff Type :
            </label>
            <div className="flex flex-row gap-1">
              <div className="flex items-center">
                <div className="col-span-2">
                  <div className="mt-1">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio"
                        name="teaching"
                        value="teaching"
                      />
                      <span className="ml-2 text-black">Teaching</span>
                    </label>
                    <label className="inline-flex items-center ml-2">
                      <input
                        type="radio"
                        className="form-radio"
                        name="non-teaching"
                        value="non-teaching"
                      />
                      <span className="ml-2 text-black">Non-teaching</span>
                    </label>
                    <label className="inline-flex items-center ml-2">
                      <input
                        type="radio"
                        className="form-radio"
                        name="transport"
                        value="transport"
                      />
                      <span className="ml-2 text-black">Transport</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="col-span-1">
            <label
              htmlFor="employmentStatus"
              className="block mb-2 text-sm font-medium text-blue-600"
            >
              Staff Department:
            </label>
            <select
              id="employmentStatus"
              name="employmentStatus"
              value={employmentStatus}
              onChange={(e) => setEmploymentStatus(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 "
            >
              <option value="">-Select Department-</option>
              <option value="temporary">Btech</option>
              <option value="permanent">BBA</option>
              <option value="permanent">Other</option>
            </select>
          </div>
          {/* 4 */}
          <div className="col-span-1">
            <label
              htmlFor="employmentStatus"
              className="block mb-2 text-sm font-medium text-blue-600"
            >
              Employment Category:
            </label>
            <select
              id="employmentStatus"
              name="employmentStatus"
              value={employmentStatus}
              onChange={(e) => setEmploymentStatus(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 "
            >
              <option value="">-Select Category-</option>
              <option value="temporary">Temporary</option>
              <option value="permanent">Permanent</option>
            </select>
          </div>

          {/* 5 */}
          <div className="col-span-1">
            <label
              htmlFor="employmentStatus"
              className="block mb-2 text-sm font-medium text-blue-600"
            >
              Designation: *
            </label>
            <select
              id="employmentStatus"
              name="employmentStatus"
              value={employmentStatus}
              onChange={(e) => setEmploymentStatus(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 "
            >
              <option value="">-Select Department-</option>
              <option value="temporary">Computer Sci.</option>
              <option value="permanent">Mechincal</option>
              <option value="permanent">Business</option>
            </select>
          </div>
          {/* 6 */}
          <div className="col-span-1">
            <label
              htmlFor="employmentStatus"
              className="block mb-2 text-sm font-medium text-blue-600"
            >
              Qualification Type : *
            </label>
            <select
              id="employmentStatus"
              name="employmentStatus"
              value={employmentStatus}
              onChange={(e) => setEmploymentStatus(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 "
            >
              <option value="">-Select Qualification-</option>
              <option value="temporary">Temporary</option>
              <option value="permanent">Permanent</option>
            </select>
          </div>
          {/* 7 */}
          <div className="col-span-1">
            <label
              htmlFor="employmentStatus"
              className="block mb-2 text-sm font-medium text-blue-600"
            >
              Education Qualification : *
            </label>
            <select
              id="employmentStatus"
              name="employmentStatus"
              value={employmentStatus}
              onChange={(e) => setEmploymentStatus(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 "
            >
              <option value="">-Select Qualification-</option>
              <option value="temporary">Temporary</option>
              <option value="permanent">Permanent</option>
            </select>
          </div>
          {/* 8 */}
          <div className="col-span-1">
            <label
              htmlFor="employmentStatus"
              className="block mb-2 text-sm font-medium text-blue-600"
            >
              Access Level : *
            </label>
            <select
              id="employmentStatus"
              name="employmentStatus"
              value={employmentStatus}
              onChange={(e) => setEmploymentStatus(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 "
            >
              <option value="">-Select Access Level-</option>
              <option value="temporary">Temporary</option>
              <option value="permanent">Permanent</option>
            </select>
          </div>
          {/* 9 */}
          <div className="col-span-1">
            <label
              htmlFor="employmentStatus"
              className="block mb-2 text-sm font-medium text-blue-600"
            >
              Trained As : *
            </label>
            <select
              id="employmentStatus"
              name="employmentStatus"
              value={employmentStatus}
              onChange={(e) => setEmploymentStatus(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 "
            >
              <option value="">-Select Level-</option>
              <option value="temporary">Intern</option>
              <option value="permanent">Trainee</option>
            </select>
          </div>
          {/* 10 */}
          <div className="col-span-1">
            <label
              htmlFor="employmentStatus"
              className="block mb-2 text-sm font-medium text-blue-600"
            >
              CTET Qualified :
            </label>
            <div className="flex flex-row gap-1">
              <div className="flex items-center">
                <div className="col-span-2">
                  <div className="mt-1">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio"
                        name="yes"
                        value="yes"
                      />
                      <span className="ml-2 text-black">Yes</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        className="form-radio"
                        name="no"
                        value="no"
                      />
                      <span className="ml-2 text-black">No</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="text-black h-10 w-auto bg-blue-400 p-1 m-4 font-bold rounded-sm mt-8">
          Personal Details
        </div>

        <div className="container mx-auto p-4">
          <form className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {/* Row 1 */}
            <div className="col-span-2">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-blue-600"
              >
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 p-2.5 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="middleName"
                className="block text-sm font-medium text-blue-600"
              >
                Middle Name:
              </label>
              <input
                type="text"
                id="middleName"
                name="middleName"
                className="mt-1 p-2.5 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-blue-600"
              >
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 p-2.5 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Row 2 */}
            <div className="col-span-2">
              <label
                htmlFor="mobileNumber"
                className="block text-sm font-medium text-blue-600"
              >
                Mobile Number:
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                className="mt-1 p-2.5 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="emergencyContact"
                className="block text-sm font-medium text-blue-600"
              >
                Emergency Contact Number:
              </label>
              <input
                type="tel"
                id="emergencyContact"
                name="emergencyContact"
                className="mt-1 p-2.5 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-blue-600">
                Gender:
              </label>
              <div className="mt-1">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value="male"
                  />
                  <span className="ml-2 text-black">Male</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value="female"
                  />
                  <span className="ml-2 text-black">Female</span>
                </label>
              </div>
            </div>

            {/* Row 3 */}
            <div className="col-span-2">
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-blue-600"
              >
                Date of Birth :
              </label>
              <input
                type="text"
                id="dob"
                name="dob"
                placeholder="dd-mm-yyyy"
                pattern="\d{2}-\d{2}-\d{4}"
                title="Please enter a date in the format dd-mm-yyyy"
                className="mt-1 p-2.5 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="col-span-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-blue-600"
              >
                Email Id:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2.5 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Row 4 */}
            <div className="col-span-2">
              <label
                htmlFor="permanentAddress"
                className="block text-sm font-medium text-blue-600"
              >
                Permanent Address:
              </label>
              <textarea
                id="permanentAddress"
                name="permanentAddress"
                rows="3"
                className="mt-1 p-2.5 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <div className="col-span-2">
              <label
                htmlFor="correspondingAddress"
                className="block text-sm font-medium text-blue-600"
              >
                Corresponding Address:
              </label>
              <textarea
                id="correspondingAddress"
                name="correspondingAddress"
                rows="3"
                className="mt-1 p-2.5 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <div className="col-span-1">
              <label
                htmlFor="employmentStatus"
                className="block mb-2 text-sm font-medium text-blue-600"
              >
                Religion :
              </label>
              <select
                id="employmentStatus"
                name="employmentStatus"
                value={employmentStatus}
                onChange={(e) => setEmploymentStatus(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 "
              >
                <option value="">-Select-</option>
                <option value="Hindu">Hindu</option>
                <option value="Muslim">Muslim</option>
                <option value="Cristian">Cristian</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </form>
        </div>

        <div className="text-black h-10 w-auto bg-blue-400 p-1 m-4 font-bold rounded-sm mt-8">
          Other Details
        </div>

        <div className="container mx-auto p-4">
          <form className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {/* Row 1 */}
            <div className="col-span-2">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-blue-600"
              >
                Adhaar No. : *
              </label>
              <input
                type="text"
                id="adhaar"
                name="adhaar"
                className="mt-1 p-2.5 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="middleName"
                className="block text-sm font-medium text-blue-600"
              >
                PAN No.: *
              </label>
              <input
                type="text"
                id="pan"
                name="pan"
                className="mt-1 p-2.5 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Row 3 */}
            <div className="col-span-2">
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-blue-600"
              >
                Date of Birth :
              </label>
              <input
                type="text"
                id="dob"
                name="dob"
                placeholder="dd-mm-yyyy"
                pattern="\d{2}-\d{2}-\d{4}"
                title="Please enter a date in the format dd-mm-yyyy"
                className="mt-1 p-2.5 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="col-span-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-blue-600"
              >
                Staff Reference Code : *
              </label>
              <input
                type="text"
                id="refrenceCode"
                name="refrenceCode"
                className="mt-1 p-2.5 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium text-blue-600">
                Salary Pay Type:
              </label>
              <div className="mt-1">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value="male"
                  />
                  <span className="ml-1 text-black">Consolidate</span>
                </label>
                <label className="inline-flex items-center ml-1">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value="female"
                  />
                  <span className="ml-2 text-black">PAY</span>
                </label>
                <label className="inline-flex items-center ml-1">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value="female"
                  />
                  <span className="ml-2 text-black">other</span>
                </label>
              </div>
            </div>

            {/* Row 4 */}
            <div className="col-span-2">
              <label
                htmlFor="permanentAddress"
                className="block text-sm font-medium text-blue-600"
              >
                Government id/ Resident No : *
              </label>
              <textarea
                id="id"
                name="id"
                rows="3"
                className="mt-1 p-2.5 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <div className="col-span-1">
              <label
                htmlFor="employmentStatus"
                className="block mb-2 text-sm font-medium text-blue-600"
              >
                Citizenship:
              </label>
              <select
                id="employmentStatus"
                name="employmentStatus"
                value={employmentStatus}
                onChange={(e) => setEmploymentStatus(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 "
              >
                <option value="">-Select-</option>
                <option value="temporary">Indian</option>
                <option value="permanent">Other</option>
              </select>
            </div>
          </form>
        </div>
        <div className="col-span-full m-4">
          <button
            type="submit"
            className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:border-orange-300"
          >
            Save and Continue
          </button>
        </div>
      </div>
    </div>
    
  );
}

export default StaffDetails;
