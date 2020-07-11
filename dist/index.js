"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Cria o estilo do alerta
 */
function createAlertStyle() {
  try {
    var css = '.form-validation-alert {border: solid 1px red;box-shadow: 0px 0px 2px red;}';
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    head.appendChild(style);
    style.type = 'text/css';

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  } catch (error) {}
}

function FormValidation(_ref) {
  var children = _ref.children,
      onSubmit = _ref.onSubmit,
      props = _objectWithoutProperties(_ref, ["children", "onSubmit"]);

  try {
    var isValid = true;
    /**
     * Exibe o alerta de campo inválido
     * @param {*} field 
     * @returns void
     */

    function elementAlert(field) {
      var _field$className, _field$className$spli;

      var element = document.querySelector('.' + ((_field$className = field.className) === null || _field$className === void 0 ? void 0 : (_field$className$spli = _field$className.split(' ')) === null || _field$className$spli === void 0 ? void 0 : _field$className$spli.join('.')));
      element.classList.add('form-validation-alert');
    }
    /**
     * Verifica se o campo está válido
     * @param {*} field 
     * @returns void
     */


    function validFields(field) {
      if ((field === null || field === void 0 ? void 0 : field.hasOwnProperty('isrequired')) && (field === null || field === void 0 ? void 0 : field.required) !== false) {
        if (!field.value || field.value.toString().length === 0) {
          elementAlert(field);
          isValid = false;
        }
      }
    }
    /**
     * Encontra o campo à ser validado
     * @param {*} element 
     * @returns void
     */


    function findField(element) {
      var _element$props;

      if (element.hasOwnProperty('name')) {
        if (isValid === false) return false;
        validFields(element);
      } else if (element === null || element === void 0 ? void 0 : (_element$props = element.props) === null || _element$props === void 0 ? void 0 : _element$props.children) {
        validForm(element.props.children);
      } else if (element.props) {
        validForm(element.props);
      }
    }
    /**
     * Percorre os elementos para realizar a validação
     * @param {*} element
     * @returns boolean 
     */


    function validForm(element) {
      if (Array.isArray(element)) {
        element.forEach(function (item) {
          findField(item);
        });
      } else {
        findField(element);
      }

      return isValid;
    }
    /**
     * Remove os alertas adicionados
     * @returns void
     */


    function removeAlerts() {
      isValid = true;
      var alerts = document.querySelectorAll('.form-validation-alert');

      if (alerts.length > 0) {
        alerts.forEach(function (element) {
          element.classList.remove('form-validation-alert');
        });
      }

      return true;
    }
    /**
     * Envia o formulário
     * @param {*} e 
     * @returns boolean|void
     */


    function onFormSubmit(_x) {
      return _onFormSubmit.apply(this, arguments);
    }

    function _onFormSubmit() {
      _onFormSubmit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                e.preventDefault();
                e.stopPropagation();
                removeAlerts();
                result = validForm(children);

                if (!(result === false)) {
                  _context.next = 8;
                  break;
                }

                console.log('Campos inválidos');
                return _context.abrupt("return", false);

              case 8:
                onSubmit();
                isValid = true;
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0.message);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 12]]);
      }));
      return _onFormSubmit.apply(this, arguments);
    }

    return /*#__PURE__*/_react.default.createElement("form", _extends({}, props, {
      onSubmit: onFormSubmit
    }), !Array.isArray(children) && children, Array.isArray(children) && children.map(function (item) {
      return item;
    }));
  } catch (error) {
    return /*#__PURE__*/_react.default.createElement("p", {
      style: {
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    }, error.message);
  }
}

createAlertStyle();
var _default = FormValidation;
exports.default = _default;