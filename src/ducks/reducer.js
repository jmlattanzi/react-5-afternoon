const initalState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: 'false',
    realEstateAgent: 'false',
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: '',
}

const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE'
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE'
const UPDATE_CITY = 'UPDATE_CITY'
const UPDATE_PROP = 'UPDATE_PROP'
const UPDATE_FOUND = 'UPDATE_FOUND'
const UPDATE_REAL_ESTATE_AGENT = 'UPDATE_REAL_ESTATE_AGENT'
const UPDATE_COST = 'UPDATE_COST'
const UPDATE_DOWN_PAYMENT = 'UPDATE_DOWN_PAYMENT'
const UPDATE_CREDIT = 'UPDATE_CREDIT'
const UPDATE_HISTORY = 'UPDATE_HISTORY'
const UPDATE_ADDRESS_ONE = 'UPDATE_ADDRESS_ONE'
const UPDATE_ADDRESS_TWO = 'UPDATE_ADDRESS_TWO'
const UPDATE_ADDRESS_THREE = 'UPDATE_ADDRESS_THREE'
const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME'
const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME'
const UPDATE_EMAIL = 'UPDATE_EMAIL'

export const updateLoanType = (loanType) => {
    return {
        type: UPDATE_LOAN_TYPE,
        payload: loanType,
    }
}

export const updatePropertyType = (property) => {
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: property,
    }
}

export const updateCity = (city) => {
    return {
        type: UPDATE_CITY,
        payload: city,
    }
}

export const updateProp = (prop) => {
    return {
        type: UPDATE_PROP,
        payload: prop,
    }
}

export const updateFound = (found) => {
    return {
        type: UPDATE_FOUND,
        payload: found,
    }
}

export const updateRealEstateAgent = (value) => {
    return {
        type: UPDATE_REAL_ESTATE_AGENT,
        payload: value,
    }
}

export const updateCost = (value) => {
    return {
        type: UPDATE_COST,
        payload: value,
    }
}

export const updateDownPayment = (value) => {
    return {
        type: UPDATE_DOWN_PAYMENT,
        payload: value,
    }
}

export const updateCredit = (value) => {
    return {
        type: UPDATE_CREDIT,
        payload: value,
    }
}

export const updateHistory = (value) => {
    return {
        type: UPDATE_HISTORY,
        payload: value,
    }
}

export const updateAddressOne = (value) => {
    return {
        type: UPDATE_ADDRESS_ONE,
        payload: value,
    }
}

export const updateAddressTwo = (value) => {
    return {
        type: UPDATE_ADDRESS_TWO,
        payload: value,
    }
}

export const updateAddressThree = (value) => {
    return {
        type: UPDATE_ADDRESS_THREE,
        payload: value,
    }
}

export const updateFirstName = (value) => {
    return {
        type: UPDATE_FIRST_NAME,
        payload: value,
    }
}

export const updateLastName = (value) => {
    return {
        type: UPDATE_LAST_NAME,
        payload: value,
    }
}

export const updateEmail = (value) => {
    return {
        type: UPDATE_EMAIL,
        payload: value,
    }
}

function reducer(state = initalState, action) {
    switch (action.type) {
        case UPDATE_LOAN_TYPE:
            return {
                ...state,
                loanType: action.payload,
            }

        case UPDATE_PROPERTY_TYPE:
            return {
                ...state,
                propertyType: action.paylaod,
            }

        case UPDATE_CITY:
            return {
                ...state,
                city: action.payload,
            }

        case UPDATE_PROP:
            return {
                ...state,
                props: action.payload,
            }

        case UPDATE_FOUND:
            return {
                ...state,
                found: action.payload,
            }

        case UPDATE_REAL_ESTATE_AGENT:
            return {
                ...state,
                realEstateAgent: action.payload,
            }

        case UPDATE_COST:
            return {
                ...state,
                cost: action.payload,
            }

        case UPDATE_DOWN_PAYMENT:
            return {
                ...state,
                downPayment: action.payload,
            }

        case UPDATE_CREDIT:
            return {
                ...state,
                credit: action.payload,
            }

        case UPDATE_HISTORY:
            return {
                ...state,
                history: action.payload,
            }

        case UPDATE_ADDRESS_ONE:
            return {
                ...state,
                addressOne: action.payload,
            }

        case UPDATE_ADDRESS_TWO:
            return {
                ...state,
                addressTwo: action.payload,
            }

        case UPDATE_ADDRESS_THREE:
            return {
                ...state,
                addressThree: action.payload,
            }

        case UPDATE_FIRST_NAME:
            return {
                ...state,
                firstName: action.payload,
            }

        case UPDATE_LAST_NAME:
            return {
                ...state,
                lastName: action.payload,
            }

        default:
            return state
    }
}

export default reducer
