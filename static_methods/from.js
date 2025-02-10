console.log(Array.from('foo'));
console.log(Array.from([1, 2, 3], (x) => x + x));

// Cool browser example
const images = document.querySelectorAll('img');
const sources = Array.from(images, (image) => image.src);
const insecureSources = sources.filter((link) => link.startsWith('http://'));
