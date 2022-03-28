function decorateHtmlResponse(pagetitle) {
  return (req, res, next) => {
    (res.locals.html = true),
      (res.locals.title = `${pagetitle} - ${process.env.APP_NAME}`);
    next();
  };
}
module.exports = decorateHtmlResponse;
