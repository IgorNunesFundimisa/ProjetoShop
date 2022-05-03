import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log(`Está executando na porta ${port}`);
  console.log(`CTRL + click em http://localhost:${port}`);
});
