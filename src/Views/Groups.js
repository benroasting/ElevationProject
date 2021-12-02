import React from 'react'
// import GroupCards from '../Components/GroupCards';

export default function Groups() {
    return (
        <div class="wrapper max-w-100vw">
            <div class="wrapper max-w-100vw">
                <div class="header w-100vw bg-darkblue h-12 text-center flex-align-center py-3">
                    <a class="text-white font-open" href="https://elevationchurch.org/egroups/">Learn more about eGroups {'>'} </a>
                </div>
            </div>
            <div class="flex w-100vw h-screen px-4 text-black" >
                <div class="flex w-1/3 ml-20 mr-10">
                    <div class="flex flex-col w-full mr-10 border-r border-gray-200">
                        <img class="mt-5 object-scale-down object-left w-30 h-12 mx-2" src="https://elevationchurch.org/app/uploads/2021/01/eGroups-Logo.png" alt="avatar" />
                        <button class="inline-flex items-center py-2 mt-1 text-left text-m font-mon border-b border-gray-200">Campus Community</button>
                        <button class="flex py-2 mt-1 text-left text-m font-mon border-b border-gray-200">Demographic </button>
                        <button class="flex py-2 mt-1 text-left text-m font-mon border-b border-gray-200">Gender </button>
                        <button class="flex py-2 mt-1 text-left text-m font-mon border-b border-gray-200">Topic </button>
                        <button class="flex py-2 mt-1 text-left text-m font-mon border-b border-gray-200">Days </button>
                        <button class="flex py-2 mt-1 text-left text-m font-mon border-b border-gray-200">In-Person </button>
                        <button class="flex py-2 mt-1 text-left text-m font-mon border-b border-gray-200">Language </button>
                        <button class="flex py-2 mt-1 text-left text-m font-mon border-b border-gray-200">Childcare </button>

                    </div>
                </div>
                <div class="w-3/4 mt-4">
                    <div >
                        <div class="border-b border-gray-200">
                            <h1 class="text-left font-mon text-4xl mt-6">Find an eGroup</h1>
                            <p class="text-left text-gray-500 font-open text-lg pb-5">
                                There's an Elevation Online group waiting for you.</p>
                        </div>
                    </div>
                    <div>
                        <div class="flex w-full p-8 border-b border-gray-300">
                            <span class="align-middle w-20 h-20 bg-orange rounded-full"></span>
                            <div class="flex flex-col flex-grow ml-4">
                                <div class="flex">
                                    <span class="font-mon">Sundays at 1:00PM UTC−05:00</span>
                                    
                                </div>
                                <p class="mt-1 text-gray-400 font-open">Learning through Living and Lunching Women's eGroup - Gerri Stover</p>
                                <p class="mt-1 text-gray-400 font-open">eGroup Specific Study - eGroup Specific Study</p>
                                <div class="flex mt-2">
                                    <button class="text-xs font-mon bg-gray-200 rounded-full p-1">In-person</button>
                                    <button class="ml-2 text-gray-400 text-m font-open">Asheville</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex w-full p-8 border-b border-gray-300">
                            <span class="align-middle w-20 h-20 bg-teal rounded-full"></span>
                            <div class="flex flex-col flex-grow ml-4">
                                <div class="flex">
                                    <span class="font-mon">Mondays at 7:00PM UTC−05:00</span>
                                    
                                </div>
                                <p class="mt-1 text-gray-400 font-open">Greensboro: Everyone Welcome - Sharon Elwood</p>
                                <p class="mt-1 text-gray-400 font-open">Women - Trustworthy</p>
                                <div class="flex mt-2">
                                    <button class="text-xs font-mon bg-gray-200 rounded-full p-1">Virtual</button>
                                    <button class="ml-2 text-gray-400 text-m font-open">Greensboro</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex w-full p-8 border-b border-gray-300">
                            <span class="align-middle w-20 h-20 bg-ltblue rounded-full"></span>
                            <div class="flex flex-col flex-grow ml-4">
                                <div class="flex">
                                    <span class="font-mon">Wednesdays at 6:30PM UTC−05:00</span>
                                    
                                </div>
                                <p class="mt-1 text-gray-400 font-open">Women’s Sermon Discussion - Cindy Hazen</p>
                                <p class="mt-1 text-gray-400 font-open">Sermon Discussion - Sermon Discussion</p>
                                <div class="flex mt-2">
                                    <button class="text-xs font-mon bg-gray-200 rounded-full p-1">In-person</button>
                                    <button class="ml-2 text-gray-400 text-m font-open">Ballantyne</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex w-full p-8 border-b border-gray-300">
                            <span class="align-middle w-20 h-20 bg-orange rounded-full"></span>
                            <div class="flex flex-col flex-grow ml-4">
                                <div class="flex">
                                    <span class="font-mon">Wednesdays at 6:00PM UTC−05:00</span>
                                    
                                </div>
                                <p class="mt-1 text-gray-400 font-open">Cambios - Jóvenes Adultos Mixto (20-35 años)</p>
                                <p class="mt-1 text-gray-400 font-open">Sermon Discussion - Sermon Discussion</p>
                                <div class="flex mt-2">
                                    <button class="text-xs font-mon bg-gray-200 rounded-full p-1">Virtual</button>
                                    <button class="ml-2 text-gray-400 text-m font-open">Elevation Online</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
