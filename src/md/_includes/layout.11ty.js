module.exports = function (params) {
  console.log(params.content)
  return `<!doctype html>
<html>hiiii${params.content}</html>`
}