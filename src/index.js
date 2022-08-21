import "./styles.css";
import "./css/normalize.css";
import "./css/webflow.css";
import "./css/wrapper-progressiveimage.webflow.css";

document.getElementById("app").innerHTML = `
<div class="container">
    <div class="button-wrapper">
      <a href="https://rj9v7c.csb.app/" class="button w-button">Link to Code Sandbox Gist</a>
    </div>
    <div class="image-wrapper">
    <img src="https://progressive-image.netlify.app/images/cheatsheetmaster.jpg" loading="lazy" srcset="https://progressive-image.netlify.app/images/cheatsheetmaster.jpg 500w, https://progressive-image.netlify.app/images/cheatsheetmaster.jpg 800w, https://progressive-image.netlify.app/images/cheatsheetmaster.jpg 1080w, https://progressive-image.netlify.app/images/cheatsheetmaster.jpg 1600w, https://progressive-image.netlify.app/images/cheatsheetmaster.jpg 2000w, https://progressive-image.netlify.app/images/cheatsheetmaster.jpg 2600w, images/cheatsheetmaster.jpg 2900w" sizes="100vw" alt="Progressive Image Example" class="imagecover"></div>
</div>
`;
