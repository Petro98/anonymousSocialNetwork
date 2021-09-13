import React from 'react';
import 'antd/dist/antd.css';
import { Spin, Space } from 'antd';

const Loading = () => {
	return (
		<Space size='middle'>
			<Spin size='small' />
			<Spin size='large' />
		</Space>
	);
};

export default Loading;
