import soldatImg from "../../../assets/images/soldat.png"
const Soldier = () => {
	return (
		<div className=' absolute -bottom-12 -right-7 '>
			<img draggable={false} alt="" src={soldatImg} width={580} />
		</div>
	)
}

export default Soldier
