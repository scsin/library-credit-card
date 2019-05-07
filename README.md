# Biblioteca de validação de cartões de crédito

**O objetivo dessa biblioteca é validar cartões de crédito usando o Algoritmo de Luhn.**


## Para instalar a biblioteca siga os seguintes passos: 
1.   Instale o node e o npm
2.   Instale a biblioteca `$npm install credit-card-validator-ss`


## O método utilizado na biblioteca é:

### cardValidator(int);

O número do cartão de crédito precisa ter no mínimo 12 e no máximo 19 dígitos.

Exemplo de uso:

```
$node
> let validate = require('credit-card-validator-ss')
> validate.cardValidator(int); // if result != 0 return false
> validate.cardValidator(int); // if result == 0 return true
```

Retornos:
* false para resultados diferentes de 0
* true para resultados iguais a 0


## Roadmap

### Versão 1.0.0
- Funcionalidades: Valida números de cartões de crédito usando o algoritmo de Luhn.