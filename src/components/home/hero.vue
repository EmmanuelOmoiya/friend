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
    <div class="min-h-screen relative" @mouseenter="startTimer" @mouseleave="resetTimer" @touchstart="startTimer" @touchend="resetTimer">
        <video ref="backgroundVideo" :poster="posterImage" class="video position absolute top-0 left-0 w-full h-full object-cover -z-1" loop muted>
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
            <div class="sm:flex justify-between items-end w-full z-9 text-white">
                <div class="text-left font-[grotesk] mb-4 sm:mb-0 text-[1.8rem] sm:text-[1.9rem] leading-[1.75rem] md:text-[2.5rem] lg:text-[3.3rem] md:leading-[2.4rem] lg:leading-[3.3rem]">
                    <p class="">Introducing Friend.</p>
                    <p class="">not imaginary.</p>
                </div>
                <div class="text-sm sm:text-normal flex gap-x-3 justify-end">
                    <button v-if="!isPlaying" class="px-[3rem] text-white rounded-[50px] border items-center  border-white bg-transparent text-center py-[.5rem] hover:bg-white hover:text-black sm:block hidden" @click="togglePlayPauseVideo">Play</button>
                    <button v-if="isPlaying" class="px-[3rem] text-white rounded-[50px] border items-center  border-white bg-transparent text-center py-[.5rem] hover:bg-white hover:text-black sm:block hidden" @click="togglePlayPauseVideo">Pause</button>
                    <button class="rounded-full text-white w-[2.5rem] h-[2.5rem] flex items-center text-center border border-white bg-transparent text-center p-[.5rem] hover:bg-white hover:text-black block justify-center sm:hidden" @click="togglePlayPauseVideo"><img class="w-[1rem] ml-[.3rem]" src="/_static/images/play.svg" width="30" height="30" alt="play" /></button>
                    <a href="#pre-order" class="px-[1.5rem] rounded-[50px] border border-white bg-white items-center text-black text-center py-[.4rem] flex gap-x-3 hover:bg-transparent hover:text-white">Pre-Order <img class="sm:block hidden w-[1rem]" src="/_static/images/right-arrow.svg" width="30" height="30" alt="right-arrow" /> </a>
                </div>
            </div>
        </div>
    </div>
</template>