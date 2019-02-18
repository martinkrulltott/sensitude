<template>
  <div>
    <ul>
      <li v-for="building in buildings">
        <router-link :to="{ name: 'building', params: { id: building.id }}" class="card-wrapper">
          <building-list-item :building="building" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import BuildingListItem from '@/components/BuildingListItem.vue';

export default {
  name: 'BuildingList',
  props: ['buildings'],
  components: {
    'building-list-item': BuildingListItem,
  },
};
</script>
