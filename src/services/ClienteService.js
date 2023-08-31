import api from '../lib/axios'


export default {
    obtenerClientes() {
        return api.get('/clientes')
    },
    obtenerCliente(id) {
        return api.get('/clientes/' + id)
    },
    agregarClientes(data) {
        return api.post('/clientes', data)
    },
    editarCliente(id, data) {
        return api.patch('/clientes/' + id, data)
    },
    changeEstado(id, data) {
        return api.patch('/clientes/' + id, data)
    },
    eliminarCliente(id) {
        return api.delete('/clientes/' + id)
    }
}