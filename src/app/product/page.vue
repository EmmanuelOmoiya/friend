<script>
    export default {
        data(){
            return{
                current: 'samuel',
                isSeparated: true,
                showModal: false,
                timer: null,
                modalTimeout: null
            }
        },
        mounted(){
            this.startAnimation();
        },
        methods: {
            startAnimation() {
                setInterval(()=>{
                    this.isSeparated = true;
                    setTimeout(()=>{
                        this.current = this.current === "samuel" ? 'emmanuel' : 'samuel';
                        this.isSeparated = false;
                    }, 3000);
                }, 6000)
            },
            startTimer() {
                this.timer = setTimeout(()=>{
                    this.showModal = true;
                    this.modalTimeout = setTimeout(()=>{
                        this.showModal = false;
                    },6000)
                }, 10000)
            },
            resetTimer(){
                this.timer = setTimeout(()=>{
                    clearTimeout(this.timer);
                    clearTimeout(this.modalTimeout);
                    this.showModal = false;
                })
            },
            closeModal(){
                this.showModal = false;
            }
        },
        beforeDestroy() {
            clearTimeout(this.timer);
            clearTimeout(this.modalTimeout);
        },
    }
</script>

<template>
    <div class="bg-[#e3e3e3] min-h-screen grid items-center justify-center text-center relative"  @mouseenter="startTimer" @mouseleave="resetTimer" @touchstart="startTimer" @touchend="resetTimer">
        <transition name="modal-fade-slide">
        <div v-if="showModal" class="flex modal fixed z-10 text-xs top-[3.5rem] sm:top-[2rem] w-[90%] sm:w-fit mx-auto gap-x-2 sm:gap-x-3 bg-[#ababab] border border-[#FFFFFF4D] p-2 sm:p-3 left-0 right-0 rounded-2xl">
            <img src="/_static/images/friend-prompt.svg" class="h-full" alt="friend prompt" width="50" height="50" />
            <div class="flex justify-between">
                <div class="w-[90%] sm:w-[70%] text-left">
                    <p class="mb-1">friend</p>
                    <p>how about going back to the homepage and gaze at how beautiful it is...</p>
                </div>
                <p class="opacity-50">now</p>
            </div>
        </div>
        </transition>
        <div class="items-center flex flex-col justify-center text-center ">
            <p class="flex text-xs sm:text-[0.95rem] md:text-sm gap-x-3 mb-3 items-center text-center sm:mb-4">
                <img src="/_static/images/friend-logo.svg" />
                Work in progress, maybe
            </p>
            <h1 class="text-xl sm:text-[2.3rem] md:text-5xl font-bold max-w-[90%] sm:max-w-2xl">We do not have the resources to redesign this page 🥲</h1>
            <router-link to="/" class="bg-[#101010] w-fit py-[.5rem] px-[2rem] text-white rounded-[40px] mt-5 sm:mt-10 text-sm">Home</router-link>
        </div>
        <div class="sm:flex hidden text-xs sm:text-sm items-center text-center justify-between absolute bottom-0 w-full p-4 sm:p-6 py-4 z-8 text-black">
            <div class="flex gap-x-2 sm:gap-x-4">
                <div>
                    <p class="flex gap-x-1">Terms & Conditions <img src="/_static/images/top-arrow.svg" class="w-[.45rem]" alt="" width="50" height="50"  /></p>
                </div>
                <div>
                    <p class="flex gap-x-1">Privacy Policy  <img src="/_static/images/top-arrow.svg" class="w-[.45rem]" alt="" width="50" height="50"  /></p>
                </div>
            </div>
            <div class="gap-x-3 hidden sm:flex items-center text-center built-container">
                <div class="flex items-center text-center text-[#b6b6b6] built-text-container">
                    <a href="https://x.com/IHarbaty" target="_blank" class="mr-1 word" :class="{active: current === 'samuel'}">Designed by Samuel, </a>
                    <a href="https://x.com/Emmanuel_Omoiya" target="_blank" class="word" :class="{active: current === 'emmanuel'}"> built by Emmanuel</a>
                </div>
                <div class="flex avatar-container">
                    <img src="/_static/images/samuel.jpg" class="w-[2rem] avatar avatar1 h-[2rem] object-center rounded-full" :class="{ active: current === 'samuel', separated: isSeparated }" width="500" height="500" alt="" />
                    <img src="/_static/images/emmanuel.jpg" class="w-[2rem] avatar avatar2 -ml-3 h-[2rem] object-center rounded-full" :class="{ active: current === 'emmanuel', separated: isSeparated }" width="500" height="500" alt="" />
                </div>
            </div>
            <div>
                <p>friend &copy;2024</p>
            </div>
        </div>

        <div class="text-xs block sm:hidden sm:text-sm items-center text-center justify-center absolute bottom-0 w-full p-4 sm:p-6 py-4 z-8 text-black">
            <div class="gap-x-3 flex w-fit mx-auto text-xs mb-2 items-center text-center built-container">
                <div class="flex items-center text-center text-[#b6b6b6] built-text-container">
                    <a href="https://x.com/IHarbaty" target="_blank" class="mr-1 word" :class="{active: current === 'samuel'}">Designed by Samuel, </a>
                    <a href="https://x.com/Emmanuel_Omoiya" target="_blank" class="word" :class="{active: current === 'emmanuel'}"> built by Emmanuel</a>
                </div>
                <div class="flex avatar-container">
                    <img src="/_static/images/samuel.jpg" class="w-[1.5rem] avatar avatar1 h-[1.5rem] object-center rounded-full" :class="{ active: current === 'samuel', separated: isSeparated }" width="500" height="500" alt="" />
                    <img src="/_static/images/emmanuel.jpg" class="w-[1.5rem] avatar avatar2 -ml-3 h-[1.5rem] object-center rounded-full" :class="{ active: current === 'emmanuel', separated: isSeparated }" width="500" height="500" alt="" />
                </div>
            </div>
            <div class="flex w-full justify-between">
                <div class="flex gap-x-2 sm:gap-x-4">
                    <div>
                        <p class="flex gap-x-1">Terms & Conditions <img src="/_static/images/top-arrow.svg" class="w-[.45rem]" alt="" width="50" height="50"  /></p>
                    </div>
                    <div>
                        <p class="flex gap-x-1">Privacy Policy  <img src="/_static/images/top-arrow.svg" class="w-[.45rem]" alt="" width="50" height="50"  /></p>
                    </div>
                </div>
                <div>
                    <p>friend &copy;2024</p>
                </div>
            </div>
        </div>
    </div>
</template>
