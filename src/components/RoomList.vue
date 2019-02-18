<template>
  <div>
    <ul>
      <li v-for="room in rooms">
        <router-link :to="{ name: 'room', params: { id: room.id }}" class="card-wrapper">
          <room-list-item :room="room" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import RoomListItem from '@/components/RoomListItem.vue';

export default {
  name: 'RoomList',
  props: ['rooms'],
  components: {
    'room-list-item': RoomListItem,
  },
};
</script>
