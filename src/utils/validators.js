export const required = value => (value ? undefined : 'Field is required');

export const maxLengthCreator = value => {
	if (value.length > 20) {
		return `Max length is 20 symbol`;
	}
	return undefined;
};
