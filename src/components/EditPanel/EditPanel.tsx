import React from 'react';
import styles from "./EditPanel.module.css"
import { Node } from '../../services/parse_xml';

interface EditPanelProps {
    selectedNode?: Node,
}

export function EditPanel({ selectedNode }: EditPanelProps) {

    const handleSubmit = () => {

    }

    const textContentOnChange = () => {

    }

    const attributeOnChange = () => {

    }

    return (
        <div className={styles.panel}>
            <h3>{selectedNode?.tagName}</h3>
            {/* <div>
                {selectedNode?.attributes.map((attribute: string) => 
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p>{attribute}</p>
                    <input type='text' value={selectedNode.textContent}></input>
                </div>
                )}
            </div> */}
            {
                <form className={styles.form}>
                    {selectedNode?.attributeNames.map((attribute: string, index) =>

                        <label className={styles.label}>{attribute}
                            {
                                selectedNode.textContent && (selectedNode.textContent != "") &&
                                <div className={styles.divWithInput}>
                                    <p className={styles.p}>Текст</p>
                                    <input type='text' value={selectedNode.textContent} className={styles.inputTextContent} onChange={(event) => textContentOnChange}></input>
                                </div>

                            }
                            {
                                selectedNode.attributes &&
                                <div className={styles.divWithInput}>
                                    <p className={styles.p}>Атрибут:</p>
                                    <input type='text' value={selectedNode.attributes[index]} className={styles.inputAttribute} onChange={(event) => attributeOnChange}></input>
                                </div>
                            }
                        </label>
                    )}
                    <input type='submit' className={styles.submit} onSubmit={handleSubmit}></input>
                </form>
            }

        </div>
    )
}