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
    textContent?: string;
    children: Node[];
    attributeNames: string[];
    attributes?: string[];
  }

  export interface Props {
    xml: string;
  }


function parseNode(node: Element): Node {

    const children = Array.from(node.children);
    let textContent = (children.length>0) ? '' : node.textContent!
    return {
      id: nanoid(5),
      tagName: node.tagName,
      textContent: textContent,
      children: children.map((child) => parseNode(child)),
      attributeNames: node.getAttributeNames(),
      attributes: node.getAttributeNames().map((attributeName: string): string=>{return node.getAttribute(attributeName)!})
    };
  }
