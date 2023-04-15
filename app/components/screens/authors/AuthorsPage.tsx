import { IAuthorProps } from '@/pages/author/[id]'
import { FC } from 'react'
import Layout from '../../layout/Layout'

const AuthorsPage: FC<IAuthorProps> = ({ author }) => {
	return <Layout>{author.name}</Layout>
}

export default AuthorsPage
