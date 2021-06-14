import { router } from "./views/router.js";
import { navigate } from "./views/router.js";

import 'regenerator-runtime/runtime';

import "./styles/home.css";
import "./styles/projectImages.css";

document.addEventListener("DOMContentLoaded", navigate);
// Suscribe router to changes of history
window.addEventListener('popstate', router);