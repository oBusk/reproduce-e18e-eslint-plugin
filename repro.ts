const a = [1, 2, 3];
const bArray = [4, 5, 6];
const bValue = 4;

let result;

result = a.concat(bArray);
// With type information becomes: [...a, ...bArray] ✅
// Without type information becomes: [...a, ...bArray] ✅

result = a.concat(bValue);
// With type information becomes: [...a, bValue] ✅
// Without type information becomes: [...a, ...bValue] ❌

function processItems(items: string | string[]): string[] {
  return ([] as string[]).concat(items);
  // With type information becomes: [...[] as string[], items] ❌
  // Without type information becomes: [...[] as string[], ...items] ❌
}
