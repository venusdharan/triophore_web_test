<template>
  <div>

<header class="text-gray-700 body-font pl-4   pb-0 bg-white shadow-lg md:pb-1 fixed w-full z-50">
  <div class=" mx-auto flex pt-5 pb-5 flex-row md:flex-row items-center  justify-between">
    <n-link  class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
      
      <img src="~/assets/logo-dark.png"></img>
    </n-link>
    <nav class=" flex  items-end text-base justify-end">
      <a class="mr-5 hover:text-gray-900" v-on:click="toggleModal()" type="button">
<svg  v-if="showModal" class="w-10 h-10 text-gray-900e p-2  rounded-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>
<svg  v-else  class="w-10 h-10 text-gray-900e p-2  rounded-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
</svg>
</a>
    </nav>
  </div>
</header>

		<transition name="fade">
		 <div v-if="showModal" class="overflow-x-hidden overflow-y-hidden fixed mt-20  z-50 outline-none focus:outline-none justify-center items-center flex" >
      <div class="relative w-auto  mx-auto">

        <div class=" shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none" style="width:100vw; height:100vh;">
          <div class="relative p-6 flex-auto overflow-auto">
            <div class="">
      <div class="md:px-4 md:pt-10 md:pb-5">
        <div class="flex flex-wrap md:max-w-screen-lg mx-auto">
          <section
            class="relative text-gray-700  border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
          >
            <div class="md:hidden">
              <button
                v-on:click="toggleFooterSection"
                class="uppercase text-xs font-bold tracking-wider text-indigo-500 focus:outline-none border-t border-white py-4 w-full text-left"
                type="button"
              >
                PRODUCTS
              </button>
            </div>
            <a
              class="uppercase text-xs font-bold tracking-wider text-indigo-500 hidden md:block"
              href="#"
            >
              PRODUCTS
            </a>
            <article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
              <ul class="my-5 text-sm tracking-wide">
                <li class="my-3 tracking-wide">
                  <a href="#">Fusce vel sem</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Ut venenatis tellus</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Vestibulum</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Nunc at ipsum</a>
                </li>
              </ul>
            </article>
          </section>
          <section
            class="relative text-gray-700  border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
          >
            <div class="md:hidden">
              <button
                v-on:click="toggleFooterSection"
                class="uppercase text-xs font-bold tracking-wider text-indigo-500 focus:outline-none border-t border-white py-4 w-full text-left"
                type="button"
              >
                SERVICES
              </button>
            </div>
            <a
              class="uppercase text-xs font-bold tracking-wider text-indigo-500 hidden md:block"
              href="#"
            >
              SERVICES
            </a>
            <article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
              <ul class="my-5 text-sm tracking-wide">
                <li class="my-3 tracking-wide">
                  <a href="#">Pellentesque rhoncus</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Aenean</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Curabitur bibendum</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Phasellus non mi</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Duis accumsa</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Curabitur nec enim</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Fusce ut augue</a>
                </li>
              </ul>
            </article>
          </section>
          <section
            class="relative text-gray-700  border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
          >
            <div class="md:hidden">
              <button
                v-on:click="toggleFooterSection"
                class="uppercase text-xs font-bold tracking-wider text-indigo-500 focus:outline-none border-t border-white py-4 w-full text-left"
                type="button"
              >
                INFO
              </button>
            </div>
            <a
              class="uppercase text-xs font-bold tracking-wider text-indigo-500 hidden md:block"
              href="#"
            >
              INFO
            </a>
            <article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
              <ul class="my-5 text-sm tracking-wide">
                <li class="my-3 tracking-wide">
                  <n-link to="/contact/" >Contact Us</n-link>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Nunc viverra risus</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Etiam a libero</a>
                </li>
              </ul>
            </article>
          </section>
          <section
            class="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
          >
            <div class="md:hidden">
              <button
                v-on:click="toggleFooterSection"
                class="uppercase text-xs font-bold tracking-wider text-indigo-500 focus:outline-none border-t border-white py-4 w-full text-left"
                type="button"
              >
                INDUSTRIES
              </button>
            </div>
            <a
              class="uppercase text-xs font-bold tracking-wider text-indigo-500 hidden md:block"
              href="#"
            >
              INDUSTRIES
            </a>
            <article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
              <ul class="my-5 text-sm tracking-wide">
                <li class="my-3 tracking-wide">
                  <a href="#">Cras id ipsum</a>
                </li>
              </ul>
            </article>
          </section>
          <!--section
            class="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
          >
            <div class="md:hidden">
              <button
                v-on:click="toggleFooterSection"
                class="uppercase text-xs font-bold tracking-wider text-indigo-500 focus:outline-none border-t border-white py-4 w-full text-left"
                type="button"
              >
                Donec a lorem
              </button>
            </div>
            <a
              class="uppercase text-xs font-bold tracking-wider text-indigo-500 hidden md:block"
              href="#"
            >
              Donec a lorem
            </a>
            <article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
              <ul class="my-5 text-sm tracking-wide">
                <li class="my-3 tracking-wide">
                  <a href="#">Sed a diam</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Nullam luctus felis</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Sed euismod</a>
                </li>
              </ul>
            </article>
          </!--section-->
          <!--section
            class="relative text-gray-700  border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
          >
            <div class="md:hidden">
              <button
                v-on:click="toggleFooterSection"
                class="uppercase text-xs font-bold tracking-wider text-indigo-500 focus:outline-none border-t border-white py-4 w-full text-left"
                type="button"
              >
                Integer interdum
              </button>
            </div>
            <a
              class="uppercase text-xs font-bold tracking-wider text-indigo-500 hidden md:block"
              href="#"
            >
              Integer interdum
            </a>
            <article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
              <ul class="my-5 text-sm tracking-wide">
                <li class="my-3 tracking-wide">
                  <a href="#">Dignissim gravida</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Eu mollis elit</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Hendrerit purus id</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Ut luctus dui tincidunt</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Pellentesque at ligula</a>
                </li>
              </ul>
            </article>
          </!--section-->
          <!--section
            class="relative text-gray-700  border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
          >
            <div class="md:hidden">
              <button
                v-on:click="toggleFooterSection"
                class="uppercase text-xs font-bold tracking-wider text-indigo-500 focus:outline-none border-t border-white py-4 w-full text-left"
                type="button"
              >
                Quisque
              </button>
            </div>
            <a
              class="uppercase text-xs font-bold tracking-wider text-indigo-500 hidden md:block"
              href="#"
            >
              Quisque
            </a>
            <article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
              <ul class="my-5 text-sm tracking-wide">
                <li class="my-3 tracking-wide">
                  <a href="#">Finibus nulla eget</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Pellentesque</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Duis efficitur</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Cras at lacus</a>
                </li>
              </ul>
            </article>
          </!--section-->
        </div>
      </div>
      <!--div class="max-w-screen-lg mx-auto border-none px-4">
        <section
          class="flex flex-col md:flex-row md:justify-between md:border-solid md:border-t text-gray-700 font-light text-sm pt-4 pb-6 md:pt-5 md:pb-6 w-full"
        >
          <div>
            <p class="leading-8 tracking-wide">
              &copy; Lorem Ipsum Co., 123 Lorem Street, New York, NY
            </p>
          </div>
          <div>
            <p class="leading-8 tracking-wide">Privacy Policy</p>
          </div>
        </section>
      </!--div-->
    </div>
          </div>
          
        </div>
      </div>
    </div>
    </transition>
    <!--div-- v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></!--div-->
		
		
		<div class=" lg:mx-auto">
    <Nuxt />
</div>
	<footer class="text-gray-700 body-font">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <!--svg-- xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </!--svg-->
        <img src="~/assets/logo-dark.png"></img>
        <!--span class="ml-3 text-xl">tailblocks</!--span-->
      </a>
      <p class="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
    </div>
    <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">PRODUCTS</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SERVICES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">INFO</h2>
        <nav class="list-none mb-10">
          <li>
            <n-link to="/contact/" class="text-gray-600 hover:text-gray-800">Contact Us</n-link>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">INDUSTRIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div class="bg-gray-200">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500 text-sm text-center sm:text-left">© 2020 tailblocks —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@knyttneve</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
  </div>
</template>

<style>


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

<script>



export default {
  name: "layout-main",
  components:{
 
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    toggleModal: function(){
      this.showModal = !this.showModal;
    },
    toggleFooterSection:function(event) {
      window.console.log(event);
        const list = event.target.parentElement.parentElement.querySelector(
          "article"
        );
        if (list.classList.contains("h-0")) {
          list.classList.remove("h-0");
        } else {
          list.classList.add("h-0");
        }
      }
  }
}
</script>
