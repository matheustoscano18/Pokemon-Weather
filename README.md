# Pokémon Clima

Este projeto é uma aplicação web que integra as APIs OpenWeatherMap e PokéAPI para exibir Pokémons com base nas condições climáticas de uma cidade inserida pelo usuário.

# Funcionalidades

Permite ao usuário pesquisar por uma cidade e obter as condições climáticas atuais.

Baseando-se na temperatura e no clima da cidade, exibe um Pokémon de um tipo específico:

Temperatura < 5ºC: Pokémon do tipo Ice (Gelo).

5ºC <= Temperatura < 10ºC: Pokémon do tipo Water (Água).

10ºC <= Temperatura < 15ºC: Pokémon do tipo Grass (Grama).

15ºC <= Temperatura < 21ºC: Pokémon do tipo Ground (Terra).

21ºC <= Temperatura < 27ºC: Pokémon do tipo Bug (Inseto).

27ºC <= Temperatura <= 33ºC: Pokémon do tipo Rock (Pedra).

Temperatura > 33ºC: Pokémon do tipo Fire (Fogo).

Clima com chuva: Pokémon do tipo Electric (Elétrico), independente da temperatura.

Qualquer outra condição: Pokémon do tipo Normal.

O Pokémon é selecionado de forma aleatória dentro do tipo determinado e não se repete consecutivamente.

# Tecnologias Utilizadas

HTML5

CSS3

JavaScript (ES6+)

# APIs:

OpenWeatherMap para obter os dados climáticos.

PokéAPI para buscar os Pokémons.
