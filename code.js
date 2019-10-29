figma.showUI(__html__);
figma.ui.resize(240, 110);
figma.ui.onmessage = message => {
    figma.ui.resize(240, 140);
    setTimeout(function (){
        figma.ui.resize(240, 110);
    }, 2200);
    for (var _i = 0, _a = figma.currentPage.selection; _i < _a.length; _i++) {
    var node = _a[_i];
        console.log(node);
        node.exportSettings = [
            {
                constraint : {
                    type : "SCALE",
                    value : 2
                },
                format : "PNG",
                suffix : "@2x"
            },
            {
                constraint : {
                    type : "SCALE",
                    value : 3
                },
                format : "PNG",
                suffix : "@3x"
            }
        ]
        node.exportAsync();
    }
}


// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
// figma.closePlugin();
