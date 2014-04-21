(function (global, factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = global.document ? factory(global, true) : function (w) {
      if (!w.document) {
        throw new Error('jQuery requires a window with a document');
      }
      return factory(w);
    };
  } else {
    factory(global);
  }
}(typeof window !== 'undefined' ? window : this, function (window, noGlobal) {
  var deletedIds = [];
  var slice = deletedIds.slice;
  var concat = deletedIds.concat;
  var push = deletedIds.push;
  var indexOf = deletedIds.indexOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var trim = ''.trim;
  var support = {};
  var version = '1.11.0', jQuery = function (selector, context) {
      return new jQuery.fn.init(selector, context);
    }, rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rmsPrefix = /^-ms-/, rdashAlpha = /-([\da-z])/gi, fcamelCase = function (all, letter) {
      return letter.toUpperCase();
    };
  jQuery.fn = jQuery.prototype = {
    jquery: version,
    constructor: jQuery,
    selector: '',
    length: 0,
    toArray: function () {
      return slice.call(this);
    },
    get: function (num) {
      return num != null ? num < 0 ? this[num + this.length] : this[num] : slice.call(this);
    },
    pushStack: function (elems) {
      var ret = jQuery.merge(this.constructor(), elems);
      ret.prevObject = this;
      ret.context = this.context;
      return ret;
    },
    each: function (callback, args) {
      return jQuery.each(this, callback, args);
    },
    map: function (callback) {
      return this.pushStack(jQuery.map(this, function (elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    slice: function () {
      return this.pushStack(slice.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (i) {
      var len = this.length, j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor(null);
    },
    push: push,
    sort: deletedIds.sort,
    splice: deletedIds.splice
  };
  jQuery.extend = jQuery.fn.extend = function () {
    var src, copyIsArray, copy, name, options, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
    if (typeof target === 'boolean') {
      deep = target;
      target = arguments[i] || {};
      i++;
    }
    if (typeof target !== 'object' && !jQuery.isFunction(target)) {
      target = {};
    }
    if (i === length) {
      target = this;
      i--;
    }
    for (; i < length; i++) {
      if ((options = arguments[i]) != null) {
        for (name in options) {
          src = target[name];
          copy = options[name];
          if (target === copy) {
            continue;
          }
          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && jQuery.isArray(src) ? src : [];
            } else {
              clone = src && jQuery.isPlainObject(src) ? src : {};
            }
            target[name] = jQuery.extend(deep, clone, copy);
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }
    return target;
  };
  jQuery.extend({
    expando: 'jQuery' + (version + Math.random()).replace(/\D/g, ''),
    isReady: true,
    error: function (msg) {
      throw new Error(msg);
    },
    noop: function () {
    },
    isFunction: function (obj) {
      return jQuery.type(obj) === 'function';
    },
    isArray: Array.isArray || function (obj) {
      return jQuery.type(obj) === 'array';
    },
    isWindow: function (obj) {
      return obj != null && obj == obj.window;
    },
    isNumeric: function (obj) {
      return obj - parseFloat(obj) >= 0;
    },
    isEmptyObject: function (obj) {
      var name;
      for (name in obj) {
        return false;
      }
      return true;
    },
    isPlainObject: function (obj) {
      var key;
      if (!obj || jQuery.type(obj) !== 'object' || obj.nodeType || jQuery.isWindow(obj)) {
        return false;
      }
      try {
        if (obj.constructor && !hasOwn.call(obj, 'constructor') && !hasOwn.call(obj.constructor.prototype, 'isPrototypeOf')) {
          return false;
        }
      } catch (e) {
        return false;
      }
      if (support.ownLast) {
        for (key in obj) {
          return hasOwn.call(obj, key);
        }
      }
      for (key in obj) {
      }
      return key === undefined || hasOwn.call(obj, key);
    },
    type: function (obj) {
      if (obj == null) {
        return obj + '';
      }
      return typeof obj === 'object' || typeof obj === 'function' ? class2type[toString.call(obj)] || 'object' : typeof obj;
    },
    globalEval: function (data) {
      if (data && jQuery.trim(data)) {
        (window.execScript || function (data) {
          window['eval'].call(window, data);
        })(data);
      }
    },
    camelCase: function (string) {
      return string.replace(rmsPrefix, 'ms-').replace(rdashAlpha, fcamelCase);
    },
    nodeName: function (elem, name) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    },
    each: function (obj, callback, args) {
      var value, i = 0, length = obj.length, isArray = isArraylike(obj);
      if (args) {
        if (isArray) {
          for (; i < length; i++) {
            value = callback.apply(obj[i], args);
            if (value === false) {
              break;
            }
          }
        } else {
          for (i in obj) {
            value = callback.apply(obj[i], args);
            if (value === false) {
              break;
            }
          }
        }
      } else {
        if (isArray) {
          for (; i < length; i++) {
            value = callback.call(obj[i], i, obj[i]);
            if (value === false) {
              break;
            }
          }
        } else {
          for (i in obj) {
            value = callback.call(obj[i], i, obj[i]);
            if (value === false) {
              break;
            }
          }
        }
      }
      return obj;
    },
    trim: trim && !trim.call('\ufeff\xa0') ? function (text) {
      return text == null ? '' : trim.call(text);
    } : function (text) {
      return text == null ? '' : (text + '').replace(rtrim, '');
    },
    makeArray: function (arr, results) {
      var ret = results || [];
      if (arr != null) {
        if (isArraylike(Object(arr))) {
          jQuery.merge(ret, typeof arr === 'string' ? [arr] : arr);
        } else {
          push.call(ret, arr);
        }
      }
      return ret;
    },
    inArray: function (elem, arr, i) {
      var len;
      if (arr) {
        if (indexOf) {
          return indexOf.call(arr, elem, i);
        }
        len = arr.length;
        i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
        for (; i < len; i++) {
          if (i in arr && arr[i] === elem) {
            return i;
          }
        }
      }
      return -1;
    },
    merge: function (first, second) {
      var len = +second.length, j = 0, i = first.length;
      while (j < len) {
        first[i++] = second[j++];
      }
      if (len !== len) {
        while (second[j] !== undefined) {
          first[i++] = second[j++];
        }
      }
      first.length = i;
      return first;
    },
    grep: function (elems, callback, invert) {
      var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);
        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i]);
        }
      }
      return matches;
    },
    map: function (elems, callback, arg) {
      var value, i = 0, length = elems.length, isArray = isArraylike(elems), ret = [];
      if (isArray) {
        for (; i < length; i++) {
          value = callback(elems[i], i, arg);
          if (value != null) {
            ret.push(value);
          }
        }
      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);
          if (value != null) {
            ret.push(value);
          }
        }
      }
      return concat.apply([], ret);
    },
    guid: 1,
    proxy: function (fn, context) {
      var args, proxy, tmp;
      if (typeof context === 'string') {
        tmp = fn[context];
        context = fn;
        fn = tmp;
      }
      if (!jQuery.isFunction(fn)) {
        return undefined;
      }
      args = slice.call(arguments, 2);
      proxy = function () {
        return fn.apply(context || this, args.concat(slice.call(arguments)));
      };
      proxy.guid = fn.guid = fn.guid || jQuery.guid++;
      return proxy;
    },
    now: function () {
      return +new Date();
    },
    support: support
  });
  jQuery.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (i, name) {
    class2type['[object ' + name + ']'] = name.toLowerCase();
  });
  function isArraylike(obj) {
    var length = obj.length, type = jQuery.type(obj);
    if (type === 'function' || jQuery.isWindow(obj)) {
      return false;
    }
    if (obj.nodeType === 1 && length) {
      return true;
    }
    return type === 'array' || length === 0 || typeof length === 'number' && length > 0 && length - 1 in obj;
  }
  var Sizzle = function (window) {
      var i, support, Expr, getText, isXML, compile, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = 'sizzle' + -new Date(), preferredDoc = window.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), sortOrder = function (a, b) {
          if (a === b) {
            hasDuplicate = true;
          }
          return 0;
        }, strundefined = typeof undefined, MAX_NEGATIVE = 1 << 31, hasOwn = {}.hasOwnProperty, arr = [], pop = arr.pop, push_native = arr.push, push = arr.push, slice = arr.slice, indexOf = arr.indexOf || function (elem) {
          var i = 0, len = this.length;
          for (; i < len; i++) {
            if (this[i] === elem) {
              return i;
            }
          }
          return -1;
        }, booleans = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped', whitespace = '[\\x20\\t\\r\\n\\f]', characterEncoding = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+', identifier = characterEncoding.replace('w', 'w#'), attributes = '\\[' + whitespace + '*(' + characterEncoding + ')' + whitespace + '*(?:([*^$|!~]?=)' + whitespace + '*(?:([\'"])((?:\\\\.|[^\\\\])*?)\\3|(' + identifier + ')|)|)' + whitespace + '*\\]', pseudos = ':(' + characterEncoding + ')(?:\\((([\'"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|' + attributes.replace(3, 8) + ')*)|.*)\\)|)', rtrim = new RegExp('^' + whitespace + '+|((?:^|[^\\\\])(?:\\\\.)*)' + whitespace + '+$', 'g'), rcomma = new RegExp('^' + whitespace + '*,' + whitespace + '*'), rcombinators = new RegExp('^' + whitespace + '*([>+~]|' + whitespace + ')' + whitespace + '*'), rattributeQuotes = new RegExp('=' + whitespace + '*([^\\]\'"]*?)' + whitespace + '*\\]', 'g'), rpseudo = new RegExp(pseudos), ridentifier = new RegExp('^' + identifier + '$'), matchExpr = {
          'ID': new RegExp('^#(' + characterEncoding + ')'),
          'CLASS': new RegExp('^\\.(' + characterEncoding + ')'),
          'TAG': new RegExp('^(' + characterEncoding.replace('w', 'w*') + ')'),
          'ATTR': new RegExp('^' + attributes),
          'PSEUDO': new RegExp('^' + pseudos),
          'CHILD': new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + whitespace + '*(even|odd|(([+-]|)(\\d*)n|)' + whitespace + '*(?:([+-]|)' + whitespace + '*(\\d+)|))' + whitespace + '*\\)|)', 'i'),
          'bool': new RegExp('^(?:' + booleans + ')$', 'i'),
          'needsContext': new RegExp('^' + whitespace + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + whitespace + '*((?:-\\d)?\\d*)' + whitespace + '*\\)|)(?=[^-]|$)', 'i')
        }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, rescape = /'|\\/g, runescape = new RegExp('\\\\([\\da-f]{1,6}' + whitespace + '?|(' + whitespace + ')|.)', 'ig'), funescape = function (_, escaped, escapedWhitespace) {
          var high = '0x' + escaped - 65536;
          return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
        };
      try {
        push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
        arr[preferredDoc.childNodes.length].nodeType;
      } catch (e) {
        push = {
          apply: arr.length ? function (target, els) {
            push_native.apply(target, slice.call(els));
          } : function (target, els) {
            var j = target.length, i = 0;
            while (target[j++] = els[i++]) {
            }
            target.length = j - 1;
          }
        };
      }
      function Sizzle(selector, context, results, seed) {
        var match, elem, m, nodeType, i, groups, old, nid, newContext, newSelector;
        if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
          setDocument(context);
        }
        context = context || document;
        results = results || [];
        if (!selector || typeof selector !== 'string') {
          return results;
        }
        if ((nodeType = context.nodeType) !== 1 && nodeType !== 9) {
          return [];
        }
        if (documentIsHTML && !seed) {
          if (match = rquickExpr.exec(selector)) {
            if (m = match[1]) {
              if (nodeType === 9) {
                elem = context.getElementById(m);
                if (elem && elem.parentNode) {
                  if (elem.id === m) {
                    results.push(elem);
                    return results;
                  }
                } else {
                  return results;
                }
              } else {
                if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
                  results.push(elem);
                  return results;
                }
              }
            } else if (match[2]) {
              push.apply(results, context.getElementsByTagName(selector));
              return results;
            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
              push.apply(results, context.getElementsByClassName(m));
              return results;
            }
          }
          if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
            nid = old = expando;
            newContext = context;
            newSelector = nodeType === 9 && selector;
            if (nodeType === 1 && context.nodeName.toLowerCase() !== 'object') {
              groups = tokenize(selector);
              if (old = context.getAttribute('id')) {
                nid = old.replace(rescape, '\\$&');
              } else {
                context.setAttribute('id', nid);
              }
              nid = '[id=\'' + nid + '\'] ';
              i = groups.length;
              while (i--) {
                groups[i] = nid + toSelector(groups[i]);
              }
              newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
              newSelector = groups.join(',');
            }
            if (newSelector) {
              try {
                push.apply(results, newContext.querySelectorAll(newSelector));
                return results;
              } catch (qsaError) {
              } finally {
                if (!old) {
                  context.removeAttribute('id');
                }
              }
            }
          }
        }
        return select(selector.replace(rtrim, '$1'), context, results, seed);
      }
      function createCache() {
        var keys = [];
        function cache(key, value) {
          if (keys.push(key + ' ') > Expr.cacheLength) {
            delete cache[keys.shift()];
          }
          return cache[key + ' '] = value;
        }
        return cache;
      }
      function markFunction(fn) {
        fn[expando] = true;
        return fn;
      }
      function assert(fn) {
        var div = document.createElement('div');
        try {
          return !!fn(div);
        } catch (e) {
          return false;
        } finally {
          if (div.parentNode) {
            div.parentNode.removeChild(div);
          }
          div = null;
        }
      }
      function addHandle(attrs, handler) {
        var arr = attrs.split('|'), i = attrs.length;
        while (i--) {
          Expr.attrHandle[arr[i]] = handler;
        }
      }
      function siblingCheck(a, b) {
        var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
        if (diff) {
          return diff;
        }
        if (cur) {
          while (cur = cur.nextSibling) {
            if (cur === b) {
              return -1;
            }
          }
        }
        return a ? 1 : -1;
      }
      function createInputPseudo(type) {
        return function (elem) {
          var name = elem.nodeName.toLowerCase();
          return name === 'input' && elem.type === type;
        };
      }
      function createButtonPseudo(type) {
        return function (elem) {
          var name = elem.nodeName.toLowerCase();
          return (name === 'input' || name === 'button') && elem.type === type;
        };
      }
      function createPositionalPseudo(fn) {
        return markFunction(function (argument) {
          argument = +argument;
          return markFunction(function (seed, matches) {
            var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
            while (i--) {
              if (seed[j = matchIndexes[i]]) {
                seed[j] = !(matches[j] = seed[j]);
              }
            }
          });
        });
      }
      function testContext(context) {
        return context && typeof context.getElementsByTagName !== strundefined && context;
      }
      support = Sizzle.support = {};
      isXML = Sizzle.isXML = function (elem) {
        var documentElement = elem && (elem.ownerDocument || elem).documentElement;
        return documentElement ? documentElement.nodeName !== 'HTML' : false;
      };
      setDocument = Sizzle.setDocument = function (node) {
        var hasCompare, doc = node ? node.ownerDocument || node : preferredDoc, parent = doc.defaultView;
        if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
          return document;
        }
        document = doc;
        docElem = doc.documentElement;
        documentIsHTML = !isXML(doc);
        if (parent && parent !== parent.top) {
          if (parent.addEventListener) {
            parent.addEventListener('unload', function () {
              setDocument();
            }, false);
          } else if (parent.attachEvent) {
            parent.attachEvent('onunload', function () {
              setDocument();
            });
          }
        }
        support.attributes = assert(function (div) {
          div.className = 'i';
          return !div.getAttribute('className');
        });
        support.getElementsByTagName = assert(function (div) {
          div.appendChild(doc.createComment(''));
          return !div.getElementsByTagName('*').length;
        });
        support.getElementsByClassName = rnative.test(doc.getElementsByClassName) && assert(function (div) {
          div.innerHTML = '<div class=\'a\'></div><div class=\'a i\'></div>';
          div.firstChild.className = 'i';
          return div.getElementsByClassName('i').length === 2;
        });
        support.getById = assert(function (div) {
          docElem.appendChild(div).id = expando;
          return !doc.getElementsByName || !doc.getElementsByName(expando).length;
        });
        if (support.getById) {
          Expr.find['ID'] = function (id, context) {
            if (typeof context.getElementById !== strundefined && documentIsHTML) {
              var m = context.getElementById(id);
              return m && m.parentNode ? [m] : [];
            }
          };
          Expr.filter['ID'] = function (id) {
            var attrId = id.replace(runescape, funescape);
            return function (elem) {
              return elem.getAttribute('id') === attrId;
            };
          };
        } else {
          delete Expr.find['ID'];
          Expr.filter['ID'] = function (id) {
            var attrId = id.replace(runescape, funescape);
            return function (elem) {
              var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode('id');
              return node && node.value === attrId;
            };
          };
        }
        Expr.find['TAG'] = support.getElementsByTagName ? function (tag, context) {
          if (typeof context.getElementsByTagName !== strundefined) {
            return context.getElementsByTagName(tag);
          }
        } : function (tag, context) {
          var elem, tmp = [], i = 0, results = context.getElementsByTagName(tag);
          if (tag === '*') {
            while (elem = results[i++]) {
              if (elem.nodeType === 1) {
                tmp.push(elem);
              }
            }
            return tmp;
          }
          return results;
        };
        Expr.find['CLASS'] = support.getElementsByClassName && function (className, context) {
          if (typeof context.getElementsByClassName !== strundefined && documentIsHTML) {
            return context.getElementsByClassName(className);
          }
        };
        rbuggyMatches = [];
        rbuggyQSA = [];
        if (support.qsa = rnative.test(doc.querySelectorAll)) {
          assert(function (div) {
            div.innerHTML = '<select t=\'\'><option selected=\'\'></option></select>';
            if (div.querySelectorAll('[t^=\'\']').length) {
              rbuggyQSA.push('[*^$]=' + whitespace + '*(?:\'\'|"")');
            }
            if (!div.querySelectorAll('[selected]').length) {
              rbuggyQSA.push('\\[' + whitespace + '*(?:value|' + booleans + ')');
            }
            if (!div.querySelectorAll(':checked').length) {
              rbuggyQSA.push(':checked');
            }
          });
          assert(function (div) {
            var input = doc.createElement('input');
            input.setAttribute('type', 'hidden');
            div.appendChild(input).setAttribute('name', 'D');
            if (div.querySelectorAll('[name=d]').length) {
              rbuggyQSA.push('name' + whitespace + '*[*^$|!~]?=');
            }
            if (!div.querySelectorAll(':enabled').length) {
              rbuggyQSA.push(':enabled', ':disabled');
            }
            div.querySelectorAll('*,:x');
            rbuggyQSA.push(',.*:');
          });
        }
        if (support.matchesSelector = rnative.test(matches = docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
          assert(function (div) {
            support.disconnectedMatch = matches.call(div, 'div');
            matches.call(div, '[s!=\'\']:x');
            rbuggyMatches.push('!=', pseudos);
          });
        }
        rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join('|'));
        rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join('|'));
        hasCompare = rnative.test(docElem.compareDocumentPosition);
        contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
          var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
          return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
        } : function (a, b) {
          if (b) {
            while (b = b.parentNode) {
              if (b === a) {
                return true;
              }
            }
          }
          return false;
        };
        sortOrder = hasCompare ? function (a, b) {
          if (a === b) {
            hasDuplicate = true;
            return 0;
          }
          var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
          if (compare) {
            return compare;
          }
          compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
          if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
            if (a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
              return -1;
            }
            if (b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
              return 1;
            }
            return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
          }
          return compare & 4 ? -1 : 1;
        } : function (a, b) {
          if (a === b) {
            hasDuplicate = true;
            return 0;
          }
          var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [a], bp = [b];
          if (!aup || !bup) {
            return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
          } else if (aup === bup) {
            return siblingCheck(a, b);
          }
          cur = a;
          while (cur = cur.parentNode) {
            ap.unshift(cur);
          }
          cur = b;
          while (cur = cur.parentNode) {
            bp.unshift(cur);
          }
          while (ap[i] === bp[i]) {
            i++;
          }
          return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
        };
        return doc;
      };
      Sizzle.matches = function (expr, elements) {
        return Sizzle(expr, null, null, elements);
      };
      Sizzle.matchesSelector = function (elem, expr) {
        if ((elem.ownerDocument || elem) !== document) {
          setDocument(elem);
        }
        expr = expr.replace(rattributeQuotes, '=\'$1\']');
        if (support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
          try {
            var ret = matches.call(elem, expr);
            if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
              return ret;
            }
          } catch (e) {
          }
        }
        return Sizzle(expr, document, null, [elem]).length > 0;
      };
      Sizzle.contains = function (context, elem) {
        if ((context.ownerDocument || context) !== document) {
          setDocument(context);
        }
        return contains(context, elem);
      };
      Sizzle.attr = function (elem, name) {
        if ((elem.ownerDocument || elem) !== document) {
          setDocument(elem);
        }
        var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
        return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
      };
      Sizzle.error = function (msg) {
        throw new Error('Syntax error, unrecognized expression: ' + msg);
      };
      Sizzle.uniqueSort = function (results) {
        var elem, duplicates = [], j = 0, i = 0;
        hasDuplicate = !support.detectDuplicates;
        sortInput = !support.sortStable && results.slice(0);
        results.sort(sortOrder);
        if (hasDuplicate) {
          while (elem = results[i++]) {
            if (elem === results[i]) {
              j = duplicates.push(i);
            }
          }
          while (j--) {
            results.splice(duplicates[j], 1);
          }
        }
        sortInput = null;
        return results;
      };
      getText = Sizzle.getText = function (elem) {
        var node, ret = '', i = 0, nodeType = elem.nodeType;
        if (!nodeType) {
          while (node = elem[i++]) {
            ret += getText(node);
          }
        } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
          if (typeof elem.textContent === 'string') {
            return elem.textContent;
          } else {
            for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
              ret += getText(elem);
            }
          }
        } else if (nodeType === 3 || nodeType === 4) {
          return elem.nodeValue;
        }
        return ret;
      };
      Expr = Sizzle.selectors = {
        cacheLength: 50,
        createPseudo: markFunction,
        match: matchExpr,
        attrHandle: {},
        find: {},
        relative: {
          '>': {
            dir: 'parentNode',
            first: true
          },
          ' ': { dir: 'parentNode' },
          '+': {
            dir: 'previousSibling',
            first: true
          },
          '~': { dir: 'previousSibling' }
        },
        preFilter: {
          'ATTR': function (match) {
            match[1] = match[1].replace(runescape, funescape);
            match[3] = (match[4] || match[5] || '').replace(runescape, funescape);
            if (match[2] === '~=') {
              match[3] = ' ' + match[3] + ' ';
            }
            return match.slice(0, 4);
          },
          'CHILD': function (match) {
            match[1] = match[1].toLowerCase();
            if (match[1].slice(0, 3) === 'nth') {
              if (!match[3]) {
                Sizzle.error(match[0]);
              }
              match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === 'even' || match[3] === 'odd'));
              match[5] = +(match[7] + match[8] || match[3] === 'odd');
            } else if (match[3]) {
              Sizzle.error(match[0]);
            }
            return match;
          },
          'PSEUDO': function (match) {
            var excess, unquoted = !match[5] && match[2];
            if (matchExpr['CHILD'].test(match[0])) {
              return null;
            }
            if (match[3] && match[4] !== undefined) {
              match[2] = match[4];
            } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(')', unquoted.length - excess) - unquoted.length)) {
              match[0] = match[0].slice(0, excess);
              match[2] = unquoted.slice(0, excess);
            }
            return match.slice(0, 3);
          }
        },
        filter: {
          'TAG': function (nodeNameSelector) {
            var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
            return nodeNameSelector === '*' ? function () {
              return true;
            } : function (elem) {
              return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
            };
          },
          'CLASS': function (className) {
            var pattern = classCache[className + ' '];
            return pattern || (pattern = new RegExp('(^|' + whitespace + ')' + className + '(' + whitespace + '|$)')) && classCache(className, function (elem) {
              return pattern.test(typeof elem.className === 'string' && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute('class') || '');
            });
          },
          'ATTR': function (name, operator, check) {
            return function (elem) {
              var result = Sizzle.attr(elem, name);
              if (result == null) {
                return operator === '!=';
              }
              if (!operator) {
                return true;
              }
              result += '';
              return operator === '=' ? result === check : operator === '!=' ? result !== check : operator === '^=' ? check && result.indexOf(check) === 0 : operator === '*=' ? check && result.indexOf(check) > -1 : operator === '$=' ? check && result.slice(-check.length) === check : operator === '~=' ? (' ' + result + ' ').indexOf(check) > -1 : operator === '|=' ? result === check || result.slice(0, check.length + 1) === check + '-' : false;
            };
          },
          'CHILD': function (type, what, argument, first, last) {
            var simple = type.slice(0, 3) !== 'nth', forward = type.slice(-4) !== 'last', ofType = what === 'of-type';
            return first === 1 && last === 0 ? function (elem) {
              return !!elem.parentNode;
            } : function (elem, context, xml) {
              var cache, outerCache, node, diff, nodeIndex, start, dir = simple !== forward ? 'nextSibling' : 'previousSibling', parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType;
              if (parent) {
                if (simple) {
                  while (dir) {
                    node = elem;
                    while (node = node[dir]) {
                      if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                        return false;
                      }
                    }
                    start = dir = type === 'only' && !start && 'nextSibling';
                  }
                  return true;
                }
                start = [forward ? parent.firstChild : parent.lastChild];
                if (forward && useCache) {
                  outerCache = parent[expando] || (parent[expando] = {});
                  cache = outerCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = cache[0] === dirruns && cache[2];
                  node = nodeIndex && parent.childNodes[nodeIndex];
                  while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                    if (node.nodeType === 1 && ++diff && node === elem) {
                      outerCache[type] = [
                        dirruns,
                        nodeIndex,
                        diff
                      ];
                      break;
                    }
                  }
                } else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
                  diff = cache[1];
                } else {
                  while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                      if (useCache) {
                        (node[expando] || (node[expando] = {}))[type] = [
                          dirruns,
                          diff
                        ];
                      }
                      if (node === elem) {
                        break;
                      }
                    }
                  }
                }
                diff -= last;
                return diff === first || diff % first === 0 && diff / first >= 0;
              }
            };
          },
          'PSEUDO': function (pseudo, argument) {
            var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error('unsupported pseudo: ' + pseudo);
            if (fn[expando]) {
              return fn(argument);
            }
            if (fn.length > 1) {
              args = [
                pseudo,
                pseudo,
                '',
                argument
              ];
              return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
                var idx, matched = fn(seed, argument), i = matched.length;
                while (i--) {
                  idx = indexOf.call(seed, matched[i]);
                  seed[idx] = !(matches[idx] = matched[i]);
                }
              }) : function (elem) {
                return fn(elem, 0, args);
              };
            }
            return fn;
          }
        },
        pseudos: {
          'not': markFunction(function (selector) {
            var input = [], results = [], matcher = compile(selector.replace(rtrim, '$1'));
            return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
              var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
              while (i--) {
                if (elem = unmatched[i]) {
                  seed[i] = !(matches[i] = elem);
                }
              }
            }) : function (elem, context, xml) {
              input[0] = elem;
              matcher(input, null, xml, results);
              return !results.pop();
            };
          }),
          'has': markFunction(function (selector) {
            return function (elem) {
              return Sizzle(selector, elem).length > 0;
            };
          }),
          'contains': markFunction(function (text) {
            return function (elem) {
              return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
            };
          }),
          'lang': markFunction(function (lang) {
            if (!ridentifier.test(lang || '')) {
              Sizzle.error('unsupported lang: ' + lang);
            }
            lang = lang.replace(runescape, funescape).toLowerCase();
            return function (elem) {
              var elemLang;
              do {
                if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute('xml:lang') || elem.getAttribute('lang')) {
                  elemLang = elemLang.toLowerCase();
                  return elemLang === lang || elemLang.indexOf(lang + '-') === 0;
                }
              } while ((elem = elem.parentNode) && elem.nodeType === 1);
              return false;
            };
          }),
          'target': function (elem) {
            var hash = window.location && window.location.hash;
            return hash && hash.slice(1) === elem.id;
          },
          'root': function (elem) {
            return elem === docElem;
          },
          'focus': function (elem) {
            return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
          },
          'enabled': function (elem) {
            return elem.disabled === false;
          },
          'disabled': function (elem) {
            return elem.disabled === true;
          },
          'checked': function (elem) {
            var nodeName = elem.nodeName.toLowerCase();
            return nodeName === 'input' && !!elem.checked || nodeName === 'option' && !!elem.selected;
          },
          'selected': function (elem) {
            if (elem.parentNode) {
              elem.parentNode.selectedIndex;
            }
            return elem.selected === true;
          },
          'empty': function (elem) {
            for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
              if (elem.nodeType < 6) {
                return false;
              }
            }
            return true;
          },
          'parent': function (elem) {
            return !Expr.pseudos['empty'](elem);
          },
          'header': function (elem) {
            return rheader.test(elem.nodeName);
          },
          'input': function (elem) {
            return rinputs.test(elem.nodeName);
          },
          'button': function (elem) {
            var name = elem.nodeName.toLowerCase();
            return name === 'input' && elem.type === 'button' || name === 'button';
          },
          'text': function (elem) {
            var attr;
            return elem.nodeName.toLowerCase() === 'input' && elem.type === 'text' && ((attr = elem.getAttribute('type')) == null || attr.toLowerCase() === 'text');
          },
          'first': createPositionalPseudo(function () {
            return [0];
          }),
          'last': createPositionalPseudo(function (matchIndexes, length) {
            return [length - 1];
          }),
          'eq': createPositionalPseudo(function (matchIndexes, length, argument) {
            return [argument < 0 ? argument + length : argument];
          }),
          'even': createPositionalPseudo(function (matchIndexes, length) {
            var i = 0;
            for (; i < length; i += 2) {
              matchIndexes.push(i);
            }
            return matchIndexes;
          }),
          'odd': createPositionalPseudo(function (matchIndexes, length) {
            var i = 1;
            for (; i < length; i += 2) {
              matchIndexes.push(i);
            }
            return matchIndexes;
          }),
          'lt': createPositionalPseudo(function (matchIndexes, length, argument) {
            var i = argument < 0 ? argument + length : argument;
            for (; --i >= 0;) {
              matchIndexes.push(i);
            }
            return matchIndexes;
          }),
          'gt': createPositionalPseudo(function (matchIndexes, length, argument) {
            var i = argument < 0 ? argument + length : argument;
            for (; ++i < length;) {
              matchIndexes.push(i);
            }
            return matchIndexes;
          })
        }
      };
      Expr.pseudos['nth'] = Expr.pseudos['eq'];
      for (i in {
          radio: true,
          checkbox: true,
          file: true,
          password: true,
          image: true
        }) {
        Expr.pseudos[i] = createInputPseudo(i);
      }
      for (i in {
          submit: true,
          reset: true
        }) {
        Expr.pseudos[i] = createButtonPseudo(i);
      }
      function setFilters() {
      }
      setFilters.prototype = Expr.filters = Expr.pseudos;
      Expr.setFilters = new setFilters();
      function tokenize(selector, parseOnly) {
        var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + ' '];
        if (cached) {
          return parseOnly ? 0 : cached.slice(0);
        }
        soFar = selector;
        groups = [];
        preFilters = Expr.preFilter;
        while (soFar) {
          if (!matched || (match = rcomma.exec(soFar))) {
            if (match) {
              soFar = soFar.slice(match[0].length) || soFar;
            }
            groups.push(tokens = []);
          }
          matched = false;
          if (match = rcombinators.exec(soFar)) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: match[0].replace(rtrim, ' ')
            });
            soFar = soFar.slice(matched.length);
          }
          for (type in Expr.filter) {
            if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
              matched = match.shift();
              tokens.push({
                value: matched,
                type: type,
                matches: match
              });
              soFar = soFar.slice(matched.length);
            }
          }
          if (!matched) {
            break;
          }
        }
        return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
      }
      function toSelector(tokens) {
        var i = 0, len = tokens.length, selector = '';
        for (; i < len; i++) {
          selector += tokens[i].value;
        }
        return selector;
      }
      function addCombinator(matcher, combinator, base) {
        var dir = combinator.dir, checkNonElements = base && dir === 'parentNode', doneName = done++;
        return combinator.first ? function (elem, context, xml) {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              return matcher(elem, context, xml);
            }
          }
        } : function (elem, context, xml) {
          var oldCache, outerCache, newCache = [
              dirruns,
              doneName
            ];
          if (xml) {
            while (elem = elem[dir]) {
              if (elem.nodeType === 1 || checkNonElements) {
                if (matcher(elem, context, xml)) {
                  return true;
                }
              }
            }
          } else {
            while (elem = elem[dir]) {
              if (elem.nodeType === 1 || checkNonElements) {
                outerCache = elem[expando] || (elem[expando] = {});
                if ((oldCache = outerCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                  return newCache[2] = oldCache[2];
                } else {
                  outerCache[dir] = newCache;
                  if (newCache[2] = matcher(elem, context, xml)) {
                    return true;
                  }
                }
              }
            }
          }
        };
      }
      function elementMatcher(matchers) {
        return matchers.length > 1 ? function (elem, context, xml) {
          var i = matchers.length;
          while (i--) {
            if (!matchers[i](elem, context, xml)) {
              return false;
            }
          }
          return true;
        } : matchers[0];
      }
      function condense(unmatched, map, filter, context, xml) {
        var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
        for (; i < len; i++) {
          if (elem = unmatched[i]) {
            if (!filter || filter(elem, context, xml)) {
              newUnmatched.push(elem);
              if (mapped) {
                map.push(i);
              }
            }
          }
        }
        return newUnmatched;
      }
      function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
        if (postFilter && !postFilter[expando]) {
          postFilter = setMatcher(postFilter);
        }
        if (postFinder && !postFinder[expando]) {
          postFinder = setMatcher(postFinder, postSelector);
        }
        return markFunction(function (seed, results, context, xml) {
          var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || '*', context.nodeType ? [context] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
          if (matcher) {
            matcher(matcherIn, matcherOut, context, xml);
          }
          if (postFilter) {
            temp = condense(matcherOut, postMap);
            postFilter(temp, [], context, xml);
            i = temp.length;
            while (i--) {
              if (elem = temp[i]) {
                matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
              }
            }
          }
          if (seed) {
            if (postFinder || preFilter) {
              if (postFinder) {
                temp = [];
                i = matcherOut.length;
                while (i--) {
                  if (elem = matcherOut[i]) {
                    temp.push(matcherIn[i] = elem);
                  }
                }
                postFinder(null, matcherOut = [], temp, xml);
              }
              i = matcherOut.length;
              while (i--) {
                if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) {
                  seed[temp] = !(results[temp] = elem);
                }
              }
            }
          } else {
            matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
            if (postFinder) {
              postFinder(null, results, matcherOut, xml);
            } else {
              push.apply(results, matcherOut);
            }
          }
        });
      }
      function matcherFromTokens(tokens) {
        var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[' '], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function (elem) {
            return elem === checkContext;
          }, implicitRelative, true), matchAnyContext = addCombinator(function (elem) {
            return indexOf.call(checkContext, elem) > -1;
          }, implicitRelative, true), matchers = [function (elem, context, xml) {
              return !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            }];
        for (; i < len; i++) {
          if (matcher = Expr.relative[tokens[i].type]) {
            matchers = [addCombinator(elementMatcher(matchers), matcher)];
          } else {
            matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
            if (matcher[expando]) {
              j = ++i;
              for (; j < len; j++) {
                if (Expr.relative[tokens[j].type]) {
                  break;
                }
              }
              return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === ' ' ? '*' : '' })).replace(rtrim, '$1'), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
            }
            matchers.push(matcher);
          }
        }
        return elementMatcher(matchers);
      }
      function matcherFromGroupMatchers(elementMatchers, setMatchers) {
        var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function (seed, context, xml, results, outermost) {
            var elem, j, matcher, matchedCount = 0, i = '0', unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find['TAG']('*', outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
            if (outermost) {
              outermostContext = context !== document && context;
            }
            for (; i !== len && (elem = elems[i]) != null; i++) {
              if (byElement && elem) {
                j = 0;
                while (matcher = elementMatchers[j++]) {
                  if (matcher(elem, context, xml)) {
                    results.push(elem);
                    break;
                  }
                }
                if (outermost) {
                  dirruns = dirrunsUnique;
                }
              }
              if (bySet) {
                if (elem = !matcher && elem) {
                  matchedCount--;
                }
                if (seed) {
                  unmatched.push(elem);
                }
              }
            }
            matchedCount += i;
            if (bySet && i !== matchedCount) {
              j = 0;
              while (matcher = setMatchers[j++]) {
                matcher(unmatched, setMatched, context, xml);
              }
              if (seed) {
                if (matchedCount > 0) {
                  while (i--) {
                    if (!(unmatched[i] || setMatched[i])) {
                      setMatched[i] = pop.call(results);
                    }
                  }
                }
                setMatched = condense(setMatched);
              }
              push.apply(results, setMatched);
              if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                Sizzle.uniqueSort(results);
              }
            }
            if (outermost) {
              dirruns = dirrunsUnique;
              outermostContext = contextBackup;
            }
            return unmatched;
          };
        return bySet ? markFunction(superMatcher) : superMatcher;
      }
      compile = Sizzle.compile = function (selector, group) {
        var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + ' '];
        if (!cached) {
          if (!group) {
            group = tokenize(selector);
          }
          i = group.length;
          while (i--) {
            cached = matcherFromTokens(group[i]);
            if (cached[expando]) {
              setMatchers.push(cached);
            } else {
              elementMatchers.push(cached);
            }
          }
          cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
        }
        return cached;
      };
      function multipleContexts(selector, contexts, results) {
        var i = 0, len = contexts.length;
        for (; i < len; i++) {
          Sizzle(selector, contexts[i], results);
        }
        return results;
      }
      function select(selector, context, results, seed) {
        var i, tokens, token, type, find, match = tokenize(selector);
        if (!seed) {
          if (match.length === 1) {
            tokens = match[0] = match[0].slice(0);
            if (tokens.length > 2 && (token = tokens[0]).type === 'ID' && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
              context = (Expr.find['ID'](token.matches[0].replace(runescape, funescape), context) || [])[0];
              if (!context) {
                return results;
              }
              selector = selector.slice(tokens.shift().value.length);
            }
            i = matchExpr['needsContext'].test(selector) ? 0 : tokens.length;
            while (i--) {
              token = tokens[i];
              if (Expr.relative[type = token.type]) {
                break;
              }
              if (find = Expr.find[type]) {
                if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                  tokens.splice(i, 1);
                  selector = seed.length && toSelector(tokens);
                  if (!selector) {
                    push.apply(results, seed);
                    return results;
                  }
                  break;
                }
              }
            }
          }
        }
        compile(selector, match)(seed, context, !documentIsHTML, results, rsibling.test(selector) && testContext(context.parentNode) || context);
        return results;
      }
      support.sortStable = expando.split('').sort(sortOrder).join('') === expando;
      support.detectDuplicates = !!hasDuplicate;
      setDocument();
      support.sortDetached = assert(function (div1) {
        return div1.compareDocumentPosition(document.createElement('div')) & 1;
      });
      if (!assert(function (div) {
          div.innerHTML = '<a href=\'#\'></a>';
          return div.firstChild.getAttribute('href') === '#';
        })) {
        addHandle('type|href|height|width', function (elem, name, isXML) {
          if (!isXML) {
            return elem.getAttribute(name, name.toLowerCase() === 'type' ? 1 : 2);
          }
        });
      }
      if (!support.attributes || !assert(function (div) {
          div.innerHTML = '<input/>';
          div.firstChild.setAttribute('value', '');
          return div.firstChild.getAttribute('value') === '';
        })) {
        addHandle('value', function (elem, name, isXML) {
          if (!isXML && elem.nodeName.toLowerCase() === 'input') {
            return elem.defaultValue;
          }
        });
      }
      if (!assert(function (div) {
          return div.getAttribute('disabled') == null;
        })) {
        addHandle(booleans, function (elem, name, isXML) {
          var val;
          if (!isXML) {
            return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
          }
        });
      }
      return Sizzle;
    }(window);
  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors;
  jQuery.expr[':'] = jQuery.expr.pseudos;
  jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  var rneedsContext = jQuery.expr.match.needsContext;
  var rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
  var risSimple = /^.[^:#\[\.,]*$/;
  function winnow(elements, qualifier, not) {
    if (jQuery.isFunction(qualifier)) {
      return jQuery.grep(elements, function (elem, i) {
        return !!qualifier.call(elem, i, elem) !== not;
      });
    }
    if (qualifier.nodeType) {
      return jQuery.grep(elements, function (elem) {
        return elem === qualifier !== not;
      });
    }
    if (typeof qualifier === 'string') {
      if (risSimple.test(qualifier)) {
        return jQuery.filter(qualifier, elements, not);
      }
      qualifier = jQuery.filter(qualifier, elements);
    }
    return jQuery.grep(elements, function (elem) {
      return jQuery.inArray(elem, qualifier) >= 0 !== not;
    });
  }
  jQuery.filter = function (expr, elems, not) {
    var elem = elems[0];
    if (not) {
      expr = ':not(' + expr + ')';
    }
    return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
      return elem.nodeType === 1;
    }));
  };
  jQuery.fn.extend({
    find: function (selector) {
      var i, ret = [], self = this, len = self.length;
      if (typeof selector !== 'string') {
        return this.pushStack(jQuery(selector).filter(function () {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }
      for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret);
      }
      ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
      ret.selector = this.selector ? this.selector + ' ' + selector : selector;
      return ret;
    },
    filter: function (selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function (selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function (selector) {
      return !!winnow(this, typeof selector === 'string' && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
    }
  });
  var rootjQuery, document = window.document, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, init = jQuery.fn.init = function (selector, context) {
      var match, elem;
      if (!selector) {
        return this;
      }
      if (typeof selector === 'string') {
        if (selector.charAt(0) === '<' && selector.charAt(selector.length - 1) === '>' && selector.length >= 3) {
          match = [
            null,
            selector,
            null
          ];
        } else {
          match = rquickExpr.exec(selector);
        }
        if (match && (match[1] || !context)) {
          if (match[1]) {
            context = context instanceof jQuery ? context[0] : context;
            jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
            if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
              for (match in context) {
                if (jQuery.isFunction(this[match])) {
                  this[match](context[match]);
                } else {
                  this.attr(match, context[match]);
                }
              }
            }
            return this;
          } else {
            elem = document.getElementById(match[2]);
            if (elem && elem.parentNode) {
              if (elem.id !== match[2]) {
                return rootjQuery.find(selector);
              }
              this.length = 1;
              this[0] = elem;
            }
            this.context = document;
            this.selector = selector;
            return this;
          }
        } else if (!context || context.jquery) {
          return (context || rootjQuery).find(selector);
        } else {
          return this.constructor(context).find(selector);
        }
      } else if (selector.nodeType) {
        this.context = this[0] = selector;
        this.length = 1;
        return this;
      } else if (jQuery.isFunction(selector)) {
        return typeof rootjQuery.ready !== 'undefined' ? rootjQuery.ready(selector) : selector(jQuery);
      }
      if (selector.selector !== undefined) {
        this.selector = selector.selector;
        this.context = selector.context;
      }
      return jQuery.makeArray(selector, this);
    };
  init.prototype = jQuery.fn;
  rootjQuery = jQuery(document);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
      children: true,
      contents: true,
      next: true,
      prev: true
    };
  jQuery.extend({
    dir: function (elem, dir, until) {
      var matched = [], cur = elem[dir];
      while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
        if (cur.nodeType === 1) {
          matched.push(cur);
        }
        cur = cur[dir];
      }
      return matched;
    },
    sibling: function (n, elem) {
      var r = [];
      for (; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n !== elem) {
          r.push(n);
        }
      }
      return r;
    }
  });
  jQuery.fn.extend({
    has: function (target) {
      var i, targets = jQuery(target, this), len = targets.length;
      return this.filter(function () {
        for (i = 0; i < len; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest: function (selectors, context) {
      var cur, i = 0, l = this.length, matched = [], pos = rneedsContext.test(selectors) || typeof selectors !== 'string' ? jQuery(selectors, context || this.context) : 0;
      for (; i < l; i++) {
        for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
          if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
            matched.push(cur);
            break;
          }
        }
      }
      return this.pushStack(matched.length > 1 ? jQuery.unique(matched) : matched);
    },
    index: function (elem) {
      if (!elem) {
        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      }
      if (typeof elem === 'string') {
        return jQuery.inArray(this[0], jQuery(elem));
      }
      return jQuery.inArray(elem.jquery ? elem[0] : elem, this);
    },
    add: function (selector, context) {
      return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(selector, context))));
    },
    addBack: function (selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });
  function sibling(cur, dir) {
    do {
      cur = cur[dir];
    } while (cur && cur.nodeType !== 1);
    return cur;
  }
  jQuery.each({
    parent: function (elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function (elem) {
      return jQuery.dir(elem, 'parentNode');
    },
    parentsUntil: function (elem, i, until) {
      return jQuery.dir(elem, 'parentNode', until);
    },
    next: function (elem) {
      return sibling(elem, 'nextSibling');
    },
    prev: function (elem) {
      return sibling(elem, 'previousSibling');
    },
    nextAll: function (elem) {
      return jQuery.dir(elem, 'nextSibling');
    },
    prevAll: function (elem) {
      return jQuery.dir(elem, 'previousSibling');
    },
    nextUntil: function (elem, i, until) {
      return jQuery.dir(elem, 'nextSibling', until);
    },
    prevUntil: function (elem, i, until) {
      return jQuery.dir(elem, 'previousSibling', until);
    },
    siblings: function (elem) {
      return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
    },
    children: function (elem) {
      return jQuery.sibling(elem.firstChild);
    },
    contents: function (elem) {
      return jQuery.nodeName(elem, 'iframe') ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes);
    }
  }, function (name, fn) {
    jQuery.fn[name] = function (until, selector) {
      var ret = jQuery.map(this, fn, until);
      if (name.slice(-5) !== 'Until') {
        selector = until;
      }
      if (selector && typeof selector === 'string') {
        ret = jQuery.filter(selector, ret);
      }
      if (this.length > 1) {
        if (!guaranteedUnique[name]) {
          ret = jQuery.unique(ret);
        }
        if (rparentsprev.test(name)) {
          ret = ret.reverse();
        }
      }
      return this.pushStack(ret);
    };
  });
  var rnotwhite = /\S+/g;
  var optionsCache = {};
  function createOptions(options) {
    var object = optionsCache[options] = {};
    jQuery.each(options.match(rnotwhite) || [], function (_, flag) {
      object[flag] = true;
    });
    return object;
  }
  jQuery.Callbacks = function (options) {
    options = typeof options === 'string' ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);
    var firing, memory, fired, firingLength, firingIndex, firingStart, list = [], stack = !options.once && [], fire = function (data) {
        memory = options.memory && data;
        fired = true;
        firingIndex = firingStart || 0;
        firingStart = 0;
        firingLength = list.length;
        firing = true;
        for (; list && firingIndex < firingLength; firingIndex++) {
          if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
            memory = false;
            break;
          }
        }
        firing = false;
        if (list) {
          if (stack) {
            if (stack.length) {
              fire(stack.shift());
            }
          } else if (memory) {
            list = [];
          } else {
            self.disable();
          }
        }
      }, self = {
        add: function () {
          if (list) {
            var start = list.length;
            (function add(args) {
              jQuery.each(args, function (_, arg) {
                var type = jQuery.type(arg);
                if (type === 'function') {
                  if (!options.unique || !self.has(arg)) {
                    list.push(arg);
                  }
                } else if (arg && arg.length && type !== 'string') {
                  add(arg);
                }
              });
            }(arguments));
            if (firing) {
              firingLength = list.length;
            } else if (memory) {
              firingStart = start;
              fire(memory);
            }
          }
          return this;
        },
        remove: function () {
          if (list) {
            jQuery.each(arguments, function (_, arg) {
              var index;
              while ((index = jQuery.inArray(arg, list, index)) > -1) {
                list.splice(index, 1);
                if (firing) {
                  if (index <= firingLength) {
                    firingLength--;
                  }
                  if (index <= firingIndex) {
                    firingIndex--;
                  }
                }
              }
            });
          }
          return this;
        },
        has: function (fn) {
          return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
        },
        empty: function () {
          list = [];
          firingLength = 0;
          return this;
        },
        disable: function () {
          list = stack = memory = undefined;
          return this;
        },
        disabled: function () {
          return !list;
        },
        lock: function () {
          stack = undefined;
          if (!memory) {
            self.disable();
          }
          return this;
        },
        locked: function () {
          return !stack;
        },
        fireWith: function (context, args) {
          if (list && (!fired || stack)) {
            args = args || [];
            args = [
              context,
              args.slice ? args.slice() : args
            ];
            if (firing) {
              stack.push(args);
            } else {
              fire(args);
            }
          }
          return this;
        },
        fire: function () {
          self.fireWith(this, arguments);
          return this;
        },
        fired: function () {
          return !!fired;
        }
      };
    return self;
  };
  jQuery.extend({
    Deferred: function (func) {
      var tuples = [
          [
            'resolve',
            'done',
            jQuery.Callbacks('once memory'),
            'resolved'
          ],
          [
            'reject',
            'fail',
            jQuery.Callbacks('once memory'),
            'rejected'
          ],
          [
            'notify',
            'progress',
            jQuery.Callbacks('memory')
          ]
        ], state = 'pending', promise = {
          state: function () {
            return state;
          },
          always: function () {
            deferred.done(arguments).fail(arguments);
            return this;
          },
          then: function () {
            var fns = arguments;
            return jQuery.Deferred(function (newDefer) {
              jQuery.each(tuples, function (i, tuple) {
                var fn = jQuery.isFunction(fns[i]) && fns[i];
                deferred[tuple[1]](function () {
                  var returned = fn && fn.apply(this, arguments);
                  if (returned && jQuery.isFunction(returned.promise)) {
                    returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
                  } else {
                    newDefer[tuple[0] + 'With'](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
                  }
                });
              });
              fns = null;
            }).promise();
          },
          promise: function (obj) {
            return obj != null ? jQuery.extend(obj, promise) : promise;
          }
        }, deferred = {};
      promise.pipe = promise.then;
      jQuery.each(tuples, function (i, tuple) {
        var list = tuple[2], stateString = tuple[3];
        promise[tuple[1]] = list.add;
        if (stateString) {
          list.add(function () {
            state = stateString;
          }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
        }
        deferred[tuple[0]] = function () {
          deferred[tuple[0] + 'With'](this === deferred ? promise : this, arguments);
          return this;
        };
        deferred[tuple[0] + 'With'] = list.fireWith;
      });
      promise.promise(deferred);
      if (func) {
        func.call(deferred, deferred);
      }
      return deferred;
    },
    when: function (subordinate) {
      var i = 0, resolveValues = slice.call(arguments), length = resolveValues.length, remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0, deferred = remaining === 1 ? subordinate : jQuery.Deferred(), updateFunc = function (i, contexts, values) {
          return function (value) {
            contexts[i] = this;
            values[i] = arguments.length > 1 ? slice.call(arguments) : value;
            if (values === progressValues) {
              deferred.notifyWith(contexts, values);
            } else if (!--remaining) {
              deferred.resolveWith(contexts, values);
            }
          };
        }, progressValues, progressContexts, resolveContexts;
      if (length > 1) {
        progressValues = new Array(length);
        progressContexts = new Array(length);
        resolveContexts = new Array(length);
        for (; i < length; i++) {
          if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
            resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));
          } else {
            --remaining;
          }
        }
      }
      if (!remaining) {
        deferred.resolveWith(resolveContexts, resolveValues);
      }
      return deferred.promise();
    }
  });
  var readyList;
  jQuery.fn.ready = function (fn) {
    jQuery.ready.promise().done(fn);
    return this;
  };
  jQuery.extend({
    isReady: false,
    readyWait: 1,
    holdReady: function (hold) {
      if (hold) {
        jQuery.readyWait++;
      } else {
        jQuery.ready(true);
      }
    },
    ready: function (wait) {
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      }
      if (!document.body) {
        return setTimeout(jQuery.ready);
      }
      jQuery.isReady = true;
      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      }
      readyList.resolveWith(document, [jQuery]);
      if (jQuery.fn.trigger) {
        jQuery(document).trigger('ready').off('ready');
      }
    }
  });
  function detach() {
    if (document.addEventListener) {
      document.removeEventListener('DOMContentLoaded', completed, false);
      window.removeEventListener('load', completed, false);
    } else {
      document.detachEvent('onreadystatechange', completed);
      window.detachEvent('onload', completed);
    }
  }
  function completed() {
    if (document.addEventListener || event.type === 'load' || document.readyState === 'complete') {
      detach();
      jQuery.ready();
    }
  }
  jQuery.ready.promise = function (obj) {
    if (!readyList) {
      readyList = jQuery.Deferred();
      if (document.readyState === 'complete') {
        setTimeout(jQuery.ready);
      } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', completed, false);
        window.addEventListener('load', completed, false);
      } else {
        document.attachEvent('onreadystatechange', completed);
        window.attachEvent('onload', completed);
        var top = false;
        try {
          top = window.frameElement == null && document.documentElement;
        } catch (e) {
        }
        if (top && top.doScroll) {
          (function doScrollCheck() {
            if (!jQuery.isReady) {
              try {
                top.doScroll('left');
              } catch (e) {
                return setTimeout(doScrollCheck, 50);
              }
              detach();
              jQuery.ready();
            }
          }());
        }
      }
    }
    return readyList.promise(obj);
  };
  var strundefined = typeof undefined;
  var i;
  for (i in jQuery(support)) {
    break;
  }
  support.ownLast = i !== '0';
  support.inlineBlockNeedsLayout = false;
  jQuery(function () {
    var container, div, body = document.getElementsByTagName('body')[0];
    if (!body) {
      return;
    }
    container = document.createElement('div');
    container.style.cssText = 'border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px';
    div = document.createElement('div');
    body.appendChild(container).appendChild(div);
    if (typeof div.style.zoom !== strundefined) {
      div.style.cssText = 'border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1';
      if (support.inlineBlockNeedsLayout = div.offsetWidth === 3) {
        body.style.zoom = 1;
      }
    }
    body.removeChild(container);
    container = div = null;
  });
  (function () {
    var div = document.createElement('div');
    if (support.deleteExpando == null) {
      support.deleteExpando = true;
      try {
        delete div.test;
      } catch (e) {
        support.deleteExpando = false;
      }
    }
    div = null;
  }());
  jQuery.acceptData = function (elem) {
    var noData = jQuery.noData[(elem.nodeName + ' ').toLowerCase()], nodeType = +elem.nodeType || 1;
    return nodeType !== 1 && nodeType !== 9 ? false : !noData || noData !== true && elem.getAttribute('classid') === noData;
  };
  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /([A-Z])/g;
  function dataAttr(elem, key, data) {
    if (data === undefined && elem.nodeType === 1) {
      var name = 'data-' + key.replace(rmultiDash, '-$1').toLowerCase();
      data = elem.getAttribute(name);
      if (typeof data === 'string') {
        try {
          data = data === 'true' ? true : data === 'false' ? false : data === 'null' ? null : +data + '' === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
        } catch (e) {
        }
        jQuery.data(elem, key, data);
      } else {
        data = undefined;
      }
    }
    return data;
  }
  function isEmptyDataObject(obj) {
    var name;
    for (name in obj) {
      if (name === 'data' && jQuery.isEmptyObject(obj[name])) {
        continue;
      }
      if (name !== 'toJSON') {
        return false;
      }
    }
    return true;
  }
  function internalData(elem, name, data, pvt) {
    if (!jQuery.acceptData(elem)) {
      return;
    }
    var ret, thisCache, internalKey = jQuery.expando, isNode = elem.nodeType, cache = isNode ? jQuery.cache : elem, id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
    if ((!id || !cache[id] || !pvt && !cache[id].data) && data === undefined && typeof name === 'string') {
      return;
    }
    if (!id) {
      if (isNode) {
        id = elem[internalKey] = deletedIds.pop() || jQuery.guid++;
      } else {
        id = internalKey;
      }
    }
    if (!cache[id]) {
      cache[id] = isNode ? {} : { toJSON: jQuery.noop };
    }
    if (typeof name === 'object' || typeof name === 'function') {
      if (pvt) {
        cache[id] = jQuery.extend(cache[id], name);
      } else {
        cache[id].data = jQuery.extend(cache[id].data, name);
      }
    }
    thisCache = cache[id];
    if (!pvt) {
      if (!thisCache.data) {
        thisCache.data = {};
      }
      thisCache = thisCache.data;
    }
    if (data !== undefined) {
      thisCache[jQuery.camelCase(name)] = data;
    }
    if (typeof name === 'string') {
      ret = thisCache[name];
      if (ret == null) {
        ret = thisCache[jQuery.camelCase(name)];
      }
    } else {
      ret = thisCache;
    }
    return ret;
  }
  function internalRemoveData(elem, name, pvt) {
    if (!jQuery.acceptData(elem)) {
      return;
    }
    var thisCache, i, isNode = elem.nodeType, cache = isNode ? jQuery.cache : elem, id = isNode ? elem[jQuery.expando] : jQuery.expando;
    if (!cache[id]) {
      return;
    }
    if (name) {
      thisCache = pvt ? cache[id] : cache[id].data;
      if (thisCache) {
        if (!jQuery.isArray(name)) {
          if (name in thisCache) {
            name = [name];
          } else {
            name = jQuery.camelCase(name);
            if (name in thisCache) {
              name = [name];
            } else {
              name = name.split(' ');
            }
          }
        } else {
          name = name.concat(jQuery.map(name, jQuery.camelCase));
        }
        i = name.length;
        while (i--) {
          delete thisCache[name[i]];
        }
        if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) {
          return;
        }
      }
    }
    if (!pvt) {
      delete cache[id].data;
      if (!isEmptyDataObject(cache[id])) {
        return;
      }
    }
    if (isNode) {
      jQuery.cleanData([elem], true);
    } else if (support.deleteExpando || cache != cache.window) {
      delete cache[id];
    } else {
      cache[id] = null;
    }
  }
  jQuery.extend({
    cache: {},
    noData: {
      'applet ': true,
      'embed ': true,
      'object ': 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'
    },
    hasData: function (elem) {
      elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
      return !!elem && !isEmptyDataObject(elem);
    },
    data: function (elem, name, data) {
      return internalData(elem, name, data);
    },
    removeData: function (elem, name) {
      return internalRemoveData(elem, name);
    },
    _data: function (elem, name, data) {
      return internalData(elem, name, data, true);
    },
    _removeData: function (elem, name) {
      return internalRemoveData(elem, name, true);
    }
  });
  jQuery.fn.extend({
    data: function (key, value) {
      var i, name, data, elem = this[0], attrs = elem && elem.attributes;
      if (key === undefined) {
        if (this.length) {
          data = jQuery.data(elem);
          if (elem.nodeType === 1 && !jQuery._data(elem, 'parsedAttrs')) {
            i = attrs.length;
            while (i--) {
              name = attrs[i].name;
              if (name.indexOf('data-') === 0) {
                name = jQuery.camelCase(name.slice(5));
                dataAttr(elem, name, data[name]);
              }
            }
            jQuery._data(elem, 'parsedAttrs', true);
          }
        }
        return data;
      }
      if (typeof key === 'object') {
        return this.each(function () {
          jQuery.data(this, key);
        });
      }
      return arguments.length > 1 ? this.each(function () {
        jQuery.data(this, key, value);
      }) : elem ? dataAttr(elem, key, jQuery.data(elem, key)) : undefined;
    },
    removeData: function (key) {
      return this.each(function () {
        jQuery.removeData(this, key);
      });
    }
  });
  jQuery.extend({
    queue: function (elem, type, data) {
      var queue;
      if (elem) {
        type = (type || 'fx') + 'queue';
        queue = jQuery._data(elem, type);
        if (data) {
          if (!queue || jQuery.isArray(data)) {
            queue = jQuery._data(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }
        return queue || [];
      }
    },
    dequeue: function (elem, type) {
      type = type || 'fx';
      var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function () {
          jQuery.dequeue(elem, type);
        };
      if (fn === 'inprogress') {
        fn = queue.shift();
        startLength--;
      }
      if (fn) {
        if (type === 'fx') {
          queue.unshift('inprogress');
        }
        delete hooks.stop;
        fn.call(elem, next, hooks);
      }
      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    _queueHooks: function (elem, type) {
      var key = type + 'queueHooks';
      return jQuery._data(elem, key) || jQuery._data(elem, key, {
        empty: jQuery.Callbacks('once memory').add(function () {
          jQuery._removeData(elem, type + 'queue');
          jQuery._removeData(elem, key);
        })
      });
    }
  });
  jQuery.fn.extend({
    queue: function (type, data) {
      var setter = 2;
      if (typeof type !== 'string') {
        data = type;
        type = 'fx';
        setter--;
      }
      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }
      return data === undefined ? this : this.each(function () {
        var queue = jQuery.queue(this, type, data);
        jQuery._queueHooks(this, type);
        if (type === 'fx' && queue[0] !== 'inprogress') {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function (type) {
      return this.each(function () {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function (type) {
      return this.queue(type || 'fx', []);
    },
    promise: function (type, obj) {
      var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function () {
          if (!--count) {
            defer.resolveWith(elements, [elements]);
          }
        };
      if (typeof type !== 'string') {
        obj = type;
        type = undefined;
      }
      type = type || 'fx';
      while (i--) {
        tmp = jQuery._data(elements[i], type + 'queueHooks');
        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }
      resolve();
      return defer.promise(obj);
    }
  });
  var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var cssExpand = [
      'Top',
      'Right',
      'Bottom',
      'Left'
    ];
  var isHidden = function (elem, el) {
    elem = el || elem;
    return jQuery.css(elem, 'display') === 'none' || !jQuery.contains(elem.ownerDocument, elem);
  };
  var access = jQuery.access = function (elems, fn, key, value, chainable, emptyGet, raw) {
      var i = 0, length = elems.length, bulk = key == null;
      if (jQuery.type(key) === 'object') {
        chainable = true;
        for (i in key) {
          jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
        }
      } else if (value !== undefined) {
        chainable = true;
        if (!jQuery.isFunction(value)) {
          raw = true;
        }
        if (bulk) {
          if (raw) {
            fn.call(elems, value);
            fn = null;
          } else {
            bulk = fn;
            fn = function (elem, key, value) {
              return bulk.call(jQuery(elem), value);
            };
          }
        }
        if (fn) {
          for (; i < length; i++) {
            fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
          }
        }
      }
      return chainable ? elems : bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet;
    };
  var rcheckableType = /^(?:checkbox|radio)$/i;
  (function () {
    var fragment = document.createDocumentFragment(), div = document.createElement('div'), input = document.createElement('input');
    div.setAttribute('className', 't');
    div.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a>';
    support.leadingWhitespace = div.firstChild.nodeType === 3;
    support.tbody = !div.getElementsByTagName('tbody').length;
    support.htmlSerialize = !!div.getElementsByTagName('link').length;
    support.html5Clone = document.createElement('nav').cloneNode(true).outerHTML !== '<:nav></:nav>';
    input.type = 'checkbox';
    input.checked = true;
    fragment.appendChild(input);
    support.appendChecked = input.checked;
    div.innerHTML = '<textarea>x</textarea>';
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
    fragment.appendChild(div);
    div.innerHTML = '<input type=\'radio\' checked=\'checked\' name=\'t\'/>';
    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
    support.noCloneEvent = true;
    if (div.attachEvent) {
      div.attachEvent('onclick', function () {
        support.noCloneEvent = false;
      });
      div.cloneNode(true).click();
    }
    if (support.deleteExpando == null) {
      support.deleteExpando = true;
      try {
        delete div.test;
      } catch (e) {
        support.deleteExpando = false;
      }
    }
    fragment = div = input = null;
  }());
  (function () {
    var i, eventName, div = document.createElement('div');
    for (i in {
        submit: true,
        change: true,
        focusin: true
      }) {
      eventName = 'on' + i;
      if (!(support[i + 'Bubbles'] = eventName in window)) {
        div.setAttribute(eventName, 't');
        support[i + 'Bubbles'] = div.attributes[eventName].expando === false;
      }
    }
    div = null;
  }());
  var rformElems = /^(?:input|select|textarea)$/i, rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|contextmenu)|click/, rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
  function returnTrue() {
    return true;
  }
  function returnFalse() {
    return false;
  }
  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {
    }
  }
  jQuery.event = {
    global: {},
    add: function (elem, types, handler, data, selector) {
      var tmp, events, t, handleObjIn, special, eventHandle, handleObj, handlers, type, namespaces, origType, elemData = jQuery._data(elem);
      if (!elemData) {
        return;
      }
      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      }
      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      }
      if (!(events = elemData.events)) {
        events = elemData.events = {};
      }
      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function (e) {
          return typeof jQuery !== strundefined && (!e || jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply(eventHandle.elem, arguments) : undefined;
        };
        eventHandle.elem = elem;
      }
      types = (types || '').match(rnotwhite) || [''];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || '').split('.').sort();
        if (!type) {
          continue;
        }
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        special = jQuery.event.special[type] || {};
        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join('.')
        }, handleObjIn);
        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0;
          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle, false);
            } else if (elem.attachEvent) {
              elem.attachEvent('on' + type, eventHandle);
            }
          }
        }
        if (special.add) {
          special.add.call(elem, handleObj);
          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        }
        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        }
        jQuery.event.global[type] = true;
      }
      elem = null;
    },
    remove: function (elem, types, handler, selector, mappedTypes) {
      var j, handleObj, tmp, origCount, t, events, special, handlers, type, namespaces, origType, elemData = jQuery.hasData(elem) && jQuery._data(elem);
      if (!elemData || !(events = elemData.events)) {
        return;
      }
      types = (types || '').match(rnotwhite) || [''];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || '').split('.').sort();
        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }
          continue;
        }
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp('(^|\\.)' + namespaces.join('\\.(?:.*\\.|)') + '(\\.|$)');
        origCount = j = handlers.length;
        while (j--) {
          handleObj = handlers[j];
          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === '**' && handleObj.selector)) {
            handlers.splice(j, 1);
            if (handleObj.selector) {
              handlers.delegateCount--;
            }
            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        }
        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }
          delete events[type];
        }
      }
      if (jQuery.isEmptyObject(events)) {
        delete elemData.handle;
        jQuery._removeData(elem, 'events');
      }
    },
    trigger: function (event, data, elem, onlyHandlers) {
      var handle, ontype, cur, bubbleType, special, tmp, i, eventPath = [elem || document], type = hasOwn.call(event, 'type') ? event.type : event, namespaces = hasOwn.call(event, 'namespace') ? event.namespace.split('.') : [];
      cur = tmp = elem = elem || document;
      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      }
      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }
      if (type.indexOf('.') >= 0) {
        namespaces = type.split('.');
        type = namespaces.shift();
        namespaces.sort();
      }
      ontype = type.indexOf(':') < 0 && 'on' + type;
      event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === 'object' && event);
      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join('.');
      event.namespace_re = event.namespace ? new RegExp('(^|\\.)' + namespaces.join('\\.(?:.*\\.|)') + '(\\.|$)') : null;
      event.result = undefined;
      if (!event.target) {
        event.target = elem;
      }
      data = data == null ? [event] : jQuery.makeArray(data, [event]);
      special = jQuery.event.special[type] || {};
      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      }
      if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
        bubbleType = special.delegateType || type;
        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }
        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        }
        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      }
      i = 0;
      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        event.type = i > 1 ? bubbleType : special.bindType || type;
        handle = (jQuery._data(cur, 'events') || {})[event.type] && jQuery._data(cur, 'handle');
        if (handle) {
          handle.apply(cur, data);
        }
        handle = ontype && cur[ontype];
        if (handle && handle.apply && jQuery.acceptData(cur)) {
          event.result = handle.apply(cur, data);
          if (event.result === false) {
            event.preventDefault();
          }
        }
      }
      event.type = type;
      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && jQuery.acceptData(elem)) {
          if (ontype && elem[type] && !jQuery.isWindow(elem)) {
            tmp = elem[ontype];
            if (tmp) {
              elem[ontype] = null;
            }
            jQuery.event.triggered = type;
            try {
              elem[type]();
            } catch (e) {
            }
            jQuery.event.triggered = undefined;
            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }
      return event.result;
    },
    dispatch: function (event) {
      event = jQuery.event.fix(event);
      var i, ret, handleObj, matched, j, handlerQueue = [], args = slice.call(arguments), handlers = (jQuery._data(this, 'events') || {})[event.type] || [], special = jQuery.event.special[event.type] || {};
      args[0] = event;
      event.delegateTarget = this;
      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      }
      handlerQueue = jQuery.event.handlers.call(this, event, handlers);
      i = 0;
      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;
        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      }
      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }
      return event.result;
    },
    handlers: function (event, handlers) {
      var sel, handleObj, matches, i, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
      if (delegateCount && cur.nodeType && (!event.button || event.type !== 'click')) {
        for (; cur != this; cur = cur.parentNode || this) {
          if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== 'click')) {
            matches = [];
            for (i = 0; i < delegateCount; i++) {
              handleObj = handlers[i];
              sel = handleObj.selector + ' ';
              if (matches[sel] === undefined) {
                matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length;
              }
              if (matches[sel]) {
                matches.push(handleObj);
              }
            }
            if (matches.length) {
              handlerQueue.push({
                elem: cur,
                handlers: matches
              });
            }
          }
        }
      }
      if (delegateCount < handlers.length) {
        handlerQueue.push({
          elem: this,
          handlers: handlers.slice(delegateCount)
        });
      }
      return handlerQueue;
    },
    fix: function (event) {
      if (event[jQuery.expando]) {
        return event;
      }
      var i, prop, copy, type = event.type, originalEvent = event, fixHook = this.fixHooks[type];
      if (!fixHook) {
        this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
      }
      copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
      event = new jQuery.Event(originalEvent);
      i = copy.length;
      while (i--) {
        prop = copy[i];
        event[prop] = originalEvent[prop];
      }
      if (!event.target) {
        event.target = originalEvent.srcElement || document;
      }
      if (event.target.nodeType === 3) {
        event.target = event.target.parentNode;
      }
      event.metaKey = !!event.metaKey;
      return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
    },
    props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
    fixHooks: {},
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function (event, original) {
        if (event.which == null) {
          event.which = original.charCode != null ? original.charCode : original.keyCode;
        }
        return event;
      }
    },
    mouseHooks: {
      props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
      filter: function (event, original) {
        var body, eventDoc, doc, button = original.button, fromElement = original.fromElement;
        if (event.pageX == null && original.clientX != null) {
          eventDoc = event.target.ownerDocument || document;
          doc = eventDoc.documentElement;
          body = eventDoc.body;
          event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
          event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
        }
        if (!event.relatedTarget && fromElement) {
          event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
        }
        if (!event.which && button !== undefined) {
          event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
        }
        return event;
      }
    },
    special: {
      load: { noBubble: true },
      focus: {
        trigger: function () {
          if (this !== safeActiveElement() && this.focus) {
            try {
              this.focus();
              return false;
            } catch (e) {
            }
          }
        },
        delegateType: 'focusin'
      },
      blur: {
        trigger: function () {
          if (this === safeActiveElement() && this.blur) {
            this.blur();
            return false;
          }
        },
        delegateType: 'focusout'
      },
      click: {
        trigger: function () {
          if (jQuery.nodeName(this, 'input') && this.type === 'checkbox' && this.click) {
            this.click();
            return false;
          }
        },
        _default: function (event) {
          return jQuery.nodeName(event.target, 'a');
        }
      },
      beforeunload: {
        postDispatch: function (event) {
          if (event.result !== undefined) {
            event.originalEvent.returnValue = event.result;
          }
        }
      }
    },
    simulate: function (type, elem, event, bubble) {
      var e = jQuery.extend(new jQuery.Event(), event, {
          type: type,
          isSimulated: true,
          originalEvent: {}
        });
      if (bubble) {
        jQuery.event.trigger(e, null, elem);
      } else {
        jQuery.event.dispatch.call(elem, e);
      }
      if (e.isDefaultPrevented()) {
        event.preventDefault();
      }
    }
  };
  jQuery.removeEvent = document.removeEventListener ? function (elem, type, handle) {
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle, false);
    }
  } : function (elem, type, handle) {
    var name = 'on' + type;
    if (elem.detachEvent) {
      if (typeof elem[name] === strundefined) {
        elem[name] = null;
      }
      elem.detachEvent(name, handle);
    }
  };
  jQuery.Event = function (src, props) {
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    }
    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type;
      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && (src.returnValue === false || src.getPreventDefault && src.getPreventDefault()) ? returnTrue : returnFalse;
    } else {
      this.type = src;
    }
    if (props) {
      jQuery.extend(this, props);
    }
    this.timeStamp = src && src.timeStamp || jQuery.now();
    this[jQuery.expando] = true;
  };
  jQuery.Event.prototype = {
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;
      if (!e) {
        return;
      }
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;
      if (!e) {
        return;
      }
      if (e.stopPropagation) {
        e.stopPropagation();
      }
      e.cancelBubble = true;
    },
    stopImmediatePropagation: function () {
      this.isImmediatePropagationStopped = returnTrue;
      this.stopPropagation();
    }
  };
  jQuery.each({
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  }, function (orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function (event) {
        var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
        if (!related || related !== target && !jQuery.contains(target, related)) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }
        return ret;
      }
    };
  });
  if (!support.submitBubbles) {
    jQuery.event.special.submit = {
      setup: function () {
        if (jQuery.nodeName(this, 'form')) {
          return false;
        }
        jQuery.event.add(this, 'click._submit keypress._submit', function (e) {
          var elem = e.target, form = jQuery.nodeName(elem, 'input') || jQuery.nodeName(elem, 'button') ? elem.form : undefined;
          if (form && !jQuery._data(form, 'submitBubbles')) {
            jQuery.event.add(form, 'submit._submit', function (event) {
              event._submit_bubble = true;
            });
            jQuery._data(form, 'submitBubbles', true);
          }
        });
      },
      postDispatch: function (event) {
        if (event._submit_bubble) {
          delete event._submit_bubble;
          if (this.parentNode && !event.isTrigger) {
            jQuery.event.simulate('submit', this.parentNode, event, true);
          }
        }
      },
      teardown: function () {
        if (jQuery.nodeName(this, 'form')) {
          return false;
        }
        jQuery.event.remove(this, '._submit');
      }
    };
  }
  if (!support.changeBubbles) {
    jQuery.event.special.change = {
      setup: function () {
        if (rformElems.test(this.nodeName)) {
          if (this.type === 'checkbox' || this.type === 'radio') {
            jQuery.event.add(this, 'propertychange._change', function (event) {
              if (event.originalEvent.propertyName === 'checked') {
                this._just_changed = true;
              }
            });
            jQuery.event.add(this, 'click._change', function (event) {
              if (this._just_changed && !event.isTrigger) {
                this._just_changed = false;
              }
              jQuery.event.simulate('change', this, event, true);
            });
          }
          return false;
        }
        jQuery.event.add(this, 'beforeactivate._change', function (e) {
          var elem = e.target;
          if (rformElems.test(elem.nodeName) && !jQuery._data(elem, 'changeBubbles')) {
            jQuery.event.add(elem, 'change._change', function (event) {
              if (this.parentNode && !event.isSimulated && !event.isTrigger) {
                jQuery.event.simulate('change', this.parentNode, event, true);
              }
            });
            jQuery._data(elem, 'changeBubbles', true);
          }
        });
      },
      handle: function (event) {
        var elem = event.target;
        if (this !== elem || event.isSimulated || event.isTrigger || elem.type !== 'radio' && elem.type !== 'checkbox') {
          return event.handleObj.handler.apply(this, arguments);
        }
      },
      teardown: function () {
        jQuery.event.remove(this, '._change');
        return !rformElems.test(this.nodeName);
      }
    };
  }
  if (!support.focusinBubbles) {
    jQuery.each({
      focus: 'focusin',
      blur: 'focusout'
    }, function (orig, fix) {
      var handler = function (event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
      };
      jQuery.event.special[fix] = {
        setup: function () {
          var doc = this.ownerDocument || this, attaches = jQuery._data(doc, fix);
          if (!attaches) {
            doc.addEventListener(orig, handler, true);
          }
          jQuery._data(doc, fix, (attaches || 0) + 1);
        },
        teardown: function () {
          var doc = this.ownerDocument || this, attaches = jQuery._data(doc, fix) - 1;
          if (!attaches) {
            doc.removeEventListener(orig, handler, true);
            jQuery._removeData(doc, fix);
          } else {
            jQuery._data(doc, fix, attaches);
          }
        }
      };
    });
  }
  jQuery.fn.extend({
    on: function (types, selector, data, fn, one) {
      var type, origFn;
      if (typeof types === 'object') {
        if (typeof selector !== 'string') {
          data = data || selector;
          selector = undefined;
        }
        for (type in types) {
          this.on(type, selector, data, types[type], one);
        }
        return this;
      }
      if (data == null && fn == null) {
        fn = selector;
        data = selector = undefined;
      } else if (fn == null) {
        if (typeof selector === 'string') {
          fn = data;
          data = undefined;
        } else {
          fn = data;
          data = selector;
          selector = undefined;
        }
      }
      if (fn === false) {
        fn = returnFalse;
      } else if (!fn) {
        return this;
      }
      if (one === 1) {
        origFn = fn;
        fn = function (event) {
          jQuery().off(event);
          return origFn.apply(this, arguments);
        };
        fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
      }
      return this.each(function () {
        jQuery.event.add(this, types, fn, data, selector);
      });
    },
    one: function (types, selector, data, fn) {
      return this.on(types, selector, data, fn, 1);
    },
    off: function (types, selector, fn) {
      var handleObj, type;
      if (types && types.preventDefault && types.handleObj) {
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + '.' + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }
      if (typeof types === 'object') {
        for (type in types) {
          this.off(type, selector, types[type]);
        }
        return this;
      }
      if (selector === false || typeof selector === 'function') {
        fn = selector;
        selector = undefined;
      }
      if (fn === false) {
        fn = returnFalse;
      }
      return this.each(function () {
        jQuery.event.remove(this, types, fn, selector);
      });
    },
    trigger: function (type, data) {
      return this.each(function () {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function (type, data) {
      var elem = this[0];
      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  });
  function createSafeFragment(document) {
    var list = nodeNames.split('|'), safeFrag = document.createDocumentFragment();
    if (safeFrag.createElement) {
      while (list.length) {
        safeFrag.createElement(list.pop());
      }
    }
    return safeFrag;
  }
  var nodeNames = 'abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|' + 'header|hgroup|mark|meter|nav|output|progress|section|summary|time|video', rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g, rnoshimcache = new RegExp('<(?:' + nodeNames + ')[\\s/>]', 'i'), rleadingWhitespace = /^\s+/, rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, rtagName = /<([\w:]+)/, rtbody = /<tbody/i, rhtml = /<|&#?\w+;/, rnoInnerhtml = /<(?:script|style|link)/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rscriptType = /^$|\/(?:java|ecma)script/i, rscriptTypeMasked = /^true\/(.*)/, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, wrapMap = {
      option: [
        1,
        '<select multiple=\'multiple\'>',
        '</select>'
      ],
      legend: [
        1,
        '<fieldset>',
        '</fieldset>'
      ],
      area: [
        1,
        '<map>',
        '</map>'
      ],
      param: [
        1,
        '<object>',
        '</object>'
      ],
      thead: [
        1,
        '<table>',
        '</table>'
      ],
      tr: [
        2,
        '<table><tbody>',
        '</tbody></table>'
      ],
      col: [
        2,
        '<table><tbody></tbody><colgroup>',
        '</colgroup></table>'
      ],
      td: [
        3,
        '<table><tbody><tr>',
        '</tr></tbody></table>'
      ],
      _default: support.htmlSerialize ? [
        0,
        '',
        ''
      ] : [
        1,
        'X<div>',
        '</div>'
      ]
    }, safeFragment = createSafeFragment(document), fragmentDiv = safeFragment.appendChild(document.createElement('div'));
  wrapMap.optgroup = wrapMap.option;
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;
  function getAll(context, tag) {
    var elems, elem, i = 0, found = typeof context.getElementsByTagName !== strundefined ? context.getElementsByTagName(tag || '*') : typeof context.querySelectorAll !== strundefined ? context.querySelectorAll(tag || '*') : undefined;
    if (!found) {
      for (found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++) {
        if (!tag || jQuery.nodeName(elem, tag)) {
          found.push(elem);
        } else {
          jQuery.merge(found, getAll(elem, tag));
        }
      }
    }
    return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], found) : found;
  }
  function fixDefaultChecked(elem) {
    if (rcheckableType.test(elem.type)) {
      elem.defaultChecked = elem.checked;
    }
  }
  function manipulationTarget(elem, content) {
    return jQuery.nodeName(elem, 'table') && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, 'tr') ? elem.getElementsByTagName('tbody')[0] || elem.appendChild(elem.ownerDocument.createElement('tbody')) : elem;
  }
  function disableScript(elem) {
    elem.type = (jQuery.find.attr(elem, 'type') !== null) + '/' + elem.type;
    return elem;
  }
  function restoreScript(elem) {
    var match = rscriptTypeMasked.exec(elem.type);
    if (match) {
      elem.type = match[1];
    } else {
      elem.removeAttribute('type');
    }
    return elem;
  }
  function setGlobalEval(elems, refElements) {
    var elem, i = 0;
    for (; (elem = elems[i]) != null; i++) {
      jQuery._data(elem, 'globalEval', !refElements || jQuery._data(refElements[i], 'globalEval'));
    }
  }
  function cloneCopyEvent(src, dest) {
    if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
      return;
    }
    var type, i, l, oldData = jQuery._data(src), curData = jQuery._data(dest, oldData), events = oldData.events;
    if (events) {
      delete curData.handle;
      curData.events = {};
      for (type in events) {
        for (i = 0, l = events[type].length; i < l; i++) {
          jQuery.event.add(dest, type, events[type][i]);
        }
      }
    }
    if (curData.data) {
      curData.data = jQuery.extend({}, curData.data);
    }
  }
  function fixCloneNodeIssues(src, dest) {
    var nodeName, e, data;
    if (dest.nodeType !== 1) {
      return;
    }
    nodeName = dest.nodeName.toLowerCase();
    if (!support.noCloneEvent && dest[jQuery.expando]) {
      data = jQuery._data(dest);
      for (e in data.events) {
        jQuery.removeEvent(dest, e, data.handle);
      }
      dest.removeAttribute(jQuery.expando);
    }
    if (nodeName === 'script' && dest.text !== src.text) {
      disableScript(dest).text = src.text;
      restoreScript(dest);
    } else if (nodeName === 'object') {
      if (dest.parentNode) {
        dest.outerHTML = src.outerHTML;
      }
      if (support.html5Clone && (src.innerHTML && !jQuery.trim(dest.innerHTML))) {
        dest.innerHTML = src.innerHTML;
      }
    } else if (nodeName === 'input' && rcheckableType.test(src.type)) {
      dest.defaultChecked = dest.checked = src.checked;
      if (dest.value !== src.value) {
        dest.value = src.value;
      }
    } else if (nodeName === 'option') {
      dest.defaultSelected = dest.selected = src.defaultSelected;
    } else if (nodeName === 'input' || nodeName === 'textarea') {
      dest.defaultValue = src.defaultValue;
    }
  }
  jQuery.extend({
    clone: function (elem, dataAndEvents, deepDataAndEvents) {
      var destElements, node, clone, i, srcElements, inPage = jQuery.contains(elem.ownerDocument, elem);
      if (support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test('<' + elem.nodeName + '>')) {
        clone = elem.cloneNode(true);
      } else {
        fragmentDiv.innerHTML = elem.outerHTML;
        fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
      }
      if ((!support.noCloneEvent || !support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        destElements = getAll(clone);
        srcElements = getAll(elem);
        for (i = 0; (node = srcElements[i]) != null; ++i) {
          if (destElements[i]) {
            fixCloneNodeIssues(node, destElements[i]);
          }
        }
      }
      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);
          for (i = 0; (node = srcElements[i]) != null; i++) {
            cloneCopyEvent(node, destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      }
      destElements = getAll(clone, 'script');
      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, 'script'));
      }
      destElements = srcElements = node = null;
      return clone;
    },
    buildFragment: function (elems, context, scripts, selection) {
      var j, elem, contains, tmp, tag, tbody, wrap, l = elems.length, safe = createSafeFragment(context), nodes = [], i = 0;
      for (; i < l; i++) {
        elem = elems[i];
        if (elem || elem === 0) {
          if (jQuery.type(elem) === 'object') {
            jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
          } else if (!rhtml.test(elem)) {
            nodes.push(context.createTextNode(elem));
          } else {
            tmp = tmp || safe.appendChild(context.createElement('div'));
            tag = (rtagName.exec(elem) || [
              '',
              ''
            ])[1].toLowerCase();
            wrap = wrapMap[tag] || wrapMap._default;
            tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, '<$1></$2>') + wrap[2];
            j = wrap[0];
            while (j--) {
              tmp = tmp.lastChild;
            }
            if (!support.leadingWhitespace && rleadingWhitespace.test(elem)) {
              nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
            }
            if (!support.tbody) {
              elem = tag === 'table' && !rtbody.test(elem) ? tmp.firstChild : wrap[1] === '<table>' && !rtbody.test(elem) ? tmp : 0;
              j = elem && elem.childNodes.length;
              while (j--) {
                if (jQuery.nodeName(tbody = elem.childNodes[j], 'tbody') && !tbody.childNodes.length) {
                  elem.removeChild(tbody);
                }
              }
            }
            jQuery.merge(nodes, tmp.childNodes);
            tmp.textContent = '';
            while (tmp.firstChild) {
              tmp.removeChild(tmp.firstChild);
            }
            tmp = safe.lastChild;
          }
        }
      }
      if (tmp) {
        safe.removeChild(tmp);
      }
      if (!support.appendChecked) {
        jQuery.grep(getAll(nodes, 'input'), fixDefaultChecked);
      }
      i = 0;
      while (elem = nodes[i++]) {
        if (selection && jQuery.inArray(elem, selection) !== -1) {
          continue;
        }
        contains = jQuery.contains(elem.ownerDocument, elem);
        tmp = getAll(safe.appendChild(elem), 'script');
        if (contains) {
          setGlobalEval(tmp);
        }
        if (scripts) {
          j = 0;
          while (elem = tmp[j++]) {
            if (rscriptType.test(elem.type || '')) {
              scripts.push(elem);
            }
          }
        }
      }
      tmp = null;
      return safe;
    },
    cleanData: function (elems, acceptData) {
      var elem, type, id, data, i = 0, internalKey = jQuery.expando, cache = jQuery.cache, deleteExpando = support.deleteExpando, special = jQuery.event.special;
      for (; (elem = elems[i]) != null; i++) {
        if (acceptData || jQuery.acceptData(elem)) {
          id = elem[internalKey];
          data = id && cache[id];
          if (data) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type);
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            }
            if (cache[id]) {
              delete cache[id];
              if (deleteExpando) {
                delete elem[internalKey];
              } else if (typeof elem.removeAttribute !== strundefined) {
                elem.removeAttribute(internalKey);
              } else {
                elem[internalKey] = null;
              }
              deletedIds.push(id);
            }
          }
        }
      }
    }
  });
  jQuery.fn.extend({
    text: function (value) {
      return access(this, function (value) {
        return value === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));
      }, null, value, arguments.length);
    },
    append: function () {
      return this.domManip(arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend: function () {
      return this.domManip(arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function () {
      return this.domManip(arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function () {
      return this.domManip(arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    remove: function (selector, keepData) {
      var elem, elems = selector ? jQuery.filter(selector, this) : this, i = 0;
      for (; (elem = elems[i]) != null; i++) {
        if (!keepData && elem.nodeType === 1) {
          jQuery.cleanData(getAll(elem));
        }
        if (elem.parentNode) {
          if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
            setGlobalEval(getAll(elem, 'script'));
          }
          elem.parentNode.removeChild(elem);
        }
      }
      return this;
    },
    empty: function () {
      var elem, i = 0;
      for (; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
          jQuery.cleanData(getAll(elem, false));
        }
        while (elem.firstChild) {
          elem.removeChild(elem.firstChild);
        }
        if (elem.options && jQuery.nodeName(elem, 'select')) {
          elem.options.length = 0;
        }
      }
      return this;
    },
    clone: function (dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function () {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function (value) {
      return access(this, function (value) {
        var elem = this[0] || {}, i = 0, l = this.length;
        if (value === undefined) {
          return elem.nodeType === 1 ? elem.innerHTML.replace(rinlinejQuery, '') : undefined;
        }
        if (typeof value === 'string' && !rnoInnerhtml.test(value) && (support.htmlSerialize || !rnoshimcache.test(value)) && (support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || [
            '',
            ''
          ])[1].toLowerCase()]) {
          value = value.replace(rxhtmlTag, '<$1></$2>');
          try {
            for (; i < l; i++) {
              elem = this[i] || {};
              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value;
              }
            }
            elem = 0;
          } catch (e) {
          }
        }
        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function () {
      var arg = arguments[0];
      this.domManip(arguments, function (elem) {
        arg = this.parentNode;
        jQuery.cleanData(getAll(this));
        if (arg) {
          arg.replaceChild(elem, this);
        }
      });
      return arg && (arg.length || arg.nodeType) ? this : this.remove();
    },
    detach: function (selector) {
      return this.remove(selector, true);
    },
    domManip: function (args, callback) {
      args = concat.apply([], args);
      var first, node, hasScripts, scripts, doc, fragment, i = 0, l = this.length, set = this, iNoClone = l - 1, value = args[0], isFunction = jQuery.isFunction(value);
      if (isFunction || l > 1 && typeof value === 'string' && !support.checkClone && rchecked.test(value)) {
        return this.each(function (index) {
          var self = set.eq(index);
          if (isFunction) {
            args[0] = value.call(this, index, self.html());
          }
          self.domManip(args, callback);
        });
      }
      if (l) {
        fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, this);
        first = fragment.firstChild;
        if (fragment.childNodes.length === 1) {
          fragment = first;
        }
        if (first) {
          scripts = jQuery.map(getAll(fragment, 'script'), disableScript);
          hasScripts = scripts.length;
          for (; i < l; i++) {
            node = fragment;
            if (i !== iNoClone) {
              node = jQuery.clone(node, true, true);
              if (hasScripts) {
                jQuery.merge(scripts, getAll(node, 'script'));
              }
            }
            callback.call(this[i], node, i);
          }
          if (hasScripts) {
            doc = scripts[scripts.length - 1].ownerDocument;
            jQuery.map(scripts, restoreScript);
            for (i = 0; i < hasScripts; i++) {
              node = scripts[i];
              if (rscriptType.test(node.type || '') && !jQuery._data(node, 'globalEval') && jQuery.contains(doc, node)) {
                if (node.src) {
                  if (jQuery._evalUrl) {
                    jQuery._evalUrl(node.src);
                  }
                } else {
                  jQuery.globalEval((node.text || node.textContent || node.innerHTML || '').replace(rcleanScript, ''));
                }
              }
            }
          }
          fragment = first = null;
        }
      }
      return this;
    }
  });
  jQuery.each({
    appendTo: 'append',
    prependTo: 'prepend',
    insertBefore: 'before',
    insertAfter: 'after',
    replaceAll: 'replaceWith'
  }, function (name, original) {
    jQuery.fn[name] = function (selector) {
      var elems, i = 0, ret = [], insert = jQuery(selector), last = insert.length - 1;
      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery(insert[i])[original](elems);
        push.apply(ret, elems.get());
      }
      return this.pushStack(ret);
    };
  });
  var iframe, elemdisplay = {};
  function actualDisplay(name, doc) {
    var elem = jQuery(doc.createElement(name)).appendTo(doc.body), display = window.getDefaultComputedStyle ? window.getDefaultComputedStyle(elem[0]).display : jQuery.css(elem[0], 'display');
    elem.detach();
    return display;
  }
  function defaultDisplay(nodeName) {
    var doc = document, display = elemdisplay[nodeName];
    if (!display) {
      display = actualDisplay(nodeName, doc);
      if (display === 'none' || !display) {
        iframe = (iframe || jQuery('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>')).appendTo(doc.documentElement);
        doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;
        doc.write();
        doc.close();
        display = actualDisplay(nodeName, doc);
        iframe.detach();
      }
      elemdisplay[nodeName] = display;
    }
    return display;
  }
  (function () {
    var a, shrinkWrapBlocksVal, div = document.createElement('div'), divReset = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;' + 'display:block;padding:0;margin:0;border:0';
    div.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>';
    a = div.getElementsByTagName('a')[0];
    a.style.cssText = 'float:left;opacity:.5';
    support.opacity = /^0.5/.test(a.style.opacity);
    support.cssFloat = !!a.style.cssFloat;
    div.style.backgroundClip = 'content-box';
    div.cloneNode(true).style.backgroundClip = '';
    support.clearCloneStyle = div.style.backgroundClip === 'content-box';
    a = div = null;
    support.shrinkWrapBlocks = function () {
      var body, container, div, containerStyles;
      if (shrinkWrapBlocksVal == null) {
        body = document.getElementsByTagName('body')[0];
        if (!body) {
          return;
        }
        containerStyles = 'border:0;width:0;height:0;position:absolute;top:0;left:-9999px';
        container = document.createElement('div');
        div = document.createElement('div');
        body.appendChild(container).appendChild(div);
        shrinkWrapBlocksVal = false;
        if (typeof div.style.zoom !== strundefined) {
          div.style.cssText = divReset + ';width:1px;padding:1px;zoom:1';
          div.innerHTML = '<div></div>';
          div.firstChild.style.width = '5px';
          shrinkWrapBlocksVal = div.offsetWidth !== 3;
        }
        body.removeChild(container);
        body = container = div = null;
      }
      return shrinkWrapBlocksVal;
    };
  }());
  var rmargin = /^margin/;
  var rnumnonpx = new RegExp('^(' + pnum + ')(?!px)[a-z%]+$', 'i');
  var getStyles, curCSS, rposition = /^(top|right|bottom|left)$/;
  if (window.getComputedStyle) {
    getStyles = function (elem) {
      return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
    };
    curCSS = function (elem, name, computed) {
      var width, minWidth, maxWidth, ret, style = elem.style;
      computed = computed || getStyles(elem);
      ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined;
      if (computed) {
        if (ret === '' && !jQuery.contains(elem.ownerDocument, elem)) {
          ret = jQuery.style(elem, name);
        }
        if (rnumnonpx.test(ret) && rmargin.test(name)) {
          width = style.width;
          minWidth = style.minWidth;
          maxWidth = style.maxWidth;
          style.minWidth = style.maxWidth = style.width = ret;
          ret = computed.width;
          style.width = width;
          style.minWidth = minWidth;
          style.maxWidth = maxWidth;
        }
      }
      return ret === undefined ? ret : ret + '';
    };
  } else if (document.documentElement.currentStyle) {
    getStyles = function (elem) {
      return elem.currentStyle;
    };
    curCSS = function (elem, name, computed) {
      var left, rs, rsLeft, ret, style = elem.style;
      computed = computed || getStyles(elem);
      ret = computed ? computed[name] : undefined;
      if (ret == null && style && style[name]) {
        ret = style[name];
      }
      if (rnumnonpx.test(ret) && !rposition.test(name)) {
        left = style.left;
        rs = elem.runtimeStyle;
        rsLeft = rs && rs.left;
        if (rsLeft) {
          rs.left = elem.currentStyle.left;
        }
        style.left = name === 'fontSize' ? '1em' : ret;
        ret = style.pixelLeft + 'px';
        style.left = left;
        if (rsLeft) {
          rs.left = rsLeft;
        }
      }
      return ret === undefined ? ret : ret + '' || 'auto';
    };
  }
  function addGetHookIf(conditionFn, hookFn) {
    return {
      get: function () {
        var condition = conditionFn();
        if (condition == null) {
          return;
        }
        if (condition) {
          delete this.get;
          return;
        }
        return (this.get = hookFn).apply(this, arguments);
      }
    };
  }
  (function () {
    var a, reliableHiddenOffsetsVal, boxSizingVal, boxSizingReliableVal, pixelPositionVal, reliableMarginRightVal, div = document.createElement('div'), containerStyles = 'border:0;width:0;height:0;position:absolute;top:0;left:-9999px', divReset = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;' + 'display:block;padding:0;margin:0;border:0';
    div.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>';
    a = div.getElementsByTagName('a')[0];
    a.style.cssText = 'float:left;opacity:.5';
    support.opacity = /^0.5/.test(a.style.opacity);
    support.cssFloat = !!a.style.cssFloat;
    div.style.backgroundClip = 'content-box';
    div.cloneNode(true).style.backgroundClip = '';
    support.clearCloneStyle = div.style.backgroundClip === 'content-box';
    a = div = null;
    jQuery.extend(support, {
      reliableHiddenOffsets: function () {
        if (reliableHiddenOffsetsVal != null) {
          return reliableHiddenOffsetsVal;
        }
        var container, tds, isSupported, div = document.createElement('div'), body = document.getElementsByTagName('body')[0];
        if (!body) {
          return;
        }
        div.setAttribute('className', 't');
        div.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>';
        container = document.createElement('div');
        container.style.cssText = containerStyles;
        body.appendChild(container).appendChild(div);
        div.innerHTML = '<table><tr><td></td><td>t</td></tr></table>';
        tds = div.getElementsByTagName('td');
        tds[0].style.cssText = 'padding:0;margin:0;border:0;display:none';
        isSupported = tds[0].offsetHeight === 0;
        tds[0].style.display = '';
        tds[1].style.display = 'none';
        reliableHiddenOffsetsVal = isSupported && tds[0].offsetHeight === 0;
        body.removeChild(container);
        div = body = null;
        return reliableHiddenOffsetsVal;
      },
      boxSizing: function () {
        if (boxSizingVal == null) {
          computeStyleTests();
        }
        return boxSizingVal;
      },
      boxSizingReliable: function () {
        if (boxSizingReliableVal == null) {
          computeStyleTests();
        }
        return boxSizingReliableVal;
      },
      pixelPosition: function () {
        if (pixelPositionVal == null) {
          computeStyleTests();
        }
        return pixelPositionVal;
      },
      reliableMarginRight: function () {
        var body, container, div, marginDiv;
        if (reliableMarginRightVal == null && window.getComputedStyle) {
          body = document.getElementsByTagName('body')[0];
          if (!body) {
            return;
          }
          container = document.createElement('div');
          div = document.createElement('div');
          container.style.cssText = containerStyles;
          body.appendChild(container).appendChild(div);
          marginDiv = div.appendChild(document.createElement('div'));
          marginDiv.style.cssText = div.style.cssText = divReset;
          marginDiv.style.marginRight = marginDiv.style.width = '0';
          div.style.width = '1px';
          reliableMarginRightVal = !parseFloat((window.getComputedStyle(marginDiv, null) || {}).marginRight);
          body.removeChild(container);
        }
        return reliableMarginRightVal;
      }
    });
    function computeStyleTests() {
      var container, div, body = document.getElementsByTagName('body')[0];
      if (!body) {
        return;
      }
      container = document.createElement('div');
      div = document.createElement('div');
      container.style.cssText = containerStyles;
      body.appendChild(container).appendChild(div);
      div.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;' + 'position:absolute;display:block;padding:1px;border:1px;width:4px;' + 'margin-top:1%;top:1%';
      jQuery.swap(body, body.style.zoom != null ? { zoom: 1 } : {}, function () {
        boxSizingVal = div.offsetWidth === 4;
      });
      boxSizingReliableVal = true;
      pixelPositionVal = false;
      reliableMarginRightVal = true;
      if (window.getComputedStyle) {
        pixelPositionVal = (window.getComputedStyle(div, null) || {}).top !== '1%';
        boxSizingReliableVal = (window.getComputedStyle(div, null) || { width: '4px' }).width === '4px';
      }
      body.removeChild(container);
      div = body = null;
    }
  }());
  jQuery.swap = function (elem, options, callback, args) {
    var ret, name, old = {};
    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }
    ret = callback.apply(elem, args || []);
    for (name in options) {
      elem.style[name] = old[name];
    }
    return ret;
  };
  var ralpha = /alpha\([^)]*\)/i, ropacity = /opacity\s*=\s*([^)]*)/, rdisplayswap = /^(none|table(?!-c[ea]).+)/, rnumsplit = new RegExp('^(' + pnum + ')(.*)$', 'i'), rrelNum = new RegExp('^([+-])=(' + pnum + ')', 'i'), cssShow = {
      position: 'absolute',
      visibility: 'hidden',
      display: 'block'
    }, cssNormalTransform = {
      letterSpacing: 0,
      fontWeight: 400
    }, cssPrefixes = [
      'Webkit',
      'O',
      'Moz',
      'ms'
    ];
  function vendorPropName(style, name) {
    if (name in style) {
      return name;
    }
    var capName = name.charAt(0).toUpperCase() + name.slice(1), origName = name, i = cssPrefixes.length;
    while (i--) {
      name = cssPrefixes[i] + capName;
      if (name in style) {
        return name;
      }
    }
    return origName;
  }
  function showHide(elements, show) {
    var display, elem, hidden, values = [], index = 0, length = elements.length;
    for (; index < length; index++) {
      elem = elements[index];
      if (!elem.style) {
        continue;
      }
      values[index] = jQuery._data(elem, 'olddisplay');
      display = elem.style.display;
      if (show) {
        if (!values[index] && display === 'none') {
          elem.style.display = '';
        }
        if (elem.style.display === '' && isHidden(elem)) {
          values[index] = jQuery._data(elem, 'olddisplay', defaultDisplay(elem.nodeName));
        }
      } else {
        if (!values[index]) {
          hidden = isHidden(elem);
          if (display && display !== 'none' || !hidden) {
            jQuery._data(elem, 'olddisplay', hidden ? display : jQuery.css(elem, 'display'));
          }
        }
      }
    }
    for (index = 0; index < length; index++) {
      elem = elements[index];
      if (!elem.style) {
        continue;
      }
      if (!show || elem.style.display === 'none' || elem.style.display === '') {
        elem.style.display = show ? values[index] || '' : 'none';
      }
    }
    return elements;
  }
  function setPositiveNumber(elem, value, subtract) {
    var matches = rnumsplit.exec(value);
    return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || 'px') : value;
  }
  function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
    var i = extra === (isBorderBox ? 'border' : 'content') ? 4 : name === 'width' ? 1 : 0, val = 0;
    for (; i < 4; i += 2) {
      if (extra === 'margin') {
        val += jQuery.css(elem, extra + cssExpand[i], true, styles);
      }
      if (isBorderBox) {
        if (extra === 'content') {
          val -= jQuery.css(elem, 'padding' + cssExpand[i], true, styles);
        }
        if (extra !== 'margin') {
          val -= jQuery.css(elem, 'border' + cssExpand[i] + 'Width', true, styles);
        }
      } else {
        val += jQuery.css(elem, 'padding' + cssExpand[i], true, styles);
        if (extra !== 'padding') {
          val += jQuery.css(elem, 'border' + cssExpand[i] + 'Width', true, styles);
        }
      }
    }
    return val;
  }
  function getWidthOrHeight(elem, name, extra) {
    var valueIsBorderBox = true, val = name === 'width' ? elem.offsetWidth : elem.offsetHeight, styles = getStyles(elem), isBorderBox = support.boxSizing() && jQuery.css(elem, 'boxSizing', false, styles) === 'border-box';
    if (val <= 0 || val == null) {
      val = curCSS(elem, name, styles);
      if (val < 0 || val == null) {
        val = elem.style[name];
      }
      if (rnumnonpx.test(val)) {
        return val;
      }
      valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
      val = parseFloat(val) || 0;
    }
    return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? 'border' : 'content'), valueIsBorderBox, styles) + 'px';
  }
  jQuery.extend({
    cssHooks: {
      opacity: {
        get: function (elem, computed) {
          if (computed) {
            var ret = curCSS(elem, 'opacity');
            return ret === '' ? '1' : ret;
          }
        }
      }
    },
    cssNumber: {
      'columnCount': true,
      'fillOpacity': true,
      'fontWeight': true,
      'lineHeight': true,
      'opacity': true,
      'order': true,
      'orphans': true,
      'widows': true,
      'zIndex': true,
      'zoom': true
    },
    cssProps: { 'float': support.cssFloat ? 'cssFloat' : 'styleFloat' },
    style: function (elem, name, value, extra) {
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      }
      var ret, type, hooks, origName = jQuery.camelCase(name), style = elem.style;
      name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
      if (value !== undefined) {
        type = typeof value;
        if (type === 'string' && (ret = rrelNum.exec(value))) {
          value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
          type = 'number';
        }
        if (value == null || value !== value) {
          return;
        }
        if (type === 'number' && !jQuery.cssNumber[origName]) {
          value += 'px';
        }
        if (!support.clearCloneStyle && value === '' && name.indexOf('background') === 0) {
          style[name] = 'inherit';
        }
        if (!hooks || !('set' in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
          try {
            style[name] = '';
            style[name] = value;
          } catch (e) {
          }
        }
      } else {
        if (hooks && 'get' in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret;
        }
        return style[name];
      }
    },
    css: function (elem, name, extra, styles) {
      var num, val, hooks, origName = jQuery.camelCase(name);
      name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
      if (hooks && 'get' in hooks) {
        val = hooks.get(elem, true, extra);
      }
      if (val === undefined) {
        val = curCSS(elem, name, styles);
      }
      if (val === 'normal' && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      }
      if (extra === '' || extra) {
        num = parseFloat(val);
        return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
      }
      return val;
    }
  });
  jQuery.each([
    'height',
    'width'
  ], function (i, name) {
    jQuery.cssHooks[name] = {
      get: function (elem, computed, extra) {
        if (computed) {
          return elem.offsetWidth === 0 && rdisplayswap.test(jQuery.css(elem, 'display')) ? jQuery.swap(elem, cssShow, function () {
            return getWidthOrHeight(elem, name, extra);
          }) : getWidthOrHeight(elem, name, extra);
        }
      },
      set: function (elem, value, extra) {
        var styles = extra && getStyles(elem);
        return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, support.boxSizing() && jQuery.css(elem, 'boxSizing', false, styles) === 'border-box', styles) : 0);
      }
    };
  });
  if (!support.opacity) {
    jQuery.cssHooks.opacity = {
      get: function (elem, computed) {
        return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || '') ? 0.01 * parseFloat(RegExp.$1) + '' : computed ? '1' : '';
      },
      set: function (elem, value) {
        var style = elem.style, currentStyle = elem.currentStyle, opacity = jQuery.isNumeric(value) ? 'alpha(opacity=' + value * 100 + ')' : '', filter = currentStyle && currentStyle.filter || style.filter || '';
        style.zoom = 1;
        if ((value >= 1 || value === '') && jQuery.trim(filter.replace(ralpha, '')) === '' && style.removeAttribute) {
          style.removeAttribute('filter');
          if (value === '' || currentStyle && !currentStyle.filter) {
            return;
          }
        }
        style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + ' ' + opacity;
      }
    };
  }
  jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function (elem, computed) {
    if (computed) {
      return jQuery.swap(elem, { 'display': 'inline-block' }, curCSS, [
        elem,
        'marginRight'
      ]);
    }
  });
  jQuery.each({
    margin: '',
    padding: '',
    border: 'Width'
  }, function (prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {
      expand: function (value) {
        var i = 0, expanded = {}, parts = typeof value === 'string' ? value.split(' ') : [value];
        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        }
        return expanded;
      }
    };
    if (!rmargin.test(prefix)) {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  jQuery.fn.extend({
    css: function (name, value) {
      return access(this, function (elem, name, value) {
        var styles, len, map = {}, i = 0;
        if (jQuery.isArray(name)) {
          styles = getStyles(elem);
          len = name.length;
          for (; i < len; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }
          return map;
        }
        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    },
    show: function () {
      return showHide(this, true);
    },
    hide: function () {
      return showHide(this);
    },
    toggle: function (state) {
      if (typeof state === 'boolean') {
        return state ? this.show() : this.hide();
      }
      return this.each(function () {
        if (isHidden(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }
  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function (elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || 'swing';
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? '' : 'px');
    },
    cur: function () {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function (percent) {
      var eased, hooks = Tween.propHooks[this.prop];
      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }
      this.now = (this.end - this.start) * eased + this.start;
      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }
      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }
      return this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {
    _default: {
      get: function (tween) {
        var result;
        if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
          return tween.elem[tween.prop];
        }
        result = jQuery.css(tween.elem, tween.prop, '');
        return !result || result === 'auto' ? 0 : result;
      },
      set: function (tween) {
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }
  };
  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function (tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }
  };
  jQuery.easing = {
    linear: function (p) {
      return p;
    },
    swing: function (p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    }
  };
  jQuery.fx = Tween.prototype.init;
  jQuery.fx.step = {};
  var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/, rfxnum = new RegExp('^(?:([+-])=|)(' + pnum + ')([a-z%]*)$', 'i'), rrun = /queueHooks$/, animationPrefilters = [defaultPrefilter], tweeners = {
      '*': [function (prop, value) {
          var tween = this.createTween(prop, value), target = tween.cur(), parts = rfxnum.exec(value), unit = parts && parts[3] || (jQuery.cssNumber[prop] ? '' : 'px'), start = (jQuery.cssNumber[prop] || unit !== 'px' && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)), scale = 1, maxIterations = 20;
          if (start && start[3] !== unit) {
            unit = unit || start[3];
            parts = parts || [];
            start = +target || 1;
            do {
              scale = scale || '.5';
              start = start / scale;
              jQuery.style(tween.elem, prop, start + unit);
            } while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
          }
          if (parts) {
            start = tween.start = +start || +target || 0;
            tween.unit = unit;
            tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2];
          }
          return tween;
        }]
    };
  function createFxNow() {
    setTimeout(function () {
      fxNow = undefined;
    });
    return fxNow = jQuery.now();
  }
  function genFx(type, includeWidth) {
    var which, attrs = { height: type }, i = 0;
    includeWidth = includeWidth ? 1 : 0;
    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs['margin' + which] = attrs['padding' + which] = type;
    }
    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }
    return attrs;
  }
  function createTween(value, prop, animation) {
    var tween, collection = (tweeners[prop] || []).concat(tweeners['*']), index = 0, length = collection.length;
    for (; index < length; index++) {
      if (tween = collection[index].call(animation, prop, value)) {
        return tween;
      }
    }
  }
  function defaultPrefilter(elem, props, opts) {
    var prop, value, toggle, tween, hooks, oldfire, display, dDisplay, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHidden(elem), dataShow = jQuery._data(elem, 'fxshow');
    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, 'fx');
      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;
        hooks.empty.fire = function () {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }
      hooks.unqueued++;
      anim.always(function () {
        anim.always(function () {
          hooks.unqueued--;
          if (!jQuery.queue(elem, 'fx').length) {
            hooks.empty.fire();
          }
        });
      });
    }
    if (elem.nodeType === 1 && ('height' in props || 'width' in props)) {
      opts.overflow = [
        style.overflow,
        style.overflowX,
        style.overflowY
      ];
      display = jQuery.css(elem, 'display');
      dDisplay = defaultDisplay(elem.nodeName);
      if (display === 'none') {
        display = dDisplay;
      }
      if (display === 'inline' && jQuery.css(elem, 'float') === 'none') {
        if (!support.inlineBlockNeedsLayout || dDisplay === 'inline') {
          style.display = 'inline-block';
        } else {
          style.zoom = 1;
        }
      }
    }
    if (opts.overflow) {
      style.overflow = 'hidden';
      if (!support.shrinkWrapBlocks()) {
        anim.always(function () {
          style.overflow = opts.overflow[0];
          style.overflowX = opts.overflow[1];
          style.overflowY = opts.overflow[2];
        });
      }
    }
    for (prop in props) {
      value = props[prop];
      if (rfxtypes.exec(value)) {
        delete props[prop];
        toggle = toggle || value === 'toggle';
        if (value === (hidden ? 'hide' : 'show')) {
          if (value === 'show' && dataShow && dataShow[prop] !== undefined) {
            hidden = true;
          } else {
            continue;
          }
        }
        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
      }
    }
    if (!jQuery.isEmptyObject(orig)) {
      if (dataShow) {
        if ('hidden' in dataShow) {
          hidden = dataShow.hidden;
        }
      } else {
        dataShow = jQuery._data(elem, 'fxshow', {});
      }
      if (toggle) {
        dataShow.hidden = !hidden;
      }
      if (hidden) {
        jQuery(elem).show();
      } else {
        anim.done(function () {
          jQuery(elem).hide();
        });
      }
      anim.done(function () {
        var prop;
        jQuery._removeData(elem, 'fxshow');
        for (prop in orig) {
          jQuery.style(elem, prop, orig[prop]);
        }
      });
      for (prop in orig) {
        tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
        if (!(prop in dataShow)) {
          dataShow[prop] = tween.start;
          if (hidden) {
            tween.end = tween.start;
            tween.start = prop === 'width' || prop === 'height' ? 1 : 0;
          }
        }
      }
    }
  }
  function propFilter(props, specialEasing) {
    var index, name, easing, value, hooks;
    for (index in props) {
      name = jQuery.camelCase(index);
      easing = specialEasing[name];
      value = props[index];
      if (jQuery.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }
      if (index !== name) {
        props[name] = value;
        delete props[index];
      }
      hooks = jQuery.cssHooks[name];
      if (hooks && 'expand' in hooks) {
        value = hooks.expand(value);
        delete props[name];
        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }
  function Animation(elem, properties, options) {
    var result, stopped, index = 0, length = animationPrefilters.length, deferred = jQuery.Deferred().always(function () {
        delete tick.elem;
      }), tick = function () {
        if (stopped) {
          return false;
        }
        var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;
        for (; index < length; index++) {
          animation.tweens[index].run(percent);
        }
        deferred.notifyWith(elem, [
          animation,
          percent,
          remaining
        ]);
        if (percent < 1 && length) {
          return remaining;
        } else {
          deferred.resolveWith(elem, [animation]);
          return false;
        }
      }, animation = deferred.promise({
        elem: elem,
        props: jQuery.extend({}, properties),
        opts: jQuery.extend(true, { specialEasing: {} }, options),
        originalProperties: properties,
        originalOptions: options,
        startTime: fxNow || createFxNow(),
        duration: options.duration,
        tweens: [],
        createTween: function (prop, end) {
          var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
          animation.tweens.push(tween);
          return tween;
        },
        stop: function (gotoEnd) {
          var index = 0, length = gotoEnd ? animation.tweens.length : 0;
          if (stopped) {
            return this;
          }
          stopped = true;
          for (; index < length; index++) {
            animation.tweens[index].run(1);
          }
          if (gotoEnd) {
            deferred.resolveWith(elem, [
              animation,
              gotoEnd
            ]);
          } else {
            deferred.rejectWith(elem, [
              animation,
              gotoEnd
            ]);
          }
          return this;
        }
      }), props = animation.props;
    propFilter(props, animation.opts.specialEasing);
    for (; index < length; index++) {
      result = animationPrefilters[index].call(animation, elem, props, animation.opts);
      if (result) {
        return result;
      }
    }
    jQuery.map(props, createTween, animation);
    if (jQuery.isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    }
    jQuery.fx.timer(jQuery.extend(tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    }));
    return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
  }
  jQuery.Animation = jQuery.extend(Animation, {
    tweener: function (props, callback) {
      if (jQuery.isFunction(props)) {
        callback = props;
        props = ['*'];
      } else {
        props = props.split(' ');
      }
      var prop, index = 0, length = props.length;
      for (; index < length; index++) {
        prop = props[index];
        tweeners[prop] = tweeners[prop] || [];
        tweeners[prop].unshift(callback);
      }
    },
    prefilter: function (callback, prepend) {
      if (prepend) {
        animationPrefilters.unshift(callback);
      } else {
        animationPrefilters.push(callback);
      }
    }
  });
  jQuery.speed = function (speed, easing, fn) {
    var opt = speed && typeof speed === 'object' ? jQuery.extend({}, speed) : {
        complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
        duration: speed,
        easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
      };
    opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === 'number' ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
    if (opt.queue == null || opt.queue === true) {
      opt.queue = 'fx';
    }
    opt.old = opt.complete;
    opt.complete = function () {
      if (jQuery.isFunction(opt.old)) {
        opt.old.call(this);
      }
      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };
    return opt;
  };
  jQuery.fn.extend({
    fadeTo: function (speed, to, easing, callback) {
      return this.filter(isHidden).css('opacity', 0).show().end().animate({ opacity: to }, speed, easing, callback);
    },
    animate: function (prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function () {
          var anim = Animation(this, jQuery.extend({}, prop), optall);
          if (empty || jQuery._data(this, 'finish')) {
            anim.stop(true);
          }
        };
      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function (type, clearQueue, gotoEnd) {
      var stopQueue = function (hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };
      if (typeof type !== 'string') {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }
      if (clearQueue && type !== false) {
        this.queue(type || 'fx', []);
      }
      return this.each(function () {
        var dequeue = true, index = type != null && type + 'queueHooks', timers = jQuery.timers, data = jQuery._data(this);
        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }
        for (index = timers.length; index--;) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        }
        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function (type) {
      if (type !== false) {
        type = type || 'fx';
      }
      return this.each(function () {
        var index, data = jQuery._data(this), queue = data[type + 'queue'], hooks = data[type + 'queueHooks'], timers = jQuery.timers, length = queue ? queue.length : 0;
        data.finish = true;
        jQuery.queue(this, type, []);
        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        }
        for (index = timers.length; index--;) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        }
        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        }
        delete data.finish;
      });
    }
  });
  jQuery.each([
    'toggle',
    'show',
    'hide'
  ], function (i, name) {
    var cssFn = jQuery.fn[name];
    jQuery.fn[name] = function (speed, easing, callback) {
      return speed == null || typeof speed === 'boolean' ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  });
  jQuery.each({
    slideDown: genFx('show'),
    slideUp: genFx('hide'),
    slideToggle: genFx('toggle'),
    fadeIn: { opacity: 'show' },
    fadeOut: { opacity: 'hide' },
    fadeToggle: { opacity: 'toggle' }
  }, function (name, props) {
    jQuery.fn[name] = function (speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });
  jQuery.timers = [];
  jQuery.fx.tick = function () {
    var timer, timers = jQuery.timers, i = 0;
    fxNow = jQuery.now();
    for (; i < timers.length; i++) {
      timer = timers[i];
      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }
    if (!timers.length) {
      jQuery.fx.stop();
    }
    fxNow = undefined;
  };
  jQuery.fx.timer = function (timer) {
    jQuery.timers.push(timer);
    if (timer()) {
      jQuery.fx.start();
    } else {
      jQuery.timers.pop();
    }
  };
  jQuery.fx.interval = 13;
  jQuery.fx.start = function () {
    if (!timerId) {
      timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
    }
  };
  jQuery.fx.stop = function () {
    clearInterval(timerId);
    timerId = null;
  };
  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  };
  jQuery.fn.delay = function (time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || 'fx';
    return this.queue(type, function (next, hooks) {
      var timeout = setTimeout(next, time);
      hooks.stop = function () {
        clearTimeout(timeout);
      };
    });
  };
  (function () {
    var a, input, select, opt, div = document.createElement('div');
    div.setAttribute('className', 't');
    div.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>';
    a = div.getElementsByTagName('a')[0];
    select = document.createElement('select');
    opt = select.appendChild(document.createElement('option'));
    input = div.getElementsByTagName('input')[0];
    a.style.cssText = 'top:1px';
    support.getSetAttribute = div.className !== 't';
    support.style = /top/.test(a.getAttribute('style'));
    support.hrefNormalized = a.getAttribute('href') === '/a';
    support.checkOn = !!input.value;
    support.optSelected = opt.selected;
    support.enctype = !!document.createElement('form').enctype;
    select.disabled = true;
    support.optDisabled = !opt.disabled;
    input = document.createElement('input');
    input.setAttribute('value', '');
    support.input = input.getAttribute('value') === '';
    input.value = 't';
    input.setAttribute('type', 'radio');
    support.radioValue = input.value === 't';
    a = input = select = opt = div = null;
  }());
  var rreturn = /\r/g;
  jQuery.fn.extend({
    val: function (value) {
      var hooks, ret, isFunction, elem = this[0];
      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
          if (hooks && 'get' in hooks && (ret = hooks.get(elem, 'value')) !== undefined) {
            return ret;
          }
          ret = elem.value;
          return typeof ret === 'string' ? ret.replace(rreturn, '') : ret == null ? '' : ret;
        }
        return;
      }
      isFunction = jQuery.isFunction(value);
      return this.each(function (i) {
        var val;
        if (this.nodeType !== 1) {
          return;
        }
        if (isFunction) {
          val = value.call(this, i, jQuery(this).val());
        } else {
          val = value;
        }
        if (val == null) {
          val = '';
        } else if (typeof val === 'number') {
          val += '';
        } else if (jQuery.isArray(val)) {
          val = jQuery.map(val, function (value) {
            return value == null ? '' : value + '';
          });
        }
        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
        if (!hooks || !('set' in hooks) || hooks.set(this, val, 'value') === undefined) {
          this.value = val;
        }
      });
    }
  });
  jQuery.extend({
    valHooks: {
      option: {
        get: function (elem) {
          var val = jQuery.find.attr(elem, 'value');
          return val != null ? val : jQuery.text(elem);
        }
      },
      select: {
        get: function (elem) {
          var value, option, options = elem.options, index = elem.selectedIndex, one = elem.type === 'select-one' || index < 0, values = one ? null : [], max = one ? index + 1 : options.length, i = index < 0 ? max : one ? index : 0;
          for (; i < max; i++) {
            option = options[i];
            if ((option.selected || i === index) && (support.optDisabled ? !option.disabled : option.getAttribute('disabled') === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, 'optgroup'))) {
              value = jQuery(option).val();
              if (one) {
                return value;
              }
              values.push(value);
            }
          }
          return values;
        },
        set: function (elem, value) {
          var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
          while (i--) {
            option = options[i];
            if (jQuery.inArray(jQuery.valHooks.option.get(option), values) >= 0) {
              try {
                option.selected = optionSet = true;
              } catch (_) {
                option.scrollHeight;
              }
            } else {
              option.selected = false;
            }
          }
          if (!optionSet) {
            elem.selectedIndex = -1;
          }
          return options;
        }
      }
    }
  });
  jQuery.each([
    'radio',
    'checkbox'
  ], function () {
    jQuery.valHooks[this] = {
      set: function (elem, value) {
        if (jQuery.isArray(value)) {
          return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0;
        }
      }
    };
    if (!support.checkOn) {
      jQuery.valHooks[this].get = function (elem) {
        return elem.getAttribute('value') === null ? 'on' : elem.value;
      };
    }
  });
  var nodeHook, boolHook, attrHandle = jQuery.expr.attrHandle, ruseDefault = /^(?:checked|selected)$/i, getSetAttribute = support.getSetAttribute, getSetInput = support.input;
  jQuery.fn.extend({
    attr: function (name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function (name) {
      return this.each(function () {
        jQuery.removeAttr(this, name);
      });
    }
  });
  jQuery.extend({
    attr: function (elem, name, value) {
      var hooks, ret, nType = elem.nodeType;
      if (!elem || nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      if (typeof elem.getAttribute === strundefined) {
        return jQuery.prop(elem, name, value);
      }
      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        name = name.toLowerCase();
        hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
      }
      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
        } else if (hooks && 'set' in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        } else {
          elem.setAttribute(name, value + '');
          return value;
        }
      } else if (hooks && 'get' in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      } else {
        ret = jQuery.find.attr(elem, name);
        return ret == null ? undefined : ret;
      }
    },
    removeAttr: function (elem, value) {
      var name, propName, i = 0, attrNames = value && value.match(rnotwhite);
      if (attrNames && elem.nodeType === 1) {
        while (name = attrNames[i++]) {
          propName = jQuery.propFix[name] || name;
          if (jQuery.expr.match.bool.test(name)) {
            if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
              elem[propName] = false;
            } else {
              elem[jQuery.camelCase('default-' + name)] = elem[propName] = false;
            }
          } else {
            jQuery.attr(elem, name, '');
          }
          elem.removeAttribute(getSetAttribute ? name : propName);
        }
      }
    },
    attrHooks: {
      type: {
        set: function (elem, value) {
          if (!support.radioValue && value === 'radio' && jQuery.nodeName(elem, 'input')) {
            var val = elem.value;
            elem.setAttribute('type', value);
            if (val) {
              elem.value = val;
            }
            return value;
          }
        }
      }
    }
  });
  boolHook = {
    set: function (elem, value, name) {
      if (value === false) {
        jQuery.removeAttr(elem, name);
      } else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
        elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name);
      } else {
        elem[jQuery.camelCase('default-' + name)] = elem[name] = true;
      }
      return name;
    }
  };
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
    var getter = attrHandle[name] || jQuery.find.attr;
    attrHandle[name] = getSetInput && getSetAttribute || !ruseDefault.test(name) ? function (elem, name, isXML) {
      var ret, handle;
      if (!isXML) {
        handle = attrHandle[name];
        attrHandle[name] = ret;
        ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
        attrHandle[name] = handle;
      }
      return ret;
    } : function (elem, name, isXML) {
      if (!isXML) {
        return elem[jQuery.camelCase('default-' + name)] ? name.toLowerCase() : null;
      }
    };
  });
  if (!getSetInput || !getSetAttribute) {
    jQuery.attrHooks.value = {
      set: function (elem, value, name) {
        if (jQuery.nodeName(elem, 'input')) {
          elem.defaultValue = value;
        } else {
          return nodeHook && nodeHook.set(elem, value, name);
        }
      }
    };
  }
  if (!getSetAttribute) {
    nodeHook = {
      set: function (elem, value, name) {
        var ret = elem.getAttributeNode(name);
        if (!ret) {
          elem.setAttributeNode(ret = elem.ownerDocument.createAttribute(name));
        }
        ret.value = value += '';
        if (name === 'value' || value === elem.getAttribute(name)) {
          return value;
        }
      }
    };
    attrHandle.id = attrHandle.name = attrHandle.coords = function (elem, name, isXML) {
      var ret;
      if (!isXML) {
        return (ret = elem.getAttributeNode(name)) && ret.value !== '' ? ret.value : null;
      }
    };
    jQuery.valHooks.button = {
      get: function (elem, name) {
        var ret = elem.getAttributeNode(name);
        if (ret && ret.specified) {
          return ret.value;
        }
      },
      set: nodeHook.set
    };
    jQuery.attrHooks.contenteditable = {
      set: function (elem, value, name) {
        nodeHook.set(elem, value === '' ? false : value, name);
      }
    };
    jQuery.each([
      'width',
      'height'
    ], function (i, name) {
      jQuery.attrHooks[name] = {
        set: function (elem, value) {
          if (value === '') {
            elem.setAttribute(name, 'auto');
            return value;
          }
        }
      };
    });
  }
  if (!support.style) {
    jQuery.attrHooks.style = {
      get: function (elem) {
        return elem.style.cssText || undefined;
      },
      set: function (elem, value) {
        return elem.style.cssText = value + '';
      }
    };
  }
  var rfocusable = /^(?:input|select|textarea|button|object)$/i, rclickable = /^(?:a|area)$/i;
  jQuery.fn.extend({
    prop: function (name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function (name) {
      name = jQuery.propFix[name] || name;
      return this.each(function () {
        try {
          this[name] = undefined;
          delete this[name];
        } catch (e) {
        }
      });
    }
  });
  jQuery.extend({
    propFix: {
      'for': 'htmlFor',
      'class': 'className'
    },
    prop: function (elem, name, value) {
      var ret, hooks, notxml, nType = elem.nodeType;
      if (!elem || nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
      if (notxml) {
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }
      if (value !== undefined) {
        return hooks && 'set' in hooks && (ret = hooks.set(elem, value, name)) !== undefined ? ret : elem[name] = value;
      } else {
        return hooks && 'get' in hooks && (ret = hooks.get(elem, name)) !== null ? ret : elem[name];
      }
    },
    propHooks: {
      tabIndex: {
        get: function (elem) {
          var tabindex = jQuery.find.attr(elem, 'tabindex');
          return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
        }
      }
    }
  });
  if (!support.hrefNormalized) {
    jQuery.each([
      'href',
      'src'
    ], function (i, name) {
      jQuery.propHooks[name] = {
        get: function (elem) {
          return elem.getAttribute(name, 4);
        }
      };
    });
  }
  if (!support.optSelected) {
    jQuery.propHooks.selected = {
      get: function (elem) {
        var parent = elem.parentNode;
        if (parent) {
          parent.selectedIndex;
          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
        return null;
      }
    };
  }
  jQuery.each([
    'tabIndex',
    'readOnly',
    'maxLength',
    'cellSpacing',
    'cellPadding',
    'rowSpan',
    'colSpan',
    'useMap',
    'frameBorder',
    'contentEditable'
  ], function () {
    jQuery.propFix[this.toLowerCase()] = this;
  });
  if (!support.enctype) {
    jQuery.propFix.enctype = 'encoding';
  }
  var rclass = /[\t\r\n\f]/g;
  jQuery.fn.extend({
    addClass: function (value) {
      var classes, elem, cur, clazz, j, finalValue, i = 0, len = this.length, proceed = typeof value === 'string' && value;
      if (jQuery.isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).addClass(value.call(this, j, this.className));
        });
      }
      if (proceed) {
        classes = (value || '').match(rnotwhite) || [];
        for (; i < len; i++) {
          elem = this[i];
          cur = elem.nodeType === 1 && (elem.className ? (' ' + elem.className + ' ').replace(rclass, ' ') : ' ');
          if (cur) {
            j = 0;
            while (clazz = classes[j++]) {
              if (cur.indexOf(' ' + clazz + ' ') < 0) {
                cur += clazz + ' ';
              }
            }
            finalValue = jQuery.trim(cur);
            if (elem.className !== finalValue) {
              elem.className = finalValue;
            }
          }
        }
      }
      return this;
    },
    removeClass: function (value) {
      var classes, elem, cur, clazz, j, finalValue, i = 0, len = this.length, proceed = arguments.length === 0 || typeof value === 'string' && value;
      if (jQuery.isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).removeClass(value.call(this, j, this.className));
        });
      }
      if (proceed) {
        classes = (value || '').match(rnotwhite) || [];
        for (; i < len; i++) {
          elem = this[i];
          cur = elem.nodeType === 1 && (elem.className ? (' ' + elem.className + ' ').replace(rclass, ' ') : '');
          if (cur) {
            j = 0;
            while (clazz = classes[j++]) {
              while (cur.indexOf(' ' + clazz + ' ') >= 0) {
                cur = cur.replace(' ' + clazz + ' ', ' ');
              }
            }
            finalValue = value ? jQuery.trim(cur) : '';
            if (elem.className !== finalValue) {
              elem.className = finalValue;
            }
          }
        }
      }
      return this;
    },
    toggleClass: function (value, stateVal) {
      var type = typeof value;
      if (typeof stateVal === 'boolean' && type === 'string') {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }
      if (jQuery.isFunction(value)) {
        return this.each(function (i) {
          jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
        });
      }
      return this.each(function () {
        if (type === 'string') {
          var className, i = 0, self = jQuery(this), classNames = value.match(rnotwhite) || [];
          while (className = classNames[i++]) {
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          }
        } else if (type === strundefined || type === 'boolean') {
          if (this.className) {
            jQuery._data(this, '__className__', this.className);
          }
          this.className = this.className || value === false ? '' : jQuery._data(this, '__className__') || '';
        }
      });
    },
    hasClass: function (selector) {
      var className = ' ' + selector + ' ', i = 0, l = this.length;
      for (; i < l; i++) {
        if (this[i].nodeType === 1 && (' ' + this[i].className + ' ').replace(rclass, ' ').indexOf(className) >= 0) {
          return true;
        }
      }
      return false;
    }
  });
  jQuery.each(('blur focus focusin focusout load resize scroll unload click dblclick ' + 'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave ' + 'change select submit keydown keypress keyup error contextmenu').split(' '), function (i, name) {
    jQuery.fn[name] = function (data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  });
  jQuery.fn.extend({
    hover: function (fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    },
    bind: function (types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function (types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function (selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function (selector, types, fn) {
      return arguments.length === 1 ? this.off(selector, '**') : this.off(types, selector || '**', fn);
    }
  });
  var nonce = jQuery.now();
  var rquery = /\?/;
  var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  jQuery.parseJSON = function (data) {
    if (window.JSON && window.JSON.parse) {
      return window.JSON.parse(data + '');
    }
    var requireNonComma, depth = null, str = jQuery.trim(data + '');
    return str && !jQuery.trim(str.replace(rvalidtokens, function (token, comma, open, close) {
      if (requireNonComma && comma) {
        depth = 0;
      }
      if (depth === 0) {
        return token;
      }
      requireNonComma = open || comma;
      depth += !close - !open;
      return '';
    })) ? Function('return ' + str)() : jQuery.error('Invalid JSON: ' + data);
  };
  jQuery.parseXML = function (data) {
    var xml, tmp;
    if (!data || typeof data !== 'string') {
      return null;
    }
    try {
      if (window.DOMParser) {
        tmp = new DOMParser();
        xml = tmp.parseFromString(data, 'text/xml');
      } else {
        xml = new ActiveXObject('Microsoft.XMLDOM');
        xml.async = 'false';
        xml.loadXML(data);
      }
    } catch (e) {
      xml = undefined;
    }
    if (!xml || !xml.documentElement || xml.getElementsByTagName('parsererror').length) {
      jQuery.error('Invalid XML: ' + data);
    }
    return xml;
  };
  var ajaxLocParts, ajaxLocation, rhash = /#.*$/, rts = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, prefilters = {}, transports = {}, allTypes = '*/'.concat('*');
  try {
    ajaxLocation = location.href;
  } catch (e) {
    ajaxLocation = document.createElement('a');
    ajaxLocation.href = '';
    ajaxLocation = ajaxLocation.href;
  }
  ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
  function addToPrefiltersOrTransports(structure) {
    return function (dataTypeExpression, func) {
      if (typeof dataTypeExpression !== 'string') {
        func = dataTypeExpression;
        dataTypeExpression = '*';
      }
      var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
      if (jQuery.isFunction(func)) {
        while (dataType = dataTypes[i++]) {
          if (dataType.charAt(0) === '+') {
            dataType = dataType.slice(1) || '*';
            (structure[dataType] = structure[dataType] || []).unshift(func);
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  }
  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    var inspected = {}, seekingTransport = structure === transports;
    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
        if (typeof dataTypeOrTransport === 'string' && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }
    return inspect(options.dataTypes[0]) || !inspected['*'] && inspect('*');
  }
  function ajaxExtend(target, src) {
    var deep, key, flatOptions = jQuery.ajaxSettings.flatOptions || {};
    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
      }
    }
    if (deep) {
      jQuery.extend(true, target, deep);
    }
    return target;
  }
  function ajaxHandleResponses(s, jqXHR, responses) {
    var firstDataType, ct, finalDataType, type, contents = s.contents, dataTypes = s.dataTypes;
    while (dataTypes[0] === '*') {
      dataTypes.shift();
      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader('Content-Type');
      }
    }
    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    }
    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + ' ' + dataTypes[0]]) {
          finalDataType = type;
          break;
        }
        if (!firstDataType) {
          firstDataType = type;
        }
      }
      finalDataType = finalDataType || firstDataType;
    }
    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }
      return responses[finalDataType];
    }
  }
  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }
    current = dataTypes.shift();
    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      }
      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }
      prev = current;
      current = dataTypes.shift();
      if (current) {
        if (current === '*') {
          current = prev;
        } else if (prev !== '*' && prev !== current) {
          conv = converters[prev + ' ' + current] || converters['* ' + current];
          if (!conv) {
            for (conv2 in converters) {
              tmp = conv2.split(' ');
              if (tmp[1] === current) {
                conv = converters[prev + ' ' + tmp[0]] || converters['* ' + tmp[0]];
                if (conv) {
                  if (conv === true) {
                    conv = converters[conv2];
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }
                  break;
                }
              }
            }
          }
          if (conv !== true) {
            if (conv && s['throws']) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: 'parsererror',
                  error: conv ? e : 'No conversion from ' + prev + ' to ' + current
                };
              }
            }
          }
        }
      }
    }
    return {
      state: 'success',
      data: response
    };
  }
  jQuery.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: ajaxLocation,
      type: 'GET',
      isLocal: rlocalProtocol.test(ajaxLocParts[1]),
      global: true,
      processData: true,
      async: true,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': allTypes,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript'
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: 'responseXML',
        text: 'responseText',
        json: 'responseJSON'
      },
      converters: {
        '* text': String,
        'text html': true,
        'text json': jQuery.parseJSON,
        'text xml': jQuery.parseXML
      },
      flatOptions: {
        url: true,
        context: true
      }
    },
    ajaxSetup: function (target, settings) {
      return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    ajax: function (url, options) {
      if (typeof url === 'object') {
        options = url;
        url = undefined;
      }
      options = options || {};
      var parts, i, cacheURL, responseHeadersString, timeoutTimer, fireGlobals, transport, responseHeaders, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks('once memory'), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, state = 0, strAbort = 'canceled', jqXHR = {
          readyState: 0,
          getResponseHeader: function (key) {
            var match;
            if (state === 2) {
              if (!responseHeaders) {
                responseHeaders = {};
                while (match = rheaders.exec(responseHeadersString)) {
                  responseHeaders[match[1].toLowerCase()] = match[2];
                }
              }
              match = responseHeaders[key.toLowerCase()];
            }
            return match == null ? null : match;
          },
          getAllResponseHeaders: function () {
            return state === 2 ? responseHeadersString : null;
          },
          setRequestHeader: function (name, value) {
            var lname = name.toLowerCase();
            if (!state) {
              name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
              requestHeaders[name] = value;
            }
            return this;
          },
          overrideMimeType: function (type) {
            if (!state) {
              s.mimeType = type;
            }
            return this;
          },
          statusCode: function (map) {
            var code;
            if (map) {
              if (state < 2) {
                for (code in map) {
                  statusCode[code] = [
                    statusCode[code],
                    map[code]
                  ];
                }
              } else {
                jqXHR.always(map[jqXHR.status]);
              }
            }
            return this;
          },
          abort: function (statusText) {
            var finalText = statusText || strAbort;
            if (transport) {
              transport.abort(finalText);
            }
            done(0, finalText);
            return this;
          }
        };
      deferred.promise(jqXHR).complete = completeDeferred.add;
      jqXHR.success = jqXHR.done;
      jqXHR.error = jqXHR.fail;
      s.url = ((url || s.url || ajaxLocation) + '').replace(rhash, '').replace(rprotocol, ajaxLocParts[1] + '//');
      s.type = options.method || options.type || s.method || s.type;
      s.dataTypes = jQuery.trim(s.dataType || '*').toLowerCase().match(rnotwhite) || [''];
      if (s.crossDomain == null) {
        parts = rurl.exec(s.url.toLowerCase());
        s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === 'http:' ? '80' : '443')) !== (ajaxLocParts[3] || (ajaxLocParts[1] === 'http:' ? '80' : '443'))));
      }
      if (s.data && s.processData && typeof s.data !== 'string') {
        s.data = jQuery.param(s.data, s.traditional);
      }
      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
      if (state === 2) {
        return jqXHR;
      }
      fireGlobals = s.global;
      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger('ajaxStart');
      }
      s.type = s.type.toUpperCase();
      s.hasContent = !rnoContent.test(s.type);
      cacheURL = s.url;
      if (!s.hasContent) {
        if (s.data) {
          cacheURL = s.url += (rquery.test(cacheURL) ? '&' : '?') + s.data;
          delete s.data;
        }
        if (s.cache === false) {
          s.url = rts.test(cacheURL) ? cacheURL.replace(rts, '$1_=' + nonce++) : cacheURL + (rquery.test(cacheURL) ? '&' : '?') + '_=' + nonce++;
        }
      }
      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader('If-Modified-Since', jQuery.lastModified[cacheURL]);
        }
        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader('If-None-Match', jQuery.etag[cacheURL]);
        }
      }
      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader('Content-Type', s.contentType);
      }
      jqXHR.setRequestHeader('Accept', s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== '*' ? ', ' + allTypes + '; q=0.01' : '') : s.accepts['*']);
      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      }
      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
        return jqXHR.abort();
      }
      strAbort = 'abort';
      for (i in {
          success: 1,
          error: 1,
          complete: 1
        }) {
        jqXHR[i](s[i]);
      }
      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
      if (!transport) {
        done(-1, 'No Transport');
      } else {
        jqXHR.readyState = 1;
        if (fireGlobals) {
          globalEventContext.trigger('ajaxSend', [
            jqXHR,
            s
          ]);
        }
        if (s.async && s.timeout > 0) {
          timeoutTimer = setTimeout(function () {
            jqXHR.abort('timeout');
          }, s.timeout);
        }
        try {
          state = 1;
          transport.send(requestHeaders, done);
        } catch (e) {
          if (state < 2) {
            done(-1, e);
          } else {
            throw e;
          }
        }
      }
      function done(status, nativeStatusText, responses, headers) {
        var isSuccess, success, error, response, modified, statusText = nativeStatusText;
        if (state === 2) {
          return;
        }
        state = 2;
        if (timeoutTimer) {
          clearTimeout(timeoutTimer);
        }
        transport = undefined;
        responseHeadersString = headers || '';
        jqXHR.readyState = status > 0 ? 4 : 0;
        isSuccess = status >= 200 && status < 300 || status === 304;
        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        }
        response = ajaxConvert(s, response, jqXHR, isSuccess);
        if (isSuccess) {
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader('Last-Modified');
            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }
            modified = jqXHR.getResponseHeader('etag');
            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          }
          if (status === 204 || s.type === 'HEAD') {
            statusText = 'nocontent';
          } else if (status === 304) {
            statusText = 'notmodified';
          } else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          }
        } else {
          error = statusText;
          if (status || !statusText) {
            statusText = 'error';
            if (status < 0) {
              status = 0;
            }
          }
        }
        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + '';
        if (isSuccess) {
          deferred.resolveWith(callbackContext, [
            success,
            statusText,
            jqXHR
          ]);
        } else {
          deferred.rejectWith(callbackContext, [
            jqXHR,
            statusText,
            error
          ]);
        }
        jqXHR.statusCode(statusCode);
        statusCode = undefined;
        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? 'ajaxSuccess' : 'ajaxError', [
            jqXHR,
            s,
            isSuccess ? success : error
          ]);
        }
        completeDeferred.fireWith(callbackContext, [
          jqXHR,
          statusText
        ]);
        if (fireGlobals) {
          globalEventContext.trigger('ajaxComplete', [
            jqXHR,
            s
          ]);
          if (!--jQuery.active) {
            jQuery.event.trigger('ajaxStop');
          }
        }
      }
      return jqXHR;
    },
    getJSON: function (url, data, callback) {
      return jQuery.get(url, data, callback, 'json');
    },
    getScript: function (url, callback) {
      return jQuery.get(url, undefined, callback, 'script');
    }
  });
  jQuery.each([
    'get',
    'post'
  ], function (i, method) {
    jQuery[method] = function (url, data, callback, type) {
      if (jQuery.isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      }
      return jQuery.ajax({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      });
    };
  });
  jQuery.each([
    'ajaxStart',
    'ajaxStop',
    'ajaxComplete',
    'ajaxError',
    'ajaxSuccess',
    'ajaxSend'
  ], function (i, type) {
    jQuery.fn[type] = function (fn) {
      return this.on(type, fn);
    };
  });
  jQuery._evalUrl = function (url) {
    return jQuery.ajax({
      url: url,
      type: 'GET',
      dataType: 'script',
      async: false,
      global: false,
      'throws': true
    });
  };
  jQuery.fn.extend({
    wrapAll: function (html) {
      if (jQuery.isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapAll(html.call(this, i));
        });
      }
      if (this[0]) {
        var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }
        wrap.map(function () {
          var elem = this;
          while (elem.firstChild && elem.firstChild.nodeType === 1) {
            elem = elem.firstChild;
          }
          return elem;
        }).append(this);
      }
      return this;
    },
    wrapInner: function (html) {
      if (jQuery.isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapInner(html.call(this, i));
        });
      }
      return this.each(function () {
        var self = jQuery(this), contents = self.contents();
        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function (html) {
      var isFunction = jQuery.isFunction(html);
      return this.each(function (i) {
        jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function () {
      return this.parent().each(function () {
        if (!jQuery.nodeName(this, 'body')) {
          jQuery(this).replaceWith(this.childNodes);
        }
      }).end();
    }
  });
  jQuery.expr.filters.hidden = function (elem) {
    return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 || !support.reliableHiddenOffsets() && (elem.style && elem.style.display || jQuery.css(elem, 'display')) === 'none';
  };
  jQuery.expr.filters.visible = function (elem) {
    return !jQuery.expr.filters.hidden(elem);
  };
  var r20 = /%20/g, rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
  function buildParams(prefix, obj, traditional, add) {
    var name;
    if (jQuery.isArray(obj)) {
      jQuery.each(obj, function (i, v) {
        if (traditional || rbracket.test(prefix)) {
          add(prefix, v);
        } else {
          buildParams(prefix + '[' + (typeof v === 'object' ? i : '') + ']', v, traditional, add);
        }
      });
    } else if (!traditional && jQuery.type(obj) === 'object') {
      for (name in obj) {
        buildParams(prefix + '[' + name + ']', obj[name], traditional, add);
      }
    } else {
      add(prefix, obj);
    }
  }
  jQuery.param = function (a, traditional) {
    var prefix, s = [], add = function (key, value) {
        value = jQuery.isFunction(value) ? value() : value == null ? '' : value;
        s[s.length] = encodeURIComponent(key) + '=' + encodeURIComponent(value);
      };
    if (traditional === undefined) {
      traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
    }
    if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
      jQuery.each(a, function () {
        add(this.name, this.value);
      });
    } else {
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    }
    return s.join('&').replace(r20, '+');
  };
  jQuery.fn.extend({
    serialize: function () {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var elements = jQuery.prop(this, 'elements');
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function () {
        var type = this.type;
        return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function (i, elem) {
        var val = jQuery(this).val();
        return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
          return {
            name: elem.name,
            value: val.replace(rCRLF, '\r\n')
          };
        }) : {
          name: elem.name,
          value: val.replace(rCRLF, '\r\n')
        };
      }).get();
    }
  });
  jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ? function () {
    return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && createStandardXHR() || createActiveXHR();
  } : createStandardXHR;
  var xhrId = 0, xhrCallbacks = {}, xhrSupported = jQuery.ajaxSettings.xhr();
  if (window.ActiveXObject) {
    jQuery(window).on('unload', function () {
      for (var key in xhrCallbacks) {
        xhrCallbacks[key](undefined, true);
      }
    });
  }
  support.cors = !!xhrSupported && 'withCredentials' in xhrSupported;
  xhrSupported = support.ajax = !!xhrSupported;
  if (xhrSupported) {
    jQuery.ajaxTransport(function (options) {
      if (!options.crossDomain || support.cors) {
        var callback;
        return {
          send: function (headers, complete) {
            var i, xhr = options.xhr(), id = ++xhrId;
            xhr.open(options.type, options.url, options.async, options.username, options.password);
            if (options.xhrFields) {
              for (i in options.xhrFields) {
                xhr[i] = options.xhrFields[i];
              }
            }
            if (options.mimeType && xhr.overrideMimeType) {
              xhr.overrideMimeType(options.mimeType);
            }
            if (!options.crossDomain && !headers['X-Requested-With']) {
              headers['X-Requested-With'] = 'XMLHttpRequest';
            }
            for (i in headers) {
              if (headers[i] !== undefined) {
                xhr.setRequestHeader(i, headers[i] + '');
              }
            }
            xhr.send(options.hasContent && options.data || null);
            callback = function (_, isAbort) {
              var status, statusText, responses;
              if (callback && (isAbort || xhr.readyState === 4)) {
                delete xhrCallbacks[id];
                callback = undefined;
                xhr.onreadystatechange = jQuery.noop;
                if (isAbort) {
                  if (xhr.readyState !== 4) {
                    xhr.abort();
                  }
                } else {
                  responses = {};
                  status = xhr.status;
                  if (typeof xhr.responseText === 'string') {
                    responses.text = xhr.responseText;
                  }
                  try {
                    statusText = xhr.statusText;
                  } catch (e) {
                    statusText = '';
                  }
                  if (!status && options.isLocal && !options.crossDomain) {
                    status = responses.text ? 200 : 404;
                  } else if (status === 1223) {
                    status = 204;
                  }
                }
              }
              if (responses) {
                complete(status, statusText, responses, xhr.getAllResponseHeaders());
              }
            };
            if (!options.async) {
              callback();
            } else if (xhr.readyState === 4) {
              setTimeout(callback);
            } else {
              xhr.onreadystatechange = xhrCallbacks[id] = callback;
            }
          },
          abort: function () {
            if (callback) {
              callback(undefined, true);
            }
          }
        };
      }
    });
  }
  function createStandardXHR() {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {
    }
  }
  function createActiveXHR() {
    try {
      return new window.ActiveXObject('Microsoft.XMLHTTP');
    } catch (e) {
    }
  }
  jQuery.ajaxSetup({
    accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
    contents: { script: /(?:java|ecma)script/ },
    converters: {
      'text script': function (text) {
        jQuery.globalEval(text);
        return text;
      }
    }
  });
  jQuery.ajaxPrefilter('script', function (s) {
    if (s.cache === undefined) {
      s.cache = false;
    }
    if (s.crossDomain) {
      s.type = 'GET';
      s.global = false;
    }
  });
  jQuery.ajaxTransport('script', function (s) {
    if (s.crossDomain) {
      var script, head = document.head || jQuery('head')[0] || document.documentElement;
      return {
        send: function (_, callback) {
          script = document.createElement('script');
          script.async = true;
          if (s.scriptCharset) {
            script.charset = s.scriptCharset;
          }
          script.src = s.url;
          script.onload = script.onreadystatechange = function (_, isAbort) {
            if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
              script.onload = script.onreadystatechange = null;
              if (script.parentNode) {
                script.parentNode.removeChild(script);
              }
              script = null;
              if (!isAbort) {
                callback(200, 'success');
              }
            }
          };
          head.insertBefore(script, head.firstChild);
        },
        abort: function () {
          if (script) {
            script.onload(undefined, true);
          }
        }
      };
    }
  });
  var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
  jQuery.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var callback = oldCallbacks.pop() || jQuery.expando + '_' + nonce++;
      this[callback] = true;
      return callback;
    }
  });
  jQuery.ajaxPrefilter('json jsonp', function (s, originalSettings, jqXHR) {
    var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? 'url' : typeof s.data === 'string' && !(s.contentType || '').indexOf('application/x-www-form-urlencoded') && rjsonp.test(s.data) && 'data');
    if (jsonProp || s.dataTypes[0] === 'jsonp') {
      callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, '$1' + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? '&' : '?') + s.jsonp + '=' + callbackName;
      }
      s.converters['script json'] = function () {
        if (!responseContainer) {
          jQuery.error(callbackName + ' was not called');
        }
        return responseContainer[0];
      };
      s.dataTypes[0] = 'json';
      overwritten = window[callbackName];
      window[callbackName] = function () {
        responseContainer = arguments;
      };
      jqXHR.always(function () {
        window[callbackName] = overwritten;
        if (s[callbackName]) {
          s.jsonpCallback = originalSettings.jsonpCallback;
          oldCallbacks.push(callbackName);
        }
        if (responseContainer && jQuery.isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }
        responseContainer = overwritten = undefined;
      });
      return 'script';
    }
  });
  jQuery.parseHTML = function (data, context, keepScripts) {
    if (!data || typeof data !== 'string') {
      return null;
    }
    if (typeof context === 'boolean') {
      keepScripts = context;
      context = false;
    }
    context = context || document;
    var parsed = rsingleTag.exec(data), scripts = !keepScripts && [];
    if (parsed) {
      return [context.createElement(parsed[1])];
    }
    parsed = jQuery.buildFragment([data], context, scripts);
    if (scripts && scripts.length) {
      jQuery(scripts).remove();
    }
    return jQuery.merge([], parsed.childNodes);
  };
  var _load = jQuery.fn.load;
  jQuery.fn.load = function (url, params, callback) {
    if (typeof url !== 'string' && _load) {
      return _load.apply(this, arguments);
    }
    var selector, response, type, self = this, off = url.indexOf(' ');
    if (off >= 0) {
      selector = url.slice(off, url.length);
      url = url.slice(0, off);
    }
    if (jQuery.isFunction(params)) {
      callback = params;
      params = undefined;
    } else if (params && typeof params === 'object') {
      type = 'POST';
    }
    if (self.length > 0) {
      jQuery.ajax({
        url: url,
        type: type,
        dataType: 'html',
        data: params
      }).done(function (responseText) {
        response = arguments;
        self.html(selector ? jQuery('<div>').append(jQuery.parseHTML(responseText)).find(selector) : responseText);
      }).complete(callback && function (jqXHR, status) {
        self.each(callback, response || [
          jqXHR.responseText,
          status,
          jqXHR
        ]);
      });
    }
    return this;
  };
  jQuery.expr.filters.animated = function (elem) {
    return jQuery.grep(jQuery.timers, function (fn) {
      return elem === fn.elem;
    }).length;
  };
  var docElem = window.document.documentElement;
  function getWindow(elem) {
    return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
  }
  jQuery.offset = {
    setOffset: function (elem, options, i) {
      var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, 'position'), curElem = jQuery(elem), props = {};
      if (position === 'static') {
        elem.style.position = 'relative';
      }
      curOffset = curElem.offset();
      curCSSTop = jQuery.css(elem, 'top');
      curCSSLeft = jQuery.css(elem, 'left');
      calculatePosition = (position === 'absolute' || position === 'fixed') && jQuery.inArray('auto', [
        curCSSTop,
        curCSSLeft
      ]) > -1;
      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }
      if (jQuery.isFunction(options)) {
        options = options.call(elem, i, curOffset);
      }
      if (options.top != null) {
        props.top = options.top - curOffset.top + curTop;
      }
      if (options.left != null) {
        props.left = options.left - curOffset.left + curLeft;
      }
      if ('using' in options) {
        options.using.call(elem, props);
      } else {
        curElem.css(props);
      }
    }
  };
  jQuery.fn.extend({
    offset: function (options) {
      if (arguments.length) {
        return options === undefined ? this : this.each(function (i) {
          jQuery.offset.setOffset(this, options, i);
        });
      }
      var docElem, win, box = {
          top: 0,
          left: 0
        }, elem = this[0], doc = elem && elem.ownerDocument;
      if (!doc) {
        return;
      }
      docElem = doc.documentElement;
      if (!jQuery.contains(docElem, elem)) {
        return box;
      }
      if (typeof elem.getBoundingClientRect !== strundefined) {
        box = elem.getBoundingClientRect();
      }
      win = getWindow(doc);
      return {
        top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
        left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
      };
    },
    position: function () {
      if (!this[0]) {
        return;
      }
      var offsetParent, offset, parentOffset = {
          top: 0,
          left: 0
        }, elem = this[0];
      if (jQuery.css(elem, 'position') === 'fixed') {
        offset = elem.getBoundingClientRect();
      } else {
        offsetParent = this.offsetParent();
        offset = this.offset();
        if (!jQuery.nodeName(offsetParent[0], 'html')) {
          parentOffset = offsetParent.offset();
        }
        parentOffset.top += jQuery.css(offsetParent[0], 'borderTopWidth', true);
        parentOffset.left += jQuery.css(offsetParent[0], 'borderLeftWidth', true);
      }
      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, 'marginTop', true),
        left: offset.left - parentOffset.left - jQuery.css(elem, 'marginLeft', true)
      };
    },
    offsetParent: function () {
      return this.map(function () {
        var offsetParent = this.offsetParent || docElem;
        while (offsetParent && (!jQuery.nodeName(offsetParent, 'html') && jQuery.css(offsetParent, 'position') === 'static')) {
          offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || docElem;
      });
    }
  });
  jQuery.each({
    scrollLeft: 'pageXOffset',
    scrollTop: 'pageYOffset'
  }, function (method, prop) {
    var top = /Y/.test(prop);
    jQuery.fn[method] = function (val) {
      return access(this, function (elem, method, val) {
        var win = getWindow(elem);
        if (val === undefined) {
          return win ? prop in win ? win[prop] : win.document.documentElement[method] : elem[method];
        }
        if (win) {
          win.scrollTo(!top ? val : jQuery(win).scrollLeft(), top ? val : jQuery(win).scrollTop());
        } else {
          elem[method] = val;
        }
      }, method, val, arguments.length, null);
    };
  });
  jQuery.each([
    'top',
    'left'
  ], function (i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
      if (computed) {
        computed = curCSS(elem, prop);
        return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + 'px' : computed;
      }
    });
  });
  jQuery.each({
    Height: 'height',
    Width: 'width'
  }, function (name, type) {
    jQuery.each({
      padding: 'inner' + name,
      content: type,
      '': 'outer' + name
    }, function (defaultExtra, funcName) {
      jQuery.fn[funcName] = function (margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== 'boolean'), extra = defaultExtra || (margin === true || value === true ? 'margin' : 'border');
        return access(this, function (elem, type, value) {
          var doc;
          if (jQuery.isWindow(elem)) {
            return elem.document.documentElement['client' + name];
          }
          if (elem.nodeType === 9) {
            doc = elem.documentElement;
            return Math.max(elem.body['scroll' + name], doc['scroll' + name], elem.body['offset' + name], doc['offset' + name], doc['client' + name]);
          }
          return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable, null);
      };
    });
  });
  jQuery.fn.size = function () {
    return this.length;
  };
  jQuery.fn.andSelf = jQuery.fn.addBack;
  if (typeof define === 'function' && define.amd) {
    define('jquery', [], function () {
      return jQuery;
    });
  }
  var _jQuery = window.jQuery, _$ = window.$;
  jQuery.noConflict = function (deep) {
    if (window.$ === jQuery) {
      window.$ = _$;
    }
    if (deep && window.jQuery === jQuery) {
      window.jQuery = _jQuery;
    }
    return jQuery;
  };
  if (typeof noGlobal === strundefined) {
    window.jQuery = window.$ = jQuery;
  }
  return jQuery;
}));(function ($, undefined) {
  if ($.rails !== undefined) {
    $.error('jquery-ujs has already been loaded!');
  }
  var rails;
  var $document = $(document);
  $.rails = rails = {
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]',
    buttonClickSelector: 'button[data-remote]',
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
    formSubmitSelector: 'form',
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])',
    disableSelector: 'input[data-disable-with], button[data-disable-with], textarea[data-disable-with]',
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled',
    requiredInputSelector: 'input[name][required]:not([disabled]),textarea[name][required]:not([disabled])',
    fileInputSelector: 'input[type=file]',
    linkDisableSelector: 'a[data-disable-with]',
    CSRFProtection: function (xhr) {
      var token = $('meta[name="csrf-token"]').attr('content');
      if (token)
        xhr.setRequestHeader('X-CSRF-Token', token);
    },
    refreshCSRFTokens: function () {
      var csrfToken = $('meta[name=csrf-token]').attr('content');
      var csrfParam = $('meta[name=csrf-param]').attr('content');
      $('form input[name="' + csrfParam + '"]').val(csrfToken);
    },
    fire: function (obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },
    confirm: function (message) {
      return confirm(message);
    },
    ajax: function (options) {
      return $.ajax(options);
    },
    href: function (element) {
      return element.attr('href');
    },
    handleRemote: function (element) {
      var method, url, data, elCrossDomain, crossDomain, withCredentials, dataType, options;
      if (rails.fire(element, 'ajax:before')) {
        elCrossDomain = element.data('cross-domain');
        crossDomain = elCrossDomain === undefined ? null : elCrossDomain;
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || $.ajaxSettings && $.ajaxSettings.dataType;
        if (element.is('form')) {
          method = element.attr('method');
          url = element.attr('action');
          data = element.serializeArray();
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params'))
            data = data + '&' + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params'))
            data = data + '&' + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }
        options = {
          type: method || 'GET',
          data: data,
          dataType: dataType,
          beforeSend: function (xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            return rails.fire(element, 'ajax:beforeSend', [
              xhr,
              settings
            ]);
          },
          success: function (data, status, xhr) {
            element.trigger('ajax:success', [
              data,
              status,
              xhr
            ]);
          },
          complete: function (xhr, status) {
            element.trigger('ajax:complete', [
              xhr,
              status
            ]);
          },
          error: function (xhr, status, error) {
            element.trigger('ajax:error', [
              xhr,
              status,
              error
            ]);
          },
          crossDomain: crossDomain
        };
        if (withCredentials) {
          options.xhrFields = { withCredentials: withCredentials };
        }
        if (url) {
          options.url = url;
        }
        var jqxhr = rails.ajax(options);
        element.trigger('ajax:send', jqxhr);
        return jqxhr;
      } else {
        return false;
      }
    },
    handleMethod: function (link) {
      var href = rails.href(link), method = link.data('method'), target = link.attr('target'), csrfToken = $('meta[name=csrf-token]').attr('content'), csrfParam = $('meta[name=csrf-param]').attr('content'), form = $('<form method="post" action="' + href + '"></form>'), metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';
      if (csrfParam !== undefined && csrfToken !== undefined) {
        metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
      }
      if (target) {
        form.attr('target', target);
      }
      form.hide().append(metadataInput).appendTo('body');
      form.submit();
    },
    disableFormElements: function (form) {
      form.find(rails.disableSelector).each(function () {
        var element = $(this), method = element.is('button') ? 'html' : 'val';
        element.data('ujs:enable-with', element[method]());
        element[method](element.data('disable-with'));
        element.prop('disabled', true);
      });
    },
    enableFormElements: function (form) {
      form.find(rails.enableSelector).each(function () {
        var element = $(this), method = element.is('button') ? 'html' : 'val';
        if (element.data('ujs:enable-with'))
          element[method](element.data('ujs:enable-with'));
        element.prop('disabled', false);
      });
    },
    allowAction: function (element) {
      var message = element.data('confirm'), answer = false, callback;
      if (!message) {
        return true;
      }
      if (rails.fire(element, 'confirm')) {
        answer = rails.confirm(message);
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },
    blankInputs: function (form, specifiedSelector, nonBlank) {
      var inputs = $(), input, valueToCheck, selector = specifiedSelector || 'input,textarea', allInputs = form.find(selector);
      allInputs.each(function () {
        input = $(this);
        valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : input.val();
        if (!valueToCheck === !nonBlank) {
          if (input.is('input[type=radio]') && allInputs.filter('input[type=radio]:checked[name="' + input.attr('name') + '"]').length) {
            return true;
          }
          inputs = inputs.add(input);
        }
      });
      return inputs.length ? inputs : false;
    },
    nonBlankInputs: function (form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true);
    },
    stopEverything: function (e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },
    disableElement: function (element) {
      element.data('ujs:enable-with', element.html());
      element.html(element.data('disable-with'));
      element.bind('click.railsDisable', function (e) {
        return rails.stopEverything(e);
      });
    },
    enableElement: function (element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with'));
        element.removeData('ujs:enable-with');
      }
      element.unbind('click.railsDisable');
    }
  };
  if (rails.fire($document, 'rails:attachBindings')) {
    $.ajaxPrefilter(function (options, originalOptions, xhr) {
      if (!options.crossDomain) {
        rails.CSRFProtection(xhr);
      }
    });
    $document.delegate(rails.linkDisableSelector, 'ajax:complete', function () {
      rails.enableElement($(this));
    });
    $document.delegate(rails.linkClickSelector, 'click.rails', function (e) {
      var link = $(this), method = link.data('method'), data = link.data('params'), metaClick = e.metaKey || e.ctrlKey;
      if (!rails.allowAction(link))
        return rails.stopEverything(e);
      if (!metaClick && link.is(rails.linkDisableSelector))
        rails.disableElement(link);
      if (link.data('remote') !== undefined) {
        if (metaClick && (!method || method === 'GET') && !data) {
          return true;
        }
        var handleRemote = rails.handleRemote(link);
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.error(function () {
            rails.enableElement(link);
          });
        }
        return false;
      } else if (link.data('method')) {
        rails.handleMethod(link);
        return false;
      }
    });
    $document.delegate(rails.buttonClickSelector, 'click.rails', function (e) {
      var button = $(this);
      if (!rails.allowAction(button))
        return rails.stopEverything(e);
      rails.handleRemote(button);
      return false;
    });
    $document.delegate(rails.inputChangeSelector, 'change.rails', function (e) {
      var link = $(this);
      if (!rails.allowAction(link))
        return rails.stopEverything(e);
      rails.handleRemote(link);
      return false;
    });
    $document.delegate(rails.formSubmitSelector, 'submit.rails', function (e) {
      var form = $(this), remote = form.data('remote') !== undefined, blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector), nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);
      if (!rails.allowAction(form))
        return rails.stopEverything(e);
      if (blankRequiredInputs && form.attr('novalidate') == undefined && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
        return rails.stopEverything(e);
      }
      if (remote) {
        if (nonBlankFileInputs) {
          setTimeout(function () {
            rails.disableFormElements(form);
          }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);
          if (!aborted) {
            setTimeout(function () {
              rails.enableFormElements(form);
            }, 13);
          }
          return aborted;
        }
        rails.handleRemote(form);
        return false;
      } else {
        setTimeout(function () {
          rails.disableFormElements(form);
        }, 13);
      }
    });
    $document.delegate(rails.formInputClickSelector, 'click.rails', function (event) {
      var button = $(this);
      if (!rails.allowAction(button))
        return rails.stopEverything(event);
      var name = button.attr('name'), data = name ? {
          name: name,
          value: button.val()
        } : null;
      button.closest('form').data('ujs:submit-button', data);
    });
    $document.delegate(rails.formSubmitSelector, 'ajax:beforeSend.rails', function (event) {
      if (this == event.target)
        rails.disableFormElements($(this));
    });
    $document.delegate(rails.formSubmitSelector, 'ajax:complete.rails', function (event) {
      if (this == event.target)
        rails.enableFormElements($(this));
    });
    $(function () {
      rails.refreshCSRFTokens();
    });
  }
}(jQuery));(function (window, document, undefined) {
  'use strict';
  function minErr(module) {
    return function () {
      var code = arguments[0], prefix = '[' + (module ? module + ':' : '') + code + '] ', template = arguments[1], templateArgs = arguments, stringify = function (obj) {
          if (typeof obj === 'function') {
            return obj.toString().replace(/ \{[\s\S]*$/, '');
          } else if (typeof obj === 'undefined') {
            return 'undefined';
          } else if (typeof obj !== 'string') {
            return JSON.stringify(obj);
          }
          return obj;
        }, message, i;
      message = prefix + template.replace(/\{\d+\}/g, function (match) {
        var index = +match.slice(1, -1), arg;
        if (index + 2 < templateArgs.length) {
          arg = templateArgs[index + 2];
          if (typeof arg === 'function') {
            return arg.toString().replace(/ ?\{[\s\S]*$/, '');
          } else if (typeof arg === 'undefined') {
            return 'undefined';
          } else if (typeof arg !== 'string') {
            return toJson(arg);
          }
          return arg;
        }
        return match;
      });
      message = message + '\nhttp://errors.angularjs.org/1.2.16/' + (module ? module + '/' : '') + code;
      for (i = 2; i < arguments.length; i++) {
        message = message + (i == 2 ? '?' : '&') + 'p' + (i - 2) + '=' + encodeURIComponent(stringify(arguments[i]));
      }
      return new Error(message);
    };
  }
  var lowercase = function (string) {
    return isString(string) ? string.toLowerCase() : string;
  };
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var uppercase = function (string) {
    return isString(string) ? string.toUpperCase() : string;
  };
  var manualLowercase = function (s) {
    return isString(s) ? s.replace(/[A-Z]/g, function (ch) {
      return String.fromCharCode(ch.charCodeAt(0) | 32);
    }) : s;
  };
  var manualUppercase = function (s) {
    return isString(s) ? s.replace(/[a-z]/g, function (ch) {
      return String.fromCharCode(ch.charCodeAt(0) & ~32);
    }) : s;
  };
  if ('i' !== 'I'.toLowerCase()) {
    lowercase = manualLowercase;
    uppercase = manualUppercase;
  }
  var msie, jqLite, jQuery, slice = [].slice, push = [].push, toString = Object.prototype.toString, ngMinErr = minErr('ng'), _angular = window.angular, angular = window.angular || (window.angular = {}), angularModule, nodeName_, uid = [
      '0',
      '0',
      '0'
    ];
  msie = int((/msie (\d+)/.exec(lowercase(navigator.userAgent)) || [])[1]);
  if (isNaN(msie)) {
    msie = int((/trident\/.*; rv:(\d+)/.exec(lowercase(navigator.userAgent)) || [])[1]);
  }
  function isArrayLike(obj) {
    if (obj == null || isWindow(obj)) {
      return false;
    }
    var length = obj.length;
    if (obj.nodeType === 1 && length) {
      return true;
    }
    return isString(obj) || isArray(obj) || length === 0 || typeof length === 'number' && length > 0 && length - 1 in obj;
  }
  function forEach(obj, iterator, context) {
    var key;
    if (obj) {
      if (isFunction(obj)) {
        for (key in obj) {
          if (key != 'prototype' && key != 'length' && key != 'name' && (!obj.hasOwnProperty || obj.hasOwnProperty(key))) {
            iterator.call(context, obj[key], key);
          }
        }
      } else if (obj.forEach && obj.forEach !== forEach) {
        obj.forEach(iterator, context);
      } else if (isArrayLike(obj)) {
        for (key = 0; key < obj.length; key++)
          iterator.call(context, obj[key], key);
      } else {
        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            iterator.call(context, obj[key], key);
          }
        }
      }
    }
    return obj;
  }
  function sortedKeys(obj) {
    var keys = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys.sort();
  }
  function forEachSorted(obj, iterator, context) {
    var keys = sortedKeys(obj);
    for (var i = 0; i < keys.length; i++) {
      iterator.call(context, obj[keys[i]], keys[i]);
    }
    return keys;
  }
  function reverseParams(iteratorFn) {
    return function (value, key) {
      iteratorFn(key, value);
    };
  }
  function nextUid() {
    var index = uid.length;
    var digit;
    while (index) {
      index--;
      digit = uid[index].charCodeAt(0);
      if (digit == 57) {
        uid[index] = 'A';
        return uid.join('');
      }
      if (digit == 90) {
        uid[index] = '0';
      } else {
        uid[index] = String.fromCharCode(digit + 1);
        return uid.join('');
      }
    }
    uid.unshift('0');
    return uid.join('');
  }
  function setHashKey(obj, h) {
    if (h) {
      obj.$$hashKey = h;
    } else {
      delete obj.$$hashKey;
    }
  }
  function extend(dst) {
    var h = dst.$$hashKey;
    forEach(arguments, function (obj) {
      if (obj !== dst) {
        forEach(obj, function (value, key) {
          dst[key] = value;
        });
      }
    });
    setHashKey(dst, h);
    return dst;
  }
  function int(str) {
    return parseInt(str, 10);
  }
  function inherit(parent, extra) {
    return extend(new (extend(function () {
    }, { prototype: parent }))(), extra);
  }
  function noop() {
  }
  noop.$inject = [];
  function identity($) {
    return $;
  }
  identity.$inject = [];
  function valueFn(value) {
    return function () {
      return value;
    };
  }
  function isUndefined(value) {
    return typeof value === 'undefined';
  }
  function isDefined(value) {
    return typeof value !== 'undefined';
  }
  function isObject(value) {
    return value != null && typeof value === 'object';
  }
  function isString(value) {
    return typeof value === 'string';
  }
  function isNumber(value) {
    return typeof value === 'number';
  }
  function isDate(value) {
    return toString.call(value) === '[object Date]';
  }
  function isArray(value) {
    return toString.call(value) === '[object Array]';
  }
  function isFunction(value) {
    return typeof value === 'function';
  }
  function isRegExp(value) {
    return toString.call(value) === '[object RegExp]';
  }
  function isWindow(obj) {
    return obj && obj.document && obj.location && obj.alert && obj.setInterval;
  }
  function isScope(obj) {
    return obj && obj.$evalAsync && obj.$watch;
  }
  function isFile(obj) {
    return toString.call(obj) === '[object File]';
  }
  function isBlob(obj) {
    return toString.call(obj) === '[object Blob]';
  }
  function isBoolean(value) {
    return typeof value === 'boolean';
  }
  var trim = function () {
      if (!String.prototype.trim) {
        return function (value) {
          return isString(value) ? value.replace(/^\s\s*/, '').replace(/\s\s*$/, '') : value;
        };
      }
      return function (value) {
        return isString(value) ? value.trim() : value;
      };
    }();
  function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
  }
  function makeMap(str) {
    var obj = {}, items = str.split(','), i;
    for (i = 0; i < items.length; i++)
      obj[items[i]] = true;
    return obj;
  }
  if (msie < 9) {
    nodeName_ = function (element) {
      element = element.nodeName ? element : element[0];
      return element.scopeName && element.scopeName != 'HTML' ? uppercase(element.scopeName + ':' + element.nodeName) : element.nodeName;
    };
  } else {
    nodeName_ = function (element) {
      return element.nodeName ? element.nodeName : element[0].nodeName;
    };
  }
  function map(obj, iterator, context) {
    var results = [];
    forEach(obj, function (value, index, list) {
      results.push(iterator.call(context, value, index, list));
    });
    return results;
  }
  function size(obj, ownPropsOnly) {
    var count = 0, key;
    if (isArray(obj) || isString(obj)) {
      return obj.length;
    } else if (isObject(obj)) {
      for (key in obj)
        if (!ownPropsOnly || obj.hasOwnProperty(key))
          count++;
    }
    return count;
  }
  function includes(array, obj) {
    return indexOf(array, obj) != -1;
  }
  function indexOf(array, obj) {
    if (array.indexOf)
      return array.indexOf(obj);
    for (var i = 0; i < array.length; i++) {
      if (obj === array[i])
        return i;
    }
    return -1;
  }
  function arrayRemove(array, value) {
    var index = indexOf(array, value);
    if (index >= 0)
      array.splice(index, 1);
    return value;
  }
  function isLeafNode(node) {
    if (node) {
      switch (node.nodeName) {
      case 'OPTION':
      case 'PRE':
      case 'TITLE':
        return true;
      }
    }
    return false;
  }
  function copy(source, destination) {
    if (isWindow(source) || isScope(source)) {
      throw ngMinErr('cpws', 'Can\'t copy! Making copies of Window or Scope instances is not supported.');
    }
    if (!destination) {
      destination = source;
      if (source) {
        if (isArray(source)) {
          destination = copy(source, []);
        } else if (isDate(source)) {
          destination = new Date(source.getTime());
        } else if (isRegExp(source)) {
          destination = new RegExp(source.source);
        } else if (isObject(source)) {
          destination = copy(source, {});
        }
      }
    } else {
      if (source === destination)
        throw ngMinErr('cpi', 'Can\'t copy! Source and destination are identical.');
      if (isArray(source)) {
        destination.length = 0;
        for (var i = 0; i < source.length; i++) {
          destination.push(copy(source[i]));
        }
      } else {
        var h = destination.$$hashKey;
        forEach(destination, function (value, key) {
          delete destination[key];
        });
        for (var key in source) {
          destination[key] = copy(source[key]);
        }
        setHashKey(destination, h);
      }
    }
    return destination;
  }
  function shallowCopy(src, dst) {
    dst = dst || {};
    for (var key in src) {
      if (src.hasOwnProperty(key) && !(key.charAt(0) === '$' && key.charAt(1) === '$')) {
        dst[key] = src[key];
      }
    }
    return dst;
  }
  function equals(o1, o2) {
    if (o1 === o2)
      return true;
    if (o1 === null || o2 === null)
      return false;
    if (o1 !== o1 && o2 !== o2)
      return true;
    var t1 = typeof o1, t2 = typeof o2, length, key, keySet;
    if (t1 == t2) {
      if (t1 == 'object') {
        if (isArray(o1)) {
          if (!isArray(o2))
            return false;
          if ((length = o1.length) == o2.length) {
            for (key = 0; key < length; key++) {
              if (!equals(o1[key], o2[key]))
                return false;
            }
            return true;
          }
        } else if (isDate(o1)) {
          return isDate(o2) && o1.getTime() == o2.getTime();
        } else if (isRegExp(o1) && isRegExp(o2)) {
          return o1.toString() == o2.toString();
        } else {
          if (isScope(o1) || isScope(o2) || isWindow(o1) || isWindow(o2) || isArray(o2))
            return false;
          keySet = {};
          for (key in o1) {
            if (key.charAt(0) === '$' || isFunction(o1[key]))
              continue;
            if (!equals(o1[key], o2[key]))
              return false;
            keySet[key] = true;
          }
          for (key in o2) {
            if (!keySet.hasOwnProperty(key) && key.charAt(0) !== '$' && o2[key] !== undefined && !isFunction(o2[key]))
              return false;
          }
          return true;
        }
      }
    }
    return false;
  }
  function csp() {
    return document.securityPolicy && document.securityPolicy.isActive || document.querySelector && !!(document.querySelector('[ng-csp]') || document.querySelector('[data-ng-csp]'));
  }
  function concat(array1, array2, index) {
    return array1.concat(slice.call(array2, index));
  }
  function sliceArgs(args, startIndex) {
    return slice.call(args, startIndex || 0);
  }
  function bind(self, fn) {
    var curryArgs = arguments.length > 2 ? sliceArgs(arguments, 2) : [];
    if (isFunction(fn) && !(fn instanceof RegExp)) {
      return curryArgs.length ? function () {
        return arguments.length ? fn.apply(self, curryArgs.concat(slice.call(arguments, 0))) : fn.apply(self, curryArgs);
      } : function () {
        return arguments.length ? fn.apply(self, arguments) : fn.call(self);
      };
    } else {
      return fn;
    }
  }
  function toJsonReplacer(key, value) {
    var val = value;
    if (typeof key === 'string' && key.charAt(0) === '$') {
      val = undefined;
    } else if (isWindow(value)) {
      val = '$WINDOW';
    } else if (value && document === value) {
      val = '$DOCUMENT';
    } else if (isScope(value)) {
      val = '$SCOPE';
    }
    return val;
  }
  function toJson(obj, pretty) {
    if (typeof obj === 'undefined')
      return undefined;
    return JSON.stringify(obj, toJsonReplacer, pretty ? '  ' : null);
  }
  function fromJson(json) {
    return isString(json) ? JSON.parse(json) : json;
  }
  function toBoolean(value) {
    if (typeof value === 'function') {
      value = true;
    } else if (value && value.length !== 0) {
      var v = lowercase('' + value);
      value = !(v == 'f' || v == '0' || v == 'false' || v == 'no' || v == 'n' || v == '[]');
    } else {
      value = false;
    }
    return value;
  }
  function startingTag(element) {
    element = jqLite(element).clone();
    try {
      element.empty();
    } catch (e) {
    }
    var TEXT_NODE = 3;
    var elemHtml = jqLite('<div>').append(element).html();
    try {
      return element[0].nodeType === TEXT_NODE ? lowercase(elemHtml) : elemHtml.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (match, nodeName) {
        return '<' + lowercase(nodeName);
      });
    } catch (e) {
      return lowercase(elemHtml);
    }
  }
  function tryDecodeURIComponent(value) {
    try {
      return decodeURIComponent(value);
    } catch (e) {
    }
  }
  function parseKeyValue(keyValue) {
    var obj = {}, key_value, key;
    forEach((keyValue || '').split('&'), function (keyValue) {
      if (keyValue) {
        key_value = keyValue.split('=');
        key = tryDecodeURIComponent(key_value[0]);
        if (isDefined(key)) {
          var val = isDefined(key_value[1]) ? tryDecodeURIComponent(key_value[1]) : true;
          if (!obj[key]) {
            obj[key] = val;
          } else if (isArray(obj[key])) {
            obj[key].push(val);
          } else {
            obj[key] = [
              obj[key],
              val
            ];
          }
        }
      }
    });
    return obj;
  }
  function toKeyValue(obj) {
    var parts = [];
    forEach(obj, function (value, key) {
      if (isArray(value)) {
        forEach(value, function (arrayValue) {
          parts.push(encodeUriQuery(key, true) + (arrayValue === true ? '' : '=' + encodeUriQuery(arrayValue, true)));
        });
      } else {
        parts.push(encodeUriQuery(key, true) + (value === true ? '' : '=' + encodeUriQuery(value, true)));
      }
    });
    return parts.length ? parts.join('&') : '';
  }
  function encodeUriSegment(val) {
    return encodeUriQuery(val, true).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+');
  }
  function encodeUriQuery(val, pctEncodeSpaces) {
    return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, pctEncodeSpaces ? '%20' : '+');
  }
  function angularInit(element, bootstrap) {
    var elements = [element], appElement, module, names = [
        'ng:app',
        'ng-app',
        'x-ng-app',
        'data-ng-app'
      ], NG_APP_CLASS_REGEXP = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
    function append(element) {
      element && elements.push(element);
    }
    forEach(names, function (name) {
      names[name] = true;
      append(document.getElementById(name));
      name = name.replace(':', '\\:');
      if (element.querySelectorAll) {
        forEach(element.querySelectorAll('.' + name), append);
        forEach(element.querySelectorAll('.' + name + '\\:'), append);
        forEach(element.querySelectorAll('[' + name + ']'), append);
      }
    });
    forEach(elements, function (element) {
      if (!appElement) {
        var className = ' ' + element.className + ' ';
        var match = NG_APP_CLASS_REGEXP.exec(className);
        if (match) {
          appElement = element;
          module = (match[2] || '').replace(/\s+/g, ',');
        } else {
          forEach(element.attributes, function (attr) {
            if (!appElement && names[attr.name]) {
              appElement = element;
              module = attr.value;
            }
          });
        }
      }
    });
    if (appElement) {
      bootstrap(appElement, module ? [module] : []);
    }
  }
  function bootstrap(element, modules) {
    var doBootstrap = function () {
      element = jqLite(element);
      if (element.injector()) {
        var tag = element[0] === document ? 'document' : startingTag(element);
        throw ngMinErr('btstrpd', 'App Already Bootstrapped with this Element \'{0}\'', tag);
      }
      modules = modules || [];
      modules.unshift([
        '$provide',
        function ($provide) {
          $provide.value('$rootElement', element);
        }
      ]);
      modules.unshift('ng');
      var injector = createInjector(modules);
      injector.invoke([
        '$rootScope',
        '$rootElement',
        '$compile',
        '$injector',
        '$animate',
        function (scope, element, compile, injector, animate) {
          scope.$apply(function () {
            element.data('$injector', injector);
            compile(element)(scope);
          });
        }
      ]);
      return injector;
    };
    var NG_DEFER_BOOTSTRAP = /^NG_DEFER_BOOTSTRAP!/;
    if (window && !NG_DEFER_BOOTSTRAP.test(window.name)) {
      return doBootstrap();
    }
    window.name = window.name.replace(NG_DEFER_BOOTSTRAP, '');
    angular.resumeBootstrap = function (extraModules) {
      forEach(extraModules, function (module) {
        modules.push(module);
      });
      doBootstrap();
    };
  }
  var SNAKE_CASE_REGEXP = /[A-Z]/g;
  function snake_case(name, separator) {
    separator = separator || '_';
    return name.replace(SNAKE_CASE_REGEXP, function (letter, pos) {
      return (pos ? separator : '') + letter.toLowerCase();
    });
  }
  function bindJQuery() {
    jQuery = window.jQuery;
    if (jQuery) {
      jqLite = jQuery;
      extend(jQuery.fn, {
        scope: JQLitePrototype.scope,
        isolateScope: JQLitePrototype.isolateScope,
        controller: JQLitePrototype.controller,
        injector: JQLitePrototype.injector,
        inheritedData: JQLitePrototype.inheritedData
      });
      jqLitePatchJQueryRemove('remove', true, true, false);
      jqLitePatchJQueryRemove('empty', false, false, false);
      jqLitePatchJQueryRemove('html', false, false, true);
    } else {
      jqLite = JQLite;
    }
    angular.element = jqLite;
  }
  function assertArg(arg, name, reason) {
    if (!arg) {
      throw ngMinErr('areq', 'Argument \'{0}\' is {1}', name || '?', reason || 'required');
    }
    return arg;
  }
  function assertArgFn(arg, name, acceptArrayAnnotation) {
    if (acceptArrayAnnotation && isArray(arg)) {
      arg = arg[arg.length - 1];
    }
    assertArg(isFunction(arg), name, 'not a function, got ' + (arg && typeof arg == 'object' ? arg.constructor.name || 'Object' : typeof arg));
    return arg;
  }
  function assertNotHasOwnProperty(name, context) {
    if (name === 'hasOwnProperty') {
      throw ngMinErr('badname', 'hasOwnProperty is not a valid {0} name', context);
    }
  }
  function getter(obj, path, bindFnToScope) {
    if (!path)
      return obj;
    var keys = path.split('.');
    var key;
    var lastInstance = obj;
    var len = keys.length;
    for (var i = 0; i < len; i++) {
      key = keys[i];
      if (obj) {
        obj = (lastInstance = obj)[key];
      }
    }
    if (!bindFnToScope && isFunction(obj)) {
      return bind(lastInstance, obj);
    }
    return obj;
  }
  function getBlockElements(nodes) {
    var startNode = nodes[0], endNode = nodes[nodes.length - 1];
    if (startNode === endNode) {
      return jqLite(startNode);
    }
    var element = startNode;
    var elements = [element];
    do {
      element = element.nextSibling;
      if (!element)
        break;
      elements.push(element);
    } while (element !== endNode);
    return jqLite(elements);
  }
  function setupModuleLoader(window) {
    var $injectorMinErr = minErr('$injector');
    var ngMinErr = minErr('ng');
    function ensure(obj, name, factory) {
      return obj[name] || (obj[name] = factory());
    }
    var angular = ensure(window, 'angular', Object);
    angular.$$minErr = angular.$$minErr || minErr;
    return ensure(angular, 'module', function () {
      var modules = {};
      return function module(name, requires, configFn) {
        var assertNotHasOwnProperty = function (name, context) {
          if (name === 'hasOwnProperty') {
            throw ngMinErr('badname', 'hasOwnProperty is not a valid {0} name', context);
          }
        };
        assertNotHasOwnProperty(name, 'module');
        if (requires && modules.hasOwnProperty(name)) {
          modules[name] = null;
        }
        return ensure(modules, name, function () {
          if (!requires) {
            throw $injectorMinErr('nomod', 'Module \'{0}\' is not available! You either misspelled ' + 'the module name or forgot to load it. If registering a module ensure that you ' + 'specify the dependencies as the second argument.', name);
          }
          var invokeQueue = [];
          var runBlocks = [];
          var config = invokeLater('$injector', 'invoke');
          var moduleInstance = {
              _invokeQueue: invokeQueue,
              _runBlocks: runBlocks,
              requires: requires,
              name: name,
              provider: invokeLater('$provide', 'provider'),
              factory: invokeLater('$provide', 'factory'),
              service: invokeLater('$provide', 'service'),
              value: invokeLater('$provide', 'value'),
              constant: invokeLater('$provide', 'constant', 'unshift'),
              animation: invokeLater('$animateProvider', 'register'),
              filter: invokeLater('$filterProvider', 'register'),
              controller: invokeLater('$controllerProvider', 'register'),
              directive: invokeLater('$compileProvider', 'directive'),
              config: config,
              run: function (block) {
                runBlocks.push(block);
                return this;
              }
            };
          if (configFn) {
            config(configFn);
          }
          return moduleInstance;
          function invokeLater(provider, method, insertMethod) {
            return function () {
              invokeQueue[insertMethod || 'push']([
                provider,
                method,
                arguments
              ]);
              return moduleInstance;
            };
          }
        });
      };
    });
  }
  var version = {
      full: '1.2.16',
      major: 1,
      minor: 2,
      dot: 16,
      codeName: 'badger-enumeration'
    };
  function publishExternalAPI(angular) {
    extend(angular, {
      'bootstrap': bootstrap,
      'copy': copy,
      'extend': extend,
      'equals': equals,
      'element': jqLite,
      'forEach': forEach,
      'injector': createInjector,
      'noop': noop,
      'bind': bind,
      'toJson': toJson,
      'fromJson': fromJson,
      'identity': identity,
      'isUndefined': isUndefined,
      'isDefined': isDefined,
      'isString': isString,
      'isFunction': isFunction,
      'isObject': isObject,
      'isNumber': isNumber,
      'isElement': isElement,
      'isArray': isArray,
      'version': version,
      'isDate': isDate,
      'lowercase': lowercase,
      'uppercase': uppercase,
      'callbacks': { counter: 0 },
      '$$minErr': minErr,
      '$$csp': csp
    });
    angularModule = setupModuleLoader(window);
    try {
      angularModule('ngLocale');
    } catch (e) {
      angularModule('ngLocale', []).provider('$locale', $LocaleProvider);
    }
    angularModule('ng', ['ngLocale'], [
      '$provide',
      function ngModule($provide) {
        $provide.provider({ $$sanitizeUri: $$SanitizeUriProvider });
        $provide.provider('$compile', $CompileProvider).directive({
          a: htmlAnchorDirective,
          input: inputDirective,
          textarea: inputDirective,
          form: formDirective,
          script: scriptDirective,
          select: selectDirective,
          style: styleDirective,
          option: optionDirective,
          ngBind: ngBindDirective,
          ngBindHtml: ngBindHtmlDirective,
          ngBindTemplate: ngBindTemplateDirective,
          ngClass: ngClassDirective,
          ngClassEven: ngClassEvenDirective,
          ngClassOdd: ngClassOddDirective,
          ngCloak: ngCloakDirective,
          ngController: ngControllerDirective,
          ngForm: ngFormDirective,
          ngHide: ngHideDirective,
          ngIf: ngIfDirective,
          ngInclude: ngIncludeDirective,
          ngInit: ngInitDirective,
          ngNonBindable: ngNonBindableDirective,
          ngPluralize: ngPluralizeDirective,
          ngRepeat: ngRepeatDirective,
          ngShow: ngShowDirective,
          ngStyle: ngStyleDirective,
          ngSwitch: ngSwitchDirective,
          ngSwitchWhen: ngSwitchWhenDirective,
          ngSwitchDefault: ngSwitchDefaultDirective,
          ngOptions: ngOptionsDirective,
          ngTransclude: ngTranscludeDirective,
          ngModel: ngModelDirective,
          ngList: ngListDirective,
          ngChange: ngChangeDirective,
          required: requiredDirective,
          ngRequired: requiredDirective,
          ngValue: ngValueDirective
        }).directive({ ngInclude: ngIncludeFillContentDirective }).directive(ngAttributeAliasDirectives).directive(ngEventDirectives);
        $provide.provider({
          $anchorScroll: $AnchorScrollProvider,
          $animate: $AnimateProvider,
          $browser: $BrowserProvider,
          $cacheFactory: $CacheFactoryProvider,
          $controller: $ControllerProvider,
          $document: $DocumentProvider,
          $exceptionHandler: $ExceptionHandlerProvider,
          $filter: $FilterProvider,
          $interpolate: $InterpolateProvider,
          $interval: $IntervalProvider,
          $http: $HttpProvider,
          $httpBackend: $HttpBackendProvider,
          $location: $LocationProvider,
          $log: $LogProvider,
          $parse: $ParseProvider,
          $rootScope: $RootScopeProvider,
          $q: $QProvider,
          $sce: $SceProvider,
          $sceDelegate: $SceDelegateProvider,
          $sniffer: $SnifferProvider,
          $templateCache: $TemplateCacheProvider,
          $timeout: $TimeoutProvider,
          $window: $WindowProvider,
          $$rAF: $$RAFProvider,
          $$asyncCallback: $$AsyncCallbackProvider
        });
      }
    ]);
  }
  var jqCache = JQLite.cache = {}, jqName = JQLite.expando = 'ng-' + new Date().getTime(), jqId = 1, addEventListenerFn = window.document.addEventListener ? function (element, type, fn) {
      element.addEventListener(type, fn, false);
    } : function (element, type, fn) {
      element.attachEvent('on' + type, fn);
    }, removeEventListenerFn = window.document.removeEventListener ? function (element, type, fn) {
      element.removeEventListener(type, fn, false);
    } : function (element, type, fn) {
      element.detachEvent('on' + type, fn);
    };
  var jqData = JQLite._data = function (node) {
      return this.cache[node[this.expando]] || {};
    };
  function jqNextId() {
    return ++jqId;
  }
  var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
  var MOZ_HACK_REGEXP = /^moz([A-Z])/;
  var jqLiteMinErr = minErr('jqLite');
  function camelCase(name) {
    return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
      return offset ? letter.toUpperCase() : letter;
    }).replace(MOZ_HACK_REGEXP, 'Moz$1');
  }
  function jqLitePatchJQueryRemove(name, dispatchThis, filterElems, getterIfNoArguments) {
    var originalJqFn = jQuery.fn[name];
    originalJqFn = originalJqFn.$original || originalJqFn;
    removePatch.$original = originalJqFn;
    jQuery.fn[name] = removePatch;
    function removePatch(param) {
      var list = filterElems && param ? [this.filter(param)] : [this], fireEvent = dispatchThis, set, setIndex, setLength, element, childIndex, childLength, children;
      if (!getterIfNoArguments || param != null) {
        while (list.length) {
          set = list.shift();
          for (setIndex = 0, setLength = set.length; setIndex < setLength; setIndex++) {
            element = jqLite(set[setIndex]);
            if (fireEvent) {
              element.triggerHandler('$destroy');
            } else {
              fireEvent = !fireEvent;
            }
            for (childIndex = 0, childLength = (children = element.children()).length; childIndex < childLength; childIndex++) {
              list.push(jQuery(children[childIndex]));
            }
          }
        }
      }
      return originalJqFn.apply(this, arguments);
    }
  }
  var SINGLE_TAG_REGEXP = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
  var HTML_REGEXP = /<|&#?\w+;/;
  var TAG_NAME_REGEXP = /<([\w:]+)/;
  var XHTML_TAG_REGEXP = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi;
  var wrapMap = {
      'option': [
        1,
        '<select multiple="multiple">',
        '</select>'
      ],
      'thead': [
        1,
        '<table>',
        '</table>'
      ],
      'col': [
        2,
        '<table><colgroup>',
        '</colgroup></table>'
      ],
      'tr': [
        2,
        '<table><tbody>',
        '</tbody></table>'
      ],
      'td': [
        3,
        '<table><tbody><tr>',
        '</tr></tbody></table>'
      ],
      '_default': [
        0,
        '',
        ''
      ]
    };
  wrapMap.optgroup = wrapMap.option;
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;
  function jqLiteIsTextNode(html) {
    return !HTML_REGEXP.test(html);
  }
  function jqLiteBuildFragment(html, context) {
    var elem, tmp, tag, wrap, fragment = context.createDocumentFragment(), nodes = [], i, j, jj;
    if (jqLiteIsTextNode(html)) {
      nodes.push(context.createTextNode(html));
    } else {
      tmp = fragment.appendChild(context.createElement('div'));
      tag = (TAG_NAME_REGEXP.exec(html) || [
        '',
        ''
      ])[1].toLowerCase();
      wrap = wrapMap[tag] || wrapMap._default;
      tmp.innerHTML = '<div>&#160;</div>' + wrap[1] + html.replace(XHTML_TAG_REGEXP, '<$1></$2>') + wrap[2];
      tmp.removeChild(tmp.firstChild);
      i = wrap[0];
      while (i--) {
        tmp = tmp.lastChild;
      }
      for (j = 0, jj = tmp.childNodes.length; j < jj; ++j)
        nodes.push(tmp.childNodes[j]);
      tmp = fragment.firstChild;
      tmp.textContent = '';
    }
    fragment.textContent = '';
    fragment.innerHTML = '';
    return nodes;
  }
  function jqLiteParseHTML(html, context) {
    context = context || document;
    var parsed;
    if (parsed = SINGLE_TAG_REGEXP.exec(html)) {
      return [context.createElement(parsed[1])];
    }
    return jqLiteBuildFragment(html, context);
  }
  function JQLite(element) {
    if (element instanceof JQLite) {
      return element;
    }
    if (isString(element)) {
      element = trim(element);
    }
    if (!(this instanceof JQLite)) {
      if (isString(element) && element.charAt(0) != '<') {
        throw jqLiteMinErr('nosel', 'Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element');
      }
      return new JQLite(element);
    }
    if (isString(element)) {
      jqLiteAddNodes(this, jqLiteParseHTML(element));
      var fragment = jqLite(document.createDocumentFragment());
      fragment.append(this);
    } else {
      jqLiteAddNodes(this, element);
    }
  }
  function jqLiteClone(element) {
    return element.cloneNode(true);
  }
  function jqLiteDealoc(element) {
    jqLiteRemoveData(element);
    for (var i = 0, children = element.childNodes || []; i < children.length; i++) {
      jqLiteDealoc(children[i]);
    }
  }
  function jqLiteOff(element, type, fn, unsupported) {
    if (isDefined(unsupported))
      throw jqLiteMinErr('offargs', 'jqLite#off() does not support the `selector` argument');
    var events = jqLiteExpandoStore(element, 'events'), handle = jqLiteExpandoStore(element, 'handle');
    if (!handle)
      return;
    if (isUndefined(type)) {
      forEach(events, function (eventHandler, type) {
        removeEventListenerFn(element, type, eventHandler);
        delete events[type];
      });
    } else {
      forEach(type.split(' '), function (type) {
        if (isUndefined(fn)) {
          removeEventListenerFn(element, type, events[type]);
          delete events[type];
        } else {
          arrayRemove(events[type] || [], fn);
        }
      });
    }
  }
  function jqLiteRemoveData(element, name) {
    var expandoId = element[jqName], expandoStore = jqCache[expandoId];
    if (expandoStore) {
      if (name) {
        delete jqCache[expandoId].data[name];
        return;
      }
      if (expandoStore.handle) {
        expandoStore.events.$destroy && expandoStore.handle({}, '$destroy');
        jqLiteOff(element);
      }
      delete jqCache[expandoId];
      element[jqName] = undefined;
    }
  }
  function jqLiteExpandoStore(element, key, value) {
    var expandoId = element[jqName], expandoStore = jqCache[expandoId || -1];
    if (isDefined(value)) {
      if (!expandoStore) {
        element[jqName] = expandoId = jqNextId();
        expandoStore = jqCache[expandoId] = {};
      }
      expandoStore[key] = value;
    } else {
      return expandoStore && expandoStore[key];
    }
  }
  function jqLiteData(element, key, value) {
    var data = jqLiteExpandoStore(element, 'data'), isSetter = isDefined(value), keyDefined = !isSetter && isDefined(key), isSimpleGetter = keyDefined && !isObject(key);
    if (!data && !isSimpleGetter) {
      jqLiteExpandoStore(element, 'data', data = {});
    }
    if (isSetter) {
      data[key] = value;
    } else {
      if (keyDefined) {
        if (isSimpleGetter) {
          return data && data[key];
        } else {
          extend(data, key);
        }
      } else {
        return data;
      }
    }
  }
  function jqLiteHasClass(element, selector) {
    if (!element.getAttribute)
      return false;
    return (' ' + (element.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').indexOf(' ' + selector + ' ') > -1;
  }
  function jqLiteRemoveClass(element, cssClasses) {
    if (cssClasses && element.setAttribute) {
      forEach(cssClasses.split(' '), function (cssClass) {
        element.setAttribute('class', trim((' ' + (element.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').replace(' ' + trim(cssClass) + ' ', ' ')));
      });
    }
  }
  function jqLiteAddClass(element, cssClasses) {
    if (cssClasses && element.setAttribute) {
      var existingClasses = (' ' + (element.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ');
      forEach(cssClasses.split(' '), function (cssClass) {
        cssClass = trim(cssClass);
        if (existingClasses.indexOf(' ' + cssClass + ' ') === -1) {
          existingClasses += cssClass + ' ';
        }
      });
      element.setAttribute('class', trim(existingClasses));
    }
  }
  function jqLiteAddNodes(root, elements) {
    if (elements) {
      elements = !elements.nodeName && isDefined(elements.length) && !isWindow(elements) ? elements : [elements];
      for (var i = 0; i < elements.length; i++) {
        root.push(elements[i]);
      }
    }
  }
  function jqLiteController(element, name) {
    return jqLiteInheritedData(element, '$' + (name || 'ngController') + 'Controller');
  }
  function jqLiteInheritedData(element, name, value) {
    element = jqLite(element);
    if (element[0].nodeType == 9) {
      element = element.find('html');
    }
    var names = isArray(name) ? name : [name];
    while (element.length) {
      var node = element[0];
      for (var i = 0, ii = names.length; i < ii; i++) {
        if ((value = element.data(names[i])) !== undefined)
          return value;
      }
      element = jqLite(node.parentNode || node.nodeType === 11 && node.host);
    }
  }
  function jqLiteEmpty(element) {
    for (var i = 0, childNodes = element.childNodes; i < childNodes.length; i++) {
      jqLiteDealoc(childNodes[i]);
    }
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
  var JQLitePrototype = JQLite.prototype = {
      ready: function (fn) {
        var fired = false;
        function trigger() {
          if (fired)
            return;
          fired = true;
          fn();
        }
        if (document.readyState === 'complete') {
          setTimeout(trigger);
        } else {
          this.on('DOMContentLoaded', trigger);
          JQLite(window).on('load', trigger);
        }
      },
      toString: function () {
        var value = [];
        forEach(this, function (e) {
          value.push('' + e);
        });
        return '[' + value.join(', ') + ']';
      },
      eq: function (index) {
        return index >= 0 ? jqLite(this[index]) : jqLite(this[this.length + index]);
      },
      length: 0,
      push: push,
      sort: [].sort,
      splice: [].splice
    };
  var BOOLEAN_ATTR = {};
  forEach('multiple,selected,checked,disabled,readOnly,required,open'.split(','), function (value) {
    BOOLEAN_ATTR[lowercase(value)] = value;
  });
  var BOOLEAN_ELEMENTS = {};
  forEach('input,select,option,textarea,button,form,details'.split(','), function (value) {
    BOOLEAN_ELEMENTS[uppercase(value)] = true;
  });
  function getBooleanAttrName(element, name) {
    var booleanAttr = BOOLEAN_ATTR[name.toLowerCase()];
    return booleanAttr && BOOLEAN_ELEMENTS[element.nodeName] && booleanAttr;
  }
  forEach({
    data: jqLiteData,
    inheritedData: jqLiteInheritedData,
    scope: function (element) {
      return jqLite(element).data('$scope') || jqLiteInheritedData(element.parentNode || element, [
        '$isolateScope',
        '$scope'
      ]);
    },
    isolateScope: function (element) {
      return jqLite(element).data('$isolateScope') || jqLite(element).data('$isolateScopeNoTemplate');
    },
    controller: jqLiteController,
    injector: function (element) {
      return jqLiteInheritedData(element, '$injector');
    },
    removeAttr: function (element, name) {
      element.removeAttribute(name);
    },
    hasClass: jqLiteHasClass,
    css: function (element, name, value) {
      name = camelCase(name);
      if (isDefined(value)) {
        element.style[name] = value;
      } else {
        var val;
        if (msie <= 8) {
          val = element.currentStyle && element.currentStyle[name];
          if (val === '')
            val = 'auto';
        }
        val = val || element.style[name];
        if (msie <= 8) {
          val = val === '' ? undefined : val;
        }
        return val;
      }
    },
    attr: function (element, name, value) {
      var lowercasedName = lowercase(name);
      if (BOOLEAN_ATTR[lowercasedName]) {
        if (isDefined(value)) {
          if (!!value) {
            element[name] = true;
            element.setAttribute(name, lowercasedName);
          } else {
            element[name] = false;
            element.removeAttribute(lowercasedName);
          }
        } else {
          return element[name] || (element.attributes.getNamedItem(name) || noop).specified ? lowercasedName : undefined;
        }
      } else if (isDefined(value)) {
        element.setAttribute(name, value);
      } else if (element.getAttribute) {
        var ret = element.getAttribute(name, 2);
        return ret === null ? undefined : ret;
      }
    },
    prop: function (element, name, value) {
      if (isDefined(value)) {
        element[name] = value;
      } else {
        return element[name];
      }
    },
    text: function () {
      var NODE_TYPE_TEXT_PROPERTY = [];
      if (msie < 9) {
        NODE_TYPE_TEXT_PROPERTY[1] = 'innerText';
        NODE_TYPE_TEXT_PROPERTY[3] = 'nodeValue';
      } else {
        NODE_TYPE_TEXT_PROPERTY[1] = NODE_TYPE_TEXT_PROPERTY[3] = 'textContent';
      }
      getText.$dv = '';
      return getText;
      function getText(element, value) {
        var textProp = NODE_TYPE_TEXT_PROPERTY[element.nodeType];
        if (isUndefined(value)) {
          return textProp ? element[textProp] : '';
        }
        element[textProp] = value;
      }
    }(),
    val: function (element, value) {
      if (isUndefined(value)) {
        if (nodeName_(element) === 'SELECT' && element.multiple) {
          var result = [];
          forEach(element.options, function (option) {
            if (option.selected) {
              result.push(option.value || option.text);
            }
          });
          return result.length === 0 ? null : result;
        }
        return element.value;
      }
      element.value = value;
    },
    html: function (element, value) {
      if (isUndefined(value)) {
        return element.innerHTML;
      }
      for (var i = 0, childNodes = element.childNodes; i < childNodes.length; i++) {
        jqLiteDealoc(childNodes[i]);
      }
      element.innerHTML = value;
    },
    empty: jqLiteEmpty
  }, function (fn, name) {
    JQLite.prototype[name] = function (arg1, arg2) {
      var i, key;
      if (fn !== jqLiteEmpty && (fn.length == 2 && (fn !== jqLiteHasClass && fn !== jqLiteController) ? arg1 : arg2) === undefined) {
        if (isObject(arg1)) {
          for (i = 0; i < this.length; i++) {
            if (fn === jqLiteData) {
              fn(this[i], arg1);
            } else {
              for (key in arg1) {
                fn(this[i], key, arg1[key]);
              }
            }
          }
          return this;
        } else {
          var value = fn.$dv;
          var jj = value === undefined ? Math.min(this.length, 1) : this.length;
          for (var j = 0; j < jj; j++) {
            var nodeValue = fn(this[j], arg1, arg2);
            value = value ? value + nodeValue : nodeValue;
          }
          return value;
        }
      } else {
        for (i = 0; i < this.length; i++) {
          fn(this[i], arg1, arg2);
        }
        return this;
      }
    };
  });
  function createEventHandler(element, events) {
    var eventHandler = function (event, type) {
      if (!event.preventDefault) {
        event.preventDefault = function () {
          event.returnValue = false;
        };
      }
      if (!event.stopPropagation) {
        event.stopPropagation = function () {
          event.cancelBubble = true;
        };
      }
      if (!event.target) {
        event.target = event.srcElement || document;
      }
      if (isUndefined(event.defaultPrevented)) {
        var prevent = event.preventDefault;
        event.preventDefault = function () {
          event.defaultPrevented = true;
          prevent.call(event);
        };
        event.defaultPrevented = false;
      }
      event.isDefaultPrevented = function () {
        return event.defaultPrevented || event.returnValue === false;
      };
      var eventHandlersCopy = shallowCopy(events[type || event.type] || []);
      forEach(eventHandlersCopy, function (fn) {
        fn.call(element, event);
      });
      if (msie <= 8) {
        event.preventDefault = null;
        event.stopPropagation = null;
        event.isDefaultPrevented = null;
      } else {
        delete event.preventDefault;
        delete event.stopPropagation;
        delete event.isDefaultPrevented;
      }
    };
    eventHandler.elem = element;
    return eventHandler;
  }
  forEach({
    removeData: jqLiteRemoveData,
    dealoc: jqLiteDealoc,
    on: function onFn(element, type, fn, unsupported) {
      if (isDefined(unsupported))
        throw jqLiteMinErr('onargs', 'jqLite#on() does not support the `selector` or `eventData` parameters');
      var events = jqLiteExpandoStore(element, 'events'), handle = jqLiteExpandoStore(element, 'handle');
      if (!events)
        jqLiteExpandoStore(element, 'events', events = {});
      if (!handle)
        jqLiteExpandoStore(element, 'handle', handle = createEventHandler(element, events));
      forEach(type.split(' '), function (type) {
        var eventFns = events[type];
        if (!eventFns) {
          if (type == 'mouseenter' || type == 'mouseleave') {
            var contains = document.body.contains || document.body.compareDocumentPosition ? function (a, b) {
                var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
                return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
              } : function (a, b) {
                if (b) {
                  while (b = b.parentNode) {
                    if (b === a) {
                      return true;
                    }
                  }
                }
                return false;
              };
            events[type] = [];
            var eventmap = {
                mouseleave: 'mouseout',
                mouseenter: 'mouseover'
              };
            onFn(element, eventmap[type], function (event) {
              var target = this, related = event.relatedTarget;
              if (!related || related !== target && !contains(target, related)) {
                handle(event, type);
              }
            });
          } else {
            addEventListenerFn(element, type, handle);
            events[type] = [];
          }
          eventFns = events[type];
        }
        eventFns.push(fn);
      });
    },
    off: jqLiteOff,
    one: function (element, type, fn) {
      element = jqLite(element);
      element.on(type, function onFn() {
        element.off(type, fn);
        element.off(type, onFn);
      });
      element.on(type, fn);
    },
    replaceWith: function (element, replaceNode) {
      var index, parent = element.parentNode;
      jqLiteDealoc(element);
      forEach(new JQLite(replaceNode), function (node) {
        if (index) {
          parent.insertBefore(node, index.nextSibling);
        } else {
          parent.replaceChild(node, element);
        }
        index = node;
      });
    },
    children: function (element) {
      var children = [];
      forEach(element.childNodes, function (element) {
        if (element.nodeType === 1)
          children.push(element);
      });
      return children;
    },
    contents: function (element) {
      return element.contentDocument || element.childNodes || [];
    },
    append: function (element, node) {
      forEach(new JQLite(node), function (child) {
        if (element.nodeType === 1 || element.nodeType === 11) {
          element.appendChild(child);
        }
      });
    },
    prepend: function (element, node) {
      if (element.nodeType === 1) {
        var index = element.firstChild;
        forEach(new JQLite(node), function (child) {
          element.insertBefore(child, index);
        });
      }
    },
    wrap: function (element, wrapNode) {
      wrapNode = jqLite(wrapNode)[0];
      var parent = element.parentNode;
      if (parent) {
        parent.replaceChild(wrapNode, element);
      }
      wrapNode.appendChild(element);
    },
    remove: function (element) {
      jqLiteDealoc(element);
      var parent = element.parentNode;
      if (parent)
        parent.removeChild(element);
    },
    after: function (element, newElement) {
      var index = element, parent = element.parentNode;
      forEach(new JQLite(newElement), function (node) {
        parent.insertBefore(node, index.nextSibling);
        index = node;
      });
    },
    addClass: jqLiteAddClass,
    removeClass: jqLiteRemoveClass,
    toggleClass: function (element, selector, condition) {
      if (selector) {
        forEach(selector.split(' '), function (className) {
          var classCondition = condition;
          if (isUndefined(classCondition)) {
            classCondition = !jqLiteHasClass(element, className);
          }
          (classCondition ? jqLiteAddClass : jqLiteRemoveClass)(element, className);
        });
      }
    },
    parent: function (element) {
      var parent = element.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    next: function (element) {
      if (element.nextElementSibling) {
        return element.nextElementSibling;
      }
      var elm = element.nextSibling;
      while (elm != null && elm.nodeType !== 1) {
        elm = elm.nextSibling;
      }
      return elm;
    },
    find: function (element, selector) {
      if (element.getElementsByTagName) {
        return element.getElementsByTagName(selector);
      } else {
        return [];
      }
    },
    clone: jqLiteClone,
    triggerHandler: function (element, eventName, eventData) {
      var eventFns = (jqLiteExpandoStore(element, 'events') || {})[eventName];
      eventData = eventData || [];
      var event = [{
            preventDefault: noop,
            stopPropagation: noop
          }];
      forEach(eventFns, function (fn) {
        fn.apply(element, event.concat(eventData));
      });
    }
  }, function (fn, name) {
    JQLite.prototype[name] = function (arg1, arg2, arg3) {
      var value;
      for (var i = 0; i < this.length; i++) {
        if (isUndefined(value)) {
          value = fn(this[i], arg1, arg2, arg3);
          if (isDefined(value)) {
            value = jqLite(value);
          }
        } else {
          jqLiteAddNodes(value, fn(this[i], arg1, arg2, arg3));
        }
      }
      return isDefined(value) ? value : this;
    };
    JQLite.prototype.bind = JQLite.prototype.on;
    JQLite.prototype.unbind = JQLite.prototype.off;
  });
  function hashKey(obj) {
    var objType = typeof obj, key;
    if (objType == 'object' && obj !== null) {
      if (typeof (key = obj.$$hashKey) == 'function') {
        key = obj.$$hashKey();
      } else if (key === undefined) {
        key = obj.$$hashKey = nextUid();
      }
    } else {
      key = obj;
    }
    return objType + ':' + key;
  }
  function HashMap(array) {
    forEach(array, this.put, this);
  }
  HashMap.prototype = {
    put: function (key, value) {
      this[hashKey(key)] = value;
    },
    get: function (key) {
      return this[hashKey(key)];
    },
    remove: function (key) {
      var value = this[key = hashKey(key)];
      delete this[key];
      return value;
    }
  };
  var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
  var FN_ARG_SPLIT = /,/;
  var FN_ARG = /^\s*(_?)(\S+?)\1\s*$/;
  var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
  var $injectorMinErr = minErr('$injector');
  function annotate(fn) {
    var $inject, fnText, argDecl, last;
    if (typeof fn == 'function') {
      if (!($inject = fn.$inject)) {
        $inject = [];
        if (fn.length) {
          fnText = fn.toString().replace(STRIP_COMMENTS, '');
          argDecl = fnText.match(FN_ARGS);
          forEach(argDecl[1].split(FN_ARG_SPLIT), function (arg) {
            arg.replace(FN_ARG, function (all, underscore, name) {
              $inject.push(name);
            });
          });
        }
        fn.$inject = $inject;
      }
    } else if (isArray(fn)) {
      last = fn.length - 1;
      assertArgFn(fn[last], 'fn');
      $inject = fn.slice(0, last);
    } else {
      assertArgFn(fn, 'fn', true);
    }
    return $inject;
  }
  function createInjector(modulesToLoad) {
    var INSTANTIATING = {}, providerSuffix = 'Provider', path = [], loadedModules = new HashMap(), providerCache = {
        $provide: {
          provider: supportObject(provider),
          factory: supportObject(factory),
          service: supportObject(service),
          value: supportObject(value),
          constant: supportObject(constant),
          decorator: decorator
        }
      }, providerInjector = providerCache.$injector = createInternalInjector(providerCache, function () {
        throw $injectorMinErr('unpr', 'Unknown provider: {0}', path.join(' <- '));
      }), instanceCache = {}, instanceInjector = instanceCache.$injector = createInternalInjector(instanceCache, function (servicename) {
        var provider = providerInjector.get(servicename + providerSuffix);
        return instanceInjector.invoke(provider.$get, provider);
      });
    forEach(loadModules(modulesToLoad), function (fn) {
      instanceInjector.invoke(fn || noop);
    });
    return instanceInjector;
    function supportObject(delegate) {
      return function (key, value) {
        if (isObject(key)) {
          forEach(key, reverseParams(delegate));
        } else {
          return delegate(key, value);
        }
      };
    }
    function provider(name, provider_) {
      assertNotHasOwnProperty(name, 'service');
      if (isFunction(provider_) || isArray(provider_)) {
        provider_ = providerInjector.instantiate(provider_);
      }
      if (!provider_.$get) {
        throw $injectorMinErr('pget', 'Provider \'{0}\' must define $get factory method.', name);
      }
      return providerCache[name + providerSuffix] = provider_;
    }
    function factory(name, factoryFn) {
      return provider(name, { $get: factoryFn });
    }
    function service(name, constructor) {
      return factory(name, [
        '$injector',
        function ($injector) {
          return $injector.instantiate(constructor);
        }
      ]);
    }
    function value(name, val) {
      return factory(name, valueFn(val));
    }
    function constant(name, value) {
      assertNotHasOwnProperty(name, 'constant');
      providerCache[name] = value;
      instanceCache[name] = value;
    }
    function decorator(serviceName, decorFn) {
      var origProvider = providerInjector.get(serviceName + providerSuffix), orig$get = origProvider.$get;
      origProvider.$get = function () {
        var origInstance = instanceInjector.invoke(orig$get, origProvider);
        return instanceInjector.invoke(decorFn, null, { $delegate: origInstance });
      };
    }
    function loadModules(modulesToLoad) {
      var runBlocks = [], moduleFn, invokeQueue, i, ii;
      forEach(modulesToLoad, function (module) {
        if (loadedModules.get(module))
          return;
        loadedModules.put(module, true);
        try {
          if (isString(module)) {
            moduleFn = angularModule(module);
            runBlocks = runBlocks.concat(loadModules(moduleFn.requires)).concat(moduleFn._runBlocks);
            for (invokeQueue = moduleFn._invokeQueue, i = 0, ii = invokeQueue.length; i < ii; i++) {
              var invokeArgs = invokeQueue[i], provider = providerInjector.get(invokeArgs[0]);
              provider[invokeArgs[1]].apply(provider, invokeArgs[2]);
            }
          } else if (isFunction(module)) {
            runBlocks.push(providerInjector.invoke(module));
          } else if (isArray(module)) {
            runBlocks.push(providerInjector.invoke(module));
          } else {
            assertArgFn(module, 'module');
          }
        } catch (e) {
          if (isArray(module)) {
            module = module[module.length - 1];
          }
          if (e.message && e.stack && e.stack.indexOf(e.message) == -1) {
            e = e.message + '\n' + e.stack;
          }
          throw $injectorMinErr('modulerr', 'Failed to instantiate module {0} due to:\n{1}', module, e.stack || e.message || e);
        }
      });
      return runBlocks;
    }
    function createInternalInjector(cache, factory) {
      function getService(serviceName) {
        if (cache.hasOwnProperty(serviceName)) {
          if (cache[serviceName] === INSTANTIATING) {
            throw $injectorMinErr('cdep', 'Circular dependency found: {0}', path.join(' <- '));
          }
          return cache[serviceName];
        } else {
          try {
            path.unshift(serviceName);
            cache[serviceName] = INSTANTIATING;
            return cache[serviceName] = factory(serviceName);
          } catch (err) {
            if (cache[serviceName] === INSTANTIATING) {
              delete cache[serviceName];
            }
            throw err;
          } finally {
            path.shift();
          }
        }
      }
      function invoke(fn, self, locals) {
        var args = [], $inject = annotate(fn), length, i, key;
        for (i = 0, length = $inject.length; i < length; i++) {
          key = $inject[i];
          if (typeof key !== 'string') {
            throw $injectorMinErr('itkn', 'Incorrect injection token! Expected service name as string, got {0}', key);
          }
          args.push(locals && locals.hasOwnProperty(key) ? locals[key] : getService(key));
        }
        if (!fn.$inject) {
          fn = fn[length];
        }
        return fn.apply(self, args);
      }
      function instantiate(Type, locals) {
        var Constructor = function () {
          }, instance, returnedValue;
        Constructor.prototype = (isArray(Type) ? Type[Type.length - 1] : Type).prototype;
        instance = new Constructor();
        returnedValue = invoke(Type, instance, locals);
        return isObject(returnedValue) || isFunction(returnedValue) ? returnedValue : instance;
      }
      return {
        invoke: invoke,
        instantiate: instantiate,
        get: getService,
        annotate: annotate,
        has: function (name) {
          return providerCache.hasOwnProperty(name + providerSuffix) || cache.hasOwnProperty(name);
        }
      };
    }
  }
  function $AnchorScrollProvider() {
    var autoScrollingEnabled = true;
    this.disableAutoScrolling = function () {
      autoScrollingEnabled = false;
    };
    this.$get = [
      '$window',
      '$location',
      '$rootScope',
      function ($window, $location, $rootScope) {
        var document = $window.document;
        function getFirstAnchor(list) {
          var result = null;
          forEach(list, function (element) {
            if (!result && lowercase(element.nodeName) === 'a')
              result = element;
          });
          return result;
        }
        function scroll() {
          var hash = $location.hash(), elm;
          if (!hash)
            $window.scrollTo(0, 0);
          else if (elm = document.getElementById(hash))
            elm.scrollIntoView();
          else if (elm = getFirstAnchor(document.getElementsByName(hash)))
            elm.scrollIntoView();
          else if (hash === 'top')
            $window.scrollTo(0, 0);
        }
        if (autoScrollingEnabled) {
          $rootScope.$watch(function autoScrollWatch() {
            return $location.hash();
          }, function autoScrollWatchAction() {
            $rootScope.$evalAsync(scroll);
          });
        }
        return scroll;
      }
    ];
  }
  var $animateMinErr = minErr('$animate');
  var $AnimateProvider = [
      '$provide',
      function ($provide) {
        this.$$selectors = {};
        this.register = function (name, factory) {
          var key = name + '-animation';
          if (name && name.charAt(0) != '.')
            throw $animateMinErr('notcsel', 'Expecting class selector starting with \'.\' got \'{0}\'.', name);
          this.$$selectors[name.substr(1)] = key;
          $provide.factory(key, factory);
        };
        this.classNameFilter = function (expression) {
          if (arguments.length === 1) {
            this.$$classNameFilter = expression instanceof RegExp ? expression : null;
          }
          return this.$$classNameFilter;
        };
        this.$get = [
          '$timeout',
          '$$asyncCallback',
          function ($timeout, $$asyncCallback) {
            function async(fn) {
              fn && $$asyncCallback(fn);
            }
            return {
              enter: function (element, parent, after, done) {
                if (after) {
                  after.after(element);
                } else {
                  if (!parent || !parent[0]) {
                    parent = after.parent();
                  }
                  parent.append(element);
                }
                async(done);
              },
              leave: function (element, done) {
                element.remove();
                async(done);
              },
              move: function (element, parent, after, done) {
                this.enter(element, parent, after, done);
              },
              addClass: function (element, className, done) {
                className = isString(className) ? className : isArray(className) ? className.join(' ') : '';
                forEach(element, function (element) {
                  jqLiteAddClass(element, className);
                });
                async(done);
              },
              removeClass: function (element, className, done) {
                className = isString(className) ? className : isArray(className) ? className.join(' ') : '';
                forEach(element, function (element) {
                  jqLiteRemoveClass(element, className);
                });
                async(done);
              },
              setClass: function (element, add, remove, done) {
                forEach(element, function (element) {
                  jqLiteAddClass(element, add);
                  jqLiteRemoveClass(element, remove);
                });
                async(done);
              },
              enabled: noop
            };
          }
        ];
      }
    ];
  function $$AsyncCallbackProvider() {
    this.$get = [
      '$$rAF',
      '$timeout',
      function ($$rAF, $timeout) {
        return $$rAF.supported ? function (fn) {
          return $$rAF(fn);
        } : function (fn) {
          return $timeout(fn, 0, false);
        };
      }
    ];
  }
  function Browser(window, document, $log, $sniffer) {
    var self = this, rawDocument = document[0], location = window.location, history = window.history, setTimeout = window.setTimeout, clearTimeout = window.clearTimeout, pendingDeferIds = {};
    self.isMock = false;
    var outstandingRequestCount = 0;
    var outstandingRequestCallbacks = [];
    self.$$completeOutstandingRequest = completeOutstandingRequest;
    self.$$incOutstandingRequestCount = function () {
      outstandingRequestCount++;
    };
    function completeOutstandingRequest(fn) {
      try {
        fn.apply(null, sliceArgs(arguments, 1));
      } finally {
        outstandingRequestCount--;
        if (outstandingRequestCount === 0) {
          while (outstandingRequestCallbacks.length) {
            try {
              outstandingRequestCallbacks.pop()();
            } catch (e) {
              $log.error(e);
            }
          }
        }
      }
    }
    self.notifyWhenNoOutstandingRequests = function (callback) {
      forEach(pollFns, function (pollFn) {
        pollFn();
      });
      if (outstandingRequestCount === 0) {
        callback();
      } else {
        outstandingRequestCallbacks.push(callback);
      }
    };
    var pollFns = [], pollTimeout;
    self.addPollFn = function (fn) {
      if (isUndefined(pollTimeout))
        startPoller(100, setTimeout);
      pollFns.push(fn);
      return fn;
    };
    function startPoller(interval, setTimeout) {
      (function check() {
        forEach(pollFns, function (pollFn) {
          pollFn();
        });
        pollTimeout = setTimeout(check, interval);
      }());
    }
    var lastBrowserUrl = location.href, baseElement = document.find('base'), newLocation = null;
    self.url = function (url, replace) {
      if (location !== window.location)
        location = window.location;
      if (history !== window.history)
        history = window.history;
      if (url) {
        if (lastBrowserUrl == url)
          return;
        lastBrowserUrl = url;
        if ($sniffer.history) {
          if (replace)
            history.replaceState(null, '', url);
          else {
            history.pushState(null, '', url);
            baseElement.attr('href', baseElement.attr('href'));
          }
        } else {
          newLocation = url;
          if (replace) {
            location.replace(url);
          } else {
            location.href = url;
          }
        }
        return self;
      } else {
        return newLocation || location.href.replace(/%27/g, '\'');
      }
    };
    var urlChangeListeners = [], urlChangeInit = false;
    function fireUrlChange() {
      newLocation = null;
      if (lastBrowserUrl == self.url())
        return;
      lastBrowserUrl = self.url();
      forEach(urlChangeListeners, function (listener) {
        listener(self.url());
      });
    }
    self.onUrlChange = function (callback) {
      if (!urlChangeInit) {
        if ($sniffer.history)
          jqLite(window).on('popstate', fireUrlChange);
        if ($sniffer.hashchange)
          jqLite(window).on('hashchange', fireUrlChange);
        else
          self.addPollFn(fireUrlChange);
        urlChangeInit = true;
      }
      urlChangeListeners.push(callback);
      return callback;
    };
    self.baseHref = function () {
      var href = baseElement.attr('href');
      return href ? href.replace(/^(https?\:)?\/\/[^\/]*/, '') : '';
    };
    var lastCookies = {};
    var lastCookieString = '';
    var cookiePath = self.baseHref();
    self.cookies = function (name, value) {
      var cookieLength, cookieArray, cookie, i, index;
      if (name) {
        if (value === undefined) {
          rawDocument.cookie = escape(name) + '=;path=' + cookiePath + ';expires=Thu, 01 Jan 1970 00:00:00 GMT';
        } else {
          if (isString(value)) {
            cookieLength = (rawDocument.cookie = escape(name) + '=' + escape(value) + ';path=' + cookiePath).length + 1;
            if (cookieLength > 4096) {
              $log.warn('Cookie \'' + name + '\' possibly not set or overflowed because it was too large (' + cookieLength + ' > 4096 bytes)!');
            }
          }
        }
      } else {
        if (rawDocument.cookie !== lastCookieString) {
          lastCookieString = rawDocument.cookie;
          cookieArray = lastCookieString.split('; ');
          lastCookies = {};
          for (i = 0; i < cookieArray.length; i++) {
            cookie = cookieArray[i];
            index = cookie.indexOf('=');
            if (index > 0) {
              name = unescape(cookie.substring(0, index));
              if (lastCookies[name] === undefined) {
                lastCookies[name] = unescape(cookie.substring(index + 1));
              }
            }
          }
        }
        return lastCookies;
      }
    };
    self.defer = function (fn, delay) {
      var timeoutId;
      outstandingRequestCount++;
      timeoutId = setTimeout(function () {
        delete pendingDeferIds[timeoutId];
        completeOutstandingRequest(fn);
      }, delay || 0);
      pendingDeferIds[timeoutId] = true;
      return timeoutId;
    };
    self.defer.cancel = function (deferId) {
      if (pendingDeferIds[deferId]) {
        delete pendingDeferIds[deferId];
        clearTimeout(deferId);
        completeOutstandingRequest(noop);
        return true;
      }
      return false;
    };
  }
  function $BrowserProvider() {
    this.$get = [
      '$window',
      '$log',
      '$sniffer',
      '$document',
      function ($window, $log, $sniffer, $document) {
        return new Browser($window, $document, $log, $sniffer);
      }
    ];
  }
  function $CacheFactoryProvider() {
    this.$get = function () {
      var caches = {};
      function cacheFactory(cacheId, options) {
        if (cacheId in caches) {
          throw minErr('$cacheFactory')('iid', 'CacheId \'{0}\' is already taken!', cacheId);
        }
        var size = 0, stats = extend({}, options, { id: cacheId }), data = {}, capacity = options && options.capacity || Number.MAX_VALUE, lruHash = {}, freshEnd = null, staleEnd = null;
        return caches[cacheId] = {
          put: function (key, value) {
            if (capacity < Number.MAX_VALUE) {
              var lruEntry = lruHash[key] || (lruHash[key] = { key: key });
              refresh(lruEntry);
            }
            if (isUndefined(value))
              return;
            if (!(key in data))
              size++;
            data[key] = value;
            if (size > capacity) {
              this.remove(staleEnd.key);
            }
            return value;
          },
          get: function (key) {
            if (capacity < Number.MAX_VALUE) {
              var lruEntry = lruHash[key];
              if (!lruEntry)
                return;
              refresh(lruEntry);
            }
            return data[key];
          },
          remove: function (key) {
            if (capacity < Number.MAX_VALUE) {
              var lruEntry = lruHash[key];
              if (!lruEntry)
                return;
              if (lruEntry == freshEnd)
                freshEnd = lruEntry.p;
              if (lruEntry == staleEnd)
                staleEnd = lruEntry.n;
              link(lruEntry.n, lruEntry.p);
              delete lruHash[key];
            }
            delete data[key];
            size--;
          },
          removeAll: function () {
            data = {};
            size = 0;
            lruHash = {};
            freshEnd = staleEnd = null;
          },
          destroy: function () {
            data = null;
            stats = null;
            lruHash = null;
            delete caches[cacheId];
          },
          info: function () {
            return extend({}, stats, { size: size });
          }
        };
        function refresh(entry) {
          if (entry != freshEnd) {
            if (!staleEnd) {
              staleEnd = entry;
            } else if (staleEnd == entry) {
              staleEnd = entry.n;
            }
            link(entry.n, entry.p);
            link(entry, freshEnd);
            freshEnd = entry;
            freshEnd.n = null;
          }
        }
        function link(nextEntry, prevEntry) {
          if (nextEntry != prevEntry) {
            if (nextEntry)
              nextEntry.p = prevEntry;
            if (prevEntry)
              prevEntry.n = nextEntry;
          }
        }
      }
      cacheFactory.info = function () {
        var info = {};
        forEach(caches, function (cache, cacheId) {
          info[cacheId] = cache.info();
        });
        return info;
      };
      cacheFactory.get = function (cacheId) {
        return caches[cacheId];
      };
      return cacheFactory;
    };
  }
  function $TemplateCacheProvider() {
    this.$get = [
      '$cacheFactory',
      function ($cacheFactory) {
        return $cacheFactory('templates');
      }
    ];
  }
  var $compileMinErr = minErr('$compile');
  $CompileProvider.$inject = [
    '$provide',
    '$$sanitizeUriProvider'
  ];
  function $CompileProvider($provide, $$sanitizeUriProvider) {
    var hasDirectives = {}, Suffix = 'Directive', COMMENT_DIRECTIVE_REGEXP = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/, CLASS_DIRECTIVE_REGEXP = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/;
    var EVENT_HANDLER_ATTR_REGEXP = /^(on[a-z]+|formaction)$/;
    this.directive = function registerDirective(name, directiveFactory) {
      assertNotHasOwnProperty(name, 'directive');
      if (isString(name)) {
        assertArg(directiveFactory, 'directiveFactory');
        if (!hasDirectives.hasOwnProperty(name)) {
          hasDirectives[name] = [];
          $provide.factory(name + Suffix, [
            '$injector',
            '$exceptionHandler',
            function ($injector, $exceptionHandler) {
              var directives = [];
              forEach(hasDirectives[name], function (directiveFactory, index) {
                try {
                  var directive = $injector.invoke(directiveFactory);
                  if (isFunction(directive)) {
                    directive = { compile: valueFn(directive) };
                  } else if (!directive.compile && directive.link) {
                    directive.compile = valueFn(directive.link);
                  }
                  directive.priority = directive.priority || 0;
                  directive.index = index;
                  directive.name = directive.name || name;
                  directive.require = directive.require || directive.controller && directive.name;
                  directive.restrict = directive.restrict || 'A';
                  directives.push(directive);
                } catch (e) {
                  $exceptionHandler(e);
                }
              });
              return directives;
            }
          ]);
        }
        hasDirectives[name].push(directiveFactory);
      } else {
        forEach(name, reverseParams(registerDirective));
      }
      return this;
    };
    this.aHrefSanitizationWhitelist = function (regexp) {
      if (isDefined(regexp)) {
        $$sanitizeUriProvider.aHrefSanitizationWhitelist(regexp);
        return this;
      } else {
        return $$sanitizeUriProvider.aHrefSanitizationWhitelist();
      }
    };
    this.imgSrcSanitizationWhitelist = function (regexp) {
      if (isDefined(regexp)) {
        $$sanitizeUriProvider.imgSrcSanitizationWhitelist(regexp);
        return this;
      } else {
        return $$sanitizeUriProvider.imgSrcSanitizationWhitelist();
      }
    };
    this.$get = [
      '$injector',
      '$interpolate',
      '$exceptionHandler',
      '$http',
      '$templateCache',
      '$parse',
      '$controller',
      '$rootScope',
      '$document',
      '$sce',
      '$animate',
      '$$sanitizeUri',
      function ($injector, $interpolate, $exceptionHandler, $http, $templateCache, $parse, $controller, $rootScope, $document, $sce, $animate, $$sanitizeUri) {
        var Attributes = function (element, attr) {
          this.$$element = element;
          this.$attr = attr || {};
        };
        Attributes.prototype = {
          $normalize: directiveNormalize,
          $addClass: function (classVal) {
            if (classVal && classVal.length > 0) {
              $animate.addClass(this.$$element, classVal);
            }
          },
          $removeClass: function (classVal) {
            if (classVal && classVal.length > 0) {
              $animate.removeClass(this.$$element, classVal);
            }
          },
          $updateClass: function (newClasses, oldClasses) {
            var toAdd = tokenDifference(newClasses, oldClasses);
            var toRemove = tokenDifference(oldClasses, newClasses);
            if (toAdd.length === 0) {
              $animate.removeClass(this.$$element, toRemove);
            } else if (toRemove.length === 0) {
              $animate.addClass(this.$$element, toAdd);
            } else {
              $animate.setClass(this.$$element, toAdd, toRemove);
            }
          },
          $set: function (key, value, writeAttr, attrName) {
            var booleanKey = getBooleanAttrName(this.$$element[0], key), normalizedVal, nodeName;
            if (booleanKey) {
              this.$$element.prop(key, value);
              attrName = booleanKey;
            }
            this[key] = value;
            if (attrName) {
              this.$attr[key] = attrName;
            } else {
              attrName = this.$attr[key];
              if (!attrName) {
                this.$attr[key] = attrName = snake_case(key, '-');
              }
            }
            nodeName = nodeName_(this.$$element);
            if (nodeName === 'A' && key === 'href' || nodeName === 'IMG' && key === 'src') {
              this[key] = value = $$sanitizeUri(value, key === 'src');
            }
            if (writeAttr !== false) {
              if (value === null || value === undefined) {
                this.$$element.removeAttr(attrName);
              } else {
                this.$$element.attr(attrName, value);
              }
            }
            var $$observers = this.$$observers;
            $$observers && forEach($$observers[key], function (fn) {
              try {
                fn(value);
              } catch (e) {
                $exceptionHandler(e);
              }
            });
          },
          $observe: function (key, fn) {
            var attrs = this, $$observers = attrs.$$observers || (attrs.$$observers = {}), listeners = $$observers[key] || ($$observers[key] = []);
            listeners.push(fn);
            $rootScope.$evalAsync(function () {
              if (!listeners.$$inter) {
                fn(attrs[key]);
              }
            });
            return fn;
          }
        };
        var startSymbol = $interpolate.startSymbol(), endSymbol = $interpolate.endSymbol(), denormalizeTemplate = startSymbol == '{{' || endSymbol == '}}' ? identity : function denormalizeTemplate(template) {
            return template.replace(/\{\{/g, startSymbol).replace(/}}/g, endSymbol);
          }, NG_ATTR_BINDING = /^ngAttr[A-Z]/;
        return compile;
        function compile($compileNodes, transcludeFn, maxPriority, ignoreDirective, previousCompileContext) {
          if (!($compileNodes instanceof jqLite)) {
            $compileNodes = jqLite($compileNodes);
          }
          forEach($compileNodes, function (node, index) {
            if (node.nodeType == 3 && node.nodeValue.match(/\S+/)) {
              $compileNodes[index] = node = jqLite(node).wrap('<span></span>').parent()[0];
            }
          });
          var compositeLinkFn = compileNodes($compileNodes, transcludeFn, $compileNodes, maxPriority, ignoreDirective, previousCompileContext);
          safeAddClass($compileNodes, 'ng-scope');
          return function publicLinkFn(scope, cloneConnectFn, transcludeControllers) {
            assertArg(scope, 'scope');
            var $linkNode = cloneConnectFn ? JQLitePrototype.clone.call($compileNodes) : $compileNodes;
            forEach(transcludeControllers, function (instance, name) {
              $linkNode.data('$' + name + 'Controller', instance);
            });
            for (var i = 0, ii = $linkNode.length; i < ii; i++) {
              var node = $linkNode[i], nodeType = node.nodeType;
              if (nodeType === 1 || nodeType === 9) {
                $linkNode.eq(i).data('$scope', scope);
              }
            }
            if (cloneConnectFn)
              cloneConnectFn($linkNode, scope);
            if (compositeLinkFn)
              compositeLinkFn(scope, $linkNode, $linkNode);
            return $linkNode;
          };
        }
        function safeAddClass($element, className) {
          try {
            $element.addClass(className);
          } catch (e) {
          }
        }
        function compileNodes(nodeList, transcludeFn, $rootElement, maxPriority, ignoreDirective, previousCompileContext) {
          var linkFns = [], attrs, directives, nodeLinkFn, childNodes, childLinkFn, linkFnFound;
          for (var i = 0; i < nodeList.length; i++) {
            attrs = new Attributes();
            directives = collectDirectives(nodeList[i], [], attrs, i === 0 ? maxPriority : undefined, ignoreDirective);
            nodeLinkFn = directives.length ? applyDirectivesToNode(directives, nodeList[i], attrs, transcludeFn, $rootElement, null, [], [], previousCompileContext) : null;
            if (nodeLinkFn && nodeLinkFn.scope) {
              safeAddClass(jqLite(nodeList[i]), 'ng-scope');
            }
            childLinkFn = nodeLinkFn && nodeLinkFn.terminal || !(childNodes = nodeList[i].childNodes) || !childNodes.length ? null : compileNodes(childNodes, nodeLinkFn ? nodeLinkFn.transclude : transcludeFn);
            linkFns.push(nodeLinkFn, childLinkFn);
            linkFnFound = linkFnFound || nodeLinkFn || childLinkFn;
            previousCompileContext = null;
          }
          return linkFnFound ? compositeLinkFn : null;
          function compositeLinkFn(scope, nodeList, $rootElement, boundTranscludeFn) {
            var nodeLinkFn, childLinkFn, node, $node, childScope, childTranscludeFn, i, ii, n;
            var nodeListLength = nodeList.length, stableNodeList = new Array(nodeListLength);
            for (i = 0; i < nodeListLength; i++) {
              stableNodeList[i] = nodeList[i];
            }
            for (i = 0, n = 0, ii = linkFns.length; i < ii; n++) {
              node = stableNodeList[n];
              nodeLinkFn = linkFns[i++];
              childLinkFn = linkFns[i++];
              $node = jqLite(node);
              if (nodeLinkFn) {
                if (nodeLinkFn.scope) {
                  childScope = scope.$new();
                  $node.data('$scope', childScope);
                } else {
                  childScope = scope;
                }
                childTranscludeFn = nodeLinkFn.transclude;
                if (childTranscludeFn || !boundTranscludeFn && transcludeFn) {
                  nodeLinkFn(childLinkFn, childScope, node, $rootElement, createBoundTranscludeFn(scope, childTranscludeFn || transcludeFn));
                } else {
                  nodeLinkFn(childLinkFn, childScope, node, $rootElement, boundTranscludeFn);
                }
              } else if (childLinkFn) {
                childLinkFn(scope, node.childNodes, undefined, boundTranscludeFn);
              }
            }
          }
        }
        function createBoundTranscludeFn(scope, transcludeFn) {
          return function boundTranscludeFn(transcludedScope, cloneFn, controllers) {
            var scopeCreated = false;
            if (!transcludedScope) {
              transcludedScope = scope.$new();
              transcludedScope.$$transcluded = true;
              scopeCreated = true;
            }
            var clone = transcludeFn(transcludedScope, cloneFn, controllers);
            if (scopeCreated) {
              clone.on('$destroy', bind(transcludedScope, transcludedScope.$destroy));
            }
            return clone;
          };
        }
        function collectDirectives(node, directives, attrs, maxPriority, ignoreDirective) {
          var nodeType = node.nodeType, attrsMap = attrs.$attr, match, className;
          switch (nodeType) {
          case 1:
            addDirective(directives, directiveNormalize(nodeName_(node).toLowerCase()), 'E', maxPriority, ignoreDirective);
            for (var attr, name, nName, ngAttrName, value, nAttrs = node.attributes, j = 0, jj = nAttrs && nAttrs.length; j < jj; j++) {
              var attrStartName = false;
              var attrEndName = false;
              attr = nAttrs[j];
              if (!msie || msie >= 8 || attr.specified) {
                name = attr.name;
                ngAttrName = directiveNormalize(name);
                if (NG_ATTR_BINDING.test(ngAttrName)) {
                  name = snake_case(ngAttrName.substr(6), '-');
                }
                var directiveNName = ngAttrName.replace(/(Start|End)$/, '');
                if (ngAttrName === directiveNName + 'Start') {
                  attrStartName = name;
                  attrEndName = name.substr(0, name.length - 5) + 'end';
                  name = name.substr(0, name.length - 6);
                }
                nName = directiveNormalize(name.toLowerCase());
                attrsMap[nName] = name;
                attrs[nName] = value = trim(attr.value);
                if (getBooleanAttrName(node, nName)) {
                  attrs[nName] = true;
                }
                addAttrInterpolateDirective(node, directives, value, nName);
                addDirective(directives, nName, 'A', maxPriority, ignoreDirective, attrStartName, attrEndName);
              }
            }
            className = node.className;
            if (isString(className) && className !== '') {
              while (match = CLASS_DIRECTIVE_REGEXP.exec(className)) {
                nName = directiveNormalize(match[2]);
                if (addDirective(directives, nName, 'C', maxPriority, ignoreDirective)) {
                  attrs[nName] = trim(match[3]);
                }
                className = className.substr(match.index + match[0].length);
              }
            }
            break;
          case 3:
            addTextInterpolateDirective(directives, node.nodeValue);
            break;
          case 8:
            try {
              match = COMMENT_DIRECTIVE_REGEXP.exec(node.nodeValue);
              if (match) {
                nName = directiveNormalize(match[1]);
                if (addDirective(directives, nName, 'M', maxPriority, ignoreDirective)) {
                  attrs[nName] = trim(match[2]);
                }
              }
            } catch (e) {
            }
            break;
          }
          directives.sort(byPriority);
          return directives;
        }
        function groupScan(node, attrStart, attrEnd) {
          var nodes = [];
          var depth = 0;
          if (attrStart && node.hasAttribute && node.hasAttribute(attrStart)) {
            var startNode = node;
            do {
              if (!node) {
                throw $compileMinErr('uterdir', 'Unterminated attribute, found \'{0}\' but no matching \'{1}\' found.', attrStart, attrEnd);
              }
              if (node.nodeType == 1) {
                if (node.hasAttribute(attrStart))
                  depth++;
                if (node.hasAttribute(attrEnd))
                  depth--;
              }
              nodes.push(node);
              node = node.nextSibling;
            } while (depth > 0);
          } else {
            nodes.push(node);
          }
          return jqLite(nodes);
        }
        function groupElementsLinkFnWrapper(linkFn, attrStart, attrEnd) {
          return function (scope, element, attrs, controllers, transcludeFn) {
            element = groupScan(element[0], attrStart, attrEnd);
            return linkFn(scope, element, attrs, controllers, transcludeFn);
          };
        }
        function applyDirectivesToNode(directives, compileNode, templateAttrs, transcludeFn, jqCollection, originalReplaceDirective, preLinkFns, postLinkFns, previousCompileContext) {
          previousCompileContext = previousCompileContext || {};
          var terminalPriority = -Number.MAX_VALUE, newScopeDirective, controllerDirectives = previousCompileContext.controllerDirectives, newIsolateScopeDirective = previousCompileContext.newIsolateScopeDirective, templateDirective = previousCompileContext.templateDirective, nonTlbTranscludeDirective = previousCompileContext.nonTlbTranscludeDirective, hasTranscludeDirective = false, hasElementTranscludeDirective = previousCompileContext.hasElementTranscludeDirective, $compileNode = templateAttrs.$$element = jqLite(compileNode), directive, directiveName, $template, replaceDirective = originalReplaceDirective, childTranscludeFn = transcludeFn, linkFn, directiveValue;
          for (var i = 0, ii = directives.length; i < ii; i++) {
            directive = directives[i];
            var attrStart = directive.$$start;
            var attrEnd = directive.$$end;
            if (attrStart) {
              $compileNode = groupScan(compileNode, attrStart, attrEnd);
            }
            $template = undefined;
            if (terminalPriority > directive.priority) {
              break;
            }
            if (directiveValue = directive.scope) {
              newScopeDirective = newScopeDirective || directive;
              if (!directive.templateUrl) {
                assertNoDuplicate('new/isolated scope', newIsolateScopeDirective, directive, $compileNode);
                if (isObject(directiveValue)) {
                  newIsolateScopeDirective = directive;
                }
              }
            }
            directiveName = directive.name;
            if (!directive.templateUrl && directive.controller) {
              directiveValue = directive.controller;
              controllerDirectives = controllerDirectives || {};
              assertNoDuplicate('\'' + directiveName + '\' controller', controllerDirectives[directiveName], directive, $compileNode);
              controllerDirectives[directiveName] = directive;
            }
            if (directiveValue = directive.transclude) {
              hasTranscludeDirective = true;
              if (!directive.$$tlb) {
                assertNoDuplicate('transclusion', nonTlbTranscludeDirective, directive, $compileNode);
                nonTlbTranscludeDirective = directive;
              }
              if (directiveValue == 'element') {
                hasElementTranscludeDirective = true;
                terminalPriority = directive.priority;
                $template = groupScan(compileNode, attrStart, attrEnd);
                $compileNode = templateAttrs.$$element = jqLite(document.createComment(' ' + directiveName + ': ' + templateAttrs[directiveName] + ' '));
                compileNode = $compileNode[0];
                replaceWith(jqCollection, jqLite(sliceArgs($template)), compileNode);
                childTranscludeFn = compile($template, transcludeFn, terminalPriority, replaceDirective && replaceDirective.name, { nonTlbTranscludeDirective: nonTlbTranscludeDirective });
              } else {
                $template = jqLite(jqLiteClone(compileNode)).contents();
                $compileNode.empty();
                childTranscludeFn = compile($template, transcludeFn);
              }
            }
            if (directive.template) {
              assertNoDuplicate('template', templateDirective, directive, $compileNode);
              templateDirective = directive;
              directiveValue = isFunction(directive.template) ? directive.template($compileNode, templateAttrs) : directive.template;
              directiveValue = denormalizeTemplate(directiveValue);
              if (directive.replace) {
                replaceDirective = directive;
                if (jqLiteIsTextNode(directiveValue)) {
                  $template = [];
                } else {
                  $template = jqLite(directiveValue);
                }
                compileNode = $template[0];
                if ($template.length != 1 || compileNode.nodeType !== 1) {
                  throw $compileMinErr('tplrt', 'Template for directive \'{0}\' must have exactly one root element. {1}', directiveName, '');
                }
                replaceWith(jqCollection, $compileNode, compileNode);
                var newTemplateAttrs = { $attr: {} };
                var templateDirectives = collectDirectives(compileNode, [], newTemplateAttrs);
                var unprocessedDirectives = directives.splice(i + 1, directives.length - (i + 1));
                if (newIsolateScopeDirective) {
                  markDirectivesAsIsolate(templateDirectives);
                }
                directives = directives.concat(templateDirectives).concat(unprocessedDirectives);
                mergeTemplateAttributes(templateAttrs, newTemplateAttrs);
                ii = directives.length;
              } else {
                $compileNode.html(directiveValue);
              }
            }
            if (directive.templateUrl) {
              assertNoDuplicate('template', templateDirective, directive, $compileNode);
              templateDirective = directive;
              if (directive.replace) {
                replaceDirective = directive;
              }
              nodeLinkFn = compileTemplateUrl(directives.splice(i, directives.length - i), $compileNode, templateAttrs, jqCollection, childTranscludeFn, preLinkFns, postLinkFns, {
                controllerDirectives: controllerDirectives,
                newIsolateScopeDirective: newIsolateScopeDirective,
                templateDirective: templateDirective,
                nonTlbTranscludeDirective: nonTlbTranscludeDirective
              });
              ii = directives.length;
            } else if (directive.compile) {
              try {
                linkFn = directive.compile($compileNode, templateAttrs, childTranscludeFn);
                if (isFunction(linkFn)) {
                  addLinkFns(null, linkFn, attrStart, attrEnd);
                } else if (linkFn) {
                  addLinkFns(linkFn.pre, linkFn.post, attrStart, attrEnd);
                }
              } catch (e) {
                $exceptionHandler(e, startingTag($compileNode));
              }
            }
            if (directive.terminal) {
              nodeLinkFn.terminal = true;
              terminalPriority = Math.max(terminalPriority, directive.priority);
            }
          }
          nodeLinkFn.scope = newScopeDirective && newScopeDirective.scope === true;
          nodeLinkFn.transclude = hasTranscludeDirective && childTranscludeFn;
          previousCompileContext.hasElementTranscludeDirective = hasElementTranscludeDirective;
          return nodeLinkFn;
          function addLinkFns(pre, post, attrStart, attrEnd) {
            if (pre) {
              if (attrStart)
                pre = groupElementsLinkFnWrapper(pre, attrStart, attrEnd);
              pre.require = directive.require;
              if (newIsolateScopeDirective === directive || directive.$$isolateScope) {
                pre = cloneAndAnnotateFn(pre, { isolateScope: true });
              }
              preLinkFns.push(pre);
            }
            if (post) {
              if (attrStart)
                post = groupElementsLinkFnWrapper(post, attrStart, attrEnd);
              post.require = directive.require;
              if (newIsolateScopeDirective === directive || directive.$$isolateScope) {
                post = cloneAndAnnotateFn(post, { isolateScope: true });
              }
              postLinkFns.push(post);
            }
          }
          function getControllers(require, $element, elementControllers) {
            var value, retrievalMethod = 'data', optional = false;
            if (isString(require)) {
              while ((value = require.charAt(0)) == '^' || value == '?') {
                require = require.substr(1);
                if (value == '^') {
                  retrievalMethod = 'inheritedData';
                }
                optional = optional || value == '?';
              }
              value = null;
              if (elementControllers && retrievalMethod === 'data') {
                value = elementControllers[require];
              }
              value = value || $element[retrievalMethod]('$' + require + 'Controller');
              if (!value && !optional) {
                throw $compileMinErr('ctreq', 'Controller \'{0}\', required by directive \'{1}\', can\'t be found!', require, directiveName);
              }
              return value;
            } else if (isArray(require)) {
              value = [];
              forEach(require, function (require) {
                value.push(getControllers(require, $element, elementControllers));
              });
            }
            return value;
          }
          function nodeLinkFn(childLinkFn, scope, linkNode, $rootElement, boundTranscludeFn) {
            var attrs, $element, i, ii, linkFn, controller, isolateScope, elementControllers = {}, transcludeFn;
            if (compileNode === linkNode) {
              attrs = templateAttrs;
            } else {
              attrs = shallowCopy(templateAttrs, new Attributes(jqLite(linkNode), templateAttrs.$attr));
            }
            $element = attrs.$$element;
            if (newIsolateScopeDirective) {
              var LOCAL_REGEXP = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
              var $linkNode = jqLite(linkNode);
              isolateScope = scope.$new(true);
              if (templateDirective && templateDirective === newIsolateScopeDirective.$$originalDirective) {
                $linkNode.data('$isolateScope', isolateScope);
              } else {
                $linkNode.data('$isolateScopeNoTemplate', isolateScope);
              }
              safeAddClass($linkNode, 'ng-isolate-scope');
              forEach(newIsolateScopeDirective.scope, function (definition, scopeName) {
                var match = definition.match(LOCAL_REGEXP) || [], attrName = match[3] || scopeName, optional = match[2] == '?', mode = match[1], lastValue, parentGet, parentSet, compare;
                isolateScope.$$isolateBindings[scopeName] = mode + attrName;
                switch (mode) {
                case '@':
                  attrs.$observe(attrName, function (value) {
                    isolateScope[scopeName] = value;
                  });
                  attrs.$$observers[attrName].$$scope = scope;
                  if (attrs[attrName]) {
                    isolateScope[scopeName] = $interpolate(attrs[attrName])(scope);
                  }
                  break;
                case '=':
                  if (optional && !attrs[attrName]) {
                    return;
                  }
                  parentGet = $parse(attrs[attrName]);
                  if (parentGet.literal) {
                    compare = equals;
                  } else {
                    compare = function (a, b) {
                      return a === b;
                    };
                  }
                  parentSet = parentGet.assign || function () {
                    lastValue = isolateScope[scopeName] = parentGet(scope);
                    throw $compileMinErr('nonassign', 'Expression \'{0}\' used with directive \'{1}\' is non-assignable!', attrs[attrName], newIsolateScopeDirective.name);
                  };
                  lastValue = isolateScope[scopeName] = parentGet(scope);
                  isolateScope.$watch(function parentValueWatch() {
                    var parentValue = parentGet(scope);
                    if (!compare(parentValue, isolateScope[scopeName])) {
                      if (!compare(parentValue, lastValue)) {
                        isolateScope[scopeName] = parentValue;
                      } else {
                        parentSet(scope, parentValue = isolateScope[scopeName]);
                      }
                    }
                    return lastValue = parentValue;
                  }, null, parentGet.literal);
                  break;
                case '&':
                  parentGet = $parse(attrs[attrName]);
                  isolateScope[scopeName] = function (locals) {
                    return parentGet(scope, locals);
                  };
                  break;
                default:
                  throw $compileMinErr('iscp', 'Invalid isolate scope definition for directive \'{0}\'.' + ' Definition: {... {1}: \'{2}\' ...}', newIsolateScopeDirective.name, scopeName, definition);
                }
              });
            }
            transcludeFn = boundTranscludeFn && controllersBoundTransclude;
            if (controllerDirectives) {
              forEach(controllerDirectives, function (directive) {
                var locals = {
                    $scope: directive === newIsolateScopeDirective || directive.$$isolateScope ? isolateScope : scope,
                    $element: $element,
                    $attrs: attrs,
                    $transclude: transcludeFn
                  }, controllerInstance;
                controller = directive.controller;
                if (controller == '@') {
                  controller = attrs[directive.name];
                }
                controllerInstance = $controller(controller, locals);
                elementControllers[directive.name] = controllerInstance;
                if (!hasElementTranscludeDirective) {
                  $element.data('$' + directive.name + 'Controller', controllerInstance);
                }
                if (directive.controllerAs) {
                  locals.$scope[directive.controllerAs] = controllerInstance;
                }
              });
            }
            for (i = 0, ii = preLinkFns.length; i < ii; i++) {
              try {
                linkFn = preLinkFns[i];
                linkFn(linkFn.isolateScope ? isolateScope : scope, $element, attrs, linkFn.require && getControllers(linkFn.require, $element, elementControllers), transcludeFn);
              } catch (e) {
                $exceptionHandler(e, startingTag($element));
              }
            }
            var scopeToChild = scope;
            if (newIsolateScopeDirective && (newIsolateScopeDirective.template || newIsolateScopeDirective.templateUrl === null)) {
              scopeToChild = isolateScope;
            }
            childLinkFn && childLinkFn(scopeToChild, linkNode.childNodes, undefined, boundTranscludeFn);
            for (i = postLinkFns.length - 1; i >= 0; i--) {
              try {
                linkFn = postLinkFns[i];
                linkFn(linkFn.isolateScope ? isolateScope : scope, $element, attrs, linkFn.require && getControllers(linkFn.require, $element, elementControllers), transcludeFn);
              } catch (e) {
                $exceptionHandler(e, startingTag($element));
              }
            }
            function controllersBoundTransclude(scope, cloneAttachFn) {
              var transcludeControllers;
              if (arguments.length < 2) {
                cloneAttachFn = scope;
                scope = undefined;
              }
              if (hasElementTranscludeDirective) {
                transcludeControllers = elementControllers;
              }
              return boundTranscludeFn(scope, cloneAttachFn, transcludeControllers);
            }
          }
        }
        function markDirectivesAsIsolate(directives) {
          for (var j = 0, jj = directives.length; j < jj; j++) {
            directives[j] = inherit(directives[j], { $$isolateScope: true });
          }
        }
        function addDirective(tDirectives, name, location, maxPriority, ignoreDirective, startAttrName, endAttrName) {
          if (name === ignoreDirective)
            return null;
          var match = null;
          if (hasDirectives.hasOwnProperty(name)) {
            for (var directive, directives = $injector.get(name + Suffix), i = 0, ii = directives.length; i < ii; i++) {
              try {
                directive = directives[i];
                if ((maxPriority === undefined || maxPriority > directive.priority) && directive.restrict.indexOf(location) != -1) {
                  if (startAttrName) {
                    directive = inherit(directive, {
                      $$start: startAttrName,
                      $$end: endAttrName
                    });
                  }
                  tDirectives.push(directive);
                  match = directive;
                }
              } catch (e) {
                $exceptionHandler(e);
              }
            }
          }
          return match;
        }
        function mergeTemplateAttributes(dst, src) {
          var srcAttr = src.$attr, dstAttr = dst.$attr, $element = dst.$$element;
          forEach(dst, function (value, key) {
            if (key.charAt(0) != '$') {
              if (src[key]) {
                value += (key === 'style' ? ';' : ' ') + src[key];
              }
              dst.$set(key, value, true, srcAttr[key]);
            }
          });
          forEach(src, function (value, key) {
            if (key == 'class') {
              safeAddClass($element, value);
              dst['class'] = (dst['class'] ? dst['class'] + ' ' : '') + value;
            } else if (key == 'style') {
              $element.attr('style', $element.attr('style') + ';' + value);
              dst['style'] = (dst['style'] ? dst['style'] + ';' : '') + value;
            } else if (key.charAt(0) != '$' && !dst.hasOwnProperty(key)) {
              dst[key] = value;
              dstAttr[key] = srcAttr[key];
            }
          });
        }
        function compileTemplateUrl(directives, $compileNode, tAttrs, $rootElement, childTranscludeFn, preLinkFns, postLinkFns, previousCompileContext) {
          var linkQueue = [], afterTemplateNodeLinkFn, afterTemplateChildLinkFn, beforeTemplateCompileNode = $compileNode[0], origAsyncDirective = directives.shift(), derivedSyncDirective = extend({}, origAsyncDirective, {
              templateUrl: null,
              transclude: null,
              replace: null,
              $$originalDirective: origAsyncDirective
            }), templateUrl = isFunction(origAsyncDirective.templateUrl) ? origAsyncDirective.templateUrl($compileNode, tAttrs) : origAsyncDirective.templateUrl;
          $compileNode.empty();
          $http.get($sce.getTrustedResourceUrl(templateUrl), { cache: $templateCache }).success(function (content) {
            var compileNode, tempTemplateAttrs, $template, childBoundTranscludeFn;
            content = denormalizeTemplate(content);
            if (origAsyncDirective.replace) {
              if (jqLiteIsTextNode(content)) {
                $template = [];
              } else {
                $template = jqLite(content);
              }
              compileNode = $template[0];
              if ($template.length != 1 || compileNode.nodeType !== 1) {
                throw $compileMinErr('tplrt', 'Template for directive \'{0}\' must have exactly one root element. {1}', origAsyncDirective.name, templateUrl);
              }
              tempTemplateAttrs = { $attr: {} };
              replaceWith($rootElement, $compileNode, compileNode);
              var templateDirectives = collectDirectives(compileNode, [], tempTemplateAttrs);
              if (isObject(origAsyncDirective.scope)) {
                markDirectivesAsIsolate(templateDirectives);
              }
              directives = templateDirectives.concat(directives);
              mergeTemplateAttributes(tAttrs, tempTemplateAttrs);
            } else {
              compileNode = beforeTemplateCompileNode;
              $compileNode.html(content);
            }
            directives.unshift(derivedSyncDirective);
            afterTemplateNodeLinkFn = applyDirectivesToNode(directives, compileNode, tAttrs, childTranscludeFn, $compileNode, origAsyncDirective, preLinkFns, postLinkFns, previousCompileContext);
            forEach($rootElement, function (node, i) {
              if (node == compileNode) {
                $rootElement[i] = $compileNode[0];
              }
            });
            afterTemplateChildLinkFn = compileNodes($compileNode[0].childNodes, childTranscludeFn);
            while (linkQueue.length) {
              var scope = linkQueue.shift(), beforeTemplateLinkNode = linkQueue.shift(), linkRootElement = linkQueue.shift(), boundTranscludeFn = linkQueue.shift(), linkNode = $compileNode[0];
              if (beforeTemplateLinkNode !== beforeTemplateCompileNode) {
                var oldClasses = beforeTemplateLinkNode.className;
                if (!(previousCompileContext.hasElementTranscludeDirective && origAsyncDirective.replace)) {
                  linkNode = jqLiteClone(compileNode);
                }
                replaceWith(linkRootElement, jqLite(beforeTemplateLinkNode), linkNode);
                safeAddClass(jqLite(linkNode), oldClasses);
              }
              if (afterTemplateNodeLinkFn.transclude) {
                childBoundTranscludeFn = createBoundTranscludeFn(scope, afterTemplateNodeLinkFn.transclude);
              } else {
                childBoundTranscludeFn = boundTranscludeFn;
              }
              afterTemplateNodeLinkFn(afterTemplateChildLinkFn, scope, linkNode, $rootElement, childBoundTranscludeFn);
            }
            linkQueue = null;
          }).error(function (response, code, headers, config) {
            throw $compileMinErr('tpload', 'Failed to load template: {0}', config.url);
          });
          return function delayedNodeLinkFn(ignoreChildLinkFn, scope, node, rootElement, boundTranscludeFn) {
            if (linkQueue) {
              linkQueue.push(scope);
              linkQueue.push(node);
              linkQueue.push(rootElement);
              linkQueue.push(boundTranscludeFn);
            } else {
              afterTemplateNodeLinkFn(afterTemplateChildLinkFn, scope, node, rootElement, boundTranscludeFn);
            }
          };
        }
        function byPriority(a, b) {
          var diff = b.priority - a.priority;
          if (diff !== 0)
            return diff;
          if (a.name !== b.name)
            return a.name < b.name ? -1 : 1;
          return a.index - b.index;
        }
        function assertNoDuplicate(what, previousDirective, directive, element) {
          if (previousDirective) {
            throw $compileMinErr('multidir', 'Multiple directives [{0}, {1}] asking for {2} on: {3}', previousDirective.name, directive.name, what, startingTag(element));
          }
        }
        function addTextInterpolateDirective(directives, text) {
          var interpolateFn = $interpolate(text, true);
          if (interpolateFn) {
            directives.push({
              priority: 0,
              compile: valueFn(function textInterpolateLinkFn(scope, node) {
                var parent = node.parent(), bindings = parent.data('$binding') || [];
                bindings.push(interpolateFn);
                safeAddClass(parent.data('$binding', bindings), 'ng-binding');
                scope.$watch(interpolateFn, function interpolateFnWatchAction(value) {
                  node[0].nodeValue = value;
                });
              })
            });
          }
        }
        function getTrustedContext(node, attrNormalizedName) {
          if (attrNormalizedName == 'srcdoc') {
            return $sce.HTML;
          }
          var tag = nodeName_(node);
          if (attrNormalizedName == 'xlinkHref' || tag == 'FORM' && attrNormalizedName == 'action' || tag != 'IMG' && (attrNormalizedName == 'src' || attrNormalizedName == 'ngSrc')) {
            return $sce.RESOURCE_URL;
          }
        }
        function addAttrInterpolateDirective(node, directives, value, name) {
          var interpolateFn = $interpolate(value, true);
          if (!interpolateFn)
            return;
          if (name === 'multiple' && nodeName_(node) === 'SELECT') {
            throw $compileMinErr('selmulti', 'Binding to the \'multiple\' attribute is not supported. Element: {0}', startingTag(node));
          }
          directives.push({
            priority: 100,
            compile: function () {
              return {
                pre: function attrInterpolatePreLinkFn(scope, element, attr) {
                  var $$observers = attr.$$observers || (attr.$$observers = {});
                  if (EVENT_HANDLER_ATTR_REGEXP.test(name)) {
                    throw $compileMinErr('nodomevents', 'Interpolations for HTML DOM event attributes are disallowed.  Please use the ' + 'ng- versions (such as ng-click instead of onclick) instead.');
                  }
                  interpolateFn = $interpolate(attr[name], true, getTrustedContext(node, name));
                  if (!interpolateFn)
                    return;
                  attr[name] = interpolateFn(scope);
                  ($$observers[name] || ($$observers[name] = [])).$$inter = true;
                  (attr.$$observers && attr.$$observers[name].$$scope || scope).$watch(interpolateFn, function interpolateFnWatchAction(newValue, oldValue) {
                    if (name === 'class' && newValue != oldValue) {
                      attr.$updateClass(newValue, oldValue);
                    } else {
                      attr.$set(name, newValue);
                    }
                  });
                }
              };
            }
          });
        }
        function replaceWith($rootElement, elementsToRemove, newNode) {
          var firstElementToRemove = elementsToRemove[0], removeCount = elementsToRemove.length, parent = firstElementToRemove.parentNode, i, ii;
          if ($rootElement) {
            for (i = 0, ii = $rootElement.length; i < ii; i++) {
              if ($rootElement[i] == firstElementToRemove) {
                $rootElement[i++] = newNode;
                for (var j = i, j2 = j + removeCount - 1, jj = $rootElement.length; j < jj; j++, j2++) {
                  if (j2 < jj) {
                    $rootElement[j] = $rootElement[j2];
                  } else {
                    delete $rootElement[j];
                  }
                }
                $rootElement.length -= removeCount - 1;
                break;
              }
            }
          }
          if (parent) {
            parent.replaceChild(newNode, firstElementToRemove);
          }
          var fragment = document.createDocumentFragment();
          fragment.appendChild(firstElementToRemove);
          newNode[jqLite.expando] = firstElementToRemove[jqLite.expando];
          for (var k = 1, kk = elementsToRemove.length; k < kk; k++) {
            var element = elementsToRemove[k];
            jqLite(element).remove();
            fragment.appendChild(element);
            delete elementsToRemove[k];
          }
          elementsToRemove[0] = newNode;
          elementsToRemove.length = 1;
        }
        function cloneAndAnnotateFn(fn, annotation) {
          return extend(function () {
            return fn.apply(null, arguments);
          }, fn, annotation);
        }
      }
    ];
  }
  var PREFIX_REGEXP = /^(x[\:\-_]|data[\:\-_])/i;
  function directiveNormalize(name) {
    return camelCase(name.replace(PREFIX_REGEXP, ''));
  }
  function nodesetLinkingFn(scope, nodeList, rootElement, boundTranscludeFn) {
  }
  function directiveLinkingFn(nodesetLinkingFn, scope, node, rootElement, boundTranscludeFn) {
  }
  function tokenDifference(str1, str2) {
    var values = '', tokens1 = str1.split(/\s+/), tokens2 = str2.split(/\s+/);
    outer:
      for (var i = 0; i < tokens1.length; i++) {
        var token = tokens1[i];
        for (var j = 0; j < tokens2.length; j++) {
          if (token == tokens2[j])
            continue outer;
        }
        values += (values.length > 0 ? ' ' : '') + token;
      }
    return values;
  }
  function $ControllerProvider() {
    var controllers = {}, CNTRL_REG = /^(\S+)(\s+as\s+(\w+))?$/;
    this.register = function (name, constructor) {
      assertNotHasOwnProperty(name, 'controller');
      if (isObject(name)) {
        extend(controllers, name);
      } else {
        controllers[name] = constructor;
      }
    };
    this.$get = [
      '$injector',
      '$window',
      function ($injector, $window) {
        return function (expression, locals) {
          var instance, match, constructor, identifier;
          if (isString(expression)) {
            match = expression.match(CNTRL_REG), constructor = match[1], identifier = match[3];
            expression = controllers.hasOwnProperty(constructor) ? controllers[constructor] : getter(locals.$scope, constructor, true) || getter($window, constructor, true);
            assertArgFn(expression, constructor, true);
          }
          instance = $injector.instantiate(expression, locals);
          if (identifier) {
            if (!(locals && typeof locals.$scope == 'object')) {
              throw minErr('$controller')('noscp', 'Cannot export controller \'{0}\' as \'{1}\'! No $scope object provided via `locals`.', constructor || expression.name, identifier);
            }
            locals.$scope[identifier] = instance;
          }
          return instance;
        };
      }
    ];
  }
  function $DocumentProvider() {
    this.$get = [
      '$window',
      function (window) {
        return jqLite(window.document);
      }
    ];
  }
  function $ExceptionHandlerProvider() {
    this.$get = [
      '$log',
      function ($log) {
        return function (exception, cause) {
          $log.error.apply($log, arguments);
        };
      }
    ];
  }
  function parseHeaders(headers) {
    var parsed = {}, key, val, i;
    if (!headers)
      return parsed;
    forEach(headers.split('\n'), function (line) {
      i = line.indexOf(':');
      key = lowercase(trim(line.substr(0, i)));
      val = trim(line.substr(i + 1));
      if (key) {
        if (parsed[key]) {
          parsed[key] += ', ' + val;
        } else {
          parsed[key] = val;
        }
      }
    });
    return parsed;
  }
  function headersGetter(headers) {
    var headersObj = isObject(headers) ? headers : undefined;
    return function (name) {
      if (!headersObj)
        headersObj = parseHeaders(headers);
      if (name) {
        return headersObj[lowercase(name)] || null;
      }
      return headersObj;
    };
  }
  function transformData(data, headers, fns) {
    if (isFunction(fns))
      return fns(data, headers);
    forEach(fns, function (fn) {
      data = fn(data, headers);
    });
    return data;
  }
  function isSuccess(status) {
    return 200 <= status && status < 300;
  }
  function $HttpProvider() {
    var JSON_START = /^\s*(\[|\{[^\{])/, JSON_END = /[\}\]]\s*$/, PROTECTION_PREFIX = /^\)\]\}',?\n/, CONTENT_TYPE_APPLICATION_JSON = { 'Content-Type': 'application/json;charset=utf-8' };
    var defaults = this.defaults = {
        transformResponse: [function (data) {
            if (isString(data)) {
              data = data.replace(PROTECTION_PREFIX, '');
              if (JSON_START.test(data) && JSON_END.test(data))
                data = fromJson(data);
            }
            return data;
          }],
        transformRequest: [function (d) {
            return isObject(d) && !isFile(d) && !isBlob(d) ? toJson(d) : d;
          }],
        headers: {
          common: { 'Accept': 'application/json, text/plain, */*' },
          post: copy(CONTENT_TYPE_APPLICATION_JSON),
          put: copy(CONTENT_TYPE_APPLICATION_JSON),
          patch: copy(CONTENT_TYPE_APPLICATION_JSON)
        },
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN'
      };
    var interceptorFactories = this.interceptors = [];
    var responseInterceptorFactories = this.responseInterceptors = [];
    this.$get = [
      '$httpBackend',
      '$browser',
      '$cacheFactory',
      '$rootScope',
      '$q',
      '$injector',
      function ($httpBackend, $browser, $cacheFactory, $rootScope, $q, $injector) {
        var defaultCache = $cacheFactory('$http');
        var reversedInterceptors = [];
        forEach(interceptorFactories, function (interceptorFactory) {
          reversedInterceptors.unshift(isString(interceptorFactory) ? $injector.get(interceptorFactory) : $injector.invoke(interceptorFactory));
        });
        forEach(responseInterceptorFactories, function (interceptorFactory, index) {
          var responseFn = isString(interceptorFactory) ? $injector.get(interceptorFactory) : $injector.invoke(interceptorFactory);
          reversedInterceptors.splice(index, 0, {
            response: function (response) {
              return responseFn($q.when(response));
            },
            responseError: function (response) {
              return responseFn($q.reject(response));
            }
          });
        });
        function $http(requestConfig) {
          var config = {
              method: 'get',
              transformRequest: defaults.transformRequest,
              transformResponse: defaults.transformResponse
            };
          var headers = mergeHeaders(requestConfig);
          extend(config, requestConfig);
          config.headers = headers;
          config.method = uppercase(config.method);
          var xsrfValue = urlIsSameOrigin(config.url) ? $browser.cookies()[config.xsrfCookieName || defaults.xsrfCookieName] : undefined;
          if (xsrfValue) {
            headers[config.xsrfHeaderName || defaults.xsrfHeaderName] = xsrfValue;
          }
          var serverRequest = function (config) {
            headers = config.headers;
            var reqData = transformData(config.data, headersGetter(headers), config.transformRequest);
            if (isUndefined(config.data)) {
              forEach(headers, function (value, header) {
                if (lowercase(header) === 'content-type') {
                  delete headers[header];
                }
              });
            }
            if (isUndefined(config.withCredentials) && !isUndefined(defaults.withCredentials)) {
              config.withCredentials = defaults.withCredentials;
            }
            return sendReq(config, reqData, headers).then(transformResponse, transformResponse);
          };
          var chain = [
              serverRequest,
              undefined
            ];
          var promise = $q.when(config);
          forEach(reversedInterceptors, function (interceptor) {
            if (interceptor.request || interceptor.requestError) {
              chain.unshift(interceptor.request, interceptor.requestError);
            }
            if (interceptor.response || interceptor.responseError) {
              chain.push(interceptor.response, interceptor.responseError);
            }
          });
          while (chain.length) {
            var thenFn = chain.shift();
            var rejectFn = chain.shift();
            promise = promise.then(thenFn, rejectFn);
          }
          promise.success = function (fn) {
            promise.then(function (response) {
              fn(response.data, response.status, response.headers, config);
            });
            return promise;
          };
          promise.error = function (fn) {
            promise.then(null, function (response) {
              fn(response.data, response.status, response.headers, config);
            });
            return promise;
          };
          return promise;
          function transformResponse(response) {
            var resp = extend({}, response, { data: transformData(response.data, response.headers, config.transformResponse) });
            return isSuccess(response.status) ? resp : $q.reject(resp);
          }
          function mergeHeaders(config) {
            var defHeaders = defaults.headers, reqHeaders = extend({}, config.headers), defHeaderName, lowercaseDefHeaderName, reqHeaderName;
            defHeaders = extend({}, defHeaders.common, defHeaders[lowercase(config.method)]);
            execHeaders(defHeaders);
            execHeaders(reqHeaders);
            defaultHeadersIteration:
              for (defHeaderName in defHeaders) {
                lowercaseDefHeaderName = lowercase(defHeaderName);
                for (reqHeaderName in reqHeaders) {
                  if (lowercase(reqHeaderName) === lowercaseDefHeaderName) {
                    continue defaultHeadersIteration;
                  }
                }
                reqHeaders[defHeaderName] = defHeaders[defHeaderName];
              }
            return reqHeaders;
            function execHeaders(headers) {
              var headerContent;
              forEach(headers, function (headerFn, header) {
                if (isFunction(headerFn)) {
                  headerContent = headerFn();
                  if (headerContent != null) {
                    headers[header] = headerContent;
                  } else {
                    delete headers[header];
                  }
                }
              });
            }
          }
        }
        $http.pendingRequests = [];
        createShortMethods('get', 'delete', 'head', 'jsonp');
        createShortMethodsWithData('post', 'put');
        $http.defaults = defaults;
        return $http;
        function createShortMethods(names) {
          forEach(arguments, function (name) {
            $http[name] = function (url, config) {
              return $http(extend(config || {}, {
                method: name,
                url: url
              }));
            };
          });
        }
        function createShortMethodsWithData(name) {
          forEach(arguments, function (name) {
            $http[name] = function (url, data, config) {
              return $http(extend(config || {}, {
                method: name,
                url: url,
                data: data
              }));
            };
          });
        }
        function sendReq(config, reqData, reqHeaders) {
          var deferred = $q.defer(), promise = deferred.promise, cache, cachedResp, url = buildUrl(config.url, config.params);
          $http.pendingRequests.push(config);
          promise.then(removePendingReq, removePendingReq);
          if ((config.cache || defaults.cache) && config.cache !== false && config.method == 'GET') {
            cache = isObject(config.cache) ? config.cache : isObject(defaults.cache) ? defaults.cache : defaultCache;
          }
          if (cache) {
            cachedResp = cache.get(url);
            if (isDefined(cachedResp)) {
              if (cachedResp.then) {
                cachedResp.then(removePendingReq, removePendingReq);
                return cachedResp;
              } else {
                if (isArray(cachedResp)) {
                  resolvePromise(cachedResp[1], cachedResp[0], copy(cachedResp[2]), cachedResp[3]);
                } else {
                  resolvePromise(cachedResp, 200, {}, 'OK');
                }
              }
            } else {
              cache.put(url, promise);
            }
          }
          if (isUndefined(cachedResp)) {
            $httpBackend(config.method, url, reqData, done, reqHeaders, config.timeout, config.withCredentials, config.responseType);
          }
          return promise;
          function done(status, response, headersString, statusText) {
            if (cache) {
              if (isSuccess(status)) {
                cache.put(url, [
                  status,
                  response,
                  parseHeaders(headersString),
                  statusText
                ]);
              } else {
                cache.remove(url);
              }
            }
            resolvePromise(response, status, headersString, statusText);
            if (!$rootScope.$$phase)
              $rootScope.$apply();
          }
          function resolvePromise(response, status, headers, statusText) {
            status = Math.max(status, 0);
            (isSuccess(status) ? deferred.resolve : deferred.reject)({
              data: response,
              status: status,
              headers: headersGetter(headers),
              config: config,
              statusText: statusText
            });
          }
          function removePendingReq() {
            var idx = indexOf($http.pendingRequests, config);
            if (idx !== -1)
              $http.pendingRequests.splice(idx, 1);
          }
        }
        function buildUrl(url, params) {
          if (!params)
            return url;
          var parts = [];
          forEachSorted(params, function (value, key) {
            if (value === null || isUndefined(value))
              return;
            if (!isArray(value))
              value = [value];
            forEach(value, function (v) {
              if (isObject(v)) {
                v = toJson(v);
              }
              parts.push(encodeUriQuery(key) + '=' + encodeUriQuery(v));
            });
          });
          if (parts.length > 0) {
            url += (url.indexOf('?') == -1 ? '?' : '&') + parts.join('&');
          }
          return url;
        }
      }
    ];
  }
  function createXhr(method) {
    if (msie <= 8 && (!method.match(/^(get|post|head|put|delete|options)$/i) || !window.XMLHttpRequest)) {
      return new window.ActiveXObject('Microsoft.XMLHTTP');
    } else if (window.XMLHttpRequest) {
      return new window.XMLHttpRequest();
    }
    throw minErr('$httpBackend')('noxhr', 'This browser does not support XMLHttpRequest.');
  }
  function $HttpBackendProvider() {
    this.$get = [
      '$browser',
      '$window',
      '$document',
      function ($browser, $window, $document) {
        return createHttpBackend($browser, createXhr, $browser.defer, $window.angular.callbacks, $document[0]);
      }
    ];
  }
  function createHttpBackend($browser, createXhr, $browserDefer, callbacks, rawDocument) {
    var ABORTED = -1;
    return function (method, url, post, callback, headers, timeout, withCredentials, responseType) {
      var status;
      $browser.$$incOutstandingRequestCount();
      url = url || $browser.url();
      if (lowercase(method) == 'jsonp') {
        var callbackId = '_' + (callbacks.counter++).toString(36);
        callbacks[callbackId] = function (data) {
          callbacks[callbackId].data = data;
        };
        var jsonpDone = jsonpReq(url.replace('JSON_CALLBACK', 'angular.callbacks.' + callbackId), function () {
            if (callbacks[callbackId].data) {
              completeRequest(callback, 200, callbacks[callbackId].data);
            } else {
              completeRequest(callback, status || -2);
            }
            callbacks[callbackId] = angular.noop;
          });
      } else {
        var xhr = createXhr(method);
        xhr.open(method, url, true);
        forEach(headers, function (value, key) {
          if (isDefined(value)) {
            xhr.setRequestHeader(key, value);
          }
        });
        xhr.onreadystatechange = function () {
          if (xhr && xhr.readyState == 4) {
            var responseHeaders = null, response = null;
            if (status !== ABORTED) {
              responseHeaders = xhr.getAllResponseHeaders();
              response = 'response' in xhr ? xhr.response : xhr.responseText;
            }
            completeRequest(callback, status || xhr.status, response, responseHeaders, xhr.statusText || '');
          }
        };
        if (withCredentials) {
          xhr.withCredentials = true;
        }
        if (responseType) {
          try {
            xhr.responseType = responseType;
          } catch (e) {
            if (responseType !== 'json') {
              throw e;
            }
          }
        }
        xhr.send(post || null);
      }
      if (timeout > 0) {
        var timeoutId = $browserDefer(timeoutRequest, timeout);
      } else if (timeout && timeout.then) {
        timeout.then(timeoutRequest);
      }
      function timeoutRequest() {
        status = ABORTED;
        jsonpDone && jsonpDone();
        xhr && xhr.abort();
      }
      function completeRequest(callback, status, response, headersString, statusText) {
        timeoutId && $browserDefer.cancel(timeoutId);
        jsonpDone = xhr = null;
        if (status === 0) {
          status = response ? 200 : urlResolve(url).protocol == 'file' ? 404 : 0;
        }
        status = status === 1223 ? 204 : status;
        statusText = statusText || '';
        callback(status, response, headersString, statusText);
        $browser.$$completeOutstandingRequest(noop);
      }
    };
    function jsonpReq(url, done) {
      var script = rawDocument.createElement('script'), doneWrapper = function () {
          script.onreadystatechange = script.onload = script.onerror = null;
          rawDocument.body.removeChild(script);
          if (done)
            done();
        };
      script.type = 'text/javascript';
      script.src = url;
      if (msie && msie <= 8) {
        script.onreadystatechange = function () {
          if (/loaded|complete/.test(script.readyState)) {
            doneWrapper();
          }
        };
      } else {
        script.onload = script.onerror = function () {
          doneWrapper();
        };
      }
      rawDocument.body.appendChild(script);
      return doneWrapper;
    }
  }
  var $interpolateMinErr = minErr('$interpolate');
  function $InterpolateProvider() {
    var startSymbol = '{{';
    var endSymbol = '}}';
    this.startSymbol = function (value) {
      if (value) {
        startSymbol = value;
        return this;
      } else {
        return startSymbol;
      }
    };
    this.endSymbol = function (value) {
      if (value) {
        endSymbol = value;
        return this;
      } else {
        return endSymbol;
      }
    };
    this.$get = [
      '$parse',
      '$exceptionHandler',
      '$sce',
      function ($parse, $exceptionHandler, $sce) {
        var startSymbolLength = startSymbol.length, endSymbolLength = endSymbol.length;
        function $interpolate(text, mustHaveExpression, trustedContext) {
          var startIndex, endIndex, index = 0, parts = [], length = text.length, hasInterpolation = false, fn, exp, concat = [];
          while (index < length) {
            if ((startIndex = text.indexOf(startSymbol, index)) != -1 && (endIndex = text.indexOf(endSymbol, startIndex + startSymbolLength)) != -1) {
              index != startIndex && parts.push(text.substring(index, startIndex));
              parts.push(fn = $parse(exp = text.substring(startIndex + startSymbolLength, endIndex)));
              fn.exp = exp;
              index = endIndex + endSymbolLength;
              hasInterpolation = true;
            } else {
              index != length && parts.push(text.substring(index));
              index = length;
            }
          }
          if (!(length = parts.length)) {
            parts.push('');
            length = 1;
          }
          if (trustedContext && parts.length > 1) {
            throw $interpolateMinErr('noconcat', 'Error while interpolating: {0}\nStrict Contextual Escaping disallows ' + 'interpolations that concatenate multiple expressions when a trusted value is ' + 'required.  See http://docs.angularjs.org/api/ng.$sce', text);
          }
          if (!mustHaveExpression || hasInterpolation) {
            concat.length = length;
            fn = function (context) {
              try {
                for (var i = 0, ii = length, part; i < ii; i++) {
                  if (typeof (part = parts[i]) == 'function') {
                    part = part(context);
                    if (trustedContext) {
                      part = $sce.getTrusted(trustedContext, part);
                    } else {
                      part = $sce.valueOf(part);
                    }
                    if (part === null || isUndefined(part)) {
                      part = '';
                    } else if (typeof part != 'string') {
                      part = toJson(part);
                    }
                  }
                  concat[i] = part;
                }
                return concat.join('');
              } catch (err) {
                var newErr = $interpolateMinErr('interr', 'Can\'t interpolate: {0}\n{1}', text, err.toString());
                $exceptionHandler(newErr);
              }
            };
            fn.exp = text;
            fn.parts = parts;
            return fn;
          }
        }
        $interpolate.startSymbol = function () {
          return startSymbol;
        };
        $interpolate.endSymbol = function () {
          return endSymbol;
        };
        return $interpolate;
      }
    ];
  }
  function $IntervalProvider() {
    this.$get = [
      '$rootScope',
      '$window',
      '$q',
      function ($rootScope, $window, $q) {
        var intervals = {};
        function interval(fn, delay, count, invokeApply) {
          var setInterval = $window.setInterval, clearInterval = $window.clearInterval, deferred = $q.defer(), promise = deferred.promise, iteration = 0, skipApply = isDefined(invokeApply) && !invokeApply;
          count = isDefined(count) ? count : 0;
          promise.then(null, null, fn);
          promise.$$intervalId = setInterval(function tick() {
            deferred.notify(iteration++);
            if (count > 0 && iteration >= count) {
              deferred.resolve(iteration);
              clearInterval(promise.$$intervalId);
              delete intervals[promise.$$intervalId];
            }
            if (!skipApply)
              $rootScope.$apply();
          }, delay);
          intervals[promise.$$intervalId] = deferred;
          return promise;
        }
        interval.cancel = function (promise) {
          if (promise && promise.$$intervalId in intervals) {
            intervals[promise.$$intervalId].reject('canceled');
            clearInterval(promise.$$intervalId);
            delete intervals[promise.$$intervalId];
            return true;
          }
          return false;
        };
        return interval;
      }
    ];
  }
  function $LocaleProvider() {
    this.$get = function () {
      return {
        id: 'en-us',
        NUMBER_FORMATS: {
          DECIMAL_SEP: '.',
          GROUP_SEP: ',',
          PATTERNS: [
            {
              minInt: 1,
              minFrac: 0,
              maxFrac: 3,
              posPre: '',
              posSuf: '',
              negPre: '-',
              negSuf: '',
              gSize: 3,
              lgSize: 3
            },
            {
              minInt: 1,
              minFrac: 2,
              maxFrac: 2,
              posPre: '\xa4',
              posSuf: '',
              negPre: '(\xa4',
              negSuf: ')',
              gSize: 3,
              lgSize: 3
            }
          ],
          CURRENCY_SYM: '$'
        },
        DATETIME_FORMATS: {
          MONTH: 'January,February,March,April,May,June,July,August,September,October,November,December'.split(','),
          SHORTMONTH: 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(','),
          DAY: 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday'.split(','),
          SHORTDAY: 'Sun,Mon,Tue,Wed,Thu,Fri,Sat'.split(','),
          AMPMS: [
            'AM',
            'PM'
          ],
          medium: 'MMM d, y h:mm:ss a',
          short: 'M/d/yy h:mm a',
          fullDate: 'EEEE, MMMM d, y',
          longDate: 'MMMM d, y',
          mediumDate: 'MMM d, y',
          shortDate: 'M/d/yy',
          mediumTime: 'h:mm:ss a',
          shortTime: 'h:mm a'
        },
        pluralCat: function (num) {
          if (num === 1) {
            return 'one';
          }
          return 'other';
        }
      };
    };
  }
  var PATH_MATCH = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, DEFAULT_PORTS = {
      'http': 80,
      'https': 443,
      'ftp': 21
    };
  var $locationMinErr = minErr('$location');
  function encodePath(path) {
    var segments = path.split('/'), i = segments.length;
    while (i--) {
      segments[i] = encodeUriSegment(segments[i]);
    }
    return segments.join('/');
  }
  function parseAbsoluteUrl(absoluteUrl, locationObj, appBase) {
    var parsedUrl = urlResolve(absoluteUrl, appBase);
    locationObj.$$protocol = parsedUrl.protocol;
    locationObj.$$host = parsedUrl.hostname;
    locationObj.$$port = int(parsedUrl.port) || DEFAULT_PORTS[parsedUrl.protocol] || null;
  }
  function parseAppUrl(relativeUrl, locationObj, appBase) {
    var prefixed = relativeUrl.charAt(0) !== '/';
    if (prefixed) {
      relativeUrl = '/' + relativeUrl;
    }
    var match = urlResolve(relativeUrl, appBase);
    locationObj.$$path = decodeURIComponent(prefixed && match.pathname.charAt(0) === '/' ? match.pathname.substring(1) : match.pathname);
    locationObj.$$search = parseKeyValue(match.search);
    locationObj.$$hash = decodeURIComponent(match.hash);
    if (locationObj.$$path && locationObj.$$path.charAt(0) != '/') {
      locationObj.$$path = '/' + locationObj.$$path;
    }
  }
  function beginsWith(begin, whole) {
    if (whole.indexOf(begin) === 0) {
      return whole.substr(begin.length);
    }
  }
  function stripHash(url) {
    var index = url.indexOf('#');
    return index == -1 ? url : url.substr(0, index);
  }
  function stripFile(url) {
    return url.substr(0, stripHash(url).lastIndexOf('/') + 1);
  }
  function serverBase(url) {
    return url.substring(0, url.indexOf('/', url.indexOf('//') + 2));
  }
  function LocationHtml5Url(appBase, basePrefix) {
    this.$$html5 = true;
    basePrefix = basePrefix || '';
    var appBaseNoFile = stripFile(appBase);
    parseAbsoluteUrl(appBase, this, appBase);
    this.$$parse = function (url) {
      var pathUrl = beginsWith(appBaseNoFile, url);
      if (!isString(pathUrl)) {
        throw $locationMinErr('ipthprfx', 'Invalid url "{0}", missing path prefix "{1}".', url, appBaseNoFile);
      }
      parseAppUrl(pathUrl, this, appBase);
      if (!this.$$path) {
        this.$$path = '/';
      }
      this.$$compose();
    };
    this.$$compose = function () {
      var search = toKeyValue(this.$$search), hash = this.$$hash ? '#' + encodeUriSegment(this.$$hash) : '';
      this.$$url = encodePath(this.$$path) + (search ? '?' + search : '') + hash;
      this.$$absUrl = appBaseNoFile + this.$$url.substr(1);
    };
    this.$$rewrite = function (url) {
      var appUrl, prevAppUrl;
      if ((appUrl = beginsWith(appBase, url)) !== undefined) {
        prevAppUrl = appUrl;
        if ((appUrl = beginsWith(basePrefix, appUrl)) !== undefined) {
          return appBaseNoFile + (beginsWith('/', appUrl) || appUrl);
        } else {
          return appBase + prevAppUrl;
        }
      } else if ((appUrl = beginsWith(appBaseNoFile, url)) !== undefined) {
        return appBaseNoFile + appUrl;
      } else if (appBaseNoFile == url + '/') {
        return appBaseNoFile;
      }
    };
  }
  function LocationHashbangUrl(appBase, hashPrefix) {
    var appBaseNoFile = stripFile(appBase);
    parseAbsoluteUrl(appBase, this, appBase);
    this.$$parse = function (url) {
      var withoutBaseUrl = beginsWith(appBase, url) || beginsWith(appBaseNoFile, url);
      var withoutHashUrl = withoutBaseUrl.charAt(0) == '#' ? beginsWith(hashPrefix, withoutBaseUrl) : this.$$html5 ? withoutBaseUrl : '';
      if (!isString(withoutHashUrl)) {
        throw $locationMinErr('ihshprfx', 'Invalid url "{0}", missing hash prefix "{1}".', url, hashPrefix);
      }
      parseAppUrl(withoutHashUrl, this, appBase);
      this.$$path = removeWindowsDriveName(this.$$path, withoutHashUrl, appBase);
      this.$$compose();
      function removeWindowsDriveName(path, url, base) {
        var windowsFilePathExp = /^\/?.*?:(\/.*)/;
        var firstPathSegmentMatch;
        if (url.indexOf(base) === 0) {
          url = url.replace(base, '');
        }
        if (windowsFilePathExp.exec(url)) {
          return path;
        }
        firstPathSegmentMatch = windowsFilePathExp.exec(path);
        return firstPathSegmentMatch ? firstPathSegmentMatch[1] : path;
      }
    };
    this.$$compose = function () {
      var search = toKeyValue(this.$$search), hash = this.$$hash ? '#' + encodeUriSegment(this.$$hash) : '';
      this.$$url = encodePath(this.$$path) + (search ? '?' + search : '') + hash;
      this.$$absUrl = appBase + (this.$$url ? hashPrefix + this.$$url : '');
    };
    this.$$rewrite = function (url) {
      if (stripHash(appBase) == stripHash(url)) {
        return url;
      }
    };
  }
  function LocationHashbangInHtml5Url(appBase, hashPrefix) {
    this.$$html5 = true;
    LocationHashbangUrl.apply(this, arguments);
    var appBaseNoFile = stripFile(appBase);
    this.$$rewrite = function (url) {
      var appUrl;
      if (appBase == stripHash(url)) {
        return url;
      } else if (appUrl = beginsWith(appBaseNoFile, url)) {
        return appBase + hashPrefix + appUrl;
      } else if (appBaseNoFile === url + '/') {
        return appBaseNoFile;
      }
    };
  }
  LocationHashbangInHtml5Url.prototype = LocationHashbangUrl.prototype = LocationHtml5Url.prototype = {
    $$html5: false,
    $$replace: false,
    absUrl: locationGetter('$$absUrl'),
    url: function (url, replace) {
      if (isUndefined(url))
        return this.$$url;
      var match = PATH_MATCH.exec(url);
      if (match[1])
        this.path(decodeURIComponent(match[1]));
      if (match[2] || match[1])
        this.search(match[3] || '');
      this.hash(match[5] || '', replace);
      return this;
    },
    protocol: locationGetter('$$protocol'),
    host: locationGetter('$$host'),
    port: locationGetter('$$port'),
    path: locationGetterSetter('$$path', function (path) {
      return path.charAt(0) == '/' ? path : '/' + path;
    }),
    search: function (search, paramValue) {
      switch (arguments.length) {
      case 0:
        return this.$$search;
      case 1:
        if (isString(search)) {
          this.$$search = parseKeyValue(search);
        } else if (isObject(search)) {
          this.$$search = search;
        } else {
          throw $locationMinErr('isrcharg', 'The first argument of the `$location#search()` call must be a string or an object.');
        }
        break;
      default:
        if (isUndefined(paramValue) || paramValue === null) {
          delete this.$$search[search];
        } else {
          this.$$search[search] = paramValue;
        }
      }
      this.$$compose();
      return this;
    },
    hash: locationGetterSetter('$$hash', identity),
    replace: function () {
      this.$$replace = true;
      return this;
    }
  };
  function locationGetter(property) {
    return function () {
      return this[property];
    };
  }
  function locationGetterSetter(property, preprocess) {
    return function (value) {
      if (isUndefined(value))
        return this[property];
      this[property] = preprocess(value);
      this.$$compose();
      return this;
    };
  }
  function $LocationProvider() {
    var hashPrefix = '', html5Mode = false;
    this.hashPrefix = function (prefix) {
      if (isDefined(prefix)) {
        hashPrefix = prefix;
        return this;
      } else {
        return hashPrefix;
      }
    };
    this.html5Mode = function (mode) {
      if (isDefined(mode)) {
        html5Mode = mode;
        return this;
      } else {
        return html5Mode;
      }
    };
    this.$get = [
      '$rootScope',
      '$browser',
      '$sniffer',
      '$rootElement',
      function ($rootScope, $browser, $sniffer, $rootElement) {
        var $location, LocationMode, baseHref = $browser.baseHref(), initialUrl = $browser.url(), appBase;
        if (html5Mode) {
          appBase = serverBase(initialUrl) + (baseHref || '/');
          LocationMode = $sniffer.history ? LocationHtml5Url : LocationHashbangInHtml5Url;
        } else {
          appBase = stripHash(initialUrl);
          LocationMode = LocationHashbangUrl;
        }
        $location = new LocationMode(appBase, '#' + hashPrefix);
        $location.$$parse($location.$$rewrite(initialUrl));
        $rootElement.on('click', function (event) {
          if (event.ctrlKey || event.metaKey || event.which == 2)
            return;
          var elm = jqLite(event.target);
          while (lowercase(elm[0].nodeName) !== 'a') {
            if (elm[0] === $rootElement[0] || !(elm = elm.parent())[0])
              return;
          }
          var absHref = elm.prop('href');
          if (isObject(absHref) && absHref.toString() === '[object SVGAnimatedString]') {
            absHref = urlResolve(absHref.animVal).href;
          }
          var rewrittenUrl = $location.$$rewrite(absHref);
          if (absHref && !elm.attr('target') && rewrittenUrl && !event.isDefaultPrevented()) {
            event.preventDefault();
            if (rewrittenUrl != $browser.url()) {
              $location.$$parse(rewrittenUrl);
              $rootScope.$apply();
              window.angular['ff-684208-preventDefault'] = true;
            }
          }
        });
        if ($location.absUrl() != initialUrl) {
          $browser.url($location.absUrl(), true);
        }
        $browser.onUrlChange(function (newUrl) {
          if ($location.absUrl() != newUrl) {
            $rootScope.$evalAsync(function () {
              var oldUrl = $location.absUrl();
              $location.$$parse(newUrl);
              if ($rootScope.$broadcast('$locationChangeStart', newUrl, oldUrl).defaultPrevented) {
                $location.$$parse(oldUrl);
                $browser.url(oldUrl);
              } else {
                afterLocationChange(oldUrl);
              }
            });
            if (!$rootScope.$$phase)
              $rootScope.$digest();
          }
        });
        var changeCounter = 0;
        $rootScope.$watch(function $locationWatch() {
          var oldUrl = $browser.url();
          var currentReplace = $location.$$replace;
          if (!changeCounter || oldUrl != $location.absUrl()) {
            changeCounter++;
            $rootScope.$evalAsync(function () {
              if ($rootScope.$broadcast('$locationChangeStart', $location.absUrl(), oldUrl).defaultPrevented) {
                $location.$$parse(oldUrl);
              } else {
                $browser.url($location.absUrl(), currentReplace);
                afterLocationChange(oldUrl);
              }
            });
          }
          $location.$$replace = false;
          return changeCounter;
        });
        return $location;
        function afterLocationChange(oldUrl) {
          $rootScope.$broadcast('$locationChangeSuccess', $location.absUrl(), oldUrl);
        }
      }
    ];
  }
  function $LogProvider() {
    var debug = true, self = this;
    this.debugEnabled = function (flag) {
      if (isDefined(flag)) {
        debug = flag;
        return this;
      } else {
        return debug;
      }
    };
    this.$get = [
      '$window',
      function ($window) {
        return {
          log: consoleLog('log'),
          info: consoleLog('info'),
          warn: consoleLog('warn'),
          error: consoleLog('error'),
          debug: function () {
            var fn = consoleLog('debug');
            return function () {
              if (debug) {
                fn.apply(self, arguments);
              }
            };
          }()
        };
        function formatError(arg) {
          if (arg instanceof Error) {
            if (arg.stack) {
              arg = arg.message && arg.stack.indexOf(arg.message) === -1 ? 'Error: ' + arg.message + '\n' + arg.stack : arg.stack;
            } else if (arg.sourceURL) {
              arg = arg.message + '\n' + arg.sourceURL + ':' + arg.line;
            }
          }
          return arg;
        }
        function consoleLog(type) {
          var console = $window.console || {}, logFn = console[type] || console.log || noop, hasApply = false;
          try {
            hasApply = !!logFn.apply;
          } catch (e) {
          }
          if (hasApply) {
            return function () {
              var args = [];
              forEach(arguments, function (arg) {
                args.push(formatError(arg));
              });
              return logFn.apply(console, args);
            };
          }
          return function (arg1, arg2) {
            logFn(arg1, arg2 == null ? '' : arg2);
          };
        }
      }
    ];
  }
  var $parseMinErr = minErr('$parse');
  var promiseWarningCache = {};
  var promiseWarning;
  function ensureSafeMemberName(name, fullExpression) {
    if (name === 'constructor') {
      throw $parseMinErr('isecfld', 'Referencing "constructor" field in Angular expressions is disallowed! Expression: {0}', fullExpression);
    }
    return name;
  }
  function ensureSafeObject(obj, fullExpression) {
    if (obj) {
      if (obj.constructor === obj) {
        throw $parseMinErr('isecfn', 'Referencing Function in Angular expressions is disallowed! Expression: {0}', fullExpression);
      } else if (obj.document && obj.location && obj.alert && obj.setInterval) {
        throw $parseMinErr('isecwindow', 'Referencing the Window in Angular expressions is disallowed! Expression: {0}', fullExpression);
      } else if (obj.children && (obj.nodeName || obj.prop && obj.attr && obj.find)) {
        throw $parseMinErr('isecdom', 'Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}', fullExpression);
      }
    }
    return obj;
  }
  var OPERATORS = {
      'null': function () {
        return null;
      },
      'true': function () {
        return true;
      },
      'false': function () {
        return false;
      },
      undefined: noop,
      '+': function (self, locals, a, b) {
        a = a(self, locals);
        b = b(self, locals);
        if (isDefined(a)) {
          if (isDefined(b)) {
            return a + b;
          }
          return a;
        }
        return isDefined(b) ? b : undefined;
      },
      '-': function (self, locals, a, b) {
        a = a(self, locals);
        b = b(self, locals);
        return (isDefined(a) ? a : 0) - (isDefined(b) ? b : 0);
      },
      '*': function (self, locals, a, b) {
        return a(self, locals) * b(self, locals);
      },
      '/': function (self, locals, a, b) {
        return a(self, locals) / b(self, locals);
      },
      '%': function (self, locals, a, b) {
        return a(self, locals) % b(self, locals);
      },
      '^': function (self, locals, a, b) {
        return a(self, locals) ^ b(self, locals);
      },
      '=': noop,
      '===': function (self, locals, a, b) {
        return a(self, locals) === b(self, locals);
      },
      '!==': function (self, locals, a, b) {
        return a(self, locals) !== b(self, locals);
      },
      '==': function (self, locals, a, b) {
        return a(self, locals) == b(self, locals);
      },
      '!=': function (self, locals, a, b) {
        return a(self, locals) != b(self, locals);
      },
      '<': function (self, locals, a, b) {
        return a(self, locals) < b(self, locals);
      },
      '>': function (self, locals, a, b) {
        return a(self, locals) > b(self, locals);
      },
      '<=': function (self, locals, a, b) {
        return a(self, locals) <= b(self, locals);
      },
      '>=': function (self, locals, a, b) {
        return a(self, locals) >= b(self, locals);
      },
      '&&': function (self, locals, a, b) {
        return a(self, locals) && b(self, locals);
      },
      '||': function (self, locals, a, b) {
        return a(self, locals) || b(self, locals);
      },
      '&': function (self, locals, a, b) {
        return a(self, locals) & b(self, locals);
      },
      '|': function (self, locals, a, b) {
        return b(self, locals)(self, locals, a(self, locals));
      },
      '!': function (self, locals, a) {
        return !a(self, locals);
      }
    };
  var ESCAPE = {
      'n': '\n',
      'f': '\f',
      'r': '\r',
      't': '\t',
      'v': '\x0B',
      '\'': '\'',
      '"': '"'
    };
  var Lexer = function (options) {
    this.options = options;
  };
  Lexer.prototype = {
    constructor: Lexer,
    lex: function (text) {
      this.text = text;
      this.index = 0;
      this.ch = undefined;
      this.lastCh = ':';
      this.tokens = [];
      var token;
      var json = [];
      while (this.index < this.text.length) {
        this.ch = this.text.charAt(this.index);
        if (this.is('"\'')) {
          this.readString(this.ch);
        } else if (this.isNumber(this.ch) || this.is('.') && this.isNumber(this.peek())) {
          this.readNumber();
        } else if (this.isIdent(this.ch)) {
          this.readIdent();
          if (this.was('{,') && json[0] === '{' && (token = this.tokens[this.tokens.length - 1])) {
            token.json = token.text.indexOf('.') === -1;
          }
        } else if (this.is('(){}[].,;:?')) {
          this.tokens.push({
            index: this.index,
            text: this.ch,
            json: this.was(':[,') && this.is('{[') || this.is('}]:,')
          });
          if (this.is('{['))
            json.unshift(this.ch);
          if (this.is('}]'))
            json.shift();
          this.index++;
        } else if (this.isWhitespace(this.ch)) {
          this.index++;
          continue;
        } else {
          var ch2 = this.ch + this.peek();
          var ch3 = ch2 + this.peek(2);
          var fn = OPERATORS[this.ch];
          var fn2 = OPERATORS[ch2];
          var fn3 = OPERATORS[ch3];
          if (fn3) {
            this.tokens.push({
              index: this.index,
              text: ch3,
              fn: fn3
            });
            this.index += 3;
          } else if (fn2) {
            this.tokens.push({
              index: this.index,
              text: ch2,
              fn: fn2
            });
            this.index += 2;
          } else if (fn) {
            this.tokens.push({
              index: this.index,
              text: this.ch,
              fn: fn,
              json: this.was('[,:') && this.is('+-')
            });
            this.index += 1;
          } else {
            this.throwError('Unexpected next character ', this.index, this.index + 1);
          }
        }
        this.lastCh = this.ch;
      }
      return this.tokens;
    },
    is: function (chars) {
      return chars.indexOf(this.ch) !== -1;
    },
    was: function (chars) {
      return chars.indexOf(this.lastCh) !== -1;
    },
    peek: function (i) {
      var num = i || 1;
      return this.index + num < this.text.length ? this.text.charAt(this.index + num) : false;
    },
    isNumber: function (ch) {
      return '0' <= ch && ch <= '9';
    },
    isWhitespace: function (ch) {
      return ch === ' ' || ch === '\r' || ch === '\t' || ch === '\n' || ch === '\x0B' || ch === '\xa0';
    },
    isIdent: function (ch) {
      return 'a' <= ch && ch <= 'z' || 'A' <= ch && ch <= 'Z' || '_' === ch || ch === '$';
    },
    isExpOperator: function (ch) {
      return ch === '-' || ch === '+' || this.isNumber(ch);
    },
    throwError: function (error, start, end) {
      end = end || this.index;
      var colStr = isDefined(start) ? 's ' + start + '-' + this.index + ' [' + this.text.substring(start, end) + ']' : ' ' + end;
      throw $parseMinErr('lexerr', 'Lexer Error: {0} at column{1} in expression [{2}].', error, colStr, this.text);
    },
    readNumber: function () {
      var number = '';
      var start = this.index;
      while (this.index < this.text.length) {
        var ch = lowercase(this.text.charAt(this.index));
        if (ch == '.' || this.isNumber(ch)) {
          number += ch;
        } else {
          var peekCh = this.peek();
          if (ch == 'e' && this.isExpOperator(peekCh)) {
            number += ch;
          } else if (this.isExpOperator(ch) && peekCh && this.isNumber(peekCh) && number.charAt(number.length - 1) == 'e') {
            number += ch;
          } else if (this.isExpOperator(ch) && (!peekCh || !this.isNumber(peekCh)) && number.charAt(number.length - 1) == 'e') {
            this.throwError('Invalid exponent');
          } else {
            break;
          }
        }
        this.index++;
      }
      number = 1 * number;
      this.tokens.push({
        index: start,
        text: number,
        json: true,
        fn: function () {
          return number;
        }
      });
    },
    readIdent: function () {
      var parser = this;
      var ident = '';
      var start = this.index;
      var lastDot, peekIndex, methodName, ch;
      while (this.index < this.text.length) {
        ch = this.text.charAt(this.index);
        if (ch === '.' || this.isIdent(ch) || this.isNumber(ch)) {
          if (ch === '.')
            lastDot = this.index;
          ident += ch;
        } else {
          break;
        }
        this.index++;
      }
      if (lastDot) {
        peekIndex = this.index;
        while (peekIndex < this.text.length) {
          ch = this.text.charAt(peekIndex);
          if (ch === '(') {
            methodName = ident.substr(lastDot - start + 1);
            ident = ident.substr(0, lastDot - start);
            this.index = peekIndex;
            break;
          }
          if (this.isWhitespace(ch)) {
            peekIndex++;
          } else {
            break;
          }
        }
      }
      var token = {
          index: start,
          text: ident
        };
      if (OPERATORS.hasOwnProperty(ident)) {
        token.fn = OPERATORS[ident];
        token.json = OPERATORS[ident];
      } else {
        var getter = getterFn(ident, this.options, this.text);
        token.fn = extend(function (self, locals) {
          return getter(self, locals);
        }, {
          assign: function (self, value) {
            return setter(self, ident, value, parser.text, parser.options);
          }
        });
      }
      this.tokens.push(token);
      if (methodName) {
        this.tokens.push({
          index: lastDot,
          text: '.',
          json: false
        });
        this.tokens.push({
          index: lastDot + 1,
          text: methodName,
          json: false
        });
      }
    },
    readString: function (quote) {
      var start = this.index;
      this.index++;
      var string = '';
      var rawString = quote;
      var escape = false;
      while (this.index < this.text.length) {
        var ch = this.text.charAt(this.index);
        rawString += ch;
        if (escape) {
          if (ch === 'u') {
            var hex = this.text.substring(this.index + 1, this.index + 5);
            if (!hex.match(/[\da-f]{4}/i))
              this.throwError('Invalid unicode escape [\\u' + hex + ']');
            this.index += 4;
            string += String.fromCharCode(parseInt(hex, 16));
          } else {
            var rep = ESCAPE[ch];
            if (rep) {
              string += rep;
            } else {
              string += ch;
            }
          }
          escape = false;
        } else if (ch === '\\') {
          escape = true;
        } else if (ch === quote) {
          this.index++;
          this.tokens.push({
            index: start,
            text: rawString,
            string: string,
            json: true,
            fn: function () {
              return string;
            }
          });
          return;
        } else {
          string += ch;
        }
        this.index++;
      }
      this.throwError('Unterminated quote', start);
    }
  };
  var Parser = function (lexer, $filter, options) {
    this.lexer = lexer;
    this.$filter = $filter;
    this.options = options;
  };
  Parser.ZERO = extend(function () {
    return 0;
  }, { constant: true });
  Parser.prototype = {
    constructor: Parser,
    parse: function (text, json) {
      this.text = text;
      this.json = json;
      this.tokens = this.lexer.lex(text);
      if (json) {
        this.assignment = this.logicalOR;
        this.functionCall = this.fieldAccess = this.objectIndex = this.filterChain = function () {
          this.throwError('is not valid json', {
            text: text,
            index: 0
          });
        };
      }
      var value = json ? this.primary() : this.statements();
      if (this.tokens.length !== 0) {
        this.throwError('is an unexpected token', this.tokens[0]);
      }
      value.literal = !!value.literal;
      value.constant = !!value.constant;
      return value;
    },
    primary: function () {
      var primary;
      if (this.expect('(')) {
        primary = this.filterChain();
        this.consume(')');
      } else if (this.expect('[')) {
        primary = this.arrayDeclaration();
      } else if (this.expect('{')) {
        primary = this.object();
      } else {
        var token = this.expect();
        primary = token.fn;
        if (!primary) {
          this.throwError('not a primary expression', token);
        }
        if (token.json) {
          primary.constant = true;
          primary.literal = true;
        }
      }
      var next, context;
      while (next = this.expect('(', '[', '.')) {
        if (next.text === '(') {
          primary = this.functionCall(primary, context);
          context = null;
        } else if (next.text === '[') {
          context = primary;
          primary = this.objectIndex(primary);
        } else if (next.text === '.') {
          context = primary;
          primary = this.fieldAccess(primary);
        } else {
          this.throwError('IMPOSSIBLE');
        }
      }
      return primary;
    },
    throwError: function (msg, token) {
      throw $parseMinErr('syntax', 'Syntax Error: Token \'{0}\' {1} at column {2} of the expression [{3}] starting at [{4}].', token.text, msg, token.index + 1, this.text, this.text.substring(token.index));
    },
    peekToken: function () {
      if (this.tokens.length === 0)
        throw $parseMinErr('ueoe', 'Unexpected end of expression: {0}', this.text);
      return this.tokens[0];
    },
    peek: function (e1, e2, e3, e4) {
      if (this.tokens.length > 0) {
        var token = this.tokens[0];
        var t = token.text;
        if (t === e1 || t === e2 || t === e3 || t === e4 || !e1 && !e2 && !e3 && !e4) {
          return token;
        }
      }
      return false;
    },
    expect: function (e1, e2, e3, e4) {
      var token = this.peek(e1, e2, e3, e4);
      if (token) {
        if (this.json && !token.json) {
          this.throwError('is not valid json', token);
        }
        this.tokens.shift();
        return token;
      }
      return false;
    },
    consume: function (e1) {
      if (!this.expect(e1)) {
        this.throwError('is unexpected, expecting [' + e1 + ']', this.peek());
      }
    },
    unaryFn: function (fn, right) {
      return extend(function (self, locals) {
        return fn(self, locals, right);
      }, { constant: right.constant });
    },
    ternaryFn: function (left, middle, right) {
      return extend(function (self, locals) {
        return left(self, locals) ? middle(self, locals) : right(self, locals);
      }, { constant: left.constant && middle.constant && right.constant });
    },
    binaryFn: function (left, fn, right) {
      return extend(function (self, locals) {
        return fn(self, locals, left, right);
      }, { constant: left.constant && right.constant });
    },
    statements: function () {
      var statements = [];
      while (true) {
        if (this.tokens.length > 0 && !this.peek('}', ')', ';', ']'))
          statements.push(this.filterChain());
        if (!this.expect(';')) {
          return statements.length === 1 ? statements[0] : function (self, locals) {
            var value;
            for (var i = 0; i < statements.length; i++) {
              var statement = statements[i];
              if (statement) {
                value = statement(self, locals);
              }
            }
            return value;
          };
        }
      }
    },
    filterChain: function () {
      var left = this.expression();
      var token;
      while (true) {
        if (token = this.expect('|')) {
          left = this.binaryFn(left, token.fn, this.filter());
        } else {
          return left;
        }
      }
    },
    filter: function () {
      var token = this.expect();
      var fn = this.$filter(token.text);
      var argsFn = [];
      while (true) {
        if (token = this.expect(':')) {
          argsFn.push(this.expression());
        } else {
          var fnInvoke = function (self, locals, input) {
            var args = [input];
            for (var i = 0; i < argsFn.length; i++) {
              args.push(argsFn[i](self, locals));
            }
            return fn.apply(self, args);
          };
          return function () {
            return fnInvoke;
          };
        }
      }
    },
    expression: function () {
      return this.assignment();
    },
    assignment: function () {
      var left = this.ternary();
      var right;
      var token;
      if (token = this.expect('=')) {
        if (!left.assign) {
          this.throwError('implies assignment but [' + this.text.substring(0, token.index) + '] can not be assigned to', token);
        }
        right = this.ternary();
        return function (scope, locals) {
          return left.assign(scope, right(scope, locals), locals);
        };
      }
      return left;
    },
    ternary: function () {
      var left = this.logicalOR();
      var middle;
      var token;
      if (token = this.expect('?')) {
        middle = this.ternary();
        if (token = this.expect(':')) {
          return this.ternaryFn(left, middle, this.ternary());
        } else {
          this.throwError('expected :', token);
        }
      } else {
        return left;
      }
    },
    logicalOR: function () {
      var left = this.logicalAND();
      var token;
      while (true) {
        if (token = this.expect('||')) {
          left = this.binaryFn(left, token.fn, this.logicalAND());
        } else {
          return left;
        }
      }
    },
    logicalAND: function () {
      var left = this.equality();
      var token;
      if (token = this.expect('&&')) {
        left = this.binaryFn(left, token.fn, this.logicalAND());
      }
      return left;
    },
    equality: function () {
      var left = this.relational();
      var token;
      if (token = this.expect('==', '!=', '===', '!==')) {
        left = this.binaryFn(left, token.fn, this.equality());
      }
      return left;
    },
    relational: function () {
      var left = this.additive();
      var token;
      if (token = this.expect('<', '>', '<=', '>=')) {
        left = this.binaryFn(left, token.fn, this.relational());
      }
      return left;
    },
    additive: function () {
      var left = this.multiplicative();
      var token;
      while (token = this.expect('+', '-')) {
        left = this.binaryFn(left, token.fn, this.multiplicative());
      }
      return left;
    },
    multiplicative: function () {
      var left = this.unary();
      var token;
      while (token = this.expect('*', '/', '%')) {
        left = this.binaryFn(left, token.fn, this.unary());
      }
      return left;
    },
    unary: function () {
      var token;
      if (this.expect('+')) {
        return this.primary();
      } else if (token = this.expect('-')) {
        return this.binaryFn(Parser.ZERO, token.fn, this.unary());
      } else if (token = this.expect('!')) {
        return this.unaryFn(token.fn, this.unary());
      } else {
        return this.primary();
      }
    },
    fieldAccess: function (object) {
      var parser = this;
      var field = this.expect().text;
      var getter = getterFn(field, this.options, this.text);
      return extend(function (scope, locals, self) {
        return getter(self || object(scope, locals));
      }, {
        assign: function (scope, value, locals) {
          return setter(object(scope, locals), field, value, parser.text, parser.options);
        }
      });
    },
    objectIndex: function (obj) {
      var parser = this;
      var indexFn = this.expression();
      this.consume(']');
      return extend(function (self, locals) {
        var o = obj(self, locals), i = indexFn(self, locals), v, p;
        if (!o)
          return undefined;
        v = ensureSafeObject(o[i], parser.text);
        if (v && v.then && parser.options.unwrapPromises) {
          p = v;
          if (!('$$v' in v)) {
            p.$$v = undefined;
            p.then(function (val) {
              p.$$v = val;
            });
          }
          v = v.$$v;
        }
        return v;
      }, {
        assign: function (self, value, locals) {
          var key = indexFn(self, locals);
          var safe = ensureSafeObject(obj(self, locals), parser.text);
          return safe[key] = value;
        }
      });
    },
    functionCall: function (fn, contextGetter) {
      var argsFn = [];
      if (this.peekToken().text !== ')') {
        do {
          argsFn.push(this.expression());
        } while (this.expect(','));
      }
      this.consume(')');
      var parser = this;
      return function (scope, locals) {
        var args = [];
        var context = contextGetter ? contextGetter(scope, locals) : scope;
        for (var i = 0; i < argsFn.length; i++) {
          args.push(argsFn[i](scope, locals));
        }
        var fnPtr = fn(scope, locals, context) || noop;
        ensureSafeObject(context, parser.text);
        ensureSafeObject(fnPtr, parser.text);
        var v = fnPtr.apply ? fnPtr.apply(context, args) : fnPtr(args[0], args[1], args[2], args[3], args[4]);
        return ensureSafeObject(v, parser.text);
      };
    },
    arrayDeclaration: function () {
      var elementFns = [];
      var allConstant = true;
      if (this.peekToken().text !== ']') {
        do {
          if (this.peek(']')) {
            break;
          }
          var elementFn = this.expression();
          elementFns.push(elementFn);
          if (!elementFn.constant) {
            allConstant = false;
          }
        } while (this.expect(','));
      }
      this.consume(']');
      return extend(function (self, locals) {
        var array = [];
        for (var i = 0; i < elementFns.length; i++) {
          array.push(elementFns[i](self, locals));
        }
        return array;
      }, {
        literal: true,
        constant: allConstant
      });
    },
    object: function () {
      var keyValues = [];
      var allConstant = true;
      if (this.peekToken().text !== '}') {
        do {
          if (this.peek('}')) {
            break;
          }
          var token = this.expect(), key = token.string || token.text;
          this.consume(':');
          var value = this.expression();
          keyValues.push({
            key: key,
            value: value
          });
          if (!value.constant) {
            allConstant = false;
          }
        } while (this.expect(','));
      }
      this.consume('}');
      return extend(function (self, locals) {
        var object = {};
        for (var i = 0; i < keyValues.length; i++) {
          var keyValue = keyValues[i];
          object[keyValue.key] = keyValue.value(self, locals);
        }
        return object;
      }, {
        literal: true,
        constant: allConstant
      });
    }
  };
  function setter(obj, path, setValue, fullExp, options) {
    options = options || {};
    var element = path.split('.'), key;
    for (var i = 0; element.length > 1; i++) {
      key = ensureSafeMemberName(element.shift(), fullExp);
      var propertyObj = obj[key];
      if (!propertyObj) {
        propertyObj = {};
        obj[key] = propertyObj;
      }
      obj = propertyObj;
      if (obj.then && options.unwrapPromises) {
        promiseWarning(fullExp);
        if (!('$$v' in obj)) {
          (function (promise) {
            promise.then(function (val) {
              promise.$$v = val;
            });
          }(obj));
        }
        if (obj.$$v === undefined) {
          obj.$$v = {};
        }
        obj = obj.$$v;
      }
    }
    key = ensureSafeMemberName(element.shift(), fullExp);
    obj[key] = setValue;
    return setValue;
  }
  var getterFnCache = {};
  function cspSafeGetterFn(key0, key1, key2, key3, key4, fullExp, options) {
    ensureSafeMemberName(key0, fullExp);
    ensureSafeMemberName(key1, fullExp);
    ensureSafeMemberName(key2, fullExp);
    ensureSafeMemberName(key3, fullExp);
    ensureSafeMemberName(key4, fullExp);
    return !options.unwrapPromises ? function cspSafeGetter(scope, locals) {
      var pathVal = locals && locals.hasOwnProperty(key0) ? locals : scope;
      if (pathVal == null)
        return pathVal;
      pathVal = pathVal[key0];
      if (!key1)
        return pathVal;
      if (pathVal == null)
        return undefined;
      pathVal = pathVal[key1];
      if (!key2)
        return pathVal;
      if (pathVal == null)
        return undefined;
      pathVal = pathVal[key2];
      if (!key3)
        return pathVal;
      if (pathVal == null)
        return undefined;
      pathVal = pathVal[key3];
      if (!key4)
        return pathVal;
      if (pathVal == null)
        return undefined;
      pathVal = pathVal[key4];
      return pathVal;
    } : function cspSafePromiseEnabledGetter(scope, locals) {
      var pathVal = locals && locals.hasOwnProperty(key0) ? locals : scope, promise;
      if (pathVal == null)
        return pathVal;
      pathVal = pathVal[key0];
      if (pathVal && pathVal.then) {
        promiseWarning(fullExp);
        if (!('$$v' in pathVal)) {
          promise = pathVal;
          promise.$$v = undefined;
          promise.then(function (val) {
            promise.$$v = val;
          });
        }
        pathVal = pathVal.$$v;
      }
      if (!key1)
        return pathVal;
      if (pathVal == null)
        return undefined;
      pathVal = pathVal[key1];
      if (pathVal && pathVal.then) {
        promiseWarning(fullExp);
        if (!('$$v' in pathVal)) {
          promise = pathVal;
          promise.$$v = undefined;
          promise.then(function (val) {
            promise.$$v = val;
          });
        }
        pathVal = pathVal.$$v;
      }
      if (!key2)
        return pathVal;
      if (pathVal == null)
        return undefined;
      pathVal = pathVal[key2];
      if (pathVal && pathVal.then) {
        promiseWarning(fullExp);
        if (!('$$v' in pathVal)) {
          promise = pathVal;
          promise.$$v = undefined;
          promise.then(function (val) {
            promise.$$v = val;
          });
        }
        pathVal = pathVal.$$v;
      }
      if (!key3)
        return pathVal;
      if (pathVal == null)
        return undefined;
      pathVal = pathVal[key3];
      if (pathVal && pathVal.then) {
        promiseWarning(fullExp);
        if (!('$$v' in pathVal)) {
          promise = pathVal;
          promise.$$v = undefined;
          promise.then(function (val) {
            promise.$$v = val;
          });
        }
        pathVal = pathVal.$$v;
      }
      if (!key4)
        return pathVal;
      if (pathVal == null)
        return undefined;
      pathVal = pathVal[key4];
      if (pathVal && pathVal.then) {
        promiseWarning(fullExp);
        if (!('$$v' in pathVal)) {
          promise = pathVal;
          promise.$$v = undefined;
          promise.then(function (val) {
            promise.$$v = val;
          });
        }
        pathVal = pathVal.$$v;
      }
      return pathVal;
    };
  }
  function simpleGetterFn1(key0, fullExp) {
    ensureSafeMemberName(key0, fullExp);
    return function simpleGetterFn1(scope, locals) {
      if (scope == null)
        return undefined;
      return (locals && locals.hasOwnProperty(key0) ? locals : scope)[key0];
    };
  }
  function simpleGetterFn2(key0, key1, fullExp) {
    ensureSafeMemberName(key0, fullExp);
    ensureSafeMemberName(key1, fullExp);
    return function simpleGetterFn2(scope, locals) {
      if (scope == null)
        return undefined;
      scope = (locals && locals.hasOwnProperty(key0) ? locals : scope)[key0];
      return scope == null ? undefined : scope[key1];
    };
  }
  function getterFn(path, options, fullExp) {
    if (getterFnCache.hasOwnProperty(path)) {
      return getterFnCache[path];
    }
    var pathKeys = path.split('.'), pathKeysLength = pathKeys.length, fn;
    if (!options.unwrapPromises && pathKeysLength === 1) {
      fn = simpleGetterFn1(pathKeys[0], fullExp);
    } else if (!options.unwrapPromises && pathKeysLength === 2) {
      fn = simpleGetterFn2(pathKeys[0], pathKeys[1], fullExp);
    } else if (options.csp) {
      if (pathKeysLength < 6) {
        fn = cspSafeGetterFn(pathKeys[0], pathKeys[1], pathKeys[2], pathKeys[3], pathKeys[4], fullExp, options);
      } else {
        fn = function (scope, locals) {
          var i = 0, val;
          do {
            val = cspSafeGetterFn(pathKeys[i++], pathKeys[i++], pathKeys[i++], pathKeys[i++], pathKeys[i++], fullExp, options)(scope, locals);
            locals = undefined;
            scope = val;
          } while (i < pathKeysLength);
          return val;
        };
      }
    } else {
      var code = 'var p;\n';
      forEach(pathKeys, function (key, index) {
        ensureSafeMemberName(key, fullExp);
        code += 'if(s == null) return undefined;\n' + 's=' + (index ? 's' : '((k&&k.hasOwnProperty("' + key + '"))?k:s)') + '["' + key + '"]' + ';\n' + (options.unwrapPromises ? 'if (s && s.then) {\n' + ' pw("' + fullExp.replace(/(["\r\n])/g, '\\$1') + '");\n' + ' if (!("$$v" in s)) {\n' + ' p=s;\n' + ' p.$$v = undefined;\n' + ' p.then(function(v) {p.$$v=v;});\n' + '}\n' + ' s=s.$$v\n' + '}\n' : '');
      });
      code += 'return s;';
      var evaledFnGetter = new Function('s', 'k', 'pw', code);
      evaledFnGetter.toString = valueFn(code);
      fn = options.unwrapPromises ? function (scope, locals) {
        return evaledFnGetter(scope, locals, promiseWarning);
      } : evaledFnGetter;
    }
    if (path !== 'hasOwnProperty') {
      getterFnCache[path] = fn;
    }
    return fn;
  }
  function $ParseProvider() {
    var cache = {};
    var $parseOptions = {
        csp: false,
        unwrapPromises: false,
        logPromiseWarnings: true
      };
    this.unwrapPromises = function (value) {
      if (isDefined(value)) {
        $parseOptions.unwrapPromises = !!value;
        return this;
      } else {
        return $parseOptions.unwrapPromises;
      }
    };
    this.logPromiseWarnings = function (value) {
      if (isDefined(value)) {
        $parseOptions.logPromiseWarnings = value;
        return this;
      } else {
        return $parseOptions.logPromiseWarnings;
      }
    };
    this.$get = [
      '$filter',
      '$sniffer',
      '$log',
      function ($filter, $sniffer, $log) {
        $parseOptions.csp = $sniffer.csp;
        promiseWarning = function promiseWarningFn(fullExp) {
          if (!$parseOptions.logPromiseWarnings || promiseWarningCache.hasOwnProperty(fullExp))
            return;
          promiseWarningCache[fullExp] = true;
          $log.warn('[$parse] Promise found in the expression `' + fullExp + '`. ' + 'Automatic unwrapping of promises in Angular expressions is deprecated.');
        };
        return function (exp) {
          var parsedExpression;
          switch (typeof exp) {
          case 'string':
            if (cache.hasOwnProperty(exp)) {
              return cache[exp];
            }
            var lexer = new Lexer($parseOptions);
            var parser = new Parser(lexer, $filter, $parseOptions);
            parsedExpression = parser.parse(exp, false);
            if (exp !== 'hasOwnProperty') {
              cache[exp] = parsedExpression;
            }
            return parsedExpression;
          case 'function':
            return exp;
          default:
            return noop;
          }
        };
      }
    ];
  }
  function $QProvider() {
    this.$get = [
      '$rootScope',
      '$exceptionHandler',
      function ($rootScope, $exceptionHandler) {
        return qFactory(function (callback) {
          $rootScope.$evalAsync(callback);
        }, $exceptionHandler);
      }
    ];
  }
  function qFactory(nextTick, exceptionHandler) {
    var defer = function () {
      var pending = [], value, deferred;
      deferred = {
        resolve: function (val) {
          if (pending) {
            var callbacks = pending;
            pending = undefined;
            value = ref(val);
            if (callbacks.length) {
              nextTick(function () {
                var callback;
                for (var i = 0, ii = callbacks.length; i < ii; i++) {
                  callback = callbacks[i];
                  value.then(callback[0], callback[1], callback[2]);
                }
              });
            }
          }
        },
        reject: function (reason) {
          deferred.resolve(createInternalRejectedPromise(reason));
        },
        notify: function (progress) {
          if (pending) {
            var callbacks = pending;
            if (pending.length) {
              nextTick(function () {
                var callback;
                for (var i = 0, ii = callbacks.length; i < ii; i++) {
                  callback = callbacks[i];
                  callback[2](progress);
                }
              });
            }
          }
        },
        promise: {
          then: function (callback, errback, progressback) {
            var result = defer();
            var wrappedCallback = function (value) {
              try {
                result.resolve((isFunction(callback) ? callback : defaultCallback)(value));
              } catch (e) {
                result.reject(e);
                exceptionHandler(e);
              }
            };
            var wrappedErrback = function (reason) {
              try {
                result.resolve((isFunction(errback) ? errback : defaultErrback)(reason));
              } catch (e) {
                result.reject(e);
                exceptionHandler(e);
              }
            };
            var wrappedProgressback = function (progress) {
              try {
                result.notify((isFunction(progressback) ? progressback : defaultCallback)(progress));
              } catch (e) {
                exceptionHandler(e);
              }
            };
            if (pending) {
              pending.push([
                wrappedCallback,
                wrappedErrback,
                wrappedProgressback
              ]);
            } else {
              value.then(wrappedCallback, wrappedErrback, wrappedProgressback);
            }
            return result.promise;
          },
          'catch': function (callback) {
            return this.then(null, callback);
          },
          'finally': function (callback) {
            function makePromise(value, resolved) {
              var result = defer();
              if (resolved) {
                result.resolve(value);
              } else {
                result.reject(value);
              }
              return result.promise;
            }
            function handleCallback(value, isResolved) {
              var callbackOutput = null;
              try {
                callbackOutput = (callback || defaultCallback)();
              } catch (e) {
                return makePromise(e, false);
              }
              if (callbackOutput && isFunction(callbackOutput.then)) {
                return callbackOutput.then(function () {
                  return makePromise(value, isResolved);
                }, function (error) {
                  return makePromise(error, false);
                });
              } else {
                return makePromise(value, isResolved);
              }
            }
            return this.then(function (value) {
              return handleCallback(value, true);
            }, function (error) {
              return handleCallback(error, false);
            });
          }
        }
      };
      return deferred;
    };
    var ref = function (value) {
      if (value && isFunction(value.then))
        return value;
      return {
        then: function (callback) {
          var result = defer();
          nextTick(function () {
            result.resolve(callback(value));
          });
          return result.promise;
        }
      };
    };
    var reject = function (reason) {
      var result = defer();
      result.reject(reason);
      return result.promise;
    };
    var createInternalRejectedPromise = function (reason) {
      return {
        then: function (callback, errback) {
          var result = defer();
          nextTick(function () {
            try {
              result.resolve((isFunction(errback) ? errback : defaultErrback)(reason));
            } catch (e) {
              result.reject(e);
              exceptionHandler(e);
            }
          });
          return result.promise;
        }
      };
    };
    var when = function (value, callback, errback, progressback) {
      var result = defer(), done;
      var wrappedCallback = function (value) {
        try {
          return (isFunction(callback) ? callback : defaultCallback)(value);
        } catch (e) {
          exceptionHandler(e);
          return reject(e);
        }
      };
      var wrappedErrback = function (reason) {
        try {
          return (isFunction(errback) ? errback : defaultErrback)(reason);
        } catch (e) {
          exceptionHandler(e);
          return reject(e);
        }
      };
      var wrappedProgressback = function (progress) {
        try {
          return (isFunction(progressback) ? progressback : defaultCallback)(progress);
        } catch (e) {
          exceptionHandler(e);
        }
      };
      nextTick(function () {
        ref(value).then(function (value) {
          if (done)
            return;
          done = true;
          result.resolve(ref(value).then(wrappedCallback, wrappedErrback, wrappedProgressback));
        }, function (reason) {
          if (done)
            return;
          done = true;
          result.resolve(wrappedErrback(reason));
        }, function (progress) {
          if (done)
            return;
          result.notify(wrappedProgressback(progress));
        });
      });
      return result.promise;
    };
    function defaultCallback(value) {
      return value;
    }
    function defaultErrback(reason) {
      return reject(reason);
    }
    function all(promises) {
      var deferred = defer(), counter = 0, results = isArray(promises) ? [] : {};
      forEach(promises, function (promise, key) {
        counter++;
        ref(promise).then(function (value) {
          if (results.hasOwnProperty(key))
            return;
          results[key] = value;
          if (!--counter)
            deferred.resolve(results);
        }, function (reason) {
          if (results.hasOwnProperty(key))
            return;
          deferred.reject(reason);
        });
      });
      if (counter === 0) {
        deferred.resolve(results);
      }
      return deferred.promise;
    }
    return {
      defer: defer,
      reject: reject,
      when: when,
      all: all
    };
  }
  function $$RAFProvider() {
    this.$get = [
      '$window',
      '$timeout',
      function ($window, $timeout) {
        var requestAnimationFrame = $window.requestAnimationFrame || $window.webkitRequestAnimationFrame || $window.mozRequestAnimationFrame;
        var cancelAnimationFrame = $window.cancelAnimationFrame || $window.webkitCancelAnimationFrame || $window.mozCancelAnimationFrame || $window.webkitCancelRequestAnimationFrame;
        var rafSupported = !!requestAnimationFrame;
        var raf = rafSupported ? function (fn) {
            var id = requestAnimationFrame(fn);
            return function () {
              cancelAnimationFrame(id);
            };
          } : function (fn) {
            var timer = $timeout(fn, 16.66, false);
            return function () {
              $timeout.cancel(timer);
            };
          };
        raf.supported = rafSupported;
        return raf;
      }
    ];
  }
  function $RootScopeProvider() {
    var TTL = 10;
    var $rootScopeMinErr = minErr('$rootScope');
    var lastDirtyWatch = null;
    this.digestTtl = function (value) {
      if (arguments.length) {
        TTL = value;
      }
      return TTL;
    };
    this.$get = [
      '$injector',
      '$exceptionHandler',
      '$parse',
      '$browser',
      function ($injector, $exceptionHandler, $parse, $browser) {
        function Scope() {
          this.$id = nextUid();
          this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
          this['this'] = this.$root = this;
          this.$$destroyed = false;
          this.$$asyncQueue = [];
          this.$$postDigestQueue = [];
          this.$$listeners = {};
          this.$$listenerCount = {};
          this.$$isolateBindings = {};
        }
        Scope.prototype = {
          constructor: Scope,
          $new: function (isolate) {
            var ChildScope, child;
            if (isolate) {
              child = new Scope();
              child.$root = this.$root;
              child.$$asyncQueue = this.$$asyncQueue;
              child.$$postDigestQueue = this.$$postDigestQueue;
            } else {
              ChildScope = function () {
              };
              ChildScope.prototype = this;
              child = new ChildScope();
              child.$id = nextUid();
            }
            child['this'] = child;
            child.$$listeners = {};
            child.$$listenerCount = {};
            child.$parent = this;
            child.$$watchers = child.$$nextSibling = child.$$childHead = child.$$childTail = null;
            child.$$prevSibling = this.$$childTail;
            if (this.$$childHead) {
              this.$$childTail.$$nextSibling = child;
              this.$$childTail = child;
            } else {
              this.$$childHead = this.$$childTail = child;
            }
            return child;
          },
          $watch: function (watchExp, listener, objectEquality) {
            var scope = this, get = compileToFn(watchExp, 'watch'), array = scope.$$watchers, watcher = {
                fn: listener,
                last: initWatchVal,
                get: get,
                exp: watchExp,
                eq: !!objectEquality
              };
            lastDirtyWatch = null;
            if (!isFunction(listener)) {
              var listenFn = compileToFn(listener || noop, 'listener');
              watcher.fn = function (newVal, oldVal, scope) {
                listenFn(scope);
              };
            }
            if (typeof watchExp == 'string' && get.constant) {
              var originalFn = watcher.fn;
              watcher.fn = function (newVal, oldVal, scope) {
                originalFn.call(this, newVal, oldVal, scope);
                arrayRemove(array, watcher);
              };
            }
            if (!array) {
              array = scope.$$watchers = [];
            }
            array.unshift(watcher);
            return function () {
              arrayRemove(array, watcher);
              lastDirtyWatch = null;
            };
          },
          $watchCollection: function (obj, listener) {
            var self = this;
            var newValue;
            var oldValue;
            var veryOldValue;
            var trackVeryOldValue = listener.length > 1;
            var changeDetected = 0;
            var objGetter = $parse(obj);
            var internalArray = [];
            var internalObject = {};
            var initRun = true;
            var oldLength = 0;
            function $watchCollectionWatch() {
              newValue = objGetter(self);
              var newLength, key;
              if (!isObject(newValue)) {
                if (oldValue !== newValue) {
                  oldValue = newValue;
                  changeDetected++;
                }
              } else if (isArrayLike(newValue)) {
                if (oldValue !== internalArray) {
                  oldValue = internalArray;
                  oldLength = oldValue.length = 0;
                  changeDetected++;
                }
                newLength = newValue.length;
                if (oldLength !== newLength) {
                  changeDetected++;
                  oldValue.length = oldLength = newLength;
                }
                for (var i = 0; i < newLength; i++) {
                  var bothNaN = oldValue[i] !== oldValue[i] && newValue[i] !== newValue[i];
                  if (!bothNaN && oldValue[i] !== newValue[i]) {
                    changeDetected++;
                    oldValue[i] = newValue[i];
                  }
                }
              } else {
                if (oldValue !== internalObject) {
                  oldValue = internalObject = {};
                  oldLength = 0;
                  changeDetected++;
                }
                newLength = 0;
                for (key in newValue) {
                  if (newValue.hasOwnProperty(key)) {
                    newLength++;
                    if (oldValue.hasOwnProperty(key)) {
                      if (oldValue[key] !== newValue[key]) {
                        changeDetected++;
                        oldValue[key] = newValue[key];
                      }
                    } else {
                      oldLength++;
                      oldValue[key] = newValue[key];
                      changeDetected++;
                    }
                  }
                }
                if (oldLength > newLength) {
                  changeDetected++;
                  for (key in oldValue) {
                    if (oldValue.hasOwnProperty(key) && !newValue.hasOwnProperty(key)) {
                      oldLength--;
                      delete oldValue[key];
                    }
                  }
                }
              }
              return changeDetected;
            }
            function $watchCollectionAction() {
              if (initRun) {
                initRun = false;
                listener(newValue, newValue, self);
              } else {
                listener(newValue, veryOldValue, self);
              }
              if (trackVeryOldValue) {
                if (!isObject(newValue)) {
                  veryOldValue = newValue;
                } else if (isArrayLike(newValue)) {
                  veryOldValue = new Array(newValue.length);
                  for (var i = 0; i < newValue.length; i++) {
                    veryOldValue[i] = newValue[i];
                  }
                } else {
                  veryOldValue = {};
                  for (var key in newValue) {
                    if (hasOwnProperty.call(newValue, key)) {
                      veryOldValue[key] = newValue[key];
                    }
                  }
                }
              }
            }
            return this.$watch($watchCollectionWatch, $watchCollectionAction);
          },
          $digest: function () {
            var watch, value, last, watchers, asyncQueue = this.$$asyncQueue, postDigestQueue = this.$$postDigestQueue, length, dirty, ttl = TTL, next, current, target = this, watchLog = [], logIdx, logMsg, asyncTask;
            beginPhase('$digest');
            lastDirtyWatch = null;
            do {
              dirty = false;
              current = target;
              while (asyncQueue.length) {
                try {
                  asyncTask = asyncQueue.shift();
                  asyncTask.scope.$eval(asyncTask.expression);
                } catch (e) {
                  clearPhase();
                  $exceptionHandler(e);
                }
                lastDirtyWatch = null;
              }
              traverseScopesLoop:
                do {
                  if (watchers = current.$$watchers) {
                    length = watchers.length;
                    while (length--) {
                      try {
                        watch = watchers[length];
                        if (watch) {
                          if ((value = watch.get(current)) !== (last = watch.last) && !(watch.eq ? equals(value, last) : typeof value == 'number' && typeof last == 'number' && isNaN(value) && isNaN(last))) {
                            dirty = true;
                            lastDirtyWatch = watch;
                            watch.last = watch.eq ? copy(value) : value;
                            watch.fn(value, last === initWatchVal ? value : last, current);
                            if (ttl < 5) {
                              logIdx = 4 - ttl;
                              if (!watchLog[logIdx])
                                watchLog[logIdx] = [];
                              logMsg = isFunction(watch.exp) ? 'fn: ' + (watch.exp.name || watch.exp.toString()) : watch.exp;
                              logMsg += '; newVal: ' + toJson(value) + '; oldVal: ' + toJson(last);
                              watchLog[logIdx].push(logMsg);
                            }
                          } else if (watch === lastDirtyWatch) {
                            dirty = false;
                            break traverseScopesLoop;
                          }
                        }
                      } catch (e) {
                        clearPhase();
                        $exceptionHandler(e);
                      }
                    }
                  }
                  if (!(next = current.$$childHead || current !== target && current.$$nextSibling)) {
                    while (current !== target && !(next = current.$$nextSibling)) {
                      current = current.$parent;
                    }
                  }
                } while (current = next);
              if ((dirty || asyncQueue.length) && !ttl--) {
                clearPhase();
                throw $rootScopeMinErr('infdig', '{0} $digest() iterations reached. Aborting!\n' + 'Watchers fired in the last 5 iterations: {1}', TTL, toJson(watchLog));
              }
            } while (dirty || asyncQueue.length);
            clearPhase();
            while (postDigestQueue.length) {
              try {
                postDigestQueue.shift()();
              } catch (e) {
                $exceptionHandler(e);
              }
            }
          },
          $destroy: function () {
            if (this.$$destroyed)
              return;
            var parent = this.$parent;
            this.$broadcast('$destroy');
            this.$$destroyed = true;
            if (this === $rootScope)
              return;
            forEach(this.$$listenerCount, bind(null, decrementListenerCount, this));
            if (parent.$$childHead == this)
              parent.$$childHead = this.$$nextSibling;
            if (parent.$$childTail == this)
              parent.$$childTail = this.$$prevSibling;
            if (this.$$prevSibling)
              this.$$prevSibling.$$nextSibling = this.$$nextSibling;
            if (this.$$nextSibling)
              this.$$nextSibling.$$prevSibling = this.$$prevSibling;
            this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null;
            this.$$listeners = {};
            this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [];
            this.$destroy = this.$digest = this.$apply = noop;
            this.$on = this.$watch = function () {
              return noop;
            };
          },
          $eval: function (expr, locals) {
            return $parse(expr)(this, locals);
          },
          $evalAsync: function (expr) {
            if (!$rootScope.$$phase && !$rootScope.$$asyncQueue.length) {
              $browser.defer(function () {
                if ($rootScope.$$asyncQueue.length) {
                  $rootScope.$digest();
                }
              });
            }
            this.$$asyncQueue.push({
              scope: this,
              expression: expr
            });
          },
          $$postDigest: function (fn) {
            this.$$postDigestQueue.push(fn);
          },
          $apply: function (expr) {
            try {
              beginPhase('$apply');
              return this.$eval(expr);
            } catch (e) {
              $exceptionHandler(e);
            } finally {
              clearPhase();
              try {
                $rootScope.$digest();
              } catch (e) {
                $exceptionHandler(e);
                throw e;
              }
            }
          },
          $on: function (name, listener) {
            var namedListeners = this.$$listeners[name];
            if (!namedListeners) {
              this.$$listeners[name] = namedListeners = [];
            }
            namedListeners.push(listener);
            var current = this;
            do {
              if (!current.$$listenerCount[name]) {
                current.$$listenerCount[name] = 0;
              }
              current.$$listenerCount[name]++;
            } while (current = current.$parent);
            var self = this;
            return function () {
              namedListeners[indexOf(namedListeners, listener)] = null;
              decrementListenerCount(self, 1, name);
            };
          },
          $emit: function (name, args) {
            var empty = [], namedListeners, scope = this, stopPropagation = false, event = {
                name: name,
                targetScope: scope,
                stopPropagation: function () {
                  stopPropagation = true;
                },
                preventDefault: function () {
                  event.defaultPrevented = true;
                },
                defaultPrevented: false
              }, listenerArgs = concat([event], arguments, 1), i, length;
            do {
              namedListeners = scope.$$listeners[name] || empty;
              event.currentScope = scope;
              for (i = 0, length = namedListeners.length; i < length; i++) {
                if (!namedListeners[i]) {
                  namedListeners.splice(i, 1);
                  i--;
                  length--;
                  continue;
                }
                try {
                  namedListeners[i].apply(null, listenerArgs);
                } catch (e) {
                  $exceptionHandler(e);
                }
              }
              if (stopPropagation)
                return event;
              scope = scope.$parent;
            } while (scope);
            return event;
          },
          $broadcast: function (name, args) {
            var target = this, current = target, next = target, event = {
                name: name,
                targetScope: target,
                preventDefault: function () {
                  event.defaultPrevented = true;
                },
                defaultPrevented: false
              }, listenerArgs = concat([event], arguments, 1), listeners, i, length;
            while (current = next) {
              event.currentScope = current;
              listeners = current.$$listeners[name] || [];
              for (i = 0, length = listeners.length; i < length; i++) {
                if (!listeners[i]) {
                  listeners.splice(i, 1);
                  i--;
                  length--;
                  continue;
                }
                try {
                  listeners[i].apply(null, listenerArgs);
                } catch (e) {
                  $exceptionHandler(e);
                }
              }
              if (!(next = current.$$listenerCount[name] && current.$$childHead || current !== target && current.$$nextSibling)) {
                while (current !== target && !(next = current.$$nextSibling)) {
                  current = current.$parent;
                }
              }
            }
            return event;
          }
        };
        var $rootScope = new Scope();
        return $rootScope;
        function beginPhase(phase) {
          if ($rootScope.$$phase) {
            throw $rootScopeMinErr('inprog', '{0} already in progress', $rootScope.$$phase);
          }
          $rootScope.$$phase = phase;
        }
        function clearPhase() {
          $rootScope.$$phase = null;
        }
        function compileToFn(exp, name) {
          var fn = $parse(exp);
          assertArgFn(fn, name);
          return fn;
        }
        function decrementListenerCount(current, count, name) {
          do {
            current.$$listenerCount[name] -= count;
            if (current.$$listenerCount[name] === 0) {
              delete current.$$listenerCount[name];
            }
          } while (current = current.$parent);
        }
        function initWatchVal() {
        }
      }
    ];
  }
  function $$SanitizeUriProvider() {
    var aHrefSanitizationWhitelist = /^\s*(https?|ftp|mailto|tel|file):/, imgSrcSanitizationWhitelist = /^\s*(https?|ftp|file):|data:image\//;
    this.aHrefSanitizationWhitelist = function (regexp) {
      if (isDefined(regexp)) {
        aHrefSanitizationWhitelist = regexp;
        return this;
      }
      return aHrefSanitizationWhitelist;
    };
    this.imgSrcSanitizationWhitelist = function (regexp) {
      if (isDefined(regexp)) {
        imgSrcSanitizationWhitelist = regexp;
        return this;
      }
      return imgSrcSanitizationWhitelist;
    };
    this.$get = function () {
      return function sanitizeUri(uri, isImage) {
        var regex = isImage ? imgSrcSanitizationWhitelist : aHrefSanitizationWhitelist;
        var normalizedVal;
        if (!msie || msie >= 8) {
          normalizedVal = urlResolve(uri).href;
          if (normalizedVal !== '' && !normalizedVal.match(regex)) {
            return 'unsafe:' + normalizedVal;
          }
        }
        return uri;
      };
    };
  }
  var $sceMinErr = minErr('$sce');
  var SCE_CONTEXTS = {
      HTML: 'html',
      CSS: 'css',
      URL: 'url',
      RESOURCE_URL: 'resourceUrl',
      JS: 'js'
    };
  function escapeForRegexp(s) {
    return s.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08');
  }
  function adjustMatcher(matcher) {
    if (matcher === 'self') {
      return matcher;
    } else if (isString(matcher)) {
      if (matcher.indexOf('***') > -1) {
        throw $sceMinErr('iwcard', 'Illegal sequence *** in string matcher.  String: {0}', matcher);
      }
      matcher = escapeForRegexp(matcher).replace('\\*\\*', '.*').replace('\\*', '[^:/.?&;]*');
      return new RegExp('^' + matcher + '$');
    } else if (isRegExp(matcher)) {
      return new RegExp('^' + matcher.source + '$');
    } else {
      throw $sceMinErr('imatcher', 'Matchers may only be "self", string patterns or RegExp objects');
    }
  }
  function adjustMatchers(matchers) {
    var adjustedMatchers = [];
    if (isDefined(matchers)) {
      forEach(matchers, function (matcher) {
        adjustedMatchers.push(adjustMatcher(matcher));
      });
    }
    return adjustedMatchers;
  }
  function $SceDelegateProvider() {
    this.SCE_CONTEXTS = SCE_CONTEXTS;
    var resourceUrlWhitelist = ['self'], resourceUrlBlacklist = [];
    this.resourceUrlWhitelist = function (value) {
      if (arguments.length) {
        resourceUrlWhitelist = adjustMatchers(value);
      }
      return resourceUrlWhitelist;
    };
    this.resourceUrlBlacklist = function (value) {
      if (arguments.length) {
        resourceUrlBlacklist = adjustMatchers(value);
      }
      return resourceUrlBlacklist;
    };
    this.$get = [
      '$injector',
      function ($injector) {
        var htmlSanitizer = function htmlSanitizer(html) {
          throw $sceMinErr('unsafe', 'Attempting to use an unsafe value in a safe context.');
        };
        if ($injector.has('$sanitize')) {
          htmlSanitizer = $injector.get('$sanitize');
        }
        function matchUrl(matcher, parsedUrl) {
          if (matcher === 'self') {
            return urlIsSameOrigin(parsedUrl);
          } else {
            return !!matcher.exec(parsedUrl.href);
          }
        }
        function isResourceUrlAllowedByPolicy(url) {
          var parsedUrl = urlResolve(url.toString());
          var i, n, allowed = false;
          for (i = 0, n = resourceUrlWhitelist.length; i < n; i++) {
            if (matchUrl(resourceUrlWhitelist[i], parsedUrl)) {
              allowed = true;
              break;
            }
          }
          if (allowed) {
            for (i = 0, n = resourceUrlBlacklist.length; i < n; i++) {
              if (matchUrl(resourceUrlBlacklist[i], parsedUrl)) {
                allowed = false;
                break;
              }
            }
          }
          return allowed;
        }
        function generateHolderType(Base) {
          var holderType = function TrustedValueHolderType(trustedValue) {
            this.$$unwrapTrustedValue = function () {
              return trustedValue;
            };
          };
          if (Base) {
            holderType.prototype = new Base();
          }
          holderType.prototype.valueOf = function sceValueOf() {
            return this.$$unwrapTrustedValue();
          };
          holderType.prototype.toString = function sceToString() {
            return this.$$unwrapTrustedValue().toString();
          };
          return holderType;
        }
        var trustedValueHolderBase = generateHolderType(), byType = {};
        byType[SCE_CONTEXTS.HTML] = generateHolderType(trustedValueHolderBase);
        byType[SCE_CONTEXTS.CSS] = generateHolderType(trustedValueHolderBase);
        byType[SCE_CONTEXTS.URL] = generateHolderType(trustedValueHolderBase);
        byType[SCE_CONTEXTS.JS] = generateHolderType(trustedValueHolderBase);
        byType[SCE_CONTEXTS.RESOURCE_URL] = generateHolderType(byType[SCE_CONTEXTS.URL]);
        function trustAs(type, trustedValue) {
          var Constructor = byType.hasOwnProperty(type) ? byType[type] : null;
          if (!Constructor) {
            throw $sceMinErr('icontext', 'Attempted to trust a value in invalid context. Context: {0}; Value: {1}', type, trustedValue);
          }
          if (trustedValue === null || trustedValue === undefined || trustedValue === '') {
            return trustedValue;
          }
          if (typeof trustedValue !== 'string') {
            throw $sceMinErr('itype', 'Attempted to trust a non-string value in a content requiring a string: Context: {0}', type);
          }
          return new Constructor(trustedValue);
        }
        function valueOf(maybeTrusted) {
          if (maybeTrusted instanceof trustedValueHolderBase) {
            return maybeTrusted.$$unwrapTrustedValue();
          } else {
            return maybeTrusted;
          }
        }
        function getTrusted(type, maybeTrusted) {
          if (maybeTrusted === null || maybeTrusted === undefined || maybeTrusted === '') {
            return maybeTrusted;
          }
          var constructor = byType.hasOwnProperty(type) ? byType[type] : null;
          if (constructor && maybeTrusted instanceof constructor) {
            return maybeTrusted.$$unwrapTrustedValue();
          }
          if (type === SCE_CONTEXTS.RESOURCE_URL) {
            if (isResourceUrlAllowedByPolicy(maybeTrusted)) {
              return maybeTrusted;
            } else {
              throw $sceMinErr('insecurl', 'Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}', maybeTrusted.toString());
            }
          } else if (type === SCE_CONTEXTS.HTML) {
            return htmlSanitizer(maybeTrusted);
          }
          throw $sceMinErr('unsafe', 'Attempting to use an unsafe value in a safe context.');
        }
        return {
          trustAs: trustAs,
          getTrusted: getTrusted,
          valueOf: valueOf
        };
      }
    ];
  }
  function $SceProvider() {
    var enabled = true;
    this.enabled = function (value) {
      if (arguments.length) {
        enabled = !!value;
      }
      return enabled;
    };
    this.$get = [
      '$parse',
      '$sniffer',
      '$sceDelegate',
      function ($parse, $sniffer, $sceDelegate) {
        if (enabled && $sniffer.msie && $sniffer.msieDocumentMode < 8) {
          throw $sceMinErr('iequirks', 'Strict Contextual Escaping does not support Internet Explorer version < 9 in quirks ' + 'mode.  You can fix this by adding the text <!doctype html> to the top of your HTML ' + 'document.  See http://docs.angularjs.org/api/ng.$sce for more information.');
        }
        var sce = copy(SCE_CONTEXTS);
        sce.isEnabled = function () {
          return enabled;
        };
        sce.trustAs = $sceDelegate.trustAs;
        sce.getTrusted = $sceDelegate.getTrusted;
        sce.valueOf = $sceDelegate.valueOf;
        if (!enabled) {
          sce.trustAs = sce.getTrusted = function (type, value) {
            return value;
          };
          sce.valueOf = identity;
        }
        sce.parseAs = function sceParseAs(type, expr) {
          var parsed = $parse(expr);
          if (parsed.literal && parsed.constant) {
            return parsed;
          } else {
            return function sceParseAsTrusted(self, locals) {
              return sce.getTrusted(type, parsed(self, locals));
            };
          }
        };
        var parse = sce.parseAs, getTrusted = sce.getTrusted, trustAs = sce.trustAs;
        forEach(SCE_CONTEXTS, function (enumValue, name) {
          var lName = lowercase(name);
          sce[camelCase('parse_as_' + lName)] = function (expr) {
            return parse(enumValue, expr);
          };
          sce[camelCase('get_trusted_' + lName)] = function (value) {
            return getTrusted(enumValue, value);
          };
          sce[camelCase('trust_as_' + lName)] = function (value) {
            return trustAs(enumValue, value);
          };
        });
        return sce;
      }
    ];
  }
  function $SnifferProvider() {
    this.$get = [
      '$window',
      '$document',
      function ($window, $document) {
        var eventSupport = {}, android = int((/android (\d+)/.exec(lowercase(($window.navigator || {}).userAgent)) || [])[1]), boxee = /Boxee/i.test(($window.navigator || {}).userAgent), document = $document[0] || {}, documentMode = document.documentMode, vendorPrefix, vendorRegex = /^(Moz|webkit|O|ms)(?=[A-Z])/, bodyStyle = document.body && document.body.style, transitions = false, animations = false, match;
        if (bodyStyle) {
          for (var prop in bodyStyle) {
            if (match = vendorRegex.exec(prop)) {
              vendorPrefix = match[0];
              vendorPrefix = vendorPrefix.substr(0, 1).toUpperCase() + vendorPrefix.substr(1);
              break;
            }
          }
          if (!vendorPrefix) {
            vendorPrefix = 'WebkitOpacity' in bodyStyle && 'webkit';
          }
          transitions = !!('transition' in bodyStyle || vendorPrefix + 'Transition' in bodyStyle);
          animations = !!('animation' in bodyStyle || vendorPrefix + 'Animation' in bodyStyle);
          if (android && (!transitions || !animations)) {
            transitions = isString(document.body.style.webkitTransition);
            animations = isString(document.body.style.webkitAnimation);
          }
        }
        return {
          history: !!($window.history && $window.history.pushState && !(android < 4) && !boxee),
          hashchange: 'onhashchange' in $window && (!documentMode || documentMode > 7),
          hasEvent: function (event) {
            if (event == 'input' && msie == 9)
              return false;
            if (isUndefined(eventSupport[event])) {
              var divElm = document.createElement('div');
              eventSupport[event] = 'on' + event in divElm;
            }
            return eventSupport[event];
          },
          csp: csp(),
          vendorPrefix: vendorPrefix,
          transitions: transitions,
          animations: animations,
          android: android,
          msie: msie,
          msieDocumentMode: documentMode
        };
      }
    ];
  }
  function $TimeoutProvider() {
    this.$get = [
      '$rootScope',
      '$browser',
      '$q',
      '$exceptionHandler',
      function ($rootScope, $browser, $q, $exceptionHandler) {
        var deferreds = {};
        function timeout(fn, delay, invokeApply) {
          var deferred = $q.defer(), promise = deferred.promise, skipApply = isDefined(invokeApply) && !invokeApply, timeoutId;
          timeoutId = $browser.defer(function () {
            try {
              deferred.resolve(fn());
            } catch (e) {
              deferred.reject(e);
              $exceptionHandler(e);
            } finally {
              delete deferreds[promise.$$timeoutId];
            }
            if (!skipApply)
              $rootScope.$apply();
          }, delay);
          promise.$$timeoutId = timeoutId;
          deferreds[timeoutId] = deferred;
          return promise;
        }
        timeout.cancel = function (promise) {
          if (promise && promise.$$timeoutId in deferreds) {
            deferreds[promise.$$timeoutId].reject('canceled');
            delete deferreds[promise.$$timeoutId];
            return $browser.defer.cancel(promise.$$timeoutId);
          }
          return false;
        };
        return timeout;
      }
    ];
  }
  var urlParsingNode = document.createElement('a');
  var originUrl = urlResolve(window.location.href, true);
  function urlResolve(url, base) {
    var href = url;
    if (msie) {
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }
    urlParsingNode.setAttribute('href', href);
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }
  function urlIsSameOrigin(requestUrl) {
    var parsed = isString(requestUrl) ? urlResolve(requestUrl) : requestUrl;
    return parsed.protocol === originUrl.protocol && parsed.host === originUrl.host;
  }
  function $WindowProvider() {
    this.$get = valueFn(window);
  }
  $FilterProvider.$inject = ['$provide'];
  function $FilterProvider($provide) {
    var suffix = 'Filter';
    function register(name, factory) {
      if (isObject(name)) {
        var filters = {};
        forEach(name, function (filter, key) {
          filters[key] = register(key, filter);
        });
        return filters;
      } else {
        return $provide.factory(name + suffix, factory);
      }
    }
    this.register = register;
    this.$get = [
      '$injector',
      function ($injector) {
        return function (name) {
          return $injector.get(name + suffix);
        };
      }
    ];
    register('currency', currencyFilter);
    register('date', dateFilter);
    register('filter', filterFilter);
    register('json', jsonFilter);
    register('limitTo', limitToFilter);
    register('lowercase', lowercaseFilter);
    register('number', numberFilter);
    register('orderBy', orderByFilter);
    register('uppercase', uppercaseFilter);
  }
  function filterFilter() {
    return function (array, expression, comparator) {
      if (!isArray(array))
        return array;
      var comparatorType = typeof comparator, predicates = [];
      predicates.check = function (value) {
        for (var j = 0; j < predicates.length; j++) {
          if (!predicates[j](value)) {
            return false;
          }
        }
        return true;
      };
      if (comparatorType !== 'function') {
        if (comparatorType === 'boolean' && comparator) {
          comparator = function (obj, text) {
            return angular.equals(obj, text);
          };
        } else {
          comparator = function (obj, text) {
            if (obj && text && typeof obj === 'object' && typeof text === 'object') {
              for (var objKey in obj) {
                if (objKey.charAt(0) !== '$' && hasOwnProperty.call(obj, objKey) && comparator(obj[objKey], text[objKey])) {
                  return true;
                }
              }
              return false;
            }
            text = ('' + text).toLowerCase();
            return ('' + obj).toLowerCase().indexOf(text) > -1;
          };
        }
      }
      var search = function (obj, text) {
        if (typeof text == 'string' && text.charAt(0) === '!') {
          return !search(obj, text.substr(1));
        }
        switch (typeof obj) {
        case 'boolean':
        case 'number':
        case 'string':
          return comparator(obj, text);
        case 'object':
          switch (typeof text) {
          case 'object':
            return comparator(obj, text);
          default:
            for (var objKey in obj) {
              if (objKey.charAt(0) !== '$' && search(obj[objKey], text)) {
                return true;
              }
            }
            break;
          }
          return false;
        case 'array':
          for (var i = 0; i < obj.length; i++) {
            if (search(obj[i], text)) {
              return true;
            }
          }
          return false;
        default:
          return false;
        }
      };
      switch (typeof expression) {
      case 'boolean':
      case 'number':
      case 'string':
        expression = { $: expression };
      case 'object':
        for (var key in expression) {
          (function (path) {
            if (typeof expression[path] == 'undefined')
              return;
            predicates.push(function (value) {
              return search(path == '$' ? value : value && value[path], expression[path]);
            });
          }(key));
        }
        break;
      case 'function':
        predicates.push(expression);
        break;
      default:
        return array;
      }
      var filtered = [];
      for (var j = 0; j < array.length; j++) {
        var value = array[j];
        if (predicates.check(value)) {
          filtered.push(value);
        }
      }
      return filtered;
    };
  }
  currencyFilter.$inject = ['$locale'];
  function currencyFilter($locale) {
    var formats = $locale.NUMBER_FORMATS;
    return function (amount, currencySymbol) {
      if (isUndefined(currencySymbol))
        currencySymbol = formats.CURRENCY_SYM;
      return formatNumber(amount, formats.PATTERNS[1], formats.GROUP_SEP, formats.DECIMAL_SEP, 2).replace(/\u00A4/g, currencySymbol);
    };
  }
  numberFilter.$inject = ['$locale'];
  function numberFilter($locale) {
    var formats = $locale.NUMBER_FORMATS;
    return function (number, fractionSize) {
      return formatNumber(number, formats.PATTERNS[0], formats.GROUP_SEP, formats.DECIMAL_SEP, fractionSize);
    };
  }
  var DECIMAL_SEP = '.';
  function formatNumber(number, pattern, groupSep, decimalSep, fractionSize) {
    if (number == null || !isFinite(number) || isObject(number))
      return '';
    var isNegative = number < 0;
    number = Math.abs(number);
    var numStr = number + '', formatedText = '', parts = [];
    var hasExponent = false;
    if (numStr.indexOf('e') !== -1) {
      var match = numStr.match(/([\d\.]+)e(-?)(\d+)/);
      if (match && match[2] == '-' && match[3] > fractionSize + 1) {
        numStr = '0';
      } else {
        formatedText = numStr;
        hasExponent = true;
      }
    }
    if (!hasExponent) {
      var fractionLen = (numStr.split(DECIMAL_SEP)[1] || '').length;
      if (isUndefined(fractionSize)) {
        fractionSize = Math.min(Math.max(pattern.minFrac, fractionLen), pattern.maxFrac);
      }
      var pow = Math.pow(10, fractionSize);
      number = Math.round(number * pow) / pow;
      var fraction = ('' + number).split(DECIMAL_SEP);
      var whole = fraction[0];
      fraction = fraction[1] || '';
      var i, pos = 0, lgroup = pattern.lgSize, group = pattern.gSize;
      if (whole.length >= lgroup + group) {
        pos = whole.length - lgroup;
        for (i = 0; i < pos; i++) {
          if ((pos - i) % group === 0 && i !== 0) {
            formatedText += groupSep;
          }
          formatedText += whole.charAt(i);
        }
      }
      for (i = pos; i < whole.length; i++) {
        if ((whole.length - i) % lgroup === 0 && i !== 0) {
          formatedText += groupSep;
        }
        formatedText += whole.charAt(i);
      }
      while (fraction.length < fractionSize) {
        fraction += '0';
      }
      if (fractionSize && fractionSize !== '0')
        formatedText += decimalSep + fraction.substr(0, fractionSize);
    } else {
      if (fractionSize > 0 && number > -1 && number < 1) {
        formatedText = number.toFixed(fractionSize);
      }
    }
    parts.push(isNegative ? pattern.negPre : pattern.posPre);
    parts.push(formatedText);
    parts.push(isNegative ? pattern.negSuf : pattern.posSuf);
    return parts.join('');
  }
  function padNumber(num, digits, trim) {
    var neg = '';
    if (num < 0) {
      neg = '-';
      num = -num;
    }
    num = '' + num;
    while (num.length < digits)
      num = '0' + num;
    if (trim)
      num = num.substr(num.length - digits);
    return neg + num;
  }
  function dateGetter(name, size, offset, trim) {
    offset = offset || 0;
    return function (date) {
      var value = date['get' + name]();
      if (offset > 0 || value > -offset)
        value += offset;
      if (value === 0 && offset == -12)
        value = 12;
      return padNumber(value, size, trim);
    };
  }
  function dateStrGetter(name, shortForm) {
    return function (date, formats) {
      var value = date['get' + name]();
      var get = uppercase(shortForm ? 'SHORT' + name : name);
      return formats[get][value];
    };
  }
  function timeZoneGetter(date) {
    var zone = -1 * date.getTimezoneOffset();
    var paddedZone = zone >= 0 ? '+' : '';
    paddedZone += padNumber(Math[zone > 0 ? 'floor' : 'ceil'](zone / 60), 2) + padNumber(Math.abs(zone % 60), 2);
    return paddedZone;
  }
  function ampmGetter(date, formats) {
    return date.getHours() < 12 ? formats.AMPMS[0] : formats.AMPMS[1];
  }
  var DATE_FORMATS = {
      yyyy: dateGetter('FullYear', 4),
      yy: dateGetter('FullYear', 2, 0, true),
      y: dateGetter('FullYear', 1),
      MMMM: dateStrGetter('Month'),
      MMM: dateStrGetter('Month', true),
      MM: dateGetter('Month', 2, 1),
      M: dateGetter('Month', 1, 1),
      dd: dateGetter('Date', 2),
      d: dateGetter('Date', 1),
      HH: dateGetter('Hours', 2),
      H: dateGetter('Hours', 1),
      hh: dateGetter('Hours', 2, -12),
      h: dateGetter('Hours', 1, -12),
      mm: dateGetter('Minutes', 2),
      m: dateGetter('Minutes', 1),
      ss: dateGetter('Seconds', 2),
      s: dateGetter('Seconds', 1),
      sss: dateGetter('Milliseconds', 3),
      EEEE: dateStrGetter('Day'),
      EEE: dateStrGetter('Day', true),
      a: ampmGetter,
      Z: timeZoneGetter
    };
  var DATE_FORMATS_SPLIT = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, NUMBER_STRING = /^\-?\d+$/;
  dateFilter.$inject = ['$locale'];
  function dateFilter($locale) {
    var R_ISO8601_STR = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    function jsonStringToDate(string) {
      var match;
      if (match = string.match(R_ISO8601_STR)) {
        var date = new Date(0), tzHour = 0, tzMin = 0, dateSetter = match[8] ? date.setUTCFullYear : date.setFullYear, timeSetter = match[8] ? date.setUTCHours : date.setHours;
        if (match[9]) {
          tzHour = int(match[9] + match[10]);
          tzMin = int(match[9] + match[11]);
        }
        dateSetter.call(date, int(match[1]), int(match[2]) - 1, int(match[3]));
        var h = int(match[4] || 0) - tzHour;
        var m = int(match[5] || 0) - tzMin;
        var s = int(match[6] || 0);
        var ms = Math.round(parseFloat('0.' + (match[7] || 0)) * 1000);
        timeSetter.call(date, h, m, s, ms);
        return date;
      }
      return string;
    }
    return function (date, format) {
      var text = '', parts = [], fn, match;
      format = format || 'mediumDate';
      format = $locale.DATETIME_FORMATS[format] || format;
      if (isString(date)) {
        if (NUMBER_STRING.test(date)) {
          date = int(date);
        } else {
          date = jsonStringToDate(date);
        }
      }
      if (isNumber(date)) {
        date = new Date(date);
      }
      if (!isDate(date)) {
        return date;
      }
      while (format) {
        match = DATE_FORMATS_SPLIT.exec(format);
        if (match) {
          parts = concat(parts, match, 1);
          format = parts.pop();
        } else {
          parts.push(format);
          format = null;
        }
      }
      forEach(parts, function (value) {
        fn = DATE_FORMATS[value];
        text += fn ? fn(date, $locale.DATETIME_FORMATS) : value.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
      });
      return text;
    };
  }
  function jsonFilter() {
    return function (object) {
      return toJson(object, true);
    };
  }
  var lowercaseFilter = valueFn(lowercase);
  var uppercaseFilter = valueFn(uppercase);
  function limitToFilter() {
    return function (input, limit) {
      if (!isArray(input) && !isString(input))
        return input;
      limit = int(limit);
      if (isString(input)) {
        if (limit) {
          return limit >= 0 ? input.slice(0, limit) : input.slice(limit, input.length);
        } else {
          return '';
        }
      }
      var out = [], i, n;
      if (limit > input.length)
        limit = input.length;
      else if (limit < -input.length)
        limit = -input.length;
      if (limit > 0) {
        i = 0;
        n = limit;
      } else {
        i = input.length + limit;
        n = input.length;
      }
      for (; i < n; i++) {
        out.push(input[i]);
      }
      return out;
    };
  }
  orderByFilter.$inject = ['$parse'];
  function orderByFilter($parse) {
    return function (array, sortPredicate, reverseOrder) {
      if (!isArray(array))
        return array;
      if (!sortPredicate)
        return array;
      sortPredicate = isArray(sortPredicate) ? sortPredicate : [sortPredicate];
      sortPredicate = map(sortPredicate, function (predicate) {
        var descending = false, get = predicate || identity;
        if (isString(predicate)) {
          if (predicate.charAt(0) == '+' || predicate.charAt(0) == '-') {
            descending = predicate.charAt(0) == '-';
            predicate = predicate.substring(1);
          }
          get = $parse(predicate);
          if (get.constant) {
            var key = get();
            return reverseComparator(function (a, b) {
              return compare(a[key], b[key]);
            }, descending);
          }
        }
        return reverseComparator(function (a, b) {
          return compare(get(a), get(b));
        }, descending);
      });
      var arrayCopy = [];
      for (var i = 0; i < array.length; i++) {
        arrayCopy.push(array[i]);
      }
      return arrayCopy.sort(reverseComparator(comparator, reverseOrder));
      function comparator(o1, o2) {
        for (var i = 0; i < sortPredicate.length; i++) {
          var comp = sortPredicate[i](o1, o2);
          if (comp !== 0)
            return comp;
        }
        return 0;
      }
      function reverseComparator(comp, descending) {
        return toBoolean(descending) ? function (a, b) {
          return comp(b, a);
        } : comp;
      }
      function compare(v1, v2) {
        var t1 = typeof v1;
        var t2 = typeof v2;
        if (t1 == t2) {
          if (t1 == 'string') {
            v1 = v1.toLowerCase();
            v2 = v2.toLowerCase();
          }
          if (v1 === v2)
            return 0;
          return v1 < v2 ? -1 : 1;
        } else {
          return t1 < t2 ? -1 : 1;
        }
      }
    };
  }
  function ngDirective(directive) {
    if (isFunction(directive)) {
      directive = { link: directive };
    }
    directive.restrict = directive.restrict || 'AC';
    return valueFn(directive);
  }
  var htmlAnchorDirective = valueFn({
      restrict: 'E',
      compile: function (element, attr) {
        if (msie <= 8) {
          if (!attr.href && !attr.name) {
            attr.$set('href', '');
          }
          element.append(document.createComment('IE fix'));
        }
        if (!attr.href && !attr.xlinkHref && !attr.name) {
          return function (scope, element) {
            var href = toString.call(element.prop('href')) === '[object SVGAnimatedString]' ? 'xlink:href' : 'href';
            element.on('click', function (event) {
              if (!element.attr(href)) {
                event.preventDefault();
              }
            });
          };
        }
      }
    });
  var ngAttributeAliasDirectives = {};
  forEach(BOOLEAN_ATTR, function (propName, attrName) {
    if (propName == 'multiple')
      return;
    var normalized = directiveNormalize('ng-' + attrName);
    ngAttributeAliasDirectives[normalized] = function () {
      return {
        priority: 100,
        link: function (scope, element, attr) {
          scope.$watch(attr[normalized], function ngBooleanAttrWatchAction(value) {
            attr.$set(attrName, !!value);
          });
        }
      };
    };
  });
  forEach([
    'src',
    'srcset',
    'href'
  ], function (attrName) {
    var normalized = directiveNormalize('ng-' + attrName);
    ngAttributeAliasDirectives[normalized] = function () {
      return {
        priority: 99,
        link: function (scope, element, attr) {
          var propName = attrName, name = attrName;
          if (attrName === 'href' && toString.call(element.prop('href')) === '[object SVGAnimatedString]') {
            name = 'xlinkHref';
            attr.$attr[name] = 'xlink:href';
            propName = null;
          }
          attr.$observe(normalized, function (value) {
            if (!value)
              return;
            attr.$set(name, value);
            if (msie && propName)
              element.prop(propName, attr[name]);
          });
        }
      };
    };
  });
  var nullFormCtrl = {
      $addControl: noop,
      $removeControl: noop,
      $setValidity: noop,
      $setDirty: noop,
      $setPristine: noop
    };
  FormController.$inject = [
    '$element',
    '$attrs',
    '$scope',
    '$animate'
  ];
  function FormController(element, attrs, $scope, $animate) {
    var form = this, parentForm = element.parent().controller('form') || nullFormCtrl, invalidCount = 0, errors = form.$error = {}, controls = [];
    form.$name = attrs.name || attrs.ngForm;
    form.$dirty = false;
    form.$pristine = true;
    form.$valid = true;
    form.$invalid = false;
    parentForm.$addControl(form);
    element.addClass(PRISTINE_CLASS);
    toggleValidCss(true);
    function toggleValidCss(isValid, validationErrorKey) {
      validationErrorKey = validationErrorKey ? '-' + snake_case(validationErrorKey, '-') : '';
      $animate.removeClass(element, (isValid ? INVALID_CLASS : VALID_CLASS) + validationErrorKey);
      $animate.addClass(element, (isValid ? VALID_CLASS : INVALID_CLASS) + validationErrorKey);
    }
    form.$addControl = function (control) {
      assertNotHasOwnProperty(control.$name, 'input');
      controls.push(control);
      if (control.$name) {
        form[control.$name] = control;
      }
    };
    form.$removeControl = function (control) {
      if (control.$name && form[control.$name] === control) {
        delete form[control.$name];
      }
      forEach(errors, function (queue, validationToken) {
        form.$setValidity(validationToken, true, control);
      });
      arrayRemove(controls, control);
    };
    form.$setValidity = function (validationToken, isValid, control) {
      var queue = errors[validationToken];
      if (isValid) {
        if (queue) {
          arrayRemove(queue, control);
          if (!queue.length) {
            invalidCount--;
            if (!invalidCount) {
              toggleValidCss(isValid);
              form.$valid = true;
              form.$invalid = false;
            }
            errors[validationToken] = false;
            toggleValidCss(true, validationToken);
            parentForm.$setValidity(validationToken, true, form);
          }
        }
      } else {
        if (!invalidCount) {
          toggleValidCss(isValid);
        }
        if (queue) {
          if (includes(queue, control))
            return;
        } else {
          errors[validationToken] = queue = [];
          invalidCount++;
          toggleValidCss(false, validationToken);
          parentForm.$setValidity(validationToken, false, form);
        }
        queue.push(control);
        form.$valid = false;
        form.$invalid = true;
      }
    };
    form.$setDirty = function () {
      $animate.removeClass(element, PRISTINE_CLASS);
      $animate.addClass(element, DIRTY_CLASS);
      form.$dirty = true;
      form.$pristine = false;
      parentForm.$setDirty();
    };
    form.$setPristine = function () {
      $animate.removeClass(element, DIRTY_CLASS);
      $animate.addClass(element, PRISTINE_CLASS);
      form.$dirty = false;
      form.$pristine = true;
      forEach(controls, function (control) {
        control.$setPristine();
      });
    };
  }
  var formDirectiveFactory = function (isNgForm) {
    return [
      '$timeout',
      function ($timeout) {
        var formDirective = {
            name: 'form',
            restrict: isNgForm ? 'EAC' : 'E',
            controller: FormController,
            compile: function () {
              return {
                pre: function (scope, formElement, attr, controller) {
                  if (!attr.action) {
                    var preventDefaultListener = function (event) {
                      event.preventDefault ? event.preventDefault() : event.returnValue = false;
                    };
                    addEventListenerFn(formElement[0], 'submit', preventDefaultListener);
                    formElement.on('$destroy', function () {
                      $timeout(function () {
                        removeEventListenerFn(formElement[0], 'submit', preventDefaultListener);
                      }, 0, false);
                    });
                  }
                  var parentFormCtrl = formElement.parent().controller('form'), alias = attr.name || attr.ngForm;
                  if (alias) {
                    setter(scope, alias, controller, alias);
                  }
                  if (parentFormCtrl) {
                    formElement.on('$destroy', function () {
                      parentFormCtrl.$removeControl(controller);
                      if (alias) {
                        setter(scope, alias, undefined, alias);
                      }
                      extend(controller, nullFormCtrl);
                    });
                  }
                }
              };
            }
          };
        return formDirective;
      }
    ];
  };
  var formDirective = formDirectiveFactory();
  var ngFormDirective = formDirectiveFactory(true);
  var URL_REGEXP = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;
  var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i;
  var NUMBER_REGEXP = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/;
  var inputType = {
      'text': textInputType,
      'number': numberInputType,
      'url': urlInputType,
      'email': emailInputType,
      'radio': radioInputType,
      'checkbox': checkboxInputType,
      'hidden': noop,
      'button': noop,
      'submit': noop,
      'reset': noop,
      'file': noop
    };
  function validate(ctrl, validatorName, validity, value) {
    ctrl.$setValidity(validatorName, validity);
    return validity ? value : undefined;
  }
  function addNativeHtml5Validators(ctrl, validatorName, element) {
    var validity = element.prop('validity');
    if (isObject(validity)) {
      var validator = function (value) {
        if (!ctrl.$error[validatorName] && (validity.badInput || validity.customError || validity.typeMismatch) && !validity.valueMissing) {
          ctrl.$setValidity(validatorName, false);
          return;
        }
        return value;
      };
      ctrl.$parsers.push(validator);
    }
  }
  function textInputType(scope, element, attr, ctrl, $sniffer, $browser) {
    var validity = element.prop('validity');
    if (!$sniffer.android) {
      var composing = false;
      element.on('compositionstart', function (data) {
        composing = true;
      });
      element.on('compositionend', function () {
        composing = false;
        listener();
      });
    }
    var listener = function () {
      if (composing)
        return;
      var value = element.val();
      if (toBoolean(attr.ngTrim || 'T')) {
        value = trim(value);
      }
      if (ctrl.$viewValue !== value || validity && value === '' && !validity.valueMissing) {
        if (scope.$$phase) {
          ctrl.$setViewValue(value);
        } else {
          scope.$apply(function () {
            ctrl.$setViewValue(value);
          });
        }
      }
    };
    if ($sniffer.hasEvent('input')) {
      element.on('input', listener);
    } else {
      var timeout;
      var deferListener = function () {
        if (!timeout) {
          timeout = $browser.defer(function () {
            listener();
            timeout = null;
          });
        }
      };
      element.on('keydown', function (event) {
        var key = event.keyCode;
        if (key === 91 || 15 < key && key < 19 || 37 <= key && key <= 40)
          return;
        deferListener();
      });
      if ($sniffer.hasEvent('paste')) {
        element.on('paste cut', deferListener);
      }
    }
    element.on('change', listener);
    ctrl.$render = function () {
      element.val(ctrl.$isEmpty(ctrl.$viewValue) ? '' : ctrl.$viewValue);
    };
    var pattern = attr.ngPattern, patternValidator, match;
    if (pattern) {
      var validateRegex = function (regexp, value) {
        return validate(ctrl, 'pattern', ctrl.$isEmpty(value) || regexp.test(value), value);
      };
      match = pattern.match(/^\/(.*)\/([gim]*)$/);
      if (match) {
        pattern = new RegExp(match[1], match[2]);
        patternValidator = function (value) {
          return validateRegex(pattern, value);
        };
      } else {
        patternValidator = function (value) {
          var patternObj = scope.$eval(pattern);
          if (!patternObj || !patternObj.test) {
            throw minErr('ngPattern')('noregexp', 'Expected {0} to be a RegExp but was {1}. Element: {2}', pattern, patternObj, startingTag(element));
          }
          return validateRegex(patternObj, value);
        };
      }
      ctrl.$formatters.push(patternValidator);
      ctrl.$parsers.push(patternValidator);
    }
    if (attr.ngMinlength) {
      var minlength = int(attr.ngMinlength);
      var minLengthValidator = function (value) {
        return validate(ctrl, 'minlength', ctrl.$isEmpty(value) || value.length >= minlength, value);
      };
      ctrl.$parsers.push(minLengthValidator);
      ctrl.$formatters.push(minLengthValidator);
    }
    if (attr.ngMaxlength) {
      var maxlength = int(attr.ngMaxlength);
      var maxLengthValidator = function (value) {
        return validate(ctrl, 'maxlength', ctrl.$isEmpty(value) || value.length <= maxlength, value);
      };
      ctrl.$parsers.push(maxLengthValidator);
      ctrl.$formatters.push(maxLengthValidator);
    }
  }
  function numberInputType(scope, element, attr, ctrl, $sniffer, $browser) {
    textInputType(scope, element, attr, ctrl, $sniffer, $browser);
    ctrl.$parsers.push(function (value) {
      var empty = ctrl.$isEmpty(value);
      if (empty || NUMBER_REGEXP.test(value)) {
        ctrl.$setValidity('number', true);
        return value === '' ? null : empty ? value : parseFloat(value);
      } else {
        ctrl.$setValidity('number', false);
        return undefined;
      }
    });
    addNativeHtml5Validators(ctrl, 'number', element);
    ctrl.$formatters.push(function (value) {
      return ctrl.$isEmpty(value) ? '' : '' + value;
    });
    if (attr.min) {
      var minValidator = function (value) {
        var min = parseFloat(attr.min);
        return validate(ctrl, 'min', ctrl.$isEmpty(value) || value >= min, value);
      };
      ctrl.$parsers.push(minValidator);
      ctrl.$formatters.push(minValidator);
    }
    if (attr.max) {
      var maxValidator = function (value) {
        var max = parseFloat(attr.max);
        return validate(ctrl, 'max', ctrl.$isEmpty(value) || value <= max, value);
      };
      ctrl.$parsers.push(maxValidator);
      ctrl.$formatters.push(maxValidator);
    }
    ctrl.$formatters.push(function (value) {
      return validate(ctrl, 'number', ctrl.$isEmpty(value) || isNumber(value), value);
    });
  }
  function urlInputType(scope, element, attr, ctrl, $sniffer, $browser) {
    textInputType(scope, element, attr, ctrl, $sniffer, $browser);
    var urlValidator = function (value) {
      return validate(ctrl, 'url', ctrl.$isEmpty(value) || URL_REGEXP.test(value), value);
    };
    ctrl.$formatters.push(urlValidator);
    ctrl.$parsers.push(urlValidator);
  }
  function emailInputType(scope, element, attr, ctrl, $sniffer, $browser) {
    textInputType(scope, element, attr, ctrl, $sniffer, $browser);
    var emailValidator = function (value) {
      return validate(ctrl, 'email', ctrl.$isEmpty(value) || EMAIL_REGEXP.test(value), value);
    };
    ctrl.$formatters.push(emailValidator);
    ctrl.$parsers.push(emailValidator);
  }
  function radioInputType(scope, element, attr, ctrl) {
    if (isUndefined(attr.name)) {
      element.attr('name', nextUid());
    }
    element.on('click', function () {
      if (element[0].checked) {
        scope.$apply(function () {
          ctrl.$setViewValue(attr.value);
        });
      }
    });
    ctrl.$render = function () {
      var value = attr.value;
      element[0].checked = value == ctrl.$viewValue;
    };
    attr.$observe('value', ctrl.$render);
  }
  function checkboxInputType(scope, element, attr, ctrl) {
    var trueValue = attr.ngTrueValue, falseValue = attr.ngFalseValue;
    if (!isString(trueValue))
      trueValue = true;
    if (!isString(falseValue))
      falseValue = false;
    element.on('click', function () {
      scope.$apply(function () {
        ctrl.$setViewValue(element[0].checked);
      });
    });
    ctrl.$render = function () {
      element[0].checked = ctrl.$viewValue;
    };
    ctrl.$isEmpty = function (value) {
      return value !== trueValue;
    };
    ctrl.$formatters.push(function (value) {
      return value === trueValue;
    });
    ctrl.$parsers.push(function (value) {
      return value ? trueValue : falseValue;
    });
  }
  var inputDirective = [
      '$browser',
      '$sniffer',
      function ($browser, $sniffer) {
        return {
          restrict: 'E',
          require: '?ngModel',
          link: function (scope, element, attr, ctrl) {
            if (ctrl) {
              (inputType[lowercase(attr.type)] || inputType.text)(scope, element, attr, ctrl, $sniffer, $browser);
            }
          }
        };
      }
    ];
  var VALID_CLASS = 'ng-valid', INVALID_CLASS = 'ng-invalid', PRISTINE_CLASS = 'ng-pristine', DIRTY_CLASS = 'ng-dirty';
  var NgModelController = [
      '$scope',
      '$exceptionHandler',
      '$attrs',
      '$element',
      '$parse',
      '$animate',
      function ($scope, $exceptionHandler, $attr, $element, $parse, $animate) {
        this.$viewValue = Number.NaN;
        this.$modelValue = Number.NaN;
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$pristine = true;
        this.$dirty = false;
        this.$valid = true;
        this.$invalid = false;
        this.$name = $attr.name;
        var ngModelGet = $parse($attr.ngModel), ngModelSet = ngModelGet.assign;
        if (!ngModelSet) {
          throw minErr('ngModel')('nonassign', 'Expression \'{0}\' is non-assignable. Element: {1}', $attr.ngModel, startingTag($element));
        }
        this.$render = noop;
        this.$isEmpty = function (value) {
          return isUndefined(value) || value === '' || value === null || value !== value;
        };
        var parentForm = $element.inheritedData('$formController') || nullFormCtrl, invalidCount = 0, $error = this.$error = {};
        $element.addClass(PRISTINE_CLASS);
        toggleValidCss(true);
        function toggleValidCss(isValid, validationErrorKey) {
          validationErrorKey = validationErrorKey ? '-' + snake_case(validationErrorKey, '-') : '';
          $animate.removeClass($element, (isValid ? INVALID_CLASS : VALID_CLASS) + validationErrorKey);
          $animate.addClass($element, (isValid ? VALID_CLASS : INVALID_CLASS) + validationErrorKey);
        }
        this.$setValidity = function (validationErrorKey, isValid) {
          if ($error[validationErrorKey] === !isValid)
            return;
          if (isValid) {
            if ($error[validationErrorKey])
              invalidCount--;
            if (!invalidCount) {
              toggleValidCss(true);
              this.$valid = true;
              this.$invalid = false;
            }
          } else {
            toggleValidCss(false);
            this.$invalid = true;
            this.$valid = false;
            invalidCount++;
          }
          $error[validationErrorKey] = !isValid;
          toggleValidCss(isValid, validationErrorKey);
          parentForm.$setValidity(validationErrorKey, isValid, this);
        };
        this.$setPristine = function () {
          this.$dirty = false;
          this.$pristine = true;
          $animate.removeClass($element, DIRTY_CLASS);
          $animate.addClass($element, PRISTINE_CLASS);
        };
        this.$setViewValue = function (value) {
          this.$viewValue = value;
          if (this.$pristine) {
            this.$dirty = true;
            this.$pristine = false;
            $animate.removeClass($element, PRISTINE_CLASS);
            $animate.addClass($element, DIRTY_CLASS);
            parentForm.$setDirty();
          }
          forEach(this.$parsers, function (fn) {
            value = fn(value);
          });
          if (this.$modelValue !== value) {
            this.$modelValue = value;
            ngModelSet($scope, value);
            forEach(this.$viewChangeListeners, function (listener) {
              try {
                listener();
              } catch (e) {
                $exceptionHandler(e);
              }
            });
          }
        };
        var ctrl = this;
        $scope.$watch(function ngModelWatch() {
          var value = ngModelGet($scope);
          if (ctrl.$modelValue !== value) {
            var formatters = ctrl.$formatters, idx = formatters.length;
            ctrl.$modelValue = value;
            while (idx--) {
              value = formatters[idx](value);
            }
            if (ctrl.$viewValue !== value) {
              ctrl.$viewValue = value;
              ctrl.$render();
            }
          }
          return value;
        });
      }
    ];
  var ngModelDirective = function () {
    return {
      require: [
        'ngModel',
        '^?form'
      ],
      controller: NgModelController,
      link: function (scope, element, attr, ctrls) {
        var modelCtrl = ctrls[0], formCtrl = ctrls[1] || nullFormCtrl;
        formCtrl.$addControl(modelCtrl);
        scope.$on('$destroy', function () {
          formCtrl.$removeControl(modelCtrl);
        });
      }
    };
  };
  var ngChangeDirective = valueFn({
      require: 'ngModel',
      link: function (scope, element, attr, ctrl) {
        ctrl.$viewChangeListeners.push(function () {
          scope.$eval(attr.ngChange);
        });
      }
    });
  var requiredDirective = function () {
    return {
      require: '?ngModel',
      link: function (scope, elm, attr, ctrl) {
        if (!ctrl)
          return;
        attr.required = true;
        var validator = function (value) {
          if (attr.required && ctrl.$isEmpty(value)) {
            ctrl.$setValidity('required', false);
            return;
          } else {
            ctrl.$setValidity('required', true);
            return value;
          }
        };
        ctrl.$formatters.push(validator);
        ctrl.$parsers.unshift(validator);
        attr.$observe('required', function () {
          validator(ctrl.$viewValue);
        });
      }
    };
  };
  var ngListDirective = function () {
    return {
      require: 'ngModel',
      link: function (scope, element, attr, ctrl) {
        var match = /\/(.*)\//.exec(attr.ngList), separator = match && new RegExp(match[1]) || attr.ngList || ',';
        var parse = function (viewValue) {
          if (isUndefined(viewValue))
            return;
          var list = [];
          if (viewValue) {
            forEach(viewValue.split(separator), function (value) {
              if (value)
                list.push(trim(value));
            });
          }
          return list;
        };
        ctrl.$parsers.push(parse);
        ctrl.$formatters.push(function (value) {
          if (isArray(value)) {
            return value.join(', ');
          }
          return undefined;
        });
        ctrl.$isEmpty = function (value) {
          return !value || !value.length;
        };
      }
    };
  };
  var CONSTANT_VALUE_REGEXP = /^(true|false|\d+)$/;
  var ngValueDirective = function () {
    return {
      priority: 100,
      compile: function (tpl, tplAttr) {
        if (CONSTANT_VALUE_REGEXP.test(tplAttr.ngValue)) {
          return function ngValueConstantLink(scope, elm, attr) {
            attr.$set('value', scope.$eval(attr.ngValue));
          };
        } else {
          return function ngValueLink(scope, elm, attr) {
            scope.$watch(attr.ngValue, function valueWatchAction(value) {
              attr.$set('value', value);
            });
          };
        }
      }
    };
  };
  var ngBindDirective = ngDirective(function (scope, element, attr) {
      element.addClass('ng-binding').data('$binding', attr.ngBind);
      scope.$watch(attr.ngBind, function ngBindWatchAction(value) {
        element.text(value == undefined ? '' : value);
      });
    });
  var ngBindTemplateDirective = [
      '$interpolate',
      function ($interpolate) {
        return function (scope, element, attr) {
          var interpolateFn = $interpolate(element.attr(attr.$attr.ngBindTemplate));
          element.addClass('ng-binding').data('$binding', interpolateFn);
          attr.$observe('ngBindTemplate', function (value) {
            element.text(value);
          });
        };
      }
    ];
  var ngBindHtmlDirective = [
      '$sce',
      '$parse',
      function ($sce, $parse) {
        return function (scope, element, attr) {
          element.addClass('ng-binding').data('$binding', attr.ngBindHtml);
          var parsed = $parse(attr.ngBindHtml);
          function getStringValue() {
            return (parsed(scope) || '').toString();
          }
          scope.$watch(getStringValue, function ngBindHtmlWatchAction(value) {
            element.html($sce.getTrustedHtml(parsed(scope)) || '');
          });
        };
      }
    ];
  function classDirective(name, selector) {
    name = 'ngClass' + name;
    return [
      '$animate',
      function ($animate) {
        return {
          restrict: 'AC',
          link: function (scope, element, attr) {
            var oldVal;
            scope.$watch(attr[name], ngClassWatchAction, true);
            attr.$observe('class', function (value) {
              ngClassWatchAction(scope.$eval(attr[name]));
            });
            if (name !== 'ngClass') {
              scope.$watch('$index', function ($index, old$index) {
                var mod = $index & 1;
                if (mod !== old$index & 1) {
                  var classes = arrayClasses(scope.$eval(attr[name]));
                  mod === selector ? addClasses(classes) : removeClasses(classes);
                }
              });
            }
            function addClasses(classes) {
              var newClasses = digestClassCounts(classes, 1);
              attr.$addClass(newClasses);
            }
            function removeClasses(classes) {
              var newClasses = digestClassCounts(classes, -1);
              attr.$removeClass(newClasses);
            }
            function digestClassCounts(classes, count) {
              var classCounts = element.data('$classCounts') || {};
              var classesToUpdate = [];
              forEach(classes, function (className) {
                if (count > 0 || classCounts[className]) {
                  classCounts[className] = (classCounts[className] || 0) + count;
                  if (classCounts[className] === +(count > 0)) {
                    classesToUpdate.push(className);
                  }
                }
              });
              element.data('$classCounts', classCounts);
              return classesToUpdate.join(' ');
            }
            function updateClasses(oldClasses, newClasses) {
              var toAdd = arrayDifference(newClasses, oldClasses);
              var toRemove = arrayDifference(oldClasses, newClasses);
              toRemove = digestClassCounts(toRemove, -1);
              toAdd = digestClassCounts(toAdd, 1);
              if (toAdd.length === 0) {
                $animate.removeClass(element, toRemove);
              } else if (toRemove.length === 0) {
                $animate.addClass(element, toAdd);
              } else {
                $animate.setClass(element, toAdd, toRemove);
              }
            }
            function ngClassWatchAction(newVal) {
              if (selector === true || scope.$index % 2 === selector) {
                var newClasses = arrayClasses(newVal || []);
                if (!oldVal) {
                  addClasses(newClasses);
                } else if (!equals(newVal, oldVal)) {
                  var oldClasses = arrayClasses(oldVal);
                  updateClasses(oldClasses, newClasses);
                }
              }
              oldVal = copy(newVal);
            }
          }
        };
        function arrayDifference(tokens1, tokens2) {
          var values = [];
          outer:
            for (var i = 0; i < tokens1.length; i++) {
              var token = tokens1[i];
              for (var j = 0; j < tokens2.length; j++) {
                if (token == tokens2[j])
                  continue outer;
              }
              values.push(token);
            }
          return values;
        }
        function arrayClasses(classVal) {
          if (isArray(classVal)) {
            return classVal;
          } else if (isString(classVal)) {
            return classVal.split(' ');
          } else if (isObject(classVal)) {
            var classes = [], i = 0;
            forEach(classVal, function (v, k) {
              if (v) {
                classes.push(k);
              }
            });
            return classes;
          }
          return classVal;
        }
      }
    ];
  }
  var ngClassDirective = classDirective('', true);
  var ngClassOddDirective = classDirective('Odd', 0);
  var ngClassEvenDirective = classDirective('Even', 1);
  var ngCloakDirective = ngDirective({
      compile: function (element, attr) {
        attr.$set('ngCloak', undefined);
        element.removeClass('ng-cloak');
      }
    });
  var ngControllerDirective = [function () {
        return {
          scope: true,
          controller: '@',
          priority: 500
        };
      }];
  var ngEventDirectives = {};
  forEach('click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste'.split(' '), function (name) {
    var directiveName = directiveNormalize('ng-' + name);
    ngEventDirectives[directiveName] = [
      '$parse',
      function ($parse) {
        return {
          compile: function ($element, attr) {
            var fn = $parse(attr[directiveName]);
            return function (scope, element, attr) {
              element.on(lowercase(name), function (event) {
                scope.$apply(function () {
                  fn(scope, { $event: event });
                });
              });
            };
          }
        };
      }
    ];
  });
  var ngIfDirective = [
      '$animate',
      function ($animate) {
        return {
          transclude: 'element',
          priority: 600,
          terminal: true,
          restrict: 'A',
          $$tlb: true,
          link: function ($scope, $element, $attr, ctrl, $transclude) {
            var block, childScope, previousElements;
            $scope.$watch($attr.ngIf, function ngIfWatchAction(value) {
              if (toBoolean(value)) {
                if (!childScope) {
                  childScope = $scope.$new();
                  $transclude(childScope, function (clone) {
                    clone[clone.length++] = document.createComment(' end ngIf: ' + $attr.ngIf + ' ');
                    block = { clone: clone };
                    $animate.enter(clone, $element.parent(), $element);
                  });
                }
              } else {
                if (previousElements) {
                  previousElements.remove();
                  previousElements = null;
                }
                if (childScope) {
                  childScope.$destroy();
                  childScope = null;
                }
                if (block) {
                  previousElements = getBlockElements(block.clone);
                  $animate.leave(previousElements, function () {
                    previousElements = null;
                  });
                  block = null;
                }
              }
            });
          }
        };
      }
    ];
  var ngIncludeDirective = [
      '$http',
      '$templateCache',
      '$anchorScroll',
      '$animate',
      '$sce',
      function ($http, $templateCache, $anchorScroll, $animate, $sce) {
        return {
          restrict: 'ECA',
          priority: 400,
          terminal: true,
          transclude: 'element',
          controller: angular.noop,
          compile: function (element, attr) {
            var srcExp = attr.ngInclude || attr.src, onloadExp = attr.onload || '', autoScrollExp = attr.autoscroll;
            return function (scope, $element, $attr, ctrl, $transclude) {
              var changeCounter = 0, currentScope, previousElement, currentElement;
              var cleanupLastIncludeContent = function () {
                if (previousElement) {
                  previousElement.remove();
                  previousElement = null;
                }
                if (currentScope) {
                  currentScope.$destroy();
                  currentScope = null;
                }
                if (currentElement) {
                  $animate.leave(currentElement, function () {
                    previousElement = null;
                  });
                  previousElement = currentElement;
                  currentElement = null;
                }
              };
              scope.$watch($sce.parseAsResourceUrl(srcExp), function ngIncludeWatchAction(src) {
                var afterAnimation = function () {
                  if (isDefined(autoScrollExp) && (!autoScrollExp || scope.$eval(autoScrollExp))) {
                    $anchorScroll();
                  }
                };
                var thisChangeId = ++changeCounter;
                if (src) {
                  $http.get(src, { cache: $templateCache }).success(function (response) {
                    if (thisChangeId !== changeCounter)
                      return;
                    var newScope = scope.$new();
                    ctrl.template = response;
                    var clone = $transclude(newScope, function (clone) {
                        cleanupLastIncludeContent();
                        $animate.enter(clone, null, $element, afterAnimation);
                      });
                    currentScope = newScope;
                    currentElement = clone;
                    currentScope.$emit('$includeContentLoaded');
                    scope.$eval(onloadExp);
                  }).error(function () {
                    if (thisChangeId === changeCounter)
                      cleanupLastIncludeContent();
                  });
                  scope.$emit('$includeContentRequested');
                } else {
                  cleanupLastIncludeContent();
                  ctrl.template = null;
                }
              });
            };
          }
        };
      }
    ];
  var ngIncludeFillContentDirective = [
      '$compile',
      function ($compile) {
        return {
          restrict: 'ECA',
          priority: -400,
          require: 'ngInclude',
          link: function (scope, $element, $attr, ctrl) {
            $element.html(ctrl.template);
            $compile($element.contents())(scope);
          }
        };
      }
    ];
  var ngInitDirective = ngDirective({
      priority: 450,
      compile: function () {
        return {
          pre: function (scope, element, attrs) {
            scope.$eval(attrs.ngInit);
          }
        };
      }
    });
  var ngNonBindableDirective = ngDirective({
      terminal: true,
      priority: 1000
    });
  var ngPluralizeDirective = [
      '$locale',
      '$interpolate',
      function ($locale, $interpolate) {
        var BRACE = /{}/g;
        return {
          restrict: 'EA',
          link: function (scope, element, attr) {
            var numberExp = attr.count, whenExp = attr.$attr.when && element.attr(attr.$attr.when), offset = attr.offset || 0, whens = scope.$eval(whenExp) || {}, whensExpFns = {}, startSymbol = $interpolate.startSymbol(), endSymbol = $interpolate.endSymbol(), isWhen = /^when(Minus)?(.+)$/;
            forEach(attr, function (expression, attributeName) {
              if (isWhen.test(attributeName)) {
                whens[lowercase(attributeName.replace('when', '').replace('Minus', '-'))] = element.attr(attr.$attr[attributeName]);
              }
            });
            forEach(whens, function (expression, key) {
              whensExpFns[key] = $interpolate(expression.replace(BRACE, startSymbol + numberExp + '-' + offset + endSymbol));
            });
            scope.$watch(function ngPluralizeWatch() {
              var value = parseFloat(scope.$eval(numberExp));
              if (!isNaN(value)) {
                if (!(value in whens))
                  value = $locale.pluralCat(value - offset);
                return whensExpFns[value](scope, element, true);
              } else {
                return '';
              }
            }, function ngPluralizeWatchAction(newVal) {
              element.text(newVal);
            });
          }
        };
      }
    ];
  var ngRepeatDirective = [
      '$parse',
      '$animate',
      function ($parse, $animate) {
        var NG_REMOVED = '$$NG_REMOVED';
        var ngRepeatMinErr = minErr('ngRepeat');
        return {
          transclude: 'element',
          priority: 1000,
          terminal: true,
          $$tlb: true,
          link: function ($scope, $element, $attr, ctrl, $transclude) {
            var expression = $attr.ngRepeat;
            var match = expression.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/), trackByExp, trackByExpGetter, trackByIdExpFn, trackByIdArrayFn, trackByIdObjFn, lhs, rhs, valueIdentifier, keyIdentifier, hashFnLocals = { $id: hashKey };
            if (!match) {
              throw ngRepeatMinErr('iexp', 'Expected expression in form of \'_item_ in _collection_[ track by _id_]\' but got \'{0}\'.', expression);
            }
            lhs = match[1];
            rhs = match[2];
            trackByExp = match[3];
            if (trackByExp) {
              trackByExpGetter = $parse(trackByExp);
              trackByIdExpFn = function (key, value, index) {
                if (keyIdentifier)
                  hashFnLocals[keyIdentifier] = key;
                hashFnLocals[valueIdentifier] = value;
                hashFnLocals.$index = index;
                return trackByExpGetter($scope, hashFnLocals);
              };
            } else {
              trackByIdArrayFn = function (key, value) {
                return hashKey(value);
              };
              trackByIdObjFn = function (key) {
                return key;
              };
            }
            match = lhs.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
            if (!match) {
              throw ngRepeatMinErr('iidexp', '\'_item_\' in \'_item_ in _collection_\' should be an identifier or \'(_key_, _value_)\' expression, but got \'{0}\'.', lhs);
            }
            valueIdentifier = match[3] || match[1];
            keyIdentifier = match[2];
            var lastBlockMap = {};
            $scope.$watchCollection(rhs, function ngRepeatAction(collection) {
              var index, length, previousNode = $element[0], nextNode, nextBlockMap = {}, arrayLength, childScope, key, value, trackById, trackByIdFn, collectionKeys, block, nextBlockOrder = [], elementsToRemove;
              if (isArrayLike(collection)) {
                collectionKeys = collection;
                trackByIdFn = trackByIdExpFn || trackByIdArrayFn;
              } else {
                trackByIdFn = trackByIdExpFn || trackByIdObjFn;
                collectionKeys = [];
                for (key in collection) {
                  if (collection.hasOwnProperty(key) && key.charAt(0) != '$') {
                    collectionKeys.push(key);
                  }
                }
                collectionKeys.sort();
              }
              arrayLength = collectionKeys.length;
              length = nextBlockOrder.length = collectionKeys.length;
              for (index = 0; index < length; index++) {
                key = collection === collectionKeys ? index : collectionKeys[index];
                value = collection[key];
                trackById = trackByIdFn(key, value, index);
                assertNotHasOwnProperty(trackById, '`track by` id');
                if (lastBlockMap.hasOwnProperty(trackById)) {
                  block = lastBlockMap[trackById];
                  delete lastBlockMap[trackById];
                  nextBlockMap[trackById] = block;
                  nextBlockOrder[index] = block;
                } else if (nextBlockMap.hasOwnProperty(trackById)) {
                  forEach(nextBlockOrder, function (block) {
                    if (block && block.scope)
                      lastBlockMap[block.id] = block;
                  });
                  throw ngRepeatMinErr('dupes', 'Duplicates in a repeater are not allowed. Use \'track by\' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}', expression, trackById);
                } else {
                  nextBlockOrder[index] = { id: trackById };
                  nextBlockMap[trackById] = false;
                }
              }
              for (key in lastBlockMap) {
                if (lastBlockMap.hasOwnProperty(key)) {
                  block = lastBlockMap[key];
                  elementsToRemove = getBlockElements(block.clone);
                  $animate.leave(elementsToRemove);
                  forEach(elementsToRemove, function (element) {
                    element[NG_REMOVED] = true;
                  });
                  block.scope.$destroy();
                }
              }
              for (index = 0, length = collectionKeys.length; index < length; index++) {
                key = collection === collectionKeys ? index : collectionKeys[index];
                value = collection[key];
                block = nextBlockOrder[index];
                if (nextBlockOrder[index - 1])
                  previousNode = getBlockEnd(nextBlockOrder[index - 1]);
                if (block.scope) {
                  childScope = block.scope;
                  nextNode = previousNode;
                  do {
                    nextNode = nextNode.nextSibling;
                  } while (nextNode && nextNode[NG_REMOVED]);
                  if (getBlockStart(block) != nextNode) {
                    $animate.move(getBlockElements(block.clone), null, jqLite(previousNode));
                  }
                  previousNode = getBlockEnd(block);
                } else {
                  childScope = $scope.$new();
                }
                childScope[valueIdentifier] = value;
                if (keyIdentifier)
                  childScope[keyIdentifier] = key;
                childScope.$index = index;
                childScope.$first = index === 0;
                childScope.$last = index === arrayLength - 1;
                childScope.$middle = !(childScope.$first || childScope.$last);
                childScope.$odd = !(childScope.$even = (index & 1) === 0);
                if (!block.scope) {
                  $transclude(childScope, function (clone) {
                    clone[clone.length++] = document.createComment(' end ngRepeat: ' + expression + ' ');
                    $animate.enter(clone, null, jqLite(previousNode));
                    previousNode = clone;
                    block.scope = childScope;
                    block.clone = clone;
                    nextBlockMap[block.id] = block;
                  });
                }
              }
              lastBlockMap = nextBlockMap;
            });
          }
        };
        function getBlockStart(block) {
          return block.clone[0];
        }
        function getBlockEnd(block) {
          return block.clone[block.clone.length - 1];
        }
      }
    ];
  var ngShowDirective = [
      '$animate',
      function ($animate) {
        return function (scope, element, attr) {
          scope.$watch(attr.ngShow, function ngShowWatchAction(value) {
            $animate[toBoolean(value) ? 'removeClass' : 'addClass'](element, 'ng-hide');
          });
        };
      }
    ];
  var ngHideDirective = [
      '$animate',
      function ($animate) {
        return function (scope, element, attr) {
          scope.$watch(attr.ngHide, function ngHideWatchAction(value) {
            $animate[toBoolean(value) ? 'addClass' : 'removeClass'](element, 'ng-hide');
          });
        };
      }
    ];
  var ngStyleDirective = ngDirective(function (scope, element, attr) {
      scope.$watch(attr.ngStyle, function ngStyleWatchAction(newStyles, oldStyles) {
        if (oldStyles && newStyles !== oldStyles) {
          forEach(oldStyles, function (val, style) {
            element.css(style, '');
          });
        }
        if (newStyles)
          element.css(newStyles);
      }, true);
    });
  var ngSwitchDirective = [
      '$animate',
      function ($animate) {
        return {
          restrict: 'EA',
          require: 'ngSwitch',
          controller: [
            '$scope',
            function ngSwitchController() {
              this.cases = {};
            }
          ],
          link: function (scope, element, attr, ngSwitchController) {
            var watchExpr = attr.ngSwitch || attr.on, selectedTranscludes, selectedElements, previousElements, selectedScopes = [];
            scope.$watch(watchExpr, function ngSwitchWatchAction(value) {
              var i, ii = selectedScopes.length;
              if (ii > 0) {
                if (previousElements) {
                  for (i = 0; i < ii; i++) {
                    previousElements[i].remove();
                  }
                  previousElements = null;
                }
                previousElements = [];
                for (i = 0; i < ii; i++) {
                  var selected = selectedElements[i];
                  selectedScopes[i].$destroy();
                  previousElements[i] = selected;
                  $animate.leave(selected, function () {
                    previousElements.splice(i, 1);
                    if (previousElements.length === 0) {
                      previousElements = null;
                    }
                  });
                }
              }
              selectedElements = [];
              selectedScopes = [];
              if (selectedTranscludes = ngSwitchController.cases['!' + value] || ngSwitchController.cases['?']) {
                scope.$eval(attr.change);
                forEach(selectedTranscludes, function (selectedTransclude) {
                  var selectedScope = scope.$new();
                  selectedScopes.push(selectedScope);
                  selectedTransclude.transclude(selectedScope, function (caseElement) {
                    var anchor = selectedTransclude.element;
                    selectedElements.push(caseElement);
                    $animate.enter(caseElement, anchor.parent(), anchor);
                  });
                });
              }
            });
          }
        };
      }
    ];
  var ngSwitchWhenDirective = ngDirective({
      transclude: 'element',
      priority: 800,
      require: '^ngSwitch',
      link: function (scope, element, attrs, ctrl, $transclude) {
        ctrl.cases['!' + attrs.ngSwitchWhen] = ctrl.cases['!' + attrs.ngSwitchWhen] || [];
        ctrl.cases['!' + attrs.ngSwitchWhen].push({
          transclude: $transclude,
          element: element
        });
      }
    });
  var ngSwitchDefaultDirective = ngDirective({
      transclude: 'element',
      priority: 800,
      require: '^ngSwitch',
      link: function (scope, element, attr, ctrl, $transclude) {
        ctrl.cases['?'] = ctrl.cases['?'] || [];
        ctrl.cases['?'].push({
          transclude: $transclude,
          element: element
        });
      }
    });
  var ngTranscludeDirective = ngDirective({
      link: function ($scope, $element, $attrs, controller, $transclude) {
        if (!$transclude) {
          throw minErr('ngTransclude')('orphan', 'Illegal use of ngTransclude directive in the template! ' + 'No parent directive that requires a transclusion found. ' + 'Element: {0}', startingTag($element));
        }
        $transclude(function (clone) {
          $element.empty();
          $element.append(clone);
        });
      }
    });
  var scriptDirective = [
      '$templateCache',
      function ($templateCache) {
        return {
          restrict: 'E',
          terminal: true,
          compile: function (element, attr) {
            if (attr.type == 'text/ng-template') {
              var templateUrl = attr.id, text = element[0].text;
              $templateCache.put(templateUrl, text);
            }
          }
        };
      }
    ];
  var ngOptionsMinErr = minErr('ngOptions');
  var ngOptionsDirective = valueFn({ terminal: true });
  var selectDirective = [
      '$compile',
      '$parse',
      function ($compile, $parse) {
        var NG_OPTIONS_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, nullModelCtrl = { $setViewValue: noop };
        return {
          restrict: 'E',
          require: [
            'select',
            '?ngModel'
          ],
          controller: [
            '$element',
            '$scope',
            '$attrs',
            function ($element, $scope, $attrs) {
              var self = this, optionsMap = {}, ngModelCtrl = nullModelCtrl, nullOption, unknownOption;
              self.databound = $attrs.ngModel;
              self.init = function (ngModelCtrl_, nullOption_, unknownOption_) {
                ngModelCtrl = ngModelCtrl_;
                nullOption = nullOption_;
                unknownOption = unknownOption_;
              };
              self.addOption = function (value) {
                assertNotHasOwnProperty(value, '"option value"');
                optionsMap[value] = true;
                if (ngModelCtrl.$viewValue == value) {
                  $element.val(value);
                  if (unknownOption.parent())
                    unknownOption.remove();
                }
              };
              self.removeOption = function (value) {
                if (this.hasOption(value)) {
                  delete optionsMap[value];
                  if (ngModelCtrl.$viewValue == value) {
                    this.renderUnknownOption(value);
                  }
                }
              };
              self.renderUnknownOption = function (val) {
                var unknownVal = '? ' + hashKey(val) + ' ?';
                unknownOption.val(unknownVal);
                $element.prepend(unknownOption);
                $element.val(unknownVal);
                unknownOption.prop('selected', true);
              };
              self.hasOption = function (value) {
                return optionsMap.hasOwnProperty(value);
              };
              $scope.$on('$destroy', function () {
                self.renderUnknownOption = noop;
              });
            }
          ],
          link: function (scope, element, attr, ctrls) {
            if (!ctrls[1])
              return;
            var selectCtrl = ctrls[0], ngModelCtrl = ctrls[1], multiple = attr.multiple, optionsExp = attr.ngOptions, nullOption = false, emptyOption, optionTemplate = jqLite(document.createElement('option')), optGroupTemplate = jqLite(document.createElement('optgroup')), unknownOption = optionTemplate.clone();
            for (var i = 0, children = element.children(), ii = children.length; i < ii; i++) {
              if (children[i].value === '') {
                emptyOption = nullOption = children.eq(i);
                break;
              }
            }
            selectCtrl.init(ngModelCtrl, nullOption, unknownOption);
            if (multiple) {
              ngModelCtrl.$isEmpty = function (value) {
                return !value || value.length === 0;
              };
            }
            if (optionsExp)
              setupAsOptions(scope, element, ngModelCtrl);
            else if (multiple)
              setupAsMultiple(scope, element, ngModelCtrl);
            else
              setupAsSingle(scope, element, ngModelCtrl, selectCtrl);
            function setupAsSingle(scope, selectElement, ngModelCtrl, selectCtrl) {
              ngModelCtrl.$render = function () {
                var viewValue = ngModelCtrl.$viewValue;
                if (selectCtrl.hasOption(viewValue)) {
                  if (unknownOption.parent())
                    unknownOption.remove();
                  selectElement.val(viewValue);
                  if (viewValue === '')
                    emptyOption.prop('selected', true);
                } else {
                  if (isUndefined(viewValue) && emptyOption) {
                    selectElement.val('');
                  } else {
                    selectCtrl.renderUnknownOption(viewValue);
                  }
                }
              };
              selectElement.on('change', function () {
                scope.$apply(function () {
                  if (unknownOption.parent())
                    unknownOption.remove();
                  ngModelCtrl.$setViewValue(selectElement.val());
                });
              });
            }
            function setupAsMultiple(scope, selectElement, ctrl) {
              var lastView;
              ctrl.$render = function () {
                var items = new HashMap(ctrl.$viewValue);
                forEach(selectElement.find('option'), function (option) {
                  option.selected = isDefined(items.get(option.value));
                });
              };
              scope.$watch(function selectMultipleWatch() {
                if (!equals(lastView, ctrl.$viewValue)) {
                  lastView = copy(ctrl.$viewValue);
                  ctrl.$render();
                }
              });
              selectElement.on('change', function () {
                scope.$apply(function () {
                  var array = [];
                  forEach(selectElement.find('option'), function (option) {
                    if (option.selected) {
                      array.push(option.value);
                    }
                  });
                  ctrl.$setViewValue(array);
                });
              });
            }
            function setupAsOptions(scope, selectElement, ctrl) {
              var match;
              if (!(match = optionsExp.match(NG_OPTIONS_REGEXP))) {
                throw ngOptionsMinErr('iexp', 'Expected expression in form of ' + '\'_select_ (as _label_)? for (_key_,)?_value_ in _collection_\'' + ' but got \'{0}\'. Element: {1}', optionsExp, startingTag(selectElement));
              }
              var displayFn = $parse(match[2] || match[1]), valueName = match[4] || match[6], keyName = match[5], groupByFn = $parse(match[3] || ''), valueFn = $parse(match[2] ? match[1] : valueName), valuesFn = $parse(match[7]), track = match[8], trackFn = track ? $parse(match[8]) : null, optionGroupsCache = [[{
                      element: selectElement,
                      label: ''
                    }]];
              if (nullOption) {
                $compile(nullOption)(scope);
                nullOption.removeClass('ng-scope');
                nullOption.remove();
              }
              selectElement.empty();
              selectElement.on('change', function () {
                scope.$apply(function () {
                  var optionGroup, collection = valuesFn(scope) || [], locals = {}, key, value, optionElement, index, groupIndex, length, groupLength, trackIndex;
                  if (multiple) {
                    value = [];
                    for (groupIndex = 0, groupLength = optionGroupsCache.length; groupIndex < groupLength; groupIndex++) {
                      optionGroup = optionGroupsCache[groupIndex];
                      for (index = 1, length = optionGroup.length; index < length; index++) {
                        if ((optionElement = optionGroup[index].element)[0].selected) {
                          key = optionElement.val();
                          if (keyName)
                            locals[keyName] = key;
                          if (trackFn) {
                            for (trackIndex = 0; trackIndex < collection.length; trackIndex++) {
                              locals[valueName] = collection[trackIndex];
                              if (trackFn(scope, locals) == key)
                                break;
                            }
                          } else {
                            locals[valueName] = collection[key];
                          }
                          value.push(valueFn(scope, locals));
                        }
                      }
                    }
                  } else {
                    key = selectElement.val();
                    if (key == '?') {
                      value = undefined;
                    } else if (key === '') {
                      value = null;
                    } else {
                      if (trackFn) {
                        for (trackIndex = 0; trackIndex < collection.length; trackIndex++) {
                          locals[valueName] = collection[trackIndex];
                          if (trackFn(scope, locals) == key) {
                            value = valueFn(scope, locals);
                            break;
                          }
                        }
                      } else {
                        locals[valueName] = collection[key];
                        if (keyName)
                          locals[keyName] = key;
                        value = valueFn(scope, locals);
                      }
                    }
                    if (optionGroupsCache[0].length > 1) {
                      if (optionGroupsCache[0][1].id !== key) {
                        optionGroupsCache[0][1].selected = false;
                      }
                    }
                  }
                  ctrl.$setViewValue(value);
                });
              });
              ctrl.$render = render;
              scope.$watch(render);
              function render() {
                var optionGroups = { '': [] }, optionGroupNames = [''], optionGroupName, optionGroup, option, existingParent, existingOptions, existingOption, modelValue = ctrl.$modelValue, values = valuesFn(scope) || [], keys = keyName ? sortedKeys(values) : values, key, groupLength, length, groupIndex, index, locals = {}, selected, selectedSet = false, lastElement, element, label;
                if (multiple) {
                  if (trackFn && isArray(modelValue)) {
                    selectedSet = new HashMap([]);
                    for (var trackIndex = 0; trackIndex < modelValue.length; trackIndex++) {
                      locals[valueName] = modelValue[trackIndex];
                      selectedSet.put(trackFn(scope, locals), modelValue[trackIndex]);
                    }
                  } else {
                    selectedSet = new HashMap(modelValue);
                  }
                }
                for (index = 0; length = keys.length, index < length; index++) {
                  key = index;
                  if (keyName) {
                    key = keys[index];
                    if (key.charAt(0) === '$')
                      continue;
                    locals[keyName] = key;
                  }
                  locals[valueName] = values[key];
                  optionGroupName = groupByFn(scope, locals) || '';
                  if (!(optionGroup = optionGroups[optionGroupName])) {
                    optionGroup = optionGroups[optionGroupName] = [];
                    optionGroupNames.push(optionGroupName);
                  }
                  if (multiple) {
                    selected = isDefined(selectedSet.remove(trackFn ? trackFn(scope, locals) : valueFn(scope, locals)));
                  } else {
                    if (trackFn) {
                      var modelCast = {};
                      modelCast[valueName] = modelValue;
                      selected = trackFn(scope, modelCast) === trackFn(scope, locals);
                    } else {
                      selected = modelValue === valueFn(scope, locals);
                    }
                    selectedSet = selectedSet || selected;
                  }
                  label = displayFn(scope, locals);
                  label = isDefined(label) ? label : '';
                  optionGroup.push({
                    id: trackFn ? trackFn(scope, locals) : keyName ? keys[index] : index,
                    label: label,
                    selected: selected
                  });
                }
                if (!multiple) {
                  if (nullOption || modelValue === null) {
                    optionGroups[''].unshift({
                      id: '',
                      label: '',
                      selected: !selectedSet
                    });
                  } else if (!selectedSet) {
                    optionGroups[''].unshift({
                      id: '?',
                      label: '',
                      selected: true
                    });
                  }
                }
                for (groupIndex = 0, groupLength = optionGroupNames.length; groupIndex < groupLength; groupIndex++) {
                  optionGroupName = optionGroupNames[groupIndex];
                  optionGroup = optionGroups[optionGroupName];
                  if (optionGroupsCache.length <= groupIndex) {
                    existingParent = {
                      element: optGroupTemplate.clone().attr('label', optionGroupName),
                      label: optionGroup.label
                    };
                    existingOptions = [existingParent];
                    optionGroupsCache.push(existingOptions);
                    selectElement.append(existingParent.element);
                  } else {
                    existingOptions = optionGroupsCache[groupIndex];
                    existingParent = existingOptions[0];
                    if (existingParent.label != optionGroupName) {
                      existingParent.element.attr('label', existingParent.label = optionGroupName);
                    }
                  }
                  lastElement = null;
                  for (index = 0, length = optionGroup.length; index < length; index++) {
                    option = optionGroup[index];
                    if (existingOption = existingOptions[index + 1]) {
                      lastElement = existingOption.element;
                      if (existingOption.label !== option.label) {
                        lastElement.text(existingOption.label = option.label);
                      }
                      if (existingOption.id !== option.id) {
                        lastElement.val(existingOption.id = option.id);
                      }
                      if (existingOption.selected !== option.selected) {
                        lastElement.prop('selected', existingOption.selected = option.selected);
                      }
                    } else {
                      if (option.id === '' && nullOption) {
                        element = nullOption;
                      } else {
                        (element = optionTemplate.clone()).val(option.id).attr('selected', option.selected).text(option.label);
                      }
                      existingOptions.push(existingOption = {
                        element: element,
                        label: option.label,
                        id: option.id,
                        selected: option.selected
                      });
                      if (lastElement) {
                        lastElement.after(element);
                      } else {
                        existingParent.element.append(element);
                      }
                      lastElement = element;
                    }
                  }
                  index++;
                  while (existingOptions.length > index) {
                    existingOptions.pop().element.remove();
                  }
                }
                while (optionGroupsCache.length > groupIndex) {
                  optionGroupsCache.pop()[0].element.remove();
                }
              }
            }
          }
        };
      }
    ];
  var optionDirective = [
      '$interpolate',
      function ($interpolate) {
        var nullSelectCtrl = {
            addOption: noop,
            removeOption: noop
          };
        return {
          restrict: 'E',
          priority: 100,
          compile: function (element, attr) {
            if (isUndefined(attr.value)) {
              var interpolateFn = $interpolate(element.text(), true);
              if (!interpolateFn) {
                attr.$set('value', element.text());
              }
            }
            return function (scope, element, attr) {
              var selectCtrlName = '$selectController', parent = element.parent(), selectCtrl = parent.data(selectCtrlName) || parent.parent().data(selectCtrlName);
              if (selectCtrl && selectCtrl.databound) {
                element.prop('selected', false);
              } else {
                selectCtrl = nullSelectCtrl;
              }
              if (interpolateFn) {
                scope.$watch(interpolateFn, function interpolateWatchAction(newVal, oldVal) {
                  attr.$set('value', newVal);
                  if (newVal !== oldVal)
                    selectCtrl.removeOption(oldVal);
                  selectCtrl.addOption(newVal);
                });
              } else {
                selectCtrl.addOption(attr.value);
              }
              element.on('$destroy', function () {
                selectCtrl.removeOption(attr.value);
              });
            };
          }
        };
      }
    ];
  var styleDirective = valueFn({
      restrict: 'E',
      terminal: true
    });
  if (window.angular.bootstrap) {
    console.log('WARNING: Tried to load angular more than once.');
    return;
  }
  bindJQuery();
  publishExternalAPI(angular);
  jqLite(document).ready(function () {
    angularInit(document, bootstrap);
  });
}(window, document));
!angular.$$csp() && angular.element(document).find('head').prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}</style>');(function (window, angular, undefined) {
  'use strict';
  var $resourceMinErr = angular.$$minErr('$resource');
  var MEMBER_NAME_REGEX = /^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;
  function isValidDottedPath(path) {
    return path != null && path !== '' && path !== 'hasOwnProperty' && MEMBER_NAME_REGEX.test('.' + path);
  }
  function lookupDottedPath(obj, path) {
    if (!isValidDottedPath(path)) {
      throw $resourceMinErr('badmember', 'Dotted member path "@{0}" is invalid.', path);
    }
    var keys = path.split('.');
    for (var i = 0, ii = keys.length; i < ii && obj !== undefined; i++) {
      var key = keys[i];
      obj = obj !== null ? obj[key] : undefined;
    }
    return obj;
  }
  function shallowClearAndCopy(src, dst) {
    dst = dst || {};
    angular.forEach(dst, function (value, key) {
      delete dst[key];
    });
    for (var key in src) {
      if (src.hasOwnProperty(key) && !(key.charAt(0) === '$' && key.charAt(1) === '$')) {
        dst[key] = src[key];
      }
    }
    return dst;
  }
  angular.module('ngResource', ['ng']).factory('$resource', [
    '$http',
    '$q',
    function ($http, $q) {
      var DEFAULT_ACTIONS = {
          'get': { method: 'GET' },
          'save': { method: 'POST' },
          'query': {
            method: 'GET',
            isArray: true
          },
          'remove': { method: 'DELETE' },
          'delete': { method: 'DELETE' }
        };
      var noop = angular.noop, forEach = angular.forEach, extend = angular.extend, copy = angular.copy, isFunction = angular.isFunction;
      function encodeUriSegment(val) {
        return encodeUriQuery(val, true).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+');
      }
      function encodeUriQuery(val, pctEncodeSpaces) {
        return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, pctEncodeSpaces ? '%20' : '+');
      }
      function Route(template, defaults) {
        this.template = template;
        this.defaults = defaults || {};
        this.urlParams = {};
      }
      Route.prototype = {
        setUrlParams: function (config, params, actionUrl) {
          var self = this, url = actionUrl || self.template, val, encodedVal;
          var urlParams = self.urlParams = {};
          forEach(url.split(/\W/), function (param) {
            if (param === 'hasOwnProperty') {
              throw $resourceMinErr('badname', 'hasOwnProperty is not a valid parameter name.');
            }
            if (!new RegExp('^\\d+$').test(param) && param && new RegExp('(^|[^\\\\]):' + param + '(\\W|$)').test(url)) {
              urlParams[param] = true;
            }
          });
          url = url.replace(/\\:/g, ':');
          params = params || {};
          forEach(self.urlParams, function (_, urlParam) {
            val = params.hasOwnProperty(urlParam) ? params[urlParam] : self.defaults[urlParam];
            if (angular.isDefined(val) && val !== null) {
              encodedVal = encodeUriSegment(val);
              url = url.replace(new RegExp(':' + urlParam + '(\\W|$)', 'g'), function (match, p1) {
                return encodedVal + p1;
              });
            } else {
              url = url.replace(new RegExp('(/?):' + urlParam + '(\\W|$)', 'g'), function (match, leadingSlashes, tail) {
                if (tail.charAt(0) == '/') {
                  return tail;
                } else {
                  return leadingSlashes + tail;
                }
              });
            }
          });
          url = url.replace(/\/+$/, '') || '/';
          url = url.replace(/\/\.(?=\w+($|\?))/, '.');
          config.url = url.replace(/\/\\\./, '/.');
          forEach(params, function (value, key) {
            if (!self.urlParams[key]) {
              config.params = config.params || {};
              config.params[key] = value;
            }
          });
        }
      };
      function resourceFactory(url, paramDefaults, actions) {
        var route = new Route(url);
        actions = extend({}, DEFAULT_ACTIONS, actions);
        function extractParams(data, actionParams) {
          var ids = {};
          actionParams = extend({}, paramDefaults, actionParams);
          forEach(actionParams, function (value, key) {
            if (isFunction(value)) {
              value = value();
            }
            ids[key] = value && value.charAt && value.charAt(0) == '@' ? lookupDottedPath(data, value.substr(1)) : value;
          });
          return ids;
        }
        function defaultResponseInterceptor(response) {
          return response.resource;
        }
        function Resource(value) {
          shallowClearAndCopy(value || {}, this);
        }
        forEach(actions, function (action, name) {
          var hasBody = /^(POST|PUT|PATCH)$/i.test(action.method);
          Resource[name] = function (a1, a2, a3, a4) {
            var params = {}, data, success, error;
            switch (arguments.length) {
            case 4:
              error = a4;
              success = a3;
            case 3:
            case 2:
              if (isFunction(a2)) {
                if (isFunction(a1)) {
                  success = a1;
                  error = a2;
                  break;
                }
                success = a2;
                error = a3;
              } else {
                params = a1;
                data = a2;
                success = a3;
                break;
              }
            case 1:
              if (isFunction(a1))
                success = a1;
              else if (hasBody)
                data = a1;
              else
                params = a1;
              break;
            case 0:
              break;
            default:
              throw $resourceMinErr('badargs', 'Expected up to 4 arguments [params, data, success, error], got {0} arguments', arguments.length);
            }
            var isInstanceCall = this instanceof Resource;
            var value = isInstanceCall ? data : action.isArray ? [] : new Resource(data);
            var httpConfig = {};
            var responseInterceptor = action.interceptor && action.interceptor.response || defaultResponseInterceptor;
            var responseErrorInterceptor = action.interceptor && action.interceptor.responseError || undefined;
            forEach(action, function (value, key) {
              if (key != 'params' && key != 'isArray' && key != 'interceptor') {
                httpConfig[key] = copy(value);
              }
            });
            if (hasBody)
              httpConfig.data = data;
            route.setUrlParams(httpConfig, extend({}, extractParams(data, action.params || {}), params), action.url);
            var promise = $http(httpConfig).then(function (response) {
                var data = response.data, promise = value.$promise;
                if (data) {
                  if (angular.isArray(data) !== !!action.isArray) {
                    throw $resourceMinErr('badcfg', 'Error in resource configuration. Expected ' + 'response to contain an {0} but got an {1}', action.isArray ? 'array' : 'object', angular.isArray(data) ? 'array' : 'object');
                  }
                  if (action.isArray) {
                    value.length = 0;
                    forEach(data, function (item) {
                      value.push(new Resource(item));
                    });
                  } else {
                    shallowClearAndCopy(data, value);
                    value.$promise = promise;
                  }
                }
                value.$resolved = true;
                response.resource = value;
                return response;
              }, function (response) {
                value.$resolved = true;
                (error || noop)(response);
                return $q.reject(response);
              });
            promise = promise.then(function (response) {
              var value = responseInterceptor(response);
              (success || noop)(value, response.headers);
              return value;
            }, responseErrorInterceptor);
            if (!isInstanceCall) {
              value.$promise = promise;
              value.$resolved = false;
              return value;
            }
            return promise;
          };
          Resource.prototype['$' + name] = function (params, success, error) {
            if (isFunction(params)) {
              error = success;
              success = params;
              params = {};
            }
            var result = Resource[name].call(this, params, this, success, error);
            return result.$promise || result;
          };
        });
        Resource.bind = function (additionalParamDefaults) {
          return resourceFactory(url, extend({}, paramDefaults, additionalParamDefaults), actions);
        };
        return Resource;
      }
      return resourceFactory;
    }
  ]);
}(window, window.angular));App = angular.module('SportsNewsLA', [
  'ngResource',
  'ui.bootstrap'
]);+function ($) {
  'use strict';
  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options);
    this.$window = $(window).on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', $.proxy(this.checkPositionWithEventLoop, this));
    this.$element = $(element);
    this.affixed = this.unpin = this.pinnedOffset = null;
    this.checkPosition();
  };
  Affix.RESET = 'affix affix-top affix-bottom';
  Affix.DEFAULTS = { offset: 0 };
  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset)
      return this.pinnedOffset;
    this.$element.removeClass(Affix.RESET).addClass('affix');
    var scrollTop = this.$window.scrollTop();
    var position = this.$element.offset();
    return this.pinnedOffset = position.top - scrollTop;
  };
  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1);
  };
  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible'))
      return;
    var scrollHeight = $(document).height();
    var scrollTop = this.$window.scrollTop();
    var position = this.$element.offset();
    var offset = this.options.offset;
    var offsetTop = offset.top;
    var offsetBottom = offset.bottom;
    if (this.affixed == 'top')
      position.top += scrollTop;
    if (typeof offset != 'object')
      offsetBottom = offsetTop = offset;
    if (typeof offsetTop == 'function')
      offsetTop = offset.top(this.$element);
    if (typeof offsetBottom == 'function')
      offsetBottom = offset.bottom(this.$element);
    var affix = this.unpin != null && scrollTop + this.unpin <= position.top ? false : offsetBottom != null && position.top + this.$element.height() >= scrollHeight - offsetBottom ? 'bottom' : offsetTop != null && scrollTop <= offsetTop ? 'top' : false;
    if (this.affixed === affix)
      return;
    if (this.unpin)
      this.$element.css('top', '');
    var affixType = 'affix' + (affix ? '-' + affix : '');
    var e = $.Event(affixType + '.bs.affix');
    this.$element.trigger(e);
    if (e.isDefaultPrevented())
      return;
    this.affixed = affix;
    this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null;
    this.$element.removeClass(Affix.RESET).addClass(affixType).trigger($.Event(affixType.replace('affix', 'affixed')));
    if (affix == 'bottom') {
      this.$element.offset({ top: scrollHeight - offsetBottom - this.$element.height() });
    }
  };
  var old = $.fn.affix;
  $.fn.affix = function (option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.affix');
      var options = typeof option == 'object' && option;
      if (!data)
        $this.data('bs.affix', data = new Affix(this, options));
      if (typeof option == 'string')
        data[option]();
    });
  };
  $.fn.affix.Constructor = Affix;
  $.fn.affix.noConflict = function () {
    $.fn.affix = old;
    return this;
  };
  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this);
      var data = $spy.data();
      data.offset = data.offset || {};
      if (data.offsetBottom)
        data.offset.bottom = data.offsetBottom;
      if (data.offsetTop)
        data.offset.top = data.offsetTop;
      $spy.affix(data);
    });
  });
}(jQuery);+function ($) {
  'use strict';
  var dismiss = '[data-dismiss="alert"]';
  var Alert = function (el) {
    $(el).on('click', dismiss, this.close);
  };
  Alert.prototype.close = function (e) {
    var $this = $(this);
    var selector = $this.attr('data-target');
    if (!selector) {
      selector = $this.attr('href');
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '');
    }
    var $parent = $(selector);
    if (e)
      e.preventDefault();
    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent();
    }
    $parent.trigger(e = $.Event('close.bs.alert'));
    if (e.isDefaultPrevented())
      return;
    $parent.removeClass('in');
    function removeElement() {
      $parent.trigger('closed.bs.alert').remove();
    }
    $.support.transition && $parent.hasClass('fade') ? $parent.one($.support.transition.end, removeElement).emulateTransitionEnd(150) : removeElement();
  };
  var old = $.fn.alert;
  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.alert');
      if (!data)
        $this.data('bs.alert', data = new Alert(this));
      if (typeof option == 'string')
        data[option].call($this);
    });
  };
  $.fn.alert.Constructor = Alert;
  $.fn.alert.noConflict = function () {
    $.fn.alert = old;
    return this;
  };
  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close);
}(jQuery);+function ($) {
  'use strict';
  var Button = function (element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Button.DEFAULTS, options);
    this.isLoading = false;
  };
  Button.DEFAULTS = { loadingText: 'loading...' };
  Button.prototype.setState = function (state) {
    var d = 'disabled';
    var $el = this.$element;
    var val = $el.is('input') ? 'val' : 'html';
    var data = $el.data();
    state = state + 'Text';
    if (!data.resetText)
      $el.data('resetText', $el[val]());
    $el[val](data[state] || this.options[state]);
    setTimeout($.proxy(function () {
      if (state == 'loadingText') {
        this.isLoading = true;
        $el.addClass(d).attr(d, d);
      } else if (this.isLoading) {
        this.isLoading = false;
        $el.removeClass(d).removeAttr(d);
      }
    }, this), 0);
  };
  Button.prototype.toggle = function () {
    var changed = true;
    var $parent = this.$element.closest('[data-toggle="buttons"]');
    if ($parent.length) {
      var $input = this.$element.find('input');
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active'))
          changed = false;
        else
          $parent.find('.active').removeClass('active');
      }
      if (changed)
        $input.prop('checked', !this.$element.hasClass('active')).trigger('change');
    }
    if (changed)
      this.$element.toggleClass('active');
  };
  var old = $.fn.button;
  $.fn.button = function (option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.button');
      var options = typeof option == 'object' && option;
      if (!data)
        $this.data('bs.button', data = new Button(this, options));
      if (option == 'toggle')
        data.toggle();
      else if (option)
        data.setState(option);
    });
  };
  $.fn.button.Constructor = Button;
  $.fn.button.noConflict = function () {
    $.fn.button = old;
    return this;
  };
  $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target);
    if (!$btn.hasClass('btn'))
      $btn = $btn.closest('.btn');
    $btn.button('toggle');
    e.preventDefault();
  });
}(jQuery);+function ($) {
  'use strict';
  var Carousel = function (element, options) {
    this.$element = $(element);
    this.$indicators = this.$element.find('.carousel-indicators');
    this.options = options;
    this.paused = this.sliding = this.interval = this.$active = this.$items = null;
    this.options.pause == 'hover' && this.$element.on('mouseenter', $.proxy(this.pause, this)).on('mouseleave', $.proxy(this.cycle, this));
  };
  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true
  };
  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false);
    this.interval && clearInterval(this.interval);
    this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval));
    return this;
  };
  Carousel.prototype.getActiveIndex = function () {
    this.$active = this.$element.find('.item.active');
    this.$items = this.$active.parent().children();
    return this.$items.index(this.$active);
  };
  Carousel.prototype.to = function (pos) {
    var that = this;
    var activeIndex = this.getActiveIndex();
    if (pos > this.$items.length - 1 || pos < 0)
      return;
    if (this.sliding)
      return this.$element.one('slid.bs.carousel', function () {
        that.to(pos);
      });
    if (activeIndex == pos)
      return this.pause().cycle();
    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]));
  };
  Carousel.prototype.pause = function (e) {
    e || (this.paused = true);
    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end);
      this.cycle(true);
    }
    this.interval = clearInterval(this.interval);
    return this;
  };
  Carousel.prototype.next = function () {
    if (this.sliding)
      return;
    return this.slide('next');
  };
  Carousel.prototype.prev = function () {
    if (this.sliding)
      return;
    return this.slide('prev');
  };
  Carousel.prototype.slide = function (type, next) {
    var $active = this.$element.find('.item.active');
    var $next = next || $active[type]();
    var isCycling = this.interval;
    var direction = type == 'next' ? 'left' : 'right';
    var fallback = type == 'next' ? 'first' : 'last';
    var that = this;
    if (!$next.length) {
      if (!this.options.wrap)
        return;
      $next = this.$element.find('.item')[fallback]();
    }
    if ($next.hasClass('active'))
      return this.sliding = false;
    var e = $.Event('slide.bs.carousel', {
        relatedTarget: $next[0],
        direction: direction
      });
    this.$element.trigger(e);
    if (e.isDefaultPrevented())
      return;
    this.sliding = true;
    isCycling && this.pause();
    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active');
      this.$element.one('slid.bs.carousel', function () {
        var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()]);
        $nextIndicator && $nextIndicator.addClass('active');
      });
    }
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type);
      $next[0].offsetWidth;
      $active.addClass(direction);
      $next.addClass(direction);
      $active.one($.support.transition.end, function () {
        $next.removeClass([
          type,
          direction
        ].join(' ')).addClass('active');
        $active.removeClass([
          'active',
          direction
        ].join(' '));
        that.sliding = false;
        setTimeout(function () {
          that.$element.trigger('slid.bs.carousel');
        }, 0);
      }).emulateTransitionEnd($active.css('transition-duration').slice(0, -1) * 1000);
    } else {
      $active.removeClass('active');
      $next.addClass('active');
      this.sliding = false;
      this.$element.trigger('slid.bs.carousel');
    }
    isCycling && this.cycle();
    return this;
  };
  var old = $.fn.carousel;
  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.carousel');
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option);
      var action = typeof option == 'string' ? option : options.slide;
      if (!data)
        $this.data('bs.carousel', data = new Carousel(this, options));
      if (typeof option == 'number')
        data.to(option);
      else if (action)
        data[action]();
      else if (options.interval)
        data.pause().cycle();
    });
  };
  $.fn.carousel.Constructor = Carousel;
  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old;
    return this;
  };
  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this = $(this), href;
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''));
    var options = $.extend({}, $target.data(), $this.data());
    var slideIndex = $this.attr('data-slide-to');
    if (slideIndex)
      options.interval = false;
    $target.carousel(options);
    if (slideIndex = $this.attr('data-slide-to')) {
      $target.data('bs.carousel').to(slideIndex);
    }
    e.preventDefault();
  });
  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this);
      $carousel.carousel($carousel.data());
    });
  });
}(jQuery);+function ($) {
  'use strict';
  var Collapse = function (element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Collapse.DEFAULTS, options);
    this.transitioning = null;
    if (this.options.parent)
      this.$parent = $(this.options.parent);
    if (this.options.toggle)
      this.toggle();
  };
  Collapse.DEFAULTS = { toggle: true };
  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width');
    return hasWidth ? 'width' : 'height';
  };
  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in'))
      return;
    var startEvent = $.Event('show.bs.collapse');
    this.$element.trigger(startEvent);
    if (startEvent.isDefaultPrevented())
      return;
    var actives = this.$parent && this.$parent.find('> .panel > .in');
    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse');
      if (hasData && hasData.transitioning)
        return;
      actives.collapse('hide');
      hasData || actives.data('bs.collapse', null);
    }
    var dimension = this.dimension();
    this.$element.removeClass('collapse').addClass('collapsing')[dimension](0);
    this.transitioning = 1;
    var complete = function () {
      this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('auto');
      this.transitioning = 0;
      this.$element.trigger('shown.bs.collapse');
    };
    if (!$.support.transition)
      return complete.call(this);
    var scrollSize = $.camelCase([
        'scroll',
        dimension
      ].join('-'));
    this.$element.one($.support.transition.end, $.proxy(complete, this)).emulateTransitionEnd(350)[dimension](this.$element[0][scrollSize]);
  };
  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in'))
      return;
    var startEvent = $.Event('hide.bs.collapse');
    this.$element.trigger(startEvent);
    if (startEvent.isDefaultPrevented())
      return;
    var dimension = this.dimension();
    this.$element[dimension](this.$element[dimension]())[0].offsetHeight;
    this.$element.addClass('collapsing').removeClass('collapse').removeClass('in');
    this.transitioning = 1;
    var complete = function () {
      this.transitioning = 0;
      this.$element.trigger('hidden.bs.collapse').removeClass('collapsing').addClass('collapse');
    };
    if (!$.support.transition)
      return complete.call(this);
    this.$element[dimension](0).one($.support.transition.end, $.proxy(complete, this)).emulateTransitionEnd(350);
  };
  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']();
  };
  var old = $.fn.collapse;
  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.collapse');
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option);
      if (!data && options.toggle && option == 'show')
        option = !option;
      if (!data)
        $this.data('bs.collapse', data = new Collapse(this, options));
      if (typeof option == 'string')
        data[option]();
    });
  };
  $.fn.collapse.Constructor = Collapse;
  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old;
    return this;
  };
  $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this = $(this), href;
    var target = $this.attr('data-target') || e.preventDefault() || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '');
    var $target = $(target);
    var data = $target.data('bs.collapse');
    var option = data ? 'toggle' : $this.data();
    var parent = $this.attr('data-parent');
    var $parent = parent && $(parent);
    if (!data || !data.transitioning) {
      if ($parent)
        $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed');
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed');
    }
    $target.collapse(option);
  });
}(jQuery);+function ($) {
  'use strict';
  var backdrop = '.dropdown-backdrop';
  var toggle = '[data-toggle=dropdown]';
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle);
  };
  Dropdown.prototype.toggle = function (e) {
    var $this = $(this);
    if ($this.is('.disabled, :disabled'))
      return;
    var $parent = getParent($this);
    var isActive = $parent.hasClass('open');
    clearMenus();
    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus);
      }
      var relatedTarget = { relatedTarget: this };
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget));
      if (e.isDefaultPrevented())
        return;
      $parent.toggleClass('open').trigger('shown.bs.dropdown', relatedTarget);
      $this.focus();
    }
    return false;
  };
  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode))
      return;
    var $this = $(this);
    e.preventDefault();
    e.stopPropagation();
    if ($this.is('.disabled, :disabled'))
      return;
    var $parent = getParent($this);
    var isActive = $parent.hasClass('open');
    if (!isActive || isActive && e.keyCode == 27) {
      if (e.which == 27)
        $parent.find(toggle).focus();
      return $this.click();
    }
    var desc = ' li:not(.divider):visible a';
    var $items = $parent.find('[role=menu]' + desc + ', [role=listbox]' + desc);
    if (!$items.length)
      return;
    var index = $items.index($items.filter(':focus'));
    if (e.keyCode == 38 && index > 0)
      index--;
    if (e.keyCode == 40 && index < $items.length - 1)
      index++;
    if (!~index)
      index = 0;
    $items.eq(index).focus();
  };
  function clearMenus(e) {
    $(backdrop).remove();
    $(toggle).each(function () {
      var $parent = getParent($(this));
      var relatedTarget = { relatedTarget: this };
      if (!$parent.hasClass('open'))
        return;
      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget));
      if (e.isDefaultPrevented())
        return;
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget);
    });
  }
  function getParent($this) {
    var selector = $this.attr('data-target');
    if (!selector) {
      selector = $this.attr('href');
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '');
    }
    var $parent = selector && $(selector);
    return $parent && $parent.length ? $parent : $this.parent();
  }
  var old = $.fn.dropdown;
  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.dropdown');
      if (!data)
        $this.data('bs.dropdown', data = new Dropdown(this));
      if (typeof option == 'string')
        data[option].call($this);
    });
  };
  $.fn.dropdown.Constructor = Dropdown;
  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old;
    return this;
  };
  $(document).on('click.bs.dropdown.data-api', clearMenus).on('click.bs.dropdown.data-api', '.dropdown form', function (e) {
    e.stopPropagation();
  }).on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api', toggle + ', [role=menu], [role=listbox]', Dropdown.prototype.keydown);
}(jQuery);+function ($) {
  'use strict';
  var Tab = function (element) {
    this.element = $(element);
  };
  Tab.prototype.show = function () {
    var $this = this.element;
    var $ul = $this.closest('ul:not(.dropdown-menu)');
    var selector = $this.data('target');
    if (!selector) {
      selector = $this.attr('href');
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '');
    }
    if ($this.parent('li').hasClass('active'))
      return;
    var previous = $ul.find('.active:last a')[0];
    var e = $.Event('show.bs.tab', { relatedTarget: previous });
    $this.trigger(e);
    if (e.isDefaultPrevented())
      return;
    var $target = $(selector);
    this.activate($this.parent('li'), $ul);
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: previous
      });
    });
  };
  Tab.prototype.activate = function (element, container, callback) {
    var $active = container.find('> .active');
    var transition = callback && $.support.transition && $active.hasClass('fade');
    function next() {
      $active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active');
      element.addClass('active');
      if (transition) {
        element[0].offsetWidth;
        element.addClass('in');
      } else {
        element.removeClass('fade');
      }
      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active');
      }
      callback && callback();
    }
    transition ? $active.one($.support.transition.end, next).emulateTransitionEnd(150) : next();
    $active.removeClass('in');
  };
  var old = $.fn.tab;
  $.fn.tab = function (option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.tab');
      if (!data)
        $this.data('bs.tab', data = new Tab(this));
      if (typeof option == 'string')
        data[option]();
    });
  };
  $.fn.tab.Constructor = Tab;
  $.fn.tab.noConflict = function () {
    $.fn.tab = old;
    return this;
  };
  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault();
    $(this).tab('show');
  });
}(jQuery);+function ($) {
  'use strict';
  function transitionEnd() {
    var el = document.createElement('bootstrap');
    var transEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd otransitionend',
        'transition': 'transitionend'
      };
    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] };
      }
    }
    return false;
  }
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false, $el = this;
    $(this).one($.support.transition.end, function () {
      called = true;
    });
    var callback = function () {
      if (!called)
        $($el).trigger($.support.transition.end);
    };
    setTimeout(callback, duration);
    return this;
  };
  $(function () {
    $.support.transition = transitionEnd();
  });
}(jQuery);+function ($) {
  'use strict';
  function ScrollSpy(element, options) {
    var href;
    var process = $.proxy(this.process, this);
    this.$element = $(element).is('body') ? $(window) : $(element);
    this.$body = $('body');
    this.$scrollElement = this.$element.on('scroll.bs.scroll-spy.data-api', process);
    this.options = $.extend({}, ScrollSpy.DEFAULTS, options);
    this.selector = (this.options.target || (href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') || '') + ' .nav li > a';
    this.offsets = $([]);
    this.targets = $([]);
    this.activeTarget = null;
    this.refresh();
    this.process();
  }
  ScrollSpy.DEFAULTS = { offset: 10 };
  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = this.$element[0] == window ? 'offset' : 'position';
    this.offsets = $([]);
    this.targets = $([]);
    var self = this;
    var $targets = this.$body.find(this.selector).map(function () {
        var $el = $(this);
        var href = $el.data('target') || $el.attr('href');
        var $href = /^#./.test(href) && $(href);
        return $href && $href.length && $href.is(':visible') && [[
            $href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()),
            href
          ]] || null;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).each(function () {
        self.offsets.push(this[0]);
        self.targets.push(this[1]);
      });
  };
  ScrollSpy.prototype.process = function () {
    var scrollTop = this.$scrollElement.scrollTop() + this.options.offset;
    var scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight;
    var maxScroll = scrollHeight - this.$scrollElement.height();
    var offsets = this.offsets;
    var targets = this.targets;
    var activeTarget = this.activeTarget;
    var i;
    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets.last()[0]) && this.activate(i);
    }
    if (activeTarget && scrollTop <= offsets[0]) {
      return activeTarget != (i = targets[0]) && this.activate(i);
    }
    for (i = offsets.length; i--;) {
      activeTarget != targets[i] && scrollTop >= offsets[i] && (!offsets[i + 1] || scrollTop <= offsets[i + 1]) && this.activate(targets[i]);
    }
  };
  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target;
    $(this.selector).parentsUntil(this.options.target, '.active').removeClass('active');
    var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';
    var active = $(selector).parents('li').addClass('active');
    if (active.parent('.dropdown-menu').length) {
      active = active.closest('li.dropdown').addClass('active');
    }
    active.trigger('activate.bs.scrollspy');
  };
  var old = $.fn.scrollspy;
  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.scrollspy');
      var options = typeof option == 'object' && option;
      if (!data)
        $this.data('bs.scrollspy', data = new ScrollSpy(this, options));
      if (typeof option == 'string')
        data[option]();
    });
  };
  $.fn.scrollspy.Constructor = ScrollSpy;
  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old;
    return this;
  };
  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this);
      $spy.scrollspy($spy.data());
    });
  });
}(jQuery);+function ($) {
  'use strict';
  var Modal = function (element, options) {
    this.options = options;
    this.$element = $(element);
    this.$backdrop = this.isShown = null;
    if (this.options.remote) {
      this.$element.find('.modal-content').load(this.options.remote, $.proxy(function () {
        this.$element.trigger('loaded.bs.modal');
      }, this));
    }
  };
  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  };
  Modal.prototype.toggle = function (_relatedTarget) {
    return this[!this.isShown ? 'show' : 'hide'](_relatedTarget);
  };
  Modal.prototype.show = function (_relatedTarget) {
    var that = this;
    var e = $.Event('show.bs.modal', { relatedTarget: _relatedTarget });
    this.$element.trigger(e);
    if (this.isShown || e.isDefaultPrevented())
      return;
    this.isShown = true;
    this.escape();
    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this));
    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade');
      if (!that.$element.parent().length) {
        that.$element.appendTo(document.body);
      }
      that.$element.show().scrollTop(0);
      if (transition) {
        that.$element[0].offsetWidth;
      }
      that.$element.addClass('in').attr('aria-hidden', false);
      that.enforceFocus();
      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget });
      transition ? that.$element.find('.modal-dialog').one($.support.transition.end, function () {
        that.$element.focus().trigger(e);
      }).emulateTransitionEnd(300) : that.$element.focus().trigger(e);
    });
  };
  Modal.prototype.hide = function (e) {
    if (e)
      e.preventDefault();
    e = $.Event('hide.bs.modal');
    this.$element.trigger(e);
    if (!this.isShown || e.isDefaultPrevented())
      return;
    this.isShown = false;
    this.escape();
    $(document).off('focusin.bs.modal');
    this.$element.removeClass('in').attr('aria-hidden', true).off('click.dismiss.bs.modal');
    $.support.transition && this.$element.hasClass('fade') ? this.$element.one($.support.transition.end, $.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal();
  };
  Modal.prototype.enforceFocus = function () {
    $(document).off('focusin.bs.modal').on('focusin.bs.modal', $.proxy(function (e) {
      if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
        this.$element.focus();
      }
    }, this));
  };
  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide();
      }, this));
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal');
    }
  };
  Modal.prototype.hideModal = function () {
    var that = this;
    this.$element.hide();
    this.backdrop(function () {
      that.removeBackdrop();
      that.$element.trigger('hidden.bs.modal');
    });
  };
  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove();
    this.$backdrop = null;
  };
  Modal.prototype.backdrop = function (callback) {
    var animate = this.$element.hasClass('fade') ? 'fade' : '';
    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate;
      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />').appendTo(document.body);
      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget)
          return;
        this.options.backdrop == 'static' ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this);
      }, this));
      if (doAnimate)
        this.$backdrop[0].offsetWidth;
      this.$backdrop.addClass('in');
      if (!callback)
        return;
      doAnimate ? this.$backdrop.one($.support.transition.end, callback).emulateTransitionEnd(150) : callback();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in');
      $.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one($.support.transition.end, callback).emulateTransitionEnd(150) : callback();
    } else if (callback) {
      callback();
    }
  };
  var old = $.fn.modal;
  $.fn.modal = function (option, _relatedTarget) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.modal');
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option);
      if (!data)
        $this.data('bs.modal', data = new Modal(this, options));
      if (typeof option == 'string')
        data[option](_relatedTarget);
      else if (options.show)
        data.show(_relatedTarget);
    });
  };
  $.fn.modal.Constructor = Modal;
  $.fn.modal.noConflict = function () {
    $.fn.modal = old;
    return this;
  };
  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this);
    var href = $this.attr('href');
    var $target = $($this.attr('data-target') || href && href.replace(/.*(?=#[^\s]+$)/, ''));
    var option = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data());
    if ($this.is('a'))
      e.preventDefault();
    $target.modal(option, this).one('hide', function () {
      $this.is(':visible') && $this.focus();
    });
  });
  $(document).on('show.bs.modal', '.modal', function () {
    $(document.body).addClass('modal-open');
  }).on('hidden.bs.modal', '.modal', function () {
    $(document.body).removeClass('modal-open');
  });
}(jQuery);+function ($) {
  'use strict';
  var Tooltip = function (element, options) {
    this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null;
    this.init('tooltip', element, options);
  };
  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false
  };
  Tooltip.prototype.init = function (type, element, options) {
    this.enabled = true;
    this.type = type;
    this.$element = $(element);
    this.options = this.getOptions(options);
    var triggers = this.options.trigger.split(' ');
    for (var i = triggers.length; i--;) {
      var trigger = triggers[i];
      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this));
      } else if (trigger != 'manual') {
        var eventIn = trigger == 'hover' ? 'mouseenter' : 'focusin';
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout';
        this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this));
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this));
      }
    }
    this.options.selector ? this._options = $.extend({}, this.options, {
      trigger: 'manual',
      selector: ''
    }) : this.fixTitle();
  };
  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS;
  };
  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options);
    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      };
    }
    return options;
  };
  Tooltip.prototype.getDelegateOptions = function () {
    var options = {};
    var defaults = this.getDefaults();
    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value)
        options[key] = value;
    });
    return options;
  };
  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type);
    clearTimeout(self.timeout);
    self.hoverState = 'in';
    if (!self.options.delay || !self.options.delay.show)
      return self.show();
    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in')
        self.show();
    }, self.options.delay.show);
  };
  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type);
    clearTimeout(self.timeout);
    self.hoverState = 'out';
    if (!self.options.delay || !self.options.delay.hide)
      return self.hide();
    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out')
        self.hide();
    }, self.options.delay.hide);
  };
  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e);
      if (e.isDefaultPrevented())
        return;
      var that = this;
      var $tip = this.tip();
      this.setContent();
      if (this.options.animation)
        $tip.addClass('fade');
      var placement = typeof this.options.placement == 'function' ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;
      var autoToken = /\s?auto?\s?/i;
      var autoPlace = autoToken.test(placement);
      if (autoPlace)
        placement = placement.replace(autoToken, '') || 'top';
      $tip.detach().css({
        top: 0,
        left: 0,
        display: 'block'
      }).addClass(placement);
      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
      var pos = this.getPosition();
      var actualWidth = $tip[0].offsetWidth;
      var actualHeight = $tip[0].offsetHeight;
      if (autoPlace) {
        var $parent = this.$element.parent();
        var orgPlacement = placement;
        var docScroll = document.documentElement.scrollTop || document.body.scrollTop;
        var parentWidth = this.options.container == 'body' ? window.innerWidth : $parent.outerWidth();
        var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight();
        var parentLeft = this.options.container == 'body' ? 0 : $parent.offset().left;
        placement = placement == 'bottom' && pos.top + pos.height + actualHeight - docScroll > parentHeight ? 'top' : placement == 'top' && pos.top - docScroll - actualHeight < 0 ? 'bottom' : placement == 'right' && pos.right + actualWidth > parentWidth ? 'left' : placement == 'left' && pos.left - actualWidth < parentLeft ? 'right' : placement;
        $tip.removeClass(orgPlacement).addClass(placement);
      }
      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);
      this.applyPlacement(calculatedOffset, placement);
      this.hoverState = null;
      var complete = function () {
        that.$element.trigger('shown.bs.' + that.type);
      };
      $.support.transition && this.$tip.hasClass('fade') ? $tip.one($.support.transition.end, complete).emulateTransitionEnd(150) : complete();
    }
  };
  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var replace;
    var $tip = this.tip();
    var width = $tip[0].offsetWidth;
    var height = $tip[0].offsetHeight;
    var marginTop = parseInt($tip.css('margin-top'), 10);
    var marginLeft = parseInt($tip.css('margin-left'), 10);
    if (isNaN(marginTop))
      marginTop = 0;
    if (isNaN(marginLeft))
      marginLeft = 0;
    offset.top = offset.top + marginTop;
    offset.left = offset.left + marginLeft;
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        });
      }
    }, offset), 0);
    $tip.addClass('in');
    var actualWidth = $tip[0].offsetWidth;
    var actualHeight = $tip[0].offsetHeight;
    if (placement == 'top' && actualHeight != height) {
      replace = true;
      offset.top = offset.top + height - actualHeight;
    }
    if (/bottom|top/.test(placement)) {
      var delta = 0;
      if (offset.left < 0) {
        delta = offset.left * -2;
        offset.left = 0;
        $tip.offset(offset);
        actualWidth = $tip[0].offsetWidth;
        actualHeight = $tip[0].offsetHeight;
      }
      this.replaceArrow(delta - width + actualWidth, actualWidth, 'left');
    } else {
      this.replaceArrow(actualHeight - height, actualHeight, 'top');
    }
    if (replace)
      $tip.offset(offset);
  };
  Tooltip.prototype.replaceArrow = function (delta, dimension, position) {
    this.arrow().css(position, delta ? 50 * (1 - delta / dimension) + '%' : '');
  };
  Tooltip.prototype.setContent = function () {
    var $tip = this.tip();
    var title = this.getTitle();
    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title);
    $tip.removeClass('fade in top bottom left right');
  };
  Tooltip.prototype.hide = function () {
    var that = this;
    var $tip = this.tip();
    var e = $.Event('hide.bs.' + this.type);
    function complete() {
      if (that.hoverState != 'in')
        $tip.detach();
      that.$element.trigger('hidden.bs.' + that.type);
    }
    this.$element.trigger(e);
    if (e.isDefaultPrevented())
      return;
    $tip.removeClass('in');
    $.support.transition && this.$tip.hasClass('fade') ? $tip.one($.support.transition.end, complete).emulateTransitionEnd(150) : complete();
    this.hoverState = null;
    return this;
  };
  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element;
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '');
    }
  };
  Tooltip.prototype.hasContent = function () {
    return this.getTitle();
  };
  Tooltip.prototype.getPosition = function () {
    var el = this.$element[0];
    return $.extend({}, typeof el.getBoundingClientRect == 'function' ? el.getBoundingClientRect() : {
      width: el.offsetWidth,
      height: el.offsetHeight
    }, this.$element.offset());
  };
  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? {
      top: pos.top + pos.height,
      left: pos.left + pos.width / 2 - actualWidth / 2
    } : placement == 'top' ? {
      top: pos.top - actualHeight,
      left: pos.left + pos.width / 2 - actualWidth / 2
    } : placement == 'left' ? {
      top: pos.top + pos.height / 2 - actualHeight / 2,
      left: pos.left - actualWidth
    } : {
      top: pos.top + pos.height / 2 - actualHeight / 2,
      left: pos.left + pos.width
    };
  };
  Tooltip.prototype.getTitle = function () {
    var title;
    var $e = this.$element;
    var o = this.options;
    title = $e.attr('data-original-title') || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title);
    return title;
  };
  Tooltip.prototype.tip = function () {
    return this.$tip = this.$tip || $(this.options.template);
  };
  Tooltip.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow');
  };
  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide();
      this.$element = null;
      this.options = null;
    }
  };
  Tooltip.prototype.enable = function () {
    this.enabled = true;
  };
  Tooltip.prototype.disable = function () {
    this.enabled = false;
  };
  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  };
  Tooltip.prototype.toggle = function (e) {
    var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this;
    self.tip().hasClass('in') ? self.leave(self) : self.enter(self);
  };
  Tooltip.prototype.destroy = function () {
    clearTimeout(this.timeout);
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type);
  };
  var old = $.fn.tooltip;
  $.fn.tooltip = function (option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.tooltip');
      var options = typeof option == 'object' && option;
      if (!data && option == 'destroy')
        return;
      if (!data)
        $this.data('bs.tooltip', data = new Tooltip(this, options));
      if (typeof option == 'string')
        data[option]();
    });
  };
  $.fn.tooltip.Constructor = Tooltip;
  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old;
    return this;
  };
}(jQuery);+function ($) {
  'use strict';
  var Popover = function (element, options) {
    this.init('popover', element, options);
  };
  if (!$.fn.tooltip)
    throw new Error('Popover requires tooltip.js');
  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  });
  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype);
  Popover.prototype.constructor = Popover;
  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS;
  };
  Popover.prototype.setContent = function () {
    var $tip = this.tip();
    var title = this.getTitle();
    var content = this.getContent();
    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title);
    $tip.find('.popover-content')[this.options.html ? typeof content == 'string' ? 'html' : 'append' : 'text'](content);
    $tip.removeClass('fade top bottom left right in');
    if (!$tip.find('.popover-title').html())
      $tip.find('.popover-title').hide();
  };
  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  };
  Popover.prototype.getContent = function () {
    var $e = this.$element;
    var o = this.options;
    return $e.attr('data-content') || (typeof o.content == 'function' ? o.content.call($e[0]) : o.content);
  };
  Popover.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.arrow');
  };
  Popover.prototype.tip = function () {
    if (!this.$tip)
      this.$tip = $(this.options.template);
    return this.$tip;
  };
  var old = $.fn.popover;
  $.fn.popover = function (option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.popover');
      var options = typeof option == 'object' && option;
      if (!data && option == 'destroy')
        return;
      if (!data)
        $this.data('bs.popover', data = new Popover(this, options));
      if (typeof option == 'string')
        data[option]();
    });
  };
  $.fn.popover.Constructor = Popover;
  $.fn.popover.noConflict = function () {
    $.fn.popover = old;
    return this;
  };
}(jQuery);angular.module('ui.bootstrap', [
  'ui.bootstrap.tpls',
  'ui.bootstrap.transition',
  'ui.bootstrap.collapse',
  'ui.bootstrap.accordion',
  'ui.bootstrap.alert',
  'ui.bootstrap.bindHtml',
  'ui.bootstrap.buttons',
  'ui.bootstrap.carousel',
  'ui.bootstrap.position',
  'ui.bootstrap.datepicker',
  'ui.bootstrap.dropdownToggle',
  'ui.bootstrap.modal',
  'ui.bootstrap.pagination',
  'ui.bootstrap.tooltip',
  'ui.bootstrap.popover',
  'ui.bootstrap.progressbar',
  'ui.bootstrap.rating',
  'ui.bootstrap.tabs',
  'ui.bootstrap.timepicker',
  'ui.bootstrap.typeahead'
]);
angular.module('ui.bootstrap.tpls', [
  'template/accordion/accordion-group.html',
  'template/accordion/accordion.html',
  'template/alert/alert.html',
  'template/carousel/carousel.html',
  'template/carousel/slide.html',
  'template/datepicker/datepicker.html',
  'template/datepicker/popup.html',
  'template/modal/backdrop.html',
  'template/modal/window.html',
  'template/pagination/pager.html',
  'template/pagination/pagination.html',
  'template/tooltip/tooltip-html-unsafe-popup.html',
  'template/tooltip/tooltip-popup.html',
  'template/popover/popover.html',
  'template/progressbar/bar.html',
  'template/progressbar/progress.html',
  'template/progressbar/progressbar.html',
  'template/rating/rating.html',
  'template/tabs/tab.html',
  'template/tabs/tabset.html',
  'template/timepicker/timepicker.html',
  'template/typeahead/typeahead-match.html',
  'template/typeahead/typeahead-popup.html'
]);
angular.module('ui.bootstrap.transition', []).factory('$transition', [
  '$q',
  '$timeout',
  '$rootScope',
  function ($q, $timeout, $rootScope) {
    var $transition = function (element, trigger, options) {
      options = options || {};
      var deferred = $q.defer();
      var endEventName = $transition[options.animation ? 'animationEndEventName' : 'transitionEndEventName'];
      var transitionEndHandler = function (event) {
        $rootScope.$apply(function () {
          element.unbind(endEventName, transitionEndHandler);
          deferred.resolve(element);
        });
      };
      if (endEventName) {
        element.bind(endEventName, transitionEndHandler);
      }
      $timeout(function () {
        if (angular.isString(trigger)) {
          element.addClass(trigger);
        } else if (angular.isFunction(trigger)) {
          trigger(element);
        } else if (angular.isObject(trigger)) {
          element.css(trigger);
        }
        if (!endEventName) {
          deferred.resolve(element);
        }
      });
      deferred.promise.cancel = function () {
        if (endEventName) {
          element.unbind(endEventName, transitionEndHandler);
        }
        deferred.reject('Transition cancelled');
      };
      return deferred.promise;
    };
    var transElement = document.createElement('trans');
    var transitionEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'transition': 'transitionend'
      };
    var animationEndEventNames = {
        'WebkitTransition': 'webkitAnimationEnd',
        'MozTransition': 'animationend',
        'OTransition': 'oAnimationEnd',
        'transition': 'animationend'
      };
    function findEndEventName(endEventNames) {
      for (var name in endEventNames) {
        if (transElement.style[name] !== undefined) {
          return endEventNames[name];
        }
      }
    }
    $transition.transitionEndEventName = findEndEventName(transitionEndEventNames);
    $transition.animationEndEventName = findEndEventName(animationEndEventNames);
    return $transition;
  }
]);
angular.module('ui.bootstrap.collapse', ['ui.bootstrap.transition']).directive('collapse', [
  '$transition',
  function ($transition, $timeout) {
    return {
      link: function (scope, element, attrs) {
        var initialAnimSkip = true;
        var currentTransition;
        function doTransition(change) {
          var newTransition = $transition(element, change);
          if (currentTransition) {
            currentTransition.cancel();
          }
          currentTransition = newTransition;
          newTransition.then(newTransitionDone, newTransitionDone);
          return newTransition;
          function newTransitionDone() {
            if (currentTransition === newTransition) {
              currentTransition = undefined;
            }
          }
        }
        function expand() {
          if (initialAnimSkip) {
            initialAnimSkip = false;
            expandDone();
          } else {
            element.removeClass('collapse').addClass('collapsing');
            doTransition({ height: element[0].scrollHeight + 'px' }).then(expandDone);
          }
        }
        function expandDone() {
          element.removeClass('collapsing');
          element.addClass('collapse in');
          element.css({ height: 'auto' });
        }
        function collapse() {
          if (initialAnimSkip) {
            initialAnimSkip = false;
            collapseDone();
            element.css({ height: 0 });
          } else {
            element.css({ height: element[0].scrollHeight + 'px' });
            var x = element[0].offsetWidth;
            element.removeClass('collapse in').addClass('collapsing');
            doTransition({ height: 0 }).then(collapseDone);
          }
        }
        function collapseDone() {
          element.removeClass('collapsing');
          element.addClass('collapse');
        }
        scope.$watch(attrs.collapse, function (shouldCollapse) {
          if (shouldCollapse) {
            collapse();
          } else {
            expand();
          }
        });
      }
    };
  }
]);
angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse']).constant('accordionConfig', { closeOthers: true }).controller('AccordionController', [
  '$scope',
  '$attrs',
  'accordionConfig',
  function ($scope, $attrs, accordionConfig) {
    this.groups = [];
    this.closeOthers = function (openGroup) {
      var closeOthers = angular.isDefined($attrs.closeOthers) ? $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
      if (closeOthers) {
        angular.forEach(this.groups, function (group) {
          if (group !== openGroup) {
            group.isOpen = false;
          }
        });
      }
    };
    this.addGroup = function (groupScope) {
      var that = this;
      this.groups.push(groupScope);
      groupScope.$on('$destroy', function (event) {
        that.removeGroup(groupScope);
      });
    };
    this.removeGroup = function (group) {
      var index = this.groups.indexOf(group);
      if (index !== -1) {
        this.groups.splice(this.groups.indexOf(group), 1);
      }
    };
  }
]).directive('accordion', function () {
  return {
    restrict: 'EA',
    controller: 'AccordionController',
    transclude: true,
    replace: false,
    templateUrl: 'template/accordion/accordion.html'
  };
}).directive('accordionGroup', [
  '$parse',
  function ($parse) {
    return {
      require: '^accordion',
      restrict: 'EA',
      transclude: true,
      replace: true,
      templateUrl: 'template/accordion/accordion-group.html',
      scope: { heading: '@' },
      controller: function () {
        this.setHeading = function (element) {
          this.heading = element;
        };
      },
      link: function (scope, element, attrs, accordionCtrl) {
        var getIsOpen, setIsOpen;
        accordionCtrl.addGroup(scope);
        scope.isOpen = false;
        if (attrs.isOpen) {
          getIsOpen = $parse(attrs.isOpen);
          setIsOpen = getIsOpen.assign;
          scope.$parent.$watch(getIsOpen, function (value) {
            scope.isOpen = !!value;
          });
        }
        scope.$watch('isOpen', function (value) {
          if (value) {
            accordionCtrl.closeOthers(scope);
          }
          if (setIsOpen) {
            setIsOpen(scope.$parent, value);
          }
        });
      }
    };
  }
]).directive('accordionHeading', function () {
  return {
    restrict: 'EA',
    transclude: true,
    template: '',
    replace: true,
    require: '^accordionGroup',
    compile: function (element, attr, transclude) {
      return function link(scope, element, attr, accordionGroupCtrl) {
        accordionGroupCtrl.setHeading(transclude(scope, function () {
        }));
      };
    }
  };
}).directive('accordionTransclude', function () {
  return {
    require: '^accordionGroup',
    link: function (scope, element, attr, controller) {
      scope.$watch(function () {
        return controller[attr.accordionTransclude];
      }, function (heading) {
        if (heading) {
          element.html('');
          element.append(heading);
        }
      });
    }
  };
});
angular.module('ui.bootstrap.alert', []).controller('AlertController', [
  '$scope',
  '$attrs',
  function ($scope, $attrs) {
    $scope.closeable = 'close' in $attrs;
  }
]).directive('alert', function () {
  return {
    restrict: 'EA',
    controller: 'AlertController',
    templateUrl: 'template/alert/alert.html',
    transclude: true,
    replace: true,
    scope: {
      type: '=',
      close: '&'
    }
  };
});
angular.module('ui.bootstrap.bindHtml', []).directive('bindHtmlUnsafe', function () {
  return function (scope, element, attr) {
    element.addClass('ng-binding').data('$binding', attr.bindHtmlUnsafe);
    scope.$watch(attr.bindHtmlUnsafe, function bindHtmlUnsafeWatchAction(value) {
      element.html(value || '');
    });
  };
});
angular.module('ui.bootstrap.buttons', []).constant('buttonConfig', {
  activeClass: 'active',
  toggleEvent: 'click'
}).controller('ButtonsController', [
  'buttonConfig',
  function (buttonConfig) {
    this.activeClass = buttonConfig.activeClass || 'active';
    this.toggleEvent = buttonConfig.toggleEvent || 'click';
  }
]).directive('btnRadio', function () {
  return {
    require: [
      'btnRadio',
      'ngModel'
    ],
    controller: 'ButtonsController',
    link: function (scope, element, attrs, ctrls) {
      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];
      ngModelCtrl.$render = function () {
        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.btnRadio)));
      };
      element.bind(buttonsCtrl.toggleEvent, function () {
        if (!element.hasClass(buttonsCtrl.activeClass)) {
          scope.$apply(function () {
            ngModelCtrl.$setViewValue(scope.$eval(attrs.btnRadio));
            ngModelCtrl.$render();
          });
        }
      });
    }
  };
}).directive('btnCheckbox', function () {
  return {
    require: [
      'btnCheckbox',
      'ngModel'
    ],
    controller: 'ButtonsController',
    link: function (scope, element, attrs, ctrls) {
      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];
      function getTrueValue() {
        return getCheckboxValue(attrs.btnCheckboxTrue, true);
      }
      function getFalseValue() {
        return getCheckboxValue(attrs.btnCheckboxFalse, false);
      }
      function getCheckboxValue(attributeValue, defaultValue) {
        var val = scope.$eval(attributeValue);
        return angular.isDefined(val) ? val : defaultValue;
      }
      ngModelCtrl.$render = function () {
        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
      };
      element.bind(buttonsCtrl.toggleEvent, function () {
        scope.$apply(function () {
          ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
          ngModelCtrl.$render();
        });
      });
    }
  };
});
angular.module('ui.bootstrap.carousel', ['ui.bootstrap.transition']).controller('CarouselController', [
  '$scope',
  '$timeout',
  '$transition',
  '$q',
  function ($scope, $timeout, $transition, $q) {
    var self = this, slides = self.slides = [], currentIndex = -1, currentTimeout, isPlaying;
    self.currentSlide = null;
    var destroyed = false;
    self.select = function (nextSlide, direction) {
      var nextIndex = slides.indexOf(nextSlide);
      if (direction === undefined) {
        direction = nextIndex > currentIndex ? 'next' : 'prev';
      }
      if (nextSlide && nextSlide !== self.currentSlide) {
        if ($scope.$currentTransition) {
          $scope.$currentTransition.cancel();
          $timeout(goNext);
        } else {
          goNext();
        }
      }
      function goNext() {
        if (destroyed) {
          return;
        }
        if (self.currentSlide && angular.isString(direction) && !$scope.noTransition && nextSlide.$element) {
          nextSlide.$element.addClass(direction);
          var reflow = nextSlide.$element[0].offsetWidth;
          angular.forEach(slides, function (slide) {
            angular.extend(slide, {
              direction: '',
              entering: false,
              leaving: false,
              active: false
            });
          });
          angular.extend(nextSlide, {
            direction: direction,
            active: true,
            entering: true
          });
          angular.extend(self.currentSlide || {}, {
            direction: direction,
            leaving: true
          });
          $scope.$currentTransition = $transition(nextSlide.$element, {});
          (function (next, current) {
            $scope.$currentTransition.then(function () {
              transitionDone(next, current);
            }, function () {
              transitionDone(next, current);
            });
          }(nextSlide, self.currentSlide));
        } else {
          transitionDone(nextSlide, self.currentSlide);
        }
        self.currentSlide = nextSlide;
        currentIndex = nextIndex;
        restartTimer();
      }
      function transitionDone(next, current) {
        angular.extend(next, {
          direction: '',
          active: true,
          leaving: false,
          entering: false
        });
        angular.extend(current || {}, {
          direction: '',
          active: false,
          leaving: false,
          entering: false
        });
        $scope.$currentTransition = null;
      }
    };
    $scope.$on('$destroy', function () {
      destroyed = true;
    });
    self.indexOfSlide = function (slide) {
      return slides.indexOf(slide);
    };
    $scope.next = function () {
      var newIndex = (currentIndex + 1) % slides.length;
      if (!$scope.$currentTransition) {
        return self.select(slides[newIndex], 'next');
      }
    };
    $scope.prev = function () {
      var newIndex = currentIndex - 1 < 0 ? slides.length - 1 : currentIndex - 1;
      if (!$scope.$currentTransition) {
        return self.select(slides[newIndex], 'prev');
      }
    };
    $scope.select = function (slide) {
      self.select(slide);
    };
    $scope.isActive = function (slide) {
      return self.currentSlide === slide;
    };
    $scope.slides = function () {
      return slides;
    };
    $scope.$watch('interval', restartTimer);
    $scope.$on('$destroy', resetTimer);
    function restartTimer() {
      resetTimer();
      var interval = +$scope.interval;
      if (!isNaN(interval) && interval >= 0) {
        currentTimeout = $timeout(timerFn, interval);
      }
    }
    function resetTimer() {
      if (currentTimeout) {
        $timeout.cancel(currentTimeout);
        currentTimeout = null;
      }
    }
    function timerFn() {
      if (isPlaying) {
        $scope.next();
        restartTimer();
      } else {
        $scope.pause();
      }
    }
    $scope.play = function () {
      if (!isPlaying) {
        isPlaying = true;
        restartTimer();
      }
    };
    $scope.pause = function () {
      if (!$scope.noPause) {
        isPlaying = false;
        resetTimer();
      }
    };
    self.addSlide = function (slide, element) {
      slide.$element = element;
      slides.push(slide);
      if (slides.length === 1 || slide.active) {
        self.select(slides[slides.length - 1]);
        if (slides.length == 1) {
          $scope.play();
        }
      } else {
        slide.active = false;
      }
    };
    self.removeSlide = function (slide) {
      var index = slides.indexOf(slide);
      slides.splice(index, 1);
      if (slides.length > 0 && slide.active) {
        if (index >= slides.length) {
          self.select(slides[index - 1]);
        } else {
          self.select(slides[index]);
        }
      } else if (currentIndex > index) {
        currentIndex--;
      }
    };
  }
]).directive('carousel', [function () {
    return {
      restrict: 'EA',
      transclude: true,
      replace: true,
      controller: 'CarouselController',
      require: 'carousel',
      templateUrl: 'template/carousel/carousel.html',
      scope: {
        interval: '=',
        noTransition: '=',
        noPause: '='
      }
    };
  }]).directive('slide', [
  '$parse',
  function ($parse) {
    return {
      require: '^carousel',
      restrict: 'EA',
      transclude: true,
      replace: true,
      templateUrl: 'template/carousel/slide.html',
      scope: {},
      link: function (scope, element, attrs, carouselCtrl) {
        if (attrs.active) {
          var getActive = $parse(attrs.active);
          var setActive = getActive.assign;
          var lastValue = scope.active = getActive(scope.$parent);
          scope.$watch(function parentActiveWatch() {
            var parentActive = getActive(scope.$parent);
            if (parentActive !== scope.active) {
              if (parentActive !== lastValue) {
                lastValue = scope.active = parentActive;
              } else {
                setActive(scope.$parent, parentActive = lastValue = scope.active);
              }
            }
            return parentActive;
          });
        }
        carouselCtrl.addSlide(scope, element);
        scope.$on('$destroy', function () {
          carouselCtrl.removeSlide(scope);
        });
        scope.$watch('active', function (active) {
          if (active) {
            carouselCtrl.select(scope);
          }
        });
      }
    };
  }
]);
angular.module('ui.bootstrap.position', []).factory('$position', [
  '$document',
  '$window',
  function ($document, $window) {
    function getStyle(el, cssprop) {
      if (el.currentStyle) {
        return el.currentStyle[cssprop];
      } else if ($window.getComputedStyle) {
        return $window.getComputedStyle(el)[cssprop];
      }
      return el.style[cssprop];
    }
    function isStaticPositioned(element) {
      return (getStyle(element, 'position') || 'static') === 'static';
    }
    var parentOffsetEl = function (element) {
      var docDomEl = $document[0];
      var offsetParent = element.offsetParent || docDomEl;
      while (offsetParent && offsetParent !== docDomEl && isStaticPositioned(offsetParent)) {
        offsetParent = offsetParent.offsetParent;
      }
      return offsetParent || docDomEl;
    };
    return {
      position: function (element) {
        var elBCR = this.offset(element);
        var offsetParentBCR = {
            top: 0,
            left: 0
          };
        var offsetParentEl = parentOffsetEl(element[0]);
        if (offsetParentEl != $document[0]) {
          offsetParentBCR = this.offset(angular.element(offsetParentEl));
          offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
          offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }
        var boundingClientRect = element[0].getBoundingClientRect();
        return {
          width: boundingClientRect.width || element.prop('offsetWidth'),
          height: boundingClientRect.height || element.prop('offsetHeight'),
          top: elBCR.top - offsetParentBCR.top,
          left: elBCR.left - offsetParentBCR.left
        };
      },
      offset: function (element) {
        var boundingClientRect = element[0].getBoundingClientRect();
        return {
          width: boundingClientRect.width || element.prop('offsetWidth'),
          height: boundingClientRect.height || element.prop('offsetHeight'),
          top: boundingClientRect.top + ($window.pageYOffset || $document[0].body.scrollTop || $document[0].documentElement.scrollTop),
          left: boundingClientRect.left + ($window.pageXOffset || $document[0].body.scrollLeft || $document[0].documentElement.scrollLeft)
        };
      }
    };
  }
]);
angular.module('ui.bootstrap.datepicker', ['ui.bootstrap.position']).constant('datepickerConfig', {
  dayFormat: 'dd',
  monthFormat: 'MMMM',
  yearFormat: 'yyyy',
  dayHeaderFormat: 'EEE',
  dayTitleFormat: 'MMMM yyyy',
  monthTitleFormat: 'yyyy',
  showWeeks: true,
  startingDay: 0,
  yearRange: 20,
  minDate: null,
  maxDate: null
}).controller('DatepickerController', [
  '$scope',
  '$attrs',
  'dateFilter',
  'datepickerConfig',
  function ($scope, $attrs, dateFilter, dtConfig) {
    var format = {
        day: getValue($attrs.dayFormat, dtConfig.dayFormat),
        month: getValue($attrs.monthFormat, dtConfig.monthFormat),
        year: getValue($attrs.yearFormat, dtConfig.yearFormat),
        dayHeader: getValue($attrs.dayHeaderFormat, dtConfig.dayHeaderFormat),
        dayTitle: getValue($attrs.dayTitleFormat, dtConfig.dayTitleFormat),
        monthTitle: getValue($attrs.monthTitleFormat, dtConfig.monthTitleFormat)
      }, startingDay = getValue($attrs.startingDay, dtConfig.startingDay), yearRange = getValue($attrs.yearRange, dtConfig.yearRange);
    this.minDate = dtConfig.minDate ? new Date(dtConfig.minDate) : null;
    this.maxDate = dtConfig.maxDate ? new Date(dtConfig.maxDate) : null;
    function getValue(value, defaultValue) {
      return angular.isDefined(value) ? $scope.$parent.$eval(value) : defaultValue;
    }
    function getDaysInMonth(year, month) {
      return new Date(year, month, 0).getDate();
    }
    function getDates(startDate, n) {
      var dates = new Array(n);
      var current = startDate, i = 0;
      while (i < n) {
        dates[i++] = new Date(current);
        current.setDate(current.getDate() + 1);
      }
      return dates;
    }
    function makeDate(date, format, isSelected, isSecondary) {
      return {
        date: date,
        label: dateFilter(date, format),
        selected: !!isSelected,
        secondary: !!isSecondary
      };
    }
    this.modes = [
      {
        name: 'day',
        getVisibleDates: function (date, selected) {
          var year = date.getFullYear(), month = date.getMonth(), firstDayOfMonth = new Date(year, month, 1);
          var difference = startingDay - firstDayOfMonth.getDay(), numDisplayedFromPreviousMonth = difference > 0 ? 7 - difference : -difference, firstDate = new Date(firstDayOfMonth), numDates = 0;
          if (numDisplayedFromPreviousMonth > 0) {
            firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
            numDates += numDisplayedFromPreviousMonth;
          }
          numDates += getDaysInMonth(year, month + 1);
          numDates += (7 - numDates % 7) % 7;
          var days = getDates(firstDate, numDates), labels = new Array(7);
          for (var i = 0; i < numDates; i++) {
            var dt = new Date(days[i]);
            days[i] = makeDate(dt, format.day, selected && selected.getDate() === dt.getDate() && selected.getMonth() === dt.getMonth() && selected.getFullYear() === dt.getFullYear(), dt.getMonth() !== month);
          }
          for (var j = 0; j < 7; j++) {
            labels[j] = dateFilter(days[j].date, format.dayHeader);
          }
          return {
            objects: days,
            title: dateFilter(date, format.dayTitle),
            labels: labels
          };
        },
        compare: function (date1, date2) {
          return new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()) - new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
        },
        split: 7,
        step: { months: 1 }
      },
      {
        name: 'month',
        getVisibleDates: function (date, selected) {
          var months = new Array(12), year = date.getFullYear();
          for (var i = 0; i < 12; i++) {
            var dt = new Date(year, i, 1);
            months[i] = makeDate(dt, format.month, selected && selected.getMonth() === i && selected.getFullYear() === year);
          }
          return {
            objects: months,
            title: dateFilter(date, format.monthTitle)
          };
        },
        compare: function (date1, date2) {
          return new Date(date1.getFullYear(), date1.getMonth()) - new Date(date2.getFullYear(), date2.getMonth());
        },
        split: 3,
        step: { years: 1 }
      },
      {
        name: 'year',
        getVisibleDates: function (date, selected) {
          var years = new Array(yearRange), year = date.getFullYear(), startYear = parseInt((year - 1) / yearRange, 10) * yearRange + 1;
          for (var i = 0; i < yearRange; i++) {
            var dt = new Date(startYear + i, 0, 1);
            years[i] = makeDate(dt, format.year, selected && selected.getFullYear() === dt.getFullYear());
          }
          return {
            objects: years,
            title: [
              years[0].label,
              years[yearRange - 1].label
            ].join(' - ')
          };
        },
        compare: function (date1, date2) {
          return date1.getFullYear() - date2.getFullYear();
        },
        split: 5,
        step: { years: yearRange }
      }
    ];
    this.isDisabled = function (date, mode) {
      var currentMode = this.modes[mode || 0];
      return this.minDate && currentMode.compare(date, this.minDate) < 0 || this.maxDate && currentMode.compare(date, this.maxDate) > 0 || $scope.dateDisabled && $scope.dateDisabled({
        date: date,
        mode: currentMode.name
      });
    };
  }
]).directive('datepicker', [
  'dateFilter',
  '$parse',
  'datepickerConfig',
  '$log',
  function (dateFilter, $parse, datepickerConfig, $log) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'template/datepicker/datepicker.html',
      scope: { dateDisabled: '&' },
      require: [
        'datepicker',
        '?^ngModel'
      ],
      controller: 'DatepickerController',
      link: function (scope, element, attrs, ctrls) {
        var datepickerCtrl = ctrls[0], ngModel = ctrls[1];
        if (!ngModel) {
          return;
        }
        var mode = 0, selected = new Date(), showWeeks = datepickerConfig.showWeeks;
        if (attrs.showWeeks) {
          scope.$parent.$watch($parse(attrs.showWeeks), function (value) {
            showWeeks = !!value;
            updateShowWeekNumbers();
          });
        } else {
          updateShowWeekNumbers();
        }
        if (attrs.min) {
          scope.$parent.$watch($parse(attrs.min), function (value) {
            datepickerCtrl.minDate = value ? new Date(value) : null;
            refill();
          });
        }
        if (attrs.max) {
          scope.$parent.$watch($parse(attrs.max), function (value) {
            datepickerCtrl.maxDate = value ? new Date(value) : null;
            refill();
          });
        }
        function updateShowWeekNumbers() {
          scope.showWeekNumbers = mode === 0 && showWeeks;
        }
        function split(arr, size) {
          var arrays = [];
          while (arr.length > 0) {
            arrays.push(arr.splice(0, size));
          }
          return arrays;
        }
        function refill(updateSelected) {
          var date = null, valid = true;
          if (ngModel.$modelValue) {
            date = new Date(ngModel.$modelValue);
            if (isNaN(date)) {
              valid = false;
              $log.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
            } else if (updateSelected) {
              selected = date;
            }
          }
          ngModel.$setValidity('date', valid);
          var currentMode = datepickerCtrl.modes[mode], data = currentMode.getVisibleDates(selected, date);
          angular.forEach(data.objects, function (obj) {
            obj.disabled = datepickerCtrl.isDisabled(obj.date, mode);
          });
          ngModel.$setValidity('date-disabled', !date || !datepickerCtrl.isDisabled(date));
          scope.rows = split(data.objects, currentMode.split);
          scope.labels = data.labels || [];
          scope.title = data.title;
        }
        function setMode(value) {
          mode = value;
          updateShowWeekNumbers();
          refill();
        }
        ngModel.$render = function () {
          refill(true);
        };
        scope.select = function (date) {
          if (mode === 0) {
            var dt = ngModel.$modelValue ? new Date(ngModel.$modelValue) : new Date(0, 0, 0, 0, 0, 0, 0);
            dt.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
            ngModel.$setViewValue(dt);
            refill(true);
          } else {
            selected = date;
            setMode(mode - 1);
          }
        };
        scope.move = function (direction) {
          var step = datepickerCtrl.modes[mode].step;
          selected.setMonth(selected.getMonth() + direction * (step.months || 0));
          selected.setFullYear(selected.getFullYear() + direction * (step.years || 0));
          refill();
        };
        scope.toggleMode = function () {
          setMode((mode + 1) % datepickerCtrl.modes.length);
        };
        scope.getWeekNumber = function (row) {
          return mode === 0 && scope.showWeekNumbers && row.length === 7 ? getISO8601WeekNumber(row[0].date) : null;
        };
        function getISO8601WeekNumber(date) {
          var checkDate = new Date(date);
          checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
          var time = checkDate.getTime();
          checkDate.setMonth(0);
          checkDate.setDate(1);
          return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
        }
      }
    };
  }
]).constant('datepickerPopupConfig', {
  dateFormat: 'yyyy-MM-dd',
  currentText: 'Today',
  toggleWeeksText: 'Weeks',
  clearText: 'Clear',
  closeText: 'Done',
  closeOnDateSelection: true,
  appendToBody: false,
  showButtonBar: true
}).directive('datepickerPopup', [
  '$compile',
  '$parse',
  '$document',
  '$position',
  'dateFilter',
  'datepickerPopupConfig',
  'datepickerConfig',
  function ($compile, $parse, $document, $position, dateFilter, datepickerPopupConfig, datepickerConfig) {
    return {
      restrict: 'EA',
      require: 'ngModel',
      link: function (originalScope, element, attrs, ngModel) {
        var scope = originalScope.$new(), dateFormat, closeOnDateSelection = angular.isDefined(attrs.closeOnDateSelection) ? originalScope.$eval(attrs.closeOnDateSelection) : datepickerPopupConfig.closeOnDateSelection, appendToBody = angular.isDefined(attrs.datepickerAppendToBody) ? originalScope.$eval(attrs.datepickerAppendToBody) : datepickerPopupConfig.appendToBody;
        attrs.$observe('datepickerPopup', function (value) {
          dateFormat = value || datepickerPopupConfig.dateFormat;
          ngModel.$render();
        });
        scope.showButtonBar = angular.isDefined(attrs.showButtonBar) ? originalScope.$eval(attrs.showButtonBar) : datepickerPopupConfig.showButtonBar;
        originalScope.$on('$destroy', function () {
          $popup.remove();
          scope.$destroy();
        });
        attrs.$observe('currentText', function (text) {
          scope.currentText = angular.isDefined(text) ? text : datepickerPopupConfig.currentText;
        });
        attrs.$observe('toggleWeeksText', function (text) {
          scope.toggleWeeksText = angular.isDefined(text) ? text : datepickerPopupConfig.toggleWeeksText;
        });
        attrs.$observe('clearText', function (text) {
          scope.clearText = angular.isDefined(text) ? text : datepickerPopupConfig.clearText;
        });
        attrs.$observe('closeText', function (text) {
          scope.closeText = angular.isDefined(text) ? text : datepickerPopupConfig.closeText;
        });
        var getIsOpen, setIsOpen;
        if (attrs.isOpen) {
          getIsOpen = $parse(attrs.isOpen);
          setIsOpen = getIsOpen.assign;
          originalScope.$watch(getIsOpen, function updateOpen(value) {
            scope.isOpen = !!value;
          });
        }
        scope.isOpen = getIsOpen ? getIsOpen(originalScope) : false;
        function setOpen(value) {
          if (setIsOpen) {
            setIsOpen(originalScope, !!value);
          } else {
            scope.isOpen = !!value;
          }
        }
        var documentClickBind = function (event) {
          if (scope.isOpen && event.target !== element[0]) {
            scope.$apply(function () {
              setOpen(false);
            });
          }
        };
        var elementFocusBind = function () {
          scope.$apply(function () {
            setOpen(true);
          });
        };
        var popupEl = angular.element('<div datepicker-popup-wrap><div datepicker></div></div>');
        popupEl.attr({
          'ng-model': 'date',
          'ng-change': 'dateSelection()'
        });
        var datepickerEl = angular.element(popupEl.children()[0]), datepickerOptions = {};
        if (attrs.datepickerOptions) {
          datepickerOptions = originalScope.$eval(attrs.datepickerOptions);
          datepickerEl.attr(angular.extend({}, datepickerOptions));
        }
        function parseDate(viewValue) {
          if (!viewValue) {
            ngModel.$setValidity('date', true);
            return null;
          } else if (angular.isDate(viewValue)) {
            ngModel.$setValidity('date', true);
            return viewValue;
          } else if (angular.isString(viewValue)) {
            var date = new Date(viewValue);
            if (isNaN(date)) {
              ngModel.$setValidity('date', false);
              return undefined;
            } else {
              ngModel.$setValidity('date', true);
              return date;
            }
          } else {
            ngModel.$setValidity('date', false);
            return undefined;
          }
        }
        ngModel.$parsers.unshift(parseDate);
        scope.dateSelection = function (dt) {
          if (angular.isDefined(dt)) {
            scope.date = dt;
          }
          ngModel.$setViewValue(scope.date);
          ngModel.$render();
          if (closeOnDateSelection) {
            setOpen(false);
          }
        };
        element.bind('input change keyup', function () {
          scope.$apply(function () {
            scope.date = ngModel.$modelValue;
          });
        });
        ngModel.$render = function () {
          var date = ngModel.$viewValue ? dateFilter(ngModel.$viewValue, dateFormat) : '';
          element.val(date);
          scope.date = ngModel.$modelValue;
        };
        function addWatchableAttribute(attribute, scopeProperty, datepickerAttribute) {
          if (attribute) {
            originalScope.$watch($parse(attribute), function (value) {
              scope[scopeProperty] = value;
            });
            datepickerEl.attr(datepickerAttribute || scopeProperty, scopeProperty);
          }
        }
        addWatchableAttribute(attrs.min, 'min');
        addWatchableAttribute(attrs.max, 'max');
        if (attrs.showWeeks) {
          addWatchableAttribute(attrs.showWeeks, 'showWeeks', 'show-weeks');
        } else {
          scope.showWeeks = 'show-weeks' in datepickerOptions ? datepickerOptions['show-weeks'] : datepickerConfig.showWeeks;
          datepickerEl.attr('show-weeks', 'showWeeks');
        }
        if (attrs.dateDisabled) {
          datepickerEl.attr('date-disabled', attrs.dateDisabled);
        }
        function updatePosition() {
          scope.position = appendToBody ? $position.offset(element) : $position.position(element);
          scope.position.top = scope.position.top + element.prop('offsetHeight');
        }
        var documentBindingInitialized = false, elementFocusInitialized = false;
        scope.$watch('isOpen', function (value) {
          if (value) {
            updatePosition();
            $document.bind('click', documentClickBind);
            if (elementFocusInitialized) {
              element.unbind('focus', elementFocusBind);
            }
            element[0].focus();
            documentBindingInitialized = true;
          } else {
            if (documentBindingInitialized) {
              $document.unbind('click', documentClickBind);
            }
            element.bind('focus', elementFocusBind);
            elementFocusInitialized = true;
          }
          if (setIsOpen) {
            setIsOpen(originalScope, value);
          }
        });
        scope.today = function () {
          scope.dateSelection(new Date());
        };
        scope.clear = function () {
          scope.dateSelection(null);
        };
        var $popup = $compile(popupEl)(scope);
        if (appendToBody) {
          $document.find('body').append($popup);
        } else {
          element.after($popup);
        }
      }
    };
  }
]).directive('datepickerPopupWrap', function () {
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    templateUrl: 'template/datepicker/popup.html',
    link: function (scope, element, attrs) {
      element.bind('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
      });
    }
  };
});
angular.module('ui.bootstrap.dropdownToggle', []).directive('dropdownToggle', [
  '$document',
  '$location',
  function ($document, $location) {
    var openElement = null, closeMenu = angular.noop;
    return {
      restrict: 'CA',
      link: function (scope, element, attrs) {
        scope.$watch('$location.path', function () {
          closeMenu();
        });
        element.parent().bind('click', function () {
          closeMenu();
        });
        element.bind('click', function (event) {
          var elementWasOpen = element === openElement;
          event.preventDefault();
          event.stopPropagation();
          if (!!openElement) {
            closeMenu();
          }
          if (!elementWasOpen && !element.hasClass('disabled') && !element.prop('disabled')) {
            element.parent().addClass('open');
            openElement = element;
            closeMenu = function (event) {
              if (event) {
                event.preventDefault();
                event.stopPropagation();
              }
              $document.unbind('click', closeMenu);
              element.parent().removeClass('open');
              closeMenu = angular.noop;
              openElement = null;
            };
            $document.bind('click', closeMenu);
          }
        });
      }
    };
  }
]);
angular.module('ui.bootstrap.modal', ['ui.bootstrap.transition']).factory('$$stackedMap', function () {
  return {
    createNew: function () {
      var stack = [];
      return {
        add: function (key, value) {
          stack.push({
            key: key,
            value: value
          });
        },
        get: function (key) {
          for (var i = 0; i < stack.length; i++) {
            if (key == stack[i].key) {
              return stack[i];
            }
          }
        },
        keys: function () {
          var keys = [];
          for (var i = 0; i < stack.length; i++) {
            keys.push(stack[i].key);
          }
          return keys;
        },
        top: function () {
          return stack[stack.length - 1];
        },
        remove: function (key) {
          var idx = -1;
          for (var i = 0; i < stack.length; i++) {
            if (key == stack[i].key) {
              idx = i;
              break;
            }
          }
          return stack.splice(idx, 1)[0];
        },
        removeTop: function () {
          return stack.splice(stack.length - 1, 1)[0];
        },
        length: function () {
          return stack.length;
        }
      };
    }
  };
}).directive('modalBackdrop', [
  '$timeout',
  function ($timeout) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'template/modal/backdrop.html',
      link: function (scope) {
        scope.animate = false;
        $timeout(function () {
          scope.animate = true;
        });
      }
    };
  }
]).directive('modalWindow', [
  '$modalStack',
  '$timeout',
  function ($modalStack, $timeout) {
    return {
      restrict: 'EA',
      scope: {
        index: '@',
        animate: '='
      },
      replace: true,
      transclude: true,
      templateUrl: 'template/modal/window.html',
      link: function (scope, element, attrs) {
        scope.windowClass = attrs.windowClass || '';
        $timeout(function () {
          scope.animate = true;
          element[0].focus();
        });
        scope.close = function (evt) {
          var modal = $modalStack.getTop();
          if (modal && modal.value.backdrop && modal.value.backdrop != 'static' && evt.target === evt.currentTarget) {
            evt.preventDefault();
            evt.stopPropagation();
            $modalStack.dismiss(modal.key, 'backdrop click');
          }
        };
      }
    };
  }
]).factory('$modalStack', [
  '$transition',
  '$timeout',
  '$document',
  '$compile',
  '$rootScope',
  '$$stackedMap',
  function ($transition, $timeout, $document, $compile, $rootScope, $$stackedMap) {
    var OPENED_MODAL_CLASS = 'modal-open';
    var backdropDomEl, backdropScope;
    var openedWindows = $$stackedMap.createNew();
    var $modalStack = {};
    function backdropIndex() {
      var topBackdropIndex = -1;
      var opened = openedWindows.keys();
      for (var i = 0; i < opened.length; i++) {
        if (openedWindows.get(opened[i]).value.backdrop) {
          topBackdropIndex = i;
        }
      }
      return topBackdropIndex;
    }
    $rootScope.$watch(backdropIndex, function (newBackdropIndex) {
      if (backdropScope) {
        backdropScope.index = newBackdropIndex;
      }
    });
    function removeModalWindow(modalInstance) {
      var body = $document.find('body').eq(0);
      var modalWindow = openedWindows.get(modalInstance).value;
      openedWindows.remove(modalInstance);
      removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, 300, checkRemoveBackdrop);
      body.toggleClass(OPENED_MODAL_CLASS, openedWindows.length() > 0);
    }
    function checkRemoveBackdrop() {
      if (backdropDomEl && backdropIndex() == -1) {
        var backdropScopeRef = backdropScope;
        removeAfterAnimate(backdropDomEl, backdropScope, 150, function () {
          backdropScopeRef.$destroy();
          backdropScopeRef = null;
        });
        backdropDomEl = undefined;
        backdropScope = undefined;
      }
    }
    function removeAfterAnimate(domEl, scope, emulateTime, done) {
      scope.animate = false;
      var transitionEndEventName = $transition.transitionEndEventName;
      if (transitionEndEventName) {
        var timeout = $timeout(afterAnimating, emulateTime);
        domEl.bind(transitionEndEventName, function () {
          $timeout.cancel(timeout);
          afterAnimating();
          scope.$apply();
        });
      } else {
        $timeout(afterAnimating, 0);
      }
      function afterAnimating() {
        if (afterAnimating.done) {
          return;
        }
        afterAnimating.done = true;
        domEl.remove();
        if (done) {
          done();
        }
      }
    }
    $document.bind('keydown', function (evt) {
      var modal;
      if (evt.which === 27) {
        modal = openedWindows.top();
        if (modal && modal.value.keyboard) {
          $rootScope.$apply(function () {
            $modalStack.dismiss(modal.key);
          });
        }
      }
    });
    $modalStack.open = function (modalInstance, modal) {
      openedWindows.add(modalInstance, {
        deferred: modal.deferred,
        modalScope: modal.scope,
        backdrop: modal.backdrop,
        keyboard: modal.keyboard
      });
      var body = $document.find('body').eq(0), currBackdropIndex = backdropIndex();
      if (currBackdropIndex >= 0 && !backdropDomEl) {
        backdropScope = $rootScope.$new(true);
        backdropScope.index = currBackdropIndex;
        backdropDomEl = $compile('<div modal-backdrop></div>')(backdropScope);
        body.append(backdropDomEl);
      }
      var angularDomEl = angular.element('<div modal-window></div>');
      angularDomEl.attr('window-class', modal.windowClass);
      angularDomEl.attr('index', openedWindows.length() - 1);
      angularDomEl.attr('animate', 'animate');
      angularDomEl.html(modal.content);
      var modalDomEl = $compile(angularDomEl)(modal.scope);
      openedWindows.top().value.modalDomEl = modalDomEl;
      body.append(modalDomEl);
      body.addClass(OPENED_MODAL_CLASS);
    };
    $modalStack.close = function (modalInstance, result) {
      var modalWindow = openedWindows.get(modalInstance).value;
      if (modalWindow) {
        modalWindow.deferred.resolve(result);
        removeModalWindow(modalInstance);
      }
    };
    $modalStack.dismiss = function (modalInstance, reason) {
      var modalWindow = openedWindows.get(modalInstance).value;
      if (modalWindow) {
        modalWindow.deferred.reject(reason);
        removeModalWindow(modalInstance);
      }
    };
    $modalStack.dismissAll = function (reason) {
      var topModal = this.getTop();
      while (topModal) {
        this.dismiss(topModal.key, reason);
        topModal = this.getTop();
      }
    };
    $modalStack.getTop = function () {
      return openedWindows.top();
    };
    return $modalStack;
  }
]).provider('$modal', function () {
  var $modalProvider = {
      options: {
        backdrop: true,
        keyboard: true
      },
      $get: [
        '$injector',
        '$rootScope',
        '$q',
        '$http',
        '$templateCache',
        '$controller',
        '$modalStack',
        function ($injector, $rootScope, $q, $http, $templateCache, $controller, $modalStack) {
          var $modal = {};
          function getTemplatePromise(options) {
            return options.template ? $q.when(options.template) : $http.get(options.templateUrl, { cache: $templateCache }).then(function (result) {
              return result.data;
            });
          }
          function getResolvePromises(resolves) {
            var promisesArr = [];
            angular.forEach(resolves, function (value, key) {
              if (angular.isFunction(value) || angular.isArray(value)) {
                promisesArr.push($q.when($injector.invoke(value)));
              }
            });
            return promisesArr;
          }
          $modal.open = function (modalOptions) {
            var modalResultDeferred = $q.defer();
            var modalOpenedDeferred = $q.defer();
            var modalInstance = {
                result: modalResultDeferred.promise,
                opened: modalOpenedDeferred.promise,
                close: function (result) {
                  $modalStack.close(modalInstance, result);
                },
                dismiss: function (reason) {
                  $modalStack.dismiss(modalInstance, reason);
                }
              };
            modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
            modalOptions.resolve = modalOptions.resolve || {};
            if (!modalOptions.template && !modalOptions.templateUrl) {
              throw new Error('One of template or templateUrl options is required.');
            }
            var templateAndResolvePromise = $q.all([getTemplatePromise(modalOptions)].concat(getResolvePromises(modalOptions.resolve)));
            templateAndResolvePromise.then(function resolveSuccess(tplAndVars) {
              var modalScope = (modalOptions.scope || $rootScope).$new();
              modalScope.$close = modalInstance.close;
              modalScope.$dismiss = modalInstance.dismiss;
              var ctrlInstance, ctrlLocals = {};
              var resolveIter = 1;
              if (modalOptions.controller) {
                ctrlLocals.$scope = modalScope;
                ctrlLocals.$modalInstance = modalInstance;
                angular.forEach(modalOptions.resolve, function (value, key) {
                  ctrlLocals[key] = tplAndVars[resolveIter++];
                });
                ctrlInstance = $controller(modalOptions.controller, ctrlLocals);
              }
              $modalStack.open(modalInstance, {
                scope: modalScope,
                deferred: modalResultDeferred,
                content: tplAndVars[0],
                backdrop: modalOptions.backdrop,
                keyboard: modalOptions.keyboard,
                windowClass: modalOptions.windowClass
              });
            }, function resolveError(reason) {
              modalResultDeferred.reject(reason);
            });
            templateAndResolvePromise.then(function () {
              modalOpenedDeferred.resolve(true);
            }, function () {
              modalOpenedDeferred.reject(false);
            });
            return modalInstance;
          };
          return $modal;
        }
      ]
    };
  return $modalProvider;
});
angular.module('ui.bootstrap.pagination', []).controller('PaginationController', [
  '$scope',
  '$attrs',
  '$parse',
  '$interpolate',
  function ($scope, $attrs, $parse, $interpolate) {
    var self = this, setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;
    this.init = function (defaultItemsPerPage) {
      if ($attrs.itemsPerPage) {
        $scope.$parent.$watch($parse($attrs.itemsPerPage), function (value) {
          self.itemsPerPage = parseInt(value, 10);
          $scope.totalPages = self.calculateTotalPages();
        });
      } else {
        this.itemsPerPage = defaultItemsPerPage;
      }
    };
    this.noPrevious = function () {
      return this.page === 1;
    };
    this.noNext = function () {
      return this.page === $scope.totalPages;
    };
    this.isActive = function (page) {
      return this.page === page;
    };
    this.calculateTotalPages = function () {
      var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / this.itemsPerPage);
      return Math.max(totalPages || 0, 1);
    };
    this.getAttributeValue = function (attribute, defaultValue, interpolate) {
      return angular.isDefined(attribute) ? interpolate ? $interpolate(attribute)($scope.$parent) : $scope.$parent.$eval(attribute) : defaultValue;
    };
    this.render = function () {
      this.page = parseInt($scope.page, 10) || 1;
      if (this.page > 0 && this.page <= $scope.totalPages) {
        $scope.pages = this.getPages(this.page, $scope.totalPages);
      }
    };
    $scope.selectPage = function (page) {
      if (!self.isActive(page) && page > 0 && page <= $scope.totalPages) {
        $scope.page = page;
        $scope.onSelectPage({ page: page });
      }
    };
    $scope.$watch('page', function () {
      self.render();
    });
    $scope.$watch('totalItems', function () {
      $scope.totalPages = self.calculateTotalPages();
    });
    $scope.$watch('totalPages', function (value) {
      setNumPages($scope.$parent, value);
      if (self.page > value) {
        $scope.selectPage(value);
      } else {
        self.render();
      }
    });
  }
]).constant('paginationConfig', {
  itemsPerPage: 10,
  boundaryLinks: false,
  directionLinks: true,
  firstText: 'First',
  previousText: 'Previous',
  nextText: 'Next',
  lastText: 'Last',
  rotate: true
}).directive('pagination', [
  '$parse',
  'paginationConfig',
  function ($parse, config) {
    return {
      restrict: 'EA',
      scope: {
        page: '=',
        totalItems: '=',
        onSelectPage: ' &'
      },
      controller: 'PaginationController',
      templateUrl: 'template/pagination/pagination.html',
      replace: true,
      link: function (scope, element, attrs, paginationCtrl) {
        var maxSize, boundaryLinks = paginationCtrl.getAttributeValue(attrs.boundaryLinks, config.boundaryLinks), directionLinks = paginationCtrl.getAttributeValue(attrs.directionLinks, config.directionLinks), firstText = paginationCtrl.getAttributeValue(attrs.firstText, config.firstText, true), previousText = paginationCtrl.getAttributeValue(attrs.previousText, config.previousText, true), nextText = paginationCtrl.getAttributeValue(attrs.nextText, config.nextText, true), lastText = paginationCtrl.getAttributeValue(attrs.lastText, config.lastText, true), rotate = paginationCtrl.getAttributeValue(attrs.rotate, config.rotate);
        paginationCtrl.init(config.itemsPerPage);
        if (attrs.maxSize) {
          scope.$parent.$watch($parse(attrs.maxSize), function (value) {
            maxSize = parseInt(value, 10);
            paginationCtrl.render();
          });
        }
        function makePage(number, text, isActive, isDisabled) {
          return {
            number: number,
            text: text,
            active: isActive,
            disabled: isDisabled
          };
        }
        paginationCtrl.getPages = function (currentPage, totalPages) {
          var pages = [];
          var startPage = 1, endPage = totalPages;
          var isMaxSized = angular.isDefined(maxSize) && maxSize < totalPages;
          if (isMaxSized) {
            if (rotate) {
              startPage = Math.max(currentPage - Math.floor(maxSize / 2), 1);
              endPage = startPage + maxSize - 1;
              if (endPage > totalPages) {
                endPage = totalPages;
                startPage = endPage - maxSize + 1;
              }
            } else {
              startPage = (Math.ceil(currentPage / maxSize) - 1) * maxSize + 1;
              endPage = Math.min(startPage + maxSize - 1, totalPages);
            }
          }
          for (var number = startPage; number <= endPage; number++) {
            var page = makePage(number, number, paginationCtrl.isActive(number), false);
            pages.push(page);
          }
          if (isMaxSized && !rotate) {
            if (startPage > 1) {
              var previousPageSet = makePage(startPage - 1, '...', false, false);
              pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
              var nextPageSet = makePage(endPage + 1, '...', false, false);
              pages.push(nextPageSet);
            }
          }
          if (directionLinks) {
            var previousPage = makePage(currentPage - 1, previousText, false, paginationCtrl.noPrevious());
            pages.unshift(previousPage);
            var nextPage = makePage(currentPage + 1, nextText, false, paginationCtrl.noNext());
            pages.push(nextPage);
          }
          if (boundaryLinks) {
            var firstPage = makePage(1, firstText, false, paginationCtrl.noPrevious());
            pages.unshift(firstPage);
            var lastPage = makePage(totalPages, lastText, false, paginationCtrl.noNext());
            pages.push(lastPage);
          }
          return pages;
        };
      }
    };
  }
]).constant('pagerConfig', {
  itemsPerPage: 10,
  previousText: '\xab Previous',
  nextText: 'Next \xbb',
  align: true
}).directive('pager', [
  'pagerConfig',
  function (config) {
    return {
      restrict: 'EA',
      scope: {
        page: '=',
        totalItems: '=',
        onSelectPage: ' &'
      },
      controller: 'PaginationController',
      templateUrl: 'template/pagination/pager.html',
      replace: true,
      link: function (scope, element, attrs, paginationCtrl) {
        var previousText = paginationCtrl.getAttributeValue(attrs.previousText, config.previousText, true), nextText = paginationCtrl.getAttributeValue(attrs.nextText, config.nextText, true), align = paginationCtrl.getAttributeValue(attrs.align, config.align);
        paginationCtrl.init(config.itemsPerPage);
        function makePage(number, text, isDisabled, isPrevious, isNext) {
          return {
            number: number,
            text: text,
            disabled: isDisabled,
            previous: align && isPrevious,
            next: align && isNext
          };
        }
        paginationCtrl.getPages = function (currentPage) {
          return [
            makePage(currentPage - 1, previousText, paginationCtrl.noPrevious(), true, false),
            makePage(currentPage + 1, nextText, paginationCtrl.noNext(), false, true)
          ];
        };
      }
    };
  }
]);
angular.module('ui.bootstrap.tooltip', [
  'ui.bootstrap.position',
  'ui.bootstrap.bindHtml'
]).provider('$tooltip', function () {
  var defaultOptions = {
      placement: 'top',
      animation: true,
      popupDelay: 0
    };
  var triggerMap = {
      'mouseenter': 'mouseleave',
      'click': 'click',
      'focus': 'blur'
    };
  var globalOptions = {};
  this.options = function (value) {
    angular.extend(globalOptions, value);
  };
  this.setTriggers = function setTriggers(triggers) {
    angular.extend(triggerMap, triggers);
  };
  function snake_case(name) {
    var regexp = /[A-Z]/g;
    var separator = '-';
    return name.replace(regexp, function (letter, pos) {
      return (pos ? separator : '') + letter.toLowerCase();
    });
  }
  this.$get = [
    '$window',
    '$compile',
    '$timeout',
    '$parse',
    '$document',
    '$position',
    '$interpolate',
    function ($window, $compile, $timeout, $parse, $document, $position, $interpolate) {
      return function $tooltip(type, prefix, defaultTriggerShow) {
        var options = angular.extend({}, defaultOptions, globalOptions);
        function getTriggers(trigger) {
          var show = trigger || options.trigger || defaultTriggerShow;
          var hide = triggerMap[show] || show;
          return {
            show: show,
            hide: hide
          };
        }
        var directiveName = snake_case(type);
        var startSym = $interpolate.startSymbol();
        var endSym = $interpolate.endSymbol();
        var template = '<div ' + directiveName + '-popup ' + 'title="' + startSym + 'tt_title' + endSym + '" ' + 'content="' + startSym + 'tt_content' + endSym + '" ' + 'placement="' + startSym + 'tt_placement' + endSym + '" ' + 'animation="tt_animation" ' + 'is-open="tt_isOpen"' + '>' + '</div>';
        return {
          restrict: 'EA',
          scope: true,
          compile: function (tElem, tAttrs) {
            var tooltipLinker = $compile(template);
            return function link(scope, element, attrs) {
              var tooltip;
              var transitionTimeout;
              var popupTimeout;
              var appendToBody = angular.isDefined(options.appendToBody) ? options.appendToBody : false;
              var triggers = getTriggers(undefined);
              var hasRegisteredTriggers = false;
              var hasEnableExp = angular.isDefined(attrs[prefix + 'Enable']);
              var positionTooltip = function () {
                var position, ttWidth, ttHeight, ttPosition;
                position = appendToBody ? $position.offset(element) : $position.position(element);
                ttWidth = tooltip.prop('offsetWidth');
                ttHeight = tooltip.prop('offsetHeight');
                switch (scope.tt_placement) {
                case 'right':
                  ttPosition = {
                    top: position.top + position.height / 2 - ttHeight / 2,
                    left: position.left + position.width
                  };
                  break;
                case 'bottom':
                  ttPosition = {
                    top: position.top + position.height,
                    left: position.left + position.width / 2 - ttWidth / 2
                  };
                  break;
                case 'left':
                  ttPosition = {
                    top: position.top + position.height / 2 - ttHeight / 2,
                    left: position.left - ttWidth
                  };
                  break;
                default:
                  ttPosition = {
                    top: position.top - ttHeight,
                    left: position.left + position.width / 2 - ttWidth / 2
                  };
                  break;
                }
                ttPosition.top += 'px';
                ttPosition.left += 'px';
                tooltip.css(ttPosition);
              };
              scope.tt_isOpen = false;
              function toggleTooltipBind() {
                if (!scope.tt_isOpen) {
                  showTooltipBind();
                } else {
                  hideTooltipBind();
                }
              }
              function showTooltipBind() {
                if (hasEnableExp && !scope.$eval(attrs[prefix + 'Enable'])) {
                  return;
                }
                if (scope.tt_popupDelay) {
                  popupTimeout = $timeout(show, scope.tt_popupDelay, false);
                  popupTimeout.then(function (reposition) {
                    reposition();
                  });
                } else {
                  show()();
                }
              }
              function hideTooltipBind() {
                scope.$apply(function () {
                  hide();
                });
              }
              function show() {
                if (!scope.tt_content) {
                  return angular.noop;
                }
                createTooltip();
                if (transitionTimeout) {
                  $timeout.cancel(transitionTimeout);
                }
                tooltip.css({
                  top: 0,
                  left: 0,
                  display: 'block'
                });
                if (appendToBody) {
                  $document.find('body').append(tooltip);
                } else {
                  element.after(tooltip);
                }
                positionTooltip();
                scope.tt_isOpen = true;
                scope.$digest();
                return positionTooltip;
              }
              function hide() {
                scope.tt_isOpen = false;
                $timeout.cancel(popupTimeout);
                if (scope.tt_animation) {
                  transitionTimeout = $timeout(removeTooltip, 500);
                } else {
                  removeTooltip();
                }
              }
              function createTooltip() {
                if (tooltip) {
                  removeTooltip();
                }
                tooltip = tooltipLinker(scope, function () {
                });
                scope.$digest();
              }
              function removeTooltip() {
                if (tooltip) {
                  tooltip.remove();
                  tooltip = null;
                }
              }
              attrs.$observe(type, function (val) {
                scope.tt_content = val;
                if (!val && scope.tt_isOpen) {
                  hide();
                }
              });
              attrs.$observe(prefix + 'Title', function (val) {
                scope.tt_title = val;
              });
              attrs.$observe(prefix + 'Placement', function (val) {
                scope.tt_placement = angular.isDefined(val) ? val : options.placement;
              });
              attrs.$observe(prefix + 'PopupDelay', function (val) {
                var delay = parseInt(val, 10);
                scope.tt_popupDelay = !isNaN(delay) ? delay : options.popupDelay;
              });
              var unregisterTriggers = function () {
                if (hasRegisteredTriggers) {
                  element.unbind(triggers.show, showTooltipBind);
                  element.unbind(triggers.hide, hideTooltipBind);
                }
              };
              attrs.$observe(prefix + 'Trigger', function (val) {
                unregisterTriggers();
                triggers = getTriggers(val);
                if (triggers.show === triggers.hide) {
                  element.bind(triggers.show, toggleTooltipBind);
                } else {
                  element.bind(triggers.show, showTooltipBind);
                  element.bind(triggers.hide, hideTooltipBind);
                }
                hasRegisteredTriggers = true;
              });
              var animation = scope.$eval(attrs[prefix + 'Animation']);
              scope.tt_animation = angular.isDefined(animation) ? !!animation : options.animation;
              attrs.$observe(prefix + 'AppendToBody', function (val) {
                appendToBody = angular.isDefined(val) ? $parse(val)(scope) : appendToBody;
              });
              if (appendToBody) {
                scope.$on('$locationChangeSuccess', function closeTooltipOnLocationChangeSuccess() {
                  if (scope.tt_isOpen) {
                    hide();
                  }
                });
              }
              scope.$on('$destroy', function onDestroyTooltip() {
                $timeout.cancel(transitionTimeout);
                $timeout.cancel(popupTimeout);
                unregisterTriggers();
                removeTooltip();
              });
            };
          }
        };
      };
    }
  ];
}).directive('tooltipPopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      content: '@',
      placement: '@',
      animation: '&',
      isOpen: '&'
    },
    templateUrl: 'template/tooltip/tooltip-popup.html'
  };
}).directive('tooltip', [
  '$tooltip',
  function ($tooltip) {
    return $tooltip('tooltip', 'tooltip', 'mouseenter');
  }
]).directive('tooltipHtmlUnsafePopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      content: '@',
      placement: '@',
      animation: '&',
      isOpen: '&'
    },
    templateUrl: 'template/tooltip/tooltip-html-unsafe-popup.html'
  };
}).directive('tooltipHtmlUnsafe', [
  '$tooltip',
  function ($tooltip) {
    return $tooltip('tooltipHtmlUnsafe', 'tooltip', 'mouseenter');
  }
]);
angular.module('ui.bootstrap.popover', ['ui.bootstrap.tooltip']).directive('popoverPopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      title: '@',
      content: '@',
      placement: '@',
      animation: '&',
      isOpen: '&'
    },
    templateUrl: 'template/popover/popover.html'
  };
}).directive('popover', [
  '$tooltip',
  function ($tooltip) {
    return $tooltip('popover', 'popover', 'click');
  }
]);
angular.module('ui.bootstrap.progressbar', ['ui.bootstrap.transition']).constant('progressConfig', {
  animate: true,
  max: 100
}).controller('ProgressController', [
  '$scope',
  '$attrs',
  'progressConfig',
  '$transition',
  function ($scope, $attrs, progressConfig, $transition) {
    var self = this, bars = [], max = angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : progressConfig.max, animate = angular.isDefined($attrs.animate) ? $scope.$parent.$eval($attrs.animate) : progressConfig.animate;
    this.addBar = function (bar, element) {
      var oldValue = 0, index = bar.$parent.$index;
      if (angular.isDefined(index) && bars[index]) {
        oldValue = bars[index].value;
      }
      bars.push(bar);
      this.update(element, bar.value, oldValue);
      bar.$watch('value', function (value, oldValue) {
        if (value !== oldValue) {
          self.update(element, value, oldValue);
        }
      });
      bar.$on('$destroy', function () {
        self.removeBar(bar);
      });
    };
    this.update = function (element, newValue, oldValue) {
      var percent = this.getPercentage(newValue);
      if (animate) {
        element.css('width', this.getPercentage(oldValue) + '%');
        $transition(element, { width: percent + '%' });
      } else {
        element.css({
          'transition': 'none',
          'width': percent + '%'
        });
      }
    };
    this.removeBar = function (bar) {
      bars.splice(bars.indexOf(bar), 1);
    };
    this.getPercentage = function (value) {
      return Math.round(100 * value / max);
    };
  }
]).directive('progress', function () {
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    controller: 'ProgressController',
    require: 'progress',
    scope: {},
    template: '<div class="progress" ng-transclude></div>'
  };
}).directive('bar', function () {
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    require: '^progress',
    scope: {
      value: '=',
      type: '@'
    },
    templateUrl: 'template/progressbar/bar.html',
    link: function (scope, element, attrs, progressCtrl) {
      progressCtrl.addBar(scope, element);
    }
  };
}).directive('progressbar', function () {
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    controller: 'ProgressController',
    scope: {
      value: '=',
      type: '@'
    },
    templateUrl: 'template/progressbar/progressbar.html',
    link: function (scope, element, attrs, progressCtrl) {
      progressCtrl.addBar(scope, angular.element(element.children()[0]));
    }
  };
});
angular.module('ui.bootstrap.rating', []).constant('ratingConfig', {
  max: 5,
  stateOn: null,
  stateOff: null
}).controller('RatingController', [
  '$scope',
  '$attrs',
  '$parse',
  'ratingConfig',
  function ($scope, $attrs, $parse, ratingConfig) {
    this.maxRange = angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max;
    this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn;
    this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;
    this.createRateObjects = function (states) {
      var defaultOptions = {
          stateOn: this.stateOn,
          stateOff: this.stateOff
        };
      for (var i = 0, n = states.length; i < n; i++) {
        states[i] = angular.extend({ index: i }, defaultOptions, states[i]);
      }
      return states;
    };
    $scope.range = angular.isDefined($attrs.ratingStates) ? this.createRateObjects(angular.copy($scope.$parent.$eval($attrs.ratingStates))) : this.createRateObjects(new Array(this.maxRange));
    $scope.rate = function (value) {
      if ($scope.value !== value && !$scope.readonly) {
        $scope.value = value;
      }
    };
    $scope.enter = function (value) {
      if (!$scope.readonly) {
        $scope.val = value;
      }
      $scope.onHover({ value: value });
    };
    $scope.reset = function () {
      $scope.val = angular.copy($scope.value);
      $scope.onLeave();
    };
    $scope.$watch('value', function (value) {
      $scope.val = value;
    });
    $scope.readonly = false;
    if ($attrs.readonly) {
      $scope.$parent.$watch($parse($attrs.readonly), function (value) {
        $scope.readonly = !!value;
      });
    }
  }
]).directive('rating', function () {
  return {
    restrict: 'EA',
    scope: {
      value: '=',
      onHover: '&',
      onLeave: '&'
    },
    controller: 'RatingController',
    templateUrl: 'template/rating/rating.html',
    replace: true
  };
});
angular.module('ui.bootstrap.tabs', []).controller('TabsetController', [
  '$scope',
  function TabsetCtrl($scope) {
    var ctrl = this, tabs = ctrl.tabs = $scope.tabs = [];
    ctrl.select = function (tab) {
      angular.forEach(tabs, function (tab) {
        tab.active = false;
      });
      tab.active = true;
    };
    ctrl.addTab = function addTab(tab) {
      tabs.push(tab);
      if (tabs.length === 1 || tab.active) {
        ctrl.select(tab);
      }
    };
    ctrl.removeTab = function removeTab(tab) {
      var index = tabs.indexOf(tab);
      if (tab.active && tabs.length > 1) {
        var newActiveIndex = index == tabs.length - 1 ? index - 1 : index + 1;
        ctrl.select(tabs[newActiveIndex]);
      }
      tabs.splice(index, 1);
    };
  }
]).directive('tabset', function () {
  return {
    restrict: 'EA',
    transclude: true,
    replace: true,
    scope: {},
    controller: 'TabsetController',
    templateUrl: 'template/tabs/tabset.html',
    link: function (scope, element, attrs) {
      scope.vertical = angular.isDefined(attrs.vertical) ? scope.$parent.$eval(attrs.vertical) : false;
      scope.justified = angular.isDefined(attrs.justified) ? scope.$parent.$eval(attrs.justified) : false;
      scope.type = angular.isDefined(attrs.type) ? scope.$parent.$eval(attrs.type) : 'tabs';
    }
  };
}).directive('tab', [
  '$parse',
  function ($parse) {
    return {
      require: '^tabset',
      restrict: 'EA',
      replace: true,
      templateUrl: 'template/tabs/tab.html',
      transclude: true,
      scope: {
        heading: '@',
        onSelect: '&select',
        onDeselect: '&deselect'
      },
      controller: function () {
      },
      compile: function (elm, attrs, transclude) {
        return function postLink(scope, elm, attrs, tabsetCtrl) {
          var getActive, setActive;
          if (attrs.active) {
            getActive = $parse(attrs.active);
            setActive = getActive.assign;
            scope.$parent.$watch(getActive, function updateActive(value, oldVal) {
              if (value !== oldVal) {
                scope.active = !!value;
              }
            });
            scope.active = getActive(scope.$parent);
          } else {
            setActive = getActive = angular.noop;
          }
          scope.$watch('active', function (active) {
            setActive(scope.$parent, active);
            if (active) {
              tabsetCtrl.select(scope);
              scope.onSelect();
            } else {
              scope.onDeselect();
            }
          });
          scope.disabled = false;
          if (attrs.disabled) {
            scope.$parent.$watch($parse(attrs.disabled), function (value) {
              scope.disabled = !!value;
            });
          }
          scope.select = function () {
            if (!scope.disabled) {
              scope.active = true;
            }
          };
          tabsetCtrl.addTab(scope);
          scope.$on('$destroy', function () {
            tabsetCtrl.removeTab(scope);
          });
          scope.$transcludeFn = transclude;
        };
      }
    };
  }
]).directive('tabHeadingTransclude', [function () {
    return {
      restrict: 'A',
      require: '^tab',
      link: function (scope, elm, attrs, tabCtrl) {
        scope.$watch('headingElement', function updateHeadingElement(heading) {
          if (heading) {
            elm.html('');
            elm.append(heading);
          }
        });
      }
    };
  }]).directive('tabContentTransclude', function () {
  return {
    restrict: 'A',
    require: '^tabset',
    link: function (scope, elm, attrs) {
      var tab = scope.$eval(attrs.tabContentTransclude);
      tab.$transcludeFn(tab.$parent, function (contents) {
        angular.forEach(contents, function (node) {
          if (isTabHeading(node)) {
            tab.headingElement = node;
          } else {
            elm.append(node);
          }
        });
      });
    }
  };
  function isTabHeading(node) {
    return node.tagName && (node.hasAttribute('tab-heading') || node.hasAttribute('data-tab-heading') || node.tagName.toLowerCase() === 'tab-heading' || node.tagName.toLowerCase() === 'data-tab-heading');
  }
});
;
angular.module('ui.bootstrap.timepicker', []).constant('timepickerConfig', {
  hourStep: 1,
  minuteStep: 1,
  showMeridian: true,
  meridians: null,
  readonlyInput: false,
  mousewheel: true
}).directive('timepicker', [
  '$parse',
  '$log',
  'timepickerConfig',
  '$locale',
  function ($parse, $log, timepickerConfig, $locale) {
    return {
      restrict: 'EA',
      require: '?^ngModel',
      replace: true,
      scope: {},
      templateUrl: 'template/timepicker/timepicker.html',
      link: function (scope, element, attrs, ngModel) {
        if (!ngModel) {
          return;
        }
        var selected = new Date(), meridians = angular.isDefined(attrs.meridians) ? scope.$parent.$eval(attrs.meridians) : timepickerConfig.meridians || $locale.DATETIME_FORMATS.AMPMS;
        var hourStep = timepickerConfig.hourStep;
        if (attrs.hourStep) {
          scope.$parent.$watch($parse(attrs.hourStep), function (value) {
            hourStep = parseInt(value, 10);
          });
        }
        var minuteStep = timepickerConfig.minuteStep;
        if (attrs.minuteStep) {
          scope.$parent.$watch($parse(attrs.minuteStep), function (value) {
            minuteStep = parseInt(value, 10);
          });
        }
        scope.showMeridian = timepickerConfig.showMeridian;
        if (attrs.showMeridian) {
          scope.$parent.$watch($parse(attrs.showMeridian), function (value) {
            scope.showMeridian = !!value;
            if (ngModel.$error.time) {
              var hours = getHoursFromTemplate(), minutes = getMinutesFromTemplate();
              if (angular.isDefined(hours) && angular.isDefined(minutes)) {
                selected.setHours(hours);
                refresh();
              }
            } else {
              updateTemplate();
            }
          });
        }
        function getHoursFromTemplate() {
          var hours = parseInt(scope.hours, 10);
          var valid = scope.showMeridian ? hours > 0 && hours < 13 : hours >= 0 && hours < 24;
          if (!valid) {
            return undefined;
          }
          if (scope.showMeridian) {
            if (hours === 12) {
              hours = 0;
            }
            if (scope.meridian === meridians[1]) {
              hours = hours + 12;
            }
          }
          return hours;
        }
        function getMinutesFromTemplate() {
          var minutes = parseInt(scope.minutes, 10);
          return minutes >= 0 && minutes < 60 ? minutes : undefined;
        }
        function pad(value) {
          return angular.isDefined(value) && value.toString().length < 2 ? '0' + value : value;
        }
        var inputs = element.find('input'), hoursInputEl = inputs.eq(0), minutesInputEl = inputs.eq(1);
        var mousewheel = angular.isDefined(attrs.mousewheel) ? scope.$eval(attrs.mousewheel) : timepickerConfig.mousewheel;
        if (mousewheel) {
          var isScrollingUp = function (e) {
            if (e.originalEvent) {
              e = e.originalEvent;
            }
            var delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;
            return e.detail || delta > 0;
          };
          hoursInputEl.bind('mousewheel wheel', function (e) {
            scope.$apply(isScrollingUp(e) ? scope.incrementHours() : scope.decrementHours());
            e.preventDefault();
          });
          minutesInputEl.bind('mousewheel wheel', function (e) {
            scope.$apply(isScrollingUp(e) ? scope.incrementMinutes() : scope.decrementMinutes());
            e.preventDefault();
          });
        }
        scope.readonlyInput = angular.isDefined(attrs.readonlyInput) ? scope.$eval(attrs.readonlyInput) : timepickerConfig.readonlyInput;
        if (!scope.readonlyInput) {
          var invalidate = function (invalidHours, invalidMinutes) {
            ngModel.$setViewValue(null);
            ngModel.$setValidity('time', false);
            if (angular.isDefined(invalidHours)) {
              scope.invalidHours = invalidHours;
            }
            if (angular.isDefined(invalidMinutes)) {
              scope.invalidMinutes = invalidMinutes;
            }
          };
          scope.updateHours = function () {
            var hours = getHoursFromTemplate();
            if (angular.isDefined(hours)) {
              selected.setHours(hours);
              refresh('h');
            } else {
              invalidate(true);
            }
          };
          hoursInputEl.bind('blur', function (e) {
            if (!scope.validHours && scope.hours < 10) {
              scope.$apply(function () {
                scope.hours = pad(scope.hours);
              });
            }
          });
          scope.updateMinutes = function () {
            var minutes = getMinutesFromTemplate();
            if (angular.isDefined(minutes)) {
              selected.setMinutes(minutes);
              refresh('m');
            } else {
              invalidate(undefined, true);
            }
          };
          minutesInputEl.bind('blur', function (e) {
            if (!scope.invalidMinutes && scope.minutes < 10) {
              scope.$apply(function () {
                scope.minutes = pad(scope.minutes);
              });
            }
          });
        } else {
          scope.updateHours = angular.noop;
          scope.updateMinutes = angular.noop;
        }
        ngModel.$render = function () {
          var date = ngModel.$modelValue ? new Date(ngModel.$modelValue) : null;
          if (isNaN(date)) {
            ngModel.$setValidity('time', false);
            $log.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
          } else {
            if (date) {
              selected = date;
            }
            makeValid();
            updateTemplate();
          }
        };
        function refresh(keyboardChange) {
          makeValid();
          ngModel.$setViewValue(new Date(selected));
          updateTemplate(keyboardChange);
        }
        function makeValid() {
          ngModel.$setValidity('time', true);
          scope.invalidHours = false;
          scope.invalidMinutes = false;
        }
        function updateTemplate(keyboardChange) {
          var hours = selected.getHours(), minutes = selected.getMinutes();
          if (scope.showMeridian) {
            hours = hours === 0 || hours === 12 ? 12 : hours % 12;
          }
          scope.hours = keyboardChange === 'h' ? hours : pad(hours);
          scope.minutes = keyboardChange === 'm' ? minutes : pad(minutes);
          scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
        }
        function addMinutes(minutes) {
          var dt = new Date(selected.getTime() + minutes * 60000);
          selected.setHours(dt.getHours(), dt.getMinutes());
          refresh();
        }
        scope.incrementHours = function () {
          addMinutes(hourStep * 60);
        };
        scope.decrementHours = function () {
          addMinutes(-hourStep * 60);
        };
        scope.incrementMinutes = function () {
          addMinutes(minuteStep);
        };
        scope.decrementMinutes = function () {
          addMinutes(-minuteStep);
        };
        scope.toggleMeridian = function () {
          addMinutes(12 * 60 * (selected.getHours() < 12 ? 1 : -1));
        };
      }
    };
  }
]);
angular.module('ui.bootstrap.typeahead', [
  'ui.bootstrap.position',
  'ui.bootstrap.bindHtml'
]).factory('typeaheadParser', [
  '$parse',
  function ($parse) {
    var TYPEAHEAD_REGEXP = /^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+(.*)$/;
    return {
      parse: function (input) {
        var match = input.match(TYPEAHEAD_REGEXP), modelMapper, viewMapper, source;
        if (!match) {
          throw new Error('Expected typeahead specification in form of \'_modelValue_ (as _label_)? for _item_ in _collection_\'' + ' but got \'' + input + '\'.');
        }
        return {
          itemName: match[3],
          source: $parse(match[4]),
          viewMapper: $parse(match[2] || match[1]),
          modelMapper: $parse(match[1])
        };
      }
    };
  }
]).directive('typeahead', [
  '$compile',
  '$parse',
  '$q',
  '$timeout',
  '$document',
  '$position',
  'typeaheadParser',
  function ($compile, $parse, $q, $timeout, $document, $position, typeaheadParser) {
    var HOT_KEYS = [
        9,
        13,
        27,
        38,
        40
      ];
    return {
      require: 'ngModel',
      link: function (originalScope, element, attrs, modelCtrl) {
        var minSearch = originalScope.$eval(attrs.typeaheadMinLength) || 1;
        var waitTime = originalScope.$eval(attrs.typeaheadWaitMs) || 0;
        var isEditable = originalScope.$eval(attrs.typeaheadEditable) !== false;
        var isLoadingSetter = $parse(attrs.typeaheadLoading).assign || angular.noop;
        var onSelectCallback = $parse(attrs.typeaheadOnSelect);
        var inputFormatter = attrs.typeaheadInputFormatter ? $parse(attrs.typeaheadInputFormatter) : undefined;
        var appendToBody = attrs.typeaheadAppendToBody ? $parse(attrs.typeaheadAppendToBody) : false;
        var $setModelValue = $parse(attrs.ngModel).assign;
        var parserResult = typeaheadParser.parse(attrs.typeahead);
        var hasFocus;
        var popUpEl = angular.element('<div typeahead-popup></div>');
        popUpEl.attr({
          matches: 'matches',
          active: 'activeIdx',
          select: 'select(activeIdx)',
          query: 'query',
          position: 'position'
        });
        if (angular.isDefined(attrs.typeaheadTemplateUrl)) {
          popUpEl.attr('template-url', attrs.typeaheadTemplateUrl);
        }
        var scope = originalScope.$new();
        originalScope.$on('$destroy', function () {
          scope.$destroy();
        });
        var resetMatches = function () {
          scope.matches = [];
          scope.activeIdx = -1;
        };
        var getMatchesAsync = function (inputValue) {
          var locals = { $viewValue: inputValue };
          isLoadingSetter(originalScope, true);
          $q.when(parserResult.source(originalScope, locals)).then(function (matches) {
            if (inputValue === modelCtrl.$viewValue && hasFocus) {
              if (matches.length > 0) {
                scope.activeIdx = 0;
                scope.matches.length = 0;
                for (var i = 0; i < matches.length; i++) {
                  locals[parserResult.itemName] = matches[i];
                  scope.matches.push({
                    label: parserResult.viewMapper(scope, locals),
                    model: matches[i]
                  });
                }
                scope.query = inputValue;
                scope.position = appendToBody ? $position.offset(element) : $position.position(element);
                scope.position.top = scope.position.top + element.prop('offsetHeight');
              } else {
                resetMatches();
              }
              isLoadingSetter(originalScope, false);
            }
          }, function () {
            resetMatches();
            isLoadingSetter(originalScope, false);
          });
        };
        resetMatches();
        scope.query = undefined;
        var timeoutPromise;
        modelCtrl.$parsers.unshift(function (inputValue) {
          hasFocus = true;
          if (inputValue && inputValue.length >= minSearch) {
            if (waitTime > 0) {
              if (timeoutPromise) {
                $timeout.cancel(timeoutPromise);
              }
              timeoutPromise = $timeout(function () {
                getMatchesAsync(inputValue);
              }, waitTime);
            } else {
              getMatchesAsync(inputValue);
            }
          } else {
            isLoadingSetter(originalScope, false);
            resetMatches();
          }
          if (isEditable) {
            return inputValue;
          } else {
            if (!inputValue) {
              modelCtrl.$setValidity('editable', true);
              return inputValue;
            } else {
              modelCtrl.$setValidity('editable', false);
              return undefined;
            }
          }
        });
        modelCtrl.$formatters.push(function (modelValue) {
          var candidateViewValue, emptyViewValue;
          var locals = {};
          if (inputFormatter) {
            locals['$model'] = modelValue;
            return inputFormatter(originalScope, locals);
          } else {
            locals[parserResult.itemName] = modelValue;
            candidateViewValue = parserResult.viewMapper(originalScope, locals);
            locals[parserResult.itemName] = undefined;
            emptyViewValue = parserResult.viewMapper(originalScope, locals);
            return candidateViewValue !== emptyViewValue ? candidateViewValue : modelValue;
          }
        });
        scope.select = function (activeIdx) {
          var locals = {};
          var model, item;
          locals[parserResult.itemName] = item = scope.matches[activeIdx].model;
          model = parserResult.modelMapper(originalScope, locals);
          $setModelValue(originalScope, model);
          modelCtrl.$setValidity('editable', true);
          onSelectCallback(originalScope, {
            $item: item,
            $model: model,
            $label: parserResult.viewMapper(originalScope, locals)
          });
          resetMatches();
          element[0].focus();
        };
        element.bind('keydown', function (evt) {
          if (scope.matches.length === 0 || HOT_KEYS.indexOf(evt.which) === -1) {
            return;
          }
          evt.preventDefault();
          if (evt.which === 40) {
            scope.activeIdx = (scope.activeIdx + 1) % scope.matches.length;
            scope.$digest();
          } else if (evt.which === 38) {
            scope.activeIdx = (scope.activeIdx ? scope.activeIdx : scope.matches.length) - 1;
            scope.$digest();
          } else if (evt.which === 13 || evt.which === 9) {
            scope.$apply(function () {
              scope.select(scope.activeIdx);
            });
          } else if (evt.which === 27) {
            evt.stopPropagation();
            resetMatches();
            scope.$digest();
          }
        });
        element.bind('blur', function (evt) {
          hasFocus = false;
        });
        var dismissClickHandler = function (evt) {
          if (element[0] !== evt.target) {
            resetMatches();
            scope.$digest();
          }
        };
        $document.bind('click', dismissClickHandler);
        originalScope.$on('$destroy', function () {
          $document.unbind('click', dismissClickHandler);
        });
        var $popup = $compile(popUpEl)(scope);
        if (appendToBody) {
          $document.find('body').append($popup);
        } else {
          element.after($popup);
        }
      }
    };
  }
]).directive('typeaheadPopup', function () {
  return {
    restrict: 'EA',
    scope: {
      matches: '=',
      query: '=',
      active: '=',
      position: '=',
      select: '&'
    },
    replace: true,
    templateUrl: 'template/typeahead/typeahead-popup.html',
    link: function (scope, element, attrs) {
      scope.templateUrl = attrs.templateUrl;
      scope.isOpen = function () {
        return scope.matches.length > 0;
      };
      scope.isActive = function (matchIdx) {
        return scope.active == matchIdx;
      };
      scope.selectActive = function (matchIdx) {
        scope.active = matchIdx;
      };
      scope.selectMatch = function (activeIdx) {
        scope.select({ activeIdx: activeIdx });
      };
    }
  };
}).directive('typeaheadMatch', [
  '$http',
  '$templateCache',
  '$compile',
  '$parse',
  function ($http, $templateCache, $compile, $parse) {
    return {
      restrict: 'EA',
      scope: {
        index: '=',
        match: '=',
        query: '='
      },
      link: function (scope, element, attrs) {
        var tplUrl = $parse(attrs.templateUrl)(scope.$parent) || 'template/typeahead/typeahead-match.html';
        $http.get(tplUrl, { cache: $templateCache }).success(function (tplContent) {
          element.replaceWith($compile(tplContent.trim())(scope));
        });
      }
    };
  }
]).filter('typeaheadHighlight', function () {
  function escapeRegexp(queryToEscape) {
    return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
  }
  return function (matchItem, query) {
    return query ? matchItem.replace(new RegExp(escapeRegexp(query), 'gi'), '<strong>$&</strong>') : matchItem;
  };
});
angular.module('template/accordion/accordion-group.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/accordion/accordion-group.html', '<div class="panel panel-default">\n' + '  <div class="panel-heading">\n' + '    <h4 class="panel-title">\n' + '      <a class="accordion-toggle" ng-click="isOpen = !isOpen" accordion-transclude="heading">{{heading}}</a>\n' + '    </h4>\n' + '  </div>\n' + '  <div class="panel-collapse" collapse="!isOpen">\n' + '\t  <div class="panel-body" ng-transclude></div>\n' + '  </div>\n' + '</div>');
  }
]);
angular.module('template/accordion/accordion.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/accordion/accordion.html', '<div class="panel-group" ng-transclude></div>');
  }
]);
angular.module('template/alert/alert.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/alert/alert.html', '<div class=\'alert\' ng-class=\'"alert-" + (type || "warning")\'>\n' + '    <button ng-show=\'closeable\' type=\'button\' class=\'close\' ng-click=\'close()\'>&times;</button>\n' + '    <div ng-transclude></div>\n' + '</div>\n' + '');
  }
]);
angular.module('template/carousel/carousel.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/carousel/carousel.html', '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel">\n' + '    <ol class="carousel-indicators" ng-show="slides().length > 1">\n' + '        <li ng-repeat="slide in slides()" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n' + '    </ol>\n' + '    <div class="carousel-inner" ng-transclude></div>\n' + '    <a class="left carousel-control" ng-click="prev()" ng-show="slides().length > 1"><span class="icon-prev"></span></a>\n' + '    <a class="right carousel-control" ng-click="next()" ng-show="slides().length > 1"><span class="icon-next"></span></a>\n' + '</div>\n' + '');
  }
]);
angular.module('template/carousel/slide.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/carousel/slide.html', '<div ng-class="{\n' + '    \'active\': leaving || (active && !entering),\n' + '    \'prev\': (next || active) && direction==\'prev\',\n' + '    \'next\': (next || active) && direction==\'next\',\n' + '    \'right\': direction==\'prev\',\n' + '    \'left\': direction==\'next\'\n' + '  }" class="item text-center" ng-transclude></div>\n' + '');
  }
]);
angular.module('template/datepicker/datepicker.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/datepicker/datepicker.html', '<table>\n' + '  <thead>\n' + '    <tr>\n' + '      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n' + '      <th colspan="{{rows[0].length - 2 + showWeekNumbers}}"><button type="button" class="btn btn-default btn-sm btn-block" ng-click="toggleMode()"><strong>{{title}}</strong></button></th>\n' + '      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n' + '    </tr>\n' + '    <tr ng-show="labels.length > 0" class="h6">\n' + '      <th ng-show="showWeekNumbers" class="text-center">#</th>\n' + '      <th ng-repeat="label in labels" class="text-center">{{label}}</th>\n' + '    </tr>\n' + '  </thead>\n' + '  <tbody>\n' + '    <tr ng-repeat="row in rows">\n' + '      <td ng-show="showWeekNumbers" class="text-center"><em>{{ getWeekNumber(row) }}</em></td>\n' + '      <td ng-repeat="dt in row" class="text-center">\n' + '        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected}" ng-click="select(dt.date)" ng-disabled="dt.disabled"><span ng-class="{\'text-muted\': dt.secondary}">{{dt.label}}</span></button>\n' + '      </td>\n' + '    </tr>\n' + '  </tbody>\n' + '</table>\n' + '');
  }
]);
angular.module('template/datepicker/popup.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/datepicker/popup.html', '<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}">\n' + '\t<li ng-transclude></li>\n' + '\t<li ng-show="showButtonBar" style="padding:10px 9px 2px">\n' + '\t\t<span class="btn-group">\n' + '\t\t\t<button type="button" class="btn btn-sm btn-info" ng-click="today()">{{currentText}}</button>\n' + '\t\t\t<button type="button" class="btn btn-sm btn-default" ng-click="showWeeks = ! showWeeks" ng-class="{active: showWeeks}">{{toggleWeeksText}}</button>\n' + '\t\t\t<button type="button" class="btn btn-sm btn-danger" ng-click="clear()">{{clearText}}</button>\n' + '\t\t</span>\n' + '\t\t<button type="button" class="btn btn-sm btn-success pull-right" ng-click="isOpen = false">{{closeText}}</button>\n' + '\t</li>\n' + '</ul>\n' + '');
  }
]);
angular.module('template/modal/backdrop.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/modal/backdrop.html', '<div class="modal-backdrop fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1040 + index*10}"></div>');
  }
]);
angular.module('template/modal/window.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/modal/window.html', '<div tabindex="-1" class="modal fade {{ windowClass }}" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n' + '    <div class="modal-dialog"><div class="modal-content" ng-transclude></div></div>\n' + '</div>');
  }
]);
angular.module('template/pagination/pager.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/pagination/pager.html', '<ul class="pager">\n' + '  <li ng-repeat="page in pages" ng-class="{disabled: page.disabled, previous: page.previous, next: page.next}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li>\n' + '</ul>');
  }
]);
angular.module('template/pagination/pagination.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/pagination/pagination.html', '<ul class="pagination">\n' + '  <li ng-repeat="page in pages" ng-class="{active: page.active, disabled: page.disabled}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li>\n' + '</ul>');
  }
]);
angular.module('template/tooltip/tooltip-html-unsafe-popup.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/tooltip/tooltip-html-unsafe-popup.html', '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n' + '  <div class="tooltip-arrow"></div>\n' + '  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n' + '</div>\n' + '');
  }
]);
angular.module('template/tooltip/tooltip-popup.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/tooltip/tooltip-popup.html', '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n' + '  <div class="tooltip-arrow"></div>\n' + '  <div class="tooltip-inner" ng-bind="content"></div>\n' + '</div>\n' + '');
  }
]);
angular.module('template/popover/popover.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/popover/popover.html', '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n' + '  <div class="arrow"></div>\n' + '\n' + '  <div class="popover-inner">\n' + '      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n' + '      <div class="popover-content" ng-bind="content"></div>\n' + '  </div>\n' + '</div>\n' + '');
  }
]);
angular.module('template/progressbar/bar.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/progressbar/bar.html', '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" ng-transclude></div>');
  }
]);
angular.module('template/progressbar/progress.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/progressbar/progress.html', '<div class="progress" ng-transclude></div>');
  }
]);
angular.module('template/progressbar/progressbar.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/progressbar/progressbar.html', '<div class="progress"><div class="progress-bar" ng-class="type && \'progress-bar-\' + type" ng-transclude></div></div>');
  }
]);
angular.module('template/rating/rating.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/rating/rating.html', '<span ng-mouseleave="reset()">\n' + '    <i ng-repeat="r in range" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < val && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')"></i>\n' + '</span>');
  }
]);
angular.module('template/tabs/tab.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/tabs/tab.html', '<li ng-class="{active: active, disabled: disabled}">\n' + '  <a ng-click="select()" tab-heading-transclude>{{heading}}</a>\n' + '</li>\n' + '');
  }
]);
angular.module('template/tabs/tabset-titles.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/tabs/tabset-titles.html', '<ul class="nav {{type && \'nav-\' + type}}" ng-class="{\'nav-stacked\': vertical}">\n' + '</ul>\n' + '');
  }
]);
angular.module('template/tabs/tabset.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/tabs/tabset.html', '\n' + '<div class="tabbable">\n' + '  <ul class="nav {{type && \'nav-\' + type}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n' + '  <div class="tab-content">\n' + '    <div class="tab-pane" \n' + '         ng-repeat="tab in tabs" \n' + '         ng-class="{active: tab.active}"\n' + '         tab-content-transclude="tab">\n' + '    </div>\n' + '  </div>\n' + '</div>\n' + '');
  }
]);
angular.module('template/timepicker/timepicker.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/timepicker/timepicker.html', '<table>\n' + '\t<tbody>\n' + '\t\t<tr class="text-center">\n' + '\t\t\t<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n' + '\t\t\t<td>&nbsp;</td>\n' + '\t\t\t<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n' + '\t\t\t<td ng-show="showMeridian"></td>\n' + '\t\t</tr>\n' + '\t\t<tr>\n' + '\t\t\t<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n' + '\t\t\t\t<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n' + '\t\t\t</td>\n' + '\t\t\t<td>:</td>\n' + '\t\t\t<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n' + '\t\t\t\t<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n' + '\t\t\t</td>\n' + '\t\t\t<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n' + '\t\t</tr>\n' + '\t\t<tr class="text-center">\n' + '\t\t\t<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n' + '\t\t\t<td>&nbsp;</td>\n' + '\t\t\t<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n' + '\t\t\t<td ng-show="showMeridian"></td>\n' + '\t\t</tr>\n' + '\t</tbody>\n' + '</table>\n' + '');
  }
]);
angular.module('template/typeahead/typeahead-match.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/typeahead/typeahead-match.html', '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>');
  }
]);
angular.module('template/typeahead/typeahead-popup.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/typeahead/typeahead-popup.html', '<ul class="dropdown-menu" ng-style="{display: isOpen()&&\'block\' || \'none\', top: position.top+\'px\', left: position.left+\'px\'}">\n' + '    <li ng-repeat="match in matches" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)">\n' + '        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n' + '    </li>\n' + '</ul>');
  }
]);(function () {
}.call(this));App.controller('AngelsCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/angels.json').then(function (stories) {
      $scope.stories = stories.data;
    });
  }
]);
App.controller('AngelsHomeCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/angels/official.json').then(function (official) {
      $scope.official = official.data;
    });
    $http.get('/api/angels/espn.json').then(function (espn) {
      $scope.espn = espn.data;
    });
    $http.get('/api/angels/latimes.json').then(function (latimes) {
      $scope.latimes = latimes.data;
    });
    $http.get('/api/angels/ocregister.json').then(function (ocregister) {
      $scope.ocregister = ocregister.data;
    });
    $http.get('/api/angels/dailynews.json').then(function (dailynews) {
      $scope.dailynews = dailynews.data;
    });
    $http.get('/api/angels/cbs.json').then(function (cbs) {
      $scope.cbs = cbs.data;
    });
    $http.get('/api/angels/bleacher_report.json').then(function (bleacher_report) {
      $scope.bleacher_report = bleacher_report.data;
    });
    $http.get('/api/angels/fox_sports.json').then(function (fox_sports) {
      $scope.fox_sports = fox_sports.data;
    });
  }
]);
App.controller('AngelsTweetsCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/angels/twitter.json').then(function (tweets) {
      $scope.tweets = tweets.data;
    });
  }
]);
App.controller('AngelsInstagramCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/angels/instagram.json').then(function (instagram) {
      $scope.instagram = instagram.data;
    });
  }
]);
App.controller('AngelsTumblrCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/angels/tumblr.json').then(function (tumblr) {
      $scope.tumblr = tumblr.data;
    });
  }
]);App.controller('BruinsCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/bruins.json').then(function (stories) {
      $scope.stories = stories.data;
    });
  }
]);
App.controller('BruinsHomeCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/bruins/official.json').then(function (official) {
      $scope.official = official.data;
    });
    $http.get('/api/bruins/espn.json').then(function (espn) {
      $scope.espn = espn.data;
    });
    $http.get('/api/bruins/latimes.json').then(function (latimes) {
      $scope.latimes = latimes.data;
    });
    $http.get('/api/bruins/ocregister.json').then(function (ocregister) {
      $scope.ocregister = ocregister.data;
    });
    $http.get('/api/bruins/bleacher_report.json').then(function (bleacher_report) {
      $scope.bleacher_report = bleacher_report.data;
    });
    $http.get('/api/bruins/fox_sports.json').then(function (fox_sports) {
      $scope.fox_sports = fox_sports.data;
    });
    $http.get('/api/bruins/inside_ucla.json').then(function (inside_ucla) {
      $scope.inside_ucla = inside_ucla.data;
    });
    $http.get('/api/bruins/bruins_nation.json').then(function (bruins_nation) {
      $scope.bruins_nation = bruins_nation.data;
    });
    $http.get('/api/bruins/punting_is_winning.json').then(function (punting_is_winning) {
      $scope.punting_is_winning = punting_is_winning.data;
    });
    $http.get('/api/bruins/go_joe_bruin.json').then(function (go_joe_bruin) {
      $scope.go_joe_bruin = go_joe_bruin.data;
    });
    $http.get('/api/bruins/bruin_247.json').then(function (bruin_247) {
      $scope.bruin_247 = bruin_247.data;
    });
    $http.get('/api/bruins/rivals.json').then(function (rivals) {
      $scope.rivals = rivals.data;
    });
    $http.get('/api/bruins/scout.json').then(function (scout) {
      $scope.scout = scout.data;
    });
  }
]);
App.controller('BruinsTweetsCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/bruins/twitter.json').then(function (tweets) {
      $scope.tweets = tweets.data;
    });
  }
]);
App.controller('BruinsInstagramCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/bruins/instagram.json').then(function (instagram) {
      $scope.instagram = instagram.data;
    });
  }
]);
App.controller('BruinsYoutubeCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/bruins/youtube.json').then(function (youtube) {
      $scope.youtube = youtube.data;
    });
  }
]);App.controller('ChivasCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/chivas.json').then(function (stories) {
      $scope.stories = stories.data;
    });
  }
]);
App.controller('ChivasHomeCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/chivas/official.json').then(function (official) {
      $scope.official = official.data;
    });
    $http.get('/api/chivas/espn.json').then(function (espn) {
      $scope.espn = espn.data;
    });
    $http.get('/api/chivas/latimes.json').then(function (latimes) {
      $scope.latimes = latimes.data;
    });
    $http.get('/api/chivas/bleacher_report.json').then(function (bleacher_report) {
      $scope.bleacher_report = bleacher_report.data;
    });
    $http.get('/api/chivas/the_goat_parade.json').then(function (the_goat_parade) {
      $scope.the_goat_parade = the_goat_parade.data;
    });
  }
]);
App.controller('ChivasTweetsCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/chivas/twitter.json').then(function (tweets) {
      $scope.tweets = tweets.data;
    });
  }
]);
App.controller('ChivasInstagramCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/chivas/instagram.json').then(function (instagram) {
      $scope.instagram = instagram.data;
    });
  }
]);App.controller('ClippersCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/clippers.json').then(function (stories) {
      $scope.stories = stories.data;
    });
  }
]);
App.controller('ClippersHomeCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/clippers/official.json').then(function (official) {
      $scope.official = official.data;
    });
    $http.get('/api/clippers/espn.json').then(function (espn) {
      $scope.espn = espn.data;
    });
    $http.get('/api/clippers/latimes.json').then(function (latimes) {
      $scope.latimes = latimes.data;
    });
    $http.get('/api/clippers/ocregister.json').then(function (ocregister) {
      $scope.ocregister = ocregister.data;
    });
    $http.get('/api/clippers/dailynews.json').then(function (dailynews) {
      $scope.dailynews = dailynews.data;
    });
    $http.get('/api/clippers/cbs.json').then(function (cbs) {
      $scope.cbs = cbs.data;
    });
    $http.get('/api/clippers/bleacher_report.json').then(function (bleacher_report) {
      $scope.bleacher_report = bleacher_report.data;
    });
    $http.get('/api/clippers/fox_sports.json').then(function (fox_sports) {
      $scope.fox_sports = fox_sports.data;
    });
  }
]);
App.controller('ClippersTweetsCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/clippers/twitter.json').then(function (tweets) {
      $scope.tweets = tweets.data;
    });
  }
]);
App.controller('ClippersInstagramCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/clippers/instagram.json').then(function (instagram) {
      $scope.instagram = instagram.data;
    });
  }
]);App.controller('DodgersCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/dodgers.json').then(function (stories) {
      $scope.stories = stories.data;
    });
  }
]);
App.controller('DodgersHomeCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/dodgers/official.json').then(function (official) {
      $scope.official = official.data;
    });
    $http.get('/api/dodgers/espn.json').then(function (espn) {
      $scope.espn = espn.data;
    });
    $http.get('/api/dodgers/latimes.json').then(function (latimes) {
      $scope.latimes = latimes.data;
    });
    $http.get('/api/dodgers/ocregister.json').then(function (ocregister) {
      $scope.ocregister = ocregister.data;
    });
    $http.get('/api/dodgers/dailynews.json').then(function (dailynews) {
      $scope.dailynews = dailynews.data;
    });
    $http.get('/api/dodgers/cbs.json').then(function (cbs) {
      $scope.cbs = cbs.data;
    });
    $http.get('/api/dodgers/bleacher_report.json').then(function (bleacher_report) {
      $scope.bleacher_report = bleacher_report.data;
    });
    $http.get('/api/dodgers/fox_sports.json').then(function (fox_sports) {
      $scope.fox_sports = fox_sports.data;
    });
  }
]);
App.controller('DodgersTweetsCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/dodgers/twitter.json').then(function (tweets) {
      $scope.tweets = tweets.data;
    });
  }
]);
App.controller('DodgersInstagramCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/dodgers/instagram.json').then(function (instagram) {
      $scope.instagram = instagram.data;
    });
  }
]);
App.controller('DodgersTumblrCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/dodgers/tumblr.json').then(function (tumblr) {
      $scope.tumblr = tumblr.data;
    });
  }
]);App.controller('DucksCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/ducks.json').then(function (stories) {
      $scope.stories = stories.data;
    });
  }
]);
App.controller('DucksHomeCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/ducks/official.json').then(function (official) {
      $scope.official = official.data;
    });
    $http.get('/api/ducks/espn.json').then(function (espn) {
      $scope.espn = espn.data;
    });
    $http.get('/api/ducks/latimes.json').then(function (latimes) {
      $scope.latimes = latimes.data;
    });
    $http.get('/api/ducks/ocregister.json').then(function (ocregister) {
      $scope.ocregister = ocregister.data;
    });
    $http.get('/api/ducks/dailynews.json').then(function (dailynews) {
      $scope.dailynews = dailynews.data;
    });
    $http.get('/api/ducks/cbs.json').then(function (cbs) {
      $scope.cbs = cbs.data;
    });
    $http.get('/api/ducks/bleacher_report.json').then(function (bleacher_report) {
      $scope.bleacher_report = bleacher_report.data;
    });
    $http.get('/api/ducks/fox_sports.json').then(function (fox_sports) {
      $scope.fox_sports = fox_sports.data;
    });
  }
]);
App.controller('DucksTweetsCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/ducks/twitter.json').then(function (tweets) {
      $scope.tweets = tweets.data;
    });
  }
]);
App.controller('DucksInstagramCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/ducks/instagram.json').then(function (instagram) {
      $scope.instagram = instagram.data;
    });
  }
]);
App.controller('DucksTumblrCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/ducks/tumblr.json').then(function (tumblr) {
      $scope.tumblr = tumblr.data;
    });
  }
]);App.controller('GalaxyCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/galaxy.json').then(function (stories) {
      $scope.stories = stories.data;
    });
  }
]);
App.controller('GalaxyHomeCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/galaxy/official.json').then(function (official) {
      $scope.official = official.data;
    });
    $http.get('/api/galaxy/espn.json').then(function (espn) {
      $scope.espn = espn.data;
    });
    $http.get('/api/galaxy/latimes.json').then(function (latimes) {
      $scope.latimes = latimes.data;
    });
    $http.get('/api/galaxy/bleacher_report.json').then(function (bleacher_report) {
      $scope.bleacher_report = bleacher_report.data;
    });
    $http.get('/api/galaxy/lag_confidential.json').then(function (lag_confidential) {
      $scope.lag_confidential = lag_confidential.data;
    });
    $http.get('/api/galaxy/corner_of_the_galaxy.json').then(function (corner_of_the_galaxy) {
      $scope.corner_of_the_galaxy = corner_of_the_galaxy.data;
    });
  }
]);
App.controller('GalaxyTweetsCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/galaxy/twitter.json').then(function (tweets) {
      $scope.tweets = tweets.data;
    });
  }
]);
App.controller('GalaxyInstagramCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/galaxy/instagram.json').then(function (instagram) {
      $scope.instagram = instagram.data;
    });
  }
]);App.controller('KingsCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/kings.json').then(function (stories) {
      $scope.stories = stories.data;
    });
  }
]);
App.controller('KingsHomeCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/kings/official.json').then(function (official) {
      $scope.official = official.data;
    });
    $http.get('/api/kings/espn.json').then(function (espn) {
      $scope.espn = espn.data;
    });
    $http.get('/api/kings/latimes.json').then(function (latimes) {
      $scope.latimes = latimes.data;
    });
    $http.get('/api/kings/ocregister.json').then(function (ocregister) {
      $scope.ocregister = ocregister.data;
    });
    $http.get('/api/kings/dailynews.json').then(function (dailynews) {
      $scope.dailynews = dailynews.data;
    });
    $http.get('/api/kings/cbs.json').then(function (cbs) {
      $scope.cbs = cbs.data;
    });
    $http.get('/api/kings/bleacher_report.json').then(function (bleacher_report) {
      $scope.bleacher_report = bleacher_report.data;
    });
    $http.get('/api/kings/fox_sports.json').then(function (fox_sports) {
      $scope.fox_sports = fox_sports.data;
    });
  }
]);
App.controller('KingsTweetsCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/kings/twitter.json').then(function (tweets) {
      $scope.tweets = tweets.data;
    });
  }
]);
App.controller('KingsInstagramCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/kings/instagram.json').then(function (instagram) {
      $scope.instagram = instagram.data;
    });
  }
]);App.controller('LakersCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/lakers.json').then(function (stories) {
      $scope.stories = stories.data;
      for (var i = 0; i < stories.data.length; i++) {
        if (stories.data[i].published) {
          var clock = new Date();
          console.log(stories.data[i].published);
          console.log(clock);
          break;
        }
      }
    });
    $scope.addFavorite = function (story) {
      console.log(story);
    };
  }
]);
App.controller('LakersHomeCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/lakers.json').then(function (stories) {
      $scope.havePics = [];
      for (var i = 0; i < stories.data.length; i++) {
        if (stories.data[i].image) {
          $scope.havePics.push(stories.data[i]);
        }
      }
      ;
    });
    $http.get('/api/lakers/official.json').then(function (official) {
      $scope.official = official.data;
    });
    $http.get('/api/lakers/espn.json').then(function (espn) {
      $scope.espn = espn.data;
    });
    $http.get('/api/lakers/latimes.json').then(function (latimes) {
      $scope.latimes = latimes.data;
    });
    $http.get('/api/lakers/ocregister.json').then(function (ocregister) {
      $scope.ocregister = ocregister.data;
    });
    $http.get('/api/lakers/dailynews.json').then(function (dailynews) {
      $scope.dailynews = dailynews.data;
    });
    $http.get('/api/lakers/cbs.json').then(function (cbs) {
      $scope.cbs = cbs.data;
    });
    $http.get('/api/lakers/bleacher_report.json').then(function (bleacher_report) {
      $scope.bleacher_report = bleacher_report.data;
    });
    $http.get('/api/lakers/inside_the_lakers.json').then(function (inside_the_lakers) {
      $scope.inside_the_lakers = inside_the_lakers.data;
    });
    $http.get('/api/lakers/lakers_nation.json').then(function (lakers_nation) {
      $scope.lakers_nation = lakers_nation.data;
    });
    $http.get('/api/lakers/forum_blue_and_gold.json').then(function (forum_blue_and_gold) {
      $scope.forum_blue_and_gold = forum_blue_and_gold.data;
    });
    $http.get('/api/lakers/silver_screen_and_roll.json').then(function (silver_screen_and_roll) {
      $scope.silver_screen_and_roll = silver_screen_and_roll.data;
    });
    $http.get('/api/lakers/laker_nation.json').then(function (laker_nation) {
      $scope.laker_nation = laker_nation.data;
    });
    $http.get('/api/lakers/lakerholicz.json').then(function (lakerholicz) {
      $scope.lakerholicz = lakerholicz.data;
    });
    $http.get('/api/lakers/lake_show_life.json').then(function (lake_show_life) {
      $scope.lake_show_life = lake_show_life.data;
    });
    $http.get('/api/lakers/la_sports_hub.json').then(function (la_sports_hub) {
      $scope.la_sports_hub = la_sports_hub.data;
    });
    $http.get('/api/lakers/fansided.json').then(function (fansided) {
      $scope.fansided = fansided.data;
    });
    $http.get('/api/lakers/fox_sports.json').then(function (fox_sports) {
      $scope.fox_sports = fox_sports.data;
    });
    $http.get('/api/lakers/hoops_hype.json').then(function (hoops_hype) {
      $scope.hoops_hype = hoops_hype.data;
    });
    $http.get('/api/lakers/nba.json').then(function (nba) {
      $scope.nba = nba.data;
    });
    $http.get('/api/lakers/triple_threat.json').then(function (triple_threat) {
      $scope.triple_threat = triple_threat.data;
    });
  }
]);
App.controller('LakersTweetsCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/lakers/twitter.json').then(function (tweets) {
      $scope.tweets = tweets.data;
    });
  }
]);
App.controller('LakersInstagramCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/lakers/instagram.json').then(function (instagram) {
      $scope.instagram = instagram.data;
    });
  }
]);
App.controller('LakersTumblrCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/lakers/tumblr.json').then(function (tumblr) {
      $scope.tumblr = tumblr.data;
    });
  }
]);App.controller('PrepsCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/preps.json').then(function (stories) {
      $scope.stories = stories.data;
    });
  }
]);
App.controller('PrepsHomeCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/preps/latimes.json').then(function (latimes) {
      $scope.latimes = latimes.data;
    });
    $http.get('/api/preps/espn.json').then(function (espn) {
      $scope.espn = espn.data;
    });
    $http.get('/api/preps/ocregister.json').then(function (ocregister) {
      $scope.ocregister = ocregister.data;
    });
    $http.get('/api/preps/dailynews.json').then(function (dailynews) {
      $scope.dailynews = dailynews.data;
    });
    $http.get('/api/preps/cbs.json').then(function (cbs) {
      $scope.cbs = cbs.data;
    });
  }
]);
App.controller('PrepsTweetsCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/preps/twitter.json').then(function (tweets) {
      $scope.tweets = tweets.data;
    });
  }
]);App.controller('SparksCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/sparks.json').then(function (stories) {
      $scope.stories = stories.data;
    });
  }
]);
App.controller('SparksHomeCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/sparks/espn.json').then(function (espn) {
      $scope.espn = espn.data;
    });
    $http.get('/api/sparks/latimes.json').then(function (latimes) {
      $scope.latimes = latimes.data;
    });
    $http.get('/api/sparks/fox_sports.json').then(function (fox_sports) {
      $scope.fox_sports = fox_sports.data;
    });
  }
]);
App.controller('SparksTweetsCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/sparks/twitter.json').then(function (tweets) {
      $scope.tweets = tweets.data;
    });
  }
]);
App.controller('SparksInstagramCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/sparks/instagram.json').then(function (instagram) {
      $scope.instagram = instagram.data;
    });
  }
]);App.controller('TrojansCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/trojans.json').then(function (stories) {
      $scope.stories = stories.data;
    });
  }
]);
App.controller('TrojansHomeCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/trojans/official.json').then(function (official) {
      $scope.official = official.data;
    });
    $http.get('/api/trojans/espn.json').then(function (espn) {
      $scope.espn = espn.data;
    });
    $http.get('/api/trojans/latimes.json').then(function (latimes) {
      $scope.latimes = latimes.data;
    });
    $http.get('/api/trojans/ocregister.json').then(function (ocregister) {
      $scope.ocregister = ocregister.data;
    });
    $http.get('/api/trojans/bleacher_report.json').then(function (bleacher_report) {
      $scope.bleacher_report = bleacher_report.data;
    });
    $http.get('/api/trojans/fox_sports.json').then(function (fox_sports) {
      $scope.fox_sports = fox_sports.data;
    });
    $http.get('/api/trojans/inside_usc.json').then(function (inside_usc) {
      $scope.inside_usc = inside_usc.data;
    });
    $http.get('/api/trojans/conquest_chronicles.json').then(function (conquest_chronicles) {
      $scope.conquest_chronicles = conquest_chronicles.data;
    });
    $http.get('/api/trojans/scout.json').then(function (scout) {
      $scope.scout = scout.data;
    });
    $http.get('/api/trojans/rivals.json').then(function (rivals) {
      $scope.rivals = rivals.data;
    });
  }
]);
App.controller('TrojansTweetsCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/trojans/twitter.json').then(function (tweets) {
      $scope.tweets = tweets.data;
    });
  }
]);
App.controller('TrojansInstagramCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/api/trojans/instagram.json').then(function (instagram) {
      $scope.instagram = instagram.data;
    });
  }
]);(function () {
}.call(this));(function () {
}.call(this));(function () {
}.call(this));(function () {
}.call(this));(function () {
}.call(this));(function () {
}.call(this));(function () {
}.call(this));(function () {
}.call(this));(function () {
}.call(this));(function () {
}.call(this));(function () {
}.call(this));(function () {
}.call(this));(function () {
}.call(this));;