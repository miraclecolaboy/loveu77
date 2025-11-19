window.onload = function() {
  // 始终显示消息条
  const welcomeMessage = document.getElementById('welcome-message');
  
  // 设置3秒后消息条消失
  setTimeout(function() {
    welcomeMessage.classList.add('hidden'); // 添加hidden类，触发渐变消失效果
  }, 3000); // 延迟 3 秒后触发
}

    const diceButton = document.querySelector('#dice-img');

    if (diceButton) {
        diceButton.addEventListener('click', function() {
            for (let i = 1; i <= 5; i++) {
                let randomNumber = Math.floor(Math.random() * 6) + 1;
                const diceElement = document.getElementById(`dice${i}`);
                if (diceElement) {
                    diceElement.textContent = randomNumber;
                }
            }
        });
    }

    /* -------------------------------
       🎵 音频播放器基本元素
    ------------------------------- */
    const audio = document.getElementById("audio");
    const playBtn = document.getElementById("playpause");
    const progress = document.getElementById("progress");
    const audioTime = document.getElementById("audio-time");
    const volumeBar = document.getElementById("volume");

    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    const albumimage = document.getElementById("albumimage");

    /* -------------------------------
       🔊 默认音量（你原来的）
    ------------------------------- */
    audio.volume = 0.3;
    if (volumeBar) volumeBar.value = 30;


    /* -------------------------------
       💿 专辑封面旋转（你原来的）
    ------------------------------- */
    audio.addEventListener('play', () => {
        albumimage.classList.add('rotate');
        albumimage.style.animationPlayState = 'running';
    });

    audio.addEventListener('pause', () => {
        albumimage.style.animationPlayState = 'paused';
    });


    /* -------------------------------
       ▶ 播放列表
    ------------------------------- */
    let playlist = [
        { song: "audio1.mp3", cover: "album1.jpg" },
        { song: "audio2.mp3", cover: "album2.jpg" }
    ];

    let currentIndex = 1;  // 默认从 audio1 开始


    /* -------------------------------
       📀 加载歌曲
    ------------------------------- */
    function loadMusic(index) {
        audio.src = playlist[index].song;
        albumimage.src = playlist[index].cover;  // 更新封面
        audio.load();
        playMusic();
    }

    /* -------------------------------
       ▶ 播放、暂停
    ------------------------------- */
    function playMusic() {
        audio.play();
        playBtn.textContent = "暂停";
    }

    function pauseMusic() {
        audio.pause();
        playBtn.textContent = "播放";
    }

    playBtn.addEventListener("click", () => {
        if (audio.paused) playMusic();
        else pauseMusic();
    });


    /* -------------------------------
       ⏮ 上一首 ⏭ 下一首
    ------------------------------- */
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
        loadMusic(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % playlist.length;
        loadMusic(currentIndex);
    });

    // 自动下一首
    audio.addEventListener("ended", () => {
        nextBtn.click();
    });


    /* -------------------------------
       📏 进度条更新
    ------------------------------- */
    audio.addEventListener("timeupdate", () => {
        progress.value = (audio.currentTime / audio.duration) * 100;

        let m = Math.floor(audio.currentTime / 60);
        let s = Math.floor(audio.currentTime % 60).toString().padStart(2, "0");
        audioTime.textContent = `${m}:${s}`;
    });

    // 拖动进度条
    progress.addEventListener("input", () => {
        audio.currentTime = (progress.value / 100) * audio.duration;
    });


    /* -------------------------------
       🔉 音量控制
    ------------------------------- */
    volumeBar.addEventListener("input", () => {
        audio.volume = volumeBar.value / 100;
    });

    // 页面加载时，直接加载并播放第一首歌（audio1.mp3）
    loadMusic(currentIndex);

;
