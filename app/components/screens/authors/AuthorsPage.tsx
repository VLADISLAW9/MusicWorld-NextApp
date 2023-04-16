import { IAuthorProps } from '@/pages/author/[id]'
import { FC } from 'react'
import Layout from '../../layout/Layout'
import { Avatar } from '@mui/material'

const AuthorsPage: FC<IAuthorProps> = ({ author }) => {
	return (
		<Layout>
			<div className='px-[30px] py-[20px] mt-3'>
				<div className='flex'>
					<Avatar className='w-48 h-48' alt='user' src={author.avatar} />
					<div className='ml-10'>
						<p className='text-white/40 font-light text-xl'>Artist</p>
						<h1 className='text-4xl font-bold text-white mt-3'>
							{author.name}
						</h1>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default AuthorsPage
