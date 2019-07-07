'use strict';

function createElement(node) {

    function createNode(node) {
        const nodeName = document.createElement(`${node.name}`); 
        if(node.props !== null) {
            if(typeof node.props === 'object') {
            Object.keys(node.props).forEach(i => nodeName.setAttribute(i, node.props[i]));
            }
        }
        
        for (let child of node.childs) {
            if(typeof child == 'string') {
                const text = document.createTextNode(child);
                nodeName.appendChild(text);
            } else {
                nodeName.appendChild(createNode(child));
            }
        }
        return nodeName;
    }    

    const newProductDescribe = createNode(node); 
    return newProductDescribe;
}