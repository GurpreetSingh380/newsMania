import React from 'react'
import no from '../no.jpg'

export default function Newsitem(props) {
  return (
    <div>
      <div className="card">
        <img src={props.imageUrl?props.imageUrl:no} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <a href={props.newsUrl} target="_blank" className="btn btn-primary">Read more</a>
        </div>
      </div>
    </div>
  )
}