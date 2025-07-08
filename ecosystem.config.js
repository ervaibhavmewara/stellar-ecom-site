module.exports = {
  apps: [{
    name: 'app',
    cwd: '/var/lib/jenkins/workspace/new',
    script: 'yarn',
    args: 'start -p 4040',
    interpreter: 'none'
  }]
};
