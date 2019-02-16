<template>
  <div class="battery-indicator">
    <span v-if="showDetails" class="battery-voltage">{{ batteryLevel }}V </span>
    <span>{{ batteryPercentage }}%</span>
    <font-awesome-icon class="icon" v-if="batteryPercentage == 90" icon="battery-full" />
    <font-awesome-icon class="icon" v-else-if="batteryPercentage >= 66" icon="battery-three-quarters" />
    <font-awesome-icon class="icon" v-else-if="batteryPercentage >= 33" icon="battery-half" />
    <font-awesome-icon class="icon critical-level" v-else icon="battery-quarter" />
  </div>
</template>

<script>
let maxBatteryLevel = 2.8;
let minBatteryLevel = 2.0;
export default {
  name: 'BatteryIndicator',
  props: ['batteryLevel', 'showDetails'],
  computed: {
    batteryPercentage: function () {
      return (
        (this.batteryLevel - minBatteryLevel) / (maxBatteryLevel - minBatteryLevel) * 100
      ).toFixed(0);
    }
  },
};
</script>

<style scoped lang="scss">
.battery-indicator {
  display: flex;
  flex-grow: 1;
}

.critical-level {
  color: #ff0000;
}

.battery-voltage {
  padding-right: 10px;
}

.icon {
  padding-left: 8px;
  font-size: 21px;
}
</style>
