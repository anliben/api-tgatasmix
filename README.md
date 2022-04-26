## PLayer

| Propriedade        | Escopo       | Descrição                                                                                               |
| ------------------ | ------------ | ------------------------------------------------------------------------------------------------------- |
| `id`               | em todo jogo | Identifica o jogador                                                                                    |
| `name`             | em todo jogo | Nome ou nick name do jogador **(ex: Armando)**                                                          |
| `activated`        | em todo jogo | Se o valor for `true` que dizer que a conta está ativa                                                  |
| `photo`            | em todo jogo | Recebe o url da foto do jogador                                                                         |
| `phone`            | em todo jogo | Recebe o número de telefone do jogador                                                                  |
| `associated_clube` | home/clube   | Se o valor for `true` que dizer que a conta está associada a algum clube.                               |
| `clube`            | home/clube   | Se o `associated_clube` for `true` será nessa propriedade que será especificada o id do clube associado |
| `clube`            | home         | Se o `associated_clube` for `true` será nessa propriedade que será especificada o id do clube associado |

```json
{
  "id": "1324",
  "name": "Armando",
  "email": "armando@gmail.com",
  "photo": "dasdasd",
  "phone": "43999999999",
  "activated": true,
  "associated_clube": true,
  "clube": "1234",
  "gold": 42343,
  "diamond": 434,
  "fichaSp": 100,
  "fichaRedeem": 5,
  "level": "100",
  "countNameChanges": 0,
  "updated_at": "2022-01-01T00:00:00.000Z",
  "created_at": "2022-01-01T00:00:00.000Z",
  "vip": true,
  "typeVip": "ouro",
  "expirationVip": "2022-01-01T00:00:00.000Z",
  "invite": "1324",
  "rake": "10",
  "levelRake": "c",
  "friend": {
    "friends": [
      {
        "id": "2458"
      }
    ],
    "friends_requests": []
  },

  "emoticons": [
    {
      "id": "1",
      "src": "link"
    }
  ]
}
```

## MESA

| Propriedade            | Descrição                                                                                                                                                                        |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                   | Identifica a mesa                                                                                                                                                                |
| `tableType`            | Especifica qual é o **tipo da mesa**. No truco só existe dois **cashgame (partida)** ou **torneio**                                                                              |
| `awardTotal`           | Especifica o valor do o **Prêmio Total** ganho ao concluir uma partida vitorioso no modo **cashgame** ou **torneio**. Se caso for **2x2** o **permio total será dividido por 2** |
| `buy`                  | Especifica o valor em `moedas` a serem pagos para entrar na partida ou torneio                                                                                                   |
| `jackpot`              | Especifica o valor em `moedas` a serem pagos para entrar na partida ou torneio                                                                                                   |
| `reBuy`                | Especifica se a mesa pode ser comprada de novo                                                                                                                                   |
| `gameMode`             | Recebe `limpo` ou `sujo` especificando se a mesa é **limpa** ou **suja**                                                                                                         |
| `playersDistribution`  | Recebe `1x1` ou `2x2`                                                                                                                                                            |
| `AreSpectatorsAllowed` | Recebe `true` ou `false` se é permitido virá um espectador                                                                                                                       |
| `spectators`           | Recebe uma lista de objetos que são os espectadores e nessa lista de objetos vai ter: `id`, `nome` e`photo`                                                                      |
| `start_date`           | Data de inicio                                                                                                                                                                   |
| `start_time`           | Hora de inicio                                                                                                                                                                   |
| `status`               | Especifica o status da mesa se ela esta **OCUPADA** ou **ABERTA**                                                                                                                |
| `rules`                | Especifica qual será a regra do jogo se será **mineiro** ou **paulista**                                                                                                         |

## InGame **(em jogo)**

Descrição...

| Propriedade | Descrição |
| ----------- | --------- |
| `lorem`     | lorem     |

## CardHistory **(Histórico de cartas)**

Após a rodada o back deve retornar ao card histtory um array de dados e eles tem as seguinte propriedades

| Propriedade   | Descrição                                                                |
| ------------- | ------------------------------------------------------------------------ |
| `whoPlayed`   | "Quem jogou?" recebe o `id` do jogador que jogou a carta                 |
| `naipe`       | Recebe o naipe da carta                                                  |
| `carta`       | Recebe o número da carta                                                 |
| `round`       | Recebe a rodada que a carta foi jogada                                   |
| `WinnerRound` | Recebe um `verdadeiro` ou `falso` se essa carta foi a que ganhou o round |

#### Exemplo:

```json
{
      "page": 1, //==> paginação do histórico
      "history": [
        {
          "whoPlayed": "1234",
          "naipe": "espada",
          "carta": "3",
          "round": "2",
          "WinnerRound": true
        },
        {
          "whoPlayed": "1234",
          "naipe": "espada",
          "carta": "3",
          "round": "2",
          "WinnerRound": false
        },
        {
          "whoPlayed": "1234",
          "naipe": "espada",
          "carta": "3",
          "round": "2",
          "WinnerRound": false
        }
      ]
    },
    {
      "page": 2
      //.....
    }
```
