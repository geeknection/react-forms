# `geeknection/form-validation`

React Jsx component used to auto-validation of form fields

[![Sem-t-tulo.png](https://i.postimg.cc/q7094qrx/Sem-t-tulo.png)](https://postimg.cc/RWsPTMNW)


## Getting started

`npm install @geeknection/form-validation-js --save`

## Usage

```javascript
import FormValidation from '@geeknection/form-validation-js/dist';
```

```javascript
    <FormValidation onSubmit={onSubmitForm}>
        <div style={{
            marginBottom: 10
        }}>
            <input
                style={{
                    padding: 10
                }}
                className='form-control input-name'
                name='name'
                placeholder='Nome'
                value={this.state.name}
                isrequired={true}
                onChange=(e) => this.setState({name: e.target.value})}/>
        </div>
        <button type='submit'>Enviar</button>
    </FormValidation>
```

### Props
- You can use any props
- [`onSubmit`](#onSubmit)
- [`isrequired`](#isrequired)
- [`className`](#className)


---

### `onSubmit`

Used to submit your form. When your type your submit function, you doesn't need to use preventDefault and stopPropagation. FormValidation already do that.

| Type       | Required |
| ---------- | -------- |
| Function   | Yes      |

---

### `isrequired`

Used to say for FormValidation if element need is required

| Type       | Required 
| ---------- | -------- |
| boolean    | Yes      |

---

### `className`

All field need them own class.

| Type       | Required 
| ---------- | -------- |
| prototype  | Yes      |

---

## Contributors

This module was extracted from `React Js` core. Please reffer to https://github.com/geeknection/form-validation/graphs/contributors for the complete list of contributors.

## License
The library is released under the MIT licence. For more information see `LICENSE`.