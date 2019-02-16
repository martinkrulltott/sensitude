import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    buildings: [],
  },
  mutations: {
    SET_BUILDINGS(state, buildings) {
      // Randomizing sensor data to immitate database updates
      buildings.forEach(function(building) {
        building.rooms.forEach(function(room) {
          let randFloat = Math.floor(Math.random() * 10) / 10;
          room.temperature = (room.temperature + randFloat).toFixed(1);
          room.humidity = (room.humidity + randFloat).toFixed(1);
          room.lastUpdated = Date.now();
        });
      });
      state.buildings = buildings;
    },
  },
  actions: {
    loadBuildings({ commit }) {
      axios
        .get('https://my-json-server.typicode.com/martinkrulltott/demo/homes')
        .then(r => r.data)
        .then((buildings) => {
          commit('SET_BUILDINGS', buildings);
        });
    },
  },
  getters: {
    getBuildingById: state => (id) => {
      return state.buildings.find(building => building.id === id);
    },
    getRoomById: state => (id) => {
      return state
        .buildings.find(building => building.rooms.some(room => room.id === id))
        .rooms.find(room => room.id === id);
    },
    getBuildingByRoomId: state => (id) => {
      return state
        .buildings.find(building => building.rooms.some(room => room.id === id));
    },
  },
});
