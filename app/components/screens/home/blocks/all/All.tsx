import { IMusicProps } from '@/pages'
import { FC } from 'react'
import MyWave from './all_animation/MyWave'
import AllChart from './all__chart/AllChart'
import AllNewReleases from './all__releases/AllNewReleases'
import Listened from './listened/Listened'

const All: FC<IMusicProps> = ({ music, authors }) => {
	return (
		<div>
			<MyWave authors={authors} music={music} />
			<AllNewReleases authors={authors} music={music} />
			<AllChart authors={authors} music={music} />
			<Listened />
		</div>
	)
}

export default All
