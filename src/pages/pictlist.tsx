import type { NextPage } from 'next'
import { MenuBarTop } from 'src/components/MenuBarTop'
import { MenuBarBtm } from 'src/components/MenuBarBtm'
import { PictList } from 'src/components/PictList';

const Home: NextPage = () => {
  return (
    <div className='h-screen bg-white'>
      <div>
        <MenuBarTop Page = {{name: "index"}} />
      </div>
      <div className='h-max m-5'>
        <PictList />
      </div>
      <div>
        <MenuBarBtm User={{id: "123456", name:"hana"}}/>  
      </div>
    </div>
  )
}

export default Home
