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
import heartIcon from "../../assets/heart.svg";
import { API_RESPONSE_STATUS } from "../../../../server/lib/enum";
import { PostsContext } from "../../context/PostsContext";

export function Post({ post }) {
  const softCutLimit = 200;
  const hardCutLimit = softCutLimit + 100;

  const { userId, profileImage } = useContext(UserContext);
  const { updateLikeCount } = useContext(PostsContext);
  const [postTextFullSize, setPostTextFullSize] = useState(
    post.text.length <= softCutLimit
  );

  const text = postTextFullSize
    ? post.text
    : post.text.slice(0, softCutLimit).trim() + "...";

  function handleLikeClick(reactionId) {
    fetch("http://localhost:5114/api/post-like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        postId: post.post_id,
        reactionId: reactionId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === API_RESPONSE_STATUS.SUCCESS) {
          updateLikeCount(post.post_id, reactionId);
        }
      })
      .catch(console.error);
  }

  function handleLikeClick(reactionId) {
    fetch("http://localhost:5114/api/post-reaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        postId: post.post_id,
        reactionId: reactionId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === API_RESPONSE_STATUS.SUCCESS) {
          updateLikeCount(post.post_id, reactionId);
        }
      })
      .catch(console.error);
  }

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
        <div className={style.reactions}>
          <div
            onClick={() => handleLikeClick(1)}
            className={`${style.action} ${
              post.my_reaction_id === 1 ? style.active : ""
            }`}
          >
            <img src={thumbIcon} alt="Patinka" />
            <span>Patinka</span>
            {post.likes_count > 0 && <span>({post.likes_count})</span>}
          </div>
          <div
            onClick={() => handleLikeClick(2)}
            className={`${style.action} ${
              post.my_reaction_id === 2 ? style.active : ""
            }`}
          >
            <img src={thumbDownIcon} alt="Nepatinka" />
            <span>Nepatinka</span>
            {post.dislikes_count > 0 && <span>({post.dislikes_count})</span>}
          </div>
          <div
            onClick={() => handleLikeClick(3)}
            className={`${style.action} ${
              post.my_reaction_id === 3 ? style.active : ""
            }`}
          >
            <img src={heartIcon} alt="myliu" />
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
