<template>
  <q-page class="flex column q-pa-md">
    <span class="text-h1">Headline 1</span>
    <span class="text-h2">Headline 2</span>
    <span class="text-h3">Headline 3</span>
    <span class="text-h4">Headline 4</span>
    <span class="text-h5">Headline 5</span>
    <span class="text-h6">Headline 6</span>

    <q-separator />

    <span class="text-subtitle1">Subtitle 1</span>
    <span class="text-subtitle2">Subtitle 2</span>

    <q-separator />

    <p class="text-body1">Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</p>
    <p class="text-body2">Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque, possimus nihil molestias sapiente necessitatibus dolor saepe inventore, soluta id accusantium voluptas beatae.</p>

    <q-btn
      color="primary"
      :label="sideMenuOpen ? 'Cerrar Menú' : 'Abrir Menú'"
      class="q-mt-md"
      @click="toggleSideMenu"
      />

  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import useUI from '../composables/useUI'

export default defineComponent({
  name: 'Typography',

  setup() {
    const { sideMenuOpen, toggleSideMenu} = useUI()

    return{
      sideMenuOpen,
      toggleSideMenu
    }
  }
})
</script>
