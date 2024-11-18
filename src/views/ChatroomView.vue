<template>
  <div class="container">
    <AppNavbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script setup>
import NewChatForm from '@/components/forms/NewChatForm.vue'
import AppNavbar from '@/components/global/AppNavbar.vue'
import getUser from '@/utils/composables/getUser'
import ChatWindow from '@/components/ChatWindow.vue'
import { watch } from 'vue'
import { useRouter } from 'vue-router'

const { user } = getUser()
const router = useRouter()

watch(user, () => {
  if (!user.value) {
    router.push({ name: 'welcome' })
  }
})
</script>

<style></style>
