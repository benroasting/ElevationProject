import React from 'react'

export default function GroupCards({data}) {
    return (
        <div>
            <div class="flex w-full p-8 border-b border-gray-300">
					<span class="flex-shrink-0 w-12 h-12 bg-orange rounded-full"></span>
					<div class="flex flex-col flex-grow ml-4">
						<div class="flex">
							<span class="font-semibold">dayOfWeek at time timeZone</span>
							
						</div>
						<p class="mt-1">name demographic egroupType</p>
                        <p class="mt-1">egroupStudy</p>
						<div class="flex mt-2">
							<button class="text-sm font-semibold">meetingType</button>
							<button class="ml-2 text-sm font-semibold">campusName</button>
						</div>
					</div>
				</div>
        </div>
    )
}
