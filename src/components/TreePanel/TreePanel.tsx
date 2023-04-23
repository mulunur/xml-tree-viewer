import React from 'react';
import { TreeView } from '../TreeView/TreeView';
import styles from "./TreePanel.module.css"

interface TreePanelProps {
    file: string
}

export function TreePanel({file}: TreePanelProps) {

    return (
        <div className={styles.panel}>
            {file != "" && <TreeView xmlFile={file}/>}
        </div>
    )
}