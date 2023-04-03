import { IMusic } from './IMusic'

export interface IPlaylist {
	_id: number
	name: string
	tracks: IMusic[]
	BackgroundColor?: string
}