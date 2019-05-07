# Biblioteca de validação de cartões de crédito

**O objetivo dessa biblioteca é validar cartões de crédito usando o Algoritmo de Luhn.**


## Para instalar a biblioteca siga os seguintes passos: 
1.   Instale o node e o npm
2.   Instale a biblioteca `$npm install credit-card-validator-ss`


## O método utilizado na biblioteca é:

### cardValidator(int);

Exemplo de uso:

```
$node
> let validate = require('credit-card-validator-ss')
> validate.cardValidator(int); // if result != 100 return false
> validate.cardValidator(int); // if result == 100 return true
```

Retornos:
* false para resultados diferentes de 100
* true para resultados iguais a 100


## Roadmap

### Versão 1.0.0
- Funcionalidades: Valida números de cartões de crédito usando o algoritmo de Luhn.