# ViewFrustum

Treegl allows you to visualize the volume that a camera is rendering through a frustum. This frustum shows the position of the screen and the camera, the render distance and the shape it has.

## Params

| Name | PropType | description |
| ----------- | ----------- | ----------- |
| **fbo** | *p5.RendererGL or p5.Graphics* | The renderer to be shown by the frustum. |
| **bits** | *number* | Bitmask to choose which planes to draw. |
| **viewer** | *function* | Callback that allows to draw a visual representation of the fbo's position. |

## Bitmask

The **bits** parameter which planes to show. Even though this param is a number, it works as a [Bitmask](https://en.wikipedia.org/wiki/Mask_(computing)) (Similar [chmod](https://en.wikipedia.org/wiki/Chmod#Numerical_permissions)'s numerical permissions in GNU/Linux). This bitmask allows different options to be chosen in a sigle parameter. `p5.treegl` adds the `Tree` object which allows easy access to all the necesary bits to mark different options. Each option is ordered as follows: 

| Description | Value in Tree | Binary | 
| ----------- | ----------- | ----------- | 
| Draws the far plane | Tree.NEAR | 0000001 | 
| Draws the near plane | Tree.FAR | 0000010 | 
| Draws the left boundary | Tree.LEFT | 0000100 | 
| Draws the right boundary | Tree.RIGHT | 0001000 | 
| Draws the bottom boundary | Tree.BOTTOM | 0010000 | 
| Draws the top boundary | Tree.TOP | 0100000 | 
| Draws the frustum's body | Tree.BODY | 1000000 | 

## Orthographic Projection

In orthographic projection, the camera that is rendering the scene does not identify depth. This means that no matter how far away an object is from the camera, it will retain its size. It's often used for schematics, architectural drawings, 3D software when lining up vertices and mesuring distances as they also remain constant.

`Click and drag to move the camera arround!`

{{< p5-iframe sketch="/p5.treegl.showcase/sketches/components/frustum/orthogonalFrustum.js" lib1="https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.min.js" lib2="/p5.treegl.showcase/libs/p5.treegl/p5.treegl.js" lib3="https://cdn.rawgit.com/bitcraftlab/p5.gui/master/libraries/p5.gui.js" lib4="https://cdn.rawgit.com/bit101/quicksettings/master/quicksettings.js" width="425" height="725" >}}

### code 

{{< details title="sketch.js" open=false >}}
{{% code file="/content/sketches/components/frustum/orthogonalFrustum.js" language="js" %}}
{{< /details >}}

## Perspective Projection

This projection is the most similar to the human eye. In perspective projection, the camera gives a sense of depth. The further away an object is from the camera, the smaller it appears.

`Click and drag to move the camera arround!`

{{< p5-iframe sketch="/p5.treegl.showcase/sketches/components/frustum/perspectiveFrustum.js" lib1="https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.min.js" lib2="/p5.treegl.showcase/libs/p5.treegl/p5.treegl.js" lib3="https://cdn.rawgit.com/bitcraftlab/p5.gui/master/libraries/p5.gui.js" lib4="https://cdn.rawgit.com/bit101/quicksettings/master/quicksettings.js" width="425" height="725" >}}

### code 

{{< details title="sketch.js" open=false >}}
{{% code file="/content/sketches/components/frustum/perspectiveFrustum.js" language="js" %}}
{{< /details >}}

