import type { NextPage } from 'next'
import { MenuBarTop } from 'src/components/MenuBarTop'
import { MenuBarBtm } from 'src/components/MenuBarBtm'
import { About } from 'src/components/About'

const Home: NextPage = () => {
  
  return (
    <div className='h-screen bg-white'>
      <div>
        <MenuBarTop keyword = ""/>
      </div>
      <div>
        <About />
      </div>
      <div>
        <MenuBarBtm User={{id: "123456", name:"hana"}}/>  
      </div>
    </div>
  )
}

export default Home
