
import React, { useState } from 'react';


function CaseRegistration() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (

    <section class="text-gray-600 body-font relative">
      <div class="container px-2 py-5 mx-auto">
        <div class="flex flex-col text-center w-full mb-2">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Register Your Case!</h1>

        </div>
        <div class="lg:w-[95%] md:w-1/2 mx-auto ">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-1/6">
              <div class="relative">
                <label for="firstName" class="leading-7 text-sm text-gray-600">First Name:<span class="text-red-700">*</span></label>
                <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div class="p-2 w-1/6">
              <div class="relative">
                <label for="middleName" class="leading-7 text-sm text-gray-600">Middle Name:</label>
                <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div class="p-2 w-1/6">
              <div class="relative">
                <label for="lastName" class="leading-7 text-sm text-gray-600">Last Name:<span class="text-red-700">*</span></label>
                <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div class="p-2 w-1/4">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-gray-600">Email:<span class="text-red-700">*</span></label>
                <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div class="p-2 w-1/5">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-gray-600">Phone:<span class="text-red-700">*</span></label>
                <input type="phone" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div class="p-2 w-1/3">
              <div class="relative">
                <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-4 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
            <div class="p-2 w-full">
              <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
            </div>

          </div>
        </div>
      </div>
    </section>

  );
}

export default CaseRegistration;