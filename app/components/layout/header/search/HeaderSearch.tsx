import { FC, useState } from 'react'
import { FiSearch } from 'react-icons/fi'

const HeaderSearch: FC = () => {
	const [active, isActive] = useState(false)

	const handleClick = () => {
		isActive()
	}

	return (
		<div>
			<button onClick={handleClick}>
				<FiSearch className='translate-y-1 w-5 h-5 text-white/50 hover:text-white transition-colors' />
			</button>
			{active && (
				<input
					placeholder='You searching for...'
					className='placeholder:text-[14px] placeholder:text-white/50 outline-none border-b border-white/50 text-[14px] text-white relative left-2 bg-[#181818]'
				/>
			)}
		</div>
	)
}

export default HeaderSearch
