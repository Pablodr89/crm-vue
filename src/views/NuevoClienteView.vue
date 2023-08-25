<script setup>
    
</script>

<template>
    <div>
        <div class="flex justify-end">
            <!-- <RouterLink 
                to="listado-clientes"
            >
                Volver
            </RouterLink> -->
            <button>Volver</button>
        </div>

        <Heading></Heading>

        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py-20 px-6">
                <FormKit
                    type="form"
                    submit-label="Agregar Cliente"
                >
                    <FormKit 
                        type="text"
                        label="Nombre"
                        name="nombre"
                        placeholder="Nombre de Cliente"
                    />

                    <FormKit 
                        type="text"
                        label="Apellido"
                        name="apellido"
                        placeholder="Apellido de Cliente"
                    />

                    <FormKit 
                        type="text"
                        label="Email"
                        name="email"
                        placeholder="Email de Cliente"
                    />

                    <FormKit 
                        type="text"
                        label="Teléfono"
                        name="telefono"
                        placeholder="Teléfono: XXX-XXX-XXXX"
                        
                    />

                    <FormKit 
                        type="text"
                        name="empresa"
                        label="Empresa"
                        placeholder="Empresa de Cliente"
                    />

                    <FormKit 
                        type="text"
                        name="puesto"
                        label="Puesto"
                        placeholder="Puesto de Cliente"
                    />
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