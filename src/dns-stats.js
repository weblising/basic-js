const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  const resObj = {}

  domains.forEach((element)=> {
    let altItem = ''
    element = element.split('.').reverse()

    element.forEach((item) => {
      altItem = altItem + '.' + item     

      if (resObj.hasOwnProperty(altItem)) {
          resObj[altItem] = resObj[altItem] + 1
          return
      }   
  
      resObj[altItem] = 1

    })
  })
  return resObj
}

module.exports = {
  getDNSStats
};
