export function getSimilarString(name: string, list: string[]): string {
  let maxSimilarity = 0;
  let similarString = "";

  for (const str of list) {
    let similarity = 0;
    for (let i = 0; i < name.length; i++) {
      if (str[i] === name[i]) {
        similarity++;
      }
    }
    if (similarity > maxSimilarity) {
      maxSimilarity = similarity;
      similarString = str;
    }
  }

  console.log({ similarString });
  return similarString;
}
