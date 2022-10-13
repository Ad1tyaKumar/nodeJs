const os= require('os');

// Info about current user

const user = os.userInfo()

console.log(user)

// Returns the system uptime in seconds

console.log("system uptime is "+os.uptime() +"seconds.")