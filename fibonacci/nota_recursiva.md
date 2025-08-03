La clave de la recursividad es pensar en ella como una cadena de delegación. Una función se    
  delega a sí misma una versión más simple del problema hasta que llega a un punto tan simple que
  ya no necesita delegar más.

  Imagina que la función fibonacciRecursivo(n) tiene solo dos reglas en su "manual de
  instrucciones":


   1. La Regla Base (la salida de emergencia): Si me pides el número en la posición 0 o 1, no       
      necesito calcular nada. La respuesta es 0 y 1, respectivamente. Esto es fundamental, porque es
      lo que detiene la cadena de llamadas.

   1     if (n <= 1) {
   2       return n;
   3     }



   2. La Regla Recursiva (la delegación): Si me pides cualquier otro número n, no sé la respuesta
      directamente. Pero sé que la respuesta es la suma de los dos números anteriores (n-1 y n-2).
      Así que mi trabajo es llamar a dos "ayudantes" (dos copias de mí misma) y pedirles que
      resuelvan esas dos partes. Luego, simplemente sumo lo que ellos me devuelvan.

   1     return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);



  Siguiendo el rastro de fibonacciRecursivo(4)

  Aquí es donde se aclara la magia. Las sumas no ocurren todas a la vez. Ocurren en el "viaje de
  vuelta" de las llamadas.

  Visualicemos el árbol de llamadas. Para calcular fib(4), la función hace lo siguiente:


   1. `fib(4)`: No sabe la respuesta. Llama a fib(3) y a fib(2). Se queda en pausa, esperando a que
      le devuelvan los resultados.


   1     fib(4)
   2     /    \
   3     fib(3)  fib(2)



   2. `fib(3)`: No sabe la respuesta. Llama a fib(2) y a fib(1). Se pone en pausa.
      `fib(2)` (el de la derecha): No sabe la respuesta. Llama a fib(1) y a fib(0). Se pone en   
  pausa.


   1        fib(4)
   2        /    \
   3      fib(3)   fib(2)
   4      /   \    /   \
   5     fib(2) fib(1) fib(1) fib(0)



   3. ¡Llegamos a la Regla Base!
       * Todas las llamadas a fib(1) y fib(0) ya no necesitan delegar.
       * fib(1) devuelve 1.
       * fib(0) devuelve 0.


   4. El Viaje de Vuelta (aquí ocurren las sumas): Ahora los resultados empiezan a subir por el     
      árbol.
       * La llamada a fib(2) que estaba en pausa ahora recibe 1 (de fib(1)) y 0 (de fib(0)). Los    
         suma (1 + 0 = 1) y devuelve 1 a quien le llamó (fib(3)).
       * La llamada a fib(3) ahora tiene uno de sus resultados: 1 (de fib(2)). También recibe 1 (de 
         su llamada directa a fib(1)). Los suma (1 + 1 = 2) y devuelve 2 a quien le llamó (fib(4)). 
       * La llamada original a fib(4) ya tiene su primer resultado: 2 (de fib(3)). Ahora espera el  
         resultado de su otra llamada, fib(2).
       * Esa llamada a fib(2) (la de la derecha del todo) también recibe 1 y 0, los suma, y devuelve
         1.
       * Finalmente, la llamada original a fib(4) recibe 1. Ahora tiene los dos resultados que      
         necesitaba: 2 (de fib(3)) y 1 (de fib(2)). Los suma (2 + 1 = 3) y devuelve el resultado    
         final: 3.


  En resumen: La función se descompone en llamadas cada vez más pequeñas hasta que llega a las 
  respuestas conocidas (0 y 1). Luego, a medida que cada función termina, pasa su resultado hacia 
  arriba en la cadena, permitiendo que las funciones que la llamaron completen sus propias sumas.


  Es como un árbol genealógico: para saber quién eres tú (fib(4)), necesitas conocer a tus padres
  (fib(3) y fib(2)), y ellos a los suyos, hasta llegar a los ancestros originales (fib(1) y
  fib(0)) cuyo origen ya se conoce.