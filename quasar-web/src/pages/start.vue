<template>
  <q-page class="bg-deep-purple-1">
    <div class="row bg-primary">
      <div class="col">
        <div style=" max-width:650px; text-align:center; margin-left:auto; margin-right:auto;">
          <div class="text-h4 text-bold text-white q-mt-xl q-pt-xl q-pb-lg"> Learn fullstack development from Industry experts</div>
          <div class="text-white text-h6 q-pl-lg q-pr-lg q-pb-sm">Join codeguru.io community today to get started</div>
          <q-input
        color="black"
        bg-color="white"
        filled
        placeholder="Your email"
        class="q-pl-lg  q-pr-lg q-pb-lg"
      >
        <template v-slot:prepend>
          <q-icon name="email" />
        </template>
        <template v-slot:append>
          <q-btn
          color="purple"
          label="start learning"></q-btn>
        </template>
      </q-input>
       </div>
        </div>
      <div class="col gt-sm">
        <q-img src="icons/home.png"
        style="margin-left:auto; margin-right:auto; display:block"
        ></q-img>
      </div>
     </div>

</q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>
