<template>
  <div>
    <h1 class="view-title">
      <span class="title-text">Buildings</span>
    </h1>
    <building-list v-if="buildings" :buildings="buildings"/>
  </div>
</template>

<script>
import BuildingList from '@/components/BuildingList.vue';
import { mapState } from 'vuex';

export default {
  name: 'start',
  components: {
    'building-list': BuildingList,
  },
  mounted() {
    if (!this.$store.state || !this.$store.state.buildings || this.$store.state.buildings.length == 0) {
      this.$store.dispatch('loadBuildings');
    }
  },
  computed: mapState([
    'buildings',
  ]),
};
</script>
