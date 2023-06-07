import styles from './App.module.css';
import React, { useState } from 'react';
import { TreePanel } from './components/TreePanel/TreePanel';
import { EditPanel } from './components/EditPanel/EditPanel';
import { ButtonsPanel } from './components/ButtonsPanel/ButtonsPanel';
import { parseInputXML } from './services/parse_xml';
import { Node } from './services/parse_xml';

function App() {
  const [file, setFile] = useState("")
  const [xmlTree, setXmlTree] = useState<Node>(createInitialTree())
  const [selectedNode, setSelectedNode] = useState<Node>()

  const handleNodeSelect = (node: Node) => {
    setSelectedNode(node);
    console.log(node.tagName)
  };

  const fetchFile = async () => {
    const result = await window.electron.openFile();
    setFile(result)
    let parsedXmlTree = parseInputXML(file)
    setXmlTree(parsedXmlTree);
  }

  function createInitialTree() {
    return {
      id: "id",
      tagName: "tagName",
      children: [],
      attributeNames: []
    }
  }

  //setXmlTree(parseInputXML(file));

  return (
    <div className={styles.App}>
      <ButtonsPanel getFile={fetchFile} />
      <div className={styles.Layout}>
        <TreePanel file={file} tree={xmlTree} onNodeSelect={handleNodeSelect} />
        <EditPanel selectedNode={selectedNode} />
      </div>
    </div>
  );
}

export default App;
