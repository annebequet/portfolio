import { router } from "./views/router.js";
import { navigate } from "./views/router.js";
import { getFooter } from "./views/router.js";

import 'regenerator-runtime/runtime';

//importing styles
import "./styles/_base.css";
import "./styles/home.css";
import "./styles/projectImages.css";
import "./styles/about.css";
import "./styles/project.css";
import "./styles/projects.css";
import "./styles/footer.css";

// Create navigation : links + active links
document.addEventListener("DOMContentLoaded", navigate);
// Suscribe router to changes of history
window.addEventListener('popstate', router);
// Create component Footer
document.addEventListener("DOMContentLoaded", getFooter);



