import React from "react";

const Messages = () => {
  return (
    <>
      <main className="2xl:ml-[--w-side] xl:ml-[--w-side-md] md:ml-[--w-side-small]">
        <div className="2xl:max-w-6xl mx-auto h-screen relative shadow-lg overflow-hidden border1 max-md:pt-14">
          <div className="flex bg-white dark:bg-dark2">
            {/* sidebar */}
            <div className="md:w-[360px] relative border-r dark:border-slate-700">
              <div
                id="side-chat"
                className="top-0 left-0 max-md:fixed max-md:w-5/6 max-md:h-screen bg-white z-50 max-md:shadow max-md:-translate-x-full dark:bg-dark2"
              >
                {/* heading title */}
                <div className="p-4 border-b dark:border-slate-700">
                  <div className="flex mt-2 items-center justify-between">
                    <h2 className="text-2xl font-bold text-black ml-1 dark:text-white">
                      {" "}
                      Chats{" "}
                    </h2>
                    {/* right action buttons */}
                    <div className="flex items-center gap-2.5">
                      <button
                        className="group"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <ion-icon
                          name="settings-outline"
                          className="text-2xl flex group-aria-expanded:rotate-180 md hydrated"
                          role="img"
                          aria-label="settings outline"
                        />
                      </button>
                      <div
                        className="md:w-[270px] w-full uk-dropdown"
                        uk-dropdown="pos: bottom-left; offset:10; animation: uk-animation-slide-bottom-small"
                      >
                        <nav>
                          <a href="#">
                            {" "}
                            <ion-icon
                              className="text-2xl shrink-0 -ml-1 md hydrated"
                              name="checkmark-outline"
                              role="img"
                              aria-label="checkmark outline"
                            />{" "}
                            Mark all as read{" "}
                          </a>
                          <a href="#">
                            {" "}
                            <ion-icon
                              className="text-2xl shrink-0 -ml-1 md hydrated"
                              name="notifications-outline"
                              role="img"
                              aria-label="notifications outline"
                            />{" "}
                            notifications setting{" "}
                          </a>
                          <a href="#">
                            {" "}
                            <ion-icon
                              className="text-xl shrink-0 -ml-1 md hydrated"
                              name="volume-mute-outline"
                              role="img"
                              aria-label="volume mute outline"
                            />{" "}
                            Mute notifications{" "}
                          </a>
                        </nav>
                      </div>
                      <button className="">
                        <ion-icon
                          name="checkmark-circle-outline"
                          className="text-2xl flex md hydrated"
                          role="img"
                          aria-label="checkmark circle outline"
                        />
                      </button>
                      {/* mobile toggle menu */}
                      <button
                        type="button"
                        className="md:hidden"
                        uk-toggle="target: #side-chat ; cls: max-md:-translate-x-full"
                        aria-expanded="true"
                      >
                        <ion-icon
                          name="chevron-down-outline"
                          role="img"
                          className="md hydrated"
                          aria-label="chevron down outline"
                        />
                      </button>
                    </div>
                  </div>
                  {/* search */}
                  <div className="relative mt-4">
                    <div className="absolute left-3 bottom-1/2 translate-y-1/2 flex">
                      <ion-icon
                        name="search"
                        className="text-xl md hydrated"
                        role="img"
                        aria-label="search"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full !pl-10 !py-2 !rounded-lg"
                    />
                  </div>
                </div>
                {/* users list */}
                <div className="space-y-2 p-2 overflow-y-auto h-[calc(100vh-127px)]">
                  <a
                    href="#"
                    className="relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-secondery"
                  >
                    <div className="relative w-14 h-14 shrink-0">
                      <img
                        src="/assets/images/avatars/avatar-5.jpg"
                        alt=""
                        className="object-cover w-full h-full rounded-full"
                      />
                      <div className="w-4 h-4 absolute bottom-0 right-0  bg-green-500 rounded-full border border-white dark:border-slate-800" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="mr-auto text-sm text-black dark:text-white font-medium">
                          Jesse Steeve
                        </div>
                        <div className="text-xs font-light text-gray-500 dark:text-white/70">
                          09:40AM
                        </div>
                      </div>
                      <div className="font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap">
                        Love your photos 😍
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-secondery"
                  >
                    <div className="relative w-14 h-14 shrink-0">
                      <img
                        src="/assets/images/avatars/avatar-2.jpg"
                        alt=""
                        className="object-cover w-full h-full rounded-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="mr-auto text-sm text-black dark:text-white font-medium">
                          Martin Gray
                        </div>
                        <div className="text-xs font-light text-gray-500 dark:text-white/70">
                          09:40AM
                        </div>
                        <div className="w-2.5 h-2.5 bg-blue-600 rounded-full dark:bg-slate-700" />
                      </div>
                      <div className="font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap">
                        Photo editor needed. Fix photos? 🛠️
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-secondery"
                  >
                    <div className="relative w-14 h-14 shrink-0">
                      <img
                        src="/assets/images/avatars/avatar-3.jpg"
                        alt=""
                        className="object-cover w-full h-full rounded-full"
                      />
                      <div className="w-4 h-4 absolute bottom-0 right-0  bg-green-500 rounded-full border border-white dark:border-slate-800" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="mr-auto text-sm text-black dark:text-white font-medium">
                          Monroe Parker
                        </div>
                        <div className="text-xs font-light text-gray-500 dark:text-white/70">
                          09:40AM
                        </div>
                      </div>
                      <div className="font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap">
                        Can i call you to day?
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-secondery"
                  >
                    <div className="relative w-14 h-14 shrink-0">
                      <img
                        src="/assets/images/avatars/avatar-4.jpg"
                        alt=""
                        className="object-cover w-full h-full rounded-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="mr-auto text-sm text-black dark:text-white font-medium">
                          James Lewis
                        </div>
                        <div className="text-xs font-light text-gray-500 dark:text-white/70">
                          09:40AM
                        </div>
                      </div>
                      <div className="font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap">
                        {" "}
                        Want to buy landscape photo? 🌄{" "}
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-secondery"
                  >
                    <div className="relative w-14 h-14 shrink-0">
                      <img
                        src="/assets/images/avatars/avatar-5.jpg"
                        alt=""
                        className="object-cover w-full h-full rounded-full"
                      />
                      <div className="w-4 h-4 absolute bottom-0 right-0  bg-green-500 rounded-full border border-white dark:border-slate-800" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="mr-auto text-sm text-black dark:text-white font-medium">
                          Jesse Steeve
                        </div>
                        <div className="text-xs font-light text-gray-500 dark:text-white/70">
                          09:40AM
                        </div>
                      </div>
                      <div className="font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap">
                        Headshot needed. Resume. Do it? 👩‍💼
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-secondery"
                  >
                    <div className="relative w-14 h-14 shrink-0">
                      <img
                        src="/assets/images/avatars/avatar-2.jpg"
                        alt=""
                        className="object-cover w-full h-full rounded-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="mr-auto text-sm text-black dark:text-white font-medium">
                          Martin Gray
                        </div>
                        <div className="text-xs font-light text-gray-500 dark:text-white/70">
                          04:20PM
                        </div>
                        <div className="w-2.5 h-2.5 bg-blue-600 rounded-full dark:bg-slate-700" />
                      </div>
                      <div className="font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap">
                        Online course interesting? 🎓
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-secondery"
                  >
                    <div className="relative w-14 h-14 shrink-0">
                      <img
                        src="/assets/images/avatars/avatar-3.jpg"
                        alt=""
                        className="object-cover w-full h-full rounded-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="mr-auto text-sm text-black dark:text-white font-medium">
                          Monroe Parker
                        </div>
                        <div className="text-xs font-light text-gray-500 dark:text-white/70">
                          09:40AM
                        </div>
                      </div>
                      <div className="font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap">
                        I’m glad you like it.😊
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-secondery"
                  >
                    <div className="relative w-14 h-14 shrink-0">
                      <img
                        src="/assets/images/avatars/avatar-4.jpg"
                        alt=""
                        className="object-cover w-full h-full rounded-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="mr-auto text-sm text-black dark:text-white font-medium">
                          James Lewis
                        </div>
                        <div className="text-xs font-light text-gray-500 dark:text-white/70">
                          01:10PM
                        </div>
                      </div>
                      <div className="font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap">
                        {" "}
                        Product photographer wanted? 📷{" "}
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-secondery"
                  >
                    <div className="relative w-14 h-14 shrink-0">
                      <img
                        src="/assets/images/avatars/avatar-5.jpg"
                        alt=""
                        className="object-cover w-full h-full rounded-full"
                      />
                      <div className="w-4 h-4 absolute bottom-0 right-0  bg-green-500 rounded-full border border-white dark:border-slate-800" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="mr-auto text-sm text-black dark:text-white font-medium">
                          Jesse Steeve
                        </div>
                        <div className="text-xs font-light text-gray-500 dark:text-white/70">
                          09:40AM
                        </div>
                      </div>
                      <div className="font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap">
                        Love your photos 😍
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-secondery"
                  >
                    <div className="relative w-14 h-14 shrink-0">
                      <img
                        src="/assets/images/avatars/avatar-2.jpg"
                        alt=""
                        className="object-cover w-full h-full rounded-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="mr-auto text-sm text-black dark:text-white font-medium">
                          Martin Gray
                        </div>
                        <div className="text-xs font-light text-gray-500 dark:text-white/70">
                          02:52PM
                        </div>
                      </div>
                      <div className="font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap">
                        Photo editor needed. Fix photos? 🛠️
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              {/* overly */}
              <div
                id="side-chat"
                className="bg-slate-100/40 backdrop-blur w-full h-full dark:bg-slate-800/40 z-40 fixed inset-0 max-md:-translate-x-full md:hidden"
                uk-toggle="target: #side-chat ; cls: max-md:-translate-x-full"
                tabIndex={0}
                aria-expanded="true"
              />
            </div>
            {/* message center */}
            <div className="flex-1">
              {/* chat heading */}
              <div className="flex items-center justify-between gap-2 w- px-6 py-3.5 z-10 border-b dark:border-slate-700 uk-animation-slide-top-medium">
                <div className="flex items-center sm:gap-4 gap-2">
                  {/* toggle for mobile */}
                  <button
                    type="button"
                    className="md:hidden"
                    uk-toggle="target: #side-chat ; cls: max-md:-translate-x-full"
                    aria-expanded="true"
                  >
                    <ion-icon
                      name="chevron-back-outline"
                      className="text-2xl -ml-4 md hydrated"
                      role="img"
                      aria-label="chevron back outline"
                    />
                  </button>
                  <div
                    className="relative cursor-pointer max-md:hidden"
                    uk-toggle="target: .rightt ; cls: hidden"
                    tabIndex={0}
                    aria-expanded="true"
                  >
                    <img
                      src="/assets/images/avatars/avatar-6.jpg"
                      alt=""
                      className="w-8 h-8 rounded-full shadow"
                    />
                    <div className="w-2 h-2 bg-teal-500 rounded-full absolute right-0 bottom-0 m-px" />
                  </div>
                  <div
                    className="cursor-pointer"
                    uk-toggle="target: .rightt ; cls: hidden"
                    tabIndex={0}
                    aria-expanded="true"
                  >
                    <div className="text-base font-bold"> Monroe Parker</div>
                    <div className="text-xs text-green-500 font-semibold">
                      {" "}
                      Online
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button type="button" className="button__ico">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="hover:bg-slate-100 p-1.5 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="hover:bg-slate-100 p-1.5 rounded-full"
                    uk-toggle="target: .rightt ; cls: hidden"
                    aria-expanded="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* chats bubble */}
              <div className="w-full p-5 py-10 overflow-y-auto md:h-[calc(100vh-137px)] h-[calc(100vh-250px)]">
                <div className="py-10 text-center text-sm lg:pt-8">
                  <img
                    src="/assets/images/avatars/avatar-6.jpg"
                    className="w-24 h-24 rounded-full mx-auto mb-3"
                    alt=""
                  />
                  <div className="mt-8">
                    <div className="md:text-xl text-base font-medium text-black dark:text-white">
                      {" "}
                      Monroe Parker{" "}
                    </div>
                    <div className="text-gray-500 text-sm   dark:text-white/80">
                      {" "}
                      @Monroepark{" "}
                    </div>
                  </div>
                  <div className="mt-3.5">
                    <a
                      href="profile.html"
                      className="inline-block rounded-lg px-4 py-1.5 text-sm font-semibold bg-secondery"
                    >
                      View profile
                    </a>
                  </div>
                </div>
                <div className="text-sm font-medium space-y-6">
                  {/* received */}
                  <div className="flex gap-3">
                    <img
                      src="/assets/images/avatars/avatar-2.jpg"
                      alt=""
                      className="w-9 h-9 rounded-full shadow"
                    />
                    <div className="px-4 py-2 rounded-[20px] max-w-sm bg-secondery">
                      {" "}
                      Hi, I’m John{" "}
                    </div>
                  </div>
                  {/* sent */}
                  <div className="flex gap-2 flex-row-reverse items-end">
                    <img
                      src="/assets/images/avatars/avatar-3.jpg"
                      alt=""
                      className="w-5 h-5 rounded-full shadow"
                    />
                    <div className="px-4 py-2 rounded-[20px] max-w-sm bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow">
                      {" "}
                      I’m Lisa. welcome John
                    </div>
                  </div>
                  {/* time */}
                  <div className="flex justify-center ">
                    <div className="font-medium text-gray-500 text-sm dark:text-white/70">
                      April 8,2023,6:30 AM
                    </div>
                  </div>
                  {/* received */}
                  <div className="flex gap-3">
                    <img
                      src="/assets/images/avatars/avatar-2.jpg"
                      alt=""
                      className="w-9 h-9 rounded-full shadow"
                    />
                    <div className="px-4 py-2 rounded-[20px] max-w-sm bg-secondery">
                      {" "}
                      I’m selling a photo of a sunset. It’s a print on canvas,
                      signed by the photographer. Do you like it? 😊{" "}
                    </div>
                  </div>
                  {/* sent */}
                  <div className="flex gap-2 flex-row-reverse items-end">
                    <img
                      src="/assets/images/avatars/avatar-3.jpg"
                      alt=""
                      className="w-4 h-4 rounded-full shadow"
                    />
                    <div className="px-4 py-2 rounded-[20px] max-w-sm bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow">
                      {" "}
                      Wow, it’s beautiful. How much ? 😍{" "}
                    </div>
                  </div>
                  {/* sent media*/}
                  <div className="flex gap-2 flex-row-reverse items-end">
                    <img
                      src="/assets/images/avatars/avatar-3.jpg"
                      alt=""
                      className="w-4 h-4 rounded-full shadow"
                    />
                    <a
                      className="block rounded-[18px] border overflow-hidden"
                      href="#"
                    >
                      <div className="max-w-md">
                        <div className="max-w-full relative w-72">
                          <div
                            className="relative"
                            style={{ paddingBottom: "57.4286%" }}
                          >
                            <div className="w-full h-full absolute inset-0">
                              <img
                                src="/assets/images/product/product-2.jpg"
                                alt=""
                                className="block max-w-full max-h-52 w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* time */}
                  <div className="flex justify-center ">
                    <div className="font-medium text-gray-500 text-sm dark:text-white/70">
                      April 8,2023,6:30 AM
                    </div>
                  </div>
                  {/* received */}
                  <div className="flex gap-3">
                    <img
                      src="/assets/images/avatars/avatar-2.jpg"
                      alt=""
                      className="w-9 h-9 rounded-full shadow"
                    />
                    <div className="px-4 py-2 rounded-[20px] max-w-sm bg-secondery">
                      {" "}
                      I’m glad you like it. I’m asking for $200 🤑
                    </div>
                  </div>
                  {/* sent */}
                  <div className="flex gap-2 flex-row-reverse items-end">
                    <img
                      src="/assets/images/avatars/avatar-3.jpg"
                      alt=""
                      className="w-5 h-5 rounded-full shadow"
                    />
                    <div className="px-4 py-2 rounded-[20px] max-w-sm bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow">
                      {" "}
                      $200? Too steep. Can you lower the price a bit? 😕
                    </div>
                  </div>
                  {/* received */}
                  <div className="flex gap-3">
                    <img
                      src="/assets/images/avatars/avatar-2.jpg"
                      alt=""
                      className="w-9 h-9 rounded-full shadow"
                    />
                    <div className="px-4 py-2 rounded-[20px] max-w-sm bg-secondery">
                      {" "}
                      Well, I can’t go too low because I paid a lot. But I’m
                      willing to negotiate. What’s your offer? 🤔{" "}
                    </div>
                  </div>
                  {/* sent */}
                  <div className="flex gap-2 flex-row-reverse items-end">
                    <img
                      src="/assets/images/avatars/avatar-3.jpg"
                      alt=""
                      className="w-5 h-5 rounded-full shadow"
                    />
                    <div className="px-4 py-2 rounded-[20px] max-w-sm bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow">
                      {" "}
                      Sorry, can’t pay more than $150. 😅
                    </div>
                  </div>
                  {/* time */}
                  <div className="flex justify-center ">
                    <div className="font-medium text-gray-500 text-sm dark:text-white/70">
                      April 8,2023,6:30 AM
                    </div>
                  </div>
                  {/* received */}
                  <div className="flex gap-3">
                    <img
                      src="/assets/images/avatars/avatar-2.jpg"
                      alt=""
                      className="w-9 h-9 rounded-full shadow"
                    />
                    <div className="px-4 py-2 rounded-[20px] max-w-sm bg-secondery">
                      {" "}
                      $150? Too low. Photo worth more. 😬
                    </div>
                  </div>
                  {/* sent */}
                  <div className="flex gap-2 flex-row-reverse items-end">
                    <img
                      src="/assets/images/avatars/avatar-3.jpg"
                      alt=""
                      className="w-5 h-5 rounded-full shadow"
                    />
                    <div className="px-4 py-2 rounded-[20px] max-w-sm bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow">
                      {" "}
                      Too high. I Can’t . How about $160? Final offer. 😬{" "}
                    </div>
                  </div>
                  {/* received */}
                  <div className="flex gap-3">
                    <img
                      src="/assets/images/avatars/avatar-2.jpg"
                      alt=""
                      className="w-9 h-9 rounded-full shadow"
                    />
                    <div className="px-4 py-2 rounded-[20px] max-w-sm bg-secondery">
                      {" "}
                      Fine, fine. You’re hard to please. I’ll take $160, but
                      only because I like you. 😍
                    </div>
                  </div>
                  {/* sent */}
                  <div className="flex gap-2 flex-row-reverse items-end">
                    <img
                      src="/assets/images/avatars/avatar-3.jpg"
                      alt=""
                      className="w-5 h-5 rounded-full shadow"
                    />
                    <div className="px-4 py-2 rounded-[20px] max-w-sm bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow">
                      {" "}
                      Great, thank you. I appreciate it. I love this photo and
                      can’t wait to hang it. 😩{" "}
                    </div>
                  </div>
                </div>
              </div>
              {/* sending message area */}
              <div className="flex items-center md:gap-4 gap-2 md:p-3 p-2 overflow-hidden">
                <div
                  id="message__wrap"
                  className="flex items-center gap-2 h-full dark:text-white -mt-1.5"
                >
                  <button
                    type="button"
                    className="shrink-0"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <ion-icon
                      className="text-3xl flex md hydrated"
                      name="add-circle-outline"
                      role="img"
                      aria-label="add circle outline"
                    />
                  </button>
                  <div
                    className="dropbar pt-36 h-60 bg-gradient-to-t via-white from-white via-30% from-30% dark:from-slate-900 dark:via-900 uk-drop"
                    uk-drop="stretch: x; target: #message__wrap ;animation:  slide-bottom ;animate-out: true; pos: top-left; offset:10 ; mode: click ; duration: 200"
                  >
                    <div
                      className="sm:w-full p-3 flex justify-center gap-5"
                      uk-scrollspy="target: > button; cls: uk-animation-slide-bottom-small; delay: 100;repeat:true"
                    >
                      <button
                        type="button"
                        className="bg-sky-50 text-sky-600 border border-sky-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark3 dark:border-0"
                        style={{ opacity: 0 }}
                      >
                        <ion-icon
                          className="text-3xl flex md hydrated"
                          name="image"
                          role="img"
                          aria-label="image"
                        />
                      </button>
                      <button
                        type="button"
                        className="bg-green-50 text-green-600 border border-green-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark3 dark:border-0"
                        style={{ opacity: 0 }}
                      >
                        <ion-icon
                          className="text-3xl flex md hydrated"
                          name="images"
                          role="img"
                          aria-label="images"
                        />
                      </button>
                      <button
                        type="button"
                        className="bg-pink-50 text-pink-600 border border-pink-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark3 dark:border-0"
                        style={{ opacity: 0 }}
                      >
                        <ion-icon
                          className="text-3xl flex md hydrated"
                          name="document-text"
                          role="img"
                          aria-label="document text"
                        />
                      </button>
                      <button
                        type="button"
                        className="bg-orange-50 text-orange-600 border border-orange-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark3 dark:border-0"
                        style={{ opacity: 0 }}
                      >
                        <ion-icon
                          className="text-3xl flex md hydrated"
                          name="gift"
                          role="img"
                          aria-label="gift"
                        />
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="shrink-0"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <ion-icon
                      className="text-3xl flex md hydrated"
                      name="happy-outline"
                      role="img"
                      aria-label="happy outline"
                    />
                  </button>
                  <div
                    className="dropbar p-2 uk-drop"
                    uk-drop="stretch: x; target: #message__wrap ;animation: uk-animation-scale-up uk-transform-origin-bottom-left ;animate-out: true; pos: top-left ; offset:2; mode: click ; duration: 200 "
                  >
                    <div className="sm:w-60 bg-white shadow-lg border rounded-xl  pr-0 dark:border-slate-700 dark:bg-dark3">
                      <h4 className="text-sm font-semibold p-3 pb-0">
                        Send Imogi
                      </h4>
                      <div className="grid grid-cols-5 overflow-y-auto max-h-44 p-3 text-center text-xl">
                        <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                          {" "}
                          😊{" "}
                        </div>
                        <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                          {" "}
                          🤩{" "}
                        </div>
                        <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                          {" "}
                          😎
                        </div>
                        <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                          {" "}
                          🥳{" "}
                        </div>
                        <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                          {" "}
                          😂{" "}
                        </div>
                        <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                          {" "}
                          🥰{" "}
                        </div>
                        <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                          {" "}
                          😡{" "}
                        </div>
                        <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                          {" "}
                          😊{" "}
                        </div>
                        <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                          {" "}
                          🤩{" "}
                        </div>
                        <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                          {" "}
                          😎
                        </div>
                        <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                          {" "}
                          🥳{" "}
                        </div>
                        <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                          {" "}
                          😂{" "}
                        </div>
                        <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                          {" "}
                          🥰{" "}
                        </div>
                        <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                          {" "}
                          😡{" "}
                        </div>
                        <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                          {" "}
                          🤔{" "}
                        </div>
                        <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                          {" "}
                          😊{" "}
                        </div>
                        <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                          {" "}
                          🤩{" "}
                        </div>
                        <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                          {" "}
                          😎
                        </div>
                        <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                          {" "}
                          🥳{" "}
                        </div>
                        <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                          {" "}
                          😂{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex-1">
                  <textarea
                    placeholder="Write your message"
                    rows={1}
                    className="w-full resize-none bg-secondery rounded-full px-4 p-2"
                    defaultValue={""}
                  />
                  <button
                    type="button"
                    className="text-white shrink-0 p-2 absolute right-0.5 top-0"
                  >
                    <ion-icon
                      className="text-xl flex md hydrated"
                      name="send-outline"
                      role="img"
                      aria-label="send outline"
                    />
                  </button>
                </div>
                <button type="button" className="flex h-full dark:text-white">
                  <ion-icon
                    className="text-3xl flex -mt-3 md hydrated"
                    name="heart-outline"
                    role="img"
                    aria-label="heart outline"
                  />
                </button>
              </div>
            </div>
            {/* user profile right info */}
            <div className="rightt w-full h-full absolute top-0 right-0 z-10 hidden transition-transform">
              <div className="w-[360px] border-l shadow-lg h-screen bg-white absolute right-0 top-0 uk-animation-slide-right-medium delay-200 z-50 dark:bg-dark2 dark:border-slate-700">
                <div className="w-full h-1.5 bg-gradient-to-r to-purple-500 via-red-500 from-pink-500 -mt-px" />
                <div className="py-10 text-center text-sm pt-20">
                  <img
                    src="/assets/images/avatars/avatar-3.jpg"
                    className="w-24 h-24 rounded-full mx-auto mb-3"
                    alt=""
                  />
                  <div className="mt-8">
                    <div className="md:text-xl text-base font-medium text-black dark:text-white">
                      {" "}
                      Monroe Parker
                    </div>
                    <div className="text-gray-500 text-sm mt-1 dark:text-white/80">
                      @Monroepark
                    </div>
                  </div>
                  <div className="mt-5">
                    <a
                      href="profile.html"
                      className="inline-block rounded-full px-4 py-1.5 text-sm font-semibold bg-secondery"
                    >
                      View profile
                    </a>
                  </div>
                </div>
                <hr className="opacity-80 dark:border-slate-700" />
                <ul className="text-base font-medium p-3">
                  <li>
                    <div className="flex items-center gap-5 rounded-md p-3 w-full hover:bg-secondery">
                      <ion-icon
                        name="notifications-off-outline"
                        className="text-2xl md hydrated"
                        role="img"
                        aria-label="notifications off outline"
                      />{" "}
                      Mute Notification
                      <label className="switch cursor-pointer ml-auto">
                        {" "}
                        <input type="checkbox" defaultChecked="" />
                        <span className="switch-button !relative" />
                      </label>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <button
                      type="button"
                      className="flex items-center gap-5 rounded-md p-3 w-full hover:bg-secondery"
                    >
                      {" "}
                      <ion-icon
                        name="flag-outline"
                        className="text-2xl md hydrated"
                        role="img"
                        aria-label="flag outline"
                      />{" "}
                      Report{" "}
                    </button>
                  </li>
                  <li>
                    {" "}
                    <button
                      type="button"
                      className="flex items-center gap-5 rounded-md p-3 w-full hover:bg-secondery"
                    >
                      {" "}
                      <ion-icon
                        name="settings-outline"
                        className="text-2xl md hydrated"
                        role="img"
                        aria-label="settings outline"
                      />{" "}
                      Ignore messages{" "}
                    </button>{" "}
                  </li>
                  <li>
                    {" "}
                    <button
                      type="button"
                      className="flex items-center gap-5 rounded-md p-3 w-full hover:bg-secondery"
                    >
                      {" "}
                      <ion-icon
                        name="stop-circle-outline"
                        className="text-2xl md hydrated"
                        role="img"
                        aria-label="stop circle outline"
                      />{" "}
                      Block{" "}
                    </button>{" "}
                  </li>
                  <li>
                    {" "}
                    <button
                      type="button"
                      className="flex items-center gap-5 rounded-md p-3 w-full hover:bg-red-50 text-red-500"
                    >
                      {" "}
                      <ion-icon
                        name="trash-outline"
                        className="text-2xl md hydrated"
                        role="img"
                        aria-label="trash outline"
                      />{" "}
                      Delete Chat{" "}
                    </button>{" "}
                  </li>
                </ul>
                {/* close button */}
                <button
                  type="button"
                  className="absolute top-0 right-0 m-4 p-2 bg-secondery rounded-full"
                  uk-toggle="target: .rightt ; cls: hidden"
                  aria-expanded="true"
                >
                  <ion-icon
                    name="close"
                    className="text-2xl flex md hydrated"
                    role="img"
                    aria-label="close"
                  />
                </button>
              </div>
              {/* overly */}
              <div
                className="bg-slate-100/40 backdrop-blur absolute w-full h-full dark:bg-slate-800/40"
                uk-toggle="target: .rightt ; cls: hidden"
                tabIndex={0}
                aria-expanded="true"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Messages;
