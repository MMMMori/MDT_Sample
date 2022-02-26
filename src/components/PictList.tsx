import Link from 'next/link';
import Image from 'next/image';
import { PAGESETTING } from 'public/pagesetting';
import { useCallback, useEffect, useState } from 'react';

export const PictList = () => {
    const [idArray, setIdArray] = useState([""]);
    
    const getParams = useCallback((params: string): { [key: string]: string } => {
        const paramsArray = params.slice(1).split('&')
        const paramsObject: { [key: string]: string } = {}
        paramsArray.forEach(param => {
            paramsObject[param.split('=')[0]] = param.split('=')[1]
        });
        setIdArray(paramsObject["ret"].split('/'));
        return paramsObject;
    },[idArray]);

    const list = idArray.map(id => {
        let strimage: string = '/image/sample/thumbnail/'+ id + '.jpg';
        let url: string = PAGESETTING.PATH.PICTCARD + "?ret=" + id;
        console.log(strimage);
        return (
            <div key={id}>
                <Link href= {url}><a>
                    <Image src= {strimage} alt='image' width={210} height={140}/>
                </a></Link>
            </div>
        );
    });
    
    useEffect(() => {
        getParams(location.search);
        console.log(idArray);
    }, []);

    return (
        <div>
            { idArray[0] === "" ? (
                <div></div>
            ) : (
                <div className="text-gray-400">
                    {list}
                </div> 
            )}
        </div>
    );
};