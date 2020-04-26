function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-blog-module"], {
  /***/
  "./node_modules/clipboard/dist/clipboard.js":
  /*!**************************************************!*\
    !*** ./node_modules/clipboard/dist/clipboard.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesClipboardDistClipboardJs(module, exports, __webpack_require__) {
    /*!
     * clipboard.js v2.0.6
     * https://clipboardjs.com/
     * 
     * Licensed MIT © Zeno Rocha
     */
    (function webpackUniversalModuleDefinition(root, factory) {
      if (true) module.exports = factory();else {}
    })(this, function () {
      return (
        /******/
        function (modules) {
          // webpackBootstrap

          /******/
          // The module cache

          /******/
          var installedModules = {};
          /******/

          /******/
          // The require function

          /******/

          function __webpack_require__(moduleId) {
            /******/

            /******/
            // Check if module is in cache

            /******/
            if (installedModules[moduleId]) {
              /******/
              return installedModules[moduleId].exports;
              /******/
            }
            /******/
            // Create a new module (and put it into the cache)

            /******/


            var module = installedModules[moduleId] = {
              /******/
              i: moduleId,

              /******/
              l: false,

              /******/
              exports: {}
              /******/

            };
            /******/

            /******/
            // Execute the module function

            /******/

            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/

            /******/
            // Flag the module as loaded

            /******/

            module.l = true;
            /******/

            /******/
            // Return the exports of the module

            /******/

            return module.exports;
            /******/
          }
          /******/

          /******/

          /******/
          // expose the modules object (__webpack_modules__)

          /******/


          __webpack_require__.m = modules;
          /******/

          /******/
          // expose the module cache

          /******/

          __webpack_require__.c = installedModules;
          /******/

          /******/
          // define getter function for harmony exports

          /******/

          __webpack_require__.d = function (exports, name, getter) {
            /******/
            if (!__webpack_require__.o(exports, name)) {
              /******/
              Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
              });
              /******/
            }
            /******/

          };
          /******/

          /******/
          // define __esModule on exports

          /******/


          __webpack_require__.r = function (exports) {
            /******/
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
              /******/
              Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
              });
              /******/
            }
            /******/


            Object.defineProperty(exports, '__esModule', {
              value: true
            });
            /******/
          };
          /******/

          /******/
          // create a fake namespace object

          /******/
          // mode & 1: value is a module id, require it

          /******/
          // mode & 2: merge all properties of value into the ns

          /******/
          // mode & 4: return value when already ns object

          /******/
          // mode & 8|1: behave like require

          /******/


          __webpack_require__.t = function (value, mode) {
            /******/
            if (mode & 1) value = __webpack_require__(value);
            /******/

            if (mode & 8) return value;
            /******/

            if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
            /******/

            var ns = Object.create(null);
            /******/

            __webpack_require__.r(ns);
            /******/


            Object.defineProperty(ns, 'default', {
              enumerable: true,
              value: value
            });
            /******/

            if (mode & 2 && typeof value != 'string') for (var key in value) {
              __webpack_require__.d(ns, key, function (key) {
                return value[key];
              }.bind(null, key));
            }
            /******/

            return ns;
            /******/
          };
          /******/

          /******/
          // getDefaultExport function for compatibility with non-harmony modules

          /******/


          __webpack_require__.n = function (module) {
            /******/
            var getter = module && module.__esModule ?
            /******/
            function getDefault() {
              return module['default'];
            } :
            /******/
            function getModuleExports() {
              return module;
            };
            /******/

            __webpack_require__.d(getter, 'a', getter);
            /******/


            return getter;
            /******/
          };
          /******/

          /******/
          // Object.prototype.hasOwnProperty.call

          /******/


          __webpack_require__.o = function (object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
          };
          /******/

          /******/
          // __webpack_public_path__

          /******/


          __webpack_require__.p = "";
          /******/

          /******/

          /******/
          // Load entry module and return exports

          /******/

          return __webpack_require__(__webpack_require__.s = 6);
          /******/
        }(
        /************************************************************************/

        /******/
        [
        /* 0 */

        /***/
        function (module, exports) {
          function select(element) {
            var selectedText;

            if (element.nodeName === 'SELECT') {
              element.focus();
              selectedText = element.value;
            } else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
              var isReadOnly = element.hasAttribute('readonly');

              if (!isReadOnly) {
                element.setAttribute('readonly', '');
              }

              element.select();
              element.setSelectionRange(0, element.value.length);

              if (!isReadOnly) {
                element.removeAttribute('readonly');
              }

              selectedText = element.value;
            } else {
              if (element.hasAttribute('contenteditable')) {
                element.focus();
              }

              var selection = window.getSelection();
              var range = document.createRange();
              range.selectNodeContents(element);
              selection.removeAllRanges();
              selection.addRange(range);
              selectedText = selection.toString();
            }

            return selectedText;
          }

          module.exports = select;
          /***/
        },
        /* 1 */

        /***/
        function (module, exports) {
          function E() {// Keep this empty so it's easier to inherit from
            // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
          }

          E.prototype = {
            on: function on(name, callback, ctx) {
              var e = this.e || (this.e = {});
              (e[name] || (e[name] = [])).push({
                fn: callback,
                ctx: ctx
              });
              return this;
            },
            once: function once(name, callback, ctx) {
              var self = this;

              function listener() {
                self.off(name, listener);
                callback.apply(ctx, arguments);
              }

              ;
              listener._ = callback;
              return this.on(name, listener, ctx);
            },
            emit: function emit(name) {
              var data = [].slice.call(arguments, 1);
              var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
              var i = 0;
              var len = evtArr.length;

              for (i; i < len; i++) {
                evtArr[i].fn.apply(evtArr[i].ctx, data);
              }

              return this;
            },
            off: function off(name, callback) {
              var e = this.e || (this.e = {});
              var evts = e[name];
              var liveEvents = [];

              if (evts && callback) {
                for (var i = 0, len = evts.length; i < len; i++) {
                  if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
                }
              } // Remove event from queue to prevent memory leak
              // Suggested by https://github.com/lazd
              // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910


              liveEvents.length ? e[name] = liveEvents : delete e[name];
              return this;
            }
          };
          module.exports = E;
          module.exports.TinyEmitter = E;
          /***/
        },
        /* 2 */

        /***/
        function (module, exports, __webpack_require__) {
          var is = __webpack_require__(3);

          var delegate = __webpack_require__(4);
          /**
           * Validates all params and calls the right
           * listener function based on its target type.
           *
           * @param {String|HTMLElement|HTMLCollection|NodeList} target
           * @param {String} type
           * @param {Function} callback
           * @return {Object}
           */


          function listen(target, type, callback) {
            if (!target && !type && !callback) {
              throw new Error('Missing required arguments');
            }

            if (!is.string(type)) {
              throw new TypeError('Second argument must be a String');
            }

            if (!is.fn(callback)) {
              throw new TypeError('Third argument must be a Function');
            }

            if (is.node(target)) {
              return listenNode(target, type, callback);
            } else if (is.nodeList(target)) {
              return listenNodeList(target, type, callback);
            } else if (is.string(target)) {
              return listenSelector(target, type, callback);
            } else {
              throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
            }
          }
          /**
           * Adds an event listener to a HTML element
           * and returns a remove listener function.
           *
           * @param {HTMLElement} node
           * @param {String} type
           * @param {Function} callback
           * @return {Object}
           */


          function listenNode(node, type, callback) {
            node.addEventListener(type, callback);
            return {
              destroy: function destroy() {
                node.removeEventListener(type, callback);
              }
            };
          }
          /**
           * Add an event listener to a list of HTML elements
           * and returns a remove listener function.
           *
           * @param {NodeList|HTMLCollection} nodeList
           * @param {String} type
           * @param {Function} callback
           * @return {Object}
           */


          function listenNodeList(nodeList, type, callback) {
            Array.prototype.forEach.call(nodeList, function (node) {
              node.addEventListener(type, callback);
            });
            return {
              destroy: function destroy() {
                Array.prototype.forEach.call(nodeList, function (node) {
                  node.removeEventListener(type, callback);
                });
              }
            };
          }
          /**
           * Add an event listener to a selector
           * and returns a remove listener function.
           *
           * @param {String} selector
           * @param {String} type
           * @param {Function} callback
           * @return {Object}
           */


          function listenSelector(selector, type, callback) {
            return delegate(document.body, selector, type, callback);
          }

          module.exports = listen;
          /***/
        },
        /* 3 */

        /***/
        function (module, exports) {
          /**
           * Check if argument is a HTML element.
           *
           * @param {Object} value
           * @return {Boolean}
           */
          exports.node = function (value) {
            return value !== undefined && value instanceof HTMLElement && value.nodeType === 1;
          };
          /**
           * Check if argument is a list of HTML elements.
           *
           * @param {Object} value
           * @return {Boolean}
           */


          exports.nodeList = function (value) {
            var type = Object.prototype.toString.call(value);
            return value !== undefined && (type === '[object NodeList]' || type === '[object HTMLCollection]') && 'length' in value && (value.length === 0 || exports.node(value[0]));
          };
          /**
           * Check if argument is a string.
           *
           * @param {Object} value
           * @return {Boolean}
           */


          exports.string = function (value) {
            return typeof value === 'string' || value instanceof String;
          };
          /**
           * Check if argument is a function.
           *
           * @param {Object} value
           * @return {Boolean}
           */


          exports.fn = function (value) {
            var type = Object.prototype.toString.call(value);
            return type === '[object Function]';
          };
          /***/

        },
        /* 4 */

        /***/
        function (module, exports, __webpack_require__) {
          var closest = __webpack_require__(5);
          /**
           * Delegates event to a selector.
           *
           * @param {Element} element
           * @param {String} selector
           * @param {String} type
           * @param {Function} callback
           * @param {Boolean} useCapture
           * @return {Object}
           */


          function _delegate(element, selector, type, callback, useCapture) {
            var listenerFn = listener.apply(this, arguments);
            element.addEventListener(type, listenerFn, useCapture);
            return {
              destroy: function destroy() {
                element.removeEventListener(type, listenerFn, useCapture);
              }
            };
          }
          /**
           * Delegates event to a selector.
           *
           * @param {Element|String|Array} [elements]
           * @param {String} selector
           * @param {String} type
           * @param {Function} callback
           * @param {Boolean} useCapture
           * @return {Object}
           */


          function delegate(elements, selector, type, callback, useCapture) {
            // Handle the regular Element usage
            if (typeof elements.addEventListener === 'function') {
              return _delegate.apply(null, arguments);
            } // Handle Element-less usage, it defaults to global delegation


            if (typeof type === 'function') {
              // Use `document` as the first parameter, then apply arguments
              // This is a short way to .unshift `arguments` without running into deoptimizations
              return _delegate.bind(null, document).apply(null, arguments);
            } // Handle Selector-based usage


            if (typeof elements === 'string') {
              elements = document.querySelectorAll(elements);
            } // Handle Array-like based usage


            return Array.prototype.map.call(elements, function (element) {
              return _delegate(element, selector, type, callback, useCapture);
            });
          }
          /**
           * Finds closest match and invokes callback.
           *
           * @param {Element} element
           * @param {String} selector
           * @param {String} type
           * @param {Function} callback
           * @return {Function}
           */


          function listener(element, selector, type, callback) {
            return function (e) {
              e.delegateTarget = closest(e.target, selector);

              if (e.delegateTarget) {
                callback.call(element, e);
              }
            };
          }

          module.exports = delegate;
          /***/
        },
        /* 5 */

        /***/
        function (module, exports) {
          var DOCUMENT_NODE_TYPE = 9;
          /**
           * A polyfill for Element.matches()
           */

          if (typeof Element !== 'undefined' && !Element.prototype.matches) {
            var proto = Element.prototype;
            proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
          }
          /**
           * Finds the closest parent that matches a selector.
           *
           * @param {Element} element
           * @param {String} selector
           * @return {Function}
           */


          function closest(element, selector) {
            while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
              if (typeof element.matches === 'function' && element.matches(selector)) {
                return element;
              }

              element = element.parentNode;
            }
          }

          module.exports = closest;
          /***/
        },
        /* 6 */

        /***/
        function (module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__); // EXTERNAL MODULE: ./node_modules/select/src/select.js


          var src_select = __webpack_require__(0);

          var select_default = /*#__PURE__*/__webpack_require__.n(src_select); // CONCATENATED MODULE: ./src/clipboard-action.js


          var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
            return typeof obj;
          } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          /**
           * Inner class which performs selection from either `text` or `target`
           * properties and then executes copy or cut operations.
           */


          var clipboard_action_ClipboardAction = function () {
            /**
             * @param {Object} options
             */
            function ClipboardAction(options) {
              _classCallCheck(this, ClipboardAction);

              this.resolveOptions(options);
              this.initSelection();
            }
            /**
             * Defines base properties passed from constructor.
             * @param {Object} options
             */


            _createClass(ClipboardAction, [{
              key: 'resolveOptions',
              value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                this.action = options.action;
                this.container = options.container;
                this.emitter = options.emitter;
                this.target = options.target;
                this.text = options.text;
                this.trigger = options.trigger;
                this.selectedText = '';
              }
              /**
               * Decides which selection strategy is going to be applied based
               * on the existence of `text` and `target` properties.
               */

            }, {
              key: 'initSelection',
              value: function initSelection() {
                if (this.text) {
                  this.selectFake();
                } else if (this.target) {
                  this.selectTarget();
                }
              }
              /**
               * Creates a fake textarea element, sets its value from `text` property,
               * and makes a selection on it.
               */

            }, {
              key: 'selectFake',
              value: function selectFake() {
                var _this = this;

                var isRTL = document.documentElement.getAttribute('dir') == 'rtl';
                this.removeFake();

                this.fakeHandlerCallback = function () {
                  return _this.removeFake();
                };

                this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;
                this.fakeElem = document.createElement('textarea'); // Prevent zooming on iOS

                this.fakeElem.style.fontSize = '12pt'; // Reset box model

                this.fakeElem.style.border = '0';
                this.fakeElem.style.padding = '0';
                this.fakeElem.style.margin = '0'; // Move element out of screen horizontally

                this.fakeElem.style.position = 'absolute';
                this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px'; // Move element to the same position vertically

                var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                this.fakeElem.style.top = yPosition + 'px';
                this.fakeElem.setAttribute('readonly', '');
                this.fakeElem.value = this.text;
                this.container.appendChild(this.fakeElem);
                this.selectedText = select_default()(this.fakeElem);
                this.copyText();
              }
              /**
               * Only removes the fake element after another click event, that way
               * a user can hit `Ctrl+C` to copy because selection still exists.
               */

            }, {
              key: 'removeFake',
              value: function removeFake() {
                if (this.fakeHandler) {
                  this.container.removeEventListener('click', this.fakeHandlerCallback);
                  this.fakeHandler = null;
                  this.fakeHandlerCallback = null;
                }

                if (this.fakeElem) {
                  this.container.removeChild(this.fakeElem);
                  this.fakeElem = null;
                }
              }
              /**
               * Selects the content from element passed on `target` property.
               */

            }, {
              key: 'selectTarget',
              value: function selectTarget() {
                this.selectedText = select_default()(this.target);
                this.copyText();
              }
              /**
               * Executes the copy operation based on the current selection.
               */

            }, {
              key: 'copyText',
              value: function copyText() {
                var succeeded = void 0;

                try {
                  succeeded = document.execCommand(this.action);
                } catch (err) {
                  succeeded = false;
                }

                this.handleResult(succeeded);
              }
              /**
               * Fires an event based on the copy operation result.
               * @param {Boolean} succeeded
               */

            }, {
              key: 'handleResult',
              value: function handleResult(succeeded) {
                this.emitter.emit(succeeded ? 'success' : 'error', {
                  action: this.action,
                  text: this.selectedText,
                  trigger: this.trigger,
                  clearSelection: this.clearSelection.bind(this)
                });
              }
              /**
               * Moves focus away from `target` and back to the trigger, removes current selection.
               */

            }, {
              key: 'clearSelection',
              value: function clearSelection() {
                if (this.trigger) {
                  this.trigger.focus();
                }

                document.activeElement.blur();
                window.getSelection().removeAllRanges();
              }
              /**
               * Sets the `action` to be performed which can be either 'copy' or 'cut'.
               * @param {String} action
               */

            }, {
              key: 'destroy',

              /**
               * Destroy lifecycle.
               */
              value: function destroy() {
                this.removeFake();
              }
            }, {
              key: 'action',
              set: function set() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';
                this._action = action;

                if (this._action !== 'copy' && this._action !== 'cut') {
                  throw new Error('Invalid "action" value, use either "copy" or "cut"');
                }
              }
              /**
               * Gets the `action` property.
               * @return {String}
               */
              ,
              get: function get() {
                return this._action;
              }
              /**
               * Sets the `target` property using an element
               * that will be have its content copied.
               * @param {Element} target
               */

            }, {
              key: 'target',
              set: function set(target) {
                if (target !== undefined) {
                  if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                    if (this.action === 'copy' && target.hasAttribute('disabled')) {
                      throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    }

                    if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                      throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                    }

                    this._target = target;
                  } else {
                    throw new Error('Invalid "target" value, use a valid Element');
                  }
                }
              }
              /**
               * Gets the `target` property.
               * @return {String|HTMLElement}
               */
              ,
              get: function get() {
                return this._target;
              }
            }]);

            return ClipboardAction;
          }();
          /* harmony default export */


          var clipboard_action = clipboard_action_ClipboardAction; // EXTERNAL MODULE: ./node_modules/tiny-emitter/index.js

          var tiny_emitter = __webpack_require__(1);

          var tiny_emitter_default = /*#__PURE__*/__webpack_require__.n(tiny_emitter); // EXTERNAL MODULE: ./node_modules/good-listener/src/listen.js


          var listen = __webpack_require__(2);

          var listen_default = /*#__PURE__*/__webpack_require__.n(listen); // CONCATENATED MODULE: ./src/clipboard.js


          var clipboard_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
            return typeof obj;
          } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };

          var clipboard_createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          function clipboard_classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (typeof call === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }
          /**
           * Base class which takes one or more elements, adds event listeners to them,
           * and instantiates a new `ClipboardAction` on each click.
           */


          var clipboard_Clipboard = function (_Emitter) {
            _inherits(Clipboard, _Emitter);
            /**
             * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
             * @param {Object} options
             */


            function Clipboard(trigger, options) {
              clipboard_classCallCheck(this, Clipboard);

              var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

              _this.resolveOptions(options);

              _this.listenClick(trigger);

              return _this;
            }
            /**
             * Defines if attributes would be resolved using internal setter functions
             * or custom functions that were passed in the constructor.
             * @param {Object} options
             */


            clipboard_createClass(Clipboard, [{
              key: 'resolveOptions',
              value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
                this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
                this.text = typeof options.text === 'function' ? options.text : this.defaultText;
                this.container = clipboard_typeof(options.container) === 'object' ? options.container : document.body;
              }
              /**
               * Adds a click event listener to the passed trigger.
               * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
               */

            }, {
              key: 'listenClick',
              value: function listenClick(trigger) {
                var _this2 = this;

                this.listener = listen_default()(trigger, 'click', function (e) {
                  return _this2.onClick(e);
                });
              }
              /**
               * Defines a new `ClipboardAction` on each click event.
               * @param {Event} e
               */

            }, {
              key: 'onClick',
              value: function onClick(e) {
                var trigger = e.delegateTarget || e.currentTarget;

                if (this.clipboardAction) {
                  this.clipboardAction = null;
                }

                this.clipboardAction = new clipboard_action({
                  action: this.action(trigger),
                  target: this.target(trigger),
                  text: this.text(trigger),
                  container: this.container,
                  trigger: trigger,
                  emitter: this
                });
              }
              /**
               * Default `action` lookup function.
               * @param {Element} trigger
               */

            }, {
              key: 'defaultAction',
              value: function defaultAction(trigger) {
                return getAttributeValue('action', trigger);
              }
              /**
               * Default `target` lookup function.
               * @param {Element} trigger
               */

            }, {
              key: 'defaultTarget',
              value: function defaultTarget(trigger) {
                var selector = getAttributeValue('target', trigger);

                if (selector) {
                  return document.querySelector(selector);
                }
              }
              /**
               * Returns the support of the given action, or all actions if no action is
               * given.
               * @param {String} [action]
               */

            }, {
              key: 'defaultText',

              /**
               * Default `text` lookup function.
               * @param {Element} trigger
               */
              value: function defaultText(trigger) {
                return getAttributeValue('text', trigger);
              }
              /**
               * Destroy lifecycle.
               */

            }, {
              key: 'destroy',
              value: function destroy() {
                this.listener.destroy();

                if (this.clipboardAction) {
                  this.clipboardAction.destroy();
                  this.clipboardAction = null;
                }
              }
            }], [{
              key: 'isSupported',
              value: function isSupported() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];
                var actions = typeof action === 'string' ? [action] : action;
                var support = !!document.queryCommandSupported;
                actions.forEach(function (action) {
                  support = support && !!document.queryCommandSupported(action);
                });
                return support;
              }
            }]);
            return Clipboard;
          }(tiny_emitter_default.a);
          /**
           * Helper function to retrieve attribute value.
           * @param {String} suffix
           * @param {Element} element
           */


          function getAttributeValue(suffix, element) {
            var attribute = 'data-clipboard-' + suffix;

            if (!element.hasAttribute(attribute)) {
              return;
            }

            return element.getAttribute(attribute);
          }
          /* harmony default export */


          var clipboard = __webpack_exports__["default"] = clipboard_Clipboard;
          /***/
        }
        /******/
        ])["default"]
      );
    });
    /***/

  },

  /***/
  "./node_modules/prismjs/components/prism-bash.js":
  /*!*******************************************************!*\
    !*** ./node_modules/prismjs/components/prism-bash.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsComponentsPrismBashJs(module, exports) {
    (function (Prism) {
      // $ set | grep '^[A-Z][^[:space:]]*=' | cut -d= -f1 | tr '\n' '|'
      // + LC_ALL, RANDOM, REPLY, SECONDS.
      // + make sure PS1..4 are here as they are not always set,
      // - some useless things.
      var envVars = '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b';
      var insideString = {
        'environment': {
          pattern: RegExp("\\$" + envVars),
          alias: 'constant'
        },
        'variable': [// [0]: Arithmetic Environment
        {
          pattern: /\$?\(\([\s\S]+?\)\)/,
          greedy: true,
          inside: {
            // If there is a $ sign at the beginning highlight $(( and )) as variable
            'variable': [{
              pattern: /(^\$\(\([\s\S]+)\)\)/,
              lookbehind: true
            }, /^\$\(\(/],
            'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
            // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
            'operator': /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
            // If there is no $ sign at the beginning highlight (( and )) as punctuation
            'punctuation': /\(\(?|\)\)?|,|;/
          }
        }, // [1]: Command Substitution
        {
          pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
          greedy: true,
          inside: {
            'variable': /^\$\(|^`|\)$|`$/
          }
        }, // [2]: Brace expansion
        {
          pattern: /\$\{[^}]+\}/,
          greedy: true,
          inside: {
            'operator': /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
            'punctuation': /[\[\]]/,
            'environment': {
              pattern: RegExp("(\\{)" + envVars),
              lookbehind: true,
              alias: 'constant'
            }
          }
        }, /\$(?:\w+|[#?*!@$])/],
        // Escape sequences from echo and printf's manuals, and escaped quotes.
        'entity': /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/
      };
      Prism.languages.bash = {
        'shebang': {
          pattern: /^#!\s*\/.*/,
          alias: 'important'
        },
        'comment': {
          pattern: /(^|[^"{\\$])#.*/,
          lookbehind: true
        },
        'function-name': [// a) function foo {
        // b) foo() {
        // c) function foo() {
        // but not “foo {”
        {
          // a) and c)
          pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
          lookbehind: true,
          alias: 'function'
        }, {
          // b)
          pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/,
          alias: 'function'
        }],
        // Highlight variable names as variables in for and select beginnings.
        'for-or-select': {
          pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
          alias: 'variable',
          lookbehind: true
        },
        // Highlight variable names as variables in the left-hand part
        // of assignments (“=” and “+=”).
        'assign-left': {
          pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
          inside: {
            'environment': {
              pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + envVars),
              lookbehind: true,
              alias: 'constant'
            }
          },
          alias: 'variable',
          lookbehind: true
        },
        'string': [// Support for Here-documents https://en.wikipedia.org/wiki/Here_document
        {
          pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\2/,
          lookbehind: true,
          greedy: true,
          inside: insideString
        }, // Here-document with quotes around the tag
        // → No expansion (so no “inside”).
        {
          pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\3/,
          lookbehind: true,
          greedy: true
        }, // “Normal” string
        {
          pattern: /(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\2)[^\\])*\2/,
          lookbehind: true,
          greedy: true,
          inside: insideString
        }],
        'environment': {
          pattern: RegExp("\\$?" + envVars),
          alias: 'constant'
        },
        'variable': insideString.variable,
        'function': {
          pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
          lookbehind: true
        },
        'keyword': {
          pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
          lookbehind: true
        },
        // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
        'builtin': {
          pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
          lookbehind: true,
          // Alias added to make those easier to distinguish from strings.
          alias: 'class-name'
        },
        'boolean': {
          pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
          lookbehind: true
        },
        'file-descriptor': {
          pattern: /\B&\d\b/,
          alias: 'important'
        },
        'operator': {
          // Lots of redirections here, but not just that.
          pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
          inside: {
            'file-descriptor': {
              pattern: /^\d/,
              alias: 'important'
            }
          }
        },
        'punctuation': /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
        'number': {
          pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
          lookbehind: true
        }
      };
      /* Patterns in command substitution. */

      var toBeCopied = ['comment', 'function-name', 'for-or-select', 'assign-left', 'string', 'environment', 'function', 'keyword', 'builtin', 'boolean', 'file-descriptor', 'operator', 'punctuation', 'number'];
      var inside = insideString.variable[1].inside;

      for (var i = 0; i < toBeCopied.length; i++) {
        inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]];
      }

      Prism.languages.shell = Prism.languages.bash;
    })(Prism);
    /***/

  },

  /***/
  "./node_modules/prismjs/components/prism-css.js":
  /*!******************************************************!*\
    !*** ./node_modules/prismjs/components/prism-css.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsComponentsPrismCssJs(module, exports) {
    (function (Prism) {
      var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
      Prism.languages.css = {
        'comment': /\/\*[\s\S]*?\*\//,
        'atrule': {
          pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
          inside: {
            'rule': /^@[\w-]+/,
            'selector-function-argument': {
              pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
              lookbehind: true,
              alias: 'selector'
            } // See rest below

          }
        },
        'url': {
          pattern: RegExp('url\\((?:' + string.source + '|[^\n\r()]*)\\)', 'i'),
          greedy: true,
          inside: {
            'function': /^url/i,
            'punctuation': /^\(|\)$/
          }
        },
        'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
        'string': {
          pattern: string,
          greedy: true
        },
        'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
        'important': /!important\b/i,
        'function': /[-a-z0-9]+(?=\()/i,
        'punctuation': /[(){};:,]/
      };
      Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
      var markup = Prism.languages.markup;

      if (markup) {
        markup.tag.addInlined('style', 'css');
        Prism.languages.insertBefore('inside', 'attr-value', {
          'style-attr': {
            pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
            inside: {
              'attr-name': {
                pattern: /^\s*style/i,
                inside: markup.tag.inside
              },
              'punctuation': /^\s*=\s*['"]|['"]\s*$/,
              'attr-value': {
                pattern: /.+/i,
                inside: Prism.languages.css
              }
            },
            alias: 'language-css'
          }
        }, markup.tag);
      }
    })(Prism);
    /***/

  },

  /***/
  "./node_modules/prismjs/components/prism-javascript.js":
  /*!*************************************************************!*\
    !*** ./node_modules/prismjs/components/prism-javascript.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsComponentsPrismJavascriptJs(module, exports) {
    Prism.languages.javascript = Prism.languages.extend('clike', {
      'class-name': [Prism.languages.clike['class-name'], {
        pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
        lookbehind: true
      }],
      'keyword': [{
        pattern: /((?:^|})\s*)(?:catch|finally)\b/,
        lookbehind: true
      }, {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: true
      }],
      'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
      // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
      'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      'operator': /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/
    });
    Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
    Prism.languages.insertBefore('javascript', 'keyword', {
      'regex': {
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
        lookbehind: true,
        greedy: true
      },
      // This must be declared before keyword because we use "function" inside the look-forward
      'function-variable': {
        pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
        alias: 'function'
      },
      'parameter': [{
        pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }, {
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
        inside: Prism.languages.javascript
      }, {
        pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }, {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }],
      'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    });
    Prism.languages.insertBefore('javascript', 'string', {
      'template-string': {
        pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
        greedy: true,
        inside: {
          'template-punctuation': {
            pattern: /^`|`$/,
            alias: 'string'
          },
          'interpolation': {
            pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
            lookbehind: true,
            inside: {
              'interpolation-punctuation': {
                pattern: /^\${|}$/,
                alias: 'punctuation'
              },
              rest: Prism.languages.javascript
            }
          },
          'string': /[\s\S]+/
        }
      }
    });

    if (Prism.languages.markup) {
      Prism.languages.markup.tag.addInlined('script', 'javascript');
    }

    Prism.languages.js = Prism.languages.javascript;
    /***/
  },

  /***/
  "./node_modules/prismjs/components/prism-json.js":
  /*!*******************************************************!*\
    !*** ./node_modules/prismjs/components/prism-json.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsComponentsPrismJsonJs(module, exports) {
    Prism.languages.json = {
      'property': {
        pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
        greedy: true
      },
      'string': {
        pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
        greedy: true
      },
      'comment': /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
      'number': /-?\d+\.?\d*(?:e[+-]?\d+)?/i,
      'punctuation': /[{}[\],]/,
      'operator': /:/,
      'boolean': /\b(?:true|false)\b/,
      'null': {
        pattern: /\bnull\b/,
        alias: 'keyword'
      }
    };
    /***/
  },

  /***/
  "./node_modules/prismjs/components/prism-markup.js":
  /*!*********************************************************!*\
    !*** ./node_modules/prismjs/components/prism-markup.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsComponentsPrismMarkupJs(module, exports) {
    Prism.languages.markup = {
      'comment': /<!--[\s\S]*?-->/,
      'prolog': /<\?[\s\S]+?\?>/,
      'doctype': {
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,
        greedy: true
      },
      'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
      'tag': {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
        greedy: true,
        inside: {
          'tag': {
            pattern: /^<\/?[^\s>\/]+/i,
            inside: {
              'punctuation': /^<\/?/,
              'namespace': /^[^\s>\/:]+:/
            }
          },
          'attr-value': {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
            inside: {
              'punctuation': [/^=/, {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: true
              }]
            }
          },
          'punctuation': /\/?>/,
          'attr-name': {
            pattern: /[^\s>\/]+/,
            inside: {
              'namespace': /^[^\s>\/:]+:/
            }
          }
        }
      },
      'entity': /&#?[\da-z]{1,8};/i
    };
    Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity']; // Plugin to make entity title show the real entity, idea by Roman Komarov

    Prism.hooks.add('wrap', function (env) {
      if (env.type === 'entity') {
        env.attributes['title'] = env.content.replace(/&amp;/, '&');
      }
    });
    Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
      /**
       * Adds an inlined language to markup.
       *
       * An example of an inlined language is CSS with `<style>` tags.
       *
       * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addInlined('style', 'css');
       */
      value: function addInlined(tagName, lang) {
        var includedCdataInside = {};
        includedCdataInside['language-' + lang] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: true,
          inside: Prism.languages[lang]
        };
        includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
        var inside = {
          'included-cdata': {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: includedCdataInside
          }
        };
        inside['language-' + lang] = {
          pattern: /[\s\S]+/,
          inside: Prism.languages[lang]
        };
        var def = {};
        def[tagName] = {
          pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
            return tagName;
          }), 'i'),
          lookbehind: true,
          greedy: true,
          inside: inside
        };
        Prism.languages.insertBefore('markup', 'cdata', def);
      }
    });
    Prism.languages.xml = Prism.languages.extend('markup', {});
    Prism.languages.html = Prism.languages.markup;
    Prism.languages.mathml = Prism.languages.markup;
    Prism.languages.svg = Prism.languages.markup;
    /***/
  },

  /***/
  "./node_modules/prismjs/components/prism-powershell.js":
  /*!*************************************************************!*\
    !*** ./node_modules/prismjs/components/prism-powershell.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsComponentsPrismPowershellJs(module, exports) {
    (function (Prism) {
      var powershell = Prism.languages.powershell = {
        'comment': [{
          pattern: /(^|[^`])<#[\s\S]*?#>/,
          lookbehind: true
        }, {
          pattern: /(^|[^`])#.*/,
          lookbehind: true
        }],
        'string': [{
          pattern: /"(?:`[\s\S]|[^`"])*"/,
          greedy: true,
          inside: {
            'function': {
              // Allow for one level of nesting
              pattern: /(^|[^`])\$\((?:\$\(.*?\)|(?!\$\()[^\r\n)])*\)/,
              lookbehind: true,
              // Populated at end of file
              inside: {}
            }
          }
        }, {
          pattern: /'(?:[^']|'')*'/,
          greedy: true
        }],
        // Matches name spaces as well as casts, attribute decorators. Force starting with letter to avoid matching array indices
        // Supports two levels of nested brackets (e.g. `[OutputType([System.Collections.Generic.List[int]])]`)
        'namespace': /\[[a-z](?:\[(?:\[[^\]]*]|[^\[\]])*]|[^\[\]])*]/i,
        'boolean': /\$(?:true|false)\b/i,
        'variable': /\$\w+\b/i,
        // Cmdlets and aliases. Aliases should come last, otherwise "write" gets preferred over "write-host" for example
        // Get-Command | ?{ $_.ModuleName -match "Microsoft.PowerShell.(Util|Core|Management)" }
        // Get-Alias | ?{ $_.ReferencedCommand.Module.Name -match "Microsoft.PowerShell.(Util|Core|Management)" }
        'function': [/\b(?:Add-(?:Computer|Content|History|Member|PSSnapin|Type)|Checkpoint-Computer|Clear-(?:Content|EventLog|History|Item|ItemProperty|Variable)|Compare-Object|Complete-Transaction|Connect-PSSession|ConvertFrom-(?:Csv|Json|StringData)|Convert-Path|ConvertTo-(?:Csv|Html|Json|Xml)|Copy-(?:Item|ItemProperty)|Debug-Process|Disable-(?:ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)|Disconnect-PSSession|Enable-(?:ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)|Enter-PSSession|Exit-PSSession|Export-(?:Alias|Clixml|Console|Csv|FormatData|ModuleMember|PSSession)|ForEach-Object|Format-(?:Custom|List|Table|Wide)|Get-(?:Alias|ChildItem|Command|ComputerRestorePoint|Content|ControlPanelItem|Culture|Date|Event|EventLog|EventSubscriber|FormatData|Help|History|Host|HotFix|Item|ItemProperty|Job|Location|Member|Module|Process|PSBreakpoint|PSCallStack|PSDrive|PSProvider|PSSession|PSSessionConfiguration|PSSnapin|Random|Service|TraceSource|Transaction|TypeData|UICulture|Unique|Variable|WmiObject)|Group-Object|Import-(?:Alias|Clixml|Csv|LocalizedData|Module|PSSession)|Invoke-(?:Command|Expression|History|Item|RestMethod|WebRequest|WmiMethod)|Join-Path|Limit-EventLog|Measure-(?:Command|Object)|Move-(?:Item|ItemProperty)|New-(?:Alias|Event|EventLog|Item|ItemProperty|Module|ModuleManifest|Object|PSDrive|PSSession|PSSessionConfigurationFile|PSSessionOption|PSTransportOption|Service|TimeSpan|Variable|WebServiceProxy)|Out-(?:Default|File|GridView|Host|Null|Printer|String)|Pop-Location|Push-Location|Read-Host|Receive-(?:Job|PSSession)|Register-(?:EngineEvent|ObjectEvent|PSSessionConfiguration|WmiEvent)|Remove-(?:Computer|Event|EventLog|Item|ItemProperty|Job|Module|PSBreakpoint|PSDrive|PSSession|PSSnapin|TypeData|Variable|WmiObject)|Rename-(?:Computer|Item|ItemProperty)|Reset-ComputerMachinePassword|Resolve-Path|Restart-(?:Computer|Service)|Restore-Computer|Resume-(?:Job|Service)|Save-Help|Select-(?:Object|String|Xml)|Send-MailMessage|Set-(?:Alias|Content|Date|Item|ItemProperty|Location|PSBreakpoint|PSDebug|PSSessionConfiguration|Service|StrictMode|TraceSource|Variable|WmiInstance)|Show-(?:Command|ControlPanelItem|EventLog)|Sort-Object|Split-Path|Start-(?:Job|Process|Service|Sleep|Transaction)|Stop-(?:Computer|Job|Process|Service)|Suspend-(?:Job|Service)|Tee-Object|Test-(?:ComputerSecureChannel|Connection|ModuleManifest|Path|PSSessionConfigurationFile)|Trace-Command|Unblock-File|Undo-Transaction|Unregister-(?:Event|PSSessionConfiguration)|Update-(?:FormatData|Help|List|TypeData)|Use-Transaction|Wait-(?:Event|Job|Process)|Where-Object|Write-(?:Debug|Error|EventLog|Host|Output|Progress|Verbose|Warning))\b/i, /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i],
        // per http://technet.microsoft.com/en-us/library/hh847744.aspx
        'keyword': /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
        'operator': {
          pattern: /(\W?)(?:!|-(?:eq|ne|gt|ge|lt|le|sh[lr]|not|b?(?:and|x?or)|(?:Not)?(?:Like|Match|Contains|In)|Replace|Join|is(?:Not)?|as)\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
          lookbehind: true
        },
        'punctuation': /[|{}[\];(),.]/
      }; // Variable interpolation inside strings, and nested expressions

      var stringInside = powershell.string[0].inside;
      stringInside["boolean"] = powershell["boolean"];
      stringInside.variable = powershell.variable;
      stringInside["function"].inside = powershell;
    })(Prism);
    /***/

  },

  /***/
  "./node_modules/prismjs/components/prism-typescript.js":
  /*!*************************************************************!*\
    !*** ./node_modules/prismjs/components/prism-typescript.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsComponentsPrismTypescriptJs(module, exports) {
    Prism.languages.typescript = Prism.languages.extend('javascript', {
      // From JavaScript Prism keyword list and TypeScript language spec: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#221-reserved-words
      'keyword': /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/,
      'builtin': /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
    });
    Prism.languages.ts = Prism.languages.typescript;
    /***/
  },

  /***/
  "./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js":
  /*!***********************************************************************************!*\
    !*** ./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js ***!
    \***********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsPluginsCopyToClipboardPrismCopyToClipboardJs(module, exports, __webpack_require__) {
    (function () {
      if (typeof self === 'undefined' || !self.Prism || !self.document) {
        return;
      }

      if (!Prism.plugins.toolbar) {
        console.warn('Copy to Clipboard plugin loaded before Toolbar plugin.');
        return;
      }

      var ClipboardJS = window.ClipboardJS || undefined;

      if (!ClipboardJS && "function" === 'function') {
        ClipboardJS = __webpack_require__(
        /*! clipboard */
        "./node_modules/clipboard/dist/clipboard.js");
      }

      var callbacks = [];

      if (!ClipboardJS) {
        var script = document.createElement('script');
        var head = document.querySelector('head');

        script.onload = function () {
          ClipboardJS = window.ClipboardJS;

          if (ClipboardJS) {
            while (callbacks.length) {
              callbacks.pop()();
            }
          }
        };

        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js';
        head.appendChild(script);
      }

      Prism.plugins.toolbar.registerButton('copy-to-clipboard', function (env) {
        var linkCopy = document.createElement('button');
        linkCopy.textContent = 'Copy';

        if (!ClipboardJS) {
          callbacks.push(registerClipboard);
        } else {
          registerClipboard();
        }

        return linkCopy;

        function registerClipboard() {
          var clip = new ClipboardJS(linkCopy, {
            'text': function text() {
              return env.code;
            }
          });
          clip.on('success', function () {
            linkCopy.textContent = 'Copied!';
            resetText();
          });
          clip.on('error', function () {
            linkCopy.textContent = 'Press Ctrl+C to copy';
            resetText();
          });
        }

        function resetText() {
          setTimeout(function () {
            linkCopy.textContent = 'Copy';
          }, 5000);
        }
      });
    })();
    /***/

  },

  /***/
  "./node_modules/prismjs/plugins/toolbar/prism-toolbar.js":
  /*!***************************************************************!*\
    !*** ./node_modules/prismjs/plugins/toolbar/prism-toolbar.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsPluginsToolbarPrismToolbarJs(module, exports) {
    (function () {
      if (typeof self === 'undefined' || !self.Prism || !self.document) {
        return;
      }

      var callbacks = [];
      var map = {};

      var noop = function noop() {};

      Prism.plugins.toolbar = {};
      /**
       * @typedef ButtonOptions
       * @property {string} text The text displayed.
       * @property {string} [url] The URL of the link which will be created.
       * @property {Function} [onClick] The event listener for the `click` event of the created button.
       * @property {string} [className] The class attribute to include with element.
       */

      /**
       * Register a button callback with the toolbar.
       *
       * @param {string} key
       * @param {ButtonOptions|Function} opts
       */

      var registerButton = Prism.plugins.toolbar.registerButton = function (key, opts) {
        var callback;

        if (typeof opts === 'function') {
          callback = opts;
        } else {
          callback = function callback(env) {
            var element;

            if (typeof opts.onClick === 'function') {
              element = document.createElement('button');
              element.type = 'button';
              element.addEventListener('click', function () {
                opts.onClick.call(this, env);
              });
            } else if (typeof opts.url === 'string') {
              element = document.createElement('a');
              element.href = opts.url;
            } else {
              element = document.createElement('span');
            }

            if (opts.className) {
              element.classList.add(opts.className);
            }

            element.textContent = opts.text;
            return element;
          };
        }

        if (key in map) {
          console.warn('There is a button with the key "' + key + '" registered already.');
          return;
        }

        callbacks.push(map[key] = callback);
      };
      /**
       * Returns the callback order of the given element.
       *
       * @param {HTMLElement} element
       * @returns {string[] | undefined}
       */


      function getOrder(element) {
        while (element) {
          var order = element.getAttribute('data-toolbar-order');

          if (order != null) {
            order = order.trim();

            if (order.length) {
              return order.split(/\s*,\s*/g);
            } else {
              return [];
            }
          }

          element = element.parentElement;
        }
      }
      /**
       * Post-highlight Prism hook callback.
       *
       * @param env
       */


      var hook = Prism.plugins.toolbar.hook = function (env) {
        // Check if inline or actual code block (credit to line-numbers plugin)
        var pre = env.element.parentNode;

        if (!pre || !/pre/i.test(pre.nodeName)) {
          return;
        } // Autoloader rehighlights, so only do this once.


        if (pre.parentNode.classList.contains('code-toolbar')) {
          return;
        } // Create wrapper for <pre> to prevent scrolling toolbar with content


        var wrapper = document.createElement('div');
        wrapper.classList.add('code-toolbar');
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(pre); // Setup the toolbar

        var toolbar = document.createElement('div');
        toolbar.classList.add('toolbar'); // order callbacks

        var elementCallbacks = callbacks;
        var order = getOrder(env.element);

        if (order) {
          elementCallbacks = order.map(function (key) {
            return map[key] || noop;
          });
        }

        elementCallbacks.forEach(function (callback) {
          var element = callback(env);

          if (!element) {
            return;
          }

          var item = document.createElement('div');
          item.classList.add('toolbar-item');
          item.appendChild(element);
          toolbar.appendChild(item);
        }); // Add our toolbar to the currently created wrapper of <pre> tag

        wrapper.appendChild(toolbar);
      };

      registerButton('label', function (env) {
        var pre = env.element.parentNode;

        if (!pre || !/pre/i.test(pre.nodeName)) {
          return;
        }

        if (!pre.hasAttribute('data-label')) {
          return;
        }

        var element, template;
        var text = pre.getAttribute('data-label');

        try {
          // Any normal text will blow up this selector.
          template = document.querySelector('template#' + text);
        } catch (e) {}

        if (template) {
          element = template.content;
        } else {
          if (pre.hasAttribute('data-url')) {
            element = document.createElement('a');
            element.href = pre.getAttribute('data-url');
          } else {
            element = document.createElement('span');
          }

          element.textContent = text;
        }

        return element;
      });
      /**
       * Register the toolbar with Prism.
       */

      Prism.hooks.add('complete', hook);
    })();
    /***/

  },

  /***/
  "./node_modules/prismjs/prism.js":
  /*!***************************************!*\
    !*** ./node_modules/prismjs/prism.js ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsPrismJs(module, exports, __webpack_require__) {
    /* **********************************************
         Begin prism-core.js
    ********************************************** */
    var _self = typeof window !== 'undefined' ? window // if in browser
    : typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self // if in worker
    : {} // if in node js
    ;
    /**
     * Prism: Lightweight, robust, elegant syntax highlighting
     * MIT license http://www.opensource.org/licenses/mit-license.php/
     * @author Lea Verou http://lea.verou.me
     */


    var Prism = function (_self) {
      // Private helper vars
      var lang = /\blang(?:uage)?-([\w-]+)\b/i;
      var uniqueId = 0;
      var _ = {
        manual: _self.Prism && _self.Prism.manual,
        disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
        util: {
          encode: function encode(tokens) {
            if (tokens instanceof Token) {
              return new Token(tokens.type, encode(tokens.content), tokens.alias);
            } else if (Array.isArray(tokens)) {
              return tokens.map(encode);
            } else {
              return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
            }
          },
          type: function type(o) {
            return Object.prototype.toString.call(o).slice(8, -1);
          },
          objId: function objId(obj) {
            if (!obj['__id']) {
              Object.defineProperty(obj, '__id', {
                value: ++uniqueId
              });
            }

            return obj['__id'];
          },
          // Deep clone a language definition (e.g. to extend it)
          clone: function deepClone(o, visited) {
            var clone,
                id,
                type = _.util.type(o);

            visited = visited || {};

            switch (type) {
              case 'Object':
                id = _.util.objId(o);

                if (visited[id]) {
                  return visited[id];
                }

                clone = {};
                visited[id] = clone;

                for (var key in o) {
                  if (o.hasOwnProperty(key)) {
                    clone[key] = deepClone(o[key], visited);
                  }
                }

                return clone;

              case 'Array':
                id = _.util.objId(o);

                if (visited[id]) {
                  return visited[id];
                }

                clone = [];
                visited[id] = clone;
                o.forEach(function (v, i) {
                  clone[i] = deepClone(v, visited);
                });
                return clone;

              default:
                return o;
            }
          },

          /**
           * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
           *
           * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
           *
           * @param {Element} element
           * @returns {string}
           */
          getLanguage: function getLanguage(element) {
            while (element && !lang.test(element.className)) {
              element = element.parentElement;
            }

            if (element) {
              return (element.className.match(lang) || [, 'none'])[1].toLowerCase();
            }

            return 'none';
          },

          /**
           * Returns the script element that is currently executing.
           *
           * This does __not__ work for line script element.
           *
           * @returns {HTMLScriptElement | null}
           */
          currentScript: function currentScript() {
            if (typeof document === 'undefined') {
              return null;
            }

            if ('currentScript' in document) {
              return document.currentScript;
            } // IE11 workaround
            // we'll get the src of the current script by parsing IE11's error stack trace
            // this will not work for inline scripts


            try {
              throw new Error();
            } catch (err) {
              // Get file src url from stack. Specifically works with the format of stack traces in IE.
              // A stack will look like this:
              //
              // Error
              //    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
              //    at Global code (http://localhost/components/prism-core.js:606:1)
              var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];

              if (src) {
                var scripts = document.getElementsByTagName('script');

                for (var i in scripts) {
                  if (scripts[i].src == src) {
                    return scripts[i];
                  }
                }
              }

              return null;
            }
          }
        },
        languages: {
          extend: function extend(id, redef) {
            var lang = _.util.clone(_.languages[id]);

            for (var key in redef) {
              lang[key] = redef[key];
            }

            return lang;
          },

          /**
           * Insert a token before another token in a language literal
           * As this needs to recreate the object (we cannot actually insert before keys in object literals),
           * we cannot just provide an object, we need an object and a key.
           * @param inside The key (or language id) of the parent
           * @param before The key to insert before.
           * @param insert Object with the key/value pairs to insert
           * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
           */
          insertBefore: function insertBefore(inside, before, insert, root) {
            root = root || _.languages;
            var grammar = root[inside];
            var ret = {};

            for (var token in grammar) {
              if (grammar.hasOwnProperty(token)) {
                if (token == before) {
                  for (var newToken in insert) {
                    if (insert.hasOwnProperty(newToken)) {
                      ret[newToken] = insert[newToken];
                    }
                  }
                } // Do not insert token which also occur in insert. See #1525


                if (!insert.hasOwnProperty(token)) {
                  ret[token] = grammar[token];
                }
              }
            }

            var old = root[inside];
            root[inside] = ret; // Update references in other language definitions

            _.languages.DFS(_.languages, function (key, value) {
              if (value === old && key != inside) {
                this[key] = ret;
              }
            });

            return ret;
          },
          // Traverse a language definition with Depth First Search
          DFS: function DFS(o, callback, type, visited) {
            visited = visited || {};
            var objId = _.util.objId;

            for (var i in o) {
              if (o.hasOwnProperty(i)) {
                callback.call(o, i, o[i], type || i);

                var property = o[i],
                    propertyType = _.util.type(property);

                if (propertyType === 'Object' && !visited[objId(property)]) {
                  visited[objId(property)] = true;
                  DFS(property, callback, null, visited);
                } else if (propertyType === 'Array' && !visited[objId(property)]) {
                  visited[objId(property)] = true;
                  DFS(property, callback, i, visited);
                }
              }
            }
          }
        },
        plugins: {},
        highlightAll: function highlightAll(async, callback) {
          _.highlightAllUnder(document, async, callback);
        },
        highlightAllUnder: function highlightAllUnder(container, async, callback) {
          var env = {
            callback: callback,
            container: container,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };

          _.hooks.run('before-highlightall', env);

          env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

          _.hooks.run('before-all-elements-highlight', env);

          for (var i = 0, element; element = env.elements[i++];) {
            _.highlightElement(element, async === true, env.callback);
          }
        },
        highlightElement: function highlightElement(element, async, callback) {
          // Find language
          var language = _.util.getLanguage(element);

          var grammar = _.languages[language]; // Set language on the element, if not present

          element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language; // Set language on the parent, for styling

          var parent = element.parentNode;

          if (parent && parent.nodeName.toLowerCase() === 'pre') {
            parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
          }

          var code = element.textContent;
          var env = {
            element: element,
            language: language,
            grammar: grammar,
            code: code
          };

          function insertHighlightedCode(highlightedCode) {
            env.highlightedCode = highlightedCode;

            _.hooks.run('before-insert', env);

            env.element.innerHTML = env.highlightedCode;

            _.hooks.run('after-highlight', env);

            _.hooks.run('complete', env);

            callback && callback.call(env.element);
          }

          _.hooks.run('before-sanity-check', env);

          if (!env.code) {
            _.hooks.run('complete', env);

            callback && callback.call(env.element);
            return;
          }

          _.hooks.run('before-highlight', env);

          if (!env.grammar) {
            insertHighlightedCode(_.util.encode(env.code));
            return;
          }

          if (async && _self.Worker) {
            var worker = new Worker(_.filename);

            worker.onmessage = function (evt) {
              insertHighlightedCode(evt.data);
            };

            worker.postMessage(JSON.stringify({
              language: env.language,
              code: env.code,
              immediateClose: true
            }));
          } else {
            insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
          }
        },
        highlight: function highlight(text, grammar, language) {
          var env = {
            code: text,
            grammar: grammar,
            language: language
          };

          _.hooks.run('before-tokenize', env);

          env.tokens = _.tokenize(env.code, env.grammar);

          _.hooks.run('after-tokenize', env);

          return Token.stringify(_.util.encode(env.tokens), env.language);
        },
        tokenize: function tokenize(text, grammar) {
          var rest = grammar.rest;

          if (rest) {
            for (var token in rest) {
              grammar[token] = rest[token];
            }

            delete grammar.rest;
          }

          var tokenList = new LinkedList();
          addAfter(tokenList, tokenList.head, text);
          matchGrammar(text, tokenList, grammar, tokenList.head, 0);
          return toArray(tokenList);
        },
        hooks: {
          all: {},
          add: function add(name, callback) {
            var hooks = _.hooks.all;
            hooks[name] = hooks[name] || [];
            hooks[name].push(callback);
          },
          run: function run(name, env) {
            var callbacks = _.hooks.all[name];

            if (!callbacks || !callbacks.length) {
              return;
            }

            for (var i = 0, callback; callback = callbacks[i++];) {
              callback(env);
            }
          }
        },
        Token: Token
      };
      _self.Prism = _;

      function Token(type, content, alias, matchedStr, greedy) {
        this.type = type;
        this.content = content;
        this.alias = alias; // Copy of the full string this token was created from

        this.length = (matchedStr || '').length | 0;
        this.greedy = !!greedy;
      }

      Token.stringify = function stringify(o, language) {
        if (typeof o == 'string') {
          return o;
        }

        if (Array.isArray(o)) {
          var s = '';
          o.forEach(function (e) {
            s += stringify(e, language);
          });
          return s;
        }

        var env = {
          type: o.type,
          content: stringify(o.content, language),
          tag: 'span',
          classes: ['token', o.type],
          attributes: {},
          language: language
        };
        var aliases = o.alias;

        if (aliases) {
          if (Array.isArray(aliases)) {
            Array.prototype.push.apply(env.classes, aliases);
          } else {
            env.classes.push(aliases);
          }
        }

        _.hooks.run('wrap', env);

        var attributes = '';

        for (var name in env.attributes) {
          attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
        }

        return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
      };
      /**
       * @param {string} text
       * @param {LinkedList<string | Token>} tokenList
       * @param {any} grammar
       * @param {LinkedListNode<string | Token>} startNode
       * @param {number} startPos
       * @param {boolean} [oneshot=false]
       * @param {string} [target]
       */


      function matchGrammar(text, tokenList, grammar, startNode, startPos, oneshot, target) {
        for (var token in grammar) {
          if (!grammar.hasOwnProperty(token) || !grammar[token]) {
            continue;
          }

          var patterns = grammar[token];
          patterns = Array.isArray(patterns) ? patterns : [patterns];

          for (var j = 0; j < patterns.length; ++j) {
            if (target && target == token + ',' + j) {
              return;
            }

            var pattern = patterns[j],
                inside = pattern.inside,
                lookbehind = !!pattern.lookbehind,
                greedy = !!pattern.greedy,
                lookbehindLength = 0,
                alias = pattern.alias;

            if (greedy && !pattern.pattern.global) {
              // Without the global flag, lastIndex won't work
              var flags = pattern.pattern.toString().match(/[imsuy]*$/)[0];
              pattern.pattern = RegExp(pattern.pattern.source, flags + 'g');
            }

            pattern = pattern.pattern || pattern;

            for ( // iterate the token list and keep track of the current token/string position
            var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
              var str = currentNode.value;

              if (tokenList.length > text.length) {
                // Something went terribly wrong, ABORT, ABORT!
                return;
              }

              if (str instanceof Token) {
                continue;
              }

              var removeCount = 1; // this is the to parameter of removeBetween

              if (greedy && currentNode != tokenList.tail.prev) {
                pattern.lastIndex = pos;
                var match = pattern.exec(text);

                if (!match) {
                  break;
                }

                var from = match.index + (lookbehind && match[1] ? match[1].length : 0);
                var to = match.index + match[0].length;
                var p = pos; // find the node that contains the match

                p += currentNode.value.length;

                while (from >= p) {
                  currentNode = currentNode.next;
                  p += currentNode.value.length;
                } // adjust pos (and p)


                p -= currentNode.value.length;
                pos = p; // the current node is a Token, then the match starts inside another Token, which is invalid

                if (currentNode.value instanceof Token) {
                  continue;
                } // find the last node which is affected by this match


                for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === 'string' && !k.prev.value.greedy); k = k.next) {
                  removeCount++;
                  p += k.value.length;
                }

                removeCount--; // replace with the new match

                str = text.slice(pos, p);
                match.index -= pos;
              } else {
                pattern.lastIndex = 0;
                var match = pattern.exec(str);
              }

              if (!match) {
                if (oneshot) {
                  break;
                }

                continue;
              }

              if (lookbehind) {
                lookbehindLength = match[1] ? match[1].length : 0;
              }

              var from = match.index + lookbehindLength,
                  match = match[0].slice(lookbehindLength),
                  to = from + match.length,
                  before = str.slice(0, from),
                  after = str.slice(to);
              var removeFrom = currentNode.prev;

              if (before) {
                removeFrom = addAfter(tokenList, removeFrom, before);
                pos += before.length;
              }

              removeRange(tokenList, removeFrom, removeCount);
              var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);
              currentNode = addAfter(tokenList, removeFrom, wrapped);

              if (after) {
                addAfter(tokenList, currentNode, after);
              }

              if (removeCount > 1) matchGrammar(text, tokenList, grammar, currentNode.prev, pos, true, token + ',' + j);
              if (oneshot) break;
            }
          }
        }
      }
      /**
       * @typedef LinkedListNode
       * @property {T} value
       * @property {LinkedListNode<T> | null} prev The previous node.
       * @property {LinkedListNode<T> | null} next The next node.
       * @template T
       */

      /**
       * @template T
       */


      function LinkedList() {
        /** @type {LinkedListNode<T>} */
        var head = {
          value: null,
          prev: null,
          next: null
        };
        /** @type {LinkedListNode<T>} */

        var tail = {
          value: null,
          prev: head,
          next: null
        };
        head.next = tail;
        /** @type {LinkedListNode<T>} */

        this.head = head;
        /** @type {LinkedListNode<T>} */

        this.tail = tail;
        this.length = 0;
      }
      /**
       * Adds a new node with the given value to the list.
       * @param {LinkedList<T>} list
       * @param {LinkedListNode<T>} node
       * @param {T} value
       * @returns {LinkedListNode<T>} The added node.
       * @template T
       */


      function addAfter(list, node, value) {
        // assumes that node != list.tail && values.length >= 0
        var next = node.next;
        var newNode = {
          value: value,
          prev: node,
          next: next
        };
        node.next = newNode;
        next.prev = newNode;
        list.length++;
        return newNode;
      }
      /**
       * Removes `count` nodes after the given node. The given node will not be removed.
       * @param {LinkedList<T>} list
       * @param {LinkedListNode<T>} node
       * @param {number} count
       * @template T
       */


      function removeRange(list, node, count) {
        var next = node.next;

        for (var i = 0; i < count && next !== list.tail; i++) {
          next = next.next;
        }

        node.next = next;
        next.prev = node;
        list.length -= i;
      }
      /**
       * @param {LinkedList<T>} list
       * @returns {T[]}
       * @template T
       */


      function toArray(list) {
        var array = [];
        var node = list.head.next;

        while (node !== list.tail) {
          array.push(node.value);
          node = node.next;
        }

        return array;
      }

      if (!_self.document) {
        if (!_self.addEventListener) {
          // in Node.js
          return _;
        }

        if (!_.disableWorkerMessageHandler) {
          // In worker
          _self.addEventListener('message', function (evt) {
            var message = JSON.parse(evt.data),
                lang = message.language,
                code = message.code,
                immediateClose = message.immediateClose;

            _self.postMessage(_.highlight(code, _.languages[lang], lang));

            if (immediateClose) {
              _self.close();
            }
          }, false);
        }

        return _;
      } //Get current script and highlight


      var script = _.util.currentScript();

      if (script) {
        _.filename = script.src;

        if (script.hasAttribute('data-manual')) {
          _.manual = true;
        }
      }

      function highlightAutomaticallyCallback() {
        if (!_.manual) {
          _.highlightAll();
        }
      }

      if (!_.manual) {
        // If the document state is "loading", then we'll use DOMContentLoaded.
        // If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
        // DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
        // might take longer one animation frame to execute which can create a race condition where only some plugins have
        // been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
        // See https://github.com/PrismJS/prism/issues/2102
        var readyState = document.readyState;

        if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
          document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
        } else {
          if (window.requestAnimationFrame) {
            window.requestAnimationFrame(highlightAutomaticallyCallback);
          } else {
            window.setTimeout(highlightAutomaticallyCallback, 16);
          }
        }
      }

      return _;
    }(_self);

    if (true && module.exports) {
      module.exports = Prism;
    } // hack for components to work correctly in node.js


    if (typeof global !== 'undefined') {
      global.Prism = Prism;
    }
    /* **********************************************
         Begin prism-markup.js
    ********************************************** */


    Prism.languages.markup = {
      'comment': /<!--[\s\S]*?-->/,
      'prolog': /<\?[\s\S]+?\?>/,
      'doctype': {
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,
        greedy: true
      },
      'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
      'tag': {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
        greedy: true,
        inside: {
          'tag': {
            pattern: /^<\/?[^\s>\/]+/i,
            inside: {
              'punctuation': /^<\/?/,
              'namespace': /^[^\s>\/:]+:/
            }
          },
          'attr-value': {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
            inside: {
              'punctuation': [/^=/, {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: true
              }]
            }
          },
          'punctuation': /\/?>/,
          'attr-name': {
            pattern: /[^\s>\/]+/,
            inside: {
              'namespace': /^[^\s>\/:]+:/
            }
          }
        }
      },
      'entity': /&#?[\da-z]{1,8};/i
    };
    Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity']; // Plugin to make entity title show the real entity, idea by Roman Komarov

    Prism.hooks.add('wrap', function (env) {
      if (env.type === 'entity') {
        env.attributes['title'] = env.content.replace(/&amp;/, '&');
      }
    });
    Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
      /**
       * Adds an inlined language to markup.
       *
       * An example of an inlined language is CSS with `<style>` tags.
       *
       * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addInlined('style', 'css');
       */
      value: function addInlined(tagName, lang) {
        var includedCdataInside = {};
        includedCdataInside['language-' + lang] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: true,
          inside: Prism.languages[lang]
        };
        includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
        var inside = {
          'included-cdata': {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: includedCdataInside
          }
        };
        inside['language-' + lang] = {
          pattern: /[\s\S]+/,
          inside: Prism.languages[lang]
        };
        var def = {};
        def[tagName] = {
          pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
            return tagName;
          }), 'i'),
          lookbehind: true,
          greedy: true,
          inside: inside
        };
        Prism.languages.insertBefore('markup', 'cdata', def);
      }
    });
    Prism.languages.xml = Prism.languages.extend('markup', {});
    Prism.languages.html = Prism.languages.markup;
    Prism.languages.mathml = Prism.languages.markup;
    Prism.languages.svg = Prism.languages.markup;
    /* **********************************************
         Begin prism-css.js
    ********************************************** */

    (function (Prism) {
      var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
      Prism.languages.css = {
        'comment': /\/\*[\s\S]*?\*\//,
        'atrule': {
          pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
          inside: {
            'rule': /^@[\w-]+/,
            'selector-function-argument': {
              pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
              lookbehind: true,
              alias: 'selector'
            } // See rest below

          }
        },
        'url': {
          pattern: RegExp('url\\((?:' + string.source + '|[^\n\r()]*)\\)', 'i'),
          greedy: true,
          inside: {
            'function': /^url/i,
            'punctuation': /^\(|\)$/
          }
        },
        'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
        'string': {
          pattern: string,
          greedy: true
        },
        'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
        'important': /!important\b/i,
        'function': /[-a-z0-9]+(?=\()/i,
        'punctuation': /[(){};:,]/
      };
      Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
      var markup = Prism.languages.markup;

      if (markup) {
        markup.tag.addInlined('style', 'css');
        Prism.languages.insertBefore('inside', 'attr-value', {
          'style-attr': {
            pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
            inside: {
              'attr-name': {
                pattern: /^\s*style/i,
                inside: markup.tag.inside
              },
              'punctuation': /^\s*=\s*['"]|['"]\s*$/,
              'attr-value': {
                pattern: /.+/i,
                inside: Prism.languages.css
              }
            },
            alias: 'language-css'
          }
        }, markup.tag);
      }
    })(Prism);
    /* **********************************************
         Begin prism-clike.js
    ********************************************** */


    Prism.languages.clike = {
      'comment': [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true
      }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true,
        greedy: true
      }],
      'string': {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      },
      'class-name': {
        pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: true,
        inside: {
          'punctuation': /[.\\]/
        }
      },
      'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
      'boolean': /\b(?:true|false)\b/,
      'function': /\w+(?=\()/,
      'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
      'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
      'punctuation': /[{}[\];(),.:]/
    };
    /* **********************************************
         Begin prism-javascript.js
    ********************************************** */

    Prism.languages.javascript = Prism.languages.extend('clike', {
      'class-name': [Prism.languages.clike['class-name'], {
        pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
        lookbehind: true
      }],
      'keyword': [{
        pattern: /((?:^|})\s*)(?:catch|finally)\b/,
        lookbehind: true
      }, {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: true
      }],
      'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
      // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
      'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      'operator': /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/
    });
    Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
    Prism.languages.insertBefore('javascript', 'keyword', {
      'regex': {
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
        lookbehind: true,
        greedy: true
      },
      // This must be declared before keyword because we use "function" inside the look-forward
      'function-variable': {
        pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
        alias: 'function'
      },
      'parameter': [{
        pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }, {
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
        inside: Prism.languages.javascript
      }, {
        pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }, {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }],
      'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    });
    Prism.languages.insertBefore('javascript', 'string', {
      'template-string': {
        pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
        greedy: true,
        inside: {
          'template-punctuation': {
            pattern: /^`|`$/,
            alias: 'string'
          },
          'interpolation': {
            pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
            lookbehind: true,
            inside: {
              'interpolation-punctuation': {
                pattern: /^\${|}$/,
                alias: 'punctuation'
              },
              rest: Prism.languages.javascript
            }
          },
          'string': /[\s\S]+/
        }
      }
    });

    if (Prism.languages.markup) {
      Prism.languages.markup.tag.addInlined('script', 'javascript');
    }

    Prism.languages.js = Prism.languages.javascript;
    /* **********************************************
         Begin prism-file-highlight.js
    ********************************************** */

    (function () {
      if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
        return;
      }
      /**
       * @param {Element} [container=document]
       */


      self.Prism.fileHighlight = function (container) {
        container = container || document;
        var Extensions = {
          'js': 'javascript',
          'py': 'python',
          'rb': 'ruby',
          'ps1': 'powershell',
          'psm1': 'powershell',
          'sh': 'bash',
          'bat': 'batch',
          'h': 'c',
          'tex': 'latex'
        };
        Array.prototype.slice.call(container.querySelectorAll('pre[data-src]')).forEach(function (pre) {
          // ignore if already loaded
          if (pre.hasAttribute('data-src-loaded')) {
            return;
          } // load current


          var src = pre.getAttribute('data-src');
          var language,
              parent = pre;
          var lang = /\blang(?:uage)?-([\w-]+)\b/i;

          while (parent && !lang.test(parent.className)) {
            parent = parent.parentNode;
          }

          if (parent) {
            language = (pre.className.match(lang) || [, ''])[1];
          }

          if (!language) {
            var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
            language = Extensions[extension] || extension;
          }

          var code = document.createElement('code');
          code.className = 'language-' + language;
          pre.textContent = '';
          code.textContent = 'Loading…';
          pre.appendChild(code);
          var xhr = new XMLHttpRequest();
          xhr.open('GET', src, true);

          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              if (xhr.status < 400 && xhr.responseText) {
                code.textContent = xhr.responseText;
                Prism.highlightElement(code); // mark as loaded

                pre.setAttribute('data-src-loaded', '');
              } else if (xhr.status >= 400) {
                code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
              } else {
                code.textContent = '✖ Error: File does not exist or is empty';
              }
            }
          };

          xhr.send(null);
        });
      };

      document.addEventListener('DOMContentLoaded', function () {
        // execute inside handler, for dropping Event as argument
        self.Prism.fileHighlight();
      });
    })();
    /***/

  },

  /***/
  "./src/app/blog/blog-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/blog/blog-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: BlogRoutingModule */

  /***/
  function srcAppBlogBlogRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogRoutingModule", function () {
      return BlogRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./blog.component */
    "./src/app/blog/blog.component.ts");

    var routes = [{
      path: ':title',
      component: _blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"]
    }, {
      path: '**',
      component: _blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"]
    }];

    var BlogRoutingModule = function BlogRoutingModule() {
      _classCallCheck2(this, BlogRoutingModule);
    };

    BlogRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BlogRoutingModule
    });
    BlogRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BlogRoutingModule_Factory(t) {
        return new (t || BlogRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlogRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog/blog.component.ts":
  /*!****************************************!*\
    !*** ./src/app/blog/blog.component.ts ***!
    \****************************************/

  /*! exports provided: BlogComponent */

  /***/
  function srcAppBlogBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogComponent", function () {
      return BlogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @scullyio/ng-lib */
    "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _meta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../meta.service */
    "./src/app/meta.service.ts");
    /* harmony import */


    var _highlight_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./highlight.service */
    "./src/app/blog/highlight.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");

    function BlogComponent_div_0_mat_chip_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var keyword_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](keyword_r2);
      }
    }

    function BlogComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-chip-list", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BlogComponent_div_0_mat_chip_6_Template, 2, 1, "mat-chip", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "time", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n    ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n    ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n    ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "scully-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n    ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n    ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n        Have questions/comments? Tweet @");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "krishnaanaril");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n    ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.metaData.keywords);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.metaData.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datetime", ctx_r0.metaData.date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 4, ctx_r0.metaData.date));
      }
    }

    var BlogComponent = /*#__PURE__*/function () {
      function BlogComponent(scully, metaService, highlightService) {
        _classCallCheck2(this, BlogComponent);

        this.scully = scully;
        this.metaService = metaService;
        this.highlightService = highlightService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.current$ = this.scully.getCurrent();
      }

      _createClass2(BlogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.subscriptions.add(this.current$.subscribe(function (blog) {
            _this3.metaData = {
              title: blog.title,
              description: blog.description,
              date: blog.date,
              category: blog.category ? blog.category : '',
              imageUrl: blog.image ? blog.image : '',
              keywords: blog.keywords ? blog.keywords.split(',').map(function (elem) {
                return elem.trim();
              }) : [],
              siteUrl: blog.route,
              type: 'website'
            };

            _this3.metaService.setMetaForCurrentPage(_this3.metaData);
          }));
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.highlightService.highlightAll();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.unsubscribe();
        }
      }]);

      return BlogComponent;
    }();

    BlogComponent.ɵfac = function BlogComponent_Factory(t) {
      return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__["ScullyRoutesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_meta_service__WEBPACK_IMPORTED_MODULE_3__["MetaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_highlight_service__WEBPACK_IMPORTED_MODULE_4__["HighlightService"]));
    };

    BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogComponent,
      selectors: [["app-blog"]],
      decls: 1,
      vars: 1,
      consts: [["class", "blog-post", 4, "ngIf"], [1, "blog-post"], [1, "title-section"], ["aria-label", "Blog tags/keywords"], ["class", "keywords", "color", "primary", 4, "ngFor", "ngForOf"], [1, "blog-title"], [1, "sub-items-container"], [3, "datetime"], [1, "post-footer"], ["href", "https://twitter.com/krishnaanaril"], ["color", "primary", 1, "keywords"]],
      template: function BlogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BlogComponent_div_0_Template, 32, 6, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.metaData);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__["ScullyContentComponent"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChip"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      styles: ["[_ngcontent-%COMP%]::slotted(h1) {\n  color: #330625;\n  background-color: #f8d3ec;\n  padding: 5px;\n  border-radius: 5px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.blog-post[_ngcontent-%COMP%], .post-footer[_ngcontent-%COMP%] {\n  margin: auto;\n  word-wrap: break-word;\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  max-width: 768px;\n  font-size: 18px;\n  line-height: 1.5;\n  font-family: 'Raleway', sans-serif;\n}\n@media all and (max-width: 768px) {\n  .blog-post[_ngcontent-%COMP%], .post-footer[_ngcontent-%COMP%] {\n    margin: 0 10px;\n  }\n}\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  margin: auto;\n}\nimg[_ngcontent-%COMP%]    + em[_ngcontent-%COMP%] {\n  display: block;\n  word-break: break-all;\n  text-align: center;\n  font-size: 0.9rem;\n  color: grey;\n}\nimg[_ngcontent-%COMP%]    + em[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: grey;\n}\npre[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  \n  white-space: -moz-pre-wrap;\n  \n  white-space: -pre-wrap;\n  \n  white-space: -o-pre-wrap;\n  \n  word-wrap: break-word;\n  \n}\ncode[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n  padding: 10px;\n  display: block;\n  white-space: break-spaces;\n  word-break: break-word;\n}\n.blog-title[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 4.5rem;\n  line-height: 1;\n  word-break: normal;\n  display: block;\n  margin: 0px auto 10px auto;\n  text-align: center;\n  font-family: 'Zilla Slab', serif;\n}\n@media all and (max-width: 768px) {\n  .blog-title[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n}\nhr[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.sub-items-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\nmat-chip-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 50px auto 5px auto;\n}\n.keywords[_ngcontent-%COMP%] {\n  background-color: hsl(0, 0%, 96%);\n  padding: 10px;\n  border: 1px solid grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9DOi9LcmlzaG5hTW9oYW4vR2l0aHViL2tyaXNobmFtb2hhbi5kZXYvc3JjL2FwcC9ibG9nL2Jsb2cuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvYmxvZy9DOi9LcmlzaG5hTW9oYW4vR2l0aHViL2tyaXNobmFtb2hhbi5kZXYvc3JjL3N0eWxlcy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVDO0VBQ0MsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDREY7QURJQTs7RUFDRSxZQUFBO0VBSUEscUJBQUE7RUFDQSxxQkFBQTtNQUFBLGlCQUFBO1VBQUEsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VFQ0Usa0NBQUE7QURKSjtBREpFO0VBQUE7O0lBQ0UsY0FBQTtFQ1FGO0FBQ0Y7QURDQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0NGO0FERUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0FGO0FER0E7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUNERjtBRElBO0VBQ0UscUJBQUE7RUNGQSxrQkFBa0I7RURHbEIsMEJBQUE7RUNEQSx3QkFBd0I7RURFeEIsc0JBQUE7RUNBQSxjQUFjO0VEQ2Qsd0JBQUE7RUNDQSxZQUFZO0VEQVoscUJBQUE7RUNFQSwyQkFBMkI7QUFDN0I7QURBQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQ0VGO0FEQ0E7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUVsREUsZ0NBQUE7QURvREo7QURBRTtFQUFBO0lBQ0UsZUFBQTtFQ0dGO0FBQ0Y7QURBQTtFQUNFLFlBQUE7QUNFRjtBREtBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDSEY7QURNQTtFQUpFLGFBQUE7RUFDQSx1QkFBQTtFQUtBLDBCQUFBO0FDSEY7QURNQTtFQUNFLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9ibG9nL2Jsb2cuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpIFwiLi4vLi4vc3R5bGVzLmxlc3NcIjtcblxuIDo6c2xvdHRlZChoMSkgIHtcbiAgY29sb3I6cmdiKDUxLCA2LCAzNyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDIxMSwgMjM2KTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLmJsb2ctcG9zdCB7XG4gIG1hcmdpbjogYXV0bztcbiAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogQHRhYi13aWR0aCkge1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICB9XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgaHlwaGVuczogYXV0bztcbiAgbWF4LXdpZHRoOiBAdGFiLXdpZHRoO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIC5mb250LXJhbGV3YXk7ICBcbn1cblxuaW1nIHtcbiAgd2lkdGg6MTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaW1nICsgZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogZ3JleTtcbn1cblxuaW1nICsgZW0gPiAqIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiBncmV5O1xufVxuXG5wcmUge1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7ICAgICAgIC8qIFNpbmNlIENTUyAyLjEgKi9cbiAgd2hpdGUtc3BhY2U6IC1tb3otcHJlLXdyYXA7ICAvKiBNb3ppbGxhLCBzaW5jZSAxOTk5ICovXG4gIHdoaXRlLXNwYWNlOiAtcHJlLXdyYXA7ICAgICAgLyogT3BlcmEgNC02ICovXG4gIHdoaXRlLXNwYWNlOiAtby1wcmUtd3JhcDsgICAgLyogT3BlcmEgNyAqL1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7ICAgICAgIC8qIEludGVybmV0IEV4cGxvcmVyIDUuNSsgKi9cbn1cblxuY29kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuXG4uYmxvZy10aXRsZSB7ICAgXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7IFxuICBmb250LXNpemU6IDQuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMHB4IGF1dG8gMTBweCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC5mb250LXppbGxhLXNsYWI7XG4gIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IEB0YWItd2lkdGgpIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbn1cblxuaHIge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5wb3N0LWZvb3RlciB7XG4gICY6ZXh0ZW5kKC5ibG9nLXBvc3QpO1xufVxuXG4uc3ViLWl0ZW1zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5tYXQtY2hpcC1saXN0IHsgIFxuICAuc3ViLWl0ZW1zLWNvbnRhaW5lcjtcbiAgbWFyZ2luOiA1MHB4IGF1dG8gNXB4IGF1dG87XG59XG5cbi5rZXl3b3JkcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwLCA5NiUpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xufSIsIjo6c2xvdHRlZChoMSkge1xuICBjb2xvcjogIzMzMDYyNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDNlYztcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cbi5ibG9nLXBvc3QsXG4ucG9zdC1mb290ZXIge1xuICBtYXJnaW46IGF1dG87XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgaHlwaGVuczogYXV0bztcbiAgbWF4LXdpZHRoOiA3NjhweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJsb2ctcG9zdCxcbiAgLnBvc3QtZm9vdGVyIHtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgfVxufVxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59XG5pbWcgKyBlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiBncmV5O1xufVxuaW1nICsgZW0gPiAqIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiBncmV5O1xufVxucHJlIHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAvKiBTaW5jZSBDU1MgMi4xICovXG4gIHdoaXRlLXNwYWNlOiAtbW96LXByZS13cmFwO1xuICAvKiBNb3ppbGxhLCBzaW5jZSAxOTk5ICovXG4gIHdoaXRlLXNwYWNlOiAtcHJlLXdyYXA7XG4gIC8qIE9wZXJhIDQtNiAqL1xuICB3aGl0ZS1zcGFjZTogLW8tcHJlLXdyYXA7XG4gIC8qIE9wZXJhIDcgKi9cbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAvKiBJbnRlcm5ldCBFeHBsb3JlciA1LjUrICovXG59XG5jb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG4uYmxvZy10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogNC41cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgd29yZC1icmVhazogbm9ybWFsO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwcHggYXV0byAxMHB4IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdaaWxsYSBTbGFiJywgc2VyaWY7XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYmxvZy10aXRsZSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICB9XG59XG5ociB7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5zdWItaXRlbXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5tYXQtY2hpcC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogNTBweCBhdXRvIDVweCBhdXRvO1xufVxuLmtleXdvcmRzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5NiUpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xufVxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGltcG9ydCBcIkBhbmd1bGFyL21hdGVyaWFsL3ByZWJ1aWx0LXRoZW1lcy9pbmRpZ28tcGluay5jc3NcIjtcbkBpbXBvcnQgKGNzcykgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdHxSYWxld2F5fFppbGxhK1NsYWInKTtcbi8qIGluY2x1ZGUgQ1NTIGZvciBwcmlzbSB0b29sYmFyICovXG5AaW1wb3J0IChjc3MpICd+cHJpc21qcy9wbHVnaW5zL3Rvb2xiYXIvcHJpc20tdG9vbGJhci5jc3MnO1xuLyogY2hlY2sgbm9kZV9tb2R1bGVzL3ByaXNtanMvdGhlbWVzLyBmb3IgdGhlIGF2YWlsYWJsZSB0aGVtZXMgKi9cbkBpbXBvcnQgKGNzcykgJ35wcmlzbWpzL3RoZW1lcy9wcmlzbS10b21vcnJvdyc7XG5cbkBwZXJzb25hbC1ibGFjazogaHNsKDAsIDEwMCUsIDAlKTtcbkB0YWItd2lkdGg6IDc2OHB4O1xuXG4uZm9udC1tb250c2VycmF0IHtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxuXG4uZm9udC16aWxsYS1zbGFiIHtcbiAgICBmb250LWZhbWlseTogJ1ppbGxhIFNsYWInLCBzZXJpZjtcbn1cblxuLmZvbnQtcmFsZXdheSB7XG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbn1cblxuaHRtbCwgYm9keSB7ICAgIFxuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDAgMCAhaW1wb3J0YW50OyAgXG4gICAgLmZvbnQtbW9udHNlcnJhdDsgIFxufVxuXG5ib2R5IHtcbiAgICBtYXJnaW46IDMwcHggMTBweDtcbn1cblxuLm1haW4tZm9udHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi50b3AtbmF2IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luOiA1cHggMjVweDsgIFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7ICAgICAgXG4gICAgfVxuICAgIGxpOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgfVxufVxuXG4ubmF2LWFjdGl2ZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkO1xufVxuXG4udG9vbC1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgzNjAsIDEwMCUsIDEwMCUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgLmZvbnQtcmFsZXdheTtcbn1cblxuYSB7XG4gICAgY29sb3I6IGhzbCgyMjUsIDQ2JSwgNDIlKTtcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IGhzbCgyNTgsIDgzJSwgNDUlKTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGhzbCg5LCA4MSUsIDYxJSk7XG4gICAgICB9XG4gIH1cblxuICAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog',
          templateUrl: './blog.component.html',
          styleUrls: ['./blog.component.less'],
          preserveWhitespaces: true,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
        }]
      }], function () {
        return [{
          type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__["ScullyRoutesService"]
        }, {
          type: _meta_service__WEBPACK_IMPORTED_MODULE_3__["MetaService"]
        }, {
          type: _highlight_service__WEBPACK_IMPORTED_MODULE_4__["HighlightService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog/blog.module.ts":
  /*!*************************************!*\
    !*** ./src/app/blog/blog.module.ts ***!
    \*************************************/

  /*! exports provided: BlogModule */

  /***/
  function srcAppBlogBlogModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogModule", function () {
      return BlogModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @scullyio/ng-lib */
    "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
    /* harmony import */


    var _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./blog-routing.module */
    "./src/app/blog/blog-routing.module.ts");
    /* harmony import */


    var _blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./blog.component */
    "./src/app/blog/blog.component.ts");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../material.module */
    "./src/app/material.module.ts");

    var BlogModule = function BlogModule() {
      _classCallCheck2(this, BlogModule);
    };

    BlogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: BlogModule
    });
    BlogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function BlogModule_Factory(t) {
        return new (t || BlogModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlogRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BlogModule, {
        declarations: [_blog_component__WEBPACK_IMPORTED_MODULE_4__["BlogComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlogRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BlogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_blog_component__WEBPACK_IMPORTED_MODULE_4__["BlogComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlogRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog/highlight.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/blog/highlight.service.ts ***!
    \*******************************************/

  /*! exports provided: HighlightService */

  /***/
  function srcAppBlogHighlightServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlightService", function () {
      return HighlightService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var prismjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! prismjs */
    "./node_modules/prismjs/prism.js");
    /* harmony import */


    var prismjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! prismjs/plugins/toolbar/prism-toolbar */
    "./node_modules/prismjs/plugins/toolbar/prism-toolbar.js");
    /* harmony import */


    var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard */
    "./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js");
    /* harmony import */


    var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! prismjs/components/prism-bash */
    "./node_modules/prismjs/components/prism-bash.js");
    /* harmony import */


    var prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! prismjs/components/prism-css */
    "./node_modules/prismjs/components/prism-css.js");
    /* harmony import */


    var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! prismjs/components/prism-javascript */
    "./node_modules/prismjs/components/prism-javascript.js");
    /* harmony import */


    var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! prismjs/components/prism-json */
    "./node_modules/prismjs/components/prism-json.js");
    /* harmony import */


    var prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! prismjs/components/prism-markup */
    "./node_modules/prismjs/components/prism-markup.js");
    /* harmony import */


    var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! prismjs/components/prism-typescript */
    "./node_modules/prismjs/components/prism-typescript.js");
    /* harmony import */


    var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var prismjs_components_prism_powershell__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! prismjs/components/prism-powershell */
    "./node_modules/prismjs/components/prism-powershell.js");
    /* harmony import */


    var prismjs_components_prism_powershell__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_powershell__WEBPACK_IMPORTED_MODULE_11__);

    var HighlightService = /*#__PURE__*/function () {
      function HighlightService(platformId) {
        _classCallCheck2(this, HighlightService);

        this.platformId = platformId;
      }

      _createClass2(HighlightService, [{
        key: "highlightAll",
        value: function highlightAll() {
          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            Prism.highlightAll();
          }
        }
      }]);

      return HighlightService;
    }();

    HighlightService.ɵfac = function HighlightService_Factory(t) {
      return new (t || HighlightService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
    };

    HighlightService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HighlightService,
      factory: HighlightService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=blog-blog-module-es5.js.map