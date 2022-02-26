import type { NextPage } from 'next'
import { MenuBarTop } from 'src/components/MenuBarTop'
import { MenuBarBtm } from 'src/components/MenuBarBtm'
import { PictCard } from 'src/components/PictCard'

const Home: NextPage = () => {
  return (
    <div className='h-screen bg-white'>
      <div>
        <MenuBarTop Page={{name: "pict"}}/>
      </div>
      <div className='h-max m-5'>
        <PictCard />
      </div>
      <div>
        <MenuBarBtm User={{id: "123456", name:"Name"}}/>  
      </div>
    </div>
  )
}

export default Home
