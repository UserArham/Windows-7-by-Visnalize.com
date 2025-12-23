const iframe = document.getElementById('win7-simulator');
const wrapper = document.querySelector('.iframe-wrapper');
const loader = document.getElementById('loader');

// Hide loader when iframe finishes loading
iframe.addEventListener('load', () => {
  wrapper.classList.add('loaded');
  console.log("Iframe loaded!");
});

// Optional: Make iframe height responsive
function adjustIframeHeight() {
  const newHeight = window.innerHeight * 0.7; // 70% of viewport height
  iframe.style.height = newHeight + 'px';
}
window.addEventListener('resize', adjustIframeHeight);
adjustIframeHeight(); // initial call
