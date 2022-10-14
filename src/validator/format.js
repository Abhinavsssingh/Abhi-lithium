// Module 3: src/validator/formatter.js
// - trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// - changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]

// Call all these functions in route.js inside the test-me route handle

const v = function() {
const a = " AbhinavSingh     "
const b = a.trim()
const c = b.toLowerCase()
const d = b.toUpperCase()
result=[a,b,c,d]
return result
}

module.exports.myv=v
