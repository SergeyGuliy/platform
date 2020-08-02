<template>
  <div class="slider-wrapper">
    <carousel :items="items" :loop="true" :responsive="responsive" :navText="[prevIcon, nextIcon]">
      <slot></slot>
    </carousel>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  components: {
    carousel
  },
  props: {
    items: Number,
    pullDrag: Boolean,
    responsive: {
      default: () => ({
        0: {
          items: 1,
          nav: false,
          dots: true,
          center: true
        },
        672: {
          items: 2,
          nav: true,
          dotsEach: 1
        },
        1440: {
          items: 3,
          nav: true
        }
      })
    }
  },
  data() {
    return {
      prevIcon: `<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.70992 9.88683L2.82992 6.00683L6.70992 2.12683C6.80251 2.03424 6.87595 1.92433 6.92605 1.80337C6.97616 1.6824 7.00195 1.55276 7.00195 1.42183C7.00195 1.29089 6.97616 1.16125 6.92605 1.04028C6.87595 0.919318 6.80251 0.809407 6.70992 0.716825C6.61734 0.624244 6.50743 0.550804 6.38647 0.500699C6.2655 0.450594 6.13586 0.424805 6.00492 0.424805C5.87399 0.424805 5.74435 0.450594 5.62338 0.500699C5.50242 0.550804 5.39251 0.624244 5.29992 0.716825L0.709925 5.30683C0.617221 5.39934 0.543674 5.50923 0.493492 5.6302C0.443311 5.75117 0.41748 5.88086 0.41748 6.01183C0.41748 6.14279 0.443311 6.27248 0.493492 6.39345C0.543674 6.51442 0.617221 6.62431 0.709925 6.71683L5.29992 11.3068C5.68992 11.6968 6.31992 11.6968 6.70992 11.3068C7.08992 10.9168 7.09992 10.2768 6.70992 9.88683Z" fill="#1D2228"/>
                           </svg>`,
      nextIcon: `<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.29007 9.88683L5.17007 6.00683L1.29007 2.12683C1.19749 2.03424 1.12405 1.92433 1.07394 1.80337C1.02384 1.6824 0.998047 1.55276 0.998047 1.42183C0.998047 1.29089 1.02384 1.16125 1.07394 1.04028C1.12405 0.919318 1.19749 0.809407 1.29007 0.716825C1.38265 0.624244 1.49256 0.550804 1.61352 0.500699C1.73449 0.450594 1.86414 0.424805 1.99507 0.424805C2.126 0.424805 2.25565 0.450594 2.37661 0.500699C2.49757 0.550804 2.60749 0.624244 2.70007 0.716825L7.29007 5.30683C7.68007 5.69683 7.68007 6.32683 7.29007 6.71683L2.70007 11.3068C2.60755 11.3995 2.49767 11.4731 2.37669 11.5233C2.25572 11.5734 2.12604 11.5993 1.99507 11.5993C1.8641 11.5993 1.73442 11.5734 1.61344 11.5233C1.49247 11.4731 1.38258 11.3995 1.29007 11.3068C0.910068 10.9168 0.900068 10.2768 1.29007 9.88683Z" fill="#1D2228"/>
                           </svg>`
    };
  }
};
</script>

<style lang="scss">
.owl {
  &-theme {
    .owl-dots .owl-dot span {
      display: none;
    }
  }

  &-stage-outer {
    padding-bottom: 16px;
  }

  &-item {
    display: flex;
    align-items: stretch;
  }

  &-carousel button.owl-dot {
    max-width: 32px;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background: #ebeff5;
    margin-right: 16px;
    outline: none;

    &:last-child {
      margin-right: 0;
    }

    &.active {
      background: #ffc107;
    }
  }

  &-dots {
    margin: 0 auto;
  }

  &-nav {
    position: absolute;
    right: 10px;
    top: -32px;
    transform: translateY(-100%);
    display: flex;
    .owl-prev,
    .owl-next {
      background: #f5f7fa !important;
      border-radius: 6px;
      width: 38px;
      height: 40px;
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin: 0 5px !important;
      &:hover,
      &:focus {
        background-color: #ebeff5 !important;
      }
    }
  }
}
/*.slider {
        &-wrapper {
            position: relative;
        }
        &-nav {
            position: absolute;
            right: 0;
            bottom: -50px;
            display: flex;
            .owl-prev,
            .owl-next {
                background: #F5F7FA !important;
                border-radius: 6px;
                width: 38px;
                height: 40px;
                display: flex !important;
                align-items: center;
                justify-content: center;

                &:hover,
                &:focus {
                    background-color: #ebeff5 !important;
                }
            }
        }
    }*/
</style>
