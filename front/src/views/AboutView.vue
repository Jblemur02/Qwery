<template>
  <main>
    <div v-if="users.length">
      <h1>User List</h1>
      <ul>
        <li v-for="user in users" :key="user.id">
          <p>{{ user.id }}</p>
          <p>{{ user.email }}</p>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No users found.</p>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    }
  },
  mounted() {
    this.$axios
      .get('/user')
      .then((response) => {
        this.users = response.data
      })
      .catch((error) => {
        console.error('There was an error fetching the data:', error)
      })
  },
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
