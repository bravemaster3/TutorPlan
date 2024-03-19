import React from 'react'
import { GenerateComponents, InputField } from './Primitives'
import { inputFieldData } from '../constants'

const test = () => {
	return (
		<GenerateComponents componentType={InputField} data={formFields} />

	)
}

export default test
