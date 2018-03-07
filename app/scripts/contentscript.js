// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'

const sentiment = require('sentiment')

let content = ''
for (let el of document.body.getElementsByTagName('*')) {
  if (el.tagName.toLowerCase() !== 'script' && el.text !== null && el.text !== undefined) {
    content = content + el.text.replace(/\s+/g, ' ')
  }
}

const sentimentValue = sentiment(content)

let sentimentElemnt = document.createElement('div')
sentimentElemnt.id = 'sentiment-fab'
sentimentElemnt.innerText = sentimentValue.score
let color = 'gray'
if (sentimentValue.score > 0) {
  color = 'green'
} else if (sentimentValue.score < 0) {
  color = 'red'
}
sentimentElemnt.style.cssText = '' +
  'width: 30px;' +
  'height: 30px;' +
  'background-color: ' + color + ';' +
  'border-radius: 50%;' +
  'box-shadow: 0 3px 5px 0 #666;' +
  'font-size: 20px;' +
  'line-height: 30px;' +
  'color: white;' +
  'text-align: center;' +
  'position: fixed;' +
  'left: 30px;' +
  'bottom: 50%;' +
  'transition: all 0.1s ease-in-out;'

document.body.appendChild(sentimentElemnt)
