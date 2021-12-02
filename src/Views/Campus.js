import React from 'react'

export default function Campus() {
    return (
        <div>
        <div class="wrapper flex-grow-noshrink max-w-100vw">
            <div class="header w-100vw bg-darkblue h-12 text-center flex-align-center">
                <a class="text-white font-open py-3" href="https://elevationchurch.org/egroups/">Learn more about eGroups {'>'} </a>
            </div>
        </div>
        <div class="flex justify-left w-100vw h-screen px-4 text-black" >
            <div class="flex w-100 mx-20">
                <div class="flex flex-col w-64 py-4 border-r border-gray-200">
                    <a class="py-2 mt-1 text-m font-mon border-b border-gray-200" href="#">Campus Community</a>
                    
                </div>
            </div>
            <div class="flex justify-left flex-align-center flex-col mt-4 border-b border-gray-200">
                <h1 class="text-center font-mon text-5xl py-3">Find an eGroup</h1>
                <p class="text-center text-gray-500 font-open text-lg">
                There's an Elevation Online group waiting for you.</p>
            </div>
        </div>
    </div>
    )
}
