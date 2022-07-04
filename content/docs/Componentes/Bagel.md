# Bagel 

El bagel o "figure 8" es una [immersión](https://es.wikipedia.org/wiki/Inmersión_(matemáticas)) de la botella de Klein. Esta figura se puede hacer uniendo dos cintas de Möbius.

## Parámetros 

- **mayorDetail** *number* : Detalle del recorrido del radio mayor del bagel
- **minorDetail** *number* : Detalle del recorrido del radio menor del bagel. 
- **mayorRadius** *number* : Radio desde el centro del bagle hasta el centro de su "cuerpo".
- **minorDetail** *number* : Radio desde el centro del "cuerpo" hasta la superficie externa de este.

## Showcase

{{< p5-iframe sketch="/showcase/sketches/components/bagel/bagel.js" lib1="https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.min.js" lib2="/showcase/libs/p5.treegl/p5.treegl.js" lib3="https://cdn.rawgit.com/bitcraftlab/p5.gui/master/libraries/p5.gui.js" lib4="https://cdn.rawgit.com/bit101/quicksettings/master/quicksettings.js" width="450" height="450" >}}


### code 

{{< details title="sketch.js" open=false >}}
{{% code file="/content/sketches/components/bagel/bagel.js" language="js" %}}
{{< /details >}}