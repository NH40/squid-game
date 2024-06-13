import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si"

const stylesIcons = "text-white hover:opacity-100 opacity-80 duration-300 ease-in-out transition-opacity"

const SocialMediaList = [
	{
		icons: <SiInstagram size="17" className={stylesIcons} />,
		link: "/init",
	},
	{
		icons: <SiFacebook size="17" className={stylesIcons} />,
		link: "/fd",
	},
	{
		icons: <SiTwitter size="17" className={stylesIcons} />,
		link: "/tw",
	}
]

const SocialMedia = () => {
	return (
		<div className=' absolute right-1 z-10' style={{top: "40%"}}>
			{SocialMediaList.map(({icons, link}) => (
				<a key={link} href={link} target='_blank' rel='noreferrer' className='my-10 block'>{icons}</a>
			))}
		</div>
	)
}

export default SocialMedia
