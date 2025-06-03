export default defineNuxtPlugin(() => {
  if (process.client) {
    const script = document.createElement("script");
    script.src = "/iframeResizer.contentWindow.min.js";
    script.async = true;
    script.onload = () => console.log("iframeResizer contentWindow loaded");
    document.body.appendChild(script);
  }
});
