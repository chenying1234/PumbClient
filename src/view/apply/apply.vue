<template>
  <div class="g-flexview">
      <head-nav></head-nav>
      <router-view/>
  </div>
</template>
<script>
import headNav from '@/view/apply/header.vue'
export default {
  name: "DealerIndex",
   components: {
    headNav
  },

  data() {
    return {

    };
  },
  methods:{

  }
};
</script>
<style lang="less">

</style>

