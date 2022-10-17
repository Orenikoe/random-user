import React from 'react';

export const EditArea = (props) => {
	const {
		data: { email },
		data: {
			name: { title, first },
		},
	} = props;
	

	return (
		<div>
			<input type="text" id="title" placeholder={title} onChange={(event) => {
					props.edit(
                        document.getElementById('title').value,
                     event
                    );
				}} />
			<input type="text" id="first" placeholder={first} onChange={(event) => {
					props.edit(
                        document.getElementById('first').value,
                        event
                       
                    );
				}} />
			<input type="text" id="email" placeholder={email} onChange={(event) => {
					props.edit(
                        document.getElementById('email').value,
                        event
                    );
				}} />
			<button
				onClick={() => {props.save()
					// props.edit(
                    //     document.getElementById('title').value,
                    //     document.getElementById('name').value,
                    //     document.getElementById('email').value,
                    // );
				}}
			>
				Save Changes
			</button>
		</div>
	);
};

// export default EditArea;
