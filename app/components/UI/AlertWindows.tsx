import * as React from 'react'
import { FC } from 'react'
import { BsCheck2Circle } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'

const AlertWindows: FC = () => {
	const [open, setOpen] = React.useState(true)

	return (
		<div className='absolute  bottom-28 right-[620px] z-50'>
			{open && (
				<div>
					<ul className='bg-[#585858] p-2 flex items-center  overflow-y-scroll max-h-[200px]'>
						<li className='mr-3'>
							<BsCheck2Circle className='w-5 h-5 text-white' />
						</li>
						<li className='mr-3'>
							<h1 className='text-white text-sm '>Track add to playlist</h1>
						</li>
						<li
							className='cursor-pointer'
							onClick={() => {
								setOpen(false)
							}}
						>
							<MdClose className='w-4 h-4 text-white' />
						</li>
					</ul>
				</div>
			)}
		</div>
	)
}

export default AlertWindows
