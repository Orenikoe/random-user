import React from 'react';
import {UserContext, ButtonContext} from '../../UserContext';
import { useContext } from 'react';


export const EditArea = (props) => {
	const { clickToggle } = useContext(ButtonContext)
	const { setUserIsEdited} = useContext(UserContext)


	const {
		data: { email },
		data: {
			name: { title, first },
		},
	} = props;

	return (
		<div>
			<input
				type="text"
				name="title"
				placeholder={title}
				onChange={(event) => {
					setUserIsEdited(true);
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
					setUserIsEdited(true);
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
					setUserIsEdited(true)
					props.edit((prevState) => {
						return {
							...prevState,
							[event.target.name]: event.target.value,
						};
					});
				}}
			/>
			<button onClick={() =>{
				clickToggle()
				props.setInLocalStorage()}}>Save Changes</button>
		</div>
	);
};
