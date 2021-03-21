<template>
  <div class="fond">
    <menu-component title="Connexion"></menu-component>
    <h3 class="police">Fonctionnaire de police ou gendarme :</h3>
    <div class="tout row">
      <div class="col-md-4 enhaut">
       
         <img class="photo" src="/assets/images/Policeman illustration.svg" alt="">
        
      </div>
      <div class="col-md-4 aumilieu">
        <form class="formulaire">

          <div class="formulaire-row">

            <div class="form-group">
              <label for="nom">Nom</label>
              <input id="nom" class="form-control mr-sm-2" type="text" placeholder="Nom">
            </div>
            <div class="form-group">
              <label for="prenom">Prénom</label>
              <input id="prenom" class="form-control mr-sm-2" type="text" placeholder="Prénom">
            </div>
          </div>
          <div class="form-group">
            <label for="Email">Email</label>
            <input id="Email" class="form-control mr-sm-2" type="text" placeholder="Email">
          </div>
          <div class="form-group">
            <label for="Numéro RIO">Numéro RIO</label>
            <input id="Numéro RIO" class="form-control mr-sm-2" type="text" placeholder="Numéro RIO">
          </div>
          <div class="form-group">
            <label for="Ville de résidence">Ville de résidence</label>
            <input id="Ville de résidence" class="form-control mr-sm-2" type="text" placeholder="Ville de résidence">
          </div>
          <div class="form-group">
            <label for="Numéro de téléphone">Numéro de téléphone</label>
            <input id="Numéro de téléphone" class="form-control mr-sm-2" type="text" placeholder="Numéro de téléphone">
          </div>
          <button type="submit" class="btn btn-outline-dark valid">Valider</button>
        </form>
      </div>
      <div class="col-md-4 enbas">
           <img class="photo1" src="/assets/images/Capture1.PNG" alt="">
      </div>
    </div>
    <footer-component></footer-component>

  </div>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  },
};
</script>

<style lang="scss">
.fond {
  background-color: white;
}
.tout{
  display: flex;
}
input {
  border-radius: 0;
  outline: none;
  border: solid 1px gray;
}


.formulaire {
  padding: 50px;
  margin: auto;
  max-width: 375px;
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

.photo1{

  max-height: 200px;
}
.valid {
  color: white;
  background-color: #171a64;
  margin-left: 203px;
 

}

.police {
  margin-left: 116px;
}
.enhaut{

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

}

.enbas{

  display: flex;
  justify-content:flex-start;
  align-content: center;

}

.photo{

  max-width: 300px;
}
</style>
