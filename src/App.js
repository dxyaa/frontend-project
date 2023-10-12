import logo from './logo.svg';
import './App.css';
import MonthPicker from './monthpicker';
import React, { useState } from 'react';
import TabbedComponent from './tabbedcomponent';
import 'flowbite';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import MyDatePicker from './MyDatePicker';



<script src="../path/to/flowbite/dist/flowbite.min.js"></script>

function App() {
  const [selectedMonth, setSelectedMonth] = useState('January');

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
  };
  return (
    <div class="h-screen bg-blue-100  ">
     

      <nav class="bg-white p-1 md:p-1 relative">
        <div class=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
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

      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        id="sidebar-toggle-button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" >
          <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <nav id="default-sidebar" className="fixed top-0 left-0 bg-white w-70 md:w-70 transition-transform -translate-x-full sm:translate-x-0 border border-1 border-gray-200" aria-label="Sidebar">
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
      <div className="flex flex-col-reverse sm:flex-row justify-between items-center px-2 sm:px-0 md:ml-28">
        <div>
          <a href="#" className="flex items-center p-2 rounded-lg group md:ml-2">
            <img src="https://static.thenounproject.com/png/1118492-200.png" className="h-3 w-3" alt="Welcome" />
            <span className="flex-1 ml-3 whitespace-nowrap text-gray-400 text-sm hover:text-black hover:font-semibold">Welcome</span>
            <img src="https://static.thenounproject.com/png/1118492-200.png" className="h-3 w-3 ml-2" alt="Dashboard" />
            <span className="flex-1 ml-3 whitespace-nowrap text-gray-400 text-sm hover:text-black hover:font-semibold">Dashboard</span>
          </a>
        </div>
        <div className="mt-2 sm:mt-0">
          <div className="px-2 sm:px-10">
            <MyDatePicker />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly mt-1 px-2 sm:px-20">
        <a href="#" class="block max-w-sm p-4 w-60 h-28 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 md:ml-16">
          <div class="flex justify-around ">
            <div class="mt-2 font-bold text-2xl">
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
          <div class="flex justify-start text-sm mb-2 ">
            <a href="#" class="flex items-center  rounded-lg  group">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Eo_circle_green_arrow-up-right.svg/800px-Eo_circle_green_arrow-up-right.svg.png" class="h-4 w-4 mb-5"></img>
              <span class="flex-1 ml-3 whitespace-nowrap text-gray-400 text-sm mb-5 ">90% present month </span>
            </a>
          </div>
        </a>
        <a href="#" class=" block max-w-sm p-4 w-60 h-28 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mt-2">
          <div class="flex justify-around ">
            <div class="mt-2 font-bold text-2xl">
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
        <a href="#" class="block max-w-sm p-4 w-60 h-28 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mt-2">
          <div class="flex justify-around ">
            <div class="mt-2 font-bold text-2xl">
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
        <a href="#" class=" block max-w-sm p-4 w-60 h-28 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mt-2 ">
          <div class="flex justify-around ">
            <div class="mt-2 font-bold text-2xl">
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
        <a href="#" class=" block max-w-sm p-4 w-60 h-28 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mt-2">
          <div class="flex justify-around">
            <div class="mt-2 font-bold text-2xl">
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
      <div class="flex flex-col md:flex-row">
        <div>
          <TabbedComponent />
        </div>
        <div class="md:max-w-5xl  bg-white mr-4 p-2 mt-2 rounded-lg shadow ">
          <div class="flex flex-row mt-2 items-center">
            <img id="1" src="https://t3.ftcdn.net/jpg/05/24/49/24/360_F_524492467_7ZDUkMzM2Vl6vf6yvw9PKwHFYn2kWda9.jpg" class="w-7 h-7 mt-4"></img>
            <h1 class="md:pt-5 text-xl pl-3">Live Map</h1>
          </div>

          <div class="bg-white h-3 border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 mt-2 md:flex md:justify-between md:items-center md:px-80"></div>

          <div>
            <form>
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="search" id="default-search" class="mt-2 block w-full py-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for technicians, vehicles..." required></input>
              </div>
            </form>
            <div class="flex justify-center items-center mt-4">
              <img class="h-10 w-10" id="3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1200px-Picture_icon_BLACK.svg.png"></img>
            </div>
          </div>
        </div>
      </div>


      <div class="mb-4 ml-2 md:ml-10">
        <div class="flex flex-col items-center md:justify-between md:flex-row md:mr-4">
          <div class="max-w-sm bg-white border rounded-lg shadow mb-4 md:ml-28 md:mr-4 px-4">
            <p class="ml-4 font-semibold">Invoices value</p>
            <a href="#">
              <img class="rounded-t-lg h-40 w-full" src="./graph1.png" alt="" />
            </a>
            <div class="text-xs flex justify-between mt-2">
              <p class="font-normal text-gray-700">Total Invoice Value</p>
              <p>$224,789</p>
            </div>
            <div class="text-xs mt-1 text-sm flex justify-between">
              <p class="font-normal text-gray-700">Avg Invoice Value</p>
              <p>$1200</p>
            </div>
          </div>
          <div class="max-w-sm bg-white border rounded-lg shadow mb-4 md:ml-28 md:mr-4 px-4">
            <p class="font-semibold">Invoices sent count</p>
            <a href="#">
              <img class="rounded-t-lg h-40 w-full" src="./graph2.png" alt="" />
            </a>
            <div class="text-xs flex justify-between mt-2">
              <p class="font-normal text-gray-700">Total Invoices Sent</p>
              <p>500</p>
            </div>
            <div class="text-xs mt-1 text-sm flex justify-between">
              <p class="font-normal text-gray-700">Avg Invoices Sent</p>
              <p>10</p>
            </div>
          </div>
          <div class="max-w-sm bg-white border rounded-lg shadow mb-4 md:ml-28 px-12 py-4">
            <p class="font-semibold mb-4">Major Revenue Sources</p>
            <a href="#">
              <img class="rounded-t-lg h-40 w-full" src="./graph3.png" alt="" />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
