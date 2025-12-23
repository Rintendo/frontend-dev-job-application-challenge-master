<script setup>
import { useOrderStore } from '~/stores/cart';

const store = useOrderStore() 
</script>

<template>
 <div class="shirtParent flex min-h-screen">
            <Shirt 
            :passedcolor="store.selectedColor" 
            :passedmotive="store.selectedMotive" 
            />
  </div>
<Total />
<Form />

</template>



<style>
.shirtParent {
    position: relative;
    display: inline-block;
}
</style>
