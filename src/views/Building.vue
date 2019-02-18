<template>
  <div v-if="building(id)">
    <h1 class="view-title">
      <router-link :to="{ name: 'start' }">
        <font-awesome-icon class="icon" icon="arrow-left" />
      </router-link>
      <span class="title-text">{{ building(id).name }}</span>
      <button v-on:click="refresh">
        <font-awesome-icon class="icon" icon="sync-alt" />
      </button>
    </h1>
    <room-list :rooms="building(id).rooms"/>
  </div>
</template>

<script>
import RoomList from '@/components/RoomList.vue';
import { mapGetters } from 'vuex';
import loadInitData from '@/components/mixins/loadInitData';

export default {
  name: 'building',
  components: {
    'room-list': RoomList,
  },
  props: ['id'],
  mixins: [loadInitData],
  computed: {
    ...mapGetters({
      building: 'getBuildingById',
    }),
  },
  methods: {
    refresh() {
      this.$store.dispatch('loadBuildings');
    },
  },
};
</script>
