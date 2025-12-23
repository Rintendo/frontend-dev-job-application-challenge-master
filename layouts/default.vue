<script setup lang="ts">
import {useOrderStore} from '@/stores/cart' 
const route = useRoute()
const router = useRouter()
const store = useOrderStore()

const showTotal = computed(() => !route.meta.hideTotal)
const headerText = computed(
  () => (route.meta.headerText as string) || 'fail'
)

type HeaderActionMeta = { label: string; to?: string | null }

const headerAction = computed(() => {
  return (route.meta.headerAction as HeaderActionMeta) 
})

const navigate = () => {
  headerAction.value.to == null ? router.back() : router.push(headerAction.value.to)
}
</script>

<template>
  <section id="main" class="h-dvh flex flex-col">
    <header class="h-[10vh] w-screen bg-lime-300 flex items-center justify-between px-4">
      <h1 class="headers">{{ headerText }}</h1>
      <div class="font-sans font-semibold text-3xl text-orange-100  " v-if="showTotal">
        Total: {{ store.totalPrice.toFixed(2) }}€
      </div>
      <button 
        @click="navigate"
        class="mainButton mr-3"
      >
        {{ headerAction.label }}
      </button>
    </header>
    <main class="w-screen">
      <slot />
    </main>  
    <footer class="h-[10vh] w-screen bg-lime-300 flex items-center px-10">
      <NuxtLink class="mainButton" to="/about">About</NuxtLink>
    </footer>
  </section>
</template>

<style>
  .mainButton {
  @apply bg-transparent hover:bg-green-950 text-green-950
         font-semibold hover:text-white
         py-2 px-4
         border border-green-950 hover:border-transparent
         rounded-full;
}

.headers {
  @apply font-sans font-semibold text-3xl text-green-950;
}


#main {
  color: #618D3A;
}
</style>