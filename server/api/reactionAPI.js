import { connection } from "../db.js";
import { API_RESPONSE_STATUS } from "../lib/enum.js";
import { IsValid } from "../lib/IsValid.js";

export async function postReactionPostAPI(req, res) {
  const requiredFields = [
    { field: "postId", validation: IsValid.id },
    { field: "reactionTypeId", validation: IsValid.id },
  ];

  const [isErr, errMessage] = IsValid.requiredFields(req.body, requiredFields);
  if (isErr) {
    return res.status(400).json({
      status: API_RESPONSE_STATUS.ERROR,
      msg: errMessage,
    });
  }

  const { postId, reactionTypeId } = req.body;
  let preReaction = [];

  try {
    const sql =
      "SELECT * FROM post_reactions WHERE post_id = ? AND user_id = ?;";
    const selectResult = await connection.execute(sql, [postId, req.user.id]);
    preReaction = selectResult[0][0];
  } catch (error) {
    return res.status(500).json({
      status: API_RESPONSE_STATUS.ERROR,
      msg: "Serverio klaida. Nepavyko uzskaityti palaikinimo. Pabandykite veliau",
    });
  }

  let successfullyChanged = false;
  if (!preReaction) {
    successfullyChanged = await addPostReaction(
      req.user.id,
      postId,
      reactionTypeId
    );
  } else if (preReaction.reaction_type_id === reactionTypeId) {
    successfullyChanged = await deletePostReaction(
      postId,
      reactionTypeId,
      preReaction.id
    );
  } else {
    successfullyChanged = await updatePostReaction(
      postId,
      reactionTypeId,
      preReaction.id,
      preReaction.reaction_type_id
    );
  }

  if (!successfullyChanged) {
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

async function addPostReaction(userId, postId, reactionTypeId) {
  try {
    const sql = `INSERT INTO post_reactions (post_id, user_id, reaction_type_id) VALUES (?, ?, ?);`;
    const insertResult = await connection.execute(sql, [
      postId,
      userId,
      reactionTypeId,
    ]);

    if (insertResult[0].affectedRows !== 1) {
      return false;
    }
  } catch (error) {
    console.error("Database error1:", error);
    return false;
  }

  try {
    let column = "likes_count";
    if (reactionTypeId === 2) {
      column = "dislikes_count";
    }
    if (reactionTypeId === 3) {
      column = "love_count";
    }

    const sql = `UPDATE posts SET ${column} = ${column} + 1 WHERE id = ?;`;
    const [updateResult] = await connection.execute(sql, [postId]);

    if (updateResult.affectedRows !== 1) {
      return false;
    }
  } catch (error) {
    console.error("Database error2:", error);
    return false;
  }

  return true;
}

async function deletePostReaction(postId, reactionTypeId, preReactionId) {
  try {
    // Log to confirm we're deleting a reaction
    console.log(`Attempting to delete reaction with ID: ${preReactionId}`);

    // Deleting the reaction from the post_reactions table
    const sql = "DELETE FROM post_reactions WHERE id = ?;";
    const [result] = await connection.execute(sql, [preReactionId]);

    if (result.affectedRows !== 1) {
      console.error(`Failed to delete reaction for post ${postId}.`);
      return false;
    }
  } catch (error) {
    console.error("Error while deleting post reaction:", error);
    return false;
  }

  try {
    let column = "";
    if (reactionTypeId === 1) {
      column = "likes_count";
    } else if (reactionTypeId === 2) {
      column = "dislikes_count"; // Ensure this is correct
    } else if (reactionTypeId === 3) {
      column = "love_count";
    }

    // Decrease the count by 1
    const sql = `UPDATE posts SET ${column} = ${column} - 1 WHERE id = ?;`;
    const [updateResult] = await connection.execute(sql, [postId]);

    if (updateResult.affectedRows !== 1) {
      console.error(
        `Failed to update post count for ${column} on post ${postId}`
      );
      return false;
    }
  } catch (error) {
    console.error("Error while updating post reaction count:", error);
    return false;
  }

  return true;
}

async function updatePostReaction(
  postId,
  reactionTypeId,
  preReactionId,
  preReactionTypeId
) {
  try {
    const sql = "UPDATE post_reactions SET reaction_type_id = ? WHERE id = ?;";
    const [result] = await connection.execute(sql, [
      reactionTypeId,
      preReactionId,
    ]);

    if (result.affectedRows !== 1) {
      return false;
    }
  } catch (error) {
    console.error("Database error5:", error);
    return false;
  }

  try {
    let column = "";
    if (preReactionTypeId === 1) {
      column = "likes_count";
    }
    if (preReactionTypeId === 2) {
      column = "dislikes_count";
    }
    if (preReactionTypeId === 3) {
      column = "love_count";
    }

    // Use GREATEST to avoid going below 0
    const sql = `UPDATE posts SET ${column} = GREATEST(${column} - 1, 0) WHERE id = ?;`;
    const [updateResult] = await connection.execute(sql, [postId]);

    if (updateResult.affectedRows !== 1) {
      return false;
    }
  } catch (error) {
    console.error("Database error6:", error);
    return false;
  }

  try {
    let column = "";
    if (reactionTypeId === 1) {
      column = "likes_count";
    }
    if (reactionTypeId === 2) {
      column = "dislikes_count";
    }
    if (reactionTypeId === 3) {
      column = "love_count";
    }

    const sql = `UPDATE posts SET ${column} = ${column} + 1 WHERE id = ?;`;
    const [updateResult] = await connection.execute(sql, [postId]);

    if (updateResult.affectedRows !== 1) {
      return false;
    }
  } catch (error) {
    console.error("Database error7:", error);
    return false;
  }

  return true;
}
