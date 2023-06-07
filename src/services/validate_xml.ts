import { readFileSync } from "fs";
import {validateXML } from "xsd-schema-validator";


export function validateSchema (xmlFile: string) {
  
    //const schema = readFileSync()
    //console.log(schema)
    let result = false
    validateXML(xmlFile, 'src/services/PrimaryRoleMatrix.xsd', function(err, resultValidate){
        if (err) {
            throw err;
          }
        
        result = resultValidate.valid;
    })

    if (result) {
      console.log('XML is valid.');
    } else {
      console.error('XML is not valid:', result);
    }
}