<script setup>
import { useOrderStore } from '~/stores/cart';
const store = useOrderStore() 
definePageMeta({
  layout: 'default',
  hideTotal: false,
  headerText: 'Processed',
  headerAction: {
    label: 'Home',
    to: '/',
  },
})
</script>
<template>
  <section class="h-[80vh] flex flex-col items-center justify-center gap-6 text-center">
    <p class="text-4xl">Thank you for your Purchase!</p>
    <NuxtLink 
      to="/" 
      class="bg-lime-400 text-black font-medium py-2 px-6 rounded-lg "
    >
      Design another!
    </NuxtLink>
  </section>
</template>
