# Reto de Algoritmo: Sucesión de Fibonacci

## Fecha (inicio - fin)
[2025-8-2][]

## Descripción
La sucesión de Fibonacci es una secuencia de números donde cada número es la suma de los dos anteriores. La secuencia comienza comúnmente con 0 y 1.

La secuencia se ve así: `0, 1, 1, 2, 3, 5, 8, 13, 21, ...`

Este algoritmo es un excelente ejercicio para entender y practicar conceptos de programación como la **iteración** y la **recursividad**.

## Implementaciones

Existen dos enfoques principales para resolver este problema:

### 1. Solución Iterativa
Esta solución utiliza un bucle para generar la secuencia paso a paso, lo que la hace muy eficiente en uso de memoria.

**Lógica:**
1. Inicia con dos variables, `a = 0` y `b = 1`.
2. Itera un número determinado de veces.
3. En cada iteración, calcula el siguiente número sumando `a` y `b`.
4. Actualiza `a` para que sea `b` y `b` para que sea el nuevo número.

La clave para solucionar este algoritmo es mantener los 2 ultimos valores de la sucesion, obtener un uno nuevo mediante la suma, y actualizar los valores para volver al inicio

### 2. Solución Recursiva
Esta solución se basa en una función que se llama a sí misma. Es una forma más declarativa y matemática de ver el problema, aunque puede ser menos eficiente para números grandes debido a la repetición de cálculos.

**Lógica:**
- El caso base: si `n` es 0 o 1, devuelve `n`.
- El caso recursivo: si `n` es mayor que 1, devuelve la suma de `fibonacci(n-1)` y `fibonacci(n-2)`.

## Estado del Reto
*En proceso*

## ¿Cuál sería la implementación en un proyecto real?
Aunque la sucesión de Fibonacci no se usa directamente en la mayoría de las aplicaciones de negocio, sus conceptos sí son importantes:
- **Análisis de Algoritmos:** Sirve para comparar la eficiencia (complejidad temporal y espacial) entre soluciones iterativas y recursivas.
- **Educación:** Es una herramienta fundamental para enseñar recursividad.
- **Dominios Específicos:** Aparece en áreas como la modelización matemática, el análisis financiero y los gráficos por computadora.
