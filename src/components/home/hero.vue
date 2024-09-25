<script >
    export default {
        data () {
            return {
                videoSource: '/_static/assets/friend.mp4',
                posterImage: '/_static/assets/friend_poster.png',
                isPlaying: false,
                isMuted: true,
                showModal: false,
                timer: null,
                modalTimeout: null
            };
        },
        methods: {
            togglePlayPauseVideo(){
                const video = this.$refs.backgroundVideo;
                if(this.isPlaying){
                    video.pause();
                } else {
                    video.play();
                }
                this.isPlaying = !this.isPlaying
            },
            toggleMuteVideo(){
                const video = this.$refs.backgroundVideo;
                video.muted = !video.muted;
                this.isMuted = video.muted
            },
            startTimer() {
                this.timer = setTimeout(()=>{
                    this.showModal = true;
                    this.modalTimeout = setTimeout(()=>{
                        this.showModal = false;
                    },6000)
                }, 15000)
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
    <div class="min-h-screen relative" @mouseenter="startTimer" @mouseleave="resetTimer" @touchstart="startTimer" @touchend="resetTimer">
        <video ref="backgroundVideo" :poster="posterImage" class="video position absolute top-0 left-0 w-full h-full object-cover -z-1" loop muted="true" playsinline webkit-playsinline >
            <source :src="videoSource" type="video/mp4" />
        </video>
        <transition name="modal-fade-slide">
        <div v-if="showModal" class="flex modal fixed z-10 text-xs top-[3.5rem] sm:top-[2rem] w-[90%] sm:w-fit mx-auto gap-x-2 sm:gap-x-3 bg-[#ababab] border border-[#FFFFFF4D] p-2 sm:p-3 left-0 right-0 rounded-2xl">
            <img src="/_static/images/friend-prompt.svg" class="h-full" alt="friend prompt" width="50" height="50" />
            <div class="flex justify-between">
                <div class="w-[80%] sm:w-[70%] text-left">
                    <p class="mb-1">friend</p>
                    <p>how about scrolling down to view the other section...</p>
                </div>
                <p class="opacity-50">now</p>
            </div>
        </div>
        </transition>
        <div class="flex justify-end items-end flex-col bg-[#000]/20 min-h-screen h-full z-9 relative p-4 sm:p-6">
            <button @click="toggleMuteVideo" className="absolute top-[1rem] right-[1rem] z-10 flex justify-center items-center">
                <svg v-if="isMuted" stroke="#fff" fill="#fff" class="w-[1.4rem] h-[1.4rem] mt-2 mr-1" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M416 432 64 80"></path><path d="M243.33 98.86a23.89 23.89 0 0 0-25.55 1.82l-.66.51-28.52 23.35a8 8 0 0 0-.59 11.85l54.33 54.33a8 8 0 0 0 13.66-5.66v-64.49a24.51 24.51 0 0 0-12.67-21.71zm8 236.43L96.69 180.69A16 16 0 0 0 85.38 176H56a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h69.76l92 75.31a23.9 23.9 0 0 0 25.87 1.69A24.51 24.51 0 0 0 256 391.45v-44.86a16 16 0 0 0-4.67-11.3zM352 256c0-24.56-5.81-47.87-17.75-71.27a16 16 0 1 0-28.5 14.55C315.34 218.06 320 236.62 320 256q0 4-.31 8.13a8 8 0 0 0 2.32 6.25l14.36 14.36a8 8 0 0 0 13.55-4.31A146 146 0 0 0 352 256zm64 0c0-51.18-13.08-83.89-34.18-120.06a16 16 0 0 0-27.64 16.12C373.07 184.44 384 211.83 384 256c0 23.83-3.29 42.88-9.37 60.65a8 8 0 0 0 1.9 8.26L389 337.4a8 8 0 0 0 13.13-2.79C411 311.76 416 287.26 416 256z"></path><path d="M480 256c0-74.25-20.19-121.11-50.51-168.61a16 16 0 1 0-27 17.22C429.82 147.38 448 189.5 448 256c0 46.19-8.43 80.27-22.43 110.53a8 8 0 0 0 1.59 9l11.92 11.92a8 8 0 0 0 12.92-2.16C471.6 344.9 480 305 480 256z"></path></svg>
                <svg v-if="!isMuted" stroke="#fff" fill="#fff"  stroke-width="0" viewBox="0 0 512 512" height="2.2em" width="2.2em" xmlns="http://www.w3.org/2000/svg"><path d="M326.9 145.6c-2.2-1.1-4.6-1.6-6.9-1.6-3.6 0-7.1 1.2-10 3.5L244.8 200H192c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16h52.8l65.2 52.5c2.9 2.3 6.5 3.5 10 3.5 2.3 0 4.7-.5 6.9-1.6 5.6-2.7 9.1-8.3 9.1-14.4V160c0-6.2-3.5-11.8-9.1-14.4z"></path></svg>
            </button>
            <div class="sm:flex justify-between items-end w-full z-9 text-white">
                <div class="text-left font-[grotesk] mb-4 sm:mb-0 text-[1.8rem] sm:text-[1.9rem] leading-[1.75rem] md:text-[2.5rem] lg:text-[3.3rem] md:leading-[2.4rem] lg:leading-[3.3rem]">
                    <p class="">Introducing Friend.</p>
                    <p class="">not imaginary.</p>
                </div>
                <div class="text-sm sm:text-normal flex gap-x-3 justify-end">
                    <button v-if="!isPlaying" class="px-[3rem] text-white rounded-[50px] border items-center  border-white bg-transparent text-center py-[.5rem] hover:bg-white hover:text-black sm:block hidden" @click="togglePlayPauseVideo">Play</button>
                    <button v-if="isPlaying" class="px-[3rem] text-white rounded-[50px] border items-center  border-white bg-transparent text-center py-[.5rem] hover:bg-white hover:text-black sm:block hidden" @click="togglePlayPauseVideo">Pause</button>
                    <button v-if="!isPlaying" class="rounded-full text-white w-[2.5rem] h-[2.5rem] flex items-center text-center border border-white bg-transparent text-center p-[.5rem] hover:bg-white hover:text-black block justify-center sm:hidden" @click="togglePlayPauseVideo"><img class="w-[1rem] ml-[.3rem]" src="/_static/images/play.svg" width="30" height="30" alt="play" /></button>
                    <button v-if="isPlaying"  class="rounded-full text-white w-[2.5rem] h-[2.5rem] flex items-center text-center border border-white bg-transparent text-center p-[.5rem] hover:bg-white hover:text-black block justify-center sm:hidden" @click="togglePlayPauseVideo">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="100px" width="100px" xmlns="http://www.w3.org/2000/svg"><path d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"></path></svg>
                    </button>
                    <router-link to="/product" class="px-[1.5rem] rounded-[50px] border border-white bg-white items-center text-black text-center py-[.4rem] flex gap-x-3 hover:bg-transparent hover:text-white">Pre-Order <img class="sm:block hidden w-[1rem]" src="/_static/images/right-arrow.svg" width="30" height="30" alt="right-arrow" /> </router-link>
                </div>
            </div>
        </div>
    </div>
</template>