module.exports = {
  // presets: ["@vue/cli-plugin-babel/preset"],
  // to fix 'npm install --save core-js/modules/es.object.to-string' this error
  presets: [ [ "@vue/app", { useBuiltIns: "entry" } ] ]  
};
