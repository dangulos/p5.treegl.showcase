# Grid

Una grid es una cuadrícula que facilita visualizar el tamaño, movimiento o rotación de un objeto al colocarla desde un punto relativo.

## Parámetros 

- **subdivisions** *number* : Cantidad de subdivisiones. 
- **size** *number* : Tamaño de la cuadrilla.
- **shape** *number* : La cuadrilla puede mostrarse en forma punteada (con `Tree.DOTS`) o sólida (con `Tree.SOLID`). Defacto es punteada.

## Showcase

{{< p5-iframe sketch="/showcase/sketches/components/grid/grid.js" lib1="https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.min.js" lib2="/showcase/libs/p5.treegl/p5.treegl.js" lib3="https://cdn.rawgit.com/bitcraftlab/p5.gui/master/libraries/p5.gui.js" lib4="https://cdn.rawgit.com/bit101/quicksettings/master/quicksettings.js" width="400" height="400" >}}

### code 

{{< details title="sketch.js" open=false >}}
{{% code file="/content/sketches/components/grid/grid.js" language="js" %}}
{{< /details >}}