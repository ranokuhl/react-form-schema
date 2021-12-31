import './App.css'
import Form from 'react-jsonschema-form'

const schema = {
	title: 'A registration form',
	description: 'A simple form example.',
	type: 'object',
	required: ['firstName', 'lastName'],
	properties: {
		firstName: {
			type: 'string',
			title: 'First name',
			default: 'Chuck',
		},
		lastName: {
			type: 'string',
			title: 'Last name',
		},
		telephone: {
			type: 'string',
			title: 'Telephone',
			minLength: 10,
		},
	},
}

function App() {
	return (
		<div className='App'>
			<Form
				schema={schema}
				onSubmit={({FormData}) =>
					alert(JSON.stringify(FormData, null, 2))
				}
			></Form>
		</div>
	)
}

export default App
