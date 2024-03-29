import { useAppSelector } from '@/app/hooks/selector.hook'
import { IAuthor } from '@/app/types/IAuthor'
import { IMusic } from '@/app/types/IMusic'
import { FC } from 'react'
import Layout from '../../layout/Layout'
import All from './blocks/all/All'
import Authors from './blocks/authors/Authors'
import Chart from './blocks/chart/Chart'
import Mood from './blocks/mood/Mood'
import NewReleases from './blocks/releases/NewReleases'
import HomeMenu from './menu/HomeMenu'

interface IHomeProps {
	music: IMusic[]
	authors: IAuthor[]
}

const Home: FC<IHomeProps> = ({ music, authors }) => {
	const { activeBlock } = useAppSelector(state => state.handleBlock)

	return (
		<Layout music={music}>
			<div className='px-[30px] py-[20px] mt-12'>
				<h1 className='text-5xl text-white font-bold'>Home</h1>
				<HomeMenu />
				{activeBlock === 'All' && <All authors={authors} music={music} />}
				{activeBlock === 'NewReleases' && (
					<NewReleases authors={authors} music={music} />
				)}
				{activeBlock === 'Chart' && <Chart authors={authors} music={music} />}
				{activeBlock === 'Mood' && (
					<Mood authors={authors} music={music} />
				)}
				{activeBlock === 'Authors' && (
					<Authors music={music} authors={authors} />
				)}
			</div>
		</Layout>
	)
}

export default Home
