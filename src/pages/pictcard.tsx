import type { NextPage } from 'next'
import { MenuBarTop } from 'src/components/MenuBarTop'
import { MenuBarBtm } from 'src/components/MenuBarBtm'
import { PictCard } from 'src/components/PictCard'

const Home: NextPage = () => {
  return (
    <div className='h-screen bg-red-50'>
      <div>
        <MenuBarTop Page={{name: "pict"}}/>
      </div>
      <div className='h-max m-5'>
        <PictCard info = {{
            imgid: "/image/sample/picture/001.jpg", 
            name: "Name",
            date: "2022/01/28 20:00:00",
            tag: "#AAA #BBB #CCC", 
            message: "コメント",
            heart: 111,
            rose: 222,
            present: 333,
            diamond: 444,
        }}/>
      </div>
      <div>
        <MenuBarBtm User={{id: "123456", name:"hana"}}/>  
      </div>
    </div>
  )
}
export default Home
