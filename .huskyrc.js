module.exports = {
  hooks: {
    'pre-commit': 'yarn lint-staged',
    'prepare-commit-msg': 'exec < /dev/tty && yarn git-cz --hook || true',
    'commit-msg': 'yarn commitlint -E HUSKY_GIT_PARAMS',
    'pre-push': 'yarn lint && yarn test',
  },
};
