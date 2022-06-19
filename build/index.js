/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  registerBlockType
} = wp.blocks;
const {
  RichText,
  InspectorControls,
  InspectorAdvancedControls,
  ColorPalette,
  BlockControls,
  AlignmentToolbar
} = wp.editor;
const {
  PanelBody,
  TextControl,
  SelectControl
} = wp.components;
registerBlockType('bproject/custom-btn', {
  // built-in attributes
  title: 'Task Button',
  description: 'It is just a simple button',
  icon: 'format-image',
  category: 'layout',
  // custom attributes
  attributes: {
    buttonAlignment: {
      type: 'string',
      default: 'none'
    },
    buttonText: {
      type: 'string'
    },
    buttonBackground: {
      type: 'string',
      default: '#329ea9'
    },
    buttonColor: {
      type: 'string',
      default: '#ffffff'
    },
    positionButton: {
      type: 'string'
    }
  },
  // custom functions
  // built-in functions
  edit: _ref => {
    let {
      attributes,
      setAttributes
    } = _ref;
    const {
      buttonAlignment,
      buttonText,
      buttonBackground,
      buttonColor,
      positionButton
    } = attributes;

    function onButtonTextChange(newButtonText) {
      setAttributes({
        buttonText: newButtonText
      });
    }

    function onButtonBackgroundChange(newBackground) {
      setAttributes({
        buttonBackground: newBackground
      });
    }

    function onButtonColorChange(newButtonColor) {
      setAttributes({
        buttonColor: newButtonColor
      });
    }

    function buttonAlignmentChange(newButtonAlignment) {
      setAttributes({
        buttonAlignment: newButtonAlignment =  false ? 0 : newButtonAlignment
      });
    }

    function buttonPositionChange(newButtonPosition) {
      setAttributes({
        positionButton: newButtonPosition
      });
    }

    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
      style: {
        marginBottom: '32px'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: 'Button Setting'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Button Text:")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      value: buttonText,
      onChange: onButtonTextChange
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Button Background:")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      value: buttonBackground,
      onChange: onButtonBackgroundChange
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Button Color:")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      value: buttonColor,
      onChange: onButtonColorChange
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Button Position:")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: "Button Position",
      value: positionButton,
      options: [{
        value: 'flex-start',
        label: 'flex-start'
      }, {
        value: 'center',
        label: 'center'
      }, {
        value: 'flex-end',
        label: 'flex-end'
      }],
      onChange: buttonPositionChange
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorAdvancedControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: "HTML anchor",
      value: attributes.anchor,
      onChange: nextValue => {
        setAttributes({
          anchor: nextValue
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container",
      style: {
        display: 'flex',
        justifyContent: positionButton
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AlignmentToolbar, {
      value: buttonAlignment,
      onChange: buttonAlignmentChange
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      key: "editable",
      tagName: "div",
      placeholder: "Add Button Text...",
      value: buttonText,
      onChange: onButtonTextChange,
      className: "task-button",
      style: {
        background: buttonBackground,
        color: buttonColor,
        textAlign: buttonAlignment,
        display: "inline-flex",
        flexDirection: "row",
        padding: '16px 32px',
        alignItems: 'center',
        borderRadius: '3px'
      }
    }))];
  },
  save: _ref2 => {
    let {
      attributes
    } = _ref2;
    const {
      buttonAlignment,
      buttonText,
      buttonBackground,
      buttonColor,
      positionButton
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "container",
      style: {
        display: 'flex',
        justifyContent: positionButton
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "task-button",
      style: {
        background: buttonBackground,
        color: buttonColor,
        textAlign: buttonAlignment,
        display: "inline-block",
        padding: '16px 32px',
        borderRadius: '3px',
        border: 'none'
      }
    }, buttonText));
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map
