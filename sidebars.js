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
    'intro', // 添加intro作为首页
    'support', // 添加支持页面
    {
      type: 'category',
      label: '用户协议',
      items: [
        'privacy-policy',
      ],
    }
  ]
};

export default sidebars;
