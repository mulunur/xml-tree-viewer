import React from "react"
import styles from "./ButtonsPanel.module.css"

interface ButtonsPanelProps {
    getFile: () => void
}

export function ButtonsPanel ({getFile} : ButtonsPanelProps) {
    return (
        <div className={styles.panel}>
            <button onClick={getFile}>Открыть ролевую матрицу</button>
        </div>
    )
}