<template>
  <div class="course-article__content">
    <v-button
      custom-type="icon"
      custom-style="secondary"
      class="course-article__open-full-article"
      @click="showFullScreen"
    >
      <v-icon src="collapse-open" />
    </v-button>
    <div class="course-article__content-title">Lorem Ipsum dolor sit</div>
    <div class="course-article__content-text">
      <p>
        Did you know that your eyes really are the window into your soul? Or at least a window into your current
        emotional state? By understanding how your eyes connect to your emotions, you can learn to tap into curiosity to
        help you let go of anxiety and fear.
      </p>
      <p>
        Have you ever wondered why many professional poker players wear dark sunglasses during televised tournaments? It
        isn’t because of the glare of the camera lights. They do this so no one can read their eyes to gain an advantage
        over them. There is even a term for this: a “tell.” A tell is a change in a player’s behavior or demeanor that
        gives clues about the cards they hold. These changes are often unconscious, so they could be telling other
        players whether they have a good hand or a bad one without knowing it.<br /><br />
      </p>
      <p>
        “Charles Darwin theorized that in the face of uncertainty, we open our eyes to literally gather more sensory
        information about whether there is danger ahead.“<br /><br />
      </p>
      <p>
        If you’ve seen the James Bond movie Casino Royale, you might remember Bond trying to figure out the bad guy’s
        tell during a high-stakes game. I won’t spoil it by telling you how he did. And of course you can read about
        common poker tells on the internet. Many of the tips for how to spot a tell have you focus on your opponent’s
        eyes. It’s really hard to stop or mask involuntary eye movements and expressions that we’ve exhibited throughout
        our lives, and it’s much easier to simply wear a pair of dark shades instead.
      </p>
    </div>
  </div>
</template>

<script>
import VButton from "../../../../../common/components/VButton";
import { educationCourseFullscreen } from "../../../services/routes/education-courses-routes-name";
import { getCourseBySlug } from "../../../services/education-service";

export default {
  components: {
    VButton
  },
  props: ["courseSlug"],
  created() {
    this.getCourse();
  },
  methods: {
    getCourse() {
      getCourseBySlug(this.courseSlug).then(({ data }) => console.log(data));
    },
    showFullScreen() {
      this.$router.push({ name: educationCourseFullscreen });
    }
  }
};
</script>

<style scoped>
.course-article__open-full-article svg {
  width: 24px;
  height: 24px;
}
</style>
