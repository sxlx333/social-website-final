/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import style from './Post.module.css';
import { UserContext } from '../../context/UserContext';
import { formatTime } from '../../lib/formatTime';

export function Post({ post }) {
    const textDisplayMaxSize = 200;
    const minRemainingTextToShowMore = 50;

    const { userId } = useContext(UserContext);
    const [postTextFullSize, setPostTextFullSize] = useState(post.text.length < textDisplayMaxSize);

    const remainingTextLength = post.text.length - textDisplayMaxSize;

    const shouldDisplayToggle = remainingTextLength > minRemainingTextToShowMore;

    const displayedText = postTextFullSize || !shouldDisplayToggle
        ? post.text
        : post.text.slice(0, textDisplayMaxSize).trim() + '...';

    return (
        <article className={style.post} data-id={post.post_id}>
            <header className={style.header}>
                <img className={style.authorImage} src="./img/users/person.jpg" alt="User photo" />
                <div className={style.texts}>
                    <div className="title">{post.email}</div>
                    <div className="time">{formatTime(post.created_at)}</div>
                </div>
                <i className={style.moreActions + ' fa fa-ellipsis-h'}></i>
            </header>
            <div className={style.content}>
                <p className={post.text.length < 100 ? style.bigText : ''}>
                    {displayedText}
                    {shouldDisplayToggle && (
                        <span onClick={() => setPostTextFullSize(prev => !prev)}
                              className={style.more}>
                            Skaityti {postTextFullSize ? 'mažiau' : 'daugiau'}
                        </span>
                    )}
                </p>
            </div>
            <div className={style.interactions}>
                <div className={style.action}>
                    <i className="fa fa-thumbs-o-up"></i>
                    <span>Like</span>
                    {post.likes_count > 0 && <span>({post.likes_count})</span>}
                </div>
                <div className={style.action}>
                    <i className="fa fa-comment-o"></i>
                    <span>Comment</span>
                </div>
            </div>
            <div className={style.commentForm}>
                <img src="#" alt="My photo" />
                <div className={style.form}>
                    <textarea></textarea>
                    <div className={style.icons}>
                        <i className="fa fa-globe"></i>
                        <i className="fa fa-globe"></i>
                        <i className="fa fa-globe"></i>
                        <i className="fa fa-globe"></i>
                    </div>
                </div>
            </div>
        </article>
    );
}
