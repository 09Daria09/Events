document.addEventListener('DOMContentLoaded', function() {
    const block = document.getElementById('resizableBlock');
    const resizeHandle = block.querySelector('.resize-handle');
    let isResizing = false;
    let startX;
    let startY;
    let startWidth;
    let startHeight;

    resizeHandle.addEventListener('mousedown', function(e) {
        isResizing = true;
        startX = e.clientX;
        startY = e.clientY;
        startWidth = block.offsetWidth;
        startHeight = block.offsetHeight;

        document.addEventListener('mousemove', Viewblock);
        document.addEventListener('mouseup', stopView);
    });

    function Viewblock(e) {
        if (isResizing) {
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;

            block.style.width = (startWidth + deltaX) + 'px';
            block.style.height = (startHeight + deltaY) + 'px';
        }
    }

    function stopView() {
        isResizing = false;
        document.removeEventListener('mousemove', Viewblock);
        document.removeEventListener('mouseup', stopView);
    }
});
