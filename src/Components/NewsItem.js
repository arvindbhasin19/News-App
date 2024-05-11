import React from 'react'
import { Link } from 'react-router-dom';
import Badge from './Badge';

export default function NewsItem(props) {
    const { description, title, imgUrl, newsUrl, mode, PublishedAt, author, source } = props;
    return (
        <div className='my-3'>
            <div className="card">
                <Badge mode={mode} source={source} />
                <img src={!imgUrl ? 'https://ambcrypto.com/wp-content/uploads/2024/05/Bitcoin_liquidation_2-1000x600.webp' : imgUrl} className="card-img-top" alt="..." />
                <div className={`card-body text-${mode === 'dark' ? 'light' : 'dark'} bg-${mode}`}>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className={`card-text text-${mode === 'dark' ? 'light' : 'dark'}`}><small className={` text-${mode === 'dark' ? 'light' : 'dark'}`}>By {!author ? 'Unknown' : author} <br /> Published At: {new Date(PublishedAt).toGMTString()}</small></p>
                    <Link to={newsUrl} className={`btn btn-sm btn-${mode === 'dark' ? 'light' : 'dark'}`}>Go somewhere</Link>
                </div>
            </div>
        </div>
    )
}
