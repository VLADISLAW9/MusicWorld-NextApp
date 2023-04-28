import { IMusicProps } from '@/pages'
import { FC } from 'react'
import MyWave from './all_animation/MyWave'
import AllAuthors from './all_authors/AllAuthors'
import AllChart from './all__chart/AllChart'
import AllMood from './all__mood/AllMood'
import AllNewReleases from './all__releases/AllNewReleases'
import Listened from './listened/Listened'

const All: FC<IMusicProps> = ({ music, authors }) => {
	return (
		<div>
			<MyWave authors={authors} music={music} />
			<AllNewReleases authors={authors} music={music} />
			<AllChart music={music} />
			<AllAuthors authors={authors} />
			<Listened />
			<AllMood />
		</div>
	)
}

export default All
