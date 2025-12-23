<script setup lang="ts"></script>

<template>
Your Info
<form class="max-w-md mx-auto mt-8 bg-white rounded-xl shadow-md p-6 space-y-4">
  <div>
    <label for="first" class="text-sm font-medium text-gray-700 mb-1">
      Name
    </label>
    <input
      id="first"
      type="text"
      class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
      placeholder="Please enter your name"
    />
  </div>

  <div>
    <label for="second" class="text-sm font-medium text-gray-700 mb-1">
      Addres
    </label>
    <input
      id="second"
      type="text"
      class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
      placeholder="Please enter your adress"
    />
  </div>

  <button
    type="submit"
    class="w-full bg-violet-600 text-white font-medium py-2 rounded-lg hover:bg-blue-200 transition"
  >
    Purchase
  </button>
</form>
</template>