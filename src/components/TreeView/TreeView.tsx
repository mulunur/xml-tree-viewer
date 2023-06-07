import React, { useCallback, useState } from "react";
import { Props, Node, parseInputXML } from "../../services/parse_xml";

interface TreeViewProps {
  xmlFile: string,
  tree: Node
}

export function TreeView({ xmlFile, tree }: TreeViewProps) {


  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);

  };


  const renderNode = (node: Node) => {
    const children = node.children;
    const hasChildren = children.length > 0;
    const attributeNames = node.attributeNames;

    return (
      <div key={node.id}>
        <div onClick={handleToggle} style={{ position: 'relative', display: 'flex', flexDirection: 'column', left: 25, borderLeft: '1px solid', paddingLeft: 10 }}>
          {hasChildren && <h3>{expanded ? "-" : "+"}</h3>}
          <span>{node.tagName + " " + node.attributeNames}</span>
        </div>
        {hasChildren && expanded && (
          <div>
            {children.map((child) => renderNode(child))}
          </div>
        )}
      </div>
    );
  };

  //const tree = parseInputXML(xmlFile);

  return <div>{tree.children.map((node: Node) => renderNode(node))}</div>;
}