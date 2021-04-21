function Validation({ children, onSubmit, noValidate = false, ...props }) {
	try {
		let isValid = true;

		/**
		 * Exibe o alerta de campo inválido
		 * @param {*} field
		 * @returns void
		 */
		const elementAlert = (
			field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		) => {
			const element = document.querySelector(
				"." + field.className?.split(" ")?.join(".")
			);
			if (element) element.classList.add("form-validation-alert");
		};
		/**
		 * Verifica se o campo está válido
		 * @param {*} field
		 * @returns void
		 */
		const validFields = (
			field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		) => {
			if (
				field?.hasOwnProperty("required") &&
				field?.required !== false
			) {
				if (!field.value || field.value.toString().length === 0) {
					elementAlert(field);
					isValid = false;
				}
			}
		};
		/**
		 * Encontra o campo à ser validado
		 * @param {*} element
		 * @returns void
		 */
		const findField = (
			element:
				| HTMLInputElement
				| HTMLSelectElement
				| HTMLTextAreaElement
				| any
		) => {
			if (element.hasOwnProperty("name")) {
				if (isValid === false) return false;
				validFields(element);
			} else if (element?.props?.children) {
				validForm(element.props.children);
			} else if (element.props) {
				validForm(element.props);
			}
		};
		/**
		 * Percorre os elementos para realizar a validação
		 * @param {*} element
		 * @returns boolean
		 */
		const validForm = (
			element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		) => {
			if (Array.isArray(element)) {
				element.forEach((item) => {
					findField(item);
				});
			} else {
				findField(element);
			}
			return isValid;
		};
		/**
		 * Remove os alertas adicionados
		 * @returns void
		 */
		const removeAlerts = () => {
			isValid = true;
			const alerts = document.querySelectorAll(".form-validation-alert");
			if (alerts.length > 0) {
				alerts.forEach((element) => {
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
		const onFormSubmit = (e: {
			preventDefault: () => void;
			stopPropagation: () => void;
		}) => {
			try {
				e.preventDefault();
				e.stopPropagation();

				removeAlerts();
				const result = validForm(children);

				if (result === false) {
					console.log("Campos inválidos");
					return false;
				}
				onSubmit();
				isValid = true;
			} catch (error) {
				console.log(error.message);
			}
		};

		return (
			<form {...props} onSubmit={onFormSubmit} noValidate={noValidate}>
				{!Array.isArray(children) && children}
				{Array.isArray(children) &&
					children.map((item) => {
						return item;
					})}
			</form>
		);
	} catch (error) {
		return (
			<p
				style={{
					marginLeft: "auto",
					marginRight: "auto"
				}}
			>
				{error.message}
			</p>
		);
	}
}

export default Validation;
