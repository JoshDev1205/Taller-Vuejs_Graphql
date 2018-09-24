// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router/index";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";
import "tachyons";

const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient({
    uri: "https://server-kzqrmscrnh.now.sh/"
  })
});

Vue.config.productionTip = false;

Vue.use(VueApollo);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  provide: apolloProvider.provide(),
  components: { App },
  template: "<App/>"
});
