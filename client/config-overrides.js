/* config-overrides.js */

const { getLoader } = require("react-app-rewired")
const tsImportPluginFactory = require("ts-import-plugin")
const rewireReactHotLoader = require("react-app-rewire-hot-loader")
const rewireLess = require("react-app-rewire-less")

module.exports = function override(config, env) {
  const tsLoader = getLoader(
    config.module.rules,
    rule =>
      rule.loader &&
      typeof rule.loader === "string" &&
      rule.loader.includes("ts-loader")
  )

  tsLoader.options = {
    getCustomTransformers: () => ({
      before: [
        tsImportPluginFactory({
          libraryDirectory: "es",
          libraryName: "antd",
          style: "css",
          style: true
        })
      ]
    }),
    transpileOnly: true
  }

  config = rewireReactHotLoader(config, env)

  return config
}
