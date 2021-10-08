import React from 'react';

class ProfileStatus extends React.Component {
	state = {
		editMode: true,
		status: this.props.status,
	};
	activateEditMode = () => {
		this.setState({ editMode: false });
	};
	deactivateEditMode = () => {
		this.setState({ editMode: true });
		this.props.updateStatus(this.state.status);
	};
	onStatusChang = e => {
		this.setState({ status: e.currentTarget.value });
	};
	componentDidUpdate(prevProps, nextProps) {
		if (prevProps.status !== this.props.status) {
			this.setState({ status: this.props.status });
		}
	}
	render() {
		return (
			<div style={{borderLeft: '4px solid #48bfe3' , paddingLeft: '5px'}}>
				<p
					style={{
						fontSize: '14px',
						textAlign: 'left',
						margin: '0px',
						fontStyle: 'italic',
						color: '#000000',
					}}
				>
					Status
				</p>
				{this.state.editMode ? (
					<div>
						<span
							onDoubleClick={this.activateEditMode}
							style={{ cursor: 'pointer' ,borderBottom: '1px solid #48bfe3'}}
						>
							{this.props.status || 'No Status'}
						</span>
					</div>
				) : (
					<div>
						<input
							onChange={this.onStatusChang}
							autoFocus={true}
							onBlur={this.deactivateEditMode}
							value={this.state.status}
							id='edit'
							style={{
								paddingLeft: '10px',
								borderRadius: '15px',
								padding: '2px',
								boxShadow:
									' 0 2px 6px black',
							}}
						/>
					</div>
				)}
			</div>
		);
	}
}

export default ProfileStatus;
