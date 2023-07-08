import React from 'react'

export default function Footer() {
  return (
    <div className='text-center d-flex flex-column justify-content-center align-items-center' style={{minHeight: '45vh', backgroundColor: '#d8e6fa'}}>
        <p style={{fontFamily: 'monospace', fontSize: '20px', backgroundColor: 'white', margin: '5px 10px', padding: '0px 7px', borderRadius: '4px'}}>&copy;reated and Updated by Gurpreet Singh</p>
        <p style={{fontFamily: 'monospace', fontSize: '20px'}}>Static data loaded from <a href='https://newsapi.org/'>NewsAPI.org</a> <a href='https://newscatcherapi.com/'>NewsCatcherAPI</a></p>
        <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6582911861706!2d77.03538977444454!3d28.610026285104226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05dd375e5a13%3A0x108adaa3abe4bd07!2sNetaji%20Subhas%20University%20of%20Technology!5e0!3m2!1sen!2sin!4v1688792506389!5m2!1sen!2sin" style={{width:"800", height:"600", border: '0', allowFullScreen:"", loading:"lazy", referrerPolicy: "no-referrer-when-downgrade", boxShadow: '3px 4px'}}></iframe></p>
    </div>
  )
}
