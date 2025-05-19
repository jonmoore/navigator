class CytoscapeOutputBinding extends Shiny.OutputBinding {
    find(scope) {
        return
        $(scope).find("#cytoscape-container");  }

    renderValue(el, data) {
        const graphData = JSON.parse($(el).text());
        cytoscape({
            container: el,
            elements: graphData.elements,
            style: [
                {
                    selector: 'node',
                    style: {
                        'background-color': '#666',
                        'label': 'data(label)'
                    }
                },
                {
                    selector: 'edge',
                    style: {
                        'width': 3,
                        'line-color': '#ccc',
                        'target-arrow-color': '#ccc',
                        'target-arrow-shape': 'triangle'
                    }
                }
            ],
            layout: {
                name: 'grid'
            }
        });
    }
}

Shiny.outputBindings.register(new CytoscapeOutputBinding());
