/// <reference types="react" />
declare function Validation({ children, onSubmit, noValidate, ...props }: {
    [x: string]: any;
    children: any;
    onSubmit: any;
    noValidate?: boolean;
}): JSX.Element;
export default Validation;
