import Layout from '../../layout/Layout'
import Form from './Form'
import Table from './Table'

const Admin = () => {
	return (
		<Layout>
			<div className='flex mt-10 justify-between' style={{minHeight: 700}}>
				<Table />
				<Form />
			</div>
		</Layout>
	)
}

export default Admin
