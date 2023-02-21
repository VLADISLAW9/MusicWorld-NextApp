import Link from 'next/link'

type Props = {}

const HeaderLogo = (props: Props) => {
	return (
		<div className='w-[20%]'>
			<Link href='/' className='text-white font-bold text-2xl tracking-wider'>
				Music World
			</Link>
		</div>
	)
}

export default HeaderLogo
