import { projectAuth } from '@/firebase/config'
import { ref } from 'vue'

const error = ref(null)

const signup = async (displayName, email, password) => {
  error.value = null
  try {
    const res = await projectAuth.createUserWithEmailAndPassword(email, password)
    if (!res) {
      throw new error('Could not complete signup')
    }
    await res.user.updateProfile({ displayName })
    error.value = null

    return res
  } catch (err) {
    error.value = err.message
  }
}

const useSignup = () => {
  return { signup, error }
}

export default useSignup
