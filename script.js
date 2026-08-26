// Hero video: skip the opening five seconds and restart from that point.
const heroVideo = document.querySelector(".hero-video");

if (heroVideo) {
  const startTime = 5;

  heroVideo.addEventListener("loadedmetadata", () => {
    heroVideo.currentTime = Math.min(startTime, heroVideo.duration);
  }, { once: true });

  heroVideo.addEventListener("ended", () => {
    heroVideo.currentTime = startTime;
    heroVideo.play();
  });
}
