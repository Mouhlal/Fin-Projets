import React from 'react'
import Footer from './Footer';
import { Nav } from './Nav';
import four  from '../images/fournitures-scolaires.jpg'
import { Link } from 'react-router-dom';

export default function Layout({users}) {
  return (

    <div classNameName=''>
       <div className=" ">
        <Nav  />
        
        </div>
<div className="max-w-[85rem] m-16 mx-auto px-4 sm:px-6 lg:px-8 ">
  <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center ">
    <div className=' mt-10'>
      <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Start your journey with <span className="text-blue-600">SchoolGear Express</span></h1>
      <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">Chez SchoolGear Express, nous sommes déterminés à fournir à chaque étudiant les outils nécessaires pour exceller dans sa vie académique. Notre boutique en ligne propose une vaste sélection de fournitures scolaires de haute qualité, soigneusement sélectionnées pour répondre aux besoins de tous les niveaux d'éducation..</p>
      <div className="mt-7 grid gap-3 w-full sm:inline-flex">
        <a className="py-3 px-4 inline-flex justify-center w-96 items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
          Get started
          <svg className="flex-shrink-0 size-4 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </a>

      </div>


    </div>
    <div className="relative ms-4  mt-9">
      <img className="w-full rounded-md" src={four} alt="Image Description"/>
      {/* <div className="absolute inset-0  m -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-1 lg:mb-  lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>

      <div className="absolute bottom-2 start-0">
        <svg className="w-2/3 ms-auto  h-auto text-white dark:text-neutral-900"  width="630" height="451" viewBox="0 0 630 451" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="531" y="352" width="99" height="99" fill="currentColor"/>
          <rect x="140" y="352" width="106" height="99" fill="currentColor"/>
          <rect x="482" y="402" width="64" height="49" fill="currentColor"/>
          <rect x="433" y="402" width="63" height="49" fill="currentColor"/>
          <rect x="384" y="352" width="49" height="50" fill="currentColor"/>
          <rect x="531" y="328" width="50" height="50" fill="currentColor"/>
          <rect x="99" y="303" width="49" height="58" fill="currentColor"/>
          <rect x="99" y="352" width="49" height="50" fill="currentColor"/>
          <rect x="99" y="392" width="49" height="59" fill="currentColor"/>
          <rect x="44" y="402" width="66" height="49" fill="currentColor"/>
          <rect x="234" y="402" width="62" height="49" fill="currentColor"/>
          <rect x="334" y="303" width="50" height="49" fill="currentColor"/>
          <rect x="581" width="49" height="49" fill="currentColor"/>
          <rect x="581" width="49" height="64" fill="currentColor"/>
          <rect x="482" y="123" width="49" height="49" fill="currentColor"/>
          <rect x="507" y="124" width="49" height="24" fill="currentColor"/>
          <rect x="531" y="49" width="99" height="99" fill="currentColor"/>
        </svg>
      </div> */}
    </div>
  </div>
</div>


<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="max-w-2xl text-center mx-auto mb-10  lg:mb-14">
    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight text-blue-600 ">Read our latest news</h2>
    <p class="mt-1 text-gray-600 dark:text-neutral-400">We've helped some great companies brand, design and get to market.</p>
  </div>

  <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10  lg:mb-14">
    <Link class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" to="">
      <div class="aspect-w-16 aspect-h-9">
        <img class="w-full object-cover rounded-t-xl" src={four} alt="Image Description"/>
      </div>
      <div class="p-4 md:p-5">
        <p class="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
          Product
        </p>
        <h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
          Better is when everything works together
        </h3>
      </div>
    </Link>

    <Link class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" to="#">
      <div class="aspect-w-16 aspect-h-9">
        <img class="w-full object-cover rounded-t-xl" src={four} alt="Image Description"/>
      </div>
      <div class="p-4 md:p-5">
        <p class="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
          Business
        </p>
        <h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
          What CFR really is about
        </h3>
      </div>
    </Link>

    <Link class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" to={""}>
      <div class="aspect-w-16 aspect-h-9">
        <img class="w-full object-cover rounded-t-xl" src={four} alt="Image Description"/>
      </div>
      <div class="p-4 md:p-5">
        <p class="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
          Business
        </p>
        <h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
          Should Product Owners think like entrepreneurs?
        </h3>
      </div>
    </Link>

    <Link class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" to="">
      <div class="aspect-w-16 aspect-h-9">
        <img class="w-full object-cover rounded-t-xl" src={four} alt="Image Description"/>
      </div>
      <div class="p-4 md:p-5">
        <p class="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
          Facilitate
        </p>
        <h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
          Announcing Front Strategies: Ready-to-use rules
        </h3>
      </div>
    </Link>
  </div>

  
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
    <div class="text-center">
      <div class="flex justify-center items-center size-12 bg-gray-50 border border-gray-400 rounded-full mx-auto dark:bg-neutral-800 dark:border-neutral-700  w-12  h-11">
        <svg class="flex-shrink-0 size-5 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="10" height="14" x="3" y="8" rx="2"/><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"/><path d="M8 18h.01"/></svg>
      </div>
      <div class="mt-3">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Responsive</h3>
        <p class="mt-1 text-gray-600 dark:text-neutral-400">Responsive, and mobile-first project on the web</p>
      </div>
    </div>

    <div class="text-center">
      <div class="flex justify-center items-center size-12 bg-gray-50 border border-gray-400 rounded-full mx-auto dark:bg-neutral-800 dark:border-neutral-700 w-12  h-11">
        <svg class="flex-shrink-0 size-5 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>
      </div>
      <div class="mt-3">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Customizable</h3>
        <p class="mt-1 text-gray-600 dark:text-neutral-400">Components are easily customized and extendable</p>
      </div>
    </div>

    <div class="text-center">
      <div class="flex justify-center items-center size-12 bg-gray-50 border border-gray-400 rounded-full mx-auto dark:bg-neutral-800 dark:border-neutral-700 w-12  h-11">
        <svg class="flex-shrink-0 size-5 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
      </div>
      <div class="mt-3">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Documentation</h3>
        <p class="mt-1 text-gray-600 dark:text-neutral-400">Every component and plugin is well documented</p>
      </div>
    </div>

    <div class="text-center">
      <div class="flex justify-center items-center size-12 bg-gray-50 border border-gray-400 rounded-full mx-auto dark:bg-neutral-800 dark:border-neutral-700 w-12  h-11">
        <svg class="flex-shrink-0 size-5 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
      </div>
      <div class="mt-3">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">24/7 Support</h3>
        <p class="mt-1 text-gray-600 dark:text-neutral-400">Contact us 24 hours a day, 7 days a week</p>
      </div>
    </div>
  </div>
</div>



<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight text-blue-600">The Blog</h2>
    <p class="mt-1 text-gray-600 dark:text-neutral-400">See how game-changing companies are making the most of every engagement </p>
  </div>

  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40" href="#">
      <div class="aspect-w-16 aspect-h-11">

        <img class="  w-screen  h-80 object-cover rounded-xl" src={four} alt="Image Description"/>
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
          Announcing a free plan for small teams
        </h3>
        <p class="mt-5 text-gray-600 dark:text-neutral-400">
          At Wake, our mission has always been focused on bringing openness.
        </p>
      </div>
      <div class=" w-48    ml-36 flex items-center gap-x-3 ">
        <img class="size-8 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
        <div>
          <h5 class="text-sm text-gray-800 dark:text-neutral-200">By Lauren Waller</h5>
        </div>
      </div>
    </a>
    <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-screen h-80 object-cover rounded-xl" src={four} alt="Image Description"/>
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
          How Google Assistant now helps you record 
        </h3>
        <p class="mt-5 text-gray-600 dark:text-neutral-400">
          Google is constantly updating its consumer AI, Google Assistant
        </p>
      </div>
      <div class="w-48    ml-36 flex items-center gap-x-3">
        <img class="size-8 rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
        <div>
          <h5 class="text-sm text-gray-800 dark:text-neutral-200">By Aaron Larsson</h5>
        </div>
      </div>
    </a>

    <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-screen h-80 object-cover rounded-xl" src={four} alt="Image Description"/>
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
          Front accounts - let's work together
        </h3>
        <p class="mt-5 text-gray-600 dark:text-neutral-400">
          Are you an accountant? Are you a company formation advisor?
        </p>
      </div>
      <div class="  w-48    ml-36 flex items-center gap-x-3">
        <img class="size-8 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
        <div>
          <h5 class="text-sm text-gray-800 dark:text-neutral-200">By Lauren Waller</h5>
        </div>
      </div>
    </a>
  </div>
  
  <div class="text-center   pt-16 ">
    <div class="inline-block bg-white border shadow-sm rounded-full dark:bg-neutral-900 dark:border-neutral-800">
      <div class="py-3 px-4 flex items-center gap-x-2">
        <p class="text-gray-600 dark:text-neutral-400">
          Want to read more?
        </p>
        <a class="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="../docs/index.html">
          Go here
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </a>
      </div>
    </div>
  </div>
</div>

</div>
       <Footer/>
    </div>
  )
}