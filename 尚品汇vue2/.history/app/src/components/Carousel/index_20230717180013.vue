<template>
  <div class="swiper-container" ref="floor1Swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(carousel,index) in list.carouselList" :key="carousel.id">
                    <img :src="carousel.imgUrl">
                </div>
            <!-- <div class="swiper-slide">
                <img src="./images/floor-1-b02.png">
            </div>
            <div class="swiper-slide">
                <img src="./images/floor-1-b03.png"> -->
            <!-- </div> -->
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        </div>
</template>

<script>
export default {
    name:'Carous'
}
</script>

<style>

</style>
