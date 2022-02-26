import type { NextPage } from 'next'
import { MenuBarTop } from 'src/components/MenuBarTop'
import { MenuBarBtm } from 'src/components/MenuBarBtm'
import { PAGESETTING } from 'public/pagesetting';
import Link from 'next/link';

const Home: NextPage = () => {

  return (
    <div className='h-screen bg-white'>
      <div>
        <MenuBarTop Page = {{name: "index"}} />
      </div>
      <div className='text-gray-400 h-max m-5'>
        <div>
          このサイトはデモンストレーション用に作成しています。<br />
          以下の機能をお試しいただけます。
        </div>
        <div className="pt-4 font-bold">
          検索機能
        </div>
        <div>
          メニューバーのテキストボックスにキーワードを入れて「Search」ボタンをクリックしてください。<br />
          画像のタグを検索し、キーワードを含む画像の一覧を表示します。<br />
          現在はサンプルデータとして「AAA」と検索していただくと、登録済の2件のデータが表示されます。
        </div>  
        <div className="pt-4 font-bold">
          画像詳細
        </div> 
        <div>
          検索結果のサムネイルをクリックすると画像詳細表示します。<br />
          画像の下のアイコンをクリックし、気に入った画像に対してハートやプレゼントを贈ることができます。
        </div> 
        <div className="pt-4 font-bold">
            システムについて
        </div> 
        <div>
          フロントエンド使用言語：React、Next.js、TypeScript、Tailwind CSS
          →
          <Link href = 'https://github.com/MMMMori/MDT_Sample'>
            <a className="hover:text-rose-300">GitHub</a>
          </Link>
        </div> 
        <div>
          バックエンド使用言語：Node.js、Javascript<br />
          バックエンドシステム構成：AWS Amplify、API Gateway、Lambda、DynamoDB
        </div> 
      </div>
      <div>
        <MenuBarBtm User={{id: "123456", name:"hana"}}/>  
      </div>
    </div>
  )
}

export default Home
