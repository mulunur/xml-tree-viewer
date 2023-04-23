
export function parseInputXML(inputXML:string) {
    const parser = new DOMParser();
    const objDOM = parser.parseFromString(inputXML, "text/xml");

    console.log(objDOM.children);
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
      id: node.getAttribute("id") || "",
      tagName: node.tagName,
      children: children.map((child) => parseNode(child)),
    };
  }
