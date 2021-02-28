# Yonnit Components

[Home](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md) | [Atoms](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#atoms) | [Molecules](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#molecules) | [Bosons](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#bosons) | [Quarks](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#quarks)

## YooTableCard

Component used to list items with label and tags

## Usage

To use the component, simply invoke it in your template with the desired props

### Input
```vue
<template>
  <yoo-table-card
    title="YooTableCard"
    subtitle="Admin"
    :details='[{"text":"Admin","status":true},{"text":"Funcionários","status":false},{"text":"Segurança","status":false},{"text":"Manutenção"},{"text":"Nome do Grupo"},{"text":"Pagode da Firma"}]'
    :actionable="false"
    :buttonDisable="false"
    :separator="false"
    fill="primary"
  />
  <yoo-table-card
    title="YooTableCard"
    subtitle="Admin"
    :details='[{"text":"Admin","status":true},{"text":"Funcionários","status":false},{"text":"Segurança","status":false},{"text":"Manutenção"},{"text":"Nome do Grupo"},{"text":"Pagode da Firma"}]'
    :actionable="true"
    actionableType="button"
    :separator="true"
    fill="primary"
  />
  <yoo-table-card
    title="YooTableCard"
    subtitle="Admin"
    :details='[{"text":"Admin","status":true},{"text":"Funcionários","status":false},{"text":"Segurança","status":false},{"text":"Manutenção"},{"text":"Nome do Grupo"},{"text":"Pagode da Firma"}]'
    :actionable="true"
    actionableType="check"
    :separator="false"
    fill="primary"
  />
</template>
```
### Output

The output of the above code will be:

<img src="https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/public/readme-img/table-card.png">

### Props

| Name               | Input/Format                                  | Description                                                                 |
| -                  | -                                             | -                                                                           |
| title              | String                                        | Sets the component item title                                               |
| subtitle           | String                                        | Set the text next to the title                                              |
| fill               | primary, danger, light, dark                  | Set the color of the tag, subtitle and button                               |
| details            | [{"text":"NameTag","status":true/false} ]     | Set a list of tags                                                          |
| actionable         | true/false                                    | Set the item as actionable                                                  |
| actionableType     | button, check                                 | Set a button or checkbox on the item                                        |
| buttonDisable      | true/false                                    | Sets the button to disabled when the type option is a button                |
| separator          | true/false                                    | Set a border under item separation                                          |

#
 
 #### :arrow_backward: [**Previous component**](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/src/components/molecules/TableAttribute/TableAttribute.readme.md)

#

## To contribute and make it better

Clone the repo, change what you want and send PR.

Contributions are always welcome!

---

Code with ❤ by the [**Cyberlabs AI**](https://cyberlabs.ai/) Front-End Team
