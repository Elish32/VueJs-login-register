<template>
  <div id="app">
    <Countries></Countries>
    <br/><br/>
    <p>Send money abroad and manage UK payments all in one place</p>
    <br/><br/>
    <p>New to Opal Transfer? <router-link to="Register">Sign up</router-link></p>

    <form>
        <input type="text" v-model="email" id="fname" name="email" placeholder="Email address">
        <input type="text" v-model="password" id="lname" name="password" placeholder="Password">
        <br/>
        
        <input type="button" @click="signIn" value="Continue">
    </form>

  </div>
</template>

<script>
import Countries from './components/Countries'
import firebase from 'firebase'

export default {
  name: 'App',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        function (user) {
          alert ('You are signed in!')
        },
        function (err) {
          alert ('Oops ' + err.message )
        }
      );
    }
  },
  components: {
    Countries
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 70px;
}

input[type=button], input[type=submit], input[type=reset] {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 16px 32px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
    width: 60%;
    height: 70px;
    background: linear-gradient(to right, 	#6AB9F1 0%, #71C56C 50%);
    background-size: 200% 100%;
    background-position:left bottom;
}

input[type=text] {
    width: 60%;
    height: 70px;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
}

</style>
