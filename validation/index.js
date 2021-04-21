"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
function Validation(_a) {
    var children = _a.children, onSubmit = _a.onSubmit, _b = _a.noValidate, noValidate = _b === void 0 ? false : _b, props = __rest(_a, ["children", "onSubmit", "noValidate"]);
    try {
        var isValid_1 = true;
        /**
         * Exibe o alerta de campo inválido
         * @param {*} field
         * @returns void
         */
        var elementAlert_1 = function (field) {
            var _a, _b;
            var element = document.querySelector("." + ((_b = (_a = field.className) === null || _a === void 0 ? void 0 : _a.split(" ")) === null || _b === void 0 ? void 0 : _b.join(".")));
            if (element)
                element.classList.add("form-validation-alert");
        };
        /**
         * Verifica se o campo está válido
         * @param {*} field
         * @returns void
         */
        var validFields_1 = function (field) {
            if ((field === null || field === void 0 ? void 0 : field.hasOwnProperty("required")) &&
                (field === null || field === void 0 ? void 0 : field.required) !== false) {
                if (!field.value || field.value.toString().length === 0) {
                    elementAlert_1(field);
                    isValid_1 = false;
                }
            }
        };
        /**
         * Encontra o campo à ser validado
         * @param {*} element
         * @returns void
         */
        var findField_1 = function (element) {
            var _a;
            if (element.hasOwnProperty("name")) {
                if (isValid_1 === false)
                    return false;
                validFields_1(element);
            }
            else if ((_a = element === null || element === void 0 ? void 0 : element.props) === null || _a === void 0 ? void 0 : _a.children) {
                validForm_1(element.props.children);
            }
            else if (element.props) {
                validForm_1(element.props);
            }
        };
        /**
         * Percorre os elementos para realizar a validação
         * @param {*} element
         * @returns boolean
         */
        var validForm_1 = function (element) {
            if (Array.isArray(element)) {
                element.forEach(function (item) {
                    findField_1(item);
                });
            }
            else {
                findField_1(element);
            }
            return isValid_1;
        };
        /**
         * Remove os alertas adicionados
         * @returns void
         */
        var removeAlerts_1 = function () {
            isValid_1 = true;
            var alerts = document.querySelectorAll(".form-validation-alert");
            if (alerts.length > 0) {
                alerts.forEach(function (element) {
                    element.classList.remove("form-validation-alert");
                });
            }
            return true;
        };
        /**
         * Envia o formulário
         * @param {*} e
         * @returns boolean|void
         */
        var onFormSubmit = function (e) {
            try {
                e.preventDefault();
                e.stopPropagation();
                removeAlerts_1();
                var result = validForm_1(children);
                if (result === false) {
                    console.log("Campos inválidos");
                    return false;
                }
                onSubmit();
                isValid_1 = true;
            }
            catch (error) {
                console.log(error.message);
            }
        };
        return (jsx_runtime_1.jsxs("form", __assign({}, props, { onSubmit: onFormSubmit, noValidate: noValidate }, { children: [!Array.isArray(children) && children, Array.isArray(children) &&
                    children.map(function (item) {
                        return item;
                    })] }), void 0));
    }
    catch (error) {
        return (jsx_runtime_1.jsx("p", __assign({ style: {
                marginLeft: "auto",
                marginRight: "auto"
            } }, { children: error.message }), void 0));
    }
}
exports.default = Validation;
//# sourceMappingURL=index.js.map