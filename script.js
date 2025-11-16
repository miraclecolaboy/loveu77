
document.addEventListener('DOMContentLoaded', function() {
    // 获取骰子图片按钮
    const diceButton = document.querySelector('#dice-img');
    
    // 确保按钮存在
    if (diceButton) {
        // 给骰子图片添加点击事件监听器
        diceButton.addEventListener('click', function() {

            // 循环生成5个1到6之间的随机数字
            for (let i = 1; i <= 5; i++) {
                // 生成一个1到6的随机数字
                let randomNumber = Math.floor(Math.random() * 6) + 1; 

                // 将随机数字显示到相应的span中
                const diceElement = document.getElementById(`dice${i}`);
                if (diceElement) {
                    diceElement.textContent = randomNumber;  // 显示随机数字
                }
            }
        });
    } 
});
// 音频默认音量30%
const audio=document.getElementById('audio');
audio.volume = 0.3;
// 音频播放添加旋转图片动作

const albumimage=document.getElementById('albumimage');
audio.addEventListener('play', () => {
            albumimage.classList.add('rotate'); 
            albumimage.style.animationPlayState = 'running'; // 保持动画继续播放
        }); 
audio.addEventListener('pause',()=>{
 albumimage.style.animationPlayState = 'paused'; // 暂停动画，但不重置
});

