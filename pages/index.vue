

<template>
<section id="main" class="w-screen h-screen">
<!-- {{ color.name }}  -->
    <div class="flex min-h-screen">

        <div id="shirtParent" class="">
            <Shirt />
        </div>

        <div v-for="color in colors"
            class="h-6 w-6 rounded-full border-2 border-bg-gray-900"
            :style="{backgroundColor: color.color}"
        >
        </div>

        <div v-for="motive in motives">
            <img :src="motive.img" :alt="motive.name" />
        </div>
  </div>
</section>
</template>

<script setup>
    
    const {data: colors} = await useFetch('/api/colors')
    // console.log(colors.value)

    const {data: motives} = await useFetch('/api/motives')
    console.log(motives.value)
</script>

<style>

/* .circle {
    border-radius: 20px;
    height: 25px;
    width: 25px;
    border: 2px solid rgb(110, 110, 110);
} */

</style>