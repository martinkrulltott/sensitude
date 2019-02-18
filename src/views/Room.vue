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

export default {
  name: 'room',
  components: {
    'room-details': RoomDetails,
  },
  props: ['id'],
  mounted() {
    if (!this.$store.state || !this.$store.state.buildings || this.$store.state.buildings.length == 0) {
      this.$store.dispatch('loadBuildings');
    }
  },
  computed: {
    ...mapGetters({
      room: 'getRoomById',
      building: 'getBuildingByRoomId',
    }),
  },
  methods: {
    refresh(event) {
      this.$store.dispatch('loadBuildings');
    },
  },
};
</script>
