import { useAppSelector } from '@/app/hooks/selector.hook'
import Layout from '../../layout/Layout'
import HomeAll from './blocks/HomeAll'
import HomeChart from './blocks/HomeChart'
import HomeMood from './blocks/HomeMood'
import HomeNewReleases from './blocks/HomeNewReleases'
import HomeMenu from './menu/HomeMenu'

const Home = () => {
	const { activeBlock } = useAppSelector(state => state.handleBlock)
	return (
		<Layout>
			<div className='px-[30px] py-[20px] mt-12'>
				<h1 className='text-5xl text-white font-bold'>Home</h1>
				<HomeMenu />
				{activeBlock === 'All' && <HomeAll />}
				{activeBlock === 'NewReleases' && <HomeNewReleases />}
				{activeBlock === 'Chart' && <HomeChart />}
				{activeBlock === 'Mood' && <HomeMood />}
			</div>
		</Layout>
	)
}

export default Home
