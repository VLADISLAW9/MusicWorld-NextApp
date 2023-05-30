import { IAuthor } from '@/app/types/IAuthor'
import { albums } from './albums'
import { music } from './music'

function getAuthorTrack(author: string) {
	return music.filter(m => m.author === author)
}

function getAuthorAlbums(author: string) {
	return albums.filter(a => a.author === author)
}

export const authors: IAuthor[] = [
	{
		_id: 1,
		name: 'Три дня дождя',
		avatar:
			'https://avatars.yandex.net/get-music-content/6300975/2d02fa1e.p.8095900/200x200',
		playlist: getAuthorAlbums('Три дня дождя'),
		tracks: getAuthorTrack('Три дня дождя'),
		genre: ['rock', 'metal']
	},

	{
		_id: 2,
		name: 'CMH',
		avatar:
			'https://avatars.yandex.net/get-music-content/8871869/3ce348ff.p.5824240/200x200',
		playlist: getAuthorAlbums('CMH'),
		tracks: getAuthorTrack('CMH'),
		genre: ['pop', 'rap']
	},
	{
		_id: 3,
		name: 'DEAD BLONDE',
		avatar:
			'https://avatars.yandex.net/get-music-content/5314916/f32c640c.p.8739954/200x200',
		playlist: getAuthorAlbums('DEAD BLONDE'),
		tracks: getAuthorTrack('DEAD BLONDE'),
		genre: ['pop']
	},
	{
		_id: 4,
		name: 'Kordhell',
		avatar:
			'//avatars.yandex.net/get-music-content/6214856/8d7d0433.a.22899046-1/200x200',
		playlist: getAuthorAlbums('Kordhell'),
		tracks: getAuthorTrack('Kordhell'),
		genre: ['house', 'edm']
	},
	{
		_id: 5,
		name: 'DVRST',
		avatar:
			'https://avatars.yandex.net/get-music-content/7852894/60c51f1f.p.8887635/200x200',
		playlist: getAuthorAlbums('DVRST'),
		tracks: getAuthorTrack('DVRST'),
		genre: ['house', 'edm']
	},
	{
		_id: 6,
		name: 'LIZER',
		avatar:
			'https://avatars.yandex.net/get-music-content/6447985/7e7702c0.p.795224/200x200',
		playlist: getAuthorAlbums('LIZER'),
		tracks: getAuthorTrack('LIZER'),
		genre: ['rap']
	},
	{
		_id: 7,
		name: 'Leony',
		avatar:
			'https://avatars.mds.yandex.net/i?id=df9e8addd3f72e95e0e085a491815cff08f52e99-7594176-images-thumbs&n=3&w=200&h=200&q=100',
		playlist: getAuthorAlbums('Leony'),
		tracks: getAuthorTrack('Leony'),
		genre: ['pop']
	},
	{
		_id: 8,
		name: 'MACAN',
		avatar:
			'https://avatars.yandex.net/get-music-content/8871869/5c688b36.p.3892062/200x200',
		playlist: getAuthorAlbums('MACAN'),
		tracks: getAuthorTrack('MACAN'),
		genre: ['rap']
	},
	{
		_id: 9,
		name: 'FindMyName',
		avatar:
			'https://avatars.yandex.net/get-music-content/7852894/0b476754.p.12495648/200x200',
		playlist: getAuthorAlbums('FindMyName'),
		tracks: getAuthorTrack('FindMyName'),
		genre: ['house', 'edm']
	},
	{
		_id: 10,
		name: 'Скриптонит',
		avatar:
			'https://avatars.yandex.net/get-music-content/4404215/20ad8984.p.3246342/200x200',
		playlist: getAuthorAlbums('Скриптонит'),
		tracks: getAuthorTrack('Скриптонит'),
		genre: ['rap']
	},
	{
		_id: 11,
		name: 'KYIVSTONER',
		avatar:
			'https://avatars.yandex.net/get-music-content/98892/6e840c57.p.5472000/200x200',
		playlist: getAuthorAlbums('KYIVSTONERKYIVSTONER'),
		tracks: getAuthorTrack('KYIVSTONERKYIVSTONER'),
		genre: ['pop', 'rap']
	},
	{
		_id: 12,
		name: 'REDZED',
		avatar:
			'https://avatars.mds.yandex.net/i?id=db625946b3f6eca3940a20fe76db925223fcbbed-9181306-images-thumbs&n=3&w=200&h=200&q=100',
		playlist: getAuthorAlbums('REDZED'),
		tracks: getAuthorTrack('REDZED'),
		genre: ['metal', 'rock']
	},
	{
		_id: 13,
		name: 'Мэйби Бэйби',
		playlist: getAuthorAlbums('Мэйби Бэйби'),
		avatar:
			'https://avatars.yandex.net/get-music-content/6202531/307a55a2.p.6019372/200x200',
		tracks: getAuthorTrack('Мэйби Бэйби'),
		genre: ['pop']
	},
	{
		_id: 14,
		name: 'Дурной Вкус',
		playlist: getAuthorAlbums('Дурной Вкус'),
		tracks: getAuthorTrack('Дурной Вкус'),
		avatar:
			'https://avatars.yandex.net/get-music-content/8316823/4c429d70.p.6269258/200x200',
		genre: ['pop']
	},
	{
		_id: 15,
		name: 'Улица Восток',
		playlist: getAuthorAlbums('Улица Восток'),
		avatar:
			'https://avatars.mds.yandex.net/i?id=f125bf1a4d2d7a54fbcb1ae17b37ee22ea4a68b7-8280929-images-thumbs&n=3&w=200&h=200&q=100',
		tracks: getAuthorTrack('Улица Восток'),
		genre: ['pop']
	},
	{
		_id: 16,
		name: 'UncleFlexxx',
		playlist: getAuthorAlbums('UncleFlexxx'),
		avatar:
			'https://avatars.yandex.net/get-music-content/4387391/27669cb7.p.10602327/200x200',
		tracks: getAuthorTrack('UncleFlexxx'),
		genre: ['rap', 'pop']
	},
	{
		_id: 17,
		name: 'Big Baby Tape',
		playlist: getAuthorAlbums('Big Baby Tape'),
		avatar:
			'https://avatars.yandex.net/get-music-content/2355477/818d8ba3.p.5701276/200x200',
		tracks: getAuthorTrack('Big Baby Tape'),
		genre: ['rap']
	},
	{
		_id: 18,
		name: 'INSTASAMKA',
		playlist: getAuthorAlbums('INSTASAMKA'),
		avatar:
			'https://avatars.yandex.net/get-music-content/9784575/5c0b94de.p.7461723/200x200',
		tracks: getAuthorTrack('INSTASAMKA'),
		genre: ['rap']
	},
	{
		_id: 19,
		name: 'Король и Шут',
		playlist: getAuthorAlbums('Король и Шут'),
		avatar:
			'https://avatars.yandex.net/get-music-content/95061/1d46a945.p.41052/200x200',
		tracks: getAuthorTrack('Король и Шут'),
		genre: ['pop']
	},
	{
		_id: 20,
		name: 'GAYAZOV$ BROTHER$',
		playlist: getAuthorAlbums('GAYAZOV$ BROTHER$'),
		avatar:
			'https://avatars.yandex.net/get-music-content/5559490/cca7ee9c.p.6229247/200x200',
		tracks: getAuthorTrack('GAYAZOV$ BROTHER$'),
		genre: ['pop', 'rap']
	},
	{
		_id: 21,
		name: 'Miyagi & Эндшпиль',
		playlist: getAuthorAlbums('Miyagi & Эндшпиль'),
		avatar:
			'https://avatars.yandex.net/get-music-content/7548376/e247b650.p.4611844/200x200',
		tracks: getAuthorTrack('Miyagi & Эндшпиль'),
		genre: ['pop', 'rap']
	},
	{
		_id: 22,
		name: 'Miyagi & Andy Panda',
		playlist: getAuthorAlbums('Miyagi & Andy Panda'),
		avatar:
			'https://avatars.yandex.net/get-music-content/4477012/f76465d9.p.6774682/200x200',
		tracks: getAuthorTrack('Miyagi & Andy Panda'),
		genre: ['pop', 'rap']
	},
	{
		_id: 23,
		name: 'kizaru',
		playlist: getAuthorAlbums('kizaru'),
		avatar:
			'https://avatars.yandex.net/get-music-content/2808981/6cb2a174.p.3879764/200x200',
		tracks: getAuthorTrack('kizaru'),
		genre: ['rap']
	},
	{
		_id: 23,
		name: 'xxxmanera',
		playlist: getAuthorAlbums('xxxmanera'),
		avatar:
			'https://avatars.yandex.net/get-music-content/9784575/80cb3c36.p.8548866/200x200',
		tracks: getAuthorTrack('xxxmanera'),
		genre: ['rap']
	}
]
