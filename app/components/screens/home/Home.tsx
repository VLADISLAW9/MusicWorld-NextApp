import { useAppSelector } from '@/app/hooks/selector.hook'
import { IMusicProps } from '@/pages'
import { FC } from 'react'
import Layout from '../../layout/Layout'
import All from './blocks/all/All'
import Chart from './blocks/chart/Chart'
import Mood from './blocks/mood/Mood'
import NewReleases from './blocks/releases/NewReleases'
import HomeMenu from './menu/HomeMenu'

const Home: FC<IMusicProps> = ({ music }) => {
	const { activeBlock } = useAppSelector(state => state.handleBlock)

	return (
		<Layout music={music}>
			<div className='px-[30px] py-[20px] mt-12'>
				<h1 className='text-5xl text-white font-bold'>Home</h1>
				<HomeMenu />
				{activeBlock === 'All' && <All music={music} />}
				{activeBlock === 'NewReleases' && <NewReleases music={music} />}
				{activeBlock === 'Chart' && <Chart music={music} />}
				{activeBlock === 'Mood' && <Mood music={music} />}
			</div>
		</Layout>
	)
}

export default Home
