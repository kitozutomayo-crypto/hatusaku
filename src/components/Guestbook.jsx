import { useEffect, useState } from 'react'
import { supabase } from '../supabase'
import './Guestbook.css'

function Guestbook() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

const loadMessages = async () => {
  setError(null)

  const { data, error: supabaseError } = await supabase
    .from('messages')
    .select('*')
    .order('created_at', { ascending: false })

  if (supabaseError) {
    console.error(supabaseError)
    setError('留言を読み込めませんでした。しばらくしてから、もう一度お試しください。')
    return
  }

  setMessages(data || [])
}

  const submitMessage = async (e) => {
    e.preventDefault()

    if (!name.trim() || !message.trim()) return

    setLoading(true)

    const { error } = await supabase
      .from('messages')
      .insert({
        name: name.trim().slice(0, 40),
        message: message.trim().slice(0, 300),
      })

    if (error) {
      console.error(error)
    } else {
      setName('')
      setMessage('')
      await loadMessages()
    }

    setLoading(false)
  }

  useEffect(() => {
    loadMessages()
  }, [])

  return (
    <section className="guestbook" id="guestbook">
      <div className="guestbook-container">
        <p className="guestbook-label">GUESTBOOK・ゲストブック</p>
        <h2>leave a message！・よかったら、気軽にメッセージを残してください！</h2>

        <form className="guestbook-form" onSubmit={submitMessage}>
          <input
            type="text"
            placeholder="Your name・お名前"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={40}
          />

          <textarea
            placeholder="Your message・メッセージ"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={300}
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send message・送信'}
          </button>
        </form>

        <div className="guestbook-list">
         {error && (
  <div className="guestbook-error">
    <span className="guestbook-error-icon">!</span>

    <div>
      <strong>Guestbook is temporarily unavailable.</strong>
      <p>{error}</p>

      <button type="button" onClick={loadMessages}>
        もう一度読み込む
      </button>
    </div>
  </div>
)}
          {messages.map((item) => (
            <article className="guestbook-item" key={item.id}>
              <strong>{item.name}</strong>
              <p>{item.message}</p>
              <time>
                {new Date(item.created_at).toLocaleString()}
              </time>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Guestbook