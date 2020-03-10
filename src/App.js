import React from 'react' // eslint-disable-line no-unused-vars
import './App.css'

const cleanInputString = value => {
    let ret = ''
    ret = value.toLowerCase() // convert to lowercase
    ret = ret.split(' ').join('') // remove spaces
    return ret
}

var cities = ['Toronto', 'Halifax', 'Montreal', 'Greater Toronto Area'].map(v => cleanInputString(v))

// create a readonly object for use as an enumeration
const Input = Object.freeze({
    city: 'city',
    product: 'product',
})

const checkEmptyStr = val => {
    return val === ''
}

const checkCityNotInList = city => {
    const found = cities.find(element => {
        return element === city
    })
    return found === undefined
}

const isCityInvalid = city => {
    return checkEmptyStr(city) || checkCityNotInList(city)
}

const isProductInvalid = product => {
    return checkEmptyStr(product)
}

const isNameInvalid = name => {
    return checkEmptyStr(name)
}

class App extends React.Component {
    state = {
        [Input.city]: undefined,
        [Input.product]: undefined,
        validations: {
            [Input.city]: false,
            [Input.product]: false,
        },
        showSubmit: false,
    }

    handleValidation = (input, value) => {
        let valid = false
        switch (input) {
            case Input.city:
                valid = !isCityInvalid(value)
                break
            case Input.product:
                valid = !isProductInvalid(value)
                break
            default:
                throw Error(`invalid input provided: ${input} is either invalid, or does not have a case. It must be a value on ${Object.values(Input)}`)
        }

        return valid
    }

    handleChange = (input, event) => {
        const { value } = event.target
        console.log('input', input)
        console.log('value', value)
        const cleanedValue = cleanInputString(value)
        const valid = this.handleValidation(input, cleanedValue)
        console.log('valid', valid)

        this.setState({ [input]: value, validations: { ...this.state.validations, [input]: valid } }, () => {
            const validValues = Object.values(this.state.validations)
            const allValid = validValues.every(v => v === true)
            if (allValid && !this.state.showSubmit) {
                this.setState({ showSubmit: true })
            } else if (!allValid && this.state.showSubmit) {
                this.setState({ showSubmit: false })
            }
        })
    }

    render() {
        const showSubmit = this.state.showSubmit ? { display: 'inline' } : { display: 'none' }
        console.log('showSubmit', this.state.showSubmit)

        return (
            <div className="App">
                <form>
                    <input name={Input.city} placeholder={Input.city} value={this.state.city} onChange={e => this.handleChange(Input.city, e)} />
                    <input name={Input.product} placeholder={Input.product} value={this.state.product} onChange={e => this.handleChange(Input.product, e)} />
                    <button name="submit" style={showSubmit} onClick={() => console.log('Submitted!')}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default App
