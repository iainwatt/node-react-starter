var wd = require("word-definition");

 export default {
   getWord: () => {
     var definition = ''
     var def = wd.getDef("keyboard", "en", null, function(definition) {
        console.log(definition);
        return definition
    });
    return def
 }
}
