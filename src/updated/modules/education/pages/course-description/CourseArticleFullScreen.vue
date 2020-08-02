<template>
  <div class="course-article__full-content">
    <button class="course-article__open-full-article" @click.prevent="$router.go(-1)">
      <v-icon src="collapse-close" />
    </button>
    <div class="course-article__content-title">Introduction to the Course</div>
    <div class="course-article__content-text">
      <p>
        Did you know that your eyes really are the window into your soul? Or at least a window into your current
        emotional state? By understanding how <b>your eyes connect to your emotions</b>, you can learn to tap into
        curiosity to help you let go of anxiety and fear.
      </p>
      <p>
        Have you ever wondered why many professional poker players wear dark sunglasses during televised tournaments? It
        isn’t because of the glare of the camera lights. They do this so no one can read their eyes to gain an advantage
        over them. There is even a term for this: a “tell.” A tell is a change in a player’s behavior or demeanor that
        gives clues about the cards they hold. These changes are often unconscious, so they could be telling other
        players whether they have a good hand or a bad one <a href="#"><span>without knowing it.</span><br /><br /></a>
      </p>
      <p>
        <i
          >“Charles Darwin theorized that in the face of uncertainty, we open our eyes to literally gather more sensory
          information about whether there is danger ahead.“</i
        ><br /><br />
      </p>

      <p>
        If you’ve seen the James Bond movie Casino Royale, you might remember Bond trying to figure out the bad guy’s
        tell during a high-stakes game. I won’t spoil it by telling you how he did. And of course you can read about
        common poker tells on the internet. Many of the tips for how to spot a tell have you focus on your opponent’s
        eyes. It’s really hard to stop or mask involuntary eye movements and expressions that we’ve exhibited throughout
        our lives, and it’s much easier to simply wear a pair of dark shades instead.
      </p>
    </div>
    <div class="course-article__image">
      <!--<img src="@/assets/images/base-photo2.png" alt=""/>-->
    </div>
    <div class="course-article__content-text">
      <div>
        <span class="text-decoration">Lorem ipsum dolor sit amet,</span>
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua:
        <ul>
          <li>Lorem donec massa sapien faucibus et molestie ac feugiat</li>
          <li>Ut sem viverra aliquet eget sit amet tellus cras</li>
          <li>Cras pulvinar mattis nunc sed blandit libero<br /><br /></li>
        </ul>
      </div>

      <div>
        What do we instinctively do with our eyes when we’re afraid? We open them really wide. Charles Darwin theorized
        that in the face of uncertainty, we open our eyes to literally gather more sensory information about whether
        there is danger ahead. Eye widening, when combined with other facial cues of fear, also serves as a social
        signal to let others know we are afraid. Someone can look at our face and quickly read, “Hey, there might be
        danger out there,” without us saying a word.
        <ol>
          <li>Lorem donec massa sapien faucibus et molestie ac feugiat</li>
          <li>Ut sem viverra aliquet eget sit amet tellus cras</li>
          <li>Cras pulvinar mattis nunc sed blandit libero</li>
        </ol>
      </div>
    </div>
    <v-button class="btn">К учебному плану</v-button>
  </div>
</template>

<script>
import VButton from "../../../../common/components/VButton";
export default {
  components: {
    VButton
  }
};
</script>

<style scoped></style>
