import { useActions } from '@/app/hooks/actions.hook'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { FC, useState } from 'react'
import { TbPlus } from 'react-icons/tb'

const CreatePlaylist: FC = () => {
	const [hover, setHover] = useState(false)
	const { createPlaylist } = useActions()
	const { creatingPlaylistArray } = useAppSelector(
		state => state.creatingPlaylist
	)

	const playlist_creator = () => {
		createPlaylist({
			_id: creatingPlaylistArray.length + 1,
			name: 'New playlist ' + (creatingPlaylistArray.length + 1),
			tracks: [],
			BackgroundColor:
				'#' +
				(Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
		})
	}

	return (
		<li
			onClick={playlist_creator}
			className='cursor-pointer'
			onMouseLeave={() => {
				setHover(false)
			}}
			onMouseEnter={() => {
				setHover(true)
			}}
		>
			<div className='bg-[#222222] flex justify-center items-center w-[200px] h-[200px]'>
				<TbPlus
					className={
						hover
							? 'text-[#A7A7A7] w-20 h-20 transition-colors'
							: 'text-[#575757] w-20 h-20 transition-colors'
					}
				/>
			</div>
		</li>
	)
}

export default CreatePlaylist
