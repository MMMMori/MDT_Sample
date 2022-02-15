import Link from 'next/link';
import Image from 'next/image';
import { PAGESETTING } from 'public/pagesetting';

type MenuBarTopProps = {
    Page: {
        name: string;
    }
}
export const MenuBarTop = (props: MenuBarTopProps) => {
    return ( 
        <div className="bg-rose-500 flex">
            <div className="w-4/12 text-rose-50 h-10 pt-4">
                <Link href= {PAGESETTING.PATH.INDEX}>
                    <a><Image src='/image/title.png' alt='title' width={120} height={20} /></a>
                </Link>
            </div>
            <div className="w-6/12 divide-x divide-rose-500 font-bold text-right h-10 pt-3">
                <input type="text" className="rounded-lg w-full h-6"></input>
            </div>
            <div className="w-1/12 divide-x divide-rose-500 font-bold text-left h-10 pt-3 indent-2">
                <button className="bg-red-50 text-rose-500 rounded-lg font-bold w-16"> Search </button>
            </div>
            <div className="w-1/12 divide-x font-bold text-center h-10">
                <button className='flex-initial absolute top-0 right-0'>
                    <Image src='/image/icon_menu_bars.png' alt='menu' width={40} height={40} />
                </button>
            </div>
        </div>
    )
};