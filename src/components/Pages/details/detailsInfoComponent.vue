<template>
  <div class="container">
  <div class="all_details">
   <div class="info">
      <div class="row">
        <div class="col-lg-5 col-sm-12">
          <div class="item titles">
            <p>Subway Surfers</p>
            <p>SYBO Games</p>
            <p>300k Downloads</p>
          </div>
        </div>
        <div class="col-lg-7 col-sm-12">
        <div class="item banner_image">
        banner_image</div>
        </div>
      </div>
    </div>
    <div class="more_details">
      <p>DASH as fast as you can!</p>
      <p>DODGE the oncoming trains!</p>
      <p>
        Help Jake, Tricky & Fresh escape from the grumpy Inspector and his dog.
      </p>
      <div class="rates">
      <p><i class="bi bi-star-fill"></i> Grind trains with your cool crew!</p>
      <p><i class="bi bi-star-fill"></i> Colorful and vivid HD graphics!</p>
      <p><i class="bi bi-star-fill"></i> Hoverboard Surfing!</p>
      <p><i class="bi bi-star-fill"></i> Paint powered jetpack!</p>
      <p><i class="bi bi-star-fill"></i> Lightning fast swipe acrobatics!</p>
      <p><i class="bi bi-star-fill"></i> Challenge and help your friends!</p>
      </div>
      
    </div>
    <p class="moreBtn"> read more </p>
  </div>
   
  </div>
</template>

<script>
export default {
  name: "detailsInfoComponent",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Tajawal&display=swap");
.all_details
{
margin-top: 20px;
background-color: white;
padding: 20px;
border-radius: 4px;}

.all_details .titles p:nth-of-type(1)
{
font-size: 18px;
}

.all_details .titles p:nth-of-type(2)
{
font-size: 14.4px;
}
.all_details .titles p:nth-of-type(3)
{
font-size: 12px;
}
.banner_image
{
font-size: 20px;}
.more_details {
  font-family: "Tajawal", sans-serif;
  font-size: 14px;
}

.more_details  .rates
{
margin: 12px 0;}
.more_details  .rates p {
margin-bottom: 0.5rem
};
;
.more_details i
{
 font-size: 12px;
}
.moreBtn
{
color: #572589;
text-transform: capitalize;
font-size: 12px;
}

@media (max-width: 320px)
{
}
</style>
