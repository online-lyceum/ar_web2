<template>
  <div>
	<ul>
		<li v-for="user in users" :key="user.name">
			<p>
			{{ user.name }}
			{{ user.job_title }}
			{{ user.coordinates}}
			</p>
		</li>
	</ul>
  </div>
</template>

<script>
export default {
  name: 'UsersList',
  data() {
	return
  },
  computed: {
	users() {
		return this.$store.state.users;
	}
  },
  mounted() {
	this.$store.dispatch("fetchUsers");
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
