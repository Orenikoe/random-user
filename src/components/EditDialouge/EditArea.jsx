import React from 'react';

export const EditArea = (props) => {
	const {
		data: { email },
		data: {
			name: { title, first },
		},
	} = props;
	console.log(props.data);

	return (
		<div>
			<input
				type="text"
				name="title"
				placeholder={title}
				onChange={(event) => {
					props.edit((prevState) => {
						return {
							...prevState,
							name: {...prevState.name,
								[event.target.name]: event.target.value,
							},
						};
					});
				}}
			/>
			<input
				type="text"
				name="first"
				placeholder={first}
				onChange={(event) => {
					props.edit((prevState) => {
						return {
							...prevState,
							name: {...prevState.name,
								[event.target.name]: event.target.value,
								
							},
						};
					});
				}}
			/>
			<input
				type="text"
				name="email"
				placeholder={email}
				onChange={(event) => {
					props.edit((prevState) => {
						return {
							...prevState,
							[event.target.name]: event.target.value,
						};
					});
				}}
			/>
			<button onClick={props.setInLocalStorage}>Save Changes</button>
		</div>
	);
};
