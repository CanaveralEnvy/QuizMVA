const React = require('react')
const ReactDOMServer = require('react-dom/server')

function renderComponent(component, props, { doctype } = { doctype: true
}) {
const reactElement = React.createElement(component, {
...props,
// ещё в компонент передаем в качестве пропсов все,
// что лежит в res.locals (например, res.locals.user)
...this.locals,
// также передаем все, что лежит в app.locals
...this.app.locals,
});
const html = ReactDOMServer.renderToStaticMarkup(reactElement);
return doctype ? `<!DOCTYPE html>${html}` : html;
}

function ssr (req, res, next) {
res.renderComponent = renderComponent  // req и res это объекты и мы создали ключ для req со значением функции renderComponent
next() // говорим переходи к следующей middleware
}

module.exports = ssr