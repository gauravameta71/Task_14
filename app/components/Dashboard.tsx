import React from 'react'

const Dashboard = () => {
  return (
    // <div classNameName="w-screen bg-gray-900">
    //   <div classNameName="h-screen w-64 pb-10">
    //     <div classNameName="flex h-full flex-grow flex-col overflow-y-auto rounded-br-lg rounded-tr-lg bg-white pt-5 shadow-md">
    //       <div classNameName="flex mt-10 items-center px-4">
    //         <img
    //           classNameName="h-12 w-auto max-w-full align-middle rounded-full"
    //           src="/assets/user.jpg"
    //           alt=""
    //         />
    //         <div classNameName="flex ml-3 flex-col">
    //           <h3 classNameName="font-medium text-black">Gourav Ameta</h3>
    //           <p classNameName="text-xs text-gray-500">Software Developer</p>
    //         </div>
    //       </div>

    //       <span classNameName="ml-3 mt-10 mb-2 block text-xs font-semibold text-gray-500">
    //         Analytics
    //       </span>

    //       <div classNameName="flex mt-3 flex-1 flex-col">
    //         <div classNameName="">
    //           <nav classNameName="flex-1">
    //             <a
    //               href="/dashboard_data"
    //               title=""
    //               classNameName="flex cursor-pointer items-center border-l-4 border-l-rose-600 py-2 px-4 text-sm font-medium text-rose-600 outline-none transition-all duration-100 ease-in-out focus:border-l-4"
    //             >
    //               <svg
    //                 classNameName="mr-4 h-5 w-5 align-middle"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 stroke-width="2"
    //               >
    //                 <path
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                   d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    //                   classNameName=""
    //                 ></path>
    //               </svg>
    //               Dashboard
    //             </a>

    //             <a
    //               href="#"
    //               classNameName="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
    //             >
    //               <svg
    //                 classNameName="mr-4 h-5 w-5 align-middle"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 stroke-width="2"
    //               >
    //                 <path
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                   d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
    //                 />
    //               </svg>
    //               Messages
    //               <span classNameName="ml-auto rounded-full bg-rose-600 px-2 text-xs text-white">
    //                 6
    //               </span>
    //             </a>

    //             <div classNameName="relative transition">
    //               <input
    //                 classNameName="peer hidden"
    //                 type="checkbox"
    //                 id="menu-1"
    //                 checked
    //               />
    //               <button classNameName="flex peer relative w-full items-center border-l-rose-600 py-3 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:text-rose-600 focus:border-l-4">
    //                 <span classNameName="flex mr-5 w-5">
    //                   <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     classNameName="h-5 w-5"
    //                     fill="none"
    //                     viewBox="0 0 24 24"
    //                     stroke="currentColor"
    //                     stroke-width="2"
    //                   >
    //                     <path
    //                       stroke-linecap="round"
    //                       stroke-linejoin="round"
    //                       d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    //                     />
    //                   </svg>
    //                 </span>
    //                 Analytics
    //                 <label
    //                   for="menu-1"
    //                   classNameName="absolute inset-0 h-full w-full cursor-pointer"
    //                 ></label>
    //               </button>
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 classNameName="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-600 transition peer-checked:rotate-180 peer-hover:text-rose-600"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 stroke-width="2"
    //               >
    //                 <path
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                   d="M19 9l-7 7-7-7"
    //                 />
    //               </svg>
    //               <ul classNameName="duration-400 flex m-2 max-h-0 flex-col overflow-hidden rounded-xl bg-gray-100 font-medium transition-all duration-300 peer-checked:max-h-96">
    //                 <li classNameName="flex m-2 cursor-pointer border-l-rose-600 py-3 pl-5 text-sm text-gray-600 transition-all duration-100 ease-in-out hover:border-l-4 hover:text-rose-600">
    //                   <span classNameName="mr-5">
    //                     <svg
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       classNameName="h-5 w-5"
    //                       fill="none"
    //                       viewBox="0 0 24 24"
    //                       stroke="currentColor"
    //                       stroke-width="2"
    //                     >
    //                       <path
    //                         stroke-linecap="round"
    //                         stroke-linejoin="round"
    //                         d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    //                       />
    //                     </svg>
    //                   </span>
    //                   Revenue
    //                 </li>
    //                 <li classNameName="flex m-2 cursor-pointer border-l-rose-600 py-3 pl-5 text-sm text-gray-600 transition-all duration-100 ease-in-out hover:border-l-4 hover:text-rose-600">
    //                   <span classNameName="mr-5">
    //                     <svg
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       classNameName="h-5 w-5"
    //                       fill="none"
    //                       viewBox="0 0 24 24"
    //                       stroke="currentColor"
    //                       stroke-width="2"
    //                     >
    //                       <path
    //                         stroke-linecap="round"
    //                         stroke-linejoin="round"
    //                         d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    //                       />
    //                     </svg>
    //                   </span>
    //                   Refunds
    //                 </li>
    //               </ul>
    //             </div>
    //           </nav>

    //           <span classNameName="ml-3 mt-10 mb-2 block text-xs font-semibold text-gray-500">
    //             Product Mangement
    //           </span>

    //           <nav classNameName="flex-1">
    //             <a
    //               href="#"
    //               classNameName="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
    //             >
    //               <svg
    //                 classNameName="mr-4 h-5 w-5 align-middle"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 stroke-width="2"
    //               >
    //                 <path
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                   d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
    //                   classNameName=""
    //                 ></path>
    //               </svg>
    //               Products
    //             </a>

    //             <a
    //               href="#"
    //               classNameName="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
    //             >
    //               <svg
    //                 classNameName="mr-4 h-5 w-5 align-middle"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 stroke-width="2"
    //               >
    //                 <path
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                   d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
    //                 />
    //               </svg>
    //               Orders
    //             </a>
    //             <a
    //               href="#"
    //               classNameName="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
    //             >
    //               <svg
    //                 classNameName="mr-4 h-5 w-5 align-middle"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 stroke-width="2"
    //               >
    //                 <path
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                   d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    //                 />
    //               </svg>
    //               Suppliers
    //             </a>
    //           </nav>

    //           <span classNameName="ml-3 mt-10 mb-2 block text-xs font-semibold text-gray-500">
    //             Content Management
    //           </span>

    //           <nav classNameName="flex-1">
    //             <a
    //               href="#"
    //               classNameName="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
    //             >
    //               <svg
    //                 classNameName="mr-4 h-5 w-5 align-middle"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 stroke-width="2"
    //               >
    //                 <path
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                   d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
    //                 />
    //               </svg>
    //               Blogs
    //             </a>
    //           </nav>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

<>
    <div className="relative bg-yellow-50 overflow-hidden max-h-screen">
  <header className="fixed right-0 top-0 left-60 bg-yellow-50 py-3 px-4 h-16">
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <button type="button" className="flex items-center focus:outline-none rounded-lg text-gray-600 hover:text-yellow-600 focus:text-yellow-600 font-semibold p-2 border border-transparent hover:border-yellow-300 focus:border-yellow-300 transition">
            <span className="inline-flex items-center justify-center w-6 h-6 text-gray-600 text-xs rounded bg-white transition mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
              </svg>
            </span>
            <span className="text-sm">Archive</span>
          </button>
        </div>
        <div className="text-lg font-bold">Today's Plan</div>
        <div>
          <button type="button" className="flex items-center focus:outline-none rounded-lg text-gray-600 hover:text-yellow-600 focus:text-yellow-600 font-semibold p-2 border border-transparent hover:border-yellow-300 focus:border-yellow-300 transition">
            <span className="text-sm">This week</span>
            <span className="inline-flex items-center justify-center w-6 h-6 text-gray-600 text-xs rounded bg-white transition ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <aside className="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60">
    <div className="flex flex-col justify-between h-full">
      <div className="flex-grow">
        <div className="px-4 py-6 text-center border-b">
          <h1 className="text-xl font-bold leading-none"><span className="text-yellow-700">Task Manager</span> App</h1>
        </div>
        <div className="p-4">
          <ul className="space-y-1">
            <li>
              <a href="javascript:void(0)" className="flex items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-4" viewBox="0 0 16 16">
                  <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
                </svg>Plan
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-4" viewBox="0 0 16 16">
                  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z"/>
                </svg>Task list
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-4" viewBox="0 0 16 16">
                  <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
                </svg>Projects
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-lg mr-4" viewBox="0 0 16 16">
                  <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                </svg>Tags
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-4">
        <button type="button" className="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="" viewBox="0 0 16 16">
            <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
        </button> <span className="font-bold text-sm ml-2">Logout</span>
      </div>
    </div>
  </aside>

  <main className="ml-60 pt-16 max-h-screen overflow-auto">
    <div className="px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 mb-5">
          <h1 className="text-3xl font-bold mb-10">Messaging ID framework development for the marketing branch</h1>
          <div className="flex items-center justify-between">
            <div className="flex items-stretch">
              <div className="text-gray-400 text-xs">Members<br>connected</div>
              <div className="h-100 border-l mx-4"></div>
              <div className="flex flex-nowrap -space-x-3">
                <div className="h-9 w-9">
                  <img className="object-cover w-full h-full rounded-full" src="https://ui-avatars.com/api/?background=random">
                </div>
                <div className="h-9 w-9">
                  <img className="object-cover w-full h-full rounded-full" src="https://ui-avatars.com/api/?background=random">
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <button type="button" className="inline-flex items-center justify-center h-9 px-3 rounded-xl border hover:border-gray-400 text-gray-800 hover:text-gray-900 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-chat-fill" viewBox="0 0 16 16">
                  <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
                </svg>
              </button>
              <button type="button" className="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">
                Open
              </button>
            </div>
          </div>

          <hr className="my-10"/>

          <div className="grid grid-cols-2 gap-x-20">
            <div>
              <h2 className="text-2xl font-bold mb-4">Stats</h2>

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <div className="p-4 bg-green-100 rounded-xl">
                    <div className="font-bold text-xl text-gray-800 leading-none">Good day,Kristin</div>
                    <div className="mt-5">
                      <button type="button" className="inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-green-500 text-sm font-semibold transition">
                        Start tracking
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                  <div className="font-bold text-2xl leading-none">20</div>
                  <div className="mt-2">Tasks finished</div>
                </div>
                <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                  <div className="font-bold text-2xl leading-none">5,5</div>
                  <div className="mt-2">Tracked hours</div>
                </div>
                <div className="col-span-2">
                  <div className="p-4 bg-purple-100 rounded-xl text-gray-800">
                    <div className="font-bold text-xl leading-none">Your daily plan</div>
                    <div className="mt-2">5 of 8 completed</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Your tasks today</h2>

              <div className="space-y-4">
                <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                  <div className="flex justify-between">
                    <div className="text-gray-400 text-xs">Number 10</div>
                    <div className="text-gray-400 text-xs">4h</div>
                  </div>
                  <a href="javascript:void(0)" className="font-bold hover:text-yellow-800 hover:underline">Blog and social posts</a>
                  <div className="text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-gray-800 inline align-middle mr-1" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>Deadline is today
                  </div>
                </div>
                <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                  <div className="flex justify-between">
                    <div className="text-gray-400 text-xs">Grace Aroma</div>
                    <div className="text-gray-400 text-xs">7d</div>
                  </div>
                  <a href="javascript:void(0)" className="font-bold hover:text-yellow-800 hover:underline">New campaign review</a>
                  <div className="text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-gray-800 inline align-middle mr-1" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>New feedback
                  </div>
                </div>
                <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                  <div className="flex justify-between">
                    <div className="text-gray-400 text-xs">Petz App</div>
                    <div className="text-gray-400 text-xs">2h</div>
                  </div>
                  <a href="javascript:void(0)" className="font-bold hover:text-yellow-800 hover:underline">Cross-platform and browser QA</a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
</>
  );
}

export default Dashboard