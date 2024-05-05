# Si empezamos desde 0:
    *git init
    *git add .
    *git commit -m 'algún comentario'
    *git branch -M main
**Debemos crear un repo en github**
    *git remote add origin https (...etc...etc nos va a conectar con el repositorio remoto que ya creamos en Github)
    *git push -u origin main (nos va a enviar los cambios al repositorio remoto)

Listo, ya tenemos nuestro repo en Github con lo que hayamos modificado y subido.

 

  # Si estoy actualizando luego de hacer ctrl +s (obviamente) :

    *git add .
    *git commit -m 'algún comentario'
    *git push
  
  # ACLARACIONES:

  **Si me equivoqué al poner el git remote usamos el comando:**

    *git remote set-url origin https:// (URL correcta de nuestro repositorio)    

  **Podemos usar git status para obtemer una información detallada del estado de nuestro repo:**  

    *git status

  **Para ver que origen remoto tengo:**  

    *git remote -v

