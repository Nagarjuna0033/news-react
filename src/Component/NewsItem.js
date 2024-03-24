import React from "react";
import { Link } from "react-router-dom";

export default function NewsItem(props) {
    return (
        <div className="my-3">
            <div className="card">
                <img
                    src={
                        props.url
                            ? props.url
                            : "https://www.livemint.com/lm-img/img/2024/03/07/1600x900/Externam-affairs-minister-S-Jaishankar_1709783053661_1709783053796.jpg"
                    }
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                    <p className="card-text">
                        <small className="text-muted">
                            By {props.author} on
                            {new Date(props.date).toGMTString()}
                        </small>
                    </p>
                    <Link
                        target="_blank"
                        to={props.newsUrl}
                        className="btn btn-sm btn-primary"
                    >
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    );
}
