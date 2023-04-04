import { useActions } from '@/app/hooks/actions.hook'
import { useOutside } from '@/app/hooks/outside.hook'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { IPlaylist } from '@/app/types/IPlaylist'
import { FC, useEffect, useState } from 'react'
import { BiCheck } from 'react-icons/bi'
import { BsMusicNoteList } from 'react-icons/bs'
import { HiOutlinePencil } from 'react-icons/hi'
import { MdClose, MdDeleteOutline } from 'react-icons/md'

interface PlaylistItemProps {
	playlist: IPlaylist
}

const PlaylistItem: FC<PlaylistItemProps> = ({ playlist }) => {
	const [hover, setHover] = useState(false)
	const [state, setState] = useState(false)
	const { openPlaylistMenu } = useActions()
	const { ref, isShow, setIsShow } = useOutside(false)
	const { renamePlaylistName, renameActivePlaylist, deletePlaylist } =
		useActions()
	const [nameEditor, setNameEditor] = useState(playlist.name)
	const { activePlaylist } = useAppSelector(state => state.playlistMenu)

	useEffect(() => {
		if (!isShow) {
			setNameEditor(playlist.name)
		}
	}, [isShow])

	const openEditPlaylistName = () => {
		setIsShow(true)
	}

	const editPlaylistName = (e: any) => {
		e.preventDefault()
		setNameEditor(e.target.value)
	}

	const submitNewPlaylistName = (e: any) => {
		e.preventDefault()
		renamePlaylistName({ newName: nameEditor, playlist })
		setIsShow(false)
		if (activePlaylist?._id === playlist._id) {
			renameActivePlaylist(nameEditor)
		}
	}

	const openPlaylist = () => {
		if (playlist.name === 'New playlist') {
			openPlaylistMenu({
				_id: playlist._id,
				name: playlist.name,
				tracks: playlist.tracks
			})
		} else {
			openPlaylistMenu({
				_id: playlist._id,
				name: playlist.name,
				tracks: playlist.tracks
			})
		}
	}

	const deletePlaylistFromArray = () => {
		deletePlaylist(playlist)
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
						? 'flex justify-center items-center opacity-80 '
						: 'flex justify-center items-center '
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
							<h1 className='mt-2 text-white font-light'>{playlist.name}</h1>
						</>
					) : (
						<div ref={ref} className='flex items-center'>
							<form onSubmit={e => submitNewPlaylistName(e)}>
								<input
									type='text'
									autoFocus
									value={nameEditor}
									onChange={editPlaylistName}
									placeholder='Type new name'
									className='mt-2 w-32 placeholder:text-[16px] placeholder:text-white/50 outline-none border-b border-white/50 font-light text-white  bg-[#181818]'
								/>
							</form>
							<button
								onClick={() => {
									renamePlaylistName({ newName: nameEditor, playlist })
									setIsShow(false)
									if (activePlaylist?._id === playlist._id) {
										renameActivePlaylist(nameEditor)
									}
								}}
								className='ml-2'
							>
								<BiCheck className='w-7 h-7 text-white/50 hover:text-white transition-colors translate-y-1 ' />
							</button>
							<button
								onClick={() => {
									setIsShow(false)
								}}
								className='ml-1'
							>
								<MdClose className='w-6 h-6 text-white/50 hover:text-white transition-colors translate-y-[5px] ' />
							</button>
						</div>
					)}
				</li>
				{hover && (
					<>
						{!isShow ? (
							<ul className='flex'>
								<li
									onClick={openEditPlaylistName}
									className='translate-y-[4px] ml-3 cursor-pointer'
								>
									<HiOutlinePencil className='w-4 h-4 text-white/50 hover:text-white' />
								</li>
								<li
									onClick={deletePlaylistFromArray}
									className='translate-y-[4px] ml-2 cursor-pointer'
								>
									<MdDeleteOutline className='w-4 h-4 text-red-600/60 hover:text-red-600' />
								</li>
							</ul>
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
