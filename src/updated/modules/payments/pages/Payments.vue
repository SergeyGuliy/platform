<template>
  <div id="Payments">
    <Forward :action="toggleComponent" />
    <component :is="activeComponent"></component>
    <!--    <InfoPage />-->
  </div>
</template>

<script>
export default {
  name: "Payments",
  components: {
    InfoPage: () => import("../components/InfoPage"),
    InputPage: () => import("../components/InputPage"),
    Forward: () => import("../components/UI/Forward")
  },
  data() {
    return {
      activeComponent: "InputPage"
    };
  },
  methods: {
    toggleComponent() {
      console.log("TOGGLE");
      if (this.activeComponent === "InfoPage") {
        this.activeComponent = "InputPage";
      } else {
        this.activeComponent = "InfoPage";
      }
    }
  }
};
</script>

<style lang="scss">
#Payments {
  font-family: "Roboto", sans-serif;
  padding: 48px 32px 58px;
  .title {
    font-weight: bold;
    font-size: 28px;
    line-height: 40px;
    color: #1d2228;
    margin-bottom: 15px;
  }
  .subtitle {
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #1d2228;
    margin-bottom: 5px;
  }
  .text {
    font-size: 14px;
    line-height: 20px;
    color: #58606e;
  }
}
</style>
