/****************************************** 😪😪😪😪😪😪😪😪ECMAScript Modules (ESM) 😪😪😪😪😪😪😪😪😪 **************************************/
/**
 * ✅ which is the official module system for JavaScript as defined by the ECMAScript standard.
 * ✅ ESM is commonly associated with ES6 (ECMAScript 2015) and later versions.
 * ✅ Unlike AMD (Asynchronous Module Definition) or CommonJS, ESM is designed to work in both browser and server-side environments.
 */

/******************* ⏺⏺⏺ Define a Module ⏺⏺⏺ *****************
 *
 * ✅ In ESM, each file is treated as a module. You can export values from a module using the export keyword
 */

// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

/******************* ⏺⏺⏺ Importing Modules ⏺⏺⏺ *****************
 *
 * ✅ To use values from another module, you use the import keyword. Here's an example of importing the math module
 */

// app.js
import { add, subtract } from './math';

const result1 = add(5, 3);
const result2 = subtract(8, 3);

console.log(result1); // Output: 8
console.log(result2); // Output: 5

/******************* ⏺⏺⏺ Dynamic Imports ⏺⏺⏺ *****************
 *
 * ✅ ESM supports dynamic imports, allowing you to import modules conditionally or asynchronously.
 */

// app.js
const dynamicModule = 'math';

import(dynamicModule)
  .then(module => {
    const result = module.add(10, 5);
    console.log(result); // Output: 15
  })
  .catch(error => console.error(error));
