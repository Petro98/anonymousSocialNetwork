// import React from 'react'
import s from './ProfaileInfo.module.css'

const ProfaileInfo = (props) => {
	return ( 
		<div className={s.block}>
			<img className={s.img} src='https://livestartpage.com/gallery/themes/68fc5e7beb19f06b346dfb53c5bd292c/poster.png' />
			<div className ={s.info}>Anonymous is a decentralized international activist/hacktivist collective/movement widely known for its various cyber attacks against several governments, government institutions and government agencies, corporations, and the Church of Scientology. </div>
		</div>
	)
}

export default ProfaileInfo