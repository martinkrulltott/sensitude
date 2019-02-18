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
import loadInitData from '@/components/mixins/loadInitData';

export default {
  name: 'start',
  components: {
    'building-list': BuildingList,
  },
  mixins: [loadInitData],
  computed: mapState([
    'buildings',
  ]),
};
</script>
