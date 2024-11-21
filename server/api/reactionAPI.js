import { connection } from "../db.js";
import { API_RESPONSE_STATUS } from "../lib/enum.js";
import { IsValid } from "../lib/IsValid.js";

export async function postReactionPostAPI(req, res) {
  const requiredFields = [
    { field: "postId", validation: IsValid.id },
    { field: "reactionId", validation: IsValid.id },
  ];
  const [isErr, errMessage] = IsValid.requiredFields(req.body, requiredFields);
  if (isErr) {
    return res.status(400).json({
      status: API_RESPONSE_STATUS.ERROR,
      msg: errMessage,
    });
  }
  const { postId, reactionId } = req.body;

  let preReaction = [];

  try {
    const sql =
      "SELECT * FROM post_reactions WHERE post_id = ? AND user_id = ?;";
    const selectResult = await connection.execute(sql, [postId, req.user.id]);

    preReaction = selectResult[0];
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: API_RESPONSE_STATUS.ERROR,
      msg: "Serverio klaida. Nepavyko uzskaityti palaikinimo. Pabandykite veliau",
    });
  }

  let successFullyChanged = false;

  if (preReaction.length === 0) {
    successFullyChanged = await addPostReaction(
      req.user.id,
      postId,
      reactionId
    );
  } else if (preReaction[0].reaction_type_id === reactionId) {
    successFullyChanged = await deletePostReaction(
      req.user.id,
      postId,
      reactionId,
      preReaction[0].id
    );
  } else {
    successFullyChanged = await updatePostReaction(
      req.user.id,
      postId,
      reactionId,
      preReaction[0].id
    );
  }
  if (!successFullyChanged) {
    return res.status(500).json({
      status: API_RESPONSE_STATUS.ERROR,
      msg: "Serverio klaida. Nepavyko uzskaityti palaikinimo. Pabandykite veliau",
    });
  }

  return res.status(201).json({
    status: API_RESPONSE_STATUS.SUCCESS,
    msg: "Ok",
  });
}
async function addPostReaction(userId, postId, reactionId) {
  try {
    const sql = `
      INSERT INTO post_reactions (post_id, user_id, reaction_type_id) VALUES (?, ?, ?);`;

    const insertResult = await connection.execute(sql, [
      postId,
      userId,
      reactionId,
    ]);
    if (insertResult[0].affectedRows !== 1) {
      return true;
    }
  } catch (error) {
    return false;
  }

  try {
    let column = "likes_count";
    if (reactionId === 2) {
      column = "dislike_count";
    }
    if (reactionId === 3) {
      column = "love_count";
    }

    const sql = `UPDATE posts SET ${column} = ${column} + 1 WHERE id = ?;`;
    const [updateResult] = await connection.execute(sql, [postId]);

    if (updateResult.affectedRows !== 1) {
      return false;
    }
  } catch (error) {
    return false;
  }
  return true;
}
async function deletePostReaction(userId, postId, reactionId, preReactionId) {
  try {
    const sql = "DELETE FROM post_reactions WHERE id = ?;";
    const [result] = await connection.execute(sql, [preReactionId]);

    if (result.affectedRows !== 1) {
      return false;
    }
  } catch (error) {
    return false;
  }
  try {
    let column = "likes_count";
    if (reactionId === 2) {
      column = "dislike_count";
    }
    if (reactionId === 3) {
      column = "love_count";
    }

    const sql = `UPDATE posts SET ${column} = ${column} - 1 WHERE id = ?;`;
    const [updateResult] = await connection.execute(sql, [postId]);

    if (updateResult.affectedRows !== 1) {
      return false;
    }
  } catch (error) {
    return false;
  }

  return true;
}
async function updatePostReaction(userId, postId, reactionId, preReactionId) {
  try {
    const sql =
      "UPDATE post_reactions SET reaction_type_id = ? WHERE post_id = ? AND user_id = ?;";
    const [result] = await connection.execute(sql, [
      reactionId,
      postId,
      reactionId,
    ]);

    if (result.affectedRows !== 1) {
      return false;
    }
  } catch (error) {
    return false;
  }

  try {
    let column = "likes_count";
    if (preReactionId === 2) {
      column = "dislike_count";
    }
    if (preReactionId === 3) {
      column = "love_count";
    }

    const sql = `UPDATE posts SET ${column} = ${column} - 1 WHERE id = ?;`;
    const [updateResult] = await connection.execute(sql, [postId]);

    if (updateResult.affectedRows !== 1) {
      return false;
    }
  } catch (error) {
    return false;
  }

  return true;
}
