/****************************************** 😪😪😪😪😪😪😪😪Asynchronous Module Definition (AMD) 😪😪😪😪😪😪😪😪😪 **************************************/
// 🔗 https://datacadamia.com/web/javascript/module/amd

/**
 * ✅ Asynchronous Module Definition (AMD) is a specification for modular, asynchronous JavaScript code.
 * ✅ It provides a way to define and load modules in a non-blocking, asynchronous manner, which is particularly useful for browser-based applications.
 * ✅ AMD is primarily used with client-side JavaScript and is designed to address the challenges of managing dependencies and loading scripts in a modular way.
 */

/******************* ⏺⏺⏺ Define a Module ⏺⏺⏺ *****************
 *
 * ✅ The basic building block in AMD is the module. A module is a self-contained unit of code that encapsulates functionality.
 * ✅ You define a module using the define function, specifying its dependencies and the function that represents the module
 */

// Module definition
define(['dependency1', 'dependency2'], function (dep1, dep2) {
  // Module code
  return {
    // Module interface
  };
});

// ❗❗❗ In this example, dependency1 and dependency2 are other modules that this module depends on. The function receives those dependencies as parameters.

/******************* ⏺⏺⏺ Loading Modules ⏺⏺⏺ *****************
 *
 * ✅ AMD provides a way to load modules asynchronously. This is crucial for managing dependencies without blocking the execution of other parts of the application.
 * ✅ The require function is used for this purpose
 */

// Module loading
require(['module1', 'module2'], function (mod1, mod2) {
  // Code to execute after modules are loaded
});

// ❗❗❗ In this example, dependency1 and dependency2 are other modules that this module depends on. The function receives those dependencies as parameters.

/******************* ⏺⏺⏺ Example ⏺⏺⏺ *****************
 *
 * ✅ Let's consider a simple example with two modules: math and app. The app module depends on the math module.
 */

// math.js
define([], function () {
  return {
    add: function (x, y) {
      return x + y;
    },
    subtract: function (x, y) {
      return x - y;
    },
  };
});

// app.js
define(['math'], function (math) {
  var result = math.add(5, 3);
  console.log(result); // Output: 8
});

// main.js
require(['app'], function (app) {
  // Code to execute after the 'app' module is loaded
  console.log('app');
});

/******************* ⛔⛔⛔ Problems ⛔⛔⛔ *****************
  ✅ While Asynchronous Module Definition (AMD) has been widely used for modular development in JavaScript.
  ✅ it is essential to acknowledge some potential challenges and criticisms associated with it. Here are some of the problems often discussed in the context of AMD
*/

// 1️⃣ Complexity and Boilerplate
/**
 * Some developers find that the syntax of AMD, especially when using libraries like RequireJS, introduces additional complexity and boilerplate code
 */

// 2️⃣ Dual-Loading Overhead
/**
 * Since AMD modules are loaded asynchronously, there is the potential for an initial page load to become slower because
 * it involves loading the loader (e.g., RequireJS) and then fetching the individual modules.
 */

// 3️⃣ Performance Considerations
/**
 * The asynchronous loading of modules can introduce some performance considerations.
 * For example, if not managed carefully, there might be delays in the execution of dependent code, leading to potential performance bottlenecks
 */
