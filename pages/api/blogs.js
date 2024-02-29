import * as fs from 'fs';

export default function handler(req, res) {
  const blogPath = "blogdata";

  fs.readdir(blogPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Error reading blog directory" });
    }

    const blogData = [];

    files.forEach((file) => {
      fs.readFile(`${blogPath}/${file}`, 'utf-8', (err, data) => {
        if (err) {
          console.error(`Error reading file ${file}: ${err.message}`);
        } else {
          blogData.push(JSON.parse(data));
        }

        // Check if we have read all files
        if (blogData.length === files.length) {
          res.status(200).json(blogData);
        }
      });
    });
  });
}
