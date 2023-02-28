import { IMusicProps } from '@/pages'
import { FC } from 'react'
import MyWave from './all_animation/MyWave'
import AllChart from './all__chart/AllChart'
import AllNewReleases from './all__releases/AllNewReleases'

const All: FC<IMusicProps> = ({ newRelease }) => {
	return (
		<div>
			<MyWave />
			<AllNewReleases newRelease={newRelease} />
			<AllChart />
		</div>
	)
}

export default All
