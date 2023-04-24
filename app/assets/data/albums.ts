import { IPlaylist } from '@/app/types/IPlaylist'
import { music } from './music'

function getTrackForAlbum(album: string) {
	return music.filter(m => m.album === album)
}

export const albums: IPlaylist[] = [
	{
		_id: 100,
		name: 'Байполар',
		tracks: getTrackForAlbum('Байполар'),
		author: 'Три дня дождя',
		image:
			'//avatars.yandex.net/get-music-content/7548376/d9d2bed5.a.23955782-1/200x200'
	}
]
