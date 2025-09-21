import { createClient } from '@supabase/supabase-js'
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)

/**
 * Checks current session and returns true if session is valid.
 * Uses VITE_AUTH_MAX_AGE_MIN from env (minutes). If not set, defaults to 60 minutes.
 */
export async function isSessionValid() {
  try {
    const { data } = await supabase.auth.getSession()
    const session = data?.session
    if (!session) return false
    // Supabase session may include expires_at (unix seconds) or use access_token etc.
    const maxAgeMin = parseInt(import.meta.env.VITE_AUTH_MAX_AGE_MIN || '60', 10)
    const createdAt = session?.created_at ? (new Date(session.created_at)).getTime() : null
    if (session?.expires_at) {
      // expires_at is unix timestamp in seconds
      const expiresMs = parseInt(session.expires_at, 10) * 1000
      return Date.now() < expiresMs
    }
    if (createdAt) {
      return Date.now() - createdAt < maxAgeMin * 60 * 1000
    }
    return true
  } catch (e) {
    console.warn('isSessionValid error', e)
    return false
  }
}
