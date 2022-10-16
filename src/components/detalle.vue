<template lang="">
    <div>
        <h1>Detalle {{this.idObjeto}} <b-button to="/" class="btn btn-warning"> Regresar</b-button></h1><br>

    <input v-model="objeto.name" placeholder="editeme" ><br>
    <b-card
      no-body
      class="overflow-hidden"
      style="max-width: 540px; margin: 0 auto">

      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src="objeto?.imageUrl" alt="Image" class="rounded-0"></b-card-img>
        </b-col>

        <b-col md="6">
          <b-card-body :title="objeto?.name">
            <b-list-group flush>
              <b-list-group-item v-for="(value,index) in objeto?.videoGames" :key="index">{{value}}</b-list-group-item>
          </b-card-body>
        </b-col>
      <b-row>
    </b-card>

    <br><br>

    
  </div>
</template>

<script>
export default {
  name: "detalleInfo",
  props: {
    films:[],
    games:[]
  },

  data() {
    return {
      idObjeto: Number,
      objeto: null,
    };
  },

  created() {
    this.idObjeto = this.$route.params.id;
    this.obtenerDetalle();
  },
  
  methods: {
    obtenerDetalle() {
      this.$http
        .get("https://jsonplaceholder.typicode.com/photos/" + this.idObjeto)
        .then((response) => {
          this.objeto = response.data;

          console.log(response);
        });
    },
  },
};
</script>

<style>
</style>