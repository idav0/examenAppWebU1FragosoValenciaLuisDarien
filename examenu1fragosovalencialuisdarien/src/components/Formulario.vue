<template lang="">
    <div>
        <b-link :to="{ name: 'inicio' }">Atras _</b-link>
        <b-link :to="{ name: 'tablaPaginada' }">_ Siguiente</b-link>
        <b-breadcrumb :items="items"></b-breadcrumb>

        <hr>

        <b-container>

            <b-form @submit.prevent="submitForm" >
                <b-form-group label="Marca:" label-for="marca" style="margin-bottom: 15px;">
                    <b-form-input v-model="form.marca" id="marca" placeholder="Marca"
                        :state="validarMarca()"></b-form-input>
                </b-form-group>

                <b-form-group label="Modelo:" label-for="modelo" style="margin-bottom: 15px;">
                    <b-form-input v-model="form.modelo" id="modelo" placeholder="Modelo"
                        :state="validarModelo()"></b-form-input>
                </b-form-group>

                <b-form-group label="Año:" label-for="anio" style="margin-bottom: 15px;">
                    <b-form-input v-model="form.anio" id="anio" placeholder="Año" type="number"
                        :state="validarAnio()"></b-form-input>
                </b-form-group>

                <b-form-group label="Número de serie:" label-for="numSerie" style="margin-bottom: 15px;">
                    <b-form-input v-model="form.numSerie" id="numSerie" placeholder="Número de serie"
                        :state="validarNumSerie()"></b-form-input>
                </b-form-group>


                <b-button type="submit" variant="dark" style="width: 100%;">Enviar</b-button>
            </b-form>

            
  </b-container>


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
                    to: { name: 'inicio' },
                },
                {
                    text: 'Formulario',
                    href: '#',
                    to: { name: 'formulario' },
                    active: true
                },

            ],
            form: {
                marca: '',
                modelo: '',
                anio: '',
                numSerie: '',
            }
        }
    },
    methods: {
        validarMarca() {
            //alfanumericos sin signos 
            const regexMarca = /^[A-Za-z0-9\s]+$/;
            return regexMarca.test(this.marca);
        },
        validarModelo() {
            //alfanumericos sin signos 
            const regexModelo = /^[A-Za-z0-9\s]+$/;
            return regexModelo.test(this.modelo);
        },
        validarAnio() {
            //no puede ser mayor al actual
            const anioActual = new Date().getFullYear();
            return this.anio <= anioActual ? true : false;
        },
        validarNumSerie() {
            //El número de serie se debe ver de la siguiente manera donde las X son letras y los 0 números: XXXX000-00XX 
            const regexNumSerie = /^[A-Za-z]{4}\d{3}-\d{2}[A-Za-z]{2}$/;
            return regexNumSerie.test(this.numSerie);
        },
         async submitForm () {
            if (
                this.validarMarca() &&
                this.validarModelo() &&
                this.validarAnio() &&
                this.validarNumSerie()
            ) {
                console.log("Formulario válido. Enviar datos...");
            } else {
                console.log(this.form.marca)
                const json = JSON.stringify(this.form);
                console.log(json)
                const options = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: json
                };

                await fetch('http://localhost:8080/api/vehiculos', options)
                    .then(response => response.json())
                    .then(response => console.log(response))
                    .catch(err => console.error(err));
            }
        },
    }
}
</script>
<style lang="">
    
</style>


