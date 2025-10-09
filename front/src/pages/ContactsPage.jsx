import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { contactService } from '../services/contactService'

const ContactsPage = () => {
  const { user, loading, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [contacts, setContacts] = useState([])
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '' })
  const [editingContactId, setEditingContactId] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/login');
    } else if (isAuthenticated) {
      contactService.getAll()
        .then(res => setContacts(res.data))
        .catch(err => setError('Failed to fetch contacts.'))
    }
  }, [user, loading, isAuthenticated, navigate])

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleEditClick = (contact) => {
    setEditingContactId(contact._id)
    setForm({ firstName: contact.firstName, lastName: contact.lastName, phone: contact.phone })
  };

  const handleCancelEdit = () => {
    setEditingContactId(null)
    setForm({ firstName: '', lastName: '', phone: '' })
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      if (editingContactId) {
        const updatedContact = await contactService.update(editingContactId, form)
        setContacts(contacts.map(c => c._id === editingContactId ? updatedContact.data : c))
      } else {
        const res = await contactService.create(form)
        setContacts([...contacts, res.data])
      }
      handleCancelEdit()
    } catch (err) {
      setError(editingContactId ? 'Failed to update contact.' : 'Failed to add contact.');
    }
  }

  const handleDelete = async (id) => {
    try {
      await contactService.remove(id);
      setContacts(contacts.filter(c => c._id !== id))
    } catch (err) {
      setError('Failed to delete contact.')
    }
  }

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <h2>My Contacts</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <h3>{editingContactId ? 'Edit Contact' : 'Add a new contact'}</h3>
      <form onSubmit={handleSubmit}>
        <input name="firstName" value={form.firstName} onChange={handleFormChange} placeholder="First Name" required />
        <input name="lastName" value={form.lastName} onChange={handleFormChange} placeholder="Last Name" required />
        <input name="phone" value={form.phone} onChange={handleFormChange} placeholder="Phone" required />
        <button type="submit">{editingContactId ? 'Update Contact' : 'Add Contact'}</button>
        {editingContactId && <button type="button" onClick={handleCancelEdit} style={{marginLeft: '10px'}}>Cancel</button>}
      </form>

      <h3>Contact List</h3>
      <ul>
        {contacts.map(contact => (
          <li key={contact._id}>
            {contact.firstName} {contact.lastName} - {contact.phone}
            <button onClick={() => handleEditClick(contact)} style={{marginLeft: '10px'}}>Edit</button>
            <button onClick={() => handleDelete(contact._id)} style={{marginLeft: '10px'}}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContactsPage