<template>
  <div class="learning-box">
    <div class="learning-box__body">
      <div class="learning-box__body-head-wrapper">
        <div class="learning-box__body-head">
          <div class="learning-box__body-head-title">Обучение</div>
          <div class="platform-tabs-wrapper">
            <v-tabs :options="tabs" v-model="tab" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const TAB_PLATFORM = "educationPlatform";
const TAB_COMMAND = "educationTeam";
const TAB_COURSES = "educationAllCourses";
export default {
  name: "Education",
  data() {
    return {
      TAB_PLATFORM,
      TAB_COMMAND,
      TAB_COURSES,
      tab: TAB_PLATFORM,
      tabs: [
        { label: "Платформа", value: TAB_PLATFORM },
        { label: "Командные", value: TAB_COMMAND },
        { label: "Все курсы", value: TAB_COURSES }
      ],
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

<style scoped></style>
