<script setup>
    import { onMounted, reactive, ref } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import RouterLink from '../components/UI/RouterLink.vue'
    import Heading from '../components/UI/Heading.vue'
    import ClienteService from '../services/ClienteService'
    
    defineProps({
        titulo: {
            type: String
        }
    })

    let route = useRoute()
    let router = useRouter()
    let { id } = route.params
    //Para rellenar el formulario con los datos obtenidos
    let formData = reactive({})

    onMounted(() => {
        ClienteService.obtenerCliente(id)
            .then(({data}) => {
                Object.assign(formData, data)
            })
            .catch(error => console.log(error))
    })

    let handleSubmit = (data) => {
        ClienteService.editarCliente(id, data)
            .then(resp => router.push({ name: 'listado-clientes' }))
            .catch(error => console.log(error))
    }
</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="listado-clientes">Volver</RouterLink>
        </div>

        <Heading>{{ titulo }}</Heading>

        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py-20 px-6">
                <FormKit type="form" submit-label="Editar Cliente" @submit="handleSubmit">
                    <FormKit type="text" label="Nombre" name="nombre" placeholder="Nombre de Cliente" validation="required" :validation-messages="{required: 'El nombre es obligatorio'}" v-model="formData.nombre"/>

                    <FormKit type="text" label="Apellido" name="apellido" placeholder="Apellido de Cliente" validation="required" :validation-messages="{required: 'El apellido es obligatorio'}" v-model="formData.apellido"/>

                    <FormKit type="email" label="Email" name="email" placeholder="Email de Cliente" validation="required|email" :validation-messages="{required: 'El email es obligatorio', email: 'Email no válido'}" v-model="formData.email"/>

                    <FormKit type="text" label="Teléfono" name="telefono" placeholder="Teléfono: XXX XX XX XX" validation="required|*matches:/^[0-9]{3} [0-9]{2} [0-9]{2} [0-9]{2}$/" :validation-messages="{required: 'El teléfono es obligatorio', matches: 'El formato no es válido'}" v-model="formData.telefono"/>

                    <FormKit type="text" name="empresa" label="Empresa" placeholder="Empresa de Cliente" v-model="formData.empresa"/>

                    <FormKit type="text" name="puesto" label="Puesto" placeholder="Puesto de Cliente" v-model="formData.puesto"/>
                </FormKit>
            </div>
        </div>
    </div>
</template>

<style>
    .formkit-wrapper {
        max-width: 100%;
    }
</style>