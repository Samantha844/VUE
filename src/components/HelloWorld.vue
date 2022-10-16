<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <detalle></detalle>
    <h1 v-if="author.name == 'Samantha'">Si,es correcto!</h1>
    <h1 v-else>No esta otro</h1>

    <!--
      <div v-if="author.name === 'Adan'">A</div>
      <div v-else-if="author.name === 'Samantha'">B</div>
      <div v-else-if="author.name === 'Luis'">C</div>
      <div v-else>No esta presente</div>

      <li v-for="item in author.books" :key="item.id">
        {{ item.id }}{{ item.name }}
      </li>
    -->

    <v-row>
      <b-card-group deck>
        <div v-for="item of listaDisney" :key="item.id">
          <b-card :title="item.name" :imp-src="item.imageUrl"
            img-alt="image"
            img-height="128"
            img-width="128">
            
            <b-card-text>
              <small v-for="(item2,key) in item.tvShows" :key="key">{{item2}}</small>
            </b-card-text>

            <template #footer>
              <b-button ; to="'/info/' + item._id">Ver mas</b-button>
            </template>
            
          </b-card>
        </div>
      </b-card-group>
    </v-row>
  <div>
   
</template>

<script>
//import detalle from "../components/detalle.vue";
export default {
  name: "HelloWorld",
  components: {
    detalle,
  },
  props: {
    msj: String,
  },
  data() {
    return {
      author: {
        name: "John Doe",
        books: [
          { id: 1, name: "Vue 2 - Advanced Guide" },
          { id: 2, name: "Vue 3 - Basic Guide" },
          { id: 3, name: "Vue 4 - The Mistery" },
          ]
        },
        carros: {
          name: null,
          colores: [],
        },

        //////////////////////////Carros////////////////////////
        //listaCarros: [],
        //saludo:'Hola a todos'

        //////////////////////////DISNEY////////////////////////
        listaDisney: [],
        saludo: 'Hola a todos',
      }
    },
      
      created() {
        this.obtenerApi();
      },

    

      //////////////////////////DISNEY////////////////////////
      methods: {
/*
        obtenerAllDisney(){
          let apiURL ='https://api.disney.dev/characters';
          this.items = [];

          this.$http.get(apiURL).then(response => 
          let data = response.data.data;

          data.forEach((element,index)=>{
            if (index +1 <= 25){
              this.items.push(element)
            }
          });
        })
        .catch(e => console.log(e))
        .finally(()=>{
        } 
*/
        obtenerApi() {
          let apiURL = "https://api.disney.dev/characters";
          this.listaDisney = [];

         this.$http.get(apiURL).then((response) => {
              if (response.status == 200) {
                let data = response.data;

                data.forEach((element, index) => {
                  if (index + 1 <= 20) {
                    this.listaDisney.push(element);
                  }
                 });
              }
            })
            .catch((e) => console.log(e))
            .finally(() => console.log("Siempre me ejecuto al final"));
        },
      },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: #42b983;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
