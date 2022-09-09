import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faEnvelope,
  faImage,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faYoutube,
  faSpotify,
  faLinkedin,
  faGitlab,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faEnvelope,
  faImage,
  faDownload,
  faInstagram,
  faGitlab,
  faGithub,
  faYoutube,
  faSpotify,
  faLinkedin
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
