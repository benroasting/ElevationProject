import React from 'react'
import { Link } from 'react-router-dom';

export default function Choice() {
    return (
        <div class="wrapper max-w-100vw">
            <div class="container flex max-w-3xl mx-auto my-2">
                <div class="container py-12 mx-auto max-w-3xl text-center">
                    <h1 class="text-center font-mon text-4xl py-3 ">Choose your community</h1>
                    <p class="text-center text-gray-400 font-open text-lg">
                        Whether you are visiting a local campus community
                        or joining us online for the very first time, we can’t wait to connect with you!</p>
                </div>
            </div>
            <div class="container flex max-w-3xl mx-auto my-2">
                <Link to='/campus'>
                    <div class="max-w-m mx-3 overflow-hidden bg-white rounded-lg shadow-lg hover:scale-105 transform transition-all">
                        <img class="object-cover object-center w-full h-56" src="https://s3-media0.fl.yelpcdn.com/bphoto/cgFs0FhKh9m_tuWRMPWvTQ/l.jpg" alt="avatar" />
                        <div class="px-6 py-4">
                            <h1 class="font-mon text-2xl text-gray-800">Campus Community</h1>
                            <p class="py-2 text-gray-400 font-open text-xl">I'm a part of a local campus community.</p>
                        </div>
                    </div>
                </Link>
                <Link to='/groups'>
                    <div class="max-w-m mx-3 overflow-hidden bg-white rounded-lg shadow-lg hover:scale-105 transform transition-all">
                        <img class="object-cover object-center w-full h-56" src="https://elevationchurch.org/app/uploads/2021/01/ec-connectioncenter-og-2.jpg" alt="avatar" />
                        <div class="px-6 py-4">
                            <h1 class="font-mon text-2xl text-gray-800">eFam</h1>
                            <p class="py-2 text-gray-400 font-open text-xl">I am a part of the online community.</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
