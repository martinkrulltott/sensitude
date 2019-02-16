<template>
  <div>
    <h1 class="view-title">
      <span class="title-text">Buildings</span>
    </h1>
    <building-list v-if="buildings" :buildings="buildings"/>
  </div>
</template>

<script>
// TODO: Add logic for the warnings
// TODO: Add temperature warnings to the data
import BuildingList from '@/components/BuildingList.vue';
import { mapState } from 'vuex';
export default {
  name: 'start',
  components: {
    'building-list': BuildingList,
  },
  mounted () {
    this.$store.dispatch('loadBuildings');
  },
  computed: mapState([
    'buildings'
  ]),
};
</script>
