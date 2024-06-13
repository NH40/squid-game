import { Link } from 'react-router-dom'
import netflixLogoImage from "../../../../assets/images/netflix.png"
import { list } from "./list"

const Navigation = () => {
	return (
		<ul className='list-none flex items-center'>
			{list.map((title, idx) => (
				<li key={title} className=' inline-block px-4 '>
				{idx !== 2 ? 
					<Link to={`/${title}`} className='block text-white opacity-80 hover:opacity-100 transition-opacity duration-300  ease-in-out'>
						{title}
					</Link> : (
					<img src={netflixLogoImage} alt='' width={45} draggable={false} className='block mx-5' />
					)
				}
				</li>
			))}
		</ul>
	)
}

export default Navigation
