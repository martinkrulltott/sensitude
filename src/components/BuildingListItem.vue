<template>
  <div class="card building-list-item">
    <h2 class="title">{{ building.name }}</h2>
  </div>
</template>

<script>
export default {
  name: 'BuildingListItem',
  props: ['building'],
};
</script>
