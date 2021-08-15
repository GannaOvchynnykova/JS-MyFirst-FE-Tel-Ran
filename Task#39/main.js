const jazz = [
    {
        id: 1,
        author: 'Louis Daniel Armstrong',
        title: 'A Rhapsody in Black and Blue',
        cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Louis_Armstrong_restored.jpg/1024px-Louis_Armstrong_restored.jpg'
    },
    {
        id: 2,
        author: 'Miles Davis',
        title: 'Bitches Brew',
        cover: 'https://upload.wikimedia.org/wikipedia/ru/7/72/Bitches_brew.jpg'
    },
    {
        id: 3,
        author: 'Francis Albert Sinatra',
        title: 'In the Wee Small Hours',
        cover: 'https://upload.wikimedia.org/wikipedia/ru/thumb/f/f4/In_The_Wee_Small_Hours.jpeg/274px-In_The_Wee_Small_Hours.jpeg'
    },
    {
        id: 4,
        author: 'Dizzy Gillespie',
        title: 'Con Alma. Jazz World',
        cover: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Dizzy_Gillespie_playing_horn_1955.jpg'
    },
    {
        id: 5,
        author: 'Billie Holiday',
        title: 'Strange Fruit',
        cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Billie_Holiday_0001_original.jpg/1024px-Billie_Holiday_0001_original.jpg'
    },
    {
        id: 6,
        author: 'Thelonious Sphere Monk',
        title: 'Brilliant Corners',
        cover: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Thelonious_Monk%2C_Minton%27s_Playhouse%2C_New_York%2C_N.Y.%2C_ca._Sept._1947_8William_P._Gottlieb_06241%29.jpg'
    },
    {
        id: 7,
        author: 'Charles (Charlie) «Bird» Parker',
        title: 'Brilliant Corners',
        cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Portrait_of_Charlie_Parker_in_1947.jpg/1280px-Portrait_of_Charlie_Parker_in_1947.jpg'
    },
    {
        id: 8,
        author: 'Duke Ellington',
        title: 'Cocktails for Two',
        cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Duke_Ellington_1946.jpg/1024px-Duke_Ellington_1946.jpg'
    },
    {
        id: 9,
        author: 'Sarah Vaughan',
        title: 'Send In the Clowns',
        cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Sarah_Vaughan_-_William_P._Gottlieb_-_No._1.jpg/1024px-Sarah_Vaughan_-_William_P._Gottlieb_-_No._1.jpg'
    }
],

rock = [
    {
        id: 1,
        author: 'Pink Floyd ',
        title: 'The Dark Side of the Moon ',
        cover: 'https://upload.wikimedia.org/wikipedia/ru/e/eb/The_Dark_Side_of_the_Moon.jpg'
    },
    {
        id: 2,
        author: 'Nirvana',
        title: 'Nevermind ',
        cover: 'https://upload.wikimedia.org/wikipedia/ru/thumb/b/b7/NirvanaNevermindalbumcover.jpg/548px-NirvanaNevermindalbumcover.jpg'
    },
    {
        id: 3,
        author: 'Metallica',
        title: 'The Black Album ',
        cover: 'https://upload.wikimedia.org/wikipedia/ru/thumb/c/c2/Metallica_Album.jpg/548px-Metallica_Album.jpg'
    },
    {
        id: 4,
        author: 'Led Zeppelin',
        title: 'Immigrant Song',
        cover: 'https://upload.wikimedia.org/wikipedia/ru/0/01/Immigrant_Song.jpg'
    },
    {
        id: 5,
        author: 'The Rolling Stones',
        title: '(I Can’t Get No) Satisfaction',
        cover: 'https://upload.wikimedia.org/wikipedia/ru/7/7f/Satisfaction-us.jpg'
    }
],

blues = [ 
    {
        id: 1,
        author: 'Louis Daniel Armstrong',
        title: 'A Rhapsody in Black and Blue',
        cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Louis_Armstrong_restored.jpg/1024px-Louis_Armstrong_restored.jpg'
    },
    {
        id: 2,
        author: 'Miles Davis',
        title: 'Bitches Brew',
        cover: 'https://upload.wikimedia.org/wikipedia/ru/7/72/Bitches_brew.jpg'
    },
    {
        id: 3,
        author: 'Francis Albert Sinatra',
        title: 'In the Wee Small Hours',
        cover: 'https://upload.wikimedia.org/wikipedia/ru/thumb/f/f4/In_The_Wee_Small_Hours.jpeg/274px-In_The_Wee_Small_Hours.jpeg'
    },
    {
        id: 4,
        author: 'Dizzy Gillespie',
        title: 'Con Alma. Jazz World',
        cover: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Dizzy_Gillespie_playing_horn_1955.jpg'
    },
    {
        id: 5,
        author: 'Billie Holiday',
        title: 'Strange Fruit',
        cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Billie_Holiday_0001_original.jpg/1024px-Billie_Holiday_0001_original.jpg'
    },
    {
        id: 6,
        author: 'Thelonious Sphere Monk',
        title: 'Brilliant Corners',
        cover: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Thelonious_Monk%2C_Minton%27s_Playhouse%2C_New_York%2C_N.Y.%2C_ca._Sept._1947_8William_P._Gottlieb_06241%29.jpg'
    },
    {
        id: 7,
        author: 'Charles (Charlie) «Bird» Parker',
        title: 'Brilliant Corners',
        cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Portrait_of_Charlie_Parker_in_1947.jpg/1280px-Portrait_of_Charlie_Parker_in_1947.jpg'
    }
]

const jazzBtn = document.querySelector('#jazz-btn'),
    rockBtn = document.querySelector('#rock-btn'),
    bluesBtn = document.querySelector('#blues-btn'),

    content = document.querySelector('.content');
    


function createDiv (item){
    content.innerHTML = '';
    for (let i = 0; i < item.length; i++) {
        const divBoxMusic = document.createElement('div');
        divBoxMusic.className = 'divBoxMusic';
        divBoxMusic.innerHTML = `<img
              src=${item[i].cover} alt=${item[i].title}
            /> 
            <h5>${item[i].title}</h5>
            <h5>${item[i].author}</h5>`;
        content.appendChild(divBoxMusic);
    }
}


jazzBtn.onclick = () => {
    createDiv(jazz);
}

rockBtn.onclick = () => {
    createDiv(rock);
}

bluesBtn.onclick = () => {
    createDiv(blues);
}
