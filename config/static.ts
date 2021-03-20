const menu: MenuItem = require('../menu-config.json')
// console.log(menu)
interface MenuItem {
  title: string
  name: string
  children?: Array<MenuItem>
}
interface MenuMap {
  [MenuMapItemName: string]: MenuMapItem
}
interface MenuMapItem {
  title: string
  name: string
  path: Array<string>
}

const directoryOfDocs: Array<MenuItem> = menu.children || []
// [
//   {
//     // icon: 'mdi-apps',
//     title: 'Java编程规范',
//     name: '1',
//     children: [
//       {
//         title: '编程规约',
//         name: '21',
//         children: [{ title: '环境', name: 'example' }],
//       },
//       {
//         title: '异常日志',
//         name: 'eh-form',
//       },
//     ],
//   },
// ]

const getFlatMenuitems = function (_menuList: Array<MenuItem> = []) {
  let flatMenuitems: Array<MenuItem> = []
  _menuList.forEach((item) => {
    if (item.children && item.children.length) {
      flatMenuitems = flatMenuitems.concat(getFlatMenuitems(item.children))
    } else {
      flatMenuitems.push(item)
    }
  })
  return flatMenuitems
}
const getFlatMenusMap = function (
  _menuList: Array<MenuItem> = [],
  path: Array<string> = [],
  sourceMap: MenuMap = {}
) {
  let menusMap = sourceMap
  // let thisName = ''
  _menuList.forEach((item) => {
    // thisName = item.name
    let _path = path.concat(item.name)

    if (item.children && item.children.length) {
      getFlatMenusMap(item.children, _path, menusMap)
    } else {
      menusMap[item.name] = {
        title: item.title,
        name: item.name,
        path: _path,
      }
    }
  })
  return menusMap
}

const menusMap = getFlatMenusMap(directoryOfDocs)
export {
  directoryOfDocs,
  MenuItem,
  getFlatMenuitems,
  getFlatMenusMap,
  menusMap,
}
