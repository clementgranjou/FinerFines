<template>
  <div class="fond">
    <menu-component title="Identification"></menu-component>

    <h3 class="accesform"><strong>Accès au formulaire d'inscription du Finer fines</strong></h3>

    <div class="all row">
      <div class="col-md-6 vf">
        <router-link to="/connexioncitoyen" class="btn vri">Je suis Citoyen</router-link>
        <h2 class="btn quatre">Ou</h2>
        <router-link to="/connexionpolice" class="btn vri">Je suis Agent de Police</router-link>
      </div>

      <div class="col-md-6">
        <img src="/assets/images/Policeman illustration.svg" alt="">

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

.all {
  padding: 0 116px;
  text-align: center;
}
.accesform {
 text-align: center;
}

.choisir {
  text-align: left;
  padding: 0 116px;
}

.quatre {
  margin: 0;
  border-top: black;
  border-bottom: black;
  color: black;
}

.vf {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.fond {
  background-color: white;
}
.vri {
  width: 200px;
  color: white;
  border-radius: 50px;
  background-color: #171a64;
}
.vri:hover {
  color: white;
}

/* .ou{
    display: flex;
    justify-content: left;
} */
</style>