import { useContext, useEffect, useState, useRef } from 'react';
import style from './Post.module.css';
import { UserContext } from '../../context/UserContext';
import { formatTime } from '../../lib/formatTime';
import thumbUpIcon from '../../assets/thumb-up.svg';
import thumbDownIcon from '../../assets/thumb-down.svg';
import heartIcon from '../../assets/heart.svg';
import commentIcon from '../../assets/comment.svg';
import smileIcon from '../../assets/smile.svg';
import cameraIcon from '../../assets/camera.svg';
import gifIcon from '../../assets/gif.svg';
import userDefaultProfile from '../../assets/userDefaultProfile.svg';
import { REACTION_TYPE } from '../../../../server/lib/enum';
import { PostsContext } from '../../context/PostsContext';

export function Post({ post }) {
  const softCutLimit = 200;
  const hardCutLimit = softCutLimit + 100;

  const { userId, profileImage } = useContext(UserContext);
  const { updateLikeCount } = useContext(PostsContext);

  const [postTextFullSize, setPostTextFullSize] = useState(
    post.text.length < hardCutLimit
  );
  const [isTextAreaFocused, setIsTextAreaFocused] = useState(false);

  const text = postTextFullSize
    ? post.text
    : post.text.slice(0, softCutLimit).trim() + '...';

  const shouldDisableShowLess =
    postTextFullSize && post.text.length <= softCutLimit;

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function handleLikeClick(reactionTypeId) {
    fetch('http://localhost:5114/api/post-reaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        postId: post.post_id,
        reactionTypeId: reactionTypeId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          updateLikeCount(post.post_id, reactionTypeId);
        }
      })
      .catch(console.error);
  }

  return (
    <article className={style.post} data-id={post.post_id}>
      <header className={style.header}>
        <div className={style.authorImageContainer}>
          <img
            className={style.authorImage}
            src={post.profile_image || userDefaultProfile}
            alt="User photo"
            onClick={() => setShowImageModal(true)}
          />
        </div>
        <div className={style.texts}>
          <div className={style.title}>{post.username}</div>
          <div className={style.time}>{formatTime(post.created_at)}</div>
        </div>
        <div className={style.moreActionsContainer} ref={dropdownRef}>
          <i
            className={`${style.moreActions} fas fa-ellipsis-h`}
            onClick={() => setShowDropdown(!showDropdown)}
          />
          {showDropdown && (
            <ul className={style.dropdownMenu}>
              <li>Edit</li>
              <li>Delete</li>
              <li>Report</li>
            </ul>
          )}
        </div>
      </header>
      <div className={style.content}>
        <p className={post.text.length < 100 ? style.bigText : ''}>
          {text}
          {post.text.length > softCutLimit && (
            <span
              onClick={() => setPostTextFullSize((prev) => !prev)}
              className={style.more}
            >
              {postTextFullSize && shouldDisableShowLess
                ? 'Rodyti mažiau'
                : postTextFullSize
                ? 'Rodyti mažiau'
                : 'Skaityti daugiau'}
            </span>
          )}
        </p>
      </div>
      <div className={style.interactions}>
        <div className={style.reactions}>
          <div
            onClick={() => handleLikeClick(REACTION_TYPE.LIKE)}
            className={`${style.action} ${
              post.my_reaction_id === 1 ? style.active : ''
            }`}
          >
            <img src={thumbUpIcon} alt="Patinka" />
            <span>Patinka</span>
            {post.likes_count > 0 && <span>({post.likes_count})</span>}
          </div>
          <div
            onClick={() => handleLikeClick(REACTION_TYPE.DISLIKE)}
            className={`${style.action} ${
              post.my_reaction_id === 2 ? style.active : ''
            }`}
          >
            <img src={thumbDownIcon} alt="Nepatinka" />
            <span>Nepatinka</span>
            {post.dislikes_count > 0 && <span>({post.dislikes_count})</span>}
          </div>
          <div
            onClick={() => handleLikeClick(REACTION_TYPE.LOVE)}
            className={`${style.action} ${
              post.my_reaction_id === 3 ? style.active : ''
            }`}
          >
            <img src={heartIcon} alt="Myliu" />
            <span>Myliu</span>
            {post.love_count > 0 && <span>({post.love_count})</span>}
          </div>
        </div>
        <div className={style.action}>
          <img src={commentIcon} alt="Komentarai" />
          <span>Komentarai</span>
          {post.comments_count > 0 && <span>({post.comments_count})</span>}
        </div>
      </div>
      <div className={style.commentForm}>
        <img src={profileImage || userDefaultProfile} alt="My photo" />
        <div className={style.form}>
          <textarea
            onFocus={() => setIsTextAreaFocused(true)}
            onBlur={() => setIsTextAreaFocused(false)}
            style={{
              height: isTextAreaFocused ? '100px' : '40px',
            }}
          ></textarea>
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
