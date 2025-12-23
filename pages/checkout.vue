<script setup lang="ts">
import { useOrderStore } from '~/stores/cart';

const store = useOrderStore() 

definePageMeta({
  layout: 'default',
  hideTotal: false,
  headerText: 'Checkout',
  headerAction: {
    label: 'Back to design',
    to: '/',
  },
})
</script>

<template>
  <div class="flex flex-col lg:flex-row items-center gap-6 min-h-[80vh] p-6">
    <div class="shirtParent flex-1 flex flex-col items-center">
      <Shirt
        :passedcolor="store.selectedColor"
        :passedmotive="store.selectedMotive"
      />


    <div v-if="store.selectedMotive && store.selectedColor" class="mt-4 text-center">
      <p class="font-semibold">
        Motive Name: {{ store.selectedMotive.name }}
      </p>
      <p class="text-sm text-gray-600">
        Color Name: {{ store.selectedColor.name }}
      </p>
    </div>
    </div>

    <div class="flex-1 w-full">
      <Total />
    </div>

    <div class="flex-1 w-full">
      <Form />
    </div>
  </div>
</template>
<style>
.shirtParent {
    position: relative;
    display: inline-block;
}
</style>