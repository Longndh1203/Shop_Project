import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },
  getters: {},
  mutations: {
    products(state, Products) {
      state.products = Products;
    },
  },
  actions: {
    async getproducts({ commit }) {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        commit("Products", res.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
