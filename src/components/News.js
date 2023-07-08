import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading'
import Api from './Api'
import {home, business, entertainment, general, health, science, sports, technology} from '../data/files'

export default function News(props) {
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        setLoading(true);
        funky();
        setLoading(false);
    }, [props.category]);
    const funky = () => {
        const dict = {"home": home, "business": business, "entertainment": entertainment, "general": general, "health": health, "science": science, "sports": sports, "technology": technology};
        setArticles(dict[props.category]);
      }
  return (
    <>
      <div className="container my-3">
        {(props.category!=="API_EXHAUST") && <h2 className='text-center' style={{margin: '30px 0px'}}>{`${props.title} - Top Headlines`}</h2>}
        {loading && <Loading/>}
        {(props.category=="API_EXHAUST") && <Api/>}
        <div className="row">
          {articles?.map((element)=>{ 
            return <div className="col-md-4 my-2" key={element.url}>
              <Newsitem title={element.title} desc={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })} 
        </div>
      </div>
    </>
  )
}
