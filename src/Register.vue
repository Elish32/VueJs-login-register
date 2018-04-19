<template>
  <div id="app">
    <Countries></Countries>
    <br/><br/>
    <p>Send money abroad and manage UK payments all in one place</p>
    <br/><br/>
    <p>Already signed up? <router-link to="Login">Log in</router-link></p>

    <input type="radio" id="Personal" value="Personal" name="personalorbusiness">
    <label for="Personal">Personal</label>

    <input type="radio" id="Business" value="Business" name="personalorbusiness">
    <label for="Business">Business</label>

    <form>
        <input type="text" id="fname" name="fname" placeholder="Name">
        <input type="text" id="lname" name="lname" placeholder="Surname">
        <br/>
        <input type="email" v-model="email" id="email" name="email" class="info" placeholder="Email address"><br/>
        <input type="text" v-model="password" id="password" name="password" class="info" placeholder="password"><br/>
        <input type="text" id="dateofbirth" name="dateofbirth" class="info" placeholder="Date of birth"><br/>

        <br/>
        <input type="checkbox" id="receivecommunicationfromopaltransfers" value="">
        <label for="receivecommunicationfromopaltransfers">Receive communication from Opal Transfers</label>
        <br/>
        <input type="checkbox" id="termsandconditions" value="">
        <label for="termsandconditions">I agree to the Opal Transfer Terms and Conditions & Privacy Policy</label>
        <br/>

        <input type="button" v-on:click="register" value="Continue">
    </form>

    
    
  </div>
</template>

<script>
import Countries from './components/Countries'
import firebase from 'firebase'

export default {
  name: 'Register',
  data(){
      return {
        email: '',
        password: ''
      }
  },
  components: {
    Countries
  },
  methods: {
      register(){
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(
                function (user) {
                    alert("created")
                },
                function (err) {
                    alert(err.message)
                }
            )
      }
  }
}
</script>

<style scoped>
#Register {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 70px;
}
input[type=radio] {
    border: 0px;
    width: 2em;
    height: 2em;
    margin-left: 100px;
}

input[type=checkbox] {
    border: 0px;
    width: 1.5em;
    height: 1.5em;
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

input:not(.info)[type=text] {
    width: 30%;
    height: 70px;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
}

.info {
    width: 60%;
    height: 70px;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
}
</style>
