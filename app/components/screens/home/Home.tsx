import { useAppSelector } from '@/app/hooks/selector.hook'
import { IMusicProps } from '@/pages'
import { FC } from 'react'
import Layout from '../../layout/Layout'
import All from './blocks/all/All'
import Chart from './blocks/chart/HomeChart'
import Mood from './blocks/mood/Mood'
import NewReleases from './blocks/releases/NewReleases'
import HomeMenu from './menu/HomeMenu'

const Home: FC<IMusicProps> = ({ newRelease }) => {
	const { activeBlock } = useAppSelector(state => state.handleBlock)

	return (
		<Layout>
			<div className='px-[30px] py-[20px] mt-12'>
				<h1 className='text-5xl text-white font-bold'>Home</h1>
				<HomeMenu />
				{activeBlock === 'All' && <All newRelease={newRelease} />}
				{activeBlock === 'NewReleases' && <NewReleases />}
				{activeBlock === 'Chart' && <Chart />}
				{activeBlock === 'Mood' && <Mood />}
			</div>
		</Layout>
	)
}

export default Home
