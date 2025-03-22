document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const searchButton = document.querySelector('.btn-search');
    const clearButton = document.querySelector('.btn-clear'); // Fixed typo
    const resultSection = document.getElementById('result');

    searchButton.addEventListener('click', () => {
        const searchText = searchInput.value;
        if (searchText.trim() === '') {
            resultSection.textContent = 'Please enter a search term.';
            return;
        }
        performSearch(searchText);
        
        function performSearch(query) {
            console.log('Performing search for:', query);
            // Implement your search logic here
        }
        // Add your search logic here
    });

    clearButton.addEventListener('click', () => {
        searchInput.value = '';
        resultSection.textContent = '';
    });
});
