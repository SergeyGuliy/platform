<template>
  <div>
    <div class="content-course-box__add-materials" v-if="materials.videoData.video">
      <VideoPlayer :videoData="materials.videoData" :show-key="1" />
    </div>
    <DescriptionComponent v-if="materials.description" :description="materials.description" @emitData="emitData" />
    <div class="content-course-box__add-materials " v-if="materials.resources.length">
      <p>Files</p>
      <div class="sticks">
        <div class="stick" v-for="(name, index) of materials.resources" :key="index">
          <Stick :config="{ name, index, fillerId }" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Stick from "../../../components/Stick";
import VideoPlayer from "../../../components/VideoPlayer";
import DescriptionComponent from "./DescriptionComponent";

export default {
  name: "MaterialFilledComponent",
  props: ["materials", "fillerId"],
  components: {
    Stick,
    VideoPlayer,
    DescriptionComponent
  },
  methods: {
    emitData(data) {
      this.$emit("emitData", data);
    }
  }
};
</script>

<style lang="scss" scoped>
.sticks {
  width: 320px;

  .stick {
    margin-bottom: 10px;
  }
}
</style>
