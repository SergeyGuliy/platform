<template>
  <div v-if="single">
    <v-container-title-wrapper>
      <v-container-title-name>
        <div>
          <v-icon :src="getIcon" />
          {{ getTitle }}
        </div>
      </v-container-title-name>
    </v-container-title-wrapper>

    <v-field-wrapper>
      <v-input :name="`${value.type}.login`" title="Текст кнопки" :scope="scope" v-model="value.title" />
    </v-field-wrapper>

    <template v-if="value.type === 'whatsapp'">
      <v-field-wrapper>
        <v-phone-mask
          :name="`${value.type}.phone`"
          title="Номер WhatsApp"
          rules="required"
          :scope="scope"
          v-model="value.phone"
        />
      </v-field-wrapper>

      <v-field-wrapper>
        <v-textarea
          :name="`${value.type}.text`"
          title="Текст-шаблон сообщения"
          rules="required"
          :scope="scope"
          v-model="value.text"
        />
      </v-field-wrapper>
    </template>

    <template v-else-if="value.type === 'telegram'">
      <v-field-wrapper>
        <v-input :name="`${value.type}.login`" title="Логин" rules="required" :scope="scope" v-model="value.login" />
      </v-field-wrapper>

      <v-field-wrapper>
        <v-textarea
          :name="`${value.type}.text`"
          title="Текст-шаблон сообщения"
          rules="required"
          :scope="scope"
          v-model="value.text"
        />
      </v-field-wrapper>
    </template>

    <template v-else-if="value.type === 'instagram'">
      <v-field-wrapper>
        <v-input :name="`${value.type}.login`" title="Логин" rules="required" :scope="scope" v-model="value.login" />
      </v-field-wrapper>

      <v-field-wrapper>
        <v-textarea
          :name="`${value.type}.text`"
          title="Текст-шаблон сообщения"
          rules="required"
          :scope="scope"
          v-model="value.text"
        />
      </v-field-wrapper>
    </template>

    <template v-else-if="value.type === 'viber'">
      <v-field-wrapper>
        <v-phone-mask
          :name="`${value.type}.phone`"
          title="Телефон"
          rules="required"
          :scope="scope"
          v-model="value.phone"
        />
      </v-field-wrapper>

      <v-field-wrapper>
        <v-textarea
          :name="`${value.type}.text`"
          title="Текст-шаблон сообщения"
          rules="required"
          :scope="scope"
          v-model="value.text"
        />
      </v-field-wrapper>
    </template>

    <template v-else-if="value.type === 'messenger'">
      <v-field-wrapper>
        <v-input :name="`${value.type}.link`" title="Ссылка" rules="required|url" :scope="scope" v-model="value.link" />
      </v-field-wrapper>

      <v-field-wrapper>
        <v-textarea
          :name="`${value.type}.text`"
          title="Текст-шаблон сообщения"
          rules="required"
          :scope="scope"
          v-model="value.text"
        />
      </v-field-wrapper>
    </template>

    <template v-else-if="value.type === 'vk'">
      <v-field-wrapper>
        <v-input :name="`${value.type}.link`" title="Ссылка" rules="required|url" :scope="scope" v-model="value.link" />
      </v-field-wrapper>

      <v-field-wrapper>
        <v-textarea
          :name="`${value.type}.text`"
          title="Текст-шаблон сообщения"
          rules="required"
          :scope="scope"
          v-model="value.text"
        />
      </v-field-wrapper>
    </template>

    <template v-else-if="value.type === 'youtube'">
      <v-field-wrapper>
        <v-input :name="`${value.type}.link`" title="Ссылка" rules="required|url" :scope="scope" v-model="value.link" />
      </v-field-wrapper>

      <v-field-wrapper>
        <v-textarea
          :name="`${value.type}.text`"
          title="Текст-шаблон сообщения"
          rules="required"
          :scope="scope"
          v-model="value.text"
        />
      </v-field-wrapper>
    </template>

    <template v-else-if="value.type === 'facebook'">
      <v-field-wrapper>
        <v-input :name="`${value.type}.link`" title="Ссылка" rules="required|url" :scope="scope" v-model="value.link" />
      </v-field-wrapper>

      <v-field-wrapper>
        <v-textarea
          :name="`${value.type}.text`"
          title="Текст-шаблон сообщения"
          rules="required"
          :scope="scope"
          v-model="value.text"
        />
      </v-field-wrapper>
    </template>

    <template v-else-if="value.type === 'twitter'">
      <v-field-wrapper>
        <v-input :name="`${value.type}.link`" title="Ссылка" rules="required|url" :scope="scope" v-model="value.link" />
      </v-field-wrapper>

      <v-field-wrapper>
        <v-textarea
          :name="`${value.type}.text`"
          title="Текст-шаблон сообщения"
          rules="required"
          :scope="scope"
          v-model="value.text"
        />
      </v-field-wrapper>
    </template>
  </div>

  <div v-else>
    <v-container-title-wrapper>
      <v-container-title-name>Select Account to Add</v-container-title-name>
    </v-container-title-wrapper>

    <v-content-showable showable @input="switchType($event, 'whatsapp')" v-model="show.whatsapp" class="p0">
      <div slot="title" class="builder-input-box-social">
        <v-icon src="whatsapp" />
        WhatsApp
      </div>

      <template v-if="index.whatsapp !== null">
        <v-field-wrapper>
          <v-phone-mask
            name="whatsapp.phone"
            title="Номер WhatsApp"
            rules="required"
            :scope="scope"
            v-model="initValue[index.whatsapp].phone"
          />
        </v-field-wrapper>

        <v-field-wrapper>
          <v-textarea
            name="text"
            title="Текст-шаблон сообщения"
            rules="required"
            :scope="scope"
            v-model="initValue[index.whatsapp].text"
          />
        </v-field-wrapper>
      </template>
    </v-content-showable>

    <v-content-showable showable @input="switchType($event, 'telegram')" v-model="show.telegram" class="p0">
      <div slot="title" class="builder-input-box-social">
        <v-icon src="telegram" />
        Telegram
      </div>

      <template v-if="index.telegram !== null">
        <v-field-wrapper>
          <v-input
            name="telegram.login"
            title="Логин"
            rules="required"
            :scope="scope"
            v-model="initValue[index.telegram].login"
          />
        </v-field-wrapper>

        <v-field-wrapper>
          <v-textarea
            name="telegram.text"
            title="Текст-шаблон сообщения"
            rules="required"
            :scope="scope"
            v-model="initValue[index.telegram].text"
          />
        </v-field-wrapper>
      </template>
    </v-content-showable>

    <v-content-showable showable @input="switchType($event, 'instagram')" v-model="show.instagram" class="p0">
      <div slot="title" class="builder-input-box-social">
        <v-icon src="instagram" />
        Instagram
      </div>

      <template v-if="index.instagram !== null">
        <v-field-wrapper>
          <v-input
            name="instagram.login"
            title="Логин"
            rules="required"
            :scope="scope"
            v-model="initValue[index.instagram].login"
          />
        </v-field-wrapper>

        <v-field-wrapper>
          <v-textarea
            name="instagram.text"
            title="Текст-шаблон сообщения"
            rules="required"
            :scope="scope"
            v-model="initValue[index.instagram].text"
          />
        </v-field-wrapper>
      </template>
    </v-content-showable>

    <v-content-showable showable @input="switchType($event, 'viber')" v-model="show.viber" class="p0">
      <div slot="title" class="builder-input-box-social">
        <v-icon src="viber" />
        Viber
      </div>

      <template v-if="index.viber !== null">
        <v-field-wrapper>
          <v-phone-mask
            name="viber.phone"
            title="Телефон"
            rules="required"
            :scope="scope"
            v-model="initValue[index.viber].phone"
          />
        </v-field-wrapper>

        <v-field-wrapper>
          <v-textarea
            name="name.text"
            title="Текст-шаблон сообщения"
            rules="required"
            :scope="scope"
            v-model="initValue[index.viber].text"
          />
        </v-field-wrapper>
      </template>
    </v-content-showable>

    <v-content-showable showable @input="switchType($event, 'messenger')" v-model="show.messenger" class="p0">
      <div slot="title" class="builder-input-box-social">
        <v-icon src="messenger" />
        Facebook Messenger
      </div>

      <template v-if="index.messenger !== null">
        <v-field-wrapper>
          <v-input
            name="messenger.link"
            title="Ссылка"
            rules="required|url"
            :scope="scope"
            v-model="initValue[index.messenger].link"
          />
        </v-field-wrapper>

        <v-field-wrapper>
          <v-textarea
            name="messenger.text"
            title="Текст-шаблон сообщения"
            rules="required"
            :scope="scope"
            v-model="initValue[index.messenger].text"
          />
        </v-field-wrapper>
      </template>
    </v-content-showable>

    <v-content-showable showable @input="switchType($event, 'vk')" v-model="show.vk" class="p0">
      <div slot="title" class="builder-input-box-social">
        <v-icon src="vk" />
        ВКонтакте
      </div>

      <template v-if="index.vk !== null">
        <v-input name="vk.link" title="Ссылка" rules="required|url" :scope="scope" v-model="initValue[index.vk].link" />

        <v-textarea
          name="vk.text"
          title="Текст-шаблон сообщения"
          rules="required"
          :scope="scope"
          v-model="initValue[index.vk].text"
        />
      </template>
    </v-content-showable>

    <v-content-showable showable @input="switchType($event, 'youtube')" v-model="show.youtube" class="p0">
      <div slot="title" class="builder-input-box-social">
        <v-icon src="youtube" />
        YouTube
      </div>

      <template v-if="index.youtube !== null">
        <v-field-wrapper>
          <v-input
            name="youtube.link"
            title="Ссылка"
            rules="required|url"
            :scope="scope"
            v-model="initValue[index.youtube].link"
          />
        </v-field-wrapper>

        <v-field-wrapper>
          <v-textarea
            name="youtube.text"
            title="Текст-шаблон сообщения"
            rules="required"
            :scope="scope"
            v-model="initValue[index.youtube].text"
          />
        </v-field-wrapper>
      </template>
    </v-content-showable>

    <v-content-showable showable @input="switchType($event, 'facebook')" v-model="show.facebook" class="p0">
      <div slot="title" class="builder-input-box-social">
        <v-icon src="youtube" />
        Facebook
      </div>

      <template v-if="index.facebook !== null">
        <v-field-wrapper>
          <v-input
            name="facebook.link"
            title="Ссылка"
            rules="required|url"
            :scope="scope"
            v-model="initValue[index.facebook].link"
          />
        </v-field-wrapper>

        <v-field-wrapper>
          <v-textarea
            name="facebook.text"
            title="Текст-шаблон сообщения"
            rules="required"
            :scope="scope"
            v-model="initValue[index.facebook].text"
          />
        </v-field-wrapper>
      </template>
    </v-content-showable>

    <v-content-showable showable @input="switchType($event, 'twitter')" v-model="show.twitter" class="p0">
      <div slot="title" class="builder-input-box-social">
        <v-icon src="twitter" />
        Twitter
      </div>

      <template v-if="index.twitter !== null">
        <v-field-wrapper>
          <v-input
            name="twitter.link"
            title="Ссылка"
            rules="required|url"
            :scope="scope"
            v-model="initValue[index.twitter].link"
          />
        </v-field-wrapper>

        <v-field-wrapper>
          <v-textarea
            name="twitter.text"
            title="Текст-шаблон сообщения"
            rules="required"
            :scope="scope"
            v-model="initValue[index.twitter].text"
          />
        </v-field-wrapper>
      </template>
    </v-content-showable>
  </div>
</template>

<script>
import { TYPES } from "../../../stubs/social-accounts";
import { getAccountContent } from "../../tools/landings/blocks";

export default {
  name: "SocialAccountsSettings",
  props: {
    value: {},
    scope: { type: String, default: () => "form" },
    type: {},
    single: { type: Boolean, default: () => false }
  },
  mounted() {
    if (!this.single) {
      this.$set(this, "initValue", JSON.parse(JSON.stringify(this.value)));

      this.$set(
        this.show,
        "whatsapp",
        this.value.some(item => item.type === "whatsapp")
      );
      this.$set(
        this.show,
        "telegram",
        this.value.some(item => item.type === "telegram")
      );
      this.$set(
        this.show,
        "instagram",
        this.value.some(item => item.type === "instagram")
      );
      this.$set(
        this.show,
        "viber",
        this.value.some(item => item.type === "viber")
      );
      this.$set(
        this.show,
        "messenger",
        this.value.some(item => item.type === "messenger")
      );
      this.$set(
        this.show,
        "vk",
        this.value.some(item => item.type === "vk")
      );
      this.$set(
        this.show,
        "youtube",
        this.value.some(item => item.type === "youtube")
      );
      this.$set(
        this.show,
        "facebook",
        this.value.some(item => item.type === "facebook")
      );
      this.$set(
        this.show,
        "twitter",
        this.value.some(item => item.type === "twitter")
      );
    }

    if (!this.single) {
      window.addEventListener(`validate-${this.scope}`, this.validateHandler);
    }
  },
  beforeDestroy() {
    if (!this.single) {
      window.removeEventListener(`validate-${this.scope}`, this.validateHandler);
    }
  },
  data() {
    return {
      initValue: [],
      show: {
        whatsapp: false,
        telegram: false,
        instagram: false,
        viber: false,
        messenger: false,
        vk: false,
        youtube: false,
        facebook: false,
        twitter: false
      }
    };
  },
  computed: {
    getIcon() {
      if (this.single) {
        return TYPES.find(item => item.type === this.value.type).icon;
      }
      return null;
    },
    getTitle() {
      if (this.single) {
        return TYPES.find(item => item.type === this.value.type).label;
      }
      return null;
    },
    index() {
      let whatsapp = this.initValue.findIndex(item => item.type === "whatsapp");
      let telegram = this.initValue.findIndex(item => item.type === "telegram");
      let instagram = this.initValue.findIndex(item => item.type === "instagram");
      let viber = this.initValue.findIndex(item => item.type === "viber");
      let messenger = this.initValue.findIndex(item => item.type === "messenger");
      let vk = this.initValue.findIndex(item => item.type === "vk");
      let youtube = this.initValue.findIndex(item => item.type === "youtube");
      let facebook = this.initValue.findIndex(item => item.type === "facebook");
      let twitter = this.initValue.findIndex(item => item.type === "twitter");

      return {
        whatsapp: whatsapp >= 0 ? whatsapp : null,
        telegram: telegram >= 0 ? telegram : null,
        instagram: instagram >= 0 ? instagram : null,
        viber: viber >= 0 ? viber : null,
        messenger: messenger >= 0 ? messenger : null,
        vk: vk >= 0 ? vk : null,
        youtube: youtube >= 0 ? youtube : null,
        facebook: facebook >= 0 ? facebook : null,
        twitter: twitter >= 0 ? twitter : null
      };
    }
  },
  methods: {
    switchType(value, type) {
      if (value) {
        let content = getAccountContent(type);
        if (content) {
          this.initValue.push(content);
        }
      } else {
        let index = this.initValue.findIndex(item => item.type === type);
        if (index >= 0) {
          this.initValue.splice(index, 1);
        }
      }
    },
    validateHandler() {
      this.$emit("input", this.initValue);
    }
  }
};
</script>

<style scoped>
.p0 {
  padding: 0;
}
</style>
