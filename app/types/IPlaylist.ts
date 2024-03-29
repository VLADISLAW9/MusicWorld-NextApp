import { IMusic } from './IMusic'

export interface IPlaylist {
	_id: number
	name: string
	tracks: IMusic[]
	image?: string
	author?: any
	BackgroundColor?: string
	release?: number
}
