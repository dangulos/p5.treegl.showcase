# Axes

Los Axes (o ejes en español) dibujan tres líneas ortogonales en 3D que pueden ser útiles como punto de referencia al momento de rotar algún objeto

## Parámetros 

- **size** *number* : Tamaño de los ejes, todos los ejes comparten la misma distancia. 
- **bits** *number* : Bitmask que permite indicar qué ejes dibujar.

## Uso de la Bitmask

El parámetro **bits** permite elegir qué ejes se dibujan y a pesar de que el parámetro que se ingresa es un número, funciona como una [Bitmask](https://en.wikipedia.org/wiki/Mask_(computing)) (Similar a los permisos numéricos del comando [chmod](https://en.wikipedia.org/wiki/Chmod#Numerical_permissions) en GNU/Linux). La bitmask permite que se puedan elegir distintas opciones en un sólo parámetro. La librería añade el objeto Tree que permite un acceso sencillo a los bits necesarios para marcar opciones. La distribución de las selecciones posibles se encuentra ordenada de la siguiente manera: 

| Description | Valor en Tree | Binario | Decimal |
| ----------- | ----------- | ----------- | ----------- |
| Dibuja el eje X | Tree.X | 0000001 | 1 |
| Dibuja el eje Y | Tree.Y | 0000010 | 2 |
| Dibuja el eje Z | Tree.Z | 0000100 | 4 |
| Dibuja el eje -X | Tree._X | 0001000 | 8 |
| Dibuja el eje -Y | Tree._Y | 0010000 | 16 |
| Dibuja el eje -z | Tree._Z | 0100000 | 32 |
| Dibuja labels que indican el eje | Tree.LABELS | 1000000 | 64 |

## Ejemplos

Si se quisiera mostrar todos los ejes positivos sin los label se podría hacer de la siguiente manera:

```js
axes({ size: 100, bits: Tree.X | Tree.Y | Tree.Z });
```

Como sabemos que bits es un numero, puede recibir directamente un valor númerico que, aunque un poco más confuso, daría un código más corto. Simplemente se toman los valores de la tabla de arriba y se suman. Esto correspondería a `1 + 2 + 4 = 7`. Por ejemplo, el siguiente código es equivalente al de arriba:

```js
axes({ size: 100, bits: 7 });
```

## Showcase

{{< p5-iframe sketch="/showcase/sketches/components/axes/axes.js" lib1="https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.min.js" lib2="/showcase/libs/p5.treegl/p5.treegl.js" lib3="https://cdn.rawgit.com/bitcraftlab/p5.gui/master/libraries/p5.gui.js" lib4="https://cdn.rawgit.com/bit101/quicksettings/master/quicksettings.js" width="400" height="400" >}}

### code 

{{< details title="sketch.js" open=false >}}
{{% code file="/content/sketches/components/axes/axes.js" language="js" %}}
{{< /details >}}