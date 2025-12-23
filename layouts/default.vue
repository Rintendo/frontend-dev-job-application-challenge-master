<script setup lang="ts">
  const route = useRoute()
  import { useOrderStore } from '@/stores/cart'
  const store = useOrderStore()
</script>

<template>
  <header class="h-[10vh] w-screen bg-violet-500">
    <h1>header</h1>
          Total: {{ store.totalPrice.toFixed(2) }}€
    <NuxtLink 
  :to="route.path === '/' ? '/checkout' : '/'"
  class="bg-blue-500 text-white px-4 py-2 rounded"
>
  {{ route.path === '/' ? 'Go to Checkout' : 'Back' }}
</NuxtLink>
  </header>
   <main class="w-screen">
      <slot />
    </main>  <div class="h-[10vh] w-screen bg-violet-500">
    <h1>footer</h1>
    
  </div>
</template>

<style>



</style>



git config --global user.name "Mimy"
git config --global user.email "Rintendox64@hotmail.de"
