const adImages = [
  ads/ad1.jpg,
  ads/ad2.jpg,
  ads/ad3.jpg
  // Add more ad filenames as you add images to your ads folder
];

function loadRandomAd() {
  const randomIndex = Math.floor(Math.random() * adImages.length);
  document.getElementById('randomAd').src = adImages[randomIndex];
}

loadRandomAd();