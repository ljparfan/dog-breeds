export function getSimilarString(name: string, list: string[]): string {
  name = name.toLowerCase();
  list = list.map((str) => str.toLowerCase());
  let maxSimilarity = 0;
  let similarString = list[0];

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

  return similarString;
}
