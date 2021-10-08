import { Container, Grid } from '@material-ui/core';
import Loader from 'react-js-loader';

const LoaderOne = () => {
	return (
		<Container style={{ backgroundColor: '#fff' }}>
			<Grid
				container
				style={{ height:'92vh'}}
				alignItems={'center'}
				justifyContent={'center'}
			>
				<Grid container alignItems={'center'} direction={'column'}>
					<div style={{display:'flex'}}>
						<div className={'item'}>
							<Loader
								type='box-rotate-x'
								bgColor={'black'}
								size={120}
							/>
						</div>
						<div className={'item'}>
							<Loader
								type='box-rotate-y'
								bgColor={'black'}
								title={'loading...'}
								color={'black'}
								size={120}
							/>
						</div>
						<div className={'item'}>
							<Loader
								type='box-rotate-z'
								bgColor={'black'}
								size={120}
							/>
						</div>
					</div>
				</Grid>
			</Grid>
		</Container>
	);
};

export default LoaderOne;
