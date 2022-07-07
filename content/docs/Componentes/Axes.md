# Axes

Axes draws three 3D orthogonal lines which can be used as a reference point when rotating or moving an object. 

## Params
| Name | PropType | description |
| ----------- | ----------- | ----------- |
| **size** | *number* | Axes size, each axis has the same length | 
| **bits** | *number* | Bitmask that can be used to indicate which axis to show |

## Bitmask

The **bits** parameter which axis to show. Even though this param is a number, it works as a [Bitmask](https://en.wikipedia.org/wiki/Mask_(computing)) (Similar [chmod](https://en.wikipedia.org/wiki/Chmod#Numerical_permissions)'s numerical permissions in GNU/Linux). This bitmask allows different options to be chosen in a sigle parameter. `p5.treegl` adds the `Tree` object which allows easy access to all the necesary bits to mark different options. Each option is ordered as follows: 

| Description | Value in Tree | Binary | 
| ----------- | ----------- | ----------- | 
| Draws the X axis | Tree.X | 0000001 | 
| Draws the Y axis | Tree.Y | 0000010 | 
| Draws the Z axis | Tree.Z | 0000100 | 
| Draws the -X axis | Tree._X | 0001000 | 
| Draws the -Y axis | Tree._Y | 0010000 | 
| Draws the -Z axis | Tree._Z | 0100000 | 
| Draws labels that help identify each axis | Tree.LABELS | 1000000 | 

## Showcase

{{< p5-iframe sketch="/p5.treegl.showcase/sketches/components/axes/axes.js" lib1="https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.min.js" lib2="/p5.treegl.showcase/libs/p5.treegl/p5.treegl.js" lib3="https://cdn.rawgit.com/bitcraftlab/p5.gui/master/libraries/p5.gui.js" lib4="https://cdn.rawgit.com/bit101/quicksettings/master/quicksettings.js" width="425" height="425" >}}

`Click and drag to move the camera arround!`

### code 

{{< details title="sketch.js" open=false >}}
{{% code file="/content/sketches/components/axes/axes.js" language="js" %}}
{{< /details >}}