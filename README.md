# starter
🅰Primera pueba del curso con Angular16: Cluster Tic Galicia🕹

## 📌 Problemas de environments
* Ejecuntando este comando los crea:
  ```
  ng generate environments
  ```
  - Creará los ficheros environment.ts / environment.prod.ts. Y se acutlizará angular.json:
```
 "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.development.ts"
                }
              ]
```
