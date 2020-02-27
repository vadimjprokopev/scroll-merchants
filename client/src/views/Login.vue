<template>
  <div>
    <h2>Please log in or register</h2>
    <md-field>
      <label>Username</label>
      <md-input type="text" :v-model="username"/>
    </md-field>
    <md-field>
      <label>Password</label>
      <md-input type="password" :v-model="password"/>
    </md-field>
    <md-button @click="registerHandler">Register</md-button>
    <md-button @click="loginHandler">Login</md-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    ...mapActions(["register", "login"]),
    registerHandler() {
      this.register(this.credentials);
    },
    loginHandler() {
      this.login(this.credentials);
    }
  },
  computed: {
    credentials() {
      return {
        username: this.username,
        password: this.password
      }
    }
  }
};
</script>
