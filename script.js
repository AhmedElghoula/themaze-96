
const memes = [
    'https://www.codeur.com/blog/wp-content/uploads/2021/11/meme-marketing-1.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkyTQw6fuF-Fd-XIX5mbRGUvTFrVpyCAyG7ftaNibmqA&s',
    'https://media.istockphoto.com/id/538665020/photo/internet-meme-why-you-no-rage-face-3d-illustration.jpg?s=612x612&w=0&k=20&c=5D_g8Jy8kqg5Op2bb4RvcH8_6y0HGPqt29TKDrEqLyM=',
 
  ];
  
  
  function getRandomMeme() {
    const randomIndex = Math.floor(Math.random() * memes.length);
    return memes[randomIndex];
  }
  
 
  function displayRandomMeme() {
    const memeContainer = document.getElementById('memeContainer');
    const randomMemeUrl = getRandomMeme();
  
    const memeImg = document.createElement('img');
    memeImg.src = randomMemeUrl;
    memeImg.alt = 'Random Meme';
  

    memeContainer.innerHTML = '';
    memeContainer.appendChild(memeImg);
  }

  window.onload = displayRandomMeme;
  