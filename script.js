// Function to encode URL
const encodeURL = (longURL) => {
  const shortCode = generateShortCode(longURL);
  const shortURL = `https://yourdomain.com/${shortCode}`;
  const urlMap = {};
  urlMap[shortCode] = longURL;
  return shortURL;
};

// Helper function to generate a unique short code
const generateShortCode = (longURL) => {
  const hash = hashFunction(longURL);
  return hash.substring(0, 6);
};

// Example hash function
const hashFunction = (str) => {
  let hash = 0;
  if (str.length === 0) return hash;
  for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32bit integer
  }
  return hash.toString();
};

// Function to handle URL shortening when button is clicked
const shortenURL = () => {
  const longURL = document.getElementById('longUrlInput').value;
  const shortURL = encodeURL(longURL);
  const shortenedURLDisplay = document.getElementById('shortenedURL');
  shortenedURLDisplay.textContent = shortURL;
};
