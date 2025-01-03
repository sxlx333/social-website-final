import { connection } from "../db.js";
import { API_RESPONSE_STATUS } from "../lib/enum.js";
import { IsValid } from "../lib/IsValid.js";

export async function postPostAPI(req, res) {
  const requiredFields = [{ field: "text", validation: IsValid.postMessage }];

  const [isErr, errMessage] = IsValid.requiredFields(req.body, requiredFields);
  if (isErr) {
    return res.status(400).json({
      status: API_RESPONSE_STATUS.ERROR,
      msg: errMessage,
    });
  }

  const { text } = req.body;

  try {
    const sql = "INSERT INTO posts (text, user_id) VALUES (?, ?);";
    const insertResult = await connection.execute(sql, [text, req.user.id]);

    if (insertResult[0].affectedRows !== 1) {
      return res.status(500).json({
        status: API_RESPONSE_STATUS.ERROR,
        msg: "Serverio klaida. Nepavyko irasyti zinutes. Pabandykite veliau",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: API_RESPONSE_STATUS.ERROR,
      msg: "Serverio klaida. Nepavyko irasyti zinutes. Pabandykite veliau",
    });
  }

  return res.status(201).json({
    status: API_RESPONSE_STATUS.SUCCESS,
    msg: "Ok",
  });
}

export async function postGetAPI(req, res) {
  const sqlParams = [req.user.id];
  let sqlFilter = "";

  if (req.params.newerId) {
    sqlFilter = "WHERE posts.id > ?";
    sqlParams.push(req.params.newerId);
  }

  if (req.params.olderId) {
    sqlFilter = "WHERE posts.id < ?";
    sqlParams.push(req.params.olderId);
  }

  const sql = `
  SELECT 
      posts.id as post_id,
      posts.text,
      posts.created_at,
      posts.likes_count,
      posts.dislikes_count, -- Fixed typo
      posts.love_count,
      users.id as user_id,
      users.username,
      users.profile_image,
      (
          SELECT reaction_type_id
          FROM post_reactions
          WHERE
              post_reactions.post_id = posts.id AND
              post_reactions.user_id = ?
      ) as my_reaction_id
  FROM posts 
  INNER JOIN users
      ON posts.user_id = users.id
  ${sqlFilter}
  ORDER BY posts.id DESC 
  LIMIT 5;`;

  try {
    console.log("Executing SQL Query:", sql);
    console.log("SQL Parameters:", sqlParams);

    const [selectResult] = await connection.execute(sql, sqlParams);

    return res.status(200).json({
      status: API_RESPONSE_STATUS.SUCCESS,
      msg: "Ok",
      posts: selectResult,
    });
  } catch (error) {
    console.error("Error in postGetAPI:", error.message, error.stack);
    return res.status(500).json({
      status: API_RESPONSE_STATUS.ERROR,
      msg: "Serverio klaida. Nepavyko gauti zinuciu. Pabandykite veliau",
    });
  }
}
