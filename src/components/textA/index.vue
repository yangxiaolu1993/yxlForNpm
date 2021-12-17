<template>
  <div class="textA">
    <h1 @click="handleClick">Text AB {{count}}</h1>
  </div>
</template>

<script>
export default {
  name: 'textA',


  data() {
		return {
      count:0
    };
	},

  methods: {

    loadStyle(url) {
      var link = document.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = url; //css链接
      var head = document.getElementsByTagName('head')[0];
      head.appendChild(link);
    },

    handleClick(){
      this.loadStyle('yxl-npm/lib/style/textA.css');
      this.count += 1
      console.log('dianj')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.textA{
  color: #f00;
}
</style>
