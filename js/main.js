/*==============VIDEO NAV==========*/

const videoBtn = document.querySelector('.story-video-btn');
const videoFile = document.querySelector('.story-video-object');
const videoBtnIcon = document.querySelector('#play');
const overlay = document.querySelector('.story-video-overlay');

const toggleOverlay = (event) => {
  if (event.type === 'mouseleave') {
    overlay.classList.add('hidden');
  } else {
    overlay.classList.remove('hidden');
  }
};

videoBtn.addEventListener('click', (e) => {
  console.log('click');
  if (videoFile.paused) {
    videoBtnIcon.src = './assets/icons/pause.svg';
    overlay.onmouseleave = toggleOverlay;
    overlay.onmouseenter = toggleOverlay;

    videoFile.play();
  } else {
    videoBtnIcon.src = './assets/icons/play2.svg';
    videoFile.pause();
    overlay.onmouseleave = null;
    overlay.onmouseenter = null;
  }
});
