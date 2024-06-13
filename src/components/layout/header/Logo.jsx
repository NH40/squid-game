import { Link } from 'react-router-dom'
import LogoImage from "../../../assets/images/logo.png"
const Logo = () => {
	return (
		<Link to="/">
			<img src={LogoImage} alt="logo" draggable={false} width="90" />
		</Link>
	)
}

export default Logo
