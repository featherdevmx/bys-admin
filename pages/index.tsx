import type { NextPage } from 'next';
import { Layout } from '../components/layouts';
import Signin from './app/userGuest/Signin';


const Home: NextPage = () => {

  return (
    <Layout headTitle={'Login'}>
      <Signin /> 
    </Layout>
  )
}

export default Home
