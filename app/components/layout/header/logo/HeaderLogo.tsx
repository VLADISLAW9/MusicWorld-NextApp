import Link from 'next/link'
import React from 'react'

type Props = {}

const HeaderLogo = (props: Props) => {
	return <Link href='/' className='text-white font-bold text-2xl tracking-wider'>Music World</Link>
}

export default HeaderLogo