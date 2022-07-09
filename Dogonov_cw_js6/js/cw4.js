// Напишите функцию, которая будет обрабатывать url, удаляя в нем всё после знака #
// 			Примеры:
// 			removeUrlAnchor('www.codewars.com#about')
// 			// returns 'www.codewars.com'
// 			// returns 'www.codewars.com?page=1'
// 			removeUrlAnchor('www.codewars.com?page=1')
function removeUrlAnchor(url) {
  var find = url.indexOf("#");
  if (find === -1) {
    alert(url);
  }
  var newUrl = url.slice(0, find);
  return newUrl;
}
console.log(removeUrlAnchor('www.codewars.com#about'));
console.log(removeUrlAnchor('www.codewars.com?page=1'));