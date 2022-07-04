# Bullseye

Los bullseye son figuras en 2D que facilitan indentificar la posición de un objeto en 3D.

## Parámetros 

<!-- - **mMatrix** *p5.Matrix* : tbd.  -->
- **x** *number* : Posición en x.
- **y** *number* : Posición en y. 
- **size** *number* : Diámetro del bullseye.
- **shape** *number* : El bullseye puede mostrarse en forma circular (con `Tree.CIRCLE`) o cuadrada (con `Tree.SQUARE`). Defacto es circular.

## Showcase

{{< p5-iframe sketch="/showcase/sketches/components/bullseye/bullseye.js" lib1="https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.min.js" lib2="/showcase/libs/p5.treegl/p5.treegl.js" lib3="https://cdn.rawgit.com/bitcraftlab/p5.gui/master/libraries/p5.gui.js" lib4="https://cdn.rawgit.com/bit101/quicksettings/master/quicksettings.js" width="400" height="400" >}}

### code 

{{< details title="sketch.js" open=false >}}
{{% code file="/content/sketches/components/bullseye/bullseye.js" language="js" %}}
{{< /details >}}