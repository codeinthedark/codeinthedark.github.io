var player = document.getElementById("videoPlayer");

player.addEventListener("click", function() {
  var videoURL = player.getAttribute("data-url");
  var image = player.querySelector("img");
  var playingClass = "playing";
  var imageHeight = image.height;
  var imageWidth = image.width;

  if (!videoURL && player.classList.contains(playingClass)) return;

  var iFrame = document.createElement("iframe");
  iFrame.setAttribute("src", videoURL);
  iFrame.setAttribute("frameborder", "0");
  iFrame.setAttribute("allowFullScreen", "true");
  iFrame.setAttribute("mozallowfullscreen", "true");
  iFrame.setAttribute("webkitAllowFullScreen", "true");
  iFrame.setAttribute("width", imageWidth);
  iFrame.setAttribute("height", imageHeight);
  player.appendChild(iFrame);
  player.classList.add(playingClass);
});
