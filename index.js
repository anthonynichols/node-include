var fs = require('fs'),
    path = require('path')

module.exports = function (target) {
  var directory = path.dirname(module.parent.filename),
      rootDirectory = locatePackageJson(directory)

  return requireFromRoot(target, rootDirectory)
}

function locatePackageJson(directory) {
  try {
    fs.readFileSync(path.join(directory, 'package.json'))

    return directory
  } catch (e) {}

  if (directory === path.resolve('/')) {
    return
  } else {
    directory = path.join(directory, '..')

    return locatePackageJson(directory)
  }
}

function requireFromRoot(target, directory) {
  return require(path.join(directory, target))
}