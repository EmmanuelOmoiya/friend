<script>
    import FooterComp from '../layouts/footer.vue';
    export default {
        data(){
            return{
                current: 'samuel',
                isSeparated: true
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
            }
        }
    }
</script>

<template>
    <div class="relative  min-h-screen bg-[#efefef] justify-center" id="pre-order" @mouseenter="resetTimer" @touchstart="resetTimer">
        <div class=" grid items-center text-center w-fit mx-auto">
            <img src="/_static/images/friend.svg" class="sm:h-[64vh] h-[50vh]" width="500" height="700" alt="friend" />
            <router-link to="/product" class="mb-3 px-[1.5rem] w-fit mx-auto py-[.4rem] font-medium rounded-[50px] border border-white bg-white text-center flex gap-x-3 text-sm sm:text-normal hover:text-white hover:bg-[#101010]">Pre-Order </router-link>
            <h2 class="text-2xl font-bold sm:text-3xl">Friend</h2>
            <p class="text-sm sm:text-normal">not imaginary</p>
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
                    <a href="https://x.com/IHarbaty" target="_blank" ><img src="/_static/images/samuel.jpg" class="w-[1.5rem] avatar avatar1 h-[1.5rem] object-center rounded-full cursor-pointer" :class="{ active: current === 'samuel', separated: isSeparated }" width="500" height="500" alt="" /></a>
                    <a href="https://x.com/Emmanuel_Omoiya" target="_blank"><img src="/_static/images/emmanuel.jpg" class="w-[1.5rem] avatar avatar2 -ml-3 h-[1.5rem] object-center rounded-full cursor-pointer" :class="{ active: current === 'emmanuel', separated: isSeparated }" width="500" height="500" alt="" /></a>
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
                    <a href="https://x.com/IHarbaty" target="_blank" ><img src="/_static/images/samuel.jpg" class="w-[1.5rem] avatar avatar1 h-[1.5rem] object-center rounded-full cursor-pointer" :class="{ active: current === 'samuel', separated: isSeparated }" width="500" height="500" alt="" /></a>
                    <a href="https://x.com/Emmanuel_Omoiya" target="_blank"><img src="/_static/images/emmanuel.jpg" class="w-[1.5rem] avatar avatar2 -ml-3 h-[1.5rem] object-center rounded-full cursor-pointer" :class="{ active: current === 'emmanuel', separated: isSeparated }" width="500" height="500" alt="" /></a>
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
