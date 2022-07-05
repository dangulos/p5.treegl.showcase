# Grid

A [grid](https://en.wikipedia.org/wiki/Regular_grid) is a surface with a simple squared [tessellation](https://en.wikipedia.org/wiki/Tessellation). It can be used to mesure and object's size, movement and rotation if placed in a relative point.

## Params

| Name | PropType | description |
| ----------- | ----------- | ----------- |
| **subdivisions** | *number* | Subdivision number. | 
| **size** | *number* | Grid's size. |
| **shape** | *number* | The grid can be dotted (using `Tree.DOTS`) or solid (using `Tree.SOLID`). Default is dotted. |

## Showcase

{{< p5-iframe sketch="/p5.treegl.showcase/sketches/components/grid/grid.js" lib1="https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.min.js" lib2="/p5.treegl.showcase/libs/p5.treegl/p5.treegl.js" lib3="https://cdn.rawgit.com/bitcraftlab/p5.gui/master/libraries/p5.gui.js" lib4="https://cdn.rawgit.com/bit101/quicksettings/master/quicksettings.js" width="425" height="425" >}}

`Click and drag to move the camera arround!`

### code 

{{< details title="sketch.js" open=false >}}
{{% code file="/content/sketches/components/grid/grid.js" language="js" %}}
{{< /details >}}