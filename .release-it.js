module.exports = {
  // git的提交信息
  "git": {
    "commitMessage": "chore: release v${version}"
  },
  // 发布github上的release包
  "github": {
    "release": true
  },
  // 发布到npm
  "npm": {
    "publish": true
  },
  // 
  "hooks": {
    "after:git:release": "echo git更新成功",
    "after:bump": "echo 更新版本成功 ${version}"
  },
  // 生成changelog
  "plugins": { 
      "@release-it/conventional-changelog": { 
          "preset": "angular", 
          "infile": "CHANGELOG.md" 
        } 
  } 
}