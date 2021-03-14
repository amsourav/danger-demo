const { schedule } = require('danger')
const dependencies = require('@seadub/danger-plugin-dependencies').default;
const linearHistory = require('danger-plugin-linear-history').default;

schedule(dependencies({
    type: "yarn"
}))
linearHistory()