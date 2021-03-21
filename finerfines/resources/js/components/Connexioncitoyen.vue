<template>
  <div class="fond">
    <menu-component title="Connexion"></menu-component>

    <h3 class="usager">Usager de la route :</h3>
    <div class="all row">
      <div class="col-md-4 haut">
        <img class="photo4" src="/assets/images/Capture11 (1).PNG" alt="">
      </div>

      <div class="col-md-4 milieu">
        <form class="formulaire">

          <div class="formulaire-row">

            <div class="form-group">
              <label for="nom">Nom</label>
              <!-- <input id="nom" type="text" placeholder="Nom"> -->
              <input id="nom" v-model="nom" class="form-control mr-sm-2" type="text" placeholder="Nom">
            </div>
            <div class="form-group">
              <label for="prenom">Prénom</label>
              <input id="prenom" v-model="prenom" class="form-control mr-sm-2" type="text" placeholder="Prénom">
            </div>
          </div>
          <div class="form-group">
            <label for="Numéro du véhicule">Numéro du véhicule</label>
            <input id="Numéro du véhicule" v-model="numero" class="form-control mr-sm-2" type="text" placeholder="Numéro du véhicule">
          </div>
          <div class="form-group">
            <label for="Numéro NEPH">Numéro NEPH (12 caractères)</label>
            <input id="Numéro NEPH" v-model="neph" class="form-control mr-sm-2" type="text" placeholder="Numéro NEPH">
          </div>
          <div class="form-group">
            <label for="Plaque d'immatriculation">Plaque d'immatriculation</label>
            <input id="Plaque d'immatriculation" v-model="immatriculation" class="form-control mr-sm-2" type="text" placeholder="Ex: FR-546-YH">
          </div>
          <div class="form-group">
            <label for="Email">Email</label>
            <input id="Email" v-model="email" class="form-control mr-sm-2" type="text" placeholder="Email">
          </div>
          <div class="form-group">
            <label for="Description de la contestation">Description de la contestation</label>
            <input id="Description de la contestation" v-model="descript" class="form-control mr-sm-2" type="text" placeholder="Description">
          </div>

          <a class="btn btn-outline-dark blonv" @click="submit" type="submit">Valider</a>

        </form>
      </div>
      <div class="col-md-4 bas">
        <img class="photo5" src="/assets/images/Capture10.PNG" alt="">
      </div>
    </div>

    <footer-component></footer-component>

  </div>
</template>

<script>
import axios from "axios";
  import { required, minLength, maxLenght, between, email } from 'vuelidate/lib/validators';

axios.defaults.headers.common["Authorization"] = "Basic ZWpjZjZlZG1IN1g3MVhkVlVlMjI=";

export default {
  data() {
    return {
      nom: "",
      prenom: "",
      numero: "",
      immatriculation: "",
      neph: "",
      ville: "",
      email: "",
      descript: "",
    };
  },
  validations: {
    nom: {
      required,
    },
      prenom: {
      required,
    },
      numero: {
      required,
    },
      immatriculation: {
      required,
      minLength: minLength(9),
      maxLength: maxLength(9)
    },
      neph: {
      required,
      minLength: minLength(12),
      maxLength: maxLength(12)
    },
      ville: {
      required,
    },
    email: {
      required,
      email
    },
    description: {
      required,
      minLength: minLength(100)
    }
  },


  mounted() {},

  methods: {
    submit() {
      axios
        .post("https://finerfines2.freshdesk.com/api/v2/tickets",
          {
            'name':this.nom,
            "phone" : this.telephone,
            "subject" : this.immatriculation,
            "status" : 2,
            "priority" : 2,
            "description" : this.descript 
          }
        )
        .catch((error)=>(console.log(error)))
    },
  },
};
</script>

<style lang="scss">
.fond {
  background-color: white;
}

input {
  border-radius: 0;
  outline: none;
}
.formulaire {
  padding: 50px;
  margin: auto;
  max-width: 450px;
  .formulaire-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .form-group {
    display: flex;
    flex-direction: column;
  }
}
.blonv {
  color: white;
  background-color: #171a64;
  margin-left: 203px;
}
.usager {
  margin-left: 116px;
}
label {
  text-align: left;
}

.photo4 {
  max-width: 200px;
  margin-bottom: 30px;
  border-radius: 35px;
}

.haut {
  align-items: flex-end;
  display: flex;
  justify-content: center;
}

.photo5 {
  max-width: 250px;
}

// .photo4{
//     width: 200px;
// height: 200px;
// position: fixed;
// left:1320px; top:200px;
// border-radius: 20px;
// }

// .photo5 {

//     width: 100px;
// height: 100px;
// position: fixed;
// left:118px; top:450px;
// }
</style>
