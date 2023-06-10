const extendHex = (shortHex) => {
  // write your code here
	if (shortHex.startsWith('#')) {
    shortHex = shortHex.slice(1);
  }

  // Extend the short hex code to full length
  let fullHex = '';
  for (let i = 0; i < shortHex.length; i++) {
    const char = shortHex[i];
    // Repeat the character twice to get the full component
    fullHex += char + char;
  }

  // Add the '#' prefix to the full hex code
  return '#' + fullHex;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
