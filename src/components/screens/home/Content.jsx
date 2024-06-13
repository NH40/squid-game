import logo from "../../../assets/images/squid-game-logo.png"
import squid from "../../../assets/images/squid.png"

const Content = () => {
	return (
		<div className='mt-28 w-1/2'>
			<img src={logo} className='mb-10 -ml-12 ' draggable={false} alt="" />
			<div className='flex ml-5 '>
				<img src={squid} className='h-auto mr-8 block' draggable={false} alt="" style={{maxWidth: 50}} />
				<p className=' text-white opacity-70 leading-8 text-lg' style={{maxWidth: "60%"}}>
					Once you start the game, there is no turning back. The winner is alone, the loser only faces death
				</p>
			</div>
		</div>
	)
}

export default Content
