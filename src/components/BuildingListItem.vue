<template>
  <div class="card">
    <h2 class="title">{{ building.name }}</h2>
      <div class="warnings" v-if="warnings && warnings.length > 0">
        <ul>
          <li v-for="warning in warnings">
            <p>
              <font-awesome-icon class="icon warning" icon="exclamation-triangle" /> 
              {{ warningDescription(warning) }}
            </p>
          </li>
        </ul>
      </div>
      <div class="no-warning" v-else>
        <p>
          <font-awesome-icon class="icon ok-icon" icon="check-circle" /> 
          Status OK
        </p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'BuildingListItem',
  props: ['building'],
  computed: {
    warnings: function() {
      let warnings = [];
      const roomsWithWarnings = this.building.rooms
        .filter(room => room.warnings && room.warnings.length > 0);
      if (roomsWithWarnings && roomsWithWarnings.length > 0) {
        roomsWithWarnings.forEach((room) => {
          room.warnings.forEach((warning) => {
            warnings.push({
              roomName: room.name,
              warningType: warning
            });
          });
        });
      }
      return warnings;
    },
  },
  methods: {
    warningDescription: (warning) => {
      let description = "";
      switch (warning.warningType) {
        case "temperatureHigh":
          description = "temperature too high!";
          break;
        case "temperatureLow":
          description = "temperature too low!";
          break;
        case "humidityHigh":
          description = "humidity too high!";
          break;
        case "humidityLow":
          description = "humidity too low!";
          break;
      }
      return (`${warning.roomName} ${description}`);
    }
  },
};
</script>

<style scoped lang="scss">
.icon {
  margin-right: 5px;
}
</style>
