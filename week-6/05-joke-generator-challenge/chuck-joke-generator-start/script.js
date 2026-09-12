let category;

const jokeElement  = document.getElementById('joke');

const jokeBtn = document.getElementById('joke-btn');

const categorySelect = document.getElementById('category')

const searchInput = document.getElementById('search');

const xml = new XMLHttpRequest;
    
xml.open('GET', "https://api.chucknorris.io/jokes/categories");

xml.onreadystatechange = function () {
    if(this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText);
        data.forEach(category => {
            const option = document.createElement('option');
            
            option.value = category;
            option.textContent = category;

            option.textContent = option.textContent.toLocaleUpperCase();
            
            categorySelect.appendChild(option);
        });
    };
};

xml.send();

categorySelect.addEventListener('change', (e) => {
    category = e.target.value;

});

function getCategoryJoke(category) {
    const xml = new XMLHttpRequest();
    
    xml.open('GET', `https://api.chucknorris.io/jokes/random?category=${category}`);

    xml.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const data = JSON.parse(this.responseText);
            jokeElement.innerHTML = data.value;
        };
    };
    
    xml.send();
};

function getSearchJoke(query, category) {
    const xml = new XMLHttpRequest();

    xml.open('GET', `https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(query)}`);

    xml.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const data = JSON.parse(this.responseText);

            if (data.total === 0) {
                jokeElement.innerHTML = `No jokes found for "${query}". Try another word.`;
                return;
            }

            let matches = data.result;

            if (category) {
                matches = matches.filter(joke => joke.categories.includes(category));
            }

            if (matches.length === 0) {
                jokeElement.innerHTML = `No ${category} jokes mention "${query}". Try a different word or category.`;
            } else {
                const randomIndex = Math.floor(Math.random() * matches.length);
                jokeElement.innerHTML = matches[randomIndex].value;
            }
        };
    };

    xml.send();
};

function getRandomJoke () {
    const xml = new XMLHttpRequest();
    
    xml.open('GET', "https://api.chucknorris.io/jokes/random");

    xml.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const data = JSON.parse(this.responseText);
            jokeElement.innerHTML = data.value;
        };
    };
    
    xml.send();
};

function handleJokeButton() {
    const query = searchInput.value.trim();
    if (query.length === 1) {
        jokeElement.innerHTML = 'Type at least 2 characters to search.';
        return;
    }

    if (query) {
        getSearchJoke(query, category);
        searchInput.value = '';
    } else if (category) {
        getCategoryJoke(category);
    } else {
        getRandomJoke();
    };
};
jokeBtn.addEventListener('click', handleJokeButton);

