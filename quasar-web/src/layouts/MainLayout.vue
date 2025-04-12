<template>
  <q-layout view="lHh Lpr lFf">

    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title class="text-bold">
          codeguru.io

        </q-toolbar-title>
        <div class="gt-sm">
          <q-btn
          flat
          rounded
          label="courses"
          class="q-mr-sm"
          ></q-btn>


          <q-btn
          outline
          rounded
          label="sign up"
          class="q-mr-sm"
          ></q-btn>

          <q-btn
          outline
          rounded
          label="sign in"
          ></q-btn>
        </div>

      </q-toolbar>
    </q-header>

     <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="250"
        :breakpoint="600"
      >

          <q-list padding>
            <q-item
            to="/"
            exact
            clickable
            v-ripple>
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>

              <q-item-section>
                home
              </q-item-section>
            </q-item>

            <q-item
            to="/courses"
            exact
            clickable
            v-ripple>
              <q-item-section avatar>
                <q-icon name="book" />
              </q-item-section>

              <q-item-section>
                courses
              </q-item-section>
            </q-item>

            <q-item
            to="/videos"
            exact
            clickable
            v-ripple>
              <q-item-section avatar>
                <q-icon name="pause" />
              </q-item-section>

              <q-item-section>
                videos
              </q-item-section>
            </q-item>


            <q-item
            to="/sign in"
            exact
            clickable
            v-ripple>
              <q-item-section avatar>
                <q-icon name="login" />
              </q-item-section>

              <q-item-section>
                sign in
              </q-item-section>
            </q-item>


            <q-item
            to="/sign up"
            exact
            clickable
            v-ripple>
              <q-item-section avatar>
                <q-icon name="login" />
              </q-item-section>

              <q-item-section>
                sign up
              </q-item-section>
            </q-item>

            <q-item
            to="/header"
            exact
            clickable
            v-ripple>
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
                header
              </q-item-section>
            </q-item>


            <q-item
            to="/start"
            exact
            clickable
            v-ripple>
              <q-item-section avatar>
                <q-icon name="mail" />
              </q-item-section>

              <q-item-section>
                start
              </q-item-section>
            </q-item>



          </q-list>

      </q-drawer>

    <q-page-container>
    <keep-alive>
      <router-view />
    </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { date } from 'quasar'

import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  computed:{
    todaysDate(){
      const timeStamp = Date.now()
      return date.formatDate(timeStamp, 'dddd D MMMM')
    }
  }
})
</script>

<style lang="scss">
  .header-image{
   height:100%;
   z-index:-1;
   opacity:0.2;
   filter:grayscale(100%)


  }
  </style>
