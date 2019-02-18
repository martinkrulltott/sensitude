export const warningBooleans = {
  computed: {
    tempWarningHigh: function () {
      return this.room.warnings && this.room.warnings.some(warning => (warning == 'temperatureHigh'));
    },
    tempWarningLow: function () {
      return this.room.warnings && this.room.warnings.some(warning => (warning == 'temperatureLow'));
    },
    humidWarningHigh: function () {
      return this.room.warnings && this.room.warnings.some(warning => (warning == 'humidityHigh'));
    },
    humidWarningLow: function () {
      return this.room.warnings && this.room.warnings.some(warning => (warning == 'humidityLow'));
    },
  },
}
