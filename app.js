//Load
const loadAnimation = document.querySelector('.load-wrapper');
window.addEventListener('load', function () {
  loadAnimation.parentElement.removeChild(loadAnimation);
  window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
  }
});

// Mobile Nav
const burger = document.querySelector('.burger');
const navMobile = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navMobile.classList.toggle('active');
  burger.classList.toggle('active');
})

// Nav on Scroll Down
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('active', window.scrollY > 0);
});

// Hide Nav on Scroll Down
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop >= 110 && scrollTop > lastScrollTop) {
    // nav.style.transform = "translateY(-150%)";
    nav.classList.add('active-hide');
  } else {
    // nav.style.transform = "translateY(0)";
    nav.classList.remove('active-hide');
  }

  lastScrollTop = scrollTop;
});

// Pop up for Youtube Video
const popup = document.querySelector('.popup-blur');
const btnClose = document.querySelector('i.bxs-x-circle');
const boxVideo = document.querySelector('.click-video');

// Auto Pause
let player;
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video-yt)
  player = new YT.Player('video-yt', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  boxVideo.addEventListener("click", function() {
    player.playVideo();
  });
  btnClose.addEventListener("click", function() {
    player.pauseVideo();
  });
}

// Pop up
boxVideo.addEventListener('click', () => {
  popup.classList.add('active');
})
btnClose.addEventListener('click', () => {
  popup.classList.remove('active');
})


const tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


