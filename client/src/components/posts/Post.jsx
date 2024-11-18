/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import style from "./Post.module.css";
import { UserContext } from "../../context/UserContext";
import { formatTime } from "../../lib/formatTime";
import thumbIcon from "../../assets/thumb.svg";
import commentIcon from "../../assets/comment.svg";
import smileIcon from "../../assets/smile.svg";
import cameraIcon from "../../assets/camera.svg";
import gifIcon from "../../assets/gif.svg";
import userDefaultProfile from "../../assets/userDefaultProfile.svg";
import thumbDownIcon from "../../assets/thumbsDown.svg";

export function Post({ post }) {
  const softCutLimit = 200; // Truncate after 200 characters
  const hardCutLimit = softCutLimit + 100; // Extra buffer for when the text is long enough

  const { userId, profileImage } = useContext(UserContext);
  const [postTextFullSize, setPostTextFullSize] = useState(
    post.text.length <= softCutLimit
  );

  // Decide the text content to show: either the truncated version or the full text
  const text = postTextFullSize
    ? post.text
    : post.text.slice(0, softCutLimit).trim() + "...";

  return (
    <article className={style.post} data-id={post.post_id}>
      <header className={style.header}>
        <img
          className={style.authorImage}
          src={post.profile_image || userDefaultProfile}
          alt="User photo"
        />
        <div className={style.texts}>
          <div className="title">{post.username}</div>
          <div className="time">{formatTime(post.created_at)}</div>
        </div>
        <i className={style.moreActions + " fa fa-ellipsis-h"}></i>
      </header>
      <div className={style.content}>
        <p className={post.text.length < 100 ? style.bigText : ""}>
          {text}
          {post.text.length > softCutLimit && !postTextFullSize && (
            <span
              onClick={() => setPostTextFullSize(true)}
              className={style.more}
            >
              Skaityti daugiau
            </span>
          )}
          {postTextFullSize && post.text.length > hardCutLimit && (
            <span
              onClick={() => setPostTextFullSize(false)}
              className={style.more}
            >
              Skaityti mažiau
            </span>
          )}
        </p>
      </div>
      <div className={style.interactions}>
        <div className={style.action}>
          <img src={thumbIcon} alt="Patinka" />
          <span>Patinka</span>
          {post.likes_count > 0 && <span>({post.likes_count})</span>}
        </div>
        <div className={style.action}>
          <img src={thumbDownIcon} alt="Nepatinka" />
          <span>Nepatinka</span>
          {post.likes_count > 0 && <span>({post.likes_count})</span>}
        </div>
        <div className={style.action}>
          <img src={commentIcon} alt="Komentarai" />
          <span>Komentarai</span>
          {post.comments_count > 0 && <span>({post.comments_count})</span>}
        </div>
      </div>
      <div className={style.commentForm}>
        <img src={profileImage || userDefaultProfile} alt="Mano nuotrauka" />
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
