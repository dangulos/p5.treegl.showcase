# Arrow

A simple arrow using pipes. Useful for pointing at stuff. Can be used to show if something is moving or rotating.

## Params 

| Name | PropType | description |
| ----------- | ----------- | ----------- |
| **detail** | *number* | Arrow's detail. The bigger it is, the smoother the arrow looks. |
| **radius** | *number* | Arrow's body radius. |
| **height** | *number* | Arrow's height. |

## Showcase

{{< p5-iframe sketch="/p5.treegl.showcase/sketches/components/arrow/arrow.js" lib1="https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.min.js" lib2="/p5.treegl.showcase/libs/p5.treegl/p5.treegl.js" lib3="https://cdn.rawgit.com/bitcraftlab/p5.gui/master/libraries/p5.gui.js" lib4="https://cdn.rawgit.com/bit101/quicksettings/master/quicksettings.js" width="475" height="475" >}}

`Click and drag to move the camera arround!`

### code 

{{< details title="sketch.js" open=false >}}
{{% code file="/content/sketches/components/arrow/arrow.js" language="js" %}}
{{< /details >}}