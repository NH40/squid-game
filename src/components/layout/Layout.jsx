import BgImage from "../../assets/images/petiy.jpg"
import Modal from '../screens/home/Modal'
import Header from './header/Header'
import SocialMedia from './SocialMedia'
// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
	return (
		<div className='p-12 relative bg-cover bg-no-repeat' style={{
			backgroundImage: `url(${BgImage})`
		}} >
			<div className='gradient' />
			<div className='relative z-1'>
				<Header />
				<SocialMedia />
				<Modal />
				{children}
			</div>
		</div>
	)
}

export default Layout
