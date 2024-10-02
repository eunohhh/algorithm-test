function solution(s) {
  return s
    .split('') 
    .sort()
    .reverse()
    .join(''); 
}

function test() {
  const testCases = [
    { input: "Zbcdefg", expected: "gfedcbZ" },
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = solution(input);
      
      if (JSON.stringify(result) !== JSON.stringify(expected)) {
        throw new Error(`Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(result)}`);
      }
      
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

test();