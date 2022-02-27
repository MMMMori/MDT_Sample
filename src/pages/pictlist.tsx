import type { NextPage } from 'next'
import { MenuBarTop } from 'src/components/MenuBarTop'
import { MenuBarBtm } from 'src/components/MenuBarBtm'
import { PictList } from 'src/components/PictList';
import { useCallback, useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [ids, setIds] = useState([""]);
  const [key, setKey] = useState("");
  
  const getParams = useCallback((params: string): { [key: string]: string } => {
    const paramsArray = params.slice(1).split('&')
    const paramsObject: { [key: string]: string } = {}
    paramsArray.forEach(param => {
        paramsObject[param.split('=')[0]] = param.split('=')[1]
    });
    setIds(paramsObject["ret"].split('/'));
    setKey(paramsObject["key"]);
    return paramsObject;
  },[key]);

  useEffect(() => {
    getParams(location.search);
  }, [key]);

  return (
    <div className='h-screen bg-white'>
      <div>
        <MenuBarTop keyword = {key}/>
      </div>
      <div className='h-max m-5'>
        <PictList ids = {ids} keyword = {key}/>
      </div>
      <div>
        <MenuBarBtm User={{id: "123456", name:"hana"}}/>  
      </div>
    </div>
  )
}

export default Home
