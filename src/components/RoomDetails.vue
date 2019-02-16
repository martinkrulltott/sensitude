<template>
  <div class="card room-details">
    <h2 class="title">{{ room.name }} - {{ room.description }}</h2>
    <div class="content">
      <div>
        <font-awesome-icon class="icon" icon="thermometer-three-quarters" /> 
        <span class="value">{{ room.temperature }} °C</span>
      </div>
      <div>
        <font-awesome-icon class="icon" icon="tint" />
        <span class="value">{{ room.humidity }} %</span>
      </div>
    </div>
    <p class="date">Last updated: {{ lastUpdated }}</p>
    <battery-indicator :batteryLevel="room.battery" :showDetails=true />
  </div>
</template>

<script>
import BatteryIndicator from '@/components/BatteryIndicator.vue';
import moment from 'moment';
export default {
  name: 'RoomDetails',
  props: ['room'],
  computed: {
    lastUpdated: function () {
      return moment(this.room.lastUpdated).format('YY-MM-DD HH:mm:ss');
    },
  },
  components: {
    'battery-indicator': BatteryIndicator,
  }
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.room-details {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .title {
    margin-bottom: 15px;
  }

  .battery-indicator {
    justify-content: flex-end;
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
}
</style>
