import Link from 'next/link';
import Image from 'next/image';
import { PAGESETTING } from 'public/pagesetting';
import { useCallback, useEffect, useState } from 'react';

type MenuBarTopProps = {
    Page: {
        name: string;
    }
}

export const MenuBarTop = (props: MenuBarTopProps) => {
    const [text, setText] = useState('')

    const handleChange = useCallback((e) => {
       setText(() => e.target.value);
    },[text]);
    
    let resultID: string = "";
    const postGetJson = useCallback(async () => {
        console.log("postGetJson");
        // instantiate a headers object
        let myHeaders = new Headers();
        // add content type header to object
        myHeaders.append("Content-Type", "application/json");
        // using built in JSON utility package turn object to string and store in a variable
        let raw = JSON.stringify({"tag":text});
        // create a JSON object with parameters for API call and store in a variable
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        } as const;
        // make API call with parameters and use promises to get response
        await fetch("https://rxfl2cst7l.execute-api.us-east-1.amazonaws.com/dev", requestOptions)
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          for (const item of json) {
            resultID = item.PictDataId.S;
            console.log(resultID);
          }
          location.href = PAGESETTING.PATH.PICTLIST + "?ret=" + resultID;
        })
        .catch(error => console.log('error', error));        
    },[text])

    return ( 
        <div className="bg-gray-400 flex">
            <div className="w-4/12 h-16 pt-4 text-gray-50 font-bold text-3xl tracking-wider">
                <Link href= {PAGESETTING.PATH.INDEX}>
                    <a className="hover:text-rose-300">THANKS</a>
                </Link>
                <Image src= '/image/title_heart.png' alt='image' width={30} height={30}/>
            </div>
            <div className="w-6/12 divide-x text-right h-16 pt-6">
                <input type="text" value={text} onChange={handleChange} className="rounded-lg w-full h-6"></input>
            </div>
            <div className="w-1/12 divide-x text-left h-16 pt-6 indent-2">
                <button onClick={postGetJson} className="bg-gray-50 text-gray-400 rounded-lg font-bold w-16"> Search </button>
            </div>
            <div className="w-1/12 divide-x text-center h-16">
                <button className='flex-initial absolute top-0 right-0'>
                    <Image src='/image/icon_menu_bars.png' alt='menu' width={50} height={50} />
                </button>
            </div>
        </div>
    )
};