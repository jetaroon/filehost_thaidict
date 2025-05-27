// Netlify serverless function (Node.js)
exports.handler = async (event, context) => {
  const fs = require('fs');
  const path = require('path');

  const filePath = path.resolve(__dirname, '../public/custom_dict.bin');
  const data = fs.readFileSync(filePath);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/octet-stream',
      'Access-Control-Allow-Origin': '*',
      'Content-Disposition': 'inline; filename="custom_dict.bin"',
    },
    body: buffer.toString('base64'), // Send as base64
    isBase64Encoded: true,
  };
};