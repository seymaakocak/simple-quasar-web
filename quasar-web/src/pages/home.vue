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
     <div class="row">
      <div class="text-h5 text-bold q-px-md q-pt-md">Latest Lessons</div>
     </div>
     <div class="row">
      <div class="col-12 col-md">
      <div class="q-pa-md">
    <q-card class="my-card">
      <q-video src="https://www.youtube.com/embed/eBKCyxOipGI" />

      <q-card-section>
        <div class="text-h6">Create continuous delivery pipeline</div>
        <div class="text-subtitle2">by Jagz</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        In this video tutorial we will see how to create a continuous delivery pipeline using aws amplify console in under 10 minutues
      </q-card-section>
    </q-card>
  </div>
</div>
<div class="col-12 col-md">
      <div class="q-pa-md">
    <q-card class="my-card">
      <q-video src="https://www.youtube.com/embed/1F0SfYmrSbA" />

      <q-card-section>
        <div class="text-h6">Host Quasar app on aws in 10 mins</div>
        <div class="text-subtitle2">by Jagz</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        In this video tutorial we will see how to host Quasar application on aws in under 10 minutes using aws-amplify framework

      </q-card-section>
    </q-card>
  </div>
</div>
<div class="col-12 col-md">
      <div class="q-pa-md">
    <q-card class="my-card">
      <q-video src="https://www.youtube.com/embed/As5lzor2NQ8" />

      <q-card-section>
        <div class="text-h6">How to create android and iOS apps</div>
        <div class="text-subtitle2">by Jags</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        In this video tutorial we will see how to set our environment in order to create iOS and android application using Qausar

      </q-card-section>
    </q-card>
  </div>
</div>
</div>
<div class="row">
  <div class="text-h5 text-bold q-pl-md ">Featured Lessons</div>
</div>
<div class="row">
   <div class="col-12 col-md">
    <div class="q-pa-md">
    <q-card class="my-card">
      <div class="row">
      <div class="col-12 col-md-4 q-pa-xs">
        <q-img src="icons/featured.jpg"></q-img>
      </div>
         <div class="col-12 col-md-8">
          <div class="text-h5 text-bold q-pl-md q-pt-sm">Create responsive UI using Quasar framework</div>
           <div class="q-pa-md">In this course you will learn how to create a responsive UI using qausar framework. As part of this course you will explore many features like quasar vue components, input styles etc.</div>
         </div>
      </div>
   </q-card>
  </div>
   </div>
</div>
<div class="row">
   <div class="col-12 col-md">
    <div class="q-pa-md">
    <q-card class="my-card">
      <div class="row">
      <div class="col-12 col-md-4 q-pa-xs">
        <q-img src="icons/lesson.jpg"></q-img>
      </div>
         <div class="col-12 col-md-8">
          <div class="text-h5 text-bold q-pl-md q-pt-sm">Getting started with Quasar and aws-amplify Frameworks</div>
           <div class="q-pa-md">In this course you will learn how to build production application targeted for multiple enviornment like Web, mobile and desktop applications using Quasar framework and also create a serverless backend using aws-amplify framework</div>
         </div>
      </div>
   </q-card>
  </div>
   </div>
</div>
</q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>
