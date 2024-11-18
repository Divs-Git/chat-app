import { ref, watchEffect } from 'vue'
import { projectFirestore } from '@/firebase/config'

const getCollection = (collection) => {
  const documents = ref(null)
  const error = ref(null)

  const collectionRef = projectFirestore.collection(collection).orderBy('createdAt')

  const unsub = collectionRef.onSnapshot(
    (snap) => {
      let res = []
      snap.docs.forEach((doc) => {
        doc.data().createdAt && res.push({ ...doc.data(), id: doc.id })
      })
      documents.value = res
      error.value = null
    },
    (err) => {
      console.log(err)
      documents.value = null
      error.value = 'unable to fetch data'
    },
  )

  watchEffect((onInvalidate) => {
    onInvalidate(() => {
      unsub()
    })
  })
  return { error, documents }
}

export default getCollection
