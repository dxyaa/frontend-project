import React, { useState } from 'react';

function TabbedComponent() {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };
    return (
        <div className="max-w-3xl ml-2 mt-2 px-2 sm:ml-28 sm:px-10">
            <div className="flex flex-wrap gap-1">
                <div
                    className={`rounded-t-lg text-center w-1/2 sm:w-1/4 py-1 cursor-pointer ${activeTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-100'
                        }`}
                    onClick={() => handleTabClick(1)}
                >
                    Today's Task
                </div>
                <div
                    className={`rounded-t-lg text-center w-1/2 sm:w-1/4 py-1 cursor-pointer ${activeTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-100'
                        }`}
                    onClick={() => handleTabClick(2)}
                >
                    My Jobs
                </div>
                <div
                    className={`rounded-t-lg text-center w-1/2 sm:w-1/4 py-1 cursor-pointer ${activeTab === 3 ? 'bg-blue-500 text-white' : 'bg-gray-100'
                        }`}
                    onClick={() => handleTabClick(3)}
                >
                    Active Jobs
                </div>
                <div
                    className={`rounded-t-lg text-center w-1/2 sm:w-1/4 py-1 cursor-pointer ${activeTab === 4 ? 'bg-blue-500 text-white' : 'bg-gray-100'
                        }`}
                    onClick={() => handleTabClick(4)}
                >
                    Unscheduled Jobs
                </div>
            </div>

            <div class="bg-white border ">
                {activeTab === 1 && (
                    <div class="border rounded-lg border-2 border-blue-500 bg-white">
                        <div className=' bg-white p-2 sm:p-5 '>

                            <div class="relative">
                                <table class="w-full text-sm text-left text-gray-500 ">
                                    <thead class="text-s  text-gray-400  bg-gray-100 ">
                                        <tr>
                                            <th scope="col" class="text-centerpy-2 sm:px-6 py-3">
                                                Job Id+Task No
                                            </th>
                                            <th scope="col" class="text-center py-2 sm:px-6 py-3">
                                                Job&nbsp;manager
                                            </th>
                                            <th scope="col" class="text-center py-2 sm:px-6 py-3">
                                                Task&nbsp;name
                                            </th>
                                            <th scope="col" class="text-center py-2 sm:px-6 py-3">
                                                Status
                                            </th>
                                            <th scope="col" class="text-center py-2 sm:px-6 py-3">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-white border-b py-2 sm:px-6 py-4 ">
                                            <th scope="row" class="text-center font-medium text-gray-900 whitespace-nowrap ">
                                                8422-2356
                                            </th>
                                            <td class="text-center">
                                                Acc Manager
                                            </td>
                                            <td class="text-center">
                                                Lift Station Maintance
                                            </td>
                                            <td class="text-center ">
                                                <div class="flex items-center mt-2">
                                                    <button
                                                        type="button"
                                                        class="text-orange-300 bg-orange-50 border-2 border-yellow-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2"
                                                    >
                                                        In&nbsp;Progress
                                                    </button>
                                                </div>
                                            </td>

                                            <td class=" mt-3 flex justify-around">
                                                <div>
                                                    <a>
                                                        <img src="https://cdn-icons-png.flaticon.com/512/709/709612.png" class="h-5 w-5 hover:bg-gray-200 hover:rounded"></img>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a>
                                                        <img src="data:image/png;base64,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"
                                                            class="h-5 w-5 hover:bg-gray-200 hover:rounded"></img>
                                                    </a>
                                                </div>
                                            </td>

                                        </tr>
                                        <tr class="bg-white border-b py-2 sm:px-6 py-4 ">
                                            <th scope="row" class="text-center font-medium text-gray-900 whitespace-nowrap ">
                                                88922
                                            </th>
                                            <td class="text-center">
                                                Antony Miller
                                            </td>
                                            <td class="text-center">
                                                Lift Station Maintance
                                            </td>
                                            <td class="text-center  ">
                                                <div class="flex items-center mt-2  ">
                                                    <button
                                                        type="button"
                                                        class="text-green-300 bg-green-50 border-2 border-green-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2 "
                                                    >
                                                        &nbsp;&nbsp;&nbsp;   Done &nbsp;&nbsp;&nbsp;&nbsp;
                                                    </button>
                                                </div>
                                            </td>

                                            <td class="mt-3 text-center flex justify-around">
                                                <div>
                                                    <a>
                                                        <img src="https://cdn-icons-png.flaticon.com/512/709/709612.png" class="h-5 w-5 hover:bg-gray-200 hover:rounded"></img>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a>
                                                        <img src="data:image/png;base64,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"
                                                            class="h-5 w-5 hover:bg-gray-200 hover:rounded"></img>
                                                    </a>
                                                </div>
                                            </td>

                                        </tr>
                                        <tr class="bg-white border-b py-2 sm:px-6 py-4  ">
                                            <th scope="row" class="text-center  px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                9046
                                            </th>
                                            <td class="text-center">
                                                Billy Shawl
                                            </td>
                                            <td class="text-center">
                                                Broken Pipe Repair
                                            </td>
                                            <td class="text-center ml-2 ">
                                                <div class="flex items-center mt-2">
                                                    <button
                                                        type="button"
                                                        class="text-red-300 bg-red-50 border-2 border-red-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2 "
                                                    >
                                                        &nbsp;Cancelled&nbsp;
                                                    </button>
                                                </div>
                                            </td>

                                            <td class="text-center mt-3 flex justify-around ">
                                                <div >
                                                    <a>
                                                        <img src="https://cdn-icons-png.flaticon.com/512/709/709612.png" class="h-5 w-5 hover:bg-gray-200 hover:rounded"></img>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a>
                                                        <img src="data:image/png;base64,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"
                                                            class="h-5 w-5 hover:bg-gray-200 hover:rounded"></img>
                                                    </a>
                                                </div>
                                            </td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <nav aria-label="Page navigation example">
                            <ul class="flex items-center -space-x-px h-8 text-sm mt-2">

                                <li class="block sm:inline-block">
                                    <a href="#" class="flex items-center justify-center px-3 h-8 ml-0 sm:ml-2 leading-tight text-gray-500 bg-white rounded-l-lg hover:bg-gray-100 hover:text-gray-700">
                                        <svg class="w-2.5 h-2.5" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                        </svg>
                                    </a>
                                </li>


                                <li class="block sm:inline-block">
                                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700">1</a>
                                </li>
                                <li class="block sm:inline-block">
                                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700">2</a>
                                </li>
                                <li class="block sm:inline-block">
                                    <a href="#" aria-current="page" class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">3</a>
                                </li>
                                <li class="block sm:inline-block">
                                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover-bg-gray-100 hover-text-gray-700">4</a>
                                </li>
                                <li class="block sm:inline-block">
                                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover-bg-gray-100 hover-text-gray-700">5</a>
                                </li>


                                <li class="block sm:inline-block">
                                    <a href="#" class="flex items-center justify-center px-3 h-8 sm:mr-0 leading-tight text-gray-500 bg-white rounded-r-lg hover-bg-gray-100 hover-text-gray-700">
                                        <span class="sr-only">Next</span>
                                        <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
                {activeTab === 2 && (
                    <div class="border rounded-lg border-2 border-blue-500 bg-white">
                        <div className=' bg-white p-2 sm:p-5  '>

                            <div class="relative flex justify-center">
                                <table class="w-full text-sm text-left text-gray-500 ">
                                    <thead class="text-s  text-gray-400  bg-gray-100 ">
                                        <tr>
                                            <th scope="col" class="text-center py-2 sm:px-6 py-3">
                                                Job&nbsp;Id
                                            </th>
                                            <th scope="col" class="text-centerpy-2 sm:px-6 py-3">
                                                Acc&nbsp;Name
                                            </th>
                                            <th scope="col" class="text-centerpy-2 sm:px-6 py-3">
                                                Address
                                            </th>
                                            <th scope="col" class="text-center py-2 sm:px-6 py-3">
                                                Estimates
                                            </th>
                                            <th scope="col" class="text-center py-2 sm:px-6 py-3">
                                                Task&nbsp;Status
                                            </th>
                                            <th scope="col" class="text-center py-2 sm:px-6 py-3">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-white border-b py-2 sm:px-6 py-4 ">
                                            <th scope="row" class="text-center font-medium text-gray-900 whitespace-nowrap ">
                                                8422
                                            </th>
                                            <td class="text-center">
                                                Streetlane-FL
                                            </td>
                                            <td class="text-center">
                                                Cambridge Woods
                                            </td>
                                            <td class="text-center ">
                                                <div class="text-xs">10 Ready</div>
                                                <div class="p-1 rounded-lg bg-sky-200">Total&nbsp;Cost&nbsp;$100.81</div>
                                            </td>
                                            <td class="text-center ">
                                                01 / 10
                                            </td>
                                            <td class=" mt-3 mb-3 flex justify-around">
                                                <div>
                                                    <a>
                                                        <img src="https://cdn-icons-png.flaticon.com/512/685/685887.png"
                                                            class="h-5 w-5 hover:bg-gray-200 hover:rounded"></img>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a>
                                                        <img src="https://cdn-icons-png.flaticon.com/512/709/709612.png"
                                                            class="h-5 w-5 hover:bg-gray-200 hover:rounded"></img>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a>
                                                        <img src="https://cdn-icons-png.flaticon.com/512/7066/7066144.png"
                                                            class="h-5 w-5 hover:bg-gray-200 hover:rounded"></img>
                                                    </a>
                                                </div>
                                            </td>

                                        </tr>
                                        <tr class="bg-white border-b py-2 sm:px-6 py-4 ">
                                            <th scope="row" class="text-center font-medium text-gray-900 whitespace-nowrap ">
                                                8422
                                            </th>
                                            <td class="text-center">
                                                Streetlane-FL
                                            </td>
                                            <td class="text-center">
                                                Cambridge Woods
                                            </td>
                                            <td class="text-center ">
                                                <div class="text-xs">10 Ready</div>
                                                <div class="p-1 rounded-lg bg-sky-200">Total&nbsp;Cost&nbsp;$100.81</div>
                                            </td>
                                            <td class="text-center ">
                                                08 / 10
                                            </td>
                                            <td class=" mt-3 mb-3 flex justify-around">
                                                <div>
                                                    <a>
                                                        <img src="https://cdn-icons-png.flaticon.com/512/685/685887.png"
                                                            class="h-5 w-5 hover:bg-gray-200 hover:rounded"></img>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a class="">
                                                        <img src="https://cdn-icons-png.flaticon.com/512/709/709612.png"
                                                            class="h-5 w-5 hover:bg-gray-200 hover:rounded"></img>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a>
                                                        <img src="https://cdn-icons-png.flaticon.com/512/7066/7066144.png"
                                                            class="h-5 w-5 hover:bg-gray-200 hover:rounded"></img>
                                                    </a>
                                                </div>
                                            </td>

                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <nav aria-label="Page navigation example ">
                            <ul class="flex items-center -space-x-px h-8 text-sm mt-2">
                                <li>
                                    <a href="#" class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white  rounded-l-lg hover:bg-gray-100 hover:text-gray-700 ">
                                        <svg class="w-2.5 h-2.5" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 ">1</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 ">2</a>
                                </li>
                                <li>
                                    <a href="#" aria-current="page" class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600  bg-blue-50 hover:bg-blue-100 hover:text-blue-700 ">3</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 ">4</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 ">5</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  rounded-r-lg hover:bg-gray-100 hover:text-gray-700 ">
                                        <span class="sr-only">Next</span>
                                        <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                    </div>
                )}
                {activeTab === 3 && (
                    <div class="border rounded-lg border-2 border-blue-500 bg-white">
                        <div className=' bg-white p-5 '>

                            <div class="relative flex justify-center">
                                <table class="w-full text-sm text-left text-gray-500 ">
                                    <thead class="text-s  text-gray-400  bg-gray-100 ">
                                        <tr>
                                            <th scope="col" class="text-center py-2 sm:px-6 py-3">
                                                Job&nbsp;Id
                                            </th>
                                            <th scope="col" class="text-center py-2 sm:px-6 py-3">
                                                Job&nbsp;manager
                                            </th>
                                            <th scope="col" class="text-center py-2 sm:px-6 py-3">
                                                Acc Name
                                            </th>
                                            <th scope="col" class="text-center py-2 sm:px-6 py-3">
                                                Estimates
                                            </th>
                                            <th scope="col" class="text-center py-2 sm:px-6 py-3">
                                                Tasks
                                            </th>
                                            <th scope="col" class="text-center py-2 sm:px-6 py-3">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-white border-b py-2 sm:px-6 py-4 ">
                                            <th scope="row" class="text-center font-medium text-gray-900 whitespace-nowrap ">
                                                8422
                                            </th>
                                            <td class="text-center">
                                                Antony Miller
                                            </td>
                                            <td class="text-center">
                                                Cambridge Woods
                                            </td>
                                            <td class="text-center ">
                                                <div class="text-xs">10 Ready</div>
                                                <div class="p-1 rounded-lg bg-sky-200">Total&nbsp;Cost&nbsp;$100.81</div>
                                            </td>
                                            <td class="text-center ">
                                                01 / 10
                                            </td>
                                            <td class=" mt-3 mb-3 flex justify-around">
                                                <div>
                                                    <a>
                                                        <img src="https://cdn-icons-png.flaticon.com/512/685/685887.png"
                                                            class="h-5 w-5 hover:bg-gray-200 hover:rounded"></img>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a>
                                                        <img src="https://cdn-icons-png.flaticon.com/512/709/709612.png"
                                                            class="h-5 w-5 hover:bg-gray-200 hover:rounded"></img>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a>
                                                        <img src="https://cdn-icons-png.flaticon.com/512/7066/7066144.png"
                                                            class="h-5 w-5 hover:bg-gray-200 hover:rounded"></img>
                                                    </a>
                                                </div>
                                            </td>

                                        </tr>
                                        <tr class="bg-white border-b py-2 sm:px-6 py-4  ">
                                            <th scope="row" class="text-center font-medium text-gray-900 whitespace-nowrap ">
                                                84322
                                            </th>
                                            <td class="text-center">
                                                Jacob Purcell
                                            </td>
                                            <td class="text-center  whitespace-nowrap">
                                                300 Riverside Apartment
                                            </td>
                                            <td class="text-center ">
                                                <div class="text-xs">10 Ready</div>
                                                <div class="p-1 rounded-lg bg-sky-200">Total&nbsp;Cost&nbsp;$80</div>
                                            </td>
                                            <td class="text-center ">
                                                08 / 10
                                            </td>
                                            <td class=" mt-3 mb-3 flex justify-around">
                                                <div>
                                                    <a>
                                                        <img src="https://cdn-icons-png.flaticon.com/512/685/685887.png"
                                                            class="h-5 w-5 hover:bg-gray-200 hover:rounded"></img>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a class="">
                                                        <img src="https://cdn-icons-png.flaticon.com/512/709/709612.png"
                                                            class="h-5 w-5 hover:bg-gray-200 hover:rounded"></img>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a>
                                                        <img src="https://cdn-icons-png.flaticon.com/512/7066/7066144.png"
                                                            class="h-5 w-5 hover:bg-gray-200 hover:rounded"></img>
                                                    </a>
                                                </div>
                                            </td>

                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <nav aria-label="Page navigation example ">
                            <ul class="flex items-center -space-x-px h-8 text-sm mt-2">
                                <li>
                                    <a href="#" class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white  rounded-l-lg hover:bg-gray-100 hover:text-gray-700 ">
                                        <svg class="w-2.5 h-2.5" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 ">1</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 ">2</a>
                                </li>
                                <li>
                                    <a href="#" aria-current="page" class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600  bg-blue-50 hover:bg-blue-100 hover:text-blue-700 ">3</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 ">4</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 ">5</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  rounded-r-lg hover:bg-gray-100 hover:text-gray-700 ">
                                        <span class="sr-only">Next</span>
                                        <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                    </div>
                )}
                {activeTab === 4 && (
                    <div class="border rounded-lg border-2 border-blue-500 bg-white">
                        <div className=' bg-white p-5 '>

                            <div class="relative flex justify-center">
                                <table class="w-full text-sm text-left text-gray-500 ">
                                    <thead class="text-s  text-gray-400  bg-gray-100 ">
                                        <tr>
                                            <th scope="col" class="text-center py-2 sm:px-6 py-3">
                                                Job&nbsp;Id
                                            </th>
                                            <th scope="col" class="text-center py-2 sm:px-6 py-3">
                                                Job&nbsp;manager
                                            </th>
                                            <th scope="col" class="text-center py-2 sm:px-6 py-3">
                                                Acc Name
                                            </th>
                                            <th scope="col" class="text-centerpy-2 sm:px-6 py-3">
                                                Estimates
                                            </th>

                                            <th scope="col" class="text-center py-2 sm:px-6 py-3">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-white border-b py-2 sm:px-6 py-4  ">
                                            <th scope="row" class="text-center font-medium text-gray-900 whitespace-nowrap ">
                                                8422
                                            </th>
                                            <td class="text-center">
                                                Antony Miller
                                            </td>
                                            <td class="text-center">
                                                Cambridge Woods
                                            </td>
                                            <td class="text-center ">
                                                <div class="text-xs">10 Ready</div>
                                                <div class="p-1 rounded-lg bg-sky-200">Total&nbsp;Cost&nbsp;$100.81</div>
                                            </td>

                                            <td class=" mt-3 mb-3 flex justify-around">
                                                <div>
                                                    <a>
                                                        <img src="https://cdn-icons-png.flaticon.com/512/685/685887.png"
                                                            class="h-5 w-5 hover:bg-gray-200 hover:rounded"></img>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a>
                                                        <img src="https://cdn-icons-png.flaticon.com/512/709/709612.png"
                                                            class="h-5 w-5 hover:bg-gray-200 hover:rounded"></img>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a>
                                                        <img src="https://cdn-icons-png.flaticon.com/512/7066/7066144.png"
                                                            class="h-5 w-5 hover:bg-gray-200 hover:rounded"></img>
                                                    </a>
                                                </div>
                                            </td>
                                            <div class="underline flex justify-center text-xs hover:text-blue-500">
                                                Schedule Job
                                            </div>
                                        </tr>
                                        <tr class="bg-white border-b py-2 sm:px-6 py-4  ">
                                            <th scope="row" class="text-center font-medium text-gray-900 whitespace-nowrap ">
                                                84322
                                            </th>
                                            <td class="text-center">
                                                Jacob Purcell
                                            </td>
                                            <td class="text-center  whitespace-nowrap">
                                                300 Riverside Apartment
                                            </td>
                                            <td class="text-center ">
                                                <div class="text-xs">10 Ready</div>
                                                <div class="p-1 rounded-lg bg-sky-200">Total&nbsp;Cost&nbsp;$80</div>
                                            </td>

                                            <td class=" mt-3 mb-3 flex justify-around">
                                                <div>
                                                    <a>
                                                        <img src="https://cdn-icons-png.flaticon.com/512/685/685887.png"
                                                            class="h-5 w-5 hover:bg-gray-200 hover:rounded"></img>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a class="">
                                                        <img src="https://cdn-icons-png.flaticon.com/512/709/709612.png"
                                                            class="h-5 w-5 hover:bg-gray-200 hover:rounded"></img>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a>
                                                        <img src="https://cdn-icons-png.flaticon.com/512/7066/7066144.png"
                                                            class="h-5 w-5 hover:bg-gray-200 hover:rounded"></img>
                                                    </a>
                                                </div>


                                            </td>
                                            <div class="underline flex justify-center text-xs hover:text-blue-500">
                                                Schedule Job
                                            </div>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <nav aria-label="Page navigation example ">
                            <ul class="flex items-center -space-x-px h-8 text-sm mt-2">
                                <li>
                                    <a href="#" class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white  rounded-l-lg hover:bg-gray-100 hover:text-gray-700 ">
                                        <svg class="w-2.5 h-2.5" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 ">1</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 ">2</a>
                                </li>
                                <li>
                                    <a href="#" aria-current="page" class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600  bg-blue-50 hover:bg-blue-100 hover:text-blue-700 ">3</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 ">4</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 ">5</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  rounded-r-lg hover:bg-gray-100 hover:text-gray-700 ">
                                        <span class="sr-only">Next</span>
                                        <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                    </div>
                )}
            </div>
        </div>
    );
}

export default TabbedComponent;
