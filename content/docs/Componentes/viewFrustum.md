# ViewFrustum

Treegl permite visualizar el volumen que está renderizando una cámara por medio de un frustum. Éste frustum mustra la posición de la pantalla, la distancia de renderizado y la forma que esta toma. 

## Parámetros 

- **fbo** *p5.RendererGL | p5.Graphics* : Es el renderer que va a mostrar el frustum. 
- **bits** *number* : Bitmask para controlar diversos parámetros como qué plános se dibujan.
- **viewer** *function* : Callback para mostrar la representación visual del fbo.

## Uso de la Bitmask

El parámetro **bits** permite elegir qué ejes se dibujan y a pesar de que el parámetro que se ingresa es un número, funciona como una [Bitmask](https://en.wikipedia.org/wiki/Mask_(computing)) (Similar a los permisos numéricos del comando [chmod](https://en.wikipedia.org/wiki/Chmod#Numerical_permissions) en GNU/Linux). La bitmask permite que se puedan elegir distintas opciones en un sólo parámetro. La librería añade el objeto Tree que permite un acceso sencillo a los bits necesarios para marcar opciones. La distribución de las selecciones posibles se encuentra ordenada de la siguiente manera: 

| Description | Valor en Tree | Binario | Decimal |
| ----------- | ----------- | ----------- | ----------- |
| Dibuja el plano lejano | Tree.NEAR | 0000001 | 1 |
| Dibuja el plano cercano | Tree.FAR | 0000010 | 2 |
| Dibuja el límite izquierdo | Tree.LEFT | 0000100 | 4 |
| Dibuja el límite derecho | Tree.RIGHT | 0001000 | 8 |
| Dibuja el límite inferior | Tree.BOTTOM | 0010000 | 16 |
| Dibuja el límite superior | Tree.TOP | 0100000 | 32 |
| Dibuja el cuerpo del frostum | Tree.BODY | 1000000 | 64 |

## Proyección ortográfica

En la proyección ortográfica, la cámara que está renderizando la escena no identifica profundidad. Esto implica que independientemente de qué tan lejos se encuentra un objeto de la cámara, éste conservará su tamaño. 

{{< p5-iframe sketch="/showcase/sketches/components/frustum/orthogonalFrustum.js" lib1="https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.min.js" lib2="/showcase/libs/p5.treegl/p5.treegl.js" lib3="https://cdn.rawgit.com/bitcraftlab/p5.gui/master/libraries/p5.gui.js" lib4="https://cdn.rawgit.com/bit101/quicksettings/master/quicksettings.js" width="400" height="700" >}}

### code 

{{< details title="sketch.js" open=false >}}
{{% code file="/content/sketches/components/frustum/orthogonalFrustum.js" language="js" %}}
{{< /details >}}

## Proyección perspectiva

Esta proyección es la más similar al ojo humando. En la proyección perspectiva, la cámara da una sansación de profundidad. Entre más lejano se encuentre un objeto de la cámara, más pequeño se ve.

{{< p5-iframe sketch="/showcase/sketches/components/frustum/perspectiveFrustum.js" lib1="https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.min.js" lib2="/showcase/libs/p5.treegl/p5.treegl.js" lib3="https://cdn.rawgit.com/bitcraftlab/p5.gui/master/libraries/p5.gui.js" lib4="https://cdn.rawgit.com/bit101/quicksettings/master/quicksettings.js" width="400" height="700" >}}

### code 

{{< details title="sketch.js" open=false >}}
{{% code file="/content/sketches/components/frustum/perspectiveFrustum.js" language="js" %}}
{{< /details >}}

