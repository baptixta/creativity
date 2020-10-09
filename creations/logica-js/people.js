let cursos = [
    {
        nome: 'Jogos Digitais',
        alunos: [
            {
                nome: 'João',
                idade: '18'
            },
            {
                nome: 'Hugo',
                idade: '20'
            },
            {
                nome: 'Enzo',
                idade: '16'
            }
        ]
    },

    {
        nome: 'Cybersegurança',
        alunos: [
            {
                nome: 'Denis',
                idade: '30'
            },
            {
                nome: 'Oswaldo',
                idade: '44'
            }
        ]
    },

    {
        nome: 'Gestão de TI',
        alunos: [
            {
                nome: 'Rafaela',
                idade: '22'
            },
            {
                nome: 'Giovana',
                idade: '23'
            }
        ]
    },
]

let alunosNovos = [
        {
            nome: 'Henrique',
            idade: '19'
        },
        {
            nome: 'Silvia',
            idade: '25'
        },
        {
            nome: 'Arnold',
            idade: '70'
        },
]

//
//////
//

let marketing = {}

marketing.nome = "marketing"
marketing.alunos = alunosNovos

cursos.push(marketing)



//
//////
//

function enviarAviso(nome, aviso) {
    let alunoEncontrado

    cursos.forEach((curso) => {
        curso.alunos.forEach((aluno) => {
            if (aluno.nome == nome) {
                alunoEncontrado = aluno
            }
        })
    })

    if (alunoEncontrado) {
        if (alunoEncontrado.idade >= 18) {
            console.log(aviso + ' ' + alunoEncontrado.nome)
        } else {
            console.log(alunoEncontrado.nome + ', ' + 'Espere até os 18 anos.')
        }
    } else {
        console.log('Nome não cadastrado.')
    }
}

console.log(cursos)

enviarAviso('Enzo', 'Faça nosso vestibular!')