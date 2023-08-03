let nomeRegex = /[^a-z,^A-Z,^0-9]/g;
let urlRegex = /[^a-z,^A-Z,^0-9,.,:,/]/g;

export const app = [
    {
        "key": "nome",
        "label": "nome",
        "valueType": "text",
        "regex": nomeRegex,
        "replace": "_"
    },
    {
        "key": "url",
        "label": "Url",
        "valueType": "text",
        "regex": urlRegex,
        "replace": ""
    },
    {
        "key": "container",
        "valueType": "select",
        "label": "Server"
    }
]