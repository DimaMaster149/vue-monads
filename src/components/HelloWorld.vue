<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ApiService from '../services/ApiService';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  async mounted() {
    const result = await ApiService.get('https://randomuser.me/api/');
    console.log({ result });
  },
});
</script>