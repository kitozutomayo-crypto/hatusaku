import { useEffect, useState } from 'react'
import { supabase } from '../supabase'
import './Guestbook.css'

function Guestbook() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)

  const loadMessages = async () => {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error(error)
      return
    }

    setMessages(data)
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
        <p className="guestbook-label">GUESTBOOK</p>
        <h2>Leave a message.</h2>

        <form className="guestbook-form" onSubmit={submitMessage}>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={40}
          />

          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={300}
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send message'}
          </button>
        </form>

        <div className="guestbook-list">
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