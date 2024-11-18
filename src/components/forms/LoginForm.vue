<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="email"
      name="email"
      id="email"
      required
      placeholder="Enter your email"
      v-model="email"
    />
    <input
      type="password"
      name="password"
      id="password"
      placeholder="Enter your password"
      required
      v-model="password"
    />
    <div class="error">{{ error }}</div>
    <button type="submit">Login</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import useLogin from '@/utils/composables/useLogin'

const { error, login } = useLogin()
const emits = defineEmits(['login'])

const email = ref('')
const password = ref('')

const handleSubmit = async () => {
  await login(email.value, password.value)
  if (!error.value) {
    console.log('user logged in')
    emits('login')
  }
}
</script>

<style></style>
