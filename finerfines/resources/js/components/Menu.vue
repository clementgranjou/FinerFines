<template>
  <div class="fond">
    <div class="menubar">
      <router-link to="/"><img class="logo" src="/assets/images/Rfrancaise.png" alt="on ne néglige pas les handicapés"></router-link>
      <h2 class="title"><strong>{{ title }}</strong></h2>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Chercher" aria-label="Search">
        <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Chercher</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  mounted() {
    console.log("Component mounted.");
  },
};
</script>

<style lang="scss">
.logo {
  width: 150px;
}

.menubar{

    display: flex;
    justify-content: space-between;
    padding: 0 100px;
    border-bottom: solid 0.5px #F0F0F3;
    margin-bottom: 30px;
    
}
.fond{
    background-color: white;
}
.title{

    margin-top: 50px;
}
</style>
