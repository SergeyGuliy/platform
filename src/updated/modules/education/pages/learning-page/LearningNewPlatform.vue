<template>
  <div class="builder-tabs-block block" id="">
    <SectionBlock> </SectionBlock>
  </div>
</template>

<script>
import SectionBlock from "../../components/paltform-new/SectionBlock";
export default {
  name: "LearningNewPlatform",
  components: {
    SectionBlock
  },
  data() {
    return {
      headerData: {
        title: "Обучение Платформы",
        subTitle:
          "В этом курсе ты узнаеш в чем суть платформы, какие преимущества платформы и все о работе с платформой",
        buttonText: "Начать обучение"
      },
      accordion: {
        title: "Учебный план",
        subtitle: "Уроков (12); Тестов (2); Всего (7 ч., 18 мин.)",
        items: [
          {
            title: "О платформе",
            quantity: "2 урока",
            duration: "03:36",
            childs: [
              {
                number: 1,
                title: "Что такое платформа?",
                subtitle: "Video - 02:36 min.",
                icon: "ok-yellow"
              },
              {
                number: 2,
                title: "Introduction to the Course",
                subtitle: "Video - 02:36 min.",
                icon: "load"
              }
            ]
          },
          {
            title: "70 балов",
            quantity: "8 уроков",
            duration: "03:36",
            childs: [
              {
                number: 1,
                title: "Что такое платформа?",
                subtitle: "Video - 02:36 min.",
                icon: "ok-yellow"
              },
              {
                number: 2,
                title: "Introduction to the Course",
                subtitle: "Video - 02:36 min.",
                icon: "load"
              }
            ]
          },
          {
            title: "Работа в VK",
            quantity: "8 уроков",
            duration: "03:36",
            childs: [
              {
                number: 1,
                title: "Что такое платформа?",
                subtitle: "Video - 02:36 min.",
                icon: "ok-yellow"
              },
              {
                number: 2,
                title: "Introduction to the Course",
                subtitle: "Video - 02:36 min.",
                icon: "load"
              }
            ]
          },
          {
            title: "Работа в Instagram",
            quantity: "8 уроков",
            duration: "03:36",
            childs: [
              {
                number: 1,
                title: "Что такое платформа?",
                subtitle: "Video - 02:36 min.",
                icon: "ok-yellow"
              },
              {
                number: 2,
                title: "Introduction to the Course",
                subtitle: "Video - 02:36 min.",
                icon: "load"
              }
            ]
          },
          {
            title: "Работа в Facebook",
            quantity: "8 уроков",
            duration: "03:36",
            childs: [
              {
                number: 1,
                title: "Что такое платформа?",
                subtitle: "Video - 02:36 min.",
                icon: "ok-yellow"
              },
              {
                number: 2,
                title: "Introduction to the Course",
                subtitle: "Video - 02:36 min.",
                icon: "load"
              }
            ]
          },
          {
            title: "Звонок",
            quantity: "8 уроков",
            duration: "03:36",
            locked: true,
            childs: [
              {
                number: 1,
                title: "Что такое платформа?",
                subtitle: "Video - 02:36 min.",
                icon: "ok-yellow"
              },
              {
                number: 2,
                title: "Introduction to the Course",
                subtitle: "Video - 02:36 min.",
                icon: "load"
              }
            ]
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss">
#LearningNewPlatform {
}
</style>
