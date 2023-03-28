import { useActions } from '@/app/hooks/actions.hook'
import { IPlaylist } from '@/app/types/IPlaylist'
import { FC, useState } from 'react'
import { BsMusicNoteList } from 'react-icons/bs'

interface PlaylistItemProps {
	index: number
	playlist: IPlaylist
}

const PlaylistItem: FC<PlaylistItemProps> = ({ playlist, index }) => {
	const [hover, setHover] = useState(false)
	const [state, setState] = useState(false)
	const { openPlaylistMenu } = useActions()

	const openPlaylist = () => {
		openPlaylistMenu({
			_id: playlist._id,
			name: playlist.name + ` ${index + 1}`,
			tracks: playlist.tracks
		})
	}

	return (
		<li
			onClick={openPlaylist}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => {
				setHover(false)
			}}
			className='relative cursor-pointer'
		>
			<div
				className='flex justify-center items-center'
				style={{
					width: '200px',
					height: '200px',
					backgroundColor: playlist.BackgroundColor
				}}
			>
				<BsMusicNoteList className='text-white w-16 h-16' />
			</div>
			{playlist.name === 'New playlist' ? (
				<h1 className='mt-2 text-white font-light'>{`${playlist.name} ${
					index + 1
				}`}</h1>
			) : (
				<></>
			)}
		</li>
	)
}

export default PlaylistItem
