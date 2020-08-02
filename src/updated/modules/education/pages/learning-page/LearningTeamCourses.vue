<template>
  <div class="builder-tabs-block block">
    <div class="learning-box__body-content">
      <learning-page-header :header-data="headerData" @click="$router.push({ name: educationCourse })">
        <template #video>
          <video src="" poster="../../../../../assets/images/base-photo3.png" controls></video>
        </template>
      </learning-page-header>
    </div>
    <div class="curriculum__body">
      <education-accordion :options="accordion" />
    </div>
  </div>
</template>

<script>
import EducationAccordion from "../../../../../components/education/EducationAccordion";
import LearningPageHeader from "../../components/LearningPageHeader";
import { educationCourse } from "../../services/routes/education-courses-routes-name";

export default {
  name: "EducationCommand",
  components: {
    EducationAccordion,
    LearningPageHeader
  },
  data() {
    return {
      educationCourse,
      headerData: {
        title: "Командное обучение",
        subTitle: "Здесь представлены учебные материалы для вашей команды",
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
