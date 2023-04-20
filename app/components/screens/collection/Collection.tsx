import { useAppSelector } from '@/app/hooks/selector.hook'
import { IMusicProps } from '@/pages'
import { Avatar } from '@mui/material'
import { FC } from 'react'
import Layout from '../../layout/Layout'
import CollectionMenu from './menu/CollectionMenu'
import Playlists from './playlists/Playlists'
import Podcasts from './podcasts/Podcasts'
import Story from './story/Story'

import Tracks from './tracks/Tracks'

const Collection: FC<IMusicProps> = ({ music }) => {
	const { activeCollection } = useAppSelector(state => state.handleCollection)

	return (
		<Layout>
			<div className='px-[30px] py-[20px] mt-3'>
				<div className='flex'>
					<Avatar className='w-52 h-52' alt='user' src='' />
					<div className='ml-10'>
						<p className='text-white/40 font-light text-xl'>Collection</p>
						<h1 className='text-4xl font-bold text-white mt-3'>Username</h1>
					</div>
				</div>
				<CollectionMenu />
				{activeCollection === 'Tracks' && <Tracks />}
				{activeCollection === 'Playlists' && <Playlists />}
				{activeCollection === 'Story' && <Story />}
				{activeCollection === 'Podcasts' && <Podcasts />}
			</div>
		</Layout>
	)
}

export default Collection
