const exp = (digit, power, cb) => {
    if (power === 0) {
        return cb(1);
    }
    return digit * exp(digit, power - 1, cb);
};

exp(5, 3, result => {
    console.log(`result: ${result}`);
});

const colors = ['#CA3C25', '#E6AA68', '#49306B', '#FFFBBD', '#7FB069', '#AAA1C8'];

const fetchDataAndDisplay = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        const postsContainer = document.getElementById('posts-container');
        data.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');

            const titleElement = document.createElement('h1');
            titleElement.textContent = post.title;

            const bodyElement = document.createElement('p');
            bodyElement.textContent = post.body;

            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            postElement.style.backgroundColor = randomColor;

            postElement.appendChild(titleElement);
            postElement.appendChild(bodyElement);

            postsContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

fetchDataAndDisplay();

const deepCopy = async (obj) => {
    return new Promise((resolve, reject) => {
        if (typeof obj !== 'object' || obj === null) {
            reject(new Error('argument is not an object'));
        } else {
            try {
                const copiedObject = JSON.parse(JSON.stringify(obj));
                resolve(copiedObject);
            } catch (error) {
                reject(error);
            }
        }
    });
};

const originalObject = { a: 1, b: { c: 2 } };
deepCopy(originalObject)
    .then(copy => {
        console.log('deep copy:', copy);
    })
    .catch(error => {
        console.error('error:', error.message);
});
