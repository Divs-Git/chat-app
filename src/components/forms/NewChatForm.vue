<template>
  <form>
    <textarea
      name="message"
      id="message"
      placeholder="Type a message and hit enter to send..."
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
  </form>
</template>

<script setup>
import { timestamp } from '@/firebase/config'
import getUser from '@/utils/composables/getUser'
import { ref } from 'vue'
import useCollection from '@/utils/composables/useCollection'

const message = ref('')
const { user } = getUser()
const { addDoc, error } = useCollection('messages')
const handleSubmit = async () => {
  let chatObj = {
    user: user.value.displayName,
    message: message.value,
    createdAt: timestamp(),
  }

  await addDoc(chatObj)
  if (!error.value) {
    message.value = ''
  }
}
</script>

<style scoped>
form {
  margin: 10px;
}

textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>
