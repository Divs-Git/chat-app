<template>
  <nav v-if="user">
    <div>
      <p>Hey there {{ user.displayName }}</p>
      <div class="email">Currently logged in as {{ user.email }}</div>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script setup>
import getUser from '@/utils/composables/getUser'
import useLogout from '@/utils/composables/useLogout'

const { user } = getUser()
const { logout, error } = useLogout()

const handleClick = async () => {
  await logout()
  if (!error.value) {
    console.log('User loggout out')
  }
}
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}

nav .email {
  font-size: 14px;
  color: #999;
}
</style>
