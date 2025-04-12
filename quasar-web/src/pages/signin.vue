<template>
  <div class="flex-center bg-primary">
    <q-page class="sign-in-page">
      <q-card class="sign-in-card">
        <q-card-section>
          <div class="sign-in-logo">
            <q-img src="icons/logo.png"  />
          </div>
          <h2 class="sign-in-title">SIGN IN</h2>
          <q-form @submit="login" class="sign-in-form">
            <q-input
              filled
              v-model="username"
              label="Email"
              type="email"
              dense
              outlined
              class="q-pl-lg  q-pr-lg q-pb-lg"
            ></q-input>
            <q-input
              filled
              v-model="password"
              label="Password"
              type="password"
              dense
              outlined
              class="q-pl-lg  q-pr-lg q-pb-lg"
            ></q-input>
            <q-btn
              color="primary"
              label="Sign In"
              type="submit"
              style="width:300px"
              dense
              outlined
            ></q-btn>
          </q-form>
          <div class="sign-in-options">
            <router-link to="/forgot-password">Create a new account ?</router-link>
            <router-link to="/register">Forgot my password</router-link>
          </div>
        </q-card-section>
      </q-card>
    </q-page>
  </div>
</template>

<script>
export default {
  name: 'SignInPage',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login() {
      // Handle login logic here
      // You can make an API call to authenticate the user
      // and handle the response accordingly
      console.log('Username:', this.username)
      console.log('Password:', this.password)
    },
  },
}
</script>

<style scoped>
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.sign-in-page {
  max-width: 400px;
}

.sign-in-card {
  padding: 24px;
  text-align: center;
}

.sign-in-logo {
  margin-bottom: 24px;
}

.sign-in-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}

.sign-in-form {
  margin-bottom: 24px;
}

.sign-in-options {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}

.sign-in-options a {
  color: #888;
  text-decoration: underline;
  cursor: pointer;
}
</style>
