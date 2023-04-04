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

	console.log(creatingPlaylistArray)

	const playlist_creator = () => {
		let random_id = Math.random() * 1000
		let playlist_number = creatingPlaylistArray.length + 1
		// Проверяем, что id уникален
		while (creatingPlaylistArray.some(playlist => playlist._id === random_id)) {
			random_id = Math.random() * 1000
		}
		// Проверяем, что имя уникально
		let playlist_name = 'New playlist ' + playlist_number
		while (
			creatingPlaylistArray.some(playlist => playlist.name === playlist_name)
		) {
			playlist_number += 1
			playlist_name = 'New playlist ' + playlist_number
		}
		createPlaylist({
			_id: random_id,
			name: playlist_name,
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
