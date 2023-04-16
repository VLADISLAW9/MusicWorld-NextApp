import { IMusic } from './IMusic'
import { IPlaylist } from './IPlaylist'

export interface IAuthor {
	_id: number
	name: string
	avatar?: string
	tracks: IMusic[]
	playlist: IPlaylist[]
	genre: string[]
}
