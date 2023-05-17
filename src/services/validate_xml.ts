import { readFileSync } from "fs";
import {validateXML } from "xsd-schema-validator";

export function validateSchema (xmlFile: string) {
    const schema = readFileSync("../../resources/TestRoleMatrix.xsd", 'utf-8')
    let result = false
    validateXML(xmlFile, schema, function(err, resultValidate){
        if (err) {
            throw err;
          }
        
        result = resultValidate.valid;
    })
    //const result = schema.validate(xmlDoc);
    if (result) {
      console.log('XML is valid.');
    } else {
      console.error('XML is not valid:', result);
    }
}