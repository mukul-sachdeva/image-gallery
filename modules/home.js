import path from "path";
const __dirname = path.resolve();

var home = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/views/index.html`));
};

const getHome = home;
export default getHome;
