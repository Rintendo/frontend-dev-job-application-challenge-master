<script setup lang="ts">
  import { useOrderStore } from '@/stores/cart'
  const store = useOrderStore()

</script>

<template>
      <section
    class="w-full max-w-sm bg-white rounded-2xl shadow-md p-6 space-y-6 border border-gray-100"
  >

    <h2 class="text-xl font-semibold tracking-wide text-gray-900">
      Order Data
    </h2>


    <div class="space-y-3 text-base text-gray-900">
      <div class="flex justify-between">
        <span class="font-semibold">Motiv:</span>
        {{ store.selectedMotive.price.toFixed(2) }}€

      </div>

      <div class="flex justify-between">
        <span class="font-semibold">Shirt:</span>
        {{ store.selectedColor.price.toFixed(2) }}€

      </div>
    </div>



    <hr class="border-t border-gray-300" />


    <div class="flex justify-between items-center pt-2 text-lg text-gray-900">
      <span class="font-semibold">Total:</span>
      <span class="font-semibold">
{{ store.totalPrice }}€
      </span>
    </div>
  </section>
</template>