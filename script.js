// Gallery images data
const galleryImages = [
  { src: 'https://i.imgur.com/KZ5QQ5Q.jpg', title: 'Jisoo' },
  { src: 'https://i.imgur.com/8mJ7pP8.jpg', title: 'Jennie' },
  { src: 'https://i.imgur.com/3vR2xL9.jpg', title: 'Rosé' },
  { src: 'https://i.imgur.com/9kL4mN1.jpg', title: 'Lisa' },
  { src: 'https://i.imgur.com/5qW8bX2.jpg', title: 'Group Shot 1' },
  { src: 'https://i.imgur.com/7hJ3cP6.jpg', title: 'Group Shot 2' }
];

// Function to generate gallery
function generateGallery() {
  const galleryContainer = document.getElementById('galleryContainer');
  
galleryImages.forEach(image => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
    
galleryItem.innerHTML = `
      <img src="${image.src}" alt="${image.title}">
      <p>${image.title}</p>
    `;
    
galleryContainer.appendChild(galleryItem);
  });
}

// Run when page loads
document.addEventListener('DOMContentLoaded', generateGallery);