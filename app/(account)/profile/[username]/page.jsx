import React from "react";

const Profile = () => {
  return (
    <>
      <main className="2xl:ml-[--w-side] xl:ml-[--w-side-md] md:ml-[--w-side-small]">
        <div className="main__inner">
          {/* profile  */}
          <div className="py-6 relative">
            <div className="flex md:gap-16 gap-4 max-md:flex-col">
              <div className="relative md:p-1 rounded-full h-full max-md:w-16 bg-gradient-to-tr from-pink-400 to-pink-600 shadow-md hover:scale-110 duration-500 uk-animation-scale-up">
                <div className="relative md:w-40 md:h-40 h-16 w-16 rounded-full overflow-hidden md:border-[6px] border-gray-100 shrink-0 dark:border-slate-900">
                  <img
                    src="/assets/images/avatars/avatar-6.jpg"
                    alt=""
                    className="w-full h-full absolute object-cover"
                  />
                </div>
                <button
                  type="button"
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white shadow p-1.5 rounded-full sm:flex hidden"
                >
                  {" "}
                  <ion-icon
                    name="camera"
                    className="text-2xl md hydrated"
                    role="img"
                    aria-label="camera"
                  />
                </button>
              </div>
              <div className="max-w-2x flex-1">
                <h3 className="md:text-xl text-base font-semibold text-black dark:text-white">
                  {" "}
                  Monroe Parker{" "}
                </h3>
                <p className="sm:text-sm text-blue-600 mt-1 font-normal text-xs">
                  @Monroepak
                </p>
                <p className="text-sm mt-2 md:font-normal font-light">
                  {" "}
                  I love beauty and emotion. 🥰 I’m passionate about photography
                  and learning. 📚 I explore genres and styles. 🌈 I think
                  photography is storytelling. 📖 I hope you like and feel my
                  photos. 😊
                </p>
                <p
                  className="mt-2 space-x-2 text-gray-500 text-sm hidden"
                  style={{ marginTop: 11 }}
                >
                  <a href="#" className="inline-block">
                    Travel
                  </a>{" "}
                  .{" "}
                  <a href="#" className="inline-block">
                    Business
                  </a>{" "}
                  .{" "}
                  <a href="#" className="inline-block">
                    Technolgy
                  </a>
                </p>
                <div className="flex md:items-end justify-between md:mt-8 mt-4 max-md:flex-col gap-4">
                  <div className="flex sm:gap-10 gap-6 sm:text-sm text-xs max-sm:absolute max-sm:top-10 max-sm:left-36">
                    <div>
                      <p>Posts</p>
                      <h3 className="sm:text-xl sm:font-bold mt-1 text-black dark:text-white text-base font-normal">
                        162
                      </h3>
                    </div>
                    <div>
                      <p>Following</p>
                      <h3 className="sm:text-xl sm:font-bold mt-1 text-black dark:text-white text-base font-normal">
                        14,260
                      </h3>
                    </div>
                    <div>
                      <p>Followers</p>
                      <h3 className="sm:text-xl sm:font-bold mt-1 text-black dark:text-white text-base font-normal">
                        8,542
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <button
                      type="submit"
                      className="button text-gray-600 bg-slate-200 hidden"
                    >
                      Follow
                    </button>
                    <button
                      type="button"
                      className="button bg-pink-100 text-pink-600 border border-pink-200"
                    >
                      Unfallow
                    </button>
                    <button
                      type="submit"
                      className="button bg-pink-600 text-white"
                    >
                      Message
                    </button>
                    <div>
                      <button
                        type="submit"
                        className="rounded-lg bg-slate-200/60 flex px-2 py-1.5 dark:bg-dark2"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {" "}
                        <ion-icon
                          className="text-xl md hydrated"
                          name="ellipsis-horizontal"
                          role="img"
                          aria-label="ellipsis horizontal"
                        />
                      </button>
                      <div
                        className="w-[240px] uk-dropdown"
                        uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click;offset:10"
                      >
                        <nav>
                          <a href="#">
                            {" "}
                            <ion-icon
                              className="text-xl md hydrated"
                              name="pricetags-outline"
                              role="img"
                              aria-label="pricetags outline"
                            />{" "}
                            Unfollow{" "}
                          </a>
                          <a href="#">
                            {" "}
                            <ion-icon
                              className="text-xl md hydrated"
                              name="time-outline"
                              role="img"
                              aria-label="time outline"
                            />{" "}
                            Mute story{" "}
                          </a>
                          <a href="#">
                            {" "}
                            <ion-icon
                              className="text-xl md hydrated"
                              name="flag-outline"
                              role="img"
                              aria-label="flag outline"
                            />{" "}
                            Report{" "}
                          </a>
                          <a href="#">
                            {" "}
                            <ion-icon
                              className="text-xl md hydrated"
                              name="share-outline"
                              role="img"
                              aria-label="share outline"
                            />{" "}
                            Share profile{" "}
                          </a>
                          <hr />
                          <a
                            href="#"
                            className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                          >
                            {" "}
                            <ion-icon
                              className="text-xl md hydrated"
                              name="stop-circle-outline"
                              role="img"
                              aria-label="stop circle outline"
                            />{" "}
                            Block{" "}
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            {/* sticky tabs */}
            <div
              uk-sticky="cls-active: bg-slate-100/60 z-30 backdrop-blur-lg px-4 dark:bg-slate-800/60; start: 500; animation: uk-animation-slide-top"
              className="uk-sticky"
              style={{}}
            >
              <nav className="text-sm text-center text-gray-500 capitalize font-semibold dark:text-white">
                <ul
                  className="flex gap-2 justify-center border-t dark:border-slate-700"
                  uk-switcher="connect: #story_tab ; animation: uk-animation-fade, uk-animation-slide-left-medium"
                >
                  <li className="uk-active">
                    {" "}
                    <a
                      href="#"
                      className="flex items-center p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"
                      aria-expanded="true"
                    >
                      {" "}
                      <ion-icon
                        className="mr-2 text-2xl md hydrated"
                        name="camera-outline"
                        role="img"
                        aria-label="camera outline"
                      />{" "}
                      Posts
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a
                      href="#"
                      className="flex items-center p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"
                      aria-expanded="false"
                    >
                      {" "}
                      <ion-icon
                        className="mr-2 text-2xl md hydrated"
                        name="play-outline"
                        role="img"
                        aria-label="play outline"
                      />{" "}
                      Reels{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a
                      href="#"
                      className="flex items-center p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"
                      aria-expanded="false"
                    >
                      {" "}
                      <ion-icon
                        className="mr-2 text-2xl md hydrated"
                        name="pricetags-outline"
                        role="img"
                        aria-label="pricetags outline"
                      />{" "}
                      Tagged{" "}
                    </a>{" "}
                  </li>
                </ul>
              </nav>
            </div>
            <div
              className="uk-sticky-placeholder"
              style={{ height: 46, width: 895, margin: 0 }}
              hidden=""
            />
            <div
              id="story_tab"
              className="uk-switcher"
              style={{ touchAction: "pan-y pinch-zoom" }}
            >
              {/* Post list */}
              <div className="uk-active">
                {/* hightlets slider post */}
                <div className="mt-8">
                  {/* post heading */}
                  <div className="flex items-center justify-between py-3">
                    <h1 className="text-xl font-bold text-black dark:text-white">
                      Highths
                    </h1>
                    <button type="button" className="lg:hidden">
                      <svg
                        id="icon__outline"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    className="relative mt-5 uk-slider"
                    tabIndex={-1}
                    uk-slider="autoplay: true;finite: true"
                  >
                    <div className="overflow-hidden uk-slider-container py-10">
                      <ul
                        className="-ml-2 uk-slider-items w-[calc(100%+0.875rem)]"
                        uk-scrollspy="target: > li; cls: uk-animation-slide-right-small; delay: 50"
                        uk-lightbox=""
                        style={{
                          transform: "translate3d(-363.578px, 0px, 0px)",
                        }}
                      >
                        <li
                          className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5 max-lg:hidden uk-scrollspy-inview"
                          uk-scrollspy-class="uk-animation-fade"
                          tabIndex={-1}
                          style={{}}
                        >
                          <div className="flex flex-col items-center justify-center rounded-lg h-64 border-2 border-dashed border-teal-600">
                            <ion-icon
                              name="add-circle"
                              className="text-4xl text-teal-900 md hydrated"
                              role="img"
                              aria-label="add circle"
                            />
                            <div className="mt-1 font-semibold">Add New</div>
                          </div>
                        </li>
                        <li
                          className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5 uk-scrollspy-inview"
                          tabIndex={-1}
                          style={{}}
                        >
                          <a
                            href="/assets/images/avatars/avatar-lg-1.jpg"
                            data-caption="Caption"
                          >
                            <div className=" lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                              <div className="w-full lg:h-64 aspect-[2.5/4] realtive">
                                <img
                                  src="/assets/images/avatars/avatar-lg-1.jpg"
                                  className="rounded-lg w-full h-full object-cover inset-0"
                                  alt=""
                                />
                              </div>
                            </div>
                          </a>
                        </li>
                        <li
                          className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5 uk-active uk-scrollspy-inview "
                          tabIndex={-1}
                          style={{}}
                        >
                          <a
                            href="/assets/images/avatars/avatar-lg-2.jpg"
                            data-caption="Caption"
                          >
                            <div className=" lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                              <div className="w-full lg:h-64 aspect-[2.5/4] realtive">
                                <img
                                  src="/assets/images/avatars/avatar-lg-2.jpg"
                                  className="rounded-lg w-full h-full object-cover inset-0"
                                  alt=""
                                />
                              </div>
                            </div>
                          </a>
                        </li>
                        <li
                          className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5 uk-active uk-scrollspy-inview "
                          tabIndex={-1}
                          style={{}}
                        >
                          <a
                            href="/assets/images/avatars/avatar-lg-3.jpg"
                            data-caption="Caption"
                          >
                            <div className=" lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                              <div className="w-full lg:h-64 aspect-[2.5/4] realtive">
                                <img
                                  src="/assets/images/avatars/avatar-lg-3.jpg"
                                  className="rounded-lg w-full h-full object-cover inset-0"
                                  alt=""
                                />
                              </div>
                            </div>
                          </a>
                        </li>
                        <li
                          className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5 uk-scrollspy-inview uk-active"
                          tabIndex={-1}
                          style={{}}
                        >
                          <a
                            href="/assets/images/avatars/avatar-lg-4.jpg"
                            data-caption="Caption"
                          >
                            <div className=" lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                              <div className="w-full lg:h-64 aspect-[2.5/4] realtive">
                                <img
                                  src="/assets/images/avatars/avatar-lg-4.jpg"
                                  className="rounded-lg w-full h-full object-cover inset-0"
                                  alt=""
                                />
                              </div>
                            </div>
                          </a>
                        </li>
                        <li
                          className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5 uk-scrollspy-inview uk-active"
                          tabIndex={-1}
                          style={{}}
                        >
                          <a
                            href="/assets/images/avatars/avatar-lg-5.jpg"
                            data-caption="Caption"
                          >
                            <div className=" lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                              <div className="w-full lg:h-64 aspect-[2.5/4] realtive">
                                <img
                                  src="/assets/images/avatars/avatar-lg-5.jpg"
                                  className="rounded-lg w-full h-full object-cover inset-0"
                                  alt=""
                                />
                              </div>
                            </div>
                          </a>
                        </li>
                        <li
                          className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5 uk-scrollspy-inview uk-active"
                          tabIndex={-1}
                          style={{}}
                        >
                          <div className="w-full lg:h-64 aspect-[2.5/4] bg-slate-200/60 rounded-lg animate-pulse" />
                        </li>
                      </ul>
                    </div>
                    <button
                      type="button"
                      className="absolute -translate-y-1/2 bg-white rounded-full top-1/2 -left-4 grid w-9 h-9 place-items-center shadow dark:bg-dark3"
                      uk-slider-item="previous"
                    >
                      {" "}
                      <ion-icon
                        name="chevron-back"
                        className="text-2xl md hydrated"
                        role="img"
                        aria-label="chevron back"
                      />
                    </button>
                    <button
                      type="button"
                      className="absolute -right-4 -translate-y-1/2 bg-white rounded-full top-1/2 grid w-9 h-9 place-items-center shadow dark:bg-dark3 uk-invisible"
                      uk-slider-item="next"
                    >
                      {" "}
                      <ion-icon
                        name="chevron-forward"
                        className="text-2xl md hydrated"
                        role="img"
                        aria-label="chevron forward"
                      />
                    </button>
                  </div>
                </div>
                {/* post list  */}
                <div className="mt-8">
                  {/* post heading */}
                  <div className="flex items-center justify-between py-3">
                    <h1 className="text-xl font-bold text-black dark:text-white">
                      Posts
                    </h1>
                    <a
                      href="#"
                      className="text-sm font-semibold flex items-center gap-2"
                    >
                      Show acheived{" "}
                      <ion-icon
                        name="chevron-forward-outline"
                        role="img"
                        className="md hydrated"
                        aria-label="chevron forward outline"
                      />
                    </a>
                  </div>
                  {/* Post list */}
                  <div
                    className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 mt-6"
                    uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100"
                  >
                    <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                      <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                        <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                          <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                            <img
                              src="/assets/images/post/post-1.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                              <div className="flex items-center gap-2">
                                {" "}
                                <ion-icon
                                  className="text-2xl md hydrated"
                                  name="heart-circle"
                                  role="img"
                                  aria-label="heart circle"
                                />{" "}
                                152
                              </div>
                              <div className="flex items-center gap-2">
                                {" "}
                                <ion-icon
                                  className="text-2xl md hydrated"
                                  name="chatbubble-ellipses"
                                  role="img"
                                  aria-label="chatbubble ellipses"
                                />{" "}
                                290
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                      <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                        <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                          <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                            <img
                              src="/assets/images/post/post-2.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                              <div className="flex items-center gap-2">
                                {" "}
                                <ion-icon
                                  className="text-2xl md hydrated"
                                  name="heart-circle"
                                  role="img"
                                  aria-label="heart circle"
                                />{" "}
                                152
                              </div>
                              <div className="flex items-center gap-2">
                                {" "}
                                <ion-icon
                                  className="text-2xl md hydrated"
                                  name="chatbubble-ellipses"
                                  role="img"
                                  aria-label="chatbubble ellipses"
                                />{" "}
                                290
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                      <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                        <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                          <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                            <img
                              src="/assets/images/post/post-3.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                              <div className="flex items-center gap-2">
                                {" "}
                                <ion-icon
                                  className="text-2xl md hydrated"
                                  name="heart-circle"
                                  role="img"
                                  aria-label="heart circle"
                                />{" "}
                                152
                              </div>
                              <div className="flex items-center gap-2">
                                {" "}
                                <ion-icon
                                  className="text-2xl md hydrated"
                                  name="chatbubble-ellipses"
                                  role="img"
                                  aria-label="chatbubble ellipses"
                                />{" "}
                                290
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                      <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                        <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                          <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                            <img
                              src="/assets/images/post/post-4.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                              <div className="flex items-center gap-2">
                                {" "}
                                <ion-icon
                                  className="text-2xl md hydrated"
                                  name="heart-circle"
                                  role="img"
                                  aria-label="heart circle"
                                />{" "}
                                152
                              </div>
                              <div className="flex items-center gap-2">
                                {" "}
                                <ion-icon
                                  className="text-2xl md hydrated"
                                  name="chatbubble-ellipses"
                                  role="img"
                                  aria-label="chatbubble ellipses"
                                />{" "}
                                290
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                      <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                        <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                          <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                            <img
                              src="/assets/images/post/post-5.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                              <div className="flex items-center gap-2">
                                {" "}
                                <ion-icon
                                  className="text-2xl md hydrated"
                                  name="heart-circle"
                                  role="img"
                                  aria-label="heart circle"
                                />{" "}
                                152
                              </div>
                              <div className="flex items-center gap-2">
                                {" "}
                                <ion-icon
                                  className="text-2xl md hydrated"
                                  name="chatbubble-ellipses"
                                  role="img"
                                  aria-label="chatbubble ellipses"
                                />{" "}
                                290
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                      <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                        <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                          <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                            <img
                              src="/assets/images/post/post-4.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                              <div className="flex items-center gap-2">
                                {" "}
                                <ion-icon
                                  className="text-2xl md hydrated"
                                  name="heart-circle"
                                  role="img"
                                  aria-label="heart circle"
                                />{" "}
                                152
                              </div>
                              <div className="flex items-center gap-2">
                                {" "}
                                <ion-icon
                                  className="text-2xl md hydrated"
                                  name="chatbubble-ellipses"
                                  role="img"
                                  aria-label="chatbubble ellipses"
                                />{" "}
                                290
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                      <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                        <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                          <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                            <img
                              src="/assets/images/post/post-1.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                              <div className="flex items-center gap-2">
                                {" "}
                                <ion-icon
                                  className="text-2xl md hydrated"
                                  name="heart-circle"
                                  role="img"
                                  aria-label="heart circle"
                                />{" "}
                                152
                              </div>
                              <div className="flex items-center gap-2">
                                {" "}
                                <ion-icon
                                  className="text-2xl md hydrated"
                                  name="chatbubble-ellipses"
                                  role="img"
                                  aria-label="chatbubble ellipses"
                                />{" "}
                                290
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                      <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                        <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                          <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                            <img
                              src="/assets/images/post/post-3.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                              <div className="flex items-center gap-2">
                                {" "}
                                <ion-icon
                                  className="text-2xl md hydrated"
                                  name="heart-circle"
                                  role="img"
                                  aria-label="heart circle"
                                />{" "}
                                152
                              </div>
                              <div className="flex items-center gap-2">
                                {" "}
                                <ion-icon
                                  className="text-2xl md hydrated"
                                  name="chatbubble-ellipses"
                                  role="img"
                                  aria-label="chatbubble ellipses"
                                />{" "}
                                290
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                      <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                        <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                          <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                            <img
                              src="/assets/images/post/post-1.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                              <div className="flex items-center gap-2">
                                {" "}
                                <ion-icon
                                  className="text-2xl md hydrated"
                                  name="heart-circle"
                                  role="img"
                                  aria-label="heart circle"
                                />{" "}
                                152
                              </div>
                              <div className="flex items-center gap-2">
                                {" "}
                                <ion-icon
                                  className="text-2xl md hydrated"
                                  name="chatbubble-ellipses"
                                  role="img"
                                  aria-label="chatbubble ellipses"
                                />{" "}
                                290
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                      <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                        <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                          <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                            <img
                              src="/assets/images/post/post-3.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                              <div className="flex items-center gap-2">
                                {" "}
                                <ion-icon
                                  className="text-2xl md hydrated"
                                  name="heart-circle"
                                  role="img"
                                  aria-label="heart circle"
                                />{" "}
                                152
                              </div>
                              <div className="flex items-center gap-2">
                                {" "}
                                <ion-icon
                                  className="text-2xl md hydrated"
                                  name="chatbubble-ellipses"
                                  role="img"
                                  aria-label="chatbubble ellipses"
                                />{" "}
                                290
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                      <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                        <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                          <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                            <img
                              src="/assets/images/post/post-2.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                              <div className="flex items-center gap-2">
                                {" "}
                                <ion-icon
                                  className="text-2xl md hydrated"
                                  name="heart-circle"
                                  role="img"
                                  aria-label="heart circle"
                                />{" "}
                                152
                              </div>
                              <div className="flex items-center gap-2">
                                {" "}
                                <ion-icon
                                  className="text-2xl md hydrated"
                                  name="chatbubble-ellipses"
                                  role="img"
                                  aria-label="chatbubble ellipses"
                                />{" "}
                                290
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                      <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                        <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                          <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                            <img
                              src="/assets/images/post/post-4.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                              <div className="flex items-center gap-2">
                                {" "}
                                <ion-icon
                                  className="text-2xl md hydrated"
                                  name="heart-circle"
                                  role="img"
                                  aria-label="heart circle"
                                />{" "}
                                152
                              </div>
                              <div className="flex items-center gap-2">
                                {" "}
                                <ion-icon
                                  className="text-2xl md hydrated"
                                  name="chatbubble-ellipses"
                                  role="img"
                                  aria-label="chatbubble ellipses"
                                />{" "}
                                290
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* placeholders */}
                    <div
                      className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse uk-scrollspy-inview "
                      style={{}}
                    />
                    <div
                      className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse uk-scrollspy-inview "
                      style={{}}
                    />
                    <div
                      className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse uk-scrollspy-inview "
                      style={{}}
                    />
                    <div
                      className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse uk-scrollspy-inview "
                      style={{}}
                    />
                  </div>
                </div>
                {/* load more */}
                <div className="flex justify-center my-6">
                  <button
                    type="button"
                    className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-dark2"
                  >
                    Load more...
                  </button>
                </div>
              </div>
              {/* Reels  list */}
              <div className="pt-16">
                <div
                  className="grid gap-3 lg:gap-4 lg:grid-cols-4 md:grid-cols-5 sm:grid-cols-3 grid-cols-2"
                  uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100;repeat:true"
                >
                  {/* single reels */}
                  <div
                    className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100"
                    style={{ opacity: 0 }}
                  >
                    <a href="#">
                      <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                        <img
                          className="object-cover w-full h-full"
                          src="/assets/images/reels/reels-1.jpg"
                          alt=""
                        />
                        <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                          <div className="flex items-center gap-2.5 text-white p-3">
                            <ion-icon
                              className="text-2xl md hydrated"
                              name="play-outline"
                              role="img"
                              aria-label="play outline"
                            />{" "}
                            14
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* single reels */}
                  <div
                    className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100"
                    style={{ opacity: 0 }}
                  >
                    <a href="#">
                      <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                        <img
                          className="object-cover w-full h-full"
                          src="/assets/images/reels/reels-2.jpg"
                          alt=""
                        />
                        <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                          <div className="flex items-center gap-2.5 text-white p-3">
                            <ion-icon
                              className="text-2xl md hydrated"
                              name="play-outline"
                              role="img"
                              aria-label="play outline"
                            />{" "}
                            24
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* single reels */}
                  <div
                    className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100"
                    style={{ opacity: 0 }}
                  >
                    <a href="#">
                      <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                        <img
                          className="object-cover w-full h-full"
                          src="/assets/images/reels/reels-3.jpg"
                          alt=""
                        />
                        <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                          <div className="flex items-center gap-2.5 text-white p-3">
                            <ion-icon
                              className="text-2xl md hydrated"
                              name="play-outline"
                              role="img"
                              aria-label="play outline"
                            />{" "}
                            32
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* single reels */}
                  <div
                    className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100"
                    style={{ opacity: 0 }}
                  >
                    <a href="#">
                      <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                        <img
                          className="object-cover w-full h-full"
                          src="/assets/images/reels/reels-4.jpg"
                          alt=""
                        />
                        <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                          <div className="flex items-center gap-2.5 text-white p-3">
                            <ion-icon
                              className="text-2xl md hydrated"
                              name="play-outline"
                              role="img"
                              aria-label="play outline"
                            />{" "}
                            46
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* single reels */}
                  <div
                    className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100"
                    style={{ opacity: 0 }}
                  >
                    <a href="#">
                      <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                        <img
                          className="object-cover w-full h-full"
                          src="/assets/images/reels/reels-3.jpg"
                          alt=""
                        />
                        <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                          <div className="flex items-center gap-2.5 text-white p-3">
                            <ion-icon
                              className="text-2xl md hydrated"
                              name="play-outline"
                              role="img"
                              aria-label="play outline"
                            />
                            16
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* single reels */}
                  <div
                    className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100"
                    style={{ opacity: 0 }}
                  >
                    <a href="#">
                      <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                        <img
                          className="object-cover w-full h-full"
                          src="/assets/images/reels/reels-4.jpg"
                          alt=""
                        />
                        <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                          <div className="flex items-center gap-2.5 text-white p-3">
                            <ion-icon
                              className="text-2xl md hydrated"
                              name="play-outline"
                              role="img"
                              aria-label="play outline"
                            />{" "}
                            24
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* single reels */}
                  <div
                    className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100"
                    style={{ opacity: 0 }}
                  >
                    <a href="#">
                      <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                        <img
                          className="object-cover w-full h-full"
                          src="/assets/images/reels/reels-5.jpg"
                          alt=""
                        />
                        <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                          <div className="flex items-center gap-2.5 text-white p-3">
                            <ion-icon
                              className="text-2xl md hydrated"
                              name="play-outline"
                              role="img"
                              aria-label="play outline"
                            />{" "}
                            38
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* single reels */}
                  <div
                    className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100"
                    style={{ opacity: 0 }}
                  >
                    <a href="#">
                      <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                        <img
                          className="object-cover w-full h-full"
                          src="/assets/images/reels/reels-1.jpg"
                          alt=""
                        />
                        <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                          <div className="flex items-center gap-2.5 text-white p-3">
                            <ion-icon
                              className="text-2xl md hydrated"
                              name="play-outline"
                              role="img"
                              aria-label="play outline"
                            />{" "}
                            33
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* single reels */}
                  <div
                    className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100"
                    style={{ opacity: 0 }}
                  >
                    <a href="#">
                      <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                        <img
                          className="object-cover w-full h-full"
                          src="/assets/images/reels/reels-1.jpg"
                          alt=""
                        />
                        <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                          <div className="flex items-center gap-2.5 text-white p-3">
                            <ion-icon
                              className="text-2xl md hydrated"
                              name="play-outline"
                              role="img"
                              aria-label="play outline"
                            />{" "}
                            62
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* single reels */}
                  <div
                    className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100"
                    style={{ opacity: 0 }}
                  >
                    <a href="#">
                      <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                        <img
                          className="object-cover w-full h-full"
                          src="/assets/images/reels/reels-2.jpg"
                          alt=""
                        />
                        <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                          <div className="flex items-center gap-2.5 text-white p-3">
                            <ion-icon
                              className="text-2xl md hydrated"
                              name="play-outline"
                              role="img"
                              aria-label="play outline"
                            />{" "}
                            42
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* single reels */}
                  <div
                    className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100"
                    style={{ opacity: 0 }}
                  >
                    <a href="#">
                      <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                        <img
                          className="object-cover w-full h-full"
                          src="/assets/images/reels/reels-3.jpg"
                          alt=""
                        />
                        <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                          <div className="flex items-center gap-2.5 text-white p-3">
                            <ion-icon
                              className="text-2xl md hydrated"
                              name="play-outline"
                              role="img"
                              aria-label="play outline"
                            />{" "}
                            18
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* single reels */}
                  <div
                    className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100"
                    style={{ opacity: 0 }}
                  >
                    <a href="#">
                      <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                        <img
                          className="object-cover w-full h-full"
                          src="/assets/images/reels/reels-4.jpg"
                          alt=""
                        />
                        <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                          <div className="flex items-center gap-2.5 text-white p-3">
                            <ion-icon
                              className="text-2xl md hydrated"
                              name="play-outline"
                              role="img"
                              aria-label="play outline"
                            />{" "}
                            29
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* placeholders */}
                  <div
                    className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"
                    style={{ opacity: 0 }}
                  />
                  <div
                    className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"
                    style={{ opacity: 0 }}
                  />
                  <div
                    className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"
                    style={{ opacity: 0 }}
                  />
                  <div
                    className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"
                    style={{ opacity: 0 }}
                  />
                </div>
                {/* load more */}
                <div className="flex justify-center my-6">
                  <button
                    type="button"
                    className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-dark2"
                  >
                    Load more...
                  </button>
                </div>
              </div>
              {/* short list */}
              <div className="pt-16">
                <div
                  className="grid lg:grid-cols-3 grid-cols-2 gap-4"
                  uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100;repeat:true"
                >
                  <div
                    className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2"
                    style={{ opacity: 0 }}
                  >
                    {/* heading */}
                    <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                      <a href="profile.html" className="max-md:hidden">
                        <img
                          src="/assets/images/avatars/avatar-5.jpg"
                          alt=""
                          className="w-6 h-6 rounded-full"
                        />
                      </a>
                      <div className="flex-1">
                        <a href="profile.html">
                          <h4 className="text-black dark:text-white">
                            {" "}
                            Monroe Parker{" "}
                          </h4>
                        </a>
                      </div>
                      {/* dropdown options */}
                      <div className="absolute top-0.5 right-0 md:m-2.5 m-1">
                        <button
                          type="button"
                          className="button__ico w-8 h-8"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          <ion-icon
                            className="text-xl md hydrated"
                            name="ellipsis-horizontal"
                            role="img"
                            aria-label="ellipsis horizontal"
                          />{" "}
                        </button>
                        <div
                          className="w-[232px] uk-dropdown"
                          uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                        >
                          <nav>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="bookmark-outline"
                                role="img"
                                aria-label="bookmark outline"
                              />{" "}
                              Add favorites{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="flag-outline"
                                role="img"
                                aria-label="flag outline"
                              />{" "}
                              Report{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="share-outline"
                                role="img"
                                aria-label="share outline"
                              />{" "}
                              Share{" "}
                            </a>
                            <hr />
                            <a
                              href="#"
                              className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                            >
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="stop-circle-outline"
                                role="img"
                                aria-label="stop circle outline"
                              />{" "}
                              Remove{" "}
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* post image */}
                    <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                      <div className="relative w-full h-48">
                        <img
                          src="/assets/images/post/post-1.jpg"
                          alt=""
                          className="w-full h-full object-cover inset-0"
                        />
                      </div>
                    </a>
                    {/* post icons */}
                    <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                      <button type="button" className="button__ico">
                        {" "}
                        <ion-icon
                          className="md:text-2xl text-lg md hydrated"
                          name="heart-outline"
                          role="img"
                          aria-label="heart outline"
                        />{" "}
                      </button>
                      <button type="button" className="button__ico">
                        {" "}
                        <ion-icon
                          className="md:text-2xl text-lg md hydrated"
                          name="chatbubble-ellipses-outline"
                          role="img"
                          aria-label="chatbubble ellipses outline"
                        />{" "}
                      </button>
                      <button type="button" className="button__ico ml-auto">
                        {" "}
                        <ion-icon
                          className="md:text-2xl text-lg md hydrated"
                          name="bookmark-outline"
                          role="img"
                          aria-label="bookmark outline"
                        />{" "}
                      </button>
                    </div>
                  </div>
                  <div
                    className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2"
                    style={{ opacity: 0 }}
                  >
                    {/* heading */}
                    <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                      <a href="profile.html" className="max-md:hidden">
                        <img
                          src="/assets/images/avatars/avatar-2.jpg"
                          alt=""
                          className="w-6 h-6 rounded-full"
                        />
                      </a>
                      <div className="flex-1">
                        <a href="profile.html">
                          <h4 className="text-black dark:text-white">
                            {" "}
                            Jesse Steeve{" "}
                          </h4>
                        </a>
                      </div>
                      {/* dropdown options */}
                      <div className="absolute top-0.5 right-0 m-2.5">
                        <button
                          type="button"
                          className="button__ico w-8 h-8"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          <ion-icon
                            className="text-xl md hydrated"
                            name="ellipsis-horizontal"
                            role="img"
                            aria-label="ellipsis horizontal"
                          />{" "}
                        </button>
                        <div
                          className="w-[232px] uk-dropdown"
                          uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                        >
                          <nav>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="bookmark-outline"
                                role="img"
                                aria-label="bookmark outline"
                              />{" "}
                              Add favorites{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="flag-outline"
                                role="img"
                                aria-label="flag outline"
                              />{" "}
                              Report{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="share-outline"
                                role="img"
                                aria-label="share outline"
                              />{" "}
                              Share{" "}
                            </a>
                            <hr />
                            <a
                              href="#"
                              className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                            >
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="stop-circle-outline"
                                role="img"
                                aria-label="stop circle outline"
                              />{" "}
                              Remove{" "}
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* post image */}
                    <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                      <div className="relative w-full h-48">
                        <img
                          src="/assets/images/post/post-2.jpg"
                          alt=""
                          className="w-full h-full object-cover inset-0"
                        />
                      </div>
                    </a>
                    {/* post icons */}
                    <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                      <button type="button" className="button__ico">
                        {" "}
                        <ion-icon
                          className="md:text-2xl text-lg md hydrated"
                          name="heart-outline"
                          role="img"
                          aria-label="heart outline"
                        />{" "}
                      </button>
                      <button type="button" className="button__ico">
                        {" "}
                        <ion-icon
                          className="md:text-2xl text-lg md hydrated"
                          name="chatbubble-ellipses-outline"
                          role="img"
                          aria-label="chatbubble ellipses outline"
                        />{" "}
                      </button>
                      <button type="button" className="button__ico ml-auto">
                        {" "}
                        <ion-icon
                          className="md:text-2xl text-lg md hydrated"
                          name="bookmark-outline"
                          role="img"
                          aria-label="bookmark outline"
                        />{" "}
                      </button>
                    </div>
                  </div>
                  <div
                    className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2"
                    style={{ opacity: 0 }}
                  >
                    {/* heading */}
                    <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                      <a href="profile.html" className="max-md:hidden">
                        <img
                          src="/assets/images/avatars/avatar-3.jpg"
                          alt=""
                          className="w-6 h-6 rounded-full"
                        />
                      </a>
                      <div className="flex-1">
                        <a href="profile.html">
                          <h4 className="text-black dark:text-white">
                            {" "}
                            Martin Gray{" "}
                          </h4>
                        </a>
                      </div>
                      {/* dropdown options */}
                      <div className="absolute top-0.5 right-0 m-2.5">
                        <button
                          type="button"
                          className="button__ico w-8 h-8"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          <ion-icon
                            className="text-xl md hydrated"
                            name="ellipsis-horizontal"
                            role="img"
                            aria-label="ellipsis horizontal"
                          />{" "}
                        </button>
                        <div
                          className="w-[232px] uk-dropdown"
                          uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                        >
                          <nav>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="bookmark-outline"
                                role="img"
                                aria-label="bookmark outline"
                              />{" "}
                              Add favorites{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="flag-outline"
                                role="img"
                                aria-label="flag outline"
                              />{" "}
                              Report{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="share-outline"
                                role="img"
                                aria-label="share outline"
                              />{" "}
                              Share{" "}
                            </a>
                            <hr />
                            <a
                              href="#"
                              className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                            >
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="stop-circle-outline"
                                role="img"
                                aria-label="stop circle outline"
                              />{" "}
                              Remove{" "}
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* post image */}
                    <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                      <div className="relative w-full h-48">
                        <img
                          src="/assets/images/post/post-3.jpg"
                          alt=""
                          className="w-full h-full object-cover inset-0"
                        />
                      </div>
                    </a>
                    {/* post icons */}
                    <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                      <button type="button" className="button__ico">
                        {" "}
                        <ion-icon
                          className="md:text-2xl text-lg md hydrated"
                          name="heart-outline"
                          role="img"
                          aria-label="heart outline"
                        />{" "}
                      </button>
                      <button type="button" className="button__ico">
                        {" "}
                        <ion-icon
                          className="md:text-2xl text-lg md hydrated"
                          name="chatbubble-ellipses-outline"
                          role="img"
                          aria-label="chatbubble ellipses outline"
                        />{" "}
                      </button>
                      <button type="button" className="button__ico ml-auto">
                        {" "}
                        <ion-icon
                          className="md:text-2xl text-lg md hydrated"
                          name="bookmark-outline"
                          role="img"
                          aria-label="bookmark outline"
                        />{" "}
                      </button>
                    </div>
                  </div>
                  <div
                    className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2"
                    style={{ opacity: 0 }}
                  >
                    {/* heading */}
                    <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                      <a href="profile.html" className="max-md:hidden">
                        <img
                          src="/assets/images/avatars/avatar-4.jpg"
                          alt=""
                          className="w-6 h-6 rounded-full"
                        />
                      </a>
                      <div className="flex-1">
                        <a href="profile.html">
                          <h4 className="text-black dark:text-white">
                            {" "}
                            John Michael{" "}
                          </h4>
                        </a>
                      </div>
                      {/* dropdown options */}
                      <div className="absolute top-0.5 right-0 m-2.5">
                        <button
                          type="button"
                          className="button__ico w-8 h-8"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          <ion-icon
                            className="text-xl md hydrated"
                            name="ellipsis-horizontal"
                            role="img"
                            aria-label="ellipsis horizontal"
                          />{" "}
                        </button>
                        <div
                          className="w-[232px] uk-dropdown"
                          uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                        >
                          <nav>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="bookmark-outline"
                                role="img"
                                aria-label="bookmark outline"
                              />{" "}
                              Add favorites{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="flag-outline"
                                role="img"
                                aria-label="flag outline"
                              />{" "}
                              Report{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="share-outline"
                                role="img"
                                aria-label="share outline"
                              />{" "}
                              Share{" "}
                            </a>
                            <hr />
                            <a
                              href="#"
                              className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                            >
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="stop-circle-outline"
                                role="img"
                                aria-label="stop circle outline"
                              />{" "}
                              Remove{" "}
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* post image */}
                    <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                      <div className="relative w-full h-48">
                        <img
                          src="/assets/images/post/post-4.jpg"
                          alt=""
                          className="w-full h-full object-cover inset-0"
                        />
                      </div>
                    </a>
                    {/* post icons */}
                    <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                      <button type="button" className="button__ico">
                        {" "}
                        <ion-icon
                          className="md:text-2xl text-lg md hydrated"
                          name="heart-outline"
                          role="img"
                          aria-label="heart outline"
                        />{" "}
                      </button>
                      <button type="button" className="button__ico">
                        {" "}
                        <ion-icon
                          className="md:text-2xl text-lg md hydrated"
                          name="chatbubble-ellipses-outline"
                          role="img"
                          aria-label="chatbubble ellipses outline"
                        />{" "}
                      </button>
                      <button type="button" className="button__ico ml-auto">
                        {" "}
                        <ion-icon
                          className="md:text-2xl text-lg md hydrated"
                          name="bookmark-outline"
                          role="img"
                          aria-label="bookmark outline"
                        />{" "}
                      </button>
                    </div>
                  </div>
                  <div
                    className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2"
                    style={{ opacity: 0 }}
                  >
                    {/* heading */}
                    <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                      <a href="profile.html" className="max-md:hidden">
                        <img
                          src="/assets/images/avatars/avatar-7.jpg"
                          alt=""
                          className="w-6 h-6 rounded-full"
                        />
                      </a>
                      <div className="flex-1">
                        <a href="profile.html">
                          <h4 className="text-black dark:text-white">
                            {" "}
                            Alexa stella{" "}
                          </h4>
                        </a>
                      </div>
                      {/* dropdown options */}
                      <div className="absolute top-0.5 right-0 m-2.5">
                        <button
                          type="button"
                          className="button__ico w-8 h-8"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          <ion-icon
                            className="text-xl md hydrated"
                            name="ellipsis-horizontal"
                            role="img"
                            aria-label="ellipsis horizontal"
                          />{" "}
                        </button>
                        <div
                          className="w-[232px] uk-dropdown"
                          uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                        >
                          <nav>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="bookmark-outline"
                                role="img"
                                aria-label="bookmark outline"
                              />{" "}
                              Add favorites{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="flag-outline"
                                role="img"
                                aria-label="flag outline"
                              />{" "}
                              Report{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="share-outline"
                                role="img"
                                aria-label="share outline"
                              />{" "}
                              Share{" "}
                            </a>
                            <hr />
                            <a
                              href="#"
                              className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                            >
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="stop-circle-outline"
                                role="img"
                                aria-label="stop circle outline"
                              />{" "}
                              Remove{" "}
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* post image */}
                    <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                      <div className="relative w-full h-48">
                        <img
                          src="/assets/images/post/post-5.jpg"
                          alt=""
                          className="w-full h-full object-cover inset-0"
                        />
                      </div>
                    </a>
                    {/* post icons */}
                    <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                      <button type="button" className="button__ico">
                        {" "}
                        <ion-icon
                          className="md:text-2xl text-lg md hydrated"
                          name="heart-outline"
                          role="img"
                          aria-label="heart outline"
                        />{" "}
                      </button>
                      <button type="button" className="button__ico">
                        {" "}
                        <ion-icon
                          className="md:text-2xl text-lg md hydrated"
                          name="chatbubble-ellipses-outline"
                          role="img"
                          aria-label="chatbubble ellipses outline"
                        />{" "}
                      </button>
                      <button type="button" className="button__ico ml-auto">
                        {" "}
                        <ion-icon
                          className="md:text-2xl text-lg md hydrated"
                          name="bookmark-outline"
                          role="img"
                          aria-label="bookmark outline"
                        />{" "}
                      </button>
                    </div>
                  </div>
                  <div
                    className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2"
                    style={{ opacity: 0 }}
                  >
                    {/* heading */}
                    <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                      <a href="profile.html" className="max-md:hidden">
                        <img
                          src="/assets/images/avatars/avatar-5.jpg"
                          alt=""
                          className="w-6 h-6 rounded-full"
                        />
                      </a>
                      <div className="flex-1">
                        <a href="profile.html">
                          <h4 className="text-black dark:text-white">
                            {" "}
                            Monroe Parker{" "}
                          </h4>
                        </a>
                      </div>
                      {/* dropdown options */}
                      <div className="absolute top-0.5 right-0 m-2.5">
                        <button
                          type="button"
                          className="button__ico w-8 h-8"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          <ion-icon
                            className="text-xl md hydrated"
                            name="ellipsis-horizontal"
                            role="img"
                            aria-label="ellipsis horizontal"
                          />{" "}
                        </button>
                        <div
                          className="w-[232px] uk-dropdown"
                          uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                        >
                          <nav>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="bookmark-outline"
                                role="img"
                                aria-label="bookmark outline"
                              />{" "}
                              Add favorites{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="flag-outline"
                                role="img"
                                aria-label="flag outline"
                              />{" "}
                              Report{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="share-outline"
                                role="img"
                                aria-label="share outline"
                              />{" "}
                              Share{" "}
                            </a>
                            <hr />
                            <a
                              href="#"
                              className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                            >
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="stop-circle-outline"
                                role="img"
                                aria-label="stop circle outline"
                              />{" "}
                              Remove{" "}
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* post image */}
                    <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                      <div className="relative w-full h-48">
                        <img
                          src="/assets/images/post/post-1.jpg"
                          alt=""
                          className="w-full h-full object-cover inset-0"
                        />
                      </div>
                    </a>
                    {/* post icons */}
                    <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                      <button type="button" className="button__ico">
                        {" "}
                        <ion-icon
                          className="md:text-2xl text-lg md hydrated"
                          name="heart-outline"
                          role="img"
                          aria-label="heart outline"
                        />{" "}
                      </button>
                      <button type="button" className="button__ico">
                        {" "}
                        <ion-icon
                          className="md:text-2xl text-lg md hydrated"
                          name="chatbubble-ellipses-outline"
                          role="img"
                          aria-label="chatbubble ellipses outline"
                        />{" "}
                      </button>
                      <button type="button" className="button__ico ml-auto">
                        {" "}
                        <ion-icon
                          className="md:text-2xl text-lg md hydrated"
                          name="bookmark-outline"
                          role="img"
                          aria-label="bookmark outline"
                        />{" "}
                      </button>
                    </div>
                  </div>
                  <div
                    className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2"
                    style={{ opacity: 0 }}
                  >
                    {/* heading */}
                    <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                      <a href="profile.html" className="max-md:hidden">
                        <img
                          src="/assets/images/avatars/avatar-2.jpg"
                          alt=""
                          className="w-6 h-6 rounded-full"
                        />
                      </a>
                      <div className="flex-1">
                        <a href="profile.html">
                          <h4 className="text-black dark:text-white">
                            {" "}
                            Jesse Steeve{" "}
                          </h4>
                        </a>
                      </div>
                      {/* dropdown options */}
                      <div className="absolute top-0.5 right-0 m-2.5">
                        <button
                          type="button"
                          className="button__ico w-8 h-8"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          <ion-icon
                            className="text-xl md hydrated"
                            name="ellipsis-horizontal"
                            role="img"
                            aria-label="ellipsis horizontal"
                          />{" "}
                        </button>
                        <div
                          className="w-[232px] uk-dropdown"
                          uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                        >
                          <nav>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="bookmark-outline"
                                role="img"
                                aria-label="bookmark outline"
                              />{" "}
                              Add favorites{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="flag-outline"
                                role="img"
                                aria-label="flag outline"
                              />{" "}
                              Report{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="share-outline"
                                role="img"
                                aria-label="share outline"
                              />{" "}
                              Share{" "}
                            </a>
                            <hr />
                            <a
                              href="#"
                              className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                            >
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="stop-circle-outline"
                                role="img"
                                aria-label="stop circle outline"
                              />{" "}
                              Remove{" "}
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* post image */}
                    <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                      <div className="relative w-full h-48">
                        <img
                          src="/assets/images/post/post-2.jpg"
                          alt=""
                          className="w-full h-full object-cover inset-0"
                        />
                      </div>
                    </a>
                    {/* post icons */}
                    <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                      <button type="button" className="button__ico">
                        {" "}
                        <ion-icon
                          className="md:text-2xl text-lg md hydrated"
                          name="heart-outline"
                          role="img"
                          aria-label="heart outline"
                        />{" "}
                      </button>
                      <button type="button" className="button__ico">
                        {" "}
                        <ion-icon
                          className="md:text-2xl text-lg md hydrated"
                          name="chatbubble-ellipses-outline"
                          role="img"
                          aria-label="chatbubble ellipses outline"
                        />{" "}
                      </button>
                      <button type="button" className="button__ico ml-auto">
                        {" "}
                        <ion-icon
                          className="md:text-2xl text-lg md hydrated"
                          name="bookmark-outline"
                          role="img"
                          aria-label="bookmark outline"
                        />{" "}
                      </button>
                    </div>
                  </div>
                  <div
                    className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2"
                    style={{ opacity: 0 }}
                  >
                    {/* heading */}
                    <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                      <a href="profile.html" className="max-md:hidden">
                        <img
                          src="/assets/images/avatars/avatar-3.jpg"
                          alt=""
                          className="w-6 h-6 rounded-full"
                        />
                      </a>
                      <div className="flex-1">
                        <a href="profile.html">
                          <h4 className="text-black dark:text-white">
                            {" "}
                            Martin Gray{" "}
                          </h4>
                        </a>
                      </div>
                      {/* dropdown options */}
                      <div className="absolute top-0.5 right-0 m-2.5">
                        <button
                          type="button"
                          className="button__ico w-8 h-8"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          <ion-icon
                            className="text-xl md hydrated"
                            name="ellipsis-horizontal"
                            role="img"
                            aria-label="ellipsis horizontal"
                          />{" "}
                        </button>
                        <div
                          className="w-[232px] uk-dropdown"
                          uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                        >
                          <nav>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="bookmark-outline"
                                role="img"
                                aria-label="bookmark outline"
                              />{" "}
                              Add favorites{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="flag-outline"
                                role="img"
                                aria-label="flag outline"
                              />{" "}
                              Report{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="share-outline"
                                role="img"
                                aria-label="share outline"
                              />{" "}
                              Share{" "}
                            </a>
                            <hr />
                            <a
                              href="#"
                              className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                            >
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="stop-circle-outline"
                                role="img"
                                aria-label="stop circle outline"
                              />{" "}
                              Remove{" "}
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* post image */}
                    <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                      <div className="relative w-full h-48">
                        <img
                          src="/assets/images/post/post-3.jpg"
                          alt=""
                          className="w-full h-full object-cover inset-0"
                        />
                      </div>
                    </a>
                    {/* post icons */}
                    <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                      <button type="button" className="button__ico">
                        {" "}
                        <ion-icon
                          className="md:text-2xl text-lg md hydrated"
                          name="heart-outline"
                          role="img"
                          aria-label="heart outline"
                        />{" "}
                      </button>
                      <button type="button" className="button__ico">
                        {" "}
                        <ion-icon
                          className="md:text-2xl text-lg md hydrated"
                          name="chatbubble-ellipses-outline"
                          role="img"
                          aria-label="chatbubble ellipses outline"
                        />{" "}
                      </button>
                      <button type="button" className="button__ico ml-auto">
                        {" "}
                        <ion-icon
                          className="md:text-2xl text-lg md hydrated"
                          name="bookmark-outline"
                          role="img"
                          aria-label="bookmark outline"
                        />{" "}
                      </button>
                    </div>
                  </div>
                  <div
                    className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2"
                    style={{ opacity: 0 }}
                  >
                    {/* heading */}
                    <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                      <a href="profile.html" className="max-md:hidden">
                        <img
                          src="/assets/images/avatars/avatar-4.jpg"
                          alt=""
                          className="w-6 h-6 rounded-full"
                        />
                      </a>
                      <div className="flex-1">
                        <a href="profile.html">
                          <h4 className="text-black dark:text-white">
                            {" "}
                            John Michael{" "}
                          </h4>
                        </a>
                      </div>
                      {/* dropdown options */}
                      <div className="absolute top-0.5 right-0 m-2.5">
                        <button
                          type="button"
                          className="button__ico w-8 h-8"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          <ion-icon
                            className="text-xl md hydrated"
                            name="ellipsis-horizontal"
                            role="img"
                            aria-label="ellipsis horizontal"
                          />{" "}
                        </button>
                        <div
                          className="w-[232px] uk-dropdown"
                          uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                        >
                          <nav>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="bookmark-outline"
                                role="img"
                                aria-label="bookmark outline"
                              />{" "}
                              Add favorites{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="flag-outline"
                                role="img"
                                aria-label="flag outline"
                              />{" "}
                              Report{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="share-outline"
                                role="img"
                                aria-label="share outline"
                              />{" "}
                              Share{" "}
                            </a>
                            <hr />
                            <a
                              href="#"
                              className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                            >
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 md hydrated"
                                name="stop-circle-outline"
                                role="img"
                                aria-label="stop circle outline"
                              />{" "}
                              Remove{" "}
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* post image */}
                    <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                      <div className="relative w-full h-48">
                        <img
                          src="/assets/images/post/post-4.jpg"
                          alt=""
                          className="w-full h-full object-cover inset-0"
                        />
                      </div>
                    </a>
                    {/* post icons */}
                    <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                      <button type="button" className="button__ico">
                        {" "}
                        <ion-icon
                          className="md:text-2xl text-lg md hydrated"
                          name="heart-outline"
                          role="img"
                          aria-label="heart outline"
                        />{" "}
                      </button>
                      <button type="button" className="button__ico">
                        {" "}
                        <ion-icon
                          className="md:text-2xl text-lg md hydrated"
                          name="chatbubble-ellipses-outline"
                          role="img"
                          aria-label="chatbubble ellipses outline"
                        />{" "}
                      </button>
                      <button type="button" className="button__ico ml-auto">
                        {" "}
                        <ion-icon
                          className="md:text-2xl text-lg md hydrated"
                          name="bookmark-outline"
                          role="img"
                          aria-label="bookmark outline"
                        />{" "}
                      </button>
                    </div>
                  </div>
                  {/* placeholders */}
                  <div
                    className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"
                    style={{ opacity: 0 }}
                  />
                  <div
                    className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"
                    style={{ opacity: 0 }}
                  />
                  <div
                    className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"
                    style={{ opacity: 0 }}
                  />
                </div>
                {/* load more */}
                <div className="flex justify-center my-6">
                  <button
                    type="button"
                    className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-dark2"
                  >
                    Load more...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
