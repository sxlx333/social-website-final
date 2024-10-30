import { connection } from '../db.js';
import { IsValid } from '../lib/IsValid.js';

export async function postPostAPI(req, res) {
    const requiredFields = [
        { field: 'text', validation: IsValid.postMessage },
    ];

    const [isErr, errMessage] = IsValid.requiredFields(req.body, requiredFields);
    if (isErr) {
        return res.status(400).json({
            status: 'error',
            msg: errMessage,
        });
    }

    const { text } = req.body;

    try {
        const sql = 'INSERT INTO posts (text, user_id) VALUES (?, ?);';
        const insertResult = await connection.execute(sql, [text, req.user.id]);

        if (insertResult[0].affectedRows !== 1) {
            return res.status(500).json({
                status: 'error',
                msg: 'Serverio klaida. Nepavyko irasyti zinutes. Pabandykite veliau',
            });
        }
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            msg: 'Serverio klaida. Nepavyko irasyti zinutes. Pabandykite veliau',
        });
    }

    return res
        .status(201)
        .json({
            status: 'success',
            msg: 'Ok',
        });
}