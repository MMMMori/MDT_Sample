import type { NextPage } from 'next'
import { MenuBarTop } from 'src/components/MenuBarTop'
import { MenuBarBtm } from 'src/components/MenuBarBtm'
import { PAGESETTING } from 'public/pagesetting';
import Link from 'next/link';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className='h-screen bg-red-50'>
      <div>
        <MenuBarTop Page = {{name: "index"}} />
      </div>
      <div className='text-rose-500 h-max m-5'>
        <div>
          このサイトはデモンストレーション用に作成しています。<br />
          以下の機能をお試しいただけます。
        </div>
        <div className="pt-4 font-bold">
          Search
        </div>
        <div>
          メニューバーのテキストボックスにキーワードを入れて「Search」ボタンをクリックしてください。<br />
          画像のタグを検索し、キーワードを含む画像の一覧を表示します。
        </div>  
        <div className="hover:text-rose-300 pt-4 font-bold">
          <Link href = {PAGESETTING.PATH.PICTCARD}>
            <a>Picture</a>
          </Link>
        </div> 
        <div>
          画像詳細表示のページです。画像に対してハートやプレゼントを贈ることができます。
        </div> 
      </div>
      <div>
        <MenuBarBtm User={{id: "123456", name:"hana"}}/>  
      </div>
    </div>
  )
}

export default Home
