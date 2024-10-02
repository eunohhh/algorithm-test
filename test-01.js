function solution(arr) {
  if (arr.length === 1) return [-1];
  const min = Math.min(...arr);
  return arr.filter(num => num !== min);
}

function test() {
  const testCases = [
    { input: [4, 3, 2, 1], expected: [4, 3, 2] },
    { input: [10], expected: [-1] },
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