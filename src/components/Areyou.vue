<template>
  <div>
    <section class="idea-section bg-black pb-1 pt-0 pt-md-5 pt-lg-5">
      <div class="container-fluid container-fluid-custom position-relative">
        <div class="banner1">
          <div class="text-center">
            <h3 class="h3 text-light text-center mb-0">
              Are you looking to convert
            </h3>
            <h2 class="h2 text-light pt-2 mb-0 text-uppercase text-center">
              Ideas Into
            </h2>
            <h2 class="h2 text-light text-uppercase text-center">
              Opportunities?
            </h2>
            <h4 class="h4 text-light pt-lg-4 text-center">
              We build an immersive brand!
            </h4>
            <p class="text-gray text-center text-sm-justify para pt-4 text-center">
              The best business relationships start with a simple discussion.
              You might be wondering how we know. With more than 10 years of
              proven experience, we got opportunities to interact with a wide
              range of potential clients worldwide.
            </p>
            <p class="text-gray text-center text-sm-justify para pt-4">
              As a creative branding agency, we consider every instant of
              essential change conceals immense opportunity. That's what makes
              us come up with a powerful medium that drives the future. From
              idea to execution, we provide aesthetic branding experience and
              packaging solutions that enhance your brand and make it scale
              faster and more robust.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="img-section bg-black desk_section. pb-0">
      <div class="container-fluid px-lg-0 container-fluid-custom2">
        <div class="row anime-row">
          <div v-for="(image, index) in portfolioImages" :key="index" class="col-12 col-lg-4 px-1 pt-0 pb-2">
            <div class="img-hover-box">
              <img class="img-fluid w-100 img-hover" :src="image.src" :alt="image.alt" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// In a real project, you would import your images from the assets folder like this:
// import attaFlour from '@/assets/portfolio/Atta_flour_packaging_design.webp';
// import chocolate from '@/assets/portfolio/Chocolate_packaging_design.webp';
// ... and so on for all your images.

// For this demonstration, we'll use an array of objects with placeholder URLs.
// You can replace these with your actual imported images.
const portfolioImages = [
  { src: 'https://placehold.co/600x400/000000/FFF?text=Atta+Flour', alt: 'Atta_flour_packaging_design' },
  { src: 'https://placehold.co/600x400/111111/FFF?text=Chocolate', alt: 'Chocolate_packaging_design' },
  { src: 'https://placehold.co/600x400/222222/FFF?text=Cosmetics', alt: 'Cosmetics_packaging_design' },
  { src: 'https://placehold.co/600x400/333333/FFF?text=Saffron', alt: 'Creative_Saffron_box_packaging_design' },
  { src: 'https://placehold.co/600x400/444444/FFF?text=Dishwash', alt: 'Dishwash_Box_packaging_design' },
  { src: 'https://placehold.co/600x400/555555/FFF?text=Dry+Fruits', alt: 'Dry_fruits_packaging_design' },
  { src: 'https://placehold.co/600x400/666666/FFF?text=Pouch', alt: 'Dry_fruits_Pouch_packaging_design' },
  { src: 'https://placehold.co/600x400/777777/FFF?text=Tin', alt: 'Dry_fruits_Tin_packaging_design' },
  { src: 'https://placehold.co/600x400/888888/FFF?text=Edible+Oil', alt: 'Edible_Oil_packaging_design' },
  { src: 'https://placehold.co/600x400/999999/FFF?text=Frozen+Food', alt: 'Frozen_food_packaging_design' },
  { src: 'https://placehold.co/600x400/AAAAAA/FFF?text=Ghee', alt: 'Ghee_packaging_design' },
  { src: 'https://placehold.co/600x400/BBBBBB/FFF?text=Honey+Jar', alt: 'Honey_Jar_label_design' },
];

// To use your actual, local images, your array would look like this:
/*
const portfolioImages = [
  { src: attaFlour, alt: 'Atta_flour_packaging_design' },
  { src: chocolate, alt: 'Chocolate_packaging_design' },
  // ... etc.
];
*/
</script>

<style scoped>
/* All CSS from your source file is placed here and scoped to this component */
.bg-black {
  background-color: var(--black);
}

.text-gray {
  color: var(--gray);
}

.h2 {
  font-size: var(--heading-lg-h2);
  line-height: 70px;
}

.h3 {
  position: relative;
  padding-top: 1rem;
}

.h3::before {
  position: absolute;
  top: -5px;
  right: 50%;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 5px;
  background: var(--primary);
  content: "";
  transition: .6s linear;
}

.h4 {
  font-size: var(--heading-lg-h4);
  font-weight: 400;
  line-height: 50px;
}

section {
  padding: 3rem 0;
}

.para {
  width: var(--para-lg-w);
  margin: auto;
}

.container-fluid-custom {
  width: 1180px;
  margin: auto;
}

.container-fluid-custom2 {
  max-width: 100%;
}

.img-hover-box {
  overflow: hidden;
}

.img-hover-box img {
  transition: var(--transition);
}

.img-hover-box:hover img {
  transform: scale(1.1);
}

.text-sm-justify {
  text-align: justify;
}

/* Responsive Styles */
@media(max-width:1200px) {
  .container-fluid-custom {
    width: auto;
    margin: auto;
  }
}

@media(max-width:1024px) {

  .h2,
  .h4 {
    line-height: 40px;
  }

  .para {
    width: 80%;
  }

  .container-fluid-custom {
    width: 90%;
  }
}

@media(max-width:768px) {

  .h2,
  .h4 {
    line-height: 40px;
  }

  .para {
    width: 80%;
  }
}

@media(max-width:767px) {
  .h2 {
    font-size: 43px;
    line-height: 45px;
  }

  .h4 {
    font-size: 20px;
    line-height: 22px;
  }

  .para {
    width: 100%;
  }
}
</style>