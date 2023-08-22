// 1,2,3 too easy, not write here

//4.

// const jsonToMatrix = (_arr: any[]) => {
//     const matrix: any = []
//     const keySet = new Set()

//     function flatten(obj: any, pre = '', flat: any = {}) {
//       const prefix = pre ? pre + '.' : pre
//       for (let objKey in obj) {
//         if (obj[objKey] && typeof obj[objKey] === 'object') {
//           flatten(obj[objKey], prefix + objKey, flat)
//         } else {
//           flat[prefix + objKey] = obj[objKey]
//           keySet.add(prefix + objKey)
//         }
//       }
//       return flat
//     }

//     const arr = _arr.map((a) => flatten(a))

//     matrix.push(Array.from(keySet).sort())

//     arr.forEach((a) => {
//       const tmp = []
//       for (let key of matrix[0]) {
//         if (key in a) {
//           tmp.push(a[key])
//         } else {
//           tmp.push('')
//         }
//       }
//       matrix.push(tmp)
//     })
//     return matrix
//   }