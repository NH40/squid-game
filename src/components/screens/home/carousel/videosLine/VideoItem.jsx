import PropTypes from 'prop-types'
import PlayButton from './PlayButton'

const VideoItem = ({slide, clickHandler, isActive}) => {
	return (
		<button onClick={clickHandler} className={`block relative mr-8 transition-all duration-300 ease-in-out ${isActive ? "w-52 h-full" : "w-40 h-24"}`}>
			{isActive && <PlayButton />}
			<div className={`bg-cover bg-no-repeat bg-center h-full ${isActive ? "filter grayscale" : ""}`} style={{backgroundImage: `url(${slide.thumbnailPath})`}} />
		</button>
	)
}

VideoItem.propTypes = {
	slide: PropTypes.shape({
		_id: PropTypes.number.isRequired,
		thumbnailPath: PropTypes.string.isRequired,
		videosUrl: PropTypes.string.isRequired
	}),
	clickHandler: PropTypes.func.isRequired,
	isActive: PropTypes.bool.isRequired
}

export default VideoItem
