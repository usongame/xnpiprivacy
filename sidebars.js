// @ts-check

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 
 The sidebars can be generated from the filesystem, or explicitly defined here.
 
 Create as many sidebars as you want.
 
 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // 包含现有的文档
  docs: [
    'privacy-policy', // 将隐私政策设置为首页
    'user-agreement', // 用户协议
    'support', // 支持页面
    'intro', // 介绍页面
  ]
};

export default sidebars;
