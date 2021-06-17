import { router } from "./views/router.js";
import { navigate } from "./views/router.js";

import 'regenerator-runtime/runtime';

import "./styles/_base.css";
import "./styles/home.css";
import "./styles/projectImages.css";
import "./styles/about.css";
import "./styles/project.css";

document.addEventListener("DOMContentLoaded", navigate);
// Suscribe router to changes of history
window.addEventListener('popstate', router);
