<template>
    <nav class="fixed w-full z-9 p-4 sm:p-6 sm:px-8 tex-sm " style="z-index: 9; font-family: 'grotesk'">
        <div class="flex gap-x-4 sm:gap-x-8 text-white">
            <router-link to="/">
                <p>Home</p>
                <div class="w-[4px] h-[4px] mx-auto bg-[#fff] hidden rounded-full " />
            </router-link>
            <router-link to="/blog">
                <p>Blog</p>
                <div class="w-[4px] h-[4px] mx-auto bg-[#fff] hidden rounded-full " />
            </router-link>
            <router-link to="/product">
                <p>Product</p>
                <div class="w-[4px] h-[4px] mx-auto bg-[#fff] hidden rounded-full " />
            </router-link>
        </div>
    </nav>
</template>

<script setup lang="ts">
</script>
