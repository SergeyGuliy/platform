<template>
  <div class="course-open__content">
    <component :is="courseContentComponent" :course-slug="courseSlug"></component>
    <div class="open__content-tabs-wrapper">
      <div class="learn-content-tabs">
        <v-tabs :options="tabsList" v-model="tab" @click="actionHandler" />
      </div>
      <div class="learn-plan-small learn-plan-small-wrapper desk2">
        <div class="learn-course__content-text">
          <h5>Учебный план</h5>
        </div>
        <div class="curriculum__body">
          <div class="curriculum__list">
            <div class="curriculum__item">
              <div class="curriculum__item-title">
                <div class="theme-courses">Introduction to the Course</div>
                <svg class="svg-icon arrow-down">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-down"></use>
                </svg>
              </div>
              <div class="curriculum__item-content">
                <div class="lessons studied">
                  <div class="number-lessons">1</div>
                  <div class="theme-lessons">Introduction to the Course<br /><span>Article - 02:36 min.</span></div>
                  <svg class="svg-icon icon-load">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-load"></use>
                  </svg>
                </div>
                <div class="lessons">
                  <div class="number-lessons">2</div>
                  <div class="theme-lessons">Using the Exercise Files<br /><span>Video - 02:36 min.</span></div>
                  <svg class="svg-icon ok-yellow">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ok-yellow"></use>
                  </svg>
                </div>
                <div class="lessons">
                  <div class="number-lessons">3</div>
                  <div class="theme-lessons">Using the Exercise Files<br /><span>Test</span></div>
                </div>
              </div>
            </div>
            <!--    <div class="curriculum__item">
                            <div class="curriculum__item-title">
                                <div class="theme-courses">Инструменты Figma</div>
                                <svg class="svg-icon arrow-down">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                         xlink:href="#arrow-down"></use>
                                </svg>
                            </div>
                            <div class="curriculum__item-content">
                                <div class="lessons">
                                    <div class="number-lessons">1</div>
                                    <div class="theme-lessons">Introduction to the
                                        Course<br><span>Video - 02:36 min.</span>
                                    </div>
                                    <svg class="svg-icon ok-yellow">
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                             xlink:href="#ok-yellow"></use>
                                    </svg>
                                </div>
                                <div class="lessons studied">
                                    <div class="number-lessons">2</div>
                                    <div class="theme-lessons">Using the Exercise
                                        Files<br><span>Video - 02:36 min.</span>
                                    </div>
                                    <svg class="svg-icon icon-load">
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                             xlink:href="#icon-load"></use>
                                    </svg>
                                </div>
                                <div class="lessons">
                                    <div class="number-lessons">3</div>
                                    <div class="theme-lessons">Using the Exercise Files<br><span>Test</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="curriculum__item">
                            <div class="curriculum__item-title">
                                <div class="theme-courses">Инструменты Figma</div>
                                <svg class="svg-icon arrow-down">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                         xlink:href="#arrow-down"></use>
                                </svg>
                            </div>
                            <div class="curriculum__item-content">
                                <div class="lessons">
                                    <div class="number-lessons">1</div>
                                    <div class="theme-lessons">Introduction to the
                                        Course<br><span>Video - 02:36 min.</span>
                                    </div>
                                    <svg class="svg-icon ok-yellow">
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                             xlink:href="#ok-yellow"></use>
                                    </svg>
                                </div>
                                <div class="lessons studied">
                                    <div class="number-lessons">2</div>
                                    <div class="theme-lessons">Using the Exercise
                                        Files<br><span>Video - 02:36 min.</span>
                                    </div>
                                    <svg class="svg-icon icon-load">
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                             xlink:href="#icon-load"></use>
                                    </svg>
                                </div>
                                <div class="lessons">
                                    <div class="number-lessons">3</div>
                                    <div class="theme-lessons">Using the Exercise Files<br><span>Test</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="curriculum__item">
                            <div class="curriculum__item-title">
                                <div class="theme-courses">Инструменты Figma</div>
                                <svg class="svg-icon arrow-down">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                         xlink:href="#arrow-down"></use>
                                </svg>
                            </div>
                            <div class="curriculum__item-content">
                                <div class="lessons">
                                    <div class="number-lessons">1</div>
                                    <div class="theme-lessons">Introduction to the
                                        Course<br><span>Video - 02:36 min.</span>
                                    </div>
                                    <svg class="svg-icon ok-yellow">
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                             xlink:href="#ok-yellow"></use>
                                    </svg>
                                </div>
                                <div class="lessons studied">
                                    <div class="number-lessons">2</div>
                                    <div class="theme-lessons">Using the Exercise
                                        Files<br><span>Video - 02:36 min.</span>
                                    </div>
                                    <svg class="svg-icon icon-load">
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                             xlink:href="#icon-load"></use>
                                    </svg>
                                </div>
                                <div class="lessons">
                                    <div class="number-lessons">3</div>
                                    <div class="theme-lessons">Using the Exercise Files<br><span>Test</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="curriculum__item">
                            <div class="curriculum__item-title">
                                <div class="theme-courses">Инструменты Figma</div>
                                <svg class="svg-icon arrow-down">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                         xlink:href="#arrow-down"></use>
                                </svg>
                            </div>
                            <div class="curriculum__item-content">
                                <div class="lessons">
                                    <div class="number-lessons">1</div>
                                    <div class="theme-lessons">Introduction to the
                                        Course<br><span>Video - 02:36 min.</span>
                                    </div>
                                    <svg class="svg-icon ok-yellow">
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                             xlink:href="#ok-yellow"></use>
                                    </svg>
                                </div>
                                <div class="lessons studied">
                                    <div class="number-lessons">2</div>
                                    <div class="theme-lessons">Using the Exercise
                                        Files<br><span>Video - 02:36 min.</span>
                                    </div>
                                    <svg class="svg-icon icon-load">
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                             xlink:href="#icon-load"></use>
                                    </svg>
                                </div>
                                <div class="lessons">
                                    <div class="number-lessons">3</div>
                                    <div class="theme-lessons">Using the Exercise Files<br><span>Test</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="curriculum__item">
                            <div class="curriculum__item-title">
                                <div class="theme-courses">Инструменты Figma</div>
                                <svg class="svg-icon arrow-down">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                         xlink:href="#arrow-down"></use>
                                </svg>
                            </div>
                            <div class="curriculum__item-content">
                                <div class="lessons">
                                    <div class="number-lessons">1</div>
                                    <div class="theme-lessons">Introduction to the
                                        Course<br><span>Video - 02:36 min.</span>
                                    </div>
                                    <svg class="svg-icon ok-yellow">
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                             xlink:href="#ok-yellow"></use>
                                    </svg>
                                </div>
                                <div class="lessons studied">
                                    <div class="number-lessons">2</div>
                                    <div class="theme-lessons">Using the Exercise
                                        Files<br><span>Video - 02:36 min.</span>
                                    </div>
                                    <svg class="svg-icon icon-load">
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                             xlink:href="#icon-load"></use>
                                    </svg>
                                </div>
                                <div class="lessons">
                                    <div class="number-lessons">3</div>
                                    <div class="theme-lessons">Using the Exercise Files<br><span>Test</span>
                                    </div>
                                </div>
                            </div>
                        </div>-->
          </div>
        </div>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import { courseAbout, courseLearningPlan, courseResource } from "../../services/routes/education-courses-routes-name";

const BREAK_POINT = 1024;
const TABS = [
  {
    label: "Описание и ресурсы",
    value: courseResource
  },
  {
    label: "О курсе",
    value: courseAbout
  }
];
const EXTENDED_TABS = [{ label: "Учебный план", value: courseLearningPlan }, ...TABS];
export default {
  props: ["courseSlug"],
  data() {
    return {
      tab: courseResource,
      tabsList: [],
      type: "test",
      clientWidth: 0,
      data: []
    };
  },
  mounted() {
    window.addEventListener("resize", this.toggleLearningPlan);
    this.toggleLearningPlan();
  },
  computed: {
    courseContentComponent() {
      return {
        article: () => import("./components/CourseContentArticle"),
        video: () => import("./components/CourseContentVideo"),
        test: () => import("./components/test/CourseContentTest")
      }[this.type];
    }
  },
  methods: {
    actionHandler() {
      this.$router.replace({ name: this.tab, params: { courseSlug: this.courseSlug } });
    },
    toggleLearningPlan() {
      this.clientWidth = document.body.clientWidth;
      this.tabsList = this.clientWidth <= BREAK_POINT ? EXTENDED_TABS : TABS;
      if (!this.tabsList.find(tabItem => tabItem.value === this.tab)) {
        this.tab = this.tabsList[0].value;
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.toggleLearningPlan);
  }
};
</script>

<style scoped></style>
