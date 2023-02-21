import { Avatar } from '@mui/material'
import Link from 'next/link'

const HeaderProfile = () => {
	return (
		<div className='w-[30%] '>
			<Link className='float-right' href='/profile'>
				<Avatar alt='user' src='' />
			</Link>
		</div>
	)
}

export default HeaderProfile
