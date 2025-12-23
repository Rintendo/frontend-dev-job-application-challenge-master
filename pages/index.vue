<script setup lang="ts">

    import {useOrderStore} from '@/stores/cart'
    import { Color, Motive } from "../types"

    const {data: colors} = await useFetch<Color[]>('/api/colors', {key: 'currentColors'})
    const {data: motives} = await useFetch<Motive[]>('/api/motives', {key: 'currentDesign'})
    
    const store = useOrderStore() 


if (colors.value?.[0] && motives.value?.[0]) {
  store.initStore(colors.value[0], motives.value[0])
}


const saveColor = (color: Color) => {
    store.pickColor(color)
}

const saveMotive = (motive: Motive) => {
    store.pickMotive(motive)
}


</script>

<template>
<section id="main" class="w-screen h-screen">
<!-- {{ color.name }}  -->
    <div class="flex min-h-screen">

        <div class="shirtParent">
            <Shirt 
            :passedcolor="store.selectedColor" 
            :passedmotive="store.selectedMotive" 
            />
        </div>



        <div v-for="color in colors"
            class="h-6 w-6 rounded-full border-2 border-bg-gray-900"
            :style="{backgroundColor: color.color}"
            @click="saveColor(color)"
        >
        </div>

        <div v-for="motive in motives">
            <img :src="motive.img" :alt="motive.name" 
                 @click="saveMotive(motive);"
            />
        </div>

    <div>
            <p>Selected Color: </p>
            <p>Selected Motive:</p>

    </div>
  </div>
</section>
</template>



<style>


.shirtParent {
    position: relative;
    display: inline-block;
}
</style>