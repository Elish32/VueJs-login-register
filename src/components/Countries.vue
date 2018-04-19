<template>
  <div class="Countries">
    <img src="../assets/flag.png" id="flag">
    <ul ><li v-for="(item, index) in items" :key="index">
    {{ item.name }}
  </li></ul>
  <img src="../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'Countries',
  data () {
    return {
      items: [
      { name: 'English' },
      { name: 'Български' },
      { name: 'Latviešu' },
      { name: 'Lietuvių' },
      { name: 'Русский' },
      { name: 'Polski' },
      { name: 'Română' },
    ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#flag{
  float: left;
}
</style>
