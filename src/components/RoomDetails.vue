<template>
  <div class="card room-details">
    <h2 class="title">{{ room.name }} - {{ room.description }}</h2>
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
    <div class="warnings" v-if="room.warnings && room.warnings.length > 0">
      <ul>
        <li v-for="warning in room.warnings">
          <p>
            <font-awesome-icon class="icon warning" icon="exclamation-triangle" />
            {{ warningDescription(warning) }}
          </p>
        </li>
      </ul>
    </div>
    <p class="date">Last updated: {{ lastUpdated }}</p>
    <battery-indicator :batteryLevel="room.battery" :showDetails=true />
  </div>
</template>

<script>
import BatteryIndicator from '@/components/BatteryIndicator.vue';
import moment from 'moment';
import warningBooleans from '@/components/mixins/warningBooleans';

export default {
  name: 'RoomDetails',
  props: ['room'],
  mixins: [warningBooleans],
  computed: {
    lastUpdated() {
      return moment(this.room.lastUpdated).format('YY-MM-DD HH:mm:ss');
    },
  },
  components: {
    'battery-indicator': BatteryIndicator,
  },
  methods: {
    warningDescription: (warning) => {
      let description = '';
      switch (warning) {
        case 'temperatureHigh':
          description = 'Temperature too high!';
          break;
        case 'temperatureLow':
          description = 'Temperature too low!';
          break;
        case 'humidityHigh':
          description = 'Humidity too high!';
          break;
        case 'humidityLow':
          description = 'Humidity too low!';
          break;
        default:
          break;
      }
      return description;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";

.card {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .title {
    margin-bottom: 15px;
  }

  .battery-indicator {
    justify-content: flex-end;
  }
}

.content {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 15px;

  .value {
    display: inline-block;
    font-size: 32px;
    line-height: 55px;

    @media (min-width: $breakpoint-small) {
      font-size: 40px;
    }
  }

  .icon {
    font-size: 75px;
    display: block;
    margin: 0 auto;
  }
}

.date {
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 14px;
}

.warnings {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
