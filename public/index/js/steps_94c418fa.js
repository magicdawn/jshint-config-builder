'use strict';

/**
 * 自定义的
 * 如 maxerr indent
 * options = [ {defaultValue}, { value: defaultValue, input = true } ]
 *
 *
 * true or false
 * options = [ true, false ]
 *
 * 多选一
 * quote
 * options = [ true, false, single, double ]
 *
 *
 * 然后多选的
 * Environments multiselect
 * options
 *
 * options = [
 * 	{
 * 		value: 值,
 * 		isDefault: 是否是默认
 * 		input: 是否应输入
 * 		desc: 描述
 * 	}
 * ]
 */


module.exports = [

  {
    name: 'maxerr',
    options: [{
      value: 50,
      isDefault: true,
      desc: 'max error count'
    }, {
      value: 50,
      input: true
    }]
  },

  {
    name: 'bitwise',
    options: [{
      value: true,
      isDefault: true,
      desc: 'true: Prohibit bitwise operators (&, |, ^, etc.)'
    }, {
      value: false
    }]
  },

  {
    name: 'camelcase',
    options: [{
      value: true,
      desc: 'true: Identifiers must be in camelCase'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'curly',
    options: [{
      value: true,
      desc: 'true: Require {} for every new block or scope',
      isDefault: true
    }, {
      value: false
    }]
  },

  {
    name: 'eqeqeq',
    options: [{
      value: true,
      desc: 'true: Require triple equals (===) for comparison',
      isDefault: true
    }, {
      value: false
    }]
  },

  {
    name: 'forin',
    options: [

      {
        value: true,
        isDefault: true,
        desc: 'true: Require filtering for..in loops with obj.hasOwnProperty()'
      }, {
        value: false
      }
    ]
  },

  {
    name: 'freeze',
    options: [

      {
        value: true,
        isDefault: true,
        desc: 'true: prohibits overwriting prototypes of native objects such as Array, Date etc.'
      }, {
        value: false
      }
    ]
  },

  {
    name: 'immed',
    options: [{
      value: true,
      desc: 'true: Require immediate invocations to be wrapped in parens e.g. `(function () { } ());`'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'indent',
    options: [{
      value: 4,
      isDefault: true,
      desc: 'using 4 space'
    }, {
      value: 4,
      input: true
    }]
  },

  {
    name: 'latedef',
    options: [{
      value: true,
      desc: 'true: Require variables/functions to be defined before being used'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'newcap',
    options: [{
      value: true,
      desc: 'true: Require capitalization of all constructor functions e.g. `new F()`'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'noarg',
    options: [{
      value: true,
      isDefault: true,
      desc: 'true: Prohibit use of `arguments.caller` and `arguments.callee`'
    }, {
      value: false
    }]
  },

  {
    name: 'noempty',
    options: [{
      value: true,
      isDefault: true,
      desc: 'true: Prohibit use of empty blocks'
    }, {
      value: false
    }]
  },

  {
    name: 'nonbsp',
    options: [{
      value: true,
      isDefault: true,
      desc: 'true: Prohibit "non-breaking whitespace" characters.'
    }, {
      value: false
    }]
  },

  {
    name: 'nonew',
    options: [{
      value: true,
      desc: 'true: Prohibit use of constructors for side-effects (without assignment)'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'plusplus',
    options: [{
      value: true,
      desc: 'true: Prohibit use of `++` & `--`'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'quotmark',
    options: [{
      value: true,
      desc: 'Quotation mark consistency: ensure whatever is used is consistent'
    }, {
      value: false,
      desc: 'do nothing (default)',
      isDefault: true
    }, {
      value: 'single',
      desc: 'require single quotes'
    }, {
      value: 'double',
      desc: 'require double quotes'
    }]
  },

  {
    name: 'undef',
    options: [{
      value: true,
      isDefault: true,
      desc: 'true: Require all non-global variables to be declared (prevents global leaks)'
    }, {
      value: false
    }]
  },

  {
    name: 'unused',
    options: [{
      value: true,
      isDefault: true,
      desc: 'Unused variables: all variables, last function parameter'
    }, {
      value: 'vars',
      desc: 'Unused variables: all variables only'
    }, {
      value: 'strict',
      desc: 'Unused variables: all variables, all function parameters'
    }]
  },

  {
    name: 'strict',
    options: [{
      value: true,
      isDefault: true,
      desc: 'true: Requires all functions run in ES5 Strict Mode'
    }, {
      value: false
    }]
  },

  {
    name: 'maxparams',
    options: [{
      value: false,
      isDefault: true,
      desc: 'Max number of formal params allowed per function'
    }, {
      value: 0,
      input: true
    }]
  },

  {
    name: 'maxdepth',
    options: [{
      value: false,
      isDefault: true,
      desc: 'Max depth of nested blocks (within functions)'
    }, {
      value: 0,
      input: true
    }]
  },

  {
    name: 'maxstatements',
    options: [{
      value: false,
      isDefault: true
    }, {
      value: 0,
      input: true
    }]
  },

  {
    name: 'maxcomplexity',
    options: [

      {
        value: false,
        isDefault: true,
        desc: 'Max cyclomatic complexity per function'
      }, {
        value: 0,
        input: true
      }
    ]
  },

  {
    name: 'maxlen',
    options: [{
      value: false,
      isDefault: true,
      desc: 'Max number of characters per line'
    }, {
      value: 0,
      input: true
    }]
  },

  {
    name: 'varstmt',
    options: [{
      value: true,
      desc: 'true: Disallow any var statements. Only `let` and `const` are allowed.'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'asi',
    options: [{
      value: true,
      desc: 'true: Tolerate Automatic Semicolon Insertion (no semicolons)'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'boss',
    options: [{
      value: true,
      desc: 'true: Tolerate assignments where comparisons would be expected'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'debug',
    options: [{
      value: true,
      desc: 'true: Allow debugger statements e.g. browser breakpoints.'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'eqnull',
    options: [{
      value: true,
      desc: 'true: Tolerate use of `== null`'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'es5',
    options: [{
      value: true,
      desc: 'true: Allow ES5 syntax (ex: getters and setters)'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'esnext',
    options: [{
      value: true,
      desc: 'true: Allow ES.next (ES6) syntax (ex: `const`)'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'moz',
    options: [{
      value: true,
      desc: 'true: Allow Mozilla specific syntax (extends and overrides esnext features)' +
        '(ex: `for each`, multiple try/catch, function expression…)'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'evil',
    options: [{
      value: true,
      desc: 'true: Tolerate use of `eval` and `new Function()`'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'expr',
    options: [{
      value: true,
      desc: 'true: Tolerate `ExpressionStatement` as Programs'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'funcscope',
    options: [{
      value: true,
      desc: 'true: Tolerate defining variables inside control statements'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'globalstrict',
    options: [{
      value: true,
      desc: 'true: Allow global "use strict" (also enables `strict`)'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'iterator',
    options: [{
      value: true,
      desc: 'true: Tolerate using the `__iterator__` property'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'lastsemic',
    options: [{
      value: true,
      desc: 'true: Tolerate omitting a semicolon for the last statement of a 1-line block'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'laxbreak',
    options: [{
      value: true,
      desc: 'true: Tolerate possibly unsafe line breakings'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'laxcomma',
    options: [{
      value: true,
      desc: 'true: Tolerate comma-first style coding'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'loopfunc',
    options: [{
      value: true,
      desc: 'true: Tolerate functions being defined in loops'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'multistr',
    options: [{
      value: true,
      desc: 'true: Tolerate multi-line strings'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'noyield',
    options: [{
      value: true,
      desc: 'true: Tolerate generator functions with no yield statement in them.'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'notypeof',
    options: [{
      value: true,
      desc: 'true: Tolerate invalid typeof operator values'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'proto',
    options: [{
      value: true,
      desc: 'true: Tolerate using the `__proto__` property'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'scripturl',
    options: [{
      value: true,
      desc: 'true: Tolerate script-targeted URLs'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'shadow',
    options: [{
      value: true,
      desc: 'true: Allows re-define variables later in code e.g. `var x=1; x=2;`'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'sub',
    options: [{
      value: true,
      desc: 'true: Tolerate using `[]` notation when it can still be expressed in dot notation'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'supernew',
    options: [{
      value: true,
      desc: 'true: Tolerate `new function () { ... };` and `new Object;`'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'validthis',
    options: [{
      value: true,
      desc: 'true: Tolerate using this in a non-constructor function'
    }, {
      value: false,
      isDefault: true
    }]
  },

  {
    name: 'Environments',
    multiselect: true,
    options: [

      {
        name: 'browser',
        value: true,
        defaultValue: true,
        desc: 'Web Browser (window, document, etc)'
      },

      {
        name: 'browserify',
        value: false,
        desc: 'Browserify (node.js code in the browser)'
      },

      {
        name: 'couch',
        value: false,
        desc: 'CouchDB'
      },

      {
        name: 'devel',
        value: true,
        defaultValue: true,
        desc: 'Development/debugging (alert, confirm, etc)'
      },

      {
        name: 'dojo',
        value: false,
        desc: 'Dojo Toolkit'
      },

      {
        name: 'jasmine',
        value: false,
        desc: 'Jasmine'
      },

      {
        name: 'jquery',
        value: false,
        desc: 'jQuery'
      },

      {
        name: 'mocha',
        value: true,
        defaultValue: true,
        desc: 'Mocha'
      },

      {
        name: 'mootools',
        value: false,
        desc: 'MooTools'
      },

      {
        name: 'node',
        value: false,
        desc: 'Node.js'
      },

      {
        name: 'nonstandard',
        value: false,
        desc: 'Widely adopted globals (escape, unescape, etc)'
      },

      {
        name: 'phantom',
        value: false,
        desc: 'PhantomJS'
      },

      {
        name: 'prototypejs',
        value: false,
        desc: 'Prototype and Scriptaculous'
      },

      {
        name: 'qunit',
        value: false,
        desc: 'QUnit'
      },

      {
        name: 'rhino',
        value: false,
        desc: 'Rhino'
      },

      {
        name: 'shelljs',
        value: false,
        desc: 'ShellJS'
      },

      {
        name: 'typed',
        value: false,
        desc: 'Globals for typed array constructions'
      },

      {
        name: 'worker',
        value: false,
        desc: 'Web Workers'
      },

      {
        name: 'wsh',
        value: false,
        desc: 'Windows Scripting Host'
      },

      {
        name: 'yui',
        value: false,
        desc: 'Yahoo User Interface'
      }
    ]
  }
];