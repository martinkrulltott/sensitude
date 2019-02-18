<template>
  <div class="battery-indicator">
    <span v-if="showDetails" class="battery-voltage">{{ batteryLevel }}V </span>
    <span>{{ batteryPercentage }}%</span>
    <font-awesome-icon class="icon" v-if="batteryPercentage == 90"
    icon="battery-full" />
    <font-awesome-icon class="icon" v-else-if="batteryPercentage >= 66"
      icon="battery-three-quarters" />
    <font-awesome-icon class="icon" v-else-if="batteryPercentage >= 33"
      icon="battery-half" />
    <font-awesome-icon class="icon warning" v-else icon="battery-quarter" />
  </div>
</template>

<script>
// Dev note: To make things a little bit more interesting I decided to add
// the low battery warning logic in JS rather than having it being returned
// by the database like the other warnings.
const maxBatteryLevel = 2.8;
const minBatteryLevel = 2.0;
export default {
  name: 'BatteryIndicator',
  props: ['batteryLevel', 'showDetails'],
  computed: {
    batteryPercentage() {
      return (
        (this.batteryLevel - minBatteryLevel) / (maxBatteryLevel - minBatteryLevel) * 100
      ).toFixed(0);
    },
  },
};
</script>

<style scoped lang="scss">
.battery-indicator {
  display: flex;
  flex-grow: 1;
}

.battery-voltage {
  padding-right: 10px;
}

.icon {
  padding-left: 8px;
  font-size: 21px;
}
</style>
