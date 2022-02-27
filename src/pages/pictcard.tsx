import type { NextPage } from 'next'
import { MenuBarTop } from 'src/components/MenuBarTop'
import { MenuBarBtm } from 'src/components/MenuBarBtm'
import { PictCard } from 'src/components/PictCard'
import { useCallback, useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [id, setId] = useState("");
  const [key, setKey] = useState("");
  
  const getParams = useCallback((params: string): { [key: string]: string } => {
    const paramsArray = params.slice(1).split('&')
    const paramsObject: { [key: string]: string } = {}
    paramsArray.forEach(param => {
        paramsObject[param.split('=')[0]] = param.split('=')[1]
    });
    setKey(paramsObject["key"]);
    setId(paramsObject["ret"]);
    return paramsObject;
  },[]);

  useEffect(() => {
    getParams(location.search);
  }, [key,id]);

  return (
    <div>
      {id === "" ? (null):(
        <div className='h-screen bg-white'>
        <div>
          <MenuBarTop keyword = {key}/>
        </div>
        <div className='h-max m-5'>
          <PictCard id = {id}/>
        </div>
        <div>
          <MenuBarBtm User={{id: "123456", name:"Name"}}/>  
        </div>
      </div>
      )}
    </div>
  )
}

export default Home
