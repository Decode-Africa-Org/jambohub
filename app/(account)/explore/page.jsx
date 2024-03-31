import React from "react";

const Explore = () => {
  return (
    <>
      <main className="2xl:ml-[--w-side] xl:ml-[--w-side-md] md:ml-[--w-side-small]">
        {/* explore */}
        <div className="main__inner">
          {/* search box */}
          <div
            className="z-10 p-5 max-lg:!top-10 lg:rounded-bl-2xl lg:rounded-br-2xl shadow-md bg-slate-100/60 backdrop-blur-3xl dark:bg-slate-800/60 uk-sticky invisible h-0"
            uk-sticky="cls-inactive: invisible h-0; start: 200; animation: uk-animation-slide-top"
            style={{}}
          >
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 absolute left-3 bottom-1/2 translate-y-1/2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="!bg-white/20 w-full !pl-10 !py-2 border !border-gray-300 dark:!border-slate-500"
              />
            </div>
          </div>
          <div
            className="uk-sticky-placeholder"
            style={{ height: 40, width: 895, margin: 0 }}
            hidden=""
          />
          <div
            className="gallery -mt-16"
            uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100"
          >
            <div className="gallery__card uk-scrollspy-inview " style={{}}>
              <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                <div className="card__image">
                  <img src="assets/images/post/post-1.jpg" alt="" />
                </div>
              </a>
            </div>
            <div className="gallery__card uk-scrollspy-inview " style={{}}>
              <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                <div className="card__image">
                  <img src="assets/images/post/post-2.jpg" alt="" />
                </div>
              </a>
            </div>
            <div className="gallery__card uk-scrollspy-inview " style={{}}>
              <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                <div className="card__image">
                  <img src="assets/images/post/post-3.jpg" alt="" />
                </div>
              </a>
            </div>
            <div className="gallery__card uk-scrollspy-inview " style={{}}>
              <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                <div className="card__image">
                  <img src="assets/images/post/post-4.jpg" alt="" />
                </div>
              </a>
            </div>
            <div className="gallery__card uk-scrollspy-inview " style={{}}>
              <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                <div className="card__image">
                  <img src="assets/images/post/post-5.jpg" alt="" />
                </div>
              </a>
            </div>
            <div className="gallery__card uk-scrollspy-inview " style={{}}>
              <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                <div className="card__image">
                  <img src="assets/images/post/post-3.jpg" alt="" />
                </div>
              </a>
            </div>
            <div className="gallery__card uk-scrollspy-inview " style={{}}>
              <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                <div className="card__image">
                  <img src="assets/images/post/post-5.jpg" alt="" />
                </div>
              </a>
            </div>
            <div className="gallery__card uk-scrollspy-inview " style={{}}>
              <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                <div className="card__image">
                  <img src="assets/images/post/post-4.jpg" alt="" />
                </div>
              </a>
            </div>
            <div className="gallery__card uk-scrollspy-inview " style={{}}>
              <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                <div className="card__image">
                  <img src="assets/images/post/post-2.jpg" alt="" />
                </div>
              </a>
            </div>
            <div className="gallery__card uk-scrollspy-inview " style={{}}>
              <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                <div className="card__image">
                  <img src="assets/images/post/post-1.jpg" alt="" />
                </div>
              </a>
            </div>
            <div className="gallery__card uk-scrollspy-inview " style={{}}>
              <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                <div className="card__image">
                  <img src="assets/images/post/post-1.jpg" alt="" />
                </div>
              </a>
            </div>
            <div className="gallery__card uk-scrollspy-inview " style={{}}>
              <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                <div className="card__image">
                  <img src="assets/images/post/post-5.jpg" alt="" />
                </div>
              </a>
            </div>
            <div className="gallery__card uk-scrollspy-inview " style={{}}>
              <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                <div className="card__image">
                  <img src="assets/images/post/post-3.jpg" alt="" />
                </div>
              </a>
            </div>
            <div className="gallery__card uk-scrollspy-inview " style={{}}>
              <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                <div className="card__image">
                  <img src="assets/images/post/post-4.jpg" alt="" />
                </div>
              </a>
            </div>
            <div className="gallery__card uk-scrollspy-inview " style={{}}>
              <a href="#preview_modal" uk-toggle="" aria-expanded="false">
                <div className="card__image">
                  <img src="assets/images/post/post-2.jpg" alt="" />
                </div>
              </a>
            </div>
            <div
              className="w-full h-60 bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse uk-scrollspy-inview "
              style={{}}
            />
            <div
              className="w-full h-60 bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse uk-scrollspy-inview "
              style={{}}
            />
            <div
              className="w-full h-60 bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse uk-scrollspy-inview "
              style={{}}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Explore;
