<template>
  <div class="card" v-if="room">
    <h2 class="title">{{ room.name }}</h2>
    <battery-indicator :batteryLevel="room.battery" :showDetails=false />
    <div class="content">
      <div v-bind:class="{ 'warning-high': tempWarningHigh, 'warning-low': tempWarningLow }">
        <font-awesome-icon class="icon" icon="thermometer-three-quarters" />
        <span class="value">{{ room.temperature }} °C</span>
      </div>
      <div v-bind:class="{ 'warning-high': humidWarningHigh, 'warning-low': humidWarningLow }">
        <font-awesome-icon class="icon" icon="tint" />
        <span class="value">{{ room.humidity }} %</span>
      </div>
    </div>
  </div>
</template>

<script>
import BatteryIndicator from '@/components/BatteryIndicator.vue';
import { mapGetters } from 'vuex';
import { warningBooleans } from './mixins/warningBooleans.js';

export default {
  name: 'RoomListItem',
  props: ['room'],
  components: {
    'battery-indicator': BatteryIndicator,
  },
  mixins: [warningBooleans],
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";

.card {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .battery-indicator {
    justify-content: flex-end;
  }
}

.content {
  width: 100%;
  display: flex;
  justify-content: space-around;

  .value {
    display: inline-block;
    font-size: 25px;
    line-height: 32px;
    vertical-align: text-bottom;
    padding-left: 7px;
  }

  .icon {
    font-size: 32px;
  }

  @media (min-width: $breakpoint-small) {
    .value {
      font-size: 32px;
      line-height: 52px;
    }

    .icon {
      font-size: 52px;
    }
  }
}
</style>
