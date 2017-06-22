var fs = require('fs');


var file = "dataelements.json";

function bundle(file){
    fs.readFile(file, 'utf8', function (err, data){
        if (err){
            throw err;
        }

        else{
            var bundle = JSON.parse(data);

            //console.log(bundle.entry[0].resource.id);
            var dataTypes = bundle.entry;
            var attributes = dataTypes

            var resources = {}
             var extends_ = {}
            
            for (var i = 0; i < dataTypes.length; i++){
                var resourceId = dataTypes[i].resource.id;

                var regex1 = /(^\w[^\.]+)(\.)(\w+)(\.)/; // regex to skip blah.blah.blah 
                if (resourceId.match(regex1)){
                    continue
                }
                var regex2 = /\.(\w+)/  //regex 
                var name;
                if (resourceId.match(regex2)){
                    var match2 = regex2.exec(resourceId) 
                    name = match2[1]
                }


                //getting object
                var regex = /(^\w[^\.]+)/;
                var match = regex.exec(resourceId);
                var resource = match[0]; 

                //making sure no duplicates
                if(! resources[resource]) {
                    resources[resource] = [];
                }

               
                            
               //makeing sure type exsists and adding it to resources
                if( dataTypes[i].resource.element[0] && dataTypes[i].resource.element[0].type) {
                    var code = dataTypes[i].resource.element[0].type[0].code
                    code = code.toString();
                    code = code.replace(/id|code|uri|markdown|display|version|xhtml|oid|base64Binary|instant/ , "string");
                    code = code.replace(/positiveInt|unsignedInt|decimal|integer/, "number");
                    code = code.replace(/dateTime|date|time/, "Date");
 
                 resources[resource].push({
                     name: name,
                     type: code
                 })
                  //getting extention
                    var regexEXT = /^\w+$/
                    if(resourceId.match(regexEXT)){
                     var whateItExtends =  dataTypes[i].resource.element[0].type[0].code.match(regexEXT)
                        extends_[resource] = whateItExtends
                }
                }
                else{
                    //console.log(dataTypes[i]);
                }
                
                
            }
            //console.log(dataTypes[0].resource.element[0].type[0].code);

            for(key in resources) {
                if (extends_[key] == null){
                    console.log("}\n\nclass " + key +"{")
                }
                else{
                    console.log("}\n\nclass " + key + " extends " + extends_[key] + "{" )
                }
                var props = resources[key]
                for(var i = 0; i<props.length;i++) {
                    console.log("\t" + props[i].name + ":" + props[i].type + ";")
                }
            }
            

        } 
    })
};


bundle(file);




