# Bagel 

Bagel or "figure 8" is an [immersion](https://es.wikipedia.org/wiki/Inmersión_(matemáticas)) of the [Klein bottle](https://en.wikipedia.org/wiki/Klein_bottle). This figure can be done by joining two [Möbius](https://en.wikipedia.org/wiki/Möbius_strip) strips.

## Params

| Name | PropType | description |
| ----------- | ----------- | ----------- |
| **mayorDetail** | *number* | Mayor radius detail.  |
| **minorDetail** | *number* | Minor radius detail. |
| **mayorRadius** | *number* | Radius from the hollow center of the bagel to the center of any "pipe". |
| **minorDetail** | *number* | Radius from any "pipe's" center to it's external surface. |

## Showcase

{{< p5-iframe sketch="/p5.treegl.showcase/sketches/components/bagel/bagel.js" lib1="https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.min.js" lib2="/p5.treegl.showcase/libs/p5.treegl/p5.treegl.js" lib3="https://cdn.rawgit.com/bitcraftlab/p5.gui/master/libraries/p5.gui.js" lib4="https://cdn.rawgit.com/bit101/quicksettings/master/quicksettings.js" width="475" height="475" >}}

`Click and drag to move the camera arround!`

### code 

{{< details title="sketch.js" open=false >}}
{{% code file="/content/sketches/components/bagel/bagel.js" language="js" %}}
{{< /details >}}