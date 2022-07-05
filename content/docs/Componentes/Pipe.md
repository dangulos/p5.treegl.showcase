# Pipe

A pipe is a cylinder whose bases can be rotated given a specified vector. This figure is useful because when several are connected, more complex figures can be made.

## Params 

| Name | PropType | description |
| ----------- | ----------- | ----------- |
| **detail** | *number* | Pipe's detail.  The bigger it is, the smoother the pipe looks. |
| **topRadius** | *number* | Top base radius. |
| **bottomRadius** | *number* | Bottom base radius. |
| **height** | *number* | Pipe's height. |
| **topNormal** | *p5.Vector* | Vector indicating how the top base of the cylinder is tilted. |
| **bottomNormal** | *p5.Vector* | Vector indicating how the bottom base of the cylinder is tilted. |

## Showcase

{{< p5-iframe sketch="/p5.treegl.showcase/sketches/components/pipe/pipe.js" lib1="https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.min.js" lib2="/p5.treegl.showcase/libs/p5.treegl/p5.treegl.js" lib3="https://cdn.rawgit.com/bitcraftlab/p5.gui/master/libraries/p5.gui.js" lib4="https://cdn.rawgit.com/bit101/quicksettings/master/quicksettings.js" width="475" height="475" >}}

`Click and drag to move the camera arround!`

### code 

{{< details title="sketch.js" open=false >}}
{{% code file="/content/sketches/components/pipe/pipe.js" language="js" %}}
{{< /details >}}