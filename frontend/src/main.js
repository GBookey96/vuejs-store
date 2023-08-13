import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import BaseCard from "./Components/UI/BaseCard.vue";
import BaseButton from "./Components/UI/BaseButton.vue";
import BaseDialog from "./Components/UI/BaseDialog.vue";
import BaseSpinner from "./Components/UI/BaseSpinner.vue";
import store from "./Store/index.js";

const app = createApp(App);
app.use(router);
app.use(store);
app.component("base-button", BaseButton);
app.component("base-card", BaseCard);
app.component("base-dialog", BaseDialog);
app.component("base-spinner", BaseSpinner);
app.mount("#app");
