import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useForm } from 'react-hook-form'
import { db } from '../../../firebase'

const Form = () => {
	const {register, handleSubmit, formState:{errors}, reset} = useForm()

	const onSubmit = async data => {
		try{
			await addDoc(collection(db, "series"), {
				timestamp: serverTimestamp(), 
				thumbnailPath: data.thumbnailPath,
				videosUrl: data.videosUrl,
			}) 
		} catch (errors) {
			alert(errors)
		}
		reset()	
	}

	return (
		<div className='py-10 px-20' style={{backgroundColor: "rgba(0, 0, 0, 0.5)", width: "45%"}}>
			<h2 className=' mb-8 text-white font-bold text-2xl text-center'>
				Добавить новую серию
			</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input placeholder='Введите ссылку на изображение' style={{ backgroundColor: "rgba(255, 255, 255, 0.3)"}} className='w-full py-2 px-4 outline-none block mb-5 text-white' {...register("thumbnailPath", {required:true})} />
				{errors.thumbnailPath && (
					<span className='text-red-700'>Ошибка ссылки шапки</span>
				)}

				<input placeholder='Введите ссылку на видео' style={{ backgroundColor: "rgba(255, 255, 255, 0.3)"}} className='w-full py-2 px-4 outline-none block mb-5 text-white' {...register("videosUrl", {required:true})} />
				{errors.videosUrl && (
					<span className='text-red-700'>Ошибка ссылки Видео</span>
				)}

				<input type="submit" value="Добавить" className='block border-none py-2 px-4 outline-none mx-auto mt-10 cursor-pointer bg-pink-800' style={{ minWidth: 140}} />
			</form>
		</div>
	)
}

export default Form
