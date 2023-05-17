import { nanoid } from "nanoid";

export function parseInputXML(inputXML:string) {
    const parser = new DOMParser();
    const objDOM = parser.parseFromString(inputXML, "text/xml");

    var rootXMLElement = objDOM.children[0];

    return parseNode(objDOM.documentElement);
    
}

export interface Node {
    id: string;
    tagName: string;
    children: Node[];
  }

  export interface Props {
    xml: string;
  }


function parseNode(node: Element): Node {
    const children = Array.from(node.children);
  
    return {
      id: nanoid(5),
      tagName: node.tagName,
      children: children.map((child) => parseNode(child)),
    };
  }
