# Bullseye

Bullseye is an 2D object that helps identify a 3D point's position. Useful to identify if an object is moving. 

## Params

| Name | PropType | description |
| ----------- | ----------- | ----------- |
| **x** | *number* | Position in x. |
| **y** | *number* | Position in y. |
| **size** | *number* | Bullseye's diameter. |
| **shape** | *number* | Bullseye can be circular (using `Tree.CIRCLE`) or squared (using `Tree.SQUARE`). default is circular. |

## Showcase

{{< p5-iframe sketch="/p5.treegl.showcase/sketches/components/bullseye/bullseye.js" lib1="https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.min.js" lib2="/p5.treegl.showcase/libs/p5.treegl/p5.treegl.js" lib3="https://cdn.rawgit.com/bitcraftlab/p5.gui/master/libraries/p5.gui.js" lib4="https://cdn.rawgit.com/bit101/quicksettings/master/quicksettings.js" width="425" height="425" >}}

### code 

{{< details title="sketch.js" open=false >}}
{{% code file="/content/sketches/components/bullseye/bullseye.js" language="js" %}}
{{< /details >}}