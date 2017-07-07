const remote = require('electron').remote;
const app = remote.app;

alert(app.getPath('userData'))
