import Vue from "vue";

Vue.component("v-resizable", require("../components/Resizable").default);

Vue.component("v-paginate", require("../components/Paginate").default);

Vue.component("v-modal", require("../components/layouts/Modal").default);
Vue.component("v-modal-window", require("../components/layouts/ModalWindow").default);

Vue.component("v-warning", require("../components/Warning").default);
Vue.component("v-loading", require("../components/Loading").default);

Vue.component("v-container", require("../components/container/Container").default);
Vue.component("v-container-header", require("../components/container/ContainerHeader").default);
Vue.component("v-container-title-wrapper", require("../components/container/ContainerTitleWrapper").default);
Vue.component("v-container-title-name", require("../components/container/ContainerTitleName").default);
Vue.component("v-container-title-caption", require("../components/container/ContainerTitleCaption").default);

Vue.component("v-content-showable", require("../components/ContentShowable").default);

Vue.component("v-block-wrapper", require("../components/block/BlockWrapper").default);
Vue.component("v-block-item", require("../components/block/BlockItem").default);

Vue.component("v-draggable", require("../components/Draggable").default);
Vue.component("v-dropdown", require("../components/Dropdown").default);

Vue.component("v-icon", require("../components/Icon").default);

Vue.component("v-btn", require("../components/btn/Btn").default);
Vue.component("v-btn-settings", require("../components/btn/BtnSettings").default);
Vue.component("v-tabs", require("../components/Tabs").default);

Vue.component("v-swiper", require("../components/swiper/Swiper").default);
Vue.component("v-swiper-item", require("../components/swiper/SwiperItem").default);

Vue.component("v-field-wrapper", require("../components/FieldWrapper").default);

Vue.component("v-social-accounts", require("../components/form/social-accounts/SocialAccounts").default);
Vue.component(
  "v-social-accounts-settings",
  require("../components/form/social-accounts/SocialAccountsSettings").default
);

Vue.component("v-chartist", require("../components/Chartist").default);
Vue.component("v-line-chart", require("../components/LineChart").default);
Vue.component("v-months-calendar", require("../components/MonthsCalendar").default);

Vue.component("v-color", require("../components/form/Color").default);
Vue.component("v-crop", require("../components/form/Crop").default);
Vue.component("v-file", require("../components/form/File").default);
Vue.component("v-form", require("../components/form/Form").default);
Vue.component("v-form-container", require("../components/form/FormContainer").default);
Vue.component("v-form-wrapper", require("../components/form/FormWrapper").default);
Vue.component("v-input", require("../components/form/Input").default);
Vue.component("v-textarea", require("../components/form/Textarea").default);
Vue.component("v-radio", require("../components/form/Radio").default);
Vue.component("v-slider", require("../components/form/Slider").default);
Vue.component("v-select", require("../components/form/Select").default);
Vue.component("v-phone-mask", require("../components/form/PhoneMask").default);

Vue.component("v-tools-pages-canvas", require("../components/tools/landings/ToolsPagesCanvas").default);
Vue.component(
  "v-tools-pages-components-order",
  require("../components/tools/landings/ToolsPagesComponentsOrder").default
);
Vue.component("v-tools-pages-preview", require("../components/tools/landings/ToolsPagesPreview").default);
Vue.component("v-tools-pages-title", require("../components/tools/landings/ToolsPagesTitle").default);
Vue.component("v-tools-pages-background", require("../components/tools/landings/ToolsPagesBackground").default);
Vue.component("v-tools-pages-font-family", require("../components/tools/landings/ToolsPagesFontFamily").default);
Vue.component("v-tools-pages-font-color", require("../components/tools/landings/ToolsPagesFontColor").default);
Vue.component("v-tools-pages-button-style", require("../components/tools/landings/ToolsPagesButtonStyle").default);
Vue.component("v-tools-pages-add-content", require("../components/tools/landings/ToolsPagesAddContent").default);
Vue.component("v-tools-pages-add-button", require("../components/tools/landings/ToolsPagesAddButton").default);

Vue.component(
  "v-tools-pages-blocks-button",
  require("../components/tools/landings/blocks/button/ToolsPagesBlocksButton").default
);
Vue.component(
  "v-tools-pages-blocks-button-preview",
  require("../components/tools/landings/blocks/button/ToolsPagesBlocksButtonPreview").default
);
Vue.component(
  "v-tools-pages-blocks-contacts",
  require("../components/tools/landings/blocks/contacts/ToolsPagesBlocksContacts").default
);
Vue.component(
  "v-tools-pages-blocks-contacts-preview",
  require("../components/tools/landings/blocks/contacts/ToolsPagesBlocksContactsPreview").default
);
Vue.component(
  "v-tools-pages-blocks-footer",
  require("../components/tools/landings/blocks/footer/ToolsPagesBlocksFooter").default
);
Vue.component(
  "v-tools-pages-blocks-footer-preview",
  require("../components/tools/landings/blocks/footer/ToolsPagesBlocksFooterPreview").default
);
Vue.component(
  "v-tools-pages-blocks-header",
  require("../components/tools/landings/blocks/header/ToolsPagesBlocksHeader").default
);
Vue.component(
  "v-tools-pages-blocks-header-preview",
  require("../components/tools/landings/blocks/header/ToolsPagesBlocksHeaderPreview").default
);
Vue.component(
  "v-tools-pages-blocks-gallery",
  require("../components/tools/landings/blocks/gallery/ToolsPagesBlocksGallery").default
);
Vue.component(
  "v-tools-pages-blocks-gallery-preview",
  require("../components/tools/landings/blocks/gallery/ToolsPagesBlocksGalleryPreview").default
);
Vue.component(
  "v-tools-pages-blocks-hero",
  require("../components/tools/landings/blocks/hero/ToolsPagesBlocksHero").default
);
Vue.component(
  "v-tools-pages-blocks-hero-preview",
  require("../components/tools/landings/blocks/hero/ToolsPagesBlocksHeroPreview").default
);
Vue.component(
  "v-tools-pages-blocks-media",
  require("../components/tools/landings/blocks/media/ToolsPagesBlocksMedia").default
);
Vue.component(
  "v-tools-pages-blocks-media-preview",
  require("../components/tools/landings/blocks/media/ToolsPagesBlocksMediaPreview").default
);
Vue.component(
  "v-tools-pages-blocks-testimonial",
  require("../components/tools/landings/blocks/testimonial/ToolsPagesBlocksTestimonial").default
);
Vue.component(
  "v-tools-pages-blocks-testimonial-preview",
  require("../components/tools/landings/blocks/testimonial/ToolsPagesBlocksTestimonialPreview").default
);
Vue.component(
  "v-tools-pages-blocks-textarea",
  require("../components/tools/landings/blocks/textarea/ToolsPagesBlocksTextarea").default
);
Vue.component(
  "v-tools-pages-blocks-textarea-preview",
  require("../components/tools/landings/blocks/textarea/ToolsPagesBlocksTextareaPreview").default
);
Vue.component(
  "v-tools-pages-blocks-title",
  require("../components/tools/landings/blocks/title/ToolsPagesBlocksTitle").default
);
Vue.component(
  "v-tools-pages-blocks-title-preview",
  require("../components/tools/landings/blocks/title/ToolsPagesBlocksTitlePreview").default
);
Vue.component(
  "v-tools-pages-blocks-social-button",
  require("../components/tools/landings/blocks/social-button/ToolsPagesBlocksSocialButton").default
);
Vue.component(
  "v-tools-pages-blocks-social-button-preview",
  require("../components/tools/landings/blocks/social-button/ToolsPagesBlocksSocialButtonPreview").default
);
