import HomeListHeader from '@/app/components/UI/HomeListHeader'
import MoodItem from '@/app/components/UI/MoodItem'
import { useActions } from '@/app/hooks/actions.hook'
import { FC } from 'react'
import { BsHeadphones } from 'react-icons/bs'
import { CiLollipop } from 'react-icons/ci'
import { GiGuitar, GiMicrophone } from 'react-icons/gi'
import { MdAlbum } from 'react-icons/md'
import { TbHandRock } from 'react-icons/tb'

const AllMood: FC = () => {
	const { handleBlock } = useActions()

	return (
		<div className='relative mt-28 mb-28'>
			<HomeListHeader
				pageName={'HomePage'}
				link={'Mood'}
				header={'Genres'}
				title={'Choose the genre that you like'}
			/>
			<ul className='flex mt-8 gap-8'>
				<MoodItem
					makeHandleBlock={true}
					genre={'Rap'}
					Icon={GiMicrophone}
					color={'#FFCC00'}
				/>
				<MoodItem
					makeHandleBlock={true}
					genre={'Pop'}
					Icon={CiLollipop}
					color={'#4DD1A2'}
				/>
				<MoodItem
					makeHandleBlock={true}
					genre={'House'}
					Icon={MdAlbum}
					color={'#28BF5B'}
				/>
				<MoodItem
					makeHandleBlock={true}
					genre={'Rock'}
					Icon={TbHandRock}
					color={'#A002EF'}
				/>
				<MoodItem
					makeHandleBlock={true}
					genre={'EDM'}
					Icon={BsHeadphones}
					color={'#016191'}
				/>
				<MoodItem
					makeHandleBlock={true}
					genre={'Metal'}
					Icon={GiGuitar}
					color={'#E3705D'}
				/>
			</ul>
		</div>
	)
}

export default AllMood
