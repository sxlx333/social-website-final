/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import style from './Post.module.css';
import { UserContext } from '../../context/UserContext';
import { formatTime } from '../../lib/formatTime';
import thumbIcon from '../../assets/thumb.svg';
import commentIcon from '../../assets/comment.svg';
import smileIcon from '../../assets/smile.svg';
import cameraIcon from '../../assets/camera.svg';
import gifIcon from '../../assets/gif.svg';
import userDefaultProfile from '../../assets.userDefaultProfile.svg';

export function Post({ post }) {
    const textDisplayMaxSize = 200;
    const minRemainingTextToShowMore = 50;

    const { userId } = useContext(UserContext);
    const [postTextFullSize, setPostTextFullSize] = useState(post.text.length < textDisplayMaxSize);

    const remainingTextLength = post.text.length - textDisplayMaxSize;

    const shouldDisplayToggle = remainingTextLength > minRemainingTextToShowMore;

    const displayedText = postTextFullSize || !shouldDisplayToggle
        ? post.text
        : post.text.slice(0, textDisplayMaxSize).trim() + '... ';

    return (
        <article className={style.post} data-id={post.post_id}>
            <header className={style.header}>
                <img className={style.authorImage} src={post.profile_image || userDefaultProfile} alt="User photo" />
                <div className={style.texts}>
                    <div className="title">{post.username}</div>
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
                    <img src={thumbIcon} alt="Like icon" />
                    <span>Patinka</span>
                    {post.likes_count > 0 && <span>({post.likes_count})</span>}
                </div>
                <div className={style.action}>
                    <img src={commentIcon} alt="Comment icon" />
                    <span>Komentarai</span>
                    {post.comments_count > 0 && <span>({post.comments_count})</span>}
                </div>
            </div>
            <div className={style.commentForm}>
                <img src={profileImage || userDefaultProfile} alt="My photo" />
                <div className={style.form}>
                    <textarea></textarea>
                    <div className={style.icons}>
                        <img src={smileIcon} alt="Emoji" />
                        <img src={cameraIcon} alt="Įkelti nuotrauką" />
                        <img src={gifIcon} alt="Įkelti judantį paveiksliuką" />
                    </div>
                </div>
            </div>
        </article>
    );
}
