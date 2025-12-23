<script setup lang="ts">
import { ref } from 'vue'
const name = ref('')
const address = ref('')
const pending = ref(false)
const apiErrors = ref<Record<string, string[]>>({})
const submitForm = async () => {
  pending.value = true
  apiErrors.value = {}
  try {
    await $fetch('/api/order', { 
      method: 'POST',
      body: { name: name.value, address: address.value }
    })
    await navigateTo('/success')
    
  } catch (error: any) {
    if (error.statusCode === 422 && error.data?.errors) {
      apiErrors.value = error.data.errors
    } else if (error.data?.errors) {
      apiErrors.value = error.data.errors
    }
  } finally {
    pending.value = false
  }
}
</script>
<template>
  <form @submit.prevent="submitForm" class="max-w-md bg-white rounded-xl shadow-md p-6 space-y-4">
    <div>
      <label for="name" class="text-sm font-medium text-gray-700 mb-1 block">Name</label>
      <input
        id="name"
        v-model="name"
        name="name"
        type="text"
        class="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        :class="{ 'border-red-500 ring-1 ring-red-200': !!apiErrors.name }"
        placeholder="Please enter your name"
        :disabled="pending"
      />
      <div v-if="apiErrors.name?.length" class="text-red-500 text-xs mt-1">
        {{ apiErrors.name[0] }}
      </div>
    </div>
    <div>
      <label for="address" class="text-sm font-medium text-gray-700 mb-1 block">Address</label>
      <input
        id="address"
        v-model="address"
        name="address"
        type="text"
        class="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        :class="{ 'border-red-500 ring-1 ring-red-200': !!apiErrors.address }"
        placeholder="Please enter your address"
        :disabled="pending"
      />
      <div v-if="apiErrors.address?.length" class="text-red-500 text-xs mt-1">
        {{ apiErrors.address[0] }}
      </div>
    </div>
    <button
      type="submit"
      :disabled="pending"
      class="w-full bg-lime-400 text-black font-medium py-2 rounded-lg hover:bg-lime-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
    >
      {{ pending ? 'Processing...' : 'Purchase' }}
    </button>
  </form>
</template>