<template>
  <section 
    id="form-question"
    class="w-full py-8">
    <div class="container mx-auto flex flex-col bg-[#30405b] rounded-lg gap-4 p-16 py-24">
      <div class="mb-10">
        <div>
          <span class="font-bold text-5xl text-white">
            Need more information?
          </span>
        </div>
        <div>
          <span class="font-bold text-5xl text-[#fe6602]">
            Contact Us
          </span>
        </div>
      </div>

      <form class="w-full">
        <div class="flex gap-4 flex-col lg:flex-row w-full">
          <div class="w-full lg:w-1/2">
            <div class="w-full mb-5 inline-block">
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="First Name*"
              >
            </div>
            <div class="w-full mb-5 inline-block">
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Organization*"
              >
            </div>
            <div class="w-full mb-5 inline-block">
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Country*"
              >
            </div>
            <div class="w-full flex gap-4 flex-col lg:flex-row">
              <div class="w-full lg:w-4/12">
                <select
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option selected>
                    Country Code
                  </option>
                  <option value="1">
                    +1
                  </option>
                  <option value="3">
                    +3
                  </option>
                  <option value="62">
                    +62
                  </option>
                  <option value="68">
                    +68
                  </option>
                  <option value="72">
                    +72
                  </option>
                </select>
              </div>
              <div class="w-full lg:w-8/12">
                <input
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Phone"
                >
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2">
            <div class="w-full mb-5 inline-block">
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Last Name*"
              >
            </div>
            <div class="w-full mb-5 inline-block">
              <input
                type="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Email*"
              >
            </div>
            <div class="w-full mb-5 inline-block">
              <textarea
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Message"
              />
            </div>
          </div>
        </div>
        <div class="flex gap-4 w-full justify-between">
          <div class="flex flex-col w-full">
            <div class="flex items-center">
              <input
                id="account-check"
                type="checkbox"
                value=""
                class="w-4 h-4 text-[#fe6602] bg-gray-100 border-gray-300 rounded focus:ring-[#fe6602] focus:ring-2"
              >
              <label
                for="account-check"
                class="ml-2 text-sm font-medium text-white"
              >
                Create a Account
              </label>
            </div>

            <div class="flex items-center mt-1">
              <input
                id="aggre-check"
                type="checkbox"
                value=""
                class="w-4 h-4 text-[#fe6602] bg-gray-100 border-gray-300 rounded focus:ring-[#fe6602] focus:ring-2"
              >
              <label
                for="aggre-check"
                class="ml-2 text-sm font-medium text-white"
              >
                Stay updated wit our latest news
              </label>
            </div>
          </div>
          <div>
            <button class="rounded-full bg-[#fe6602] border border-[#fe6602] px-24 py-2 text-white font-semibold">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>