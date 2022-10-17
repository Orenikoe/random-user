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
			<input type="text" id="title" placeholder={title} />
			<input type="text" id="name" placeholder={first} />
			<input type="text" id="email" placeholder={email} />
			<button
				onClick={() => {
					props.edit((prevState) => {
						return {
							...prevState,
							email: document.getElementById('email').value,
							name: {
								title: document.getElementById('title').value,
								first: document.getElementById('name').value,
							},
						};
					});
				}}
			>
				Save Changes
			</button>
		</div>
	);
};

// export default EditArea;
