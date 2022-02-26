import Image from 'next/image';
import React, { Component } from 'react'
import { useCallback, useEffect, useState } from 'react';

type PictCardInfoTarget = {
    id: string;
    extension: string;
}

type PictCardInfoSauce = {
    name: string;
    date: string;
    tag: string;
    message: string;
    heart: number;
    rose: number;
    present: number;
    diamond: number;
}

let clickType: string = "";

let pictCardInfoSauce:  PictCardInfoSauce= {
    name: "",
    date: "",
    tag: "",
    message: "",
    heart: 0,
    rose: 0,
    present: 0,
    diamond: 0
};

export const PictCard = () => {
    const [id, setId] = useState("");
    let pictCardInfoTarget: PictCardInfoTarget = {
        id: id,
        extension: ".jpg"
    }
    const [pictCardObj, setPictCardObj] = useState({pictCardInfoTarget});
    let strimage: string = '/image/sample/picture/'+ pictCardInfoTarget.id + pictCardInfoTarget.extension;

    // instantiate a headers object
    let myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");

    const getParams = useCallback((params: string): { [key: string]: string } => {
        const paramsArray = params.slice(1).split('&')
        const paramsObject: { [key: string]: string } = {}
        paramsArray.forEach(param => {
            paramsObject[param.split('=')[0]] = param.split('=')[1]
        });
        setId(paramsObject["ret"]);
        return paramsObject;
    },[]);

    const postGetJson = useCallback(async () => {
        // using built in JSON utility package turn object to string and store in a variable
        let raw = JSON.stringify({"id":id});
        // create a JSON object with parameters for API call and store in a variable
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        } as const;
        // make API call with parameters and use promises to get response
        await fetch("https://t8uf9dofl0.execute-api.us-east-1.amazonaws.com/dev", requestOptions)
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          for (const item of json) {
            pictCardInfoSauce = {
                name: item.Name.S,
                date: item.Date.S,
                tag: item.Tag.S,
                message: item.Message.S,
                heart: item.Heart.N,
                rose: item.Rose.N,
                present: item.Present.N,
                diamond: item.Diamond.N
            }
            setPictCardObj((pictCardObj) => {
                const newpictCardObj = {...pictCardObj, ...pictCardInfoSauce};
                return newpictCardObj;
            });
            console.log(pictCardObj);
          }
        })
        .catch(error => console.log('error', error));
    },[id])
    
    useEffect(() => {
        getParams(location.search);
        postGetJson();
    }, [id]);

    const handleClickHeart = () => {
        clickType = "heart";
        postUpdateJson();        
    }
    const handleClickRose = () => {
        clickType = "rose";
        postUpdateJson();
    }
    const handleClickPresent = () => {
        clickType = "present";
        postUpdateJson();
    }
    const handleClickDiamond = () => {
        clickType = "diamond";
        postUpdateJson();
    }

    const postUpdateJson  = useCallback(async () => {
        console.log("postUpdateJson");
        console.log(clickType);
        // using built in JSON utility package turn object to string and store in a variable
        let raw = JSON.stringify({
            id : id,
            heart: String(pictCardInfoSauce.heart),
            rose: String(pictCardInfoSauce.rose),
            present: String(pictCardInfoSauce.present),
            diamond: String(pictCardInfoSauce.diamond),
            type: clickType
        });
        console.log(raw);
        // create a JSON object with parameters for API call and store in a variable
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        } as const;
        // make API call with parameters and use promises to get response
        await fetch("https://2qpyu48lxk.execute-api.us-east-1.amazonaws.com/dev", requestOptions)
        .then(response => response.text())
        .then(result => JSON.parse(result))
        .catch(error => console.log('error', error));
        console.log(raw);
        postGetJson();
    },[id])

    return (
        <div className="text-gray-400 bg-white">
        { Object.keys(pictCardObj).length < 3 ? (
            <div className='p-100'>
                <Image src= '/image/loading.gif' alt='image' width={100} height={100}/>
            </div>
            ) : (
            <div>
                <div>
                    <Image src= {strimage} alt='image' width={750} height={500}/>
                </div>
                <div>
                    <div className="flex space-x-4 pt-2">
                        <div>{pictCardInfoSauce.date}</div>
                        <div>{pictCardInfoSauce.name}</div>
                        <div>
                            <button onClick={handleClickHeart}>
                                <Image src='/image/btn_heart.png' alt='title' width={20} height={20} />
                            </button>
                            {pictCardInfoSauce.heart}
                        </div>
                        <div>
                            <button onClick={handleClickRose}>
                                <Image src='/image/btn_rose.png' alt='title' width={20} height={20} />
                            </button>
                            {pictCardInfoSauce.rose}
                        </div>
                        <div>
                            <button onClick={handleClickPresent}>
                                <Image src='/image/btn_present.png' alt='title' width={20} height={20} />
                            </button>
                            {pictCardInfoSauce.present}
                        </div>
                        <div>
                            <button onClick={handleClickDiamond}>
                                <Image src='/image/btn_diamond.png' alt='title' width={20} height={20} />
                            </button>
                            {pictCardInfoSauce.diamond}
                        </div>
                    </div>
                    <div>
                        {pictCardInfoSauce.tag}
                    </div>
                    <div>
                        <span className="">{pictCardInfoSauce.message}</span>
                    </div>
                </div>
            </div>) }
        </div>
    );
};