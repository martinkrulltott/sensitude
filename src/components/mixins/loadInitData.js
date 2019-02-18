export default {
  mounted() {
    if (!this.$store.state || !this.$store.state.buildings
      || this.$store.state.buildings.length == 0) {
      this.$store.dispatch('loadBuildings');
    }
  },
};
