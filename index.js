const core = require('@actions/core');
const wait = require('./wait');
const github = require("@actions/github")


// most @actions toolkit packages have async methods
async function run() {

  console.log(github.context)

  try { 
    const ms = core.getInput('milliseconds');
    console.log(`Waiting ${ms} milliseconds ...`)

    core.debug((new Date()).toTimeString())
    await wait(parseInt(ms));
    core.debug((new Date()).toTimeString())

    core.setOutput('time', new Date().toTimeString());
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
