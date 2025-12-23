<script setup lang="ts">
import { useOrderStore } from '~/stores/cart';
import { ref } from 'vue'

interface ValidationErrors {
  name?: string[]
  address?: string[]
}

interface ApiError {
  statusCode?: number
  data?: {
    errors?: ValidationErrors
  }
}

const store = useOrderStore() 
const name = ref<string>('')
const address = ref<string>('')
const pending = ref<boolean>(false)
const apiErrors = ref<ValidationErrors>({})

const submitForm = async (): Promise<void> => {
  pending.value = true
  apiErrors.value = {}
  
  try {
    await $fetch('/api/order', { 
      method: 'POST',
      body: { name: name.value, address: address.value }
    })
    await navigateTo('/success')
    
  } catch (error) {
    const apiError = error as ApiError
    if (apiError.statusCode === 422 && apiError.data?.errors) {
      apiErrors.value = apiError.data.errors
    } else if (apiError.data?.errors) {
      apiErrors.value = apiError.data.errors
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