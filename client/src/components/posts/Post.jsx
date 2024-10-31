/* eslint-disable react/prop-types */
import style from './Post.module.css';

export function Post({ post }) {
    return (
        <div className="card shadow-sm my-5">
            <div className="card-body">
                <p className="card-text">{post.text}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                </div>
            </div>
        </div>
    );
}