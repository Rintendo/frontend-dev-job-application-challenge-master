<script setup lang="ts">
import {useOrderStore} from '@/stores/cart' 
import { Color, Motive } from "~/types/index"
const store = useOrderStore()
try {
  if (!store.loaded) {
    const { data: colors } = await useFetch<Color[]>('/api/colors', { key: 'currentColors' })
    const { data: motives } = await useFetch<Motive[]>('/api/motives', { key: 'currentDesign' })
    
    store.initStore(colors.value || [], motives.value || [])
  }
} catch (error) {
  console.error(error)
}
const saveColor = (color: Color) => {
store.pickColor(color)
}
const saveMotive = (motive: Motive) => {
    store.pickMotive(motive)
}
definePageMeta({
  layout: 'default',
  hideTotal: false,
  headerText: 'Design your Shirt',
  headerAction: {
    label: 'Go to checkout',
    to: '/checkout',
  },
})
</script>
<template>
  <section id="main" class="h-[80vh] ">
    <div class="flex flex-col lg:flex-row min-h-[80vh]">
      <div class="shirtParent">
        <Shirt
          :passedcolor="store.selectedColor"
          :passedmotive="store.selectedMotive"
        />
      </div>
      <div id="chunk" class="flex flex-col flex-1 gap-10 ">
        
        <div class="flex flex-wrap gap-10 justify-center">
          <button
            v-for="color in store.fetchedColors"
            :key="color.name"
            class="flex flex-col items-center gap-1"
            @click="saveColor(color)"
          >
            <span
              class="h-9 w-9 rounded-full border-2 border-gray-400"
              :style="{ backgroundColor: color.color }"
            />
            <span class="text-xs text-gray-700">
              {{ color.name }}
            </span>
          </button>
        </div>
        <div class="flex-1">
          <div class="flex flex-wrap gap-8 max-h-[60vh] justify-center">
            <button
              v-for="motive in store.fetchedMotives"
              :key="motive.name"
              class="thumbnail cursor-pointer rounded-lg"
              @click="saveMotive(motive)"
            >
              <img
                :src="motive.img"
                :alt="motive.name"
                class="block rounded-lg min-w-[70px]"
              />
              <p class="mt-1 text-s text-gray-700">
                {{ motive.name }}
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.shirtParent {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45vw;
  height: 45vh;
  margin: auto;
}
.thumbnail {
  width: 7vw;
  overflow: hidden;
}
.thumbnail img {
  width: 100%;
  height: 69%;
  object-fit: cover;
  object-position: center 45%;
}
#chunk {
    margin-top: 5%;
}
</style>