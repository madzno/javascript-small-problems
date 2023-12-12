function determineStartandEnd(string, start, end) {
  if (start < 0 || Number.isNaN(Number(start))) {
    start = 0;
  } else if ((end !== undefined) && (end < 0 || Number.isNaN(Number(end)))) {
    end = 0;
  } else if (end > string.length) {
    end = string.length;
  }

  return [start, end];
}

function determineIndices(string, start, end) {
  let startingIndex;
  let endingIndex;
  if (end === undefined) {
    startingIndex = start;
    endingIndex = string.length;
  }
  else if (start < end) {
    startingIndex = start;
    endingIndex = end;
  } else if (end < start) {
    startingIndex = end;
    endingIndex = start;
  }

  return [startingIndex, endingIndex];
}

function substring(string, start, end) {
  start = determineStartandEnd(string, start, end)[0];
  end = determineStartandEnd(string, start, end)[1];

  let substring = '';
  if (start === end) return substring;

  let startingIndex = determineIndices(string, start, end)[0];
  let endingIndex = determineIndices(string, start, end)[1];

  while (startingIndex < endingIndex) {
    substring += string[startingIndex]
    startingIndex += 1
  }

  return substring;
}

let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"
