import { useActions } from '@/app/hooks/actions.hook'
import { useOutside } from '@/app/hooks/outside.hook'
import { IPlaylist } from '@/app/types/IPlaylist'
import { FC, useState } from 'react'
import { BsMusicNoteList } from 'react-icons/bs'
import { HiOutlinePencil } from 'react-icons/hi'

interface PlaylistItemProps {
	index: number
	playlist: IPlaylist
}

const PlaylistItem: FC<PlaylistItemProps> = ({ playlist, index }) => {
	const [hover, setHover] = useState(false)
	const [state, setState] = useState(false)
	const { openPlaylistMenu } = useActions()
	const { ref, isShow, setIsShow } = useOutside(false)

	const editPlaylistName = () => {
		setIsShow(true)
	}

	const openPlaylist = () => {
		openPlaylistMenu({
			_id: playlist._id,
			name: playlist.name + ` ${index + 1}`,
			tracks: playlist.tracks
		})
	}

	return (
		<li
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => {
				setHover(false)
			}}
			className='relative cursor-pointer'
		>
			<div
				onClick={openPlaylist}
				className={
					hover
						? 'flex justify-center items-center opacity-80'
						: 'flex justify-center items-center'
				}
				style={{
					width: '200px',
					height: '200px',
					backgroundColor: playlist.BackgroundColor
				}}
			>
				<BsMusicNoteList className='text-white w-16 h-16' />
			</div>
			<ul className='flex items-center'>
				<li ref={ref}>
					{!isShow ? (
						<>
							{playlist.name === 'New playlist' ? (
								<h1 className='mt-2 text-white font-light'>{`${playlist.name} ${
									index + 1
								}`}</h1>
							) : (
								<h1 className='mt-2 text-white font-light'>${playlist.name}</h1>
							)}
						</>
					) : (
						<>
							<input
								type='text'
								autoFocus
								ref={ref}
								placeholder='Type new name'
								className='mt-2 placeholder:text-[14px] placeholder:text-white/50 outline-none border-b border-white/50 text-[14px] text-white  bg-[#181818]'
							/>
						</>
					)}
				</li>
				{hover && (
					<>
						{!isShow ? (
							<li
								onClick={editPlaylistName}
								className='translate-y-[3px] ml-2 cursor-pointer'
							>
								<HiOutlinePencil className='w-4 h-4 text-white/50 hover:text-white' />
							</li>
						) : (
							<></>
						)}
					</>
				)}
			</ul>
		</li>
	)
}

export default PlaylistItem
