<template>
  <div class="builder-tabs-block block">
    <div class="learning-box__body-content">
      <education-header-container title="Командное Обучение">
        <template #description>
          Здесь представлены учебные материалы для вашей команды
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
  name: "EducationCommand",
  components: {
    EducationAccordion,
    EducationHeaderContainer,
    VButton
  },
  props: ["accordion"]
};
</script>
