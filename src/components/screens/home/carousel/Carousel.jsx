import { useState } from 'react'

import t1Img from "../../../../assets/images/thumbnails/thumbnail-1.png"
import t2Img from "../../../../assets/images/thumbnails/thumbnail-2.png"
import t3Img from "../../../../assets/images/thumbnails/thumbnail-3.png"
import t4Img from "../../../../assets/images/thumbnails/thumbnail-4.png"
import t5Img from "../../../../assets/images/thumbnails/thumbnail-5.png"
import Controls from './Controls'
import VideosLine from './videosLine/VideosLine'

const initialSlides = [
	{
		_id: "frdw2",
		thumbnailPath: t1Img,
		videosUrl: "https://youtu.be/8Cr7WVEdTSo?si=WjpO_2R-heqtoNjO"
	},
	{
		_id: "frd2d",
		thumbnailPath: t2Img,
		videosUrl: "https://youtu.be/z71UZmZF1QM?si=3QNYkXGjAes0VLwc"
	},
	{
		_id: "fd2d4",
		thumbnailPath: t3Img,
		videosUrl: "https://youtu.be/pPsdU-b7YBA?si=p8OH0HCuH1CNZZve"
	},
	{
		_id: "ferw2",
		thumbnailPath: t4Img,
		videosUrl: "https://youtu.be/WHAdfqgMoZk?si=_KBvq6jgY7CznZFW"
	},
	{
		_id: "fve45",
		thumbnailPath: t5Img,
		videosUrl: "https://youtu.be/zquHOu3jbWc?si=bcI_aZ4ZiE4uUjrG"
	}
]

const Carousel = () => {
	const [slides] = useState(initialSlides)
	const [currentIdx, setCurrentIdx] = useState(0)

	return (
		<div className='mt-24'>
			<div className='flex items-center mb-5'>
				<div className='text-white opacity-90 text-lg font-medium mr-20 '>1 SERIES</div>
				<Controls slidesLength={slides.length} setCurrentIdx={setCurrentIdx} currentIdx={currentIdx}/>
			</div>
			<VideosLine slides={slides} currentIdx={currentIdx} setCurrentIdx={setCurrentIdx} />
		</div>
	)
}

export default Carousel
