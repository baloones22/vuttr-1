FORMAT: 1A

# API Very Useful Tools to Remember

A aplicação é um simples repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.

# Grupo de endpoins Tools

## Tools [/tools]

### Listar todas as ferramentas [GET]
+ Response 200 (application/json)

        [
 
            {
                id: 1,
                title: "Notion",
                link: "https://notion.so",
                description: "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
                tags: [
                    "organization",
                    "planning",
                    "collaboration",
                    "writing",
                    "calendar"
                ]
            }
        ]

### Criar uma nova ferramenta [POST]

É possível criar uma nova ferramenta

+ title (string) - Nome da Ferramenta
+ link (string) - Link da Ferramenta
+ description (string) - Descrição da Ferramenta
+ tags (array[string]) - Lista de Tags

+ Request (application/json)
    + Body

            {
 
                "title": "hotel",
                "link": "https://github.com/typicode/hotel",
                "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
                "tags":["node", "organizing", "webapps", "domain", "developer", "https", "proxy"]
            }

+ Response 200 (application/json)
    + Body

            {
                "title": "hotel",
                "link": "https://github.com/typicode/hotel",
                "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
                "tags":["node", "organizing", "webapps", "domain", "developer", "https", "proxy"],
                "id":5
            }

## Tools [/tools/{id}]

### Remover uma ferramenta [DELETE]

API para remover uma ferramenta da base de dados

+ Response 200 (application/json)
+ Parameters
    + id (number) - Identificador da Ferramenta


