import { visit } from "unist-util-visit";

function mediumPlugin() {
  return (tree) => {
    visit(tree, "image", (node) => {
      node.data = node.data || {};
      node.data.hProperties = node.data.hProperties || {};
      node.data.hProperties["data-zoomable"] = true;
    });
  };
}

export default mediumPlugin;
