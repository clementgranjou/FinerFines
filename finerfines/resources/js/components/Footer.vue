<template>
  <div class="footercomp">

    <img class="image" src="/assets/images/Gouv.png" alt="logo gouvernement Francais">

    <ul class="liste1">
      <li><a href="">elysee.fr</a></li>
      <li><a href="">service-public.fr</a></li>
      <li><a href="">legifrance.gouv.fr</a></li>
      <li><a href="">data.gouv.fr</a></li>
      <li><a href="">france.fr</a></li>
    </ul>

  </div>

</template>

<script>
export default {};
</script>

<style >
.footercomp {
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: solid 0.5px #f0f0f3;
  padding: 0 116px;
}

.liste1 {
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  color: black;
}
.liste1 a:hover{

  text-decoration: none !important;
}
.liste1 li {
  color: black;
  text-decoration: none;
  padding: 0 30px;
}
.liste1 a{
  color: black;

}


.image {
  width: 150px;
  margin-bottom: 22px;
  margin-top: 22px;
}
</style>