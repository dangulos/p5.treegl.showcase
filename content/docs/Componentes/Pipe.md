# Pipe

Un pipe es un cilindro cuyas bases se pueden rotar dado un vector específico. Esta figura es útil porque cuando se concatenan varias se pueden hacer figuras más completas.

## Parámetros 

- **detail** *number* : El detalle del cilindro. Entre mayor sea, más suave se ve. 
- **topRadius** *number* : Radio de la base superior del cilindro.
- **bottomRadius** *number* : Radio de la base inferior del cilindro.
- **height** *number* : La altura del cilindro.
- **topNormal** *p5.Vector* : Vector que indica cómo está inclinada la base superior del cilindro.
- **bottomNormal** *p5.Vector* : Vector que indica cómo está inclinada la base inferior del cilindro.

## Showcase

{{< p5-iframe sketch="/showcase/sketches/components/pipe/pipe.js" lib1="https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.min.js" lib2="/showcase/libs/p5.treegl/p5.treegl.js" lib3="https://cdn.rawgit.com/bitcraftlab/p5.gui/master/libraries/p5.gui.js" lib4="https://cdn.rawgit.com/bit101/quicksettings/master/quicksettings.js" width="450" height="450" >}}

### code 

{{< details title="sketch.js" open=false >}}
{{% code file="/content/sketches/components/pipe/pipe.js" language="js" %}}
{{< /details >}}