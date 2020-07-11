import React from 'react';

/**
 * Cria o estilo do alerta
 */
function createAlertStyle() {
    try {
        let css = '.form-validation-alert {border: solid 1px red;box-shadow: 0px 0px 2px red;}';
        let head = document.head || document.getElementsByTagName('head')[0];
        let style = document.createElement('style');

        head.appendChild(style);

        style.type = 'text/css';
        if (style.styleSheet){
            style.styleSheet.cssText = css;
        }
        else {
            style.appendChild(document.createTextNode(css));
        }
    }
    catch (error) {
        
    }
}
function FormValidation({children, onSubmit, ...props}) {
    try {
        let isValid = true;

        /**
         * Exibe o alerta de campo inválido
         * @param {*} field 
         * @returns void
         */
        function elementAlert(field) {
            const element = document.querySelector('.' + field.className?.split(' ')?.join('.'));
            element.classList.add('form-validation-alert');
        }
        /**
         * Verifica se o campo está válido
         * @param {*} field 
         * @returns void
         */
        function validFields(field) {
            if (field?.hasOwnProperty('isrequired') && field?.required !== false) {
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
            if (element.hasOwnProperty('name')) {
                if (isValid === false) return false;
                validFields(element);
            }
            else if (element?.props?.children) {
                validForm(element.props.children);
            }
            else if (element.props) {
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
                element.forEach(item => {
                    findField(item);
                });
            }
            else {
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
            const alerts = document.querySelectorAll('.form-validation-alert');
            if (alerts.length > 0) {
                alerts.forEach(element => {
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
        async function onFormSubmit(e) {
            try {
                e.preventDefault();
                e.stopPropagation();

                removeAlerts();
                const result = validForm(children);

                if (result === false) {
                    console.log('Campos inválidos');
                    return false;
                }
                onSubmit();
                isValid = true;
            }
            catch (error) {
                console.log(error.message);
            }
        }

        return <form {...props} onSubmit={onFormSubmit}>
            {!Array.isArray(children) && children}
            {Array.isArray(children) &&
            children.map(item => {
                return item;
            })}
        </form>;
    }
    catch (error) {
        return <p style={{
            marginLeft: 'auto',
            marginRight: 'auto'
        }}>{error.message}</p>
    }
}

createAlertStyle();

export default FormValidation;