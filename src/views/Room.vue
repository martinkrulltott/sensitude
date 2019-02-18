<template>
  <div v-if="building(id) && room(id)">
    <h1 class="view-title">
      <router-link :to="{ name: 'building', params: { id: building(id).id }}">
        <font-awesome-icon class="icon" icon="arrow-left" />
      </router-link>
      <span class="title-text">{{ room(id).name }}</span>
      <button v-on:click="refresh">
        <font-awesome-icon class="icon" icon="sync-alt" />
      </button>
    </h1>
    <room-details :room="room(id)" class="card-wrapper"/>
  </div>
</template>

<script>
import RoomDetails from '@/components/RoomDetails.vue';
import { mapGetters } from 'vuex';
import loadInitData from '@/components/mixins/loadInitData';

export default {
  name: 'room',
  components: {
    'room-details': RoomDetails,
  },
  props: ['id'],
  mixins: [loadInitData],
  computed: {
    ...mapGetters({
      room: 'getRoomById',
      building: 'getBuildingByRoomId',
    }),
  },
  methods: {
    refresh() {
      this.$store.dispatch('loadBuildings');
    },
  },
};
</script>
