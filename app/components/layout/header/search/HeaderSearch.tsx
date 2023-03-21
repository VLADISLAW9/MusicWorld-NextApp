import { useOutside } from '@/app/hooks/outside.hook'
import { FC } from 'react'
import { FiSearch } from 'react-icons/fi'

const HeaderSearch: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)

	return (
		<div>
			<button
				onClick={() => {
					setIsShow(!isShow)
				}}
			>
				<FiSearch className='translate-y-1 w-5 h-5 text-white/50 hover:text-white transition-colors' />
			</button>
			{isShow && (
				<input
					type='text'
					autoFocus
					ref={ref}
					placeholder='You searching for...'
					className='placeholder:text-[14px] placeholder:text-white/50 outline-none border-b border-white/50 text-[14px] text-white relative left-2 bg-[#181818]'
				/>
			)}
		</div>
	)
}

export default HeaderSearch
