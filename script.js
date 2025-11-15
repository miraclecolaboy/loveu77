
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
