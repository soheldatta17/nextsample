// pages/api/[sno].js

import * as fs from 'fs';

export default async function handler(req, res) {
    const { sno } = req.query;

    try {
        const rawdata = await readFileAsync(`blogdata/${sno}.json`);
        const data = JSON.parse(rawdata);

        const responseData = {
            title: data.title,
            content: data.content,
            author: data.author
        };

        res.status(200).json(responseData);
    } catch (error) {
        if (error.code === 'ENOENT') {
            res.status(404).json({ error: "Blog not found" });
        } else {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

function readFileAsync(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
