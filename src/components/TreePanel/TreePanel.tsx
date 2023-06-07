import React from 'react';
import { TreeView } from '../TreeView/TreeView';
import styles from "./TreePanel.module.css"
import { Node } from '../../services/parse_xml';
import { TreeView2 } from '../TreeView/TreeView2';

interface TreePanelProps {
    file: string,
    tree: Node,
    onNodeSelect: Function
}

export function TreePanel({file, tree, onNodeSelect}: TreePanelProps) {

    return (
        <div className={styles.panel}>
            {/* {file != "" && <TreeView xmlFile={file} tree={tree}/>} */}
           {file && <TreeView2 onNodeSelect={onNodeSelect} tree={tree}/>}
        </div>
    )
}