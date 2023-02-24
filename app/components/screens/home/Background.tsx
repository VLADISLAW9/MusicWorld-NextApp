import { FC } from 'react'

const Background: FC = () => {
	return (
		<div className='rup__animation'>
			<div className='audio-animation relative'>
				<div className='audio-animation__fallback'>
					<video autoPlay muted loop webkit-playsinline playsInline>
						<source
							type='video/mp4'
							src='https://music.yandex.ru/blocks/audio-animation/i/fallback-black.mp4'
						/>
					</video>
					<div className='audio-animation__fallback-fade'>
						<div className='audio-animation__fallback-fade-left'></div>
						<div className='audio-animation__fallback-fade-right'></div>
						<div className='audio-animation__fade audio-animation__fade-top'></div>
						<div className='audio-animation__fade audio-animation__fade-bottom'></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Background
