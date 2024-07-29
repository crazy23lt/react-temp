/*
 * @Author: liut
 * @Date: 2024-07-29 15:35:17
 * @LastEditors: liut
 * @LastEditTime: 2024-07-29 16:10:46
 * 2394630102@qq.com
 * Copyright (c) 2024 by 刘涛, All Rights Reserved.
 */
/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
  },
  prompt: {
    alias: { fd: "docs: fix typos" },
    messages: {
      type: "选择一种你的提交类型:",
      scope: "选择一个提交范围（可选）:",
      customScope: "请输入自定义的提交范围 :",
      subject: "填写简短精炼的变更描述 :\n",
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixesSelect: "选择关联issue前缀（可选）:",
      customFooterPrefix: "输入自定义issue前缀 :",
      footer: "列举关联issue (可选) 例如: #31, #I3244 :\n",
      confirmCommit: "是否提交或修改commit ?",
    },
    types: [
      { value: "✨feat", name: "feat:   添加新的功能开发" },
      { value: "🐛fix", name: "fix:    修复一个Bug" },
      { value: "📝docs", name: "docs:   变更的只有文档" },
      { value: "💄style", name: "style:    仅添加或更新UI和样式文件" },
      { value: "💡comments ", name: "comments:    添加或更新注释" },
      { value: "♻️refactor", name: "refactor:   代码重构" },
      { value: "⚡️perf", name: "perf:   提升性能" },
      { value: "✅test", name: "test:   添加一个测试" },
      { value: "🔧config", name: "config:   添加或更新配置文件" },
      { value: "⏪revert", name: "revert:    代码回退" },
      { value: "🎉begin", name: "begin:    开始新项目" },
      { value: "🔨ci", name: "ci:   添加或更新开发脚本" },
      { value: "🔥remove", name: "remove:   仅删除代码或文件" },
      { value: "🔖release", name: "release:    版本/标签" },
      { value: "➕install", name: "install:    安装依赖" },
      { value: "➖uninstall", name: "uninstall:    删除依赖" },
      { value: "⬆️upgrade", name: "upgrade:   升级依赖" },
      { value: "⬇️downgrade", name: "downgrade:   降级依赖" },
      { value: "🏷️type", name: "type:   仅添加或更新ts类型" },
    ],
    useEmoji: true,
    emojiAlign: "center",
    useAI: false,
    aiNumber: 1,
    themeColorCode: "",
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: "bottom",
    customScopesAlias: "以上都不是？我要自定义",
    emptyScopesAlias: "跳过",
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ["feat", "fix"],
    breaklineNumber: 100,
    breaklineChar: "|",
    skipQuestions: [],
    issuePrefixes: [
      { value: "link", name: "link:     链接 ISSUES 进行中" },
      { value: "closed", name: "closed:   标记 ISSUES 已完成" },
    ],
    customIssuePrefixAlign: "top",
    emptyIssuePrefixAlias: "跳过",
    customIssuePrefixAlias: "自定义前缀",
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    scopeOverrides: undefined,
    defaultBody: "",
    defaultIssues: "",
    defaultScope: "",
    defaultSubject: "",
  },
};
