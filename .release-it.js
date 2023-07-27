module.exports = {
  "git": {
    "commitMessage": "chore: release v${version}"
  },
  "github": {
    "release": false
  },
  "npm": {
    "publish": false
  },
  // 
  "hooks": {
    "after:git:release": "echo git更新成功",
    "after:bump": "echo 更新版本成功 ${version}"
  },
  "plugins": { 
      "@release-it/conventional-changelog": { 
          "preset": "angular", 
          "infile": "CHANGELOG.md" 
        } 
  } 
}