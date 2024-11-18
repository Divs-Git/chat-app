<template>
  <div class="chat-window">
    <div v-if="error" class="error">{{ error.value }}</div>
    <div v-if="documents" class="messages" ref="messages">
      <div v-for="doc in formattedDocument" :key="doc.id" class="single-chat">
        <span class="created-at">{{ doc.createdAt }} ago</span>
        <span class="user">{{ doc.user }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import getCollection from '@/utils/composables/getCollection'
import { formatDistanceToNow } from 'date-fns'
import { computed, onUpdated, ref } from 'vue'

const { documents, error } = getCollection('messages')

const formattedDocument = computed(() => {
  if (documents.value) {
    return documents.value.map((doc) => {
      let time = formatDistanceToNow(doc.createdAt.toDate())
      return { ...doc, createdAt: time }
    })
  }
  return null
})

const messages = ref(null)

onUpdated(() => {
  messages.value.scrollTop = messages.value.scrollHeight
})
</script>

<style>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}

.single-chat {
  margin: 18px 0;
}

.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}

.user {
  font-weight: bold;
  margin-right: 6px;
}

.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
