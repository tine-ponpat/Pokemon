document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    fetchAPI(query);
});

document.getElementById('category-select').addEventListener('change', function() {
    const category = this.value;
    fetchAPIByCategory(category);
});

function fetchAPI(query) {
    const apiUrl = `https://api.publicapis.org/entries?title=${query}`;
    
    axios.get(apiUrl)
        .then(response => displayResults(response.data.entries))
        .catch(error => console.error('Error fetching data:', error));
}

function fetchAPIByCategory(category) {
    const apiUrl = `https://api.publicapis.org/entries?category=${category}`;
    
    axios.get(apiUrl)
        .then(response => displayResults(response.data.entries))
        .catch(error => console.error('Error fetching data:', error));
}

function displayResults(results) {
    const resultsSection = document.getElementById('results');
    resultsSection.innerHTML = '';

    results.forEach(api => {
        const apiElement = document.createElement('div');
        apiElement.classList.add('api');
        apiElement.innerHTML = `
            <h3>${api.API}</h3>
            <p>${api.Description}</p>
            <p><a href="${api.Link}" target="_blank">Learn more</a></p>
        `;
        resultsSection.appendChild(apiElement);
    });
}

// Fetch categories and populate the dropdown
axios.get('https://api.publicapis.org/categories')
    .then(response => {
        const categorySelect = document.getElementById('category-select');
        response.data.categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categorySelect.appendChild(option);
        });
    })
    .catch(error => console.log('Error fetching categories:', error));
    
    