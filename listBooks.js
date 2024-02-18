document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('bookList');
    let lastClickedIndex = null;

    list.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            const items = Array.from(this.children); 
            const currentIndex = items.indexOf(event.target);

            if (event.ctrlKey) {
                event.target.style.color = event.target.style.color === 'orange' ? '' : 'orange';
            } else if (event.shiftKey && lastClickedIndex !== null) {
                const start = Math.min(lastClickedIndex, currentIndex);
                const end = Math.max(lastClickedIndex, currentIndex);
                for (let i = start; i <= end; i++) {
                    items[i].style.color = 'orange';
                }
            } else {
                items.forEach(item => item.style.color = '');
                event.target.style.color = 'orange';
            }

            lastClickedIndex = currentIndex; 
        }
    });
});