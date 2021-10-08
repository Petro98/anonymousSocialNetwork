import classes from './FormsControls.module.css';
export const Textarea = ({ input, meta, ...props }) => {
	let hasError = meta.error && meta.touched && meta.active;
	return (
		<div className={classes.content}>
			<textarea
				{...input}
				placeholder={props.placeholder}
				className={
					(hasError ? classes.styleError : null) + ' ' + classes.content
				}
			/>
			<span
				className={hasError ? classes.span : classes.spanNull}
			>
				{meta.error}
			</span>
		</div>
	);
};

export const Input = ({ input, meta, ...props }) => {
	let hasError = meta.error && meta.touched
	return (
		<div className={classes.content}>
			<input
				{...input}
				placeholder={props.placeholder}
				className={
					(hasError ? classes.styleError : null) + ' ' + classes.content
				}
			/>
			<span
				className={hasError ? classes.span : classes.spanNull}
			>
				{meta.error}
			</span>
		</div>
	);
};
