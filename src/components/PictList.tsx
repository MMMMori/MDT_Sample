import Link from 'next/link';
import Image from 'next/image';
import { PAGESETTING } from 'public/pagesetting';
import { useCallback, useEffect, useState } from 'react';

type PictListProps = {
    ids: string[];
    keyword: string;
}  
export const PictList = (props: PictListProps) => {
    const list = props.ids.map(id => {
        let strimage: string = '/image/sample/thumbnail/'+ id + '.jpg';
        let url: string = PAGESETTING.PATH.PICTCARD + "?ret=" + id + "&key=" + props.keyword;
        return (
            <div key={id}>
                <Link href= {url}><a>
                    <Image src= {strimage} alt='image' width={210} height={140}/>
                </a></Link>
            </div>
        );
    });
    
    return (
        <div>
            { props.ids[0] === "" ? (
                <div></div>
            ) : (
                <div className="text-gray-400">
                    {list}
                </div> 
            )}
        </div>
    );
};