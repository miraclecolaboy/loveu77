// JS 部分可以控制更多交互效果，或者未来扩展。
// 当前代码中不需要额外的 JS 来实现基本的悬停效果，但如果需要添加其他功能，可以在这里编写。
// 以下是一个简单的示例：
document.querySelectorAll('.profile').forEach(profile => {
    profile.addEventListener('mouseenter', function() {
        // 可以在这里添加更多悬停时的动态效果
    });

    profile.addEventListener('mouseleave', function() {
        // 鼠标离开时恢复原状
    });
});
