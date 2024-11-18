<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      name="username"
      id="username"
      placeholder="Enter your name"
      required
      v-model="username"
    />
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
    <button type="submit">Sign Up</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import useSignup from '@/utils/composables/useSignup'

const emits = defineEmits(['signup'])

const { signup, error } = useSignup()
const username = ref('')
const email = ref('')
const password = ref('')

const handleSubmit = async () => {
  await signup(username.value, email.value, password.value)
  if (!error.value) {
    emits('signup')
  }
}
</script>

<style scoped></style>
