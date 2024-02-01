<template lang="">
    <div>
        <b-link :to="{ name: 'formulario' }">Atras</b-link>
        <b-breadcrumb :items="items"></b-breadcrumb>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
                {
                    text: 'Inicio',
                    href: '#',
                    to : {name: 'inicio'},
                },
                {
                    text: 'Formulario',
                    href: '#',
                    to : {name: 'formulario'},
                },
                {
                    text: 'Tabla Paginada',
                    href: '#',
                    to : {name: 'tablaPaginada'},
                    active : true
                },
                
            ]
        }
    }    
}
</script>
<style lang="">
    
</style>