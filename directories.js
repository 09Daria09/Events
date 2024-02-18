document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('li');
    listItems.forEach(item => {
        const nestedList = item.querySelector('ul');
        if (nestedList) {
            nestedList.style.display = 'none';
        }

        item.style.cursor = 'pointer';

        item.addEventListener('mouseover', function(e) {
            this.style.fontWeight = 'bold';
            e.stopPropagation();
        });

        item.addEventListener('mouseout', function(e) {
            this.style.fontWeight = 'normal';
            e.stopPropagation();
        });

        item.addEventListener('click', function(e) {
            e.stopPropagation();

            const nestedList = this.querySelector('ul');
            if (nestedList) {
                nestedList.style.display = nestedList.style.display === 'none' ? 'block' : 'none';
            }
        });
    });
});

