import fs from 'node:fs'
import { getAllIconsMerged, getAllIcons } from '../../.build/helpers.mjs'

const iconsMerged = getAllIconsMerged()
const icons = getAllIcons(true, true)

const buildJSON = () => {
  console.log('Building icons.json')

  fs.writeFileSync(`./icons.json`, JSON.stringify(iconsMerged, null, 2))
}

const buildNodes = () => {
  console.log('Building icons-nodes.json')

  Object.entries(icons).forEach(([type, icons]) => {
    const iconNodes = icons.reduce((acc, { name, obj }) => {
      acc[name] = obj.children.map(({ name, attributes }) => [name, attributes]);

      return acc;
    }, {});

    const iconNodesStringified = JSON.stringify(iconNodes, null, 2);

    fs.writeFileSync(`./icons-nodes-${type}.json`, iconNodesStringified);
  })
}

const buildSvgs = () => {
  console.log('Building svgs')

  Object.entries(icons).forEach(([type, icons]) => {
    fs.mkdirSync(`./src/icons/${type}`, { recursive: true });

    icons.forEach(({ name, content, category }) => {
      fs.writeFileSync(`./src/icons/${type}/${name}.svg`, content);

      if (category) {
        fs.mkdirSync(`./src/categories/${type}/${category}`, { recursive: true });
        fs.writeFileSync(`./src/categories/${type}/${category}/${name}.svg`, content);
      }
    })
  })
}

buildJSON()
buildNodes()
buildSvgs()
