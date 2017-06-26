var fs = require('fs');


//var file = "dataelements.json";
var file = process.argv[2];

function bundle(file){
    fs.readFile(file, 'utf8', function (err, data){
        if (err){
            throw err;
        }

        else{
            var bundle = JSON.parse(data);

            
            var dataTypes = bundle.entry;
            var attributes = dataTypes

            var resources = {}
             var extends_ = {}

            var backboneElements = []

            var classComments = {};
            
            
            
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
                //getting documentation 
                if (dataTypes[i].resource.element[0].definition && dataTypes[i].resource.element[0].comments){
                                var definition = dataTypes[i].resource.element[0].definition
                                var comment = dataTypes[i].resource.element[0].comments
                                classComments[resource] = {def: definition, com: comment}
                            }
                }
                
               
            }

            var regexLowerCase = /^[a-z]/;
            var firstDefinition = true;
            
                for (key in resources){
                    if (extends_[key] == null){
                        backboneElements.push(resource);
                        
                             
                            for (var i = 0; i < backboneElements.length; i++){
                                if (firstDefinition){
                                 console.log("class " + key +"{");
                                 firstDefinition = false;
                                }
                                else {
                                    console.log("\nclass " + key +"{");
                                }

                                 var BackboneProps = resources[key]
                                for(var i = 0; i<BackboneProps.length;i++) {
                                 console.log("\t" + BackboneProps[i].name + ":" +BackboneProps[i].type + ";");
                                 
                                }
                            
                                console.log("\tresourceType: string\n}")
                            }
                    }

                }

                   

            for(key in resources) {
            
                        if (key.match(regexLowerCase) || extends_[key] == null){
                            continue;
                        }
                        else{
                         if (key.match(/Range|Account|Location/)){
                                console.log("/*" + classComments[key].def + "\n" + classComments[key].com +"*/")
                                var match11 = key.match(/Range|Account|Location/);
                                console.log("\n\n export class " + 'FHIR'+ match11 + " extends " + extends_[key] + "{" );
                            }
                            else{
                                console.log("/*" + classComments[key].def + "\n" + classComments[key].com +"*/")
                                console.log("export class " + key + " extends " + extends_[key] + "{" );
                        }
                      
                        
                        }
                    
                var props = resources[key]
                for(var i = 1; i<props.length;i++) {
                    console.log("\t" + props[i].name + ":" + props[i].type + ";");
                   
                };

                console.log("}")
                
            }
            
            
    
        } 
    })
};


bundle(file);




