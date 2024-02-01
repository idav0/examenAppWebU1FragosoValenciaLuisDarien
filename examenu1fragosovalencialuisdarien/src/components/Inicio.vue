<template lang="">
    <div>
        <b-link :to="{ name: 'formulario' }">Siguiente</b-link>
        <b-breadcrumb :items="items"></b-breadcrumb>

        <hr>

                    
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
                    active : true
                },
                
            ]
        }
    }
}
</script>
<style lang="">
    
</style>