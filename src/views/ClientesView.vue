<script setup>
    import { onMounted, ref, computed } from 'vue'
    
</script>

<template>
    <div>
        <div class="flex justify-end">
            <!-- <RouterLink to="agregar-cliente">
                Agregar Cliente
            </RouterLink> -->
            <button>Agregar Cliente</button>
        </div>

        <Heading></Heading>

        
        <div class="flow-root mx-auto  mt-10 p-5 bg-white shadow">
            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table class="min-w-full divide-y divide-gray-300">
                        <thead>
                        <tr>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Nombre</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Empresa</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Estado</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Acciones</th>
                        </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <p class="text-center mt-10">No Hay Clientes</p>
    </div>
</template>
