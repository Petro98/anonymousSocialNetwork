// import React from 'react'
import Loading from '../../../UI/Loading';
import s from './ProfaileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfaileInfo = props => {
	const { status, updateStatus } = props;
	if (!props.profile) {
		return <Loading />;
	}
	return (
		<div className={s.block}>
			<img
				className={s.img}
				src={
					props.profile.photos.large ||
					'https://livestartpage.com/gallery/themes/68fc5e7beb19f06b346dfb53c5bd292c/poster.png'
				}
				alt=''
			/>
			<div className={s.info}>
				<ProfileStatus status={status} updateStatus={updateStatus}  />
			</div>
		</div>
	);
};

export default ProfaileInfo;
