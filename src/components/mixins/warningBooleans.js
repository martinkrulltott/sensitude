export const warningBooleans = {
  computed: {
    tempWarningHigh() {
      return this.room.warnings && this.room.warnings.some(warning => (warning == 'temperatureHigh'));
    },
    tempWarningLow() {
      return this.room.warnings && this.room.warnings.some(warning => (warning == 'temperatureLow'));
    },
    humidWarningHigh() {
      return this.room.warnings && this.room.warnings.some(warning => (warning == 'humidityHigh'));
    },
    humidWarningLow() {
      return this.room.warnings && this.room.warnings.some(warning => (warning == 'humidityLow'));
    },
  },
};
