import { IMusicProps } from '@/pages'
import { FC } from 'react'
import MyWave from './all_animation/MyWave'
import AllChart from './all__chart/AllChart'
import AllNewReleases from './all__releases/AllNewReleases'
import Listened from './listened/Listened'

const All: FC<IMusicProps> = ({ newRelease }) => {
	return (
		<div>
			<MyWave />
			<AllNewReleases newRelease={newRelease} />
			<AllChart newRelease={newRelease} />
			<Listened newRelease= {newRelease}/>
		</div>
	)
}

export default All
