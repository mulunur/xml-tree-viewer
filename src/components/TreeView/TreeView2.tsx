import React, { useCallback, useState } from "react";
import { Props, Node, parseInputXML } from "../../services/parse_xml";

interface TreeView2Props {
    tree: Node,
    onNodeSelect: Function
}

export function TreeView2({tree, onNodeSelect}:TreeView2Props) {
    const [showChildren, setShowChildren] = useState<boolean>(false);

    const handleClick = useCallback((node: Node) => {

        setShowChildren(!showChildren);
        onNodeSelect(node)

    }, [showChildren, setShowChildren])

    // function renderNode(node: Node) {
    //     return (
    //         <div>
    //             <h5 style={{alignSelf:'flex-start'}}>{node.tagName}</h5>
    //             <div style={{position: 'relative', display: 'flex', flexDirection: 'column', left: 15, borderLeft: '1px solid', paddingLeft: 10 }}>
    //                 {(node.children).map((node) => renderNode(node))}
    //             </div>
    //         </div>
    //     )
    // }

    // return <div>{tree.children.map((node: Node) => renderNode(node))}</div>

    return (
        <div id={tree.id}>
            <span onClick={() => handleClick(tree)} style={{height:15}}>
                <p style={{ fontWeight: showChildren ? 'bold' : 'normal', textAlign:'left'}}>{tree.tagName}</p>
            </span>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column',  borderLeft: '1px solid', paddingLeft: 15 }}>
                {showChildren && (tree.children ?? []).map((node: Node) => <TreeView2 tree={node} onNodeSelect={onNodeSelect} />)}
            </div>
        </div>
    )

}