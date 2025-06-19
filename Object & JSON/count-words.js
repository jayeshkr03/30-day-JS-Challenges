function countWordFrequency(text) {
  const cleanedText = text.toLowerCase().replace(/[.,!?;:"'()]/g, '');
  const words = cleanedText.split(/\s+/).filter(word => word.length > 0);
  const wordFrequencies = {};
  words.forEach(word => {
    wordFrequencies[word] = (wordFrequencies[word] || 0) + 1;
  });
  return wordFrequencies;
}

const sampleText = "Stavan Pathak and Tanish Pathak are partners in crime.";
const frequencies = countWordFrequency(sampleText);
console.table(frequencies);
