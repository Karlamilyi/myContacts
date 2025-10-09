import api from './api'

const getAll = () => {
  return api.get('/contacts')
}

const create = (contactData) => {
  return api.post('/contacts', contactData)
}

const remove = (id) => {
  return api.delete(`/contacts/${id}`)
}

const update = (id, contactData) => {
   return api.patch(`/contacts/${id}`, contactData)
}

export const contactService = {
  getAll,
  create,
  remove,
  update
}