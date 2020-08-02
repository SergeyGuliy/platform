<template>
  <div class="builder-tabs-block block">
    <div class="learning-box__body-content">
      <education-header-container title="Обучение Платформы">
        <template #description>
          В этом курсе ты узнаешь в чем суть платформы, какие преимущества платформы и все о работе с платформой
        </template>
        <template #button>
          <v-button>Начать обучение</v-button>
        </template>
      </education-header-container>
    </div>
    <div class="curriculum__body">
      <education-accordion :options="accordion" />
    </div>
  </div>
</template>

<script>
import EducationAccordion from "./EducationAccordion";
import EducationHeaderContainer from "../../updated/modules/education/components/LearningPageHeader";
import VButton from "../../updated/common/components/VButton";
export default {
  name: "EducationPlatform",
  components: {
    EducationAccordion,
    EducationHeaderContainer,
    VButton
  },
  props: ["accordion"]
};
</script>
