import logo from './logo.svg';
import './App.css';
import MonthPicker from './monthpicker';
import React, { useState } from 'react';
import TabbedComponent from './tabbedcomponent';

function App() {
  const [selectedMonth, setSelectedMonth] = useState('January');

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
  };
  return (
    <div class="bg-blue-100 text-black h-screen ">

      <nav class="bg-white p-1 md:p-1">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
          <div class="relative hidden md:block ml-20">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span class="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar" class="block w-100 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search..."></input>
          </div>

          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 bg-white" id="navbar-search">
            <div class="relative mt-3 md:hidden">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search..."></input>
            </div>
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
              <li>
                <img class="w-16 h-16" src="https://media.licdn.com/dms/image/C4E0BAQHBDl0QLSErsw/company-logo_200_200/0/1579540392352?e=2147483647&v=beta&t=A5eXP6z98UwtZrwZy2147xvn9xM_-4Bm7ceWdXJ69Wc" ></img>
              </li>
              <li>
                <img class="w-10 h-10 mt-3" src="https://www.svgrepo.com/show/31480/notification-bell.svg" ></img>
              </li>
              <li>
                <span>
                  <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" type="button" class="flex mr-3 text-sm bg-white text-black rounded-full md:mr-0 hover:bg-gray-200 " aria-expanded="false" data-dropdown-placement="bottom">
                    <span class="mt-6 text-base mr-2">Pranathi Bachu</span>
                    <img class="w-10 h-10 rounded-full mt-3" src="https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png" alt="user photo"></img>
                    <span
                      className='text-black bg-transparent  rounded-full font-medium text-base px-2.5 py-2.5 text-center items-center mt-5'
                      type="button">
                      <svg class="w-2.5 h-2.5 ml-2.5 rounded-full" aria-hidden="true" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                      </svg>
                    </span>
                  </button>

                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <nav id="default-sidebar" className="fixed top-0 left-0 bg-white w-70 md:w-70 transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-3/5 px-5 py-10 space-y-1 bg-white text-black rounded-lg">
          <ul className="font-medium">
            <li className="group rounded-lg p-1">
              <div className=''>
                <a href="#" class="flex items-center justify-center text-gray-900 rounded-lg ">
                  <img class="flex-shrink-0 w-12 h-12 text-gray-500 transition duration-75 group-hover:bg-blue-500  rounded-lg group-active:bg-blue-500 group-focus:bg-blue-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 18"
                    src="https://icons.veryicon.com/png/o/miscellaneous/decon/dashboard-76.png">
                  </img>
                </a>
              </div>
              <div>
                <span class="flex text-sm font-normal items-center justify-center whitespace-nowrap text-center group-hover:text-blue-500 group-hover:font-semibold">Users</span>
              </div>
            </li>


            <li className=' rounded-lg  p-1 mt-2'>
              <div>
                <a href="#" class="flex items-center justify-center text-gray-900 rounded-lg   ">
                  <div class="flex-shrink-0 w-12 h-12 text-gray-500 transition duration-75 group-hover:bg-blue-500 bg-gray-200 rounded-lg group-active:bg-blue-500 group-focus:bg-blue-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 18"
                  >
                  </div>
                </a>
              </div>
              <div>
                <span class="flex text-sm font-normal items-center justify-center whitespace-nowrap text-center group-hover:text-blue-700">CRM</span>
              </div>
            </li>


            <li className='rounded-lg  p-1 mt-2'>
              <div>
                <a href="#" class="flex items-center justify-center text-gray-900 rounded-lg   ">
                  <div class="flex-shrink-0 w-12 h-12 text-gray-500 transition duration-75 group-hover:bg-blue-500 bg-gray-200 rounded-lg group-active:bg-blue-500 group-focus:bg-blue-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 18"
                  >
                  </div>
                </a>
              </div>
              <div>
                <span class="flex text-sm font-normal items-center justify-center whitespace-nowrap text-center group-hover:text-blue-700">Work Order</span>
              </div>
            </li>


            <li className=' rounded-lg  p-1 mt-2'>
              <div>
                <a href="#" class="flex items-center justify-center text-gray-900 rounded-lg   ">
                  <div class="flex-shrink-0 w-12 h-12 text-gray-500 transition duration-75 group-hover:bg-blue-500 bg-gray-200 rounded-lg group-active:bg-blue-500 group-focus:bg-blue-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 18"
                  >
                  </div>
                </a>
              </div>
              <div>
                <span class="flex text-sm  font-normal items-center justify-center whitespace-nowrap text-center group-hover:text-blue-700">Reports</span>
              </div>
            </li>

            <li className=' rounded-lg  p-1 mt-2'>
              <div>
                <a href="#" class="flex items-center justify-center text-gray-900 rounded-lg   ">
                  <div class="flex-shrink-0 w-12 h-12 text-gray-500 transition duration-75 group-hover:bg-blue-500 bg-gray-200 rounded-lg group-active:bg-blue-500 group-focus:bg-blue-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 18"
                  >
                  </div>
                </a>
              </div>
              <div>
                <span class="flex  text-sm font-normal items-center justify-center whitespace-nowrap text-center group-hover:text-blue-700">Inventory</span>
              </div>
            </li>


            <li className=' rounded-lg  p-1 mt-2'>
              <div>
                <a href="#" class="flex items-center justify-center text-gray-900 rounded-lg   ">
                  <div class="flex-shrink-0 w-12 h-12 text-gray-500 transition duration-75 group-hover:bg-blue-500 bg-gray-200 rounded-lg group-active:bg-blue-500 group-focus:bg-blue-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 18"
                  >
                  </div>
                </a>
              </div>
              <div>
                <span class="flex text-sm font-normal items-center justify-center whitespace-nowrap text-center group-hover:text-blue-700">Settings</span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex justify-between items-center  px-2 sm:px-0 ml-28">
        <div>
          <a href="#" className="flex items-center p-2 rounded-lg group ml-2  ">
            <img src="https://static.thenounproject.com/png/1118492-200.png" className="h-3 w-3" alt="Welcome" />
            <span className="flex-1 ml-3 whitespace-nowrap text-gray-400 text-sm hover:text-black hover:font-semibold">Welcome</span>
            <img src="https://static.thenounproject.com/png/1118492-200.png" className="h-3 w-3 ml-2" alt="Dashboard" />
            <span className="flex-1 ml-3 whitespace-nowrap text-gray-400 text-sm hover:text-black hover:font-semibold">Dashboard</span>
          </a>
        </div>
        <div className="mt-2">
          <div className="px-2 sm:px-10">
            <MonthPicker selectedMonth={selectedMonth} onMonthChange={handleMonthChange} />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly mt-2 px-2 sm:px-20">
        <a href="#" class="block max-w-sm p-6 w-60 h-30 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ml-16">
          <div class="flex justify-around mt-2">
            <div class="mt-4 font-bold text-2xl">
              $16.4k
            </div>
            <div>
              <img src="https://png.pngtree.com/png-vector/20191128/ourmid/pngtree-coin-money-icon-png-image_2049478.jpg"
                class="h-12 w-12">
              </img>
            </div>
          </div>
          <div class="flex justify-start  text-m font-semibold">
            Total Revenue
          </div>
          <div class="flex justify-start text-sm mb-2">
            <a href="#" class="flex items-center  rounded-lg  group">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Eo_circle_green_arrow-up-right.svg/800px-Eo_circle_green_arrow-up-right.svg.png" class="h-4 w-4 "></img>
              <span class="flex-1 ml-3 whitespace-nowrap text-gray-400 text-sm  ">90% present month </span>
            </a>
          </div>
        </a>
        <a href="#" class=" block max-w-sm p-6 w-60 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
          <div class="flex justify-around mt-2">
            <div class="mt-4 font-bold text-2xl">
              1400
            </div>
            <div>
              <img src="https://png.pngtree.com/png-vector/20191128/ourmid/pngtree-coin-money-icon-png-image_2049478.jpg"
                class="h-12 w-12">
              </img>
            </div>
          </div>
          <div class="flex justify-start  text-m font-semibold">
            Total Accounts
          </div>
          <div class="flex justify-start text-sm mb-2">
            <a href="#" class="flex items-center  rounded-lg  group">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Eo_circle_red_arrow-down-left.svg/2048px-Eo_circle_red_arrow-down-left.svg.png" class="h-4 w-4 "></img>
              <span class="flex-1 ml-3 whitespace-nowrap text-gray-400 text-sm  ">15% present month </span>
            </a>
          </div>
        </a>
        <a href="#" class=" block max-w-sm w-60 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
          <div class="flex justify-around mt-2">
            <div class="mt-4 font-bold text-2xl">
              120
            </div>
            <div>
              <img src="https://png.pngtree.com/png-vector/20191128/ourmid/pngtree-coin-money-icon-png-image_2049478.jpg"
                class="h-12 w-12">
              </img>
            </div>
          </div>
          <div class="flex justify-start  text-m font-semibold">
            New Accounts
          </div>
          <div class="flex justify-start text-sm mb-2">
            <a href="#" class="flex items-center  rounded-lg  group">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Eo_circle_green_arrow-up-right.svg/800px-Eo_circle_green_arrow-up-right.svg.png" class="h-4 w-4 "></img>
              <span class="flex-1 ml-3 whitespace-nowrap text-gray-400 text-sm  ">90% present month </span>
            </a>
          </div>
        </a>
        <a href="#" class=" block max-w-sm p-6 w-60  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
          <div class="flex justify-around mt-2">
            <div class="mt-4 font-bold text-2xl">
              1380
            </div>
            <div>
              <img src="https://png.pngtree.com/png-vector/20191128/ourmid/pngtree-coin-money-icon-png-image_2049478.jpg"
                class="h-12 w-12">
              </img>
            </div>
          </div>
          <div class="flex justify-start  text-m font-semibold">
            Active Accounts
          </div>
          <div class="flex justify-start text-sm mb-2">
            <a href="#" class="flex items-center  rounded-lg  group">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Eo_circle_red_arrow-down-left.svg/2048px-Eo_circle_red_arrow-down-left.svg.png" class="h-4 w-4 "></img>
              <span class="flex-1 ml-3 whitespace-nowrap text-gray-400 text-sm  ">15% present month </span>
            </a>
          </div>
        </a>
        <a href="#" class=" block max-w-sm p-6 w-60 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
          <div class="flex justify-around mt-2">
            <div class="mt-4 font-bold text-2xl">
              40
            </div>
            <div>
              <img src="https://png.pngtree.com/png-vector/20191128/ourmid/pngtree-coin-money-icon-png-image_2049478.jpg"
                class="h-12 w-12">
              </img>
            </div>
          </div>
          <div class="flex justify-start  text-m font-semibold">
            Active technicians
          </div>
          <div class="flex justify-start text-sm mb-2">
            <a href="#" class="flex items-center  rounded-lg  group">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Eo_circle_green_arrow-up-right.svg/800px-Eo_circle_green_arrow-up-right.svg.png" class="h-4 w-4 "></img>
              <span class="flex-1 ml-3 whitespace-nowrap text-gray-400 text-sm  ">90% present month </span>
            </a>
          </div>
        </a>

      </div>
      <div class="flex ">
        <TabbedComponent />
      </div>
    </div>
  );
}

export default App;
