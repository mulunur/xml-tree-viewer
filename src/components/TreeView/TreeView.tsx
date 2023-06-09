import React, { useState } from "react";
import { Props, Node, parseInputXML } from "../../services/parse_xml";

interface TreeViewProps {
  xmlFile: string
}

export function TreeView ({xmlFile} : TreeViewProps) {


    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
      setExpanded(!expanded);

    };

    const renderNode = (node: Node) => {
      const children = node.children;
      const hasChildren = children.length > 0;

      return (
        <div key={node.id}>
          <div onClick={handleToggle}>
            {hasChildren && <span>{expanded ? "-" : "+"}</span>}
            <span>{node.tagName}</span>
          </div>
          {hasChildren && expanded && (
            <div>
              {children.map((child) => renderNode(child))}
            </div>
          )}
        </div>
      );
    };


    const tree = parseInputXML(xmlFile);
    return <div>{tree.children.map((node: Node) => renderNode(node))}</div>;
  }