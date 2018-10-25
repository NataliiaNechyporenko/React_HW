import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, name, value, placeholder, onChange, cls }) => (
	<input
		type={type}
		name={name}
		value={value}
		placeholder={placeholder}
		onChange={onChange}
		className={cls}
	/>
);

Input.propTypes = {
	name: PropTypes.string,
	value: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	cls: PropTypes.string,
	onChange: PropTypes.func,
};

Input.defaultProps = {
	name: '',
	value: '',
	type: 'text',
	placeholder: '',
	cls: '',
	onChange: () => null,
};

export default Input;
