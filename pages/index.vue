

<template>
<section id="main" class="w-screen h-screen">
<!-- {{ color.name }}  -->
    <div class="flex min-h-screen">

        <div id="shirtParent" class="">
            <Shirt :shirt-color="shirtColor"/>
            <div id="overlay">
                <img :src="displayedMotive" alt="">
            </div>
        </div>



        <div v-for="color in colors"
            class="h-6 w-6 rounded-full border-2 border-bg-gray-900"
            :style="{backgroundColor: color.color}"
            @click="colorName = color.name; 
            currentColor = color.color"
        >
        </div>

        <div v-for="fullMotive in fullMotives">
            <img :src="fullMotive.img" :alt="fullMotive.name" 
                 @click="currentMotive = fullMotive.name;
                 displayedMotive = fullMotive.img
                 "
            />
        </div>

    <div>
            <p>Selected Color: {{ colorName }}</p>
            <p>Selected Motive: {{ currentMotive }}</p>

    </div>
  </div>
</section>
</template>

<script setup>

    const currentColor = ref()
    const currentMotive = ref("none")

    const displayedMotive = ref()
    const colorName = ref("default")

    const {data: colors} = await useFetch('/api/colors')
    const {data: motives} = await useFetch('/api/motives')


    const fullMotives = computed(() => [
        {name: 'none', img: ''},
        ...motives.value
    ], )
    

    const shirtColor = computed(() => {
        if (currentColor.value) {
          return currentColor.value;
        }
        return colors.value?.[0]?.color
    }
);

</script>

<style>
#overlay {
    top: 10vh;
    width: 100%;
    height: 10%;
    background-color: aqua;
    position: absolute;
    top: 3%;
}

#shirtParent {
    position: relative;
    display: inline-block;
}
</style>