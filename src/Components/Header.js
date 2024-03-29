import React from 'react'

export default function () {
  return (
<header className='fixed top-0 left-0 right-0 z-20'>
  <nav
    class="flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-blue-400 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start "
    data-te-navbar-ref>
    <div class=" flex w-full flex-wrap items-center justify-between px-6">
      <div class="flex items-center">
        <button
          class="mr-2 border-0 bg-transparent py-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContentY"
          aria-controls="navbarSupportedContentY"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="[&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </span>
        </button>
      </div>
      <div
        class="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
        id="navbarSupportedContentY"
        data-te-collapse-item>
        <ul
          class="mr-auto flex flex-col lg:flex-row"
          data-te-navbar-nav-ref>
          <li data-te-nav-item-ref>
            <a
              class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
              href="#home"
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light"
              >Home</a
            >
          </li>
          <li data-te-nav-item-ref>
            <a
              class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
              href="#about"
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light"
              >About</a
            >
          </li>
          <li data-te-nav-item-ref>
            <a
              class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
              href="#myProjects"
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light"
              >Projects</a
            >
          </li>
          <li data-te-nav-item-ref>
            <a
              class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
              href="#contact"
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light"
              >Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</header>
  )
}
