import React from 'react'

// formik
import { Field, ErrorMessage } from 'formik';

function FormField(props) {

	return (
		<div 
			style={{'display': 'flex', 'flexDirection': 'column'}}
			className={props.fieldDivClass}
		>
			<label style={{'marginLeft': '15px'}}>
				{props.label}
				<ErrorMessage
					name={props.name}
					component="span"
					className={props.errorClass}
				/>
			</label>
			<Field
				component = {props.component}
				type={props.type}
				name={props.name}
				className={props.fieldClass}
				placeholder={props.placeholder}
			/>
		</div>
	)

}

export default FormField

