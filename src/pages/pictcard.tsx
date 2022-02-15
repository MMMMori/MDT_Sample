import type { NextPage } from 'next'
import { MenuBarTop } from 'src/components/MenuBarTop'
import { MenuBarBtm } from 'src/components/MenuBarBtm'
import { PictCard } from 'src/components/PictCard'
import { PictList } from 'src/components/PictList'

const Home: NextPage = () => {
  return (
    <div className='h-screen bg-red-50'>
      <div>
        <MenuBarTop Page={{name: "pict"}}/>
      </div>
      <div className='h-max m-5'>
        <PictCard info = {{
            imgid: "https://dl.easyuploader.cloud/20220128205018_57785162.jpg", 
            name: "Name",
            date: "2022/01/28 20:00:00",
            tag: "#AAA #BBB #CCC", 
            message: "コメント"
        }}/>
      </div>
      <div>
        <MenuBarBtm User={{id: "123456", name:"hana"}}/>  
      </div>
    </div>
  )
}
export default Home
