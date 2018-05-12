export function getSimpleExpressFile(port, pathToServe) {
  const content = `const express = require('express');
const app = express();
const port = process.env.PORT || ${port};
const www = process.env.WWW || '${pathToServe}';
app.use(express.static(www));
console.log(\`serving \${www}\`);
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: www });
});
app.listen(port, () => console.log(\`listening on http://localhost:\${port}\`));
`;
  return content;
}
