<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BModalComponent } from 'buefy/types/components'

export default Vue.extend({
  props: {
    msg: { type: String, required: true },
  },
})
</script>
