import { IUser } from "../interfaces/user/user.interface";


export const UsersList: IUser[] =
    [
        {
          nome: "João Silva",
          email: "joao.silva@example.com",
          senha: "senha-segura-123",
          idade: 30,
          endereco: {
            rua: "Rua das Flores",
            numero: 42,
            cidade: "São Paulo",
            estado: "SP",
            pais: "Brasil"
          },
          telefone: "11912345678",
          ativo: true,
          funcao: "Desenvolvedor",
          dataCadastro: "2023-08-01T09:00:00.000Z",
          status: {
            online: true,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2023-08-02T09:00:00.000Z"
          }
        },
        {
          nome: "Maria Souza",
          email: "maria.souza@example.com",
          senha: "minha-senha123",
          idade: 27,
          endereco: {
            rua: "Av. Brasil",
            numero: 1000,
            cidade: "Rio de Janeiro",
            estado: "RJ",
            pais: "Brasil"
          },
          telefone: "21987654321",
          ativo: false,
          funcao: "Analista",
          dataCadastro: "2023-05-10T14:30:00.000Z",
          status: {
            online: false,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: "2023-08-01T10:15:00.000Z"
          }
        },
        {
          nome: "Carlos Pereira",
          email: "carlos.pereira@example.com",
          senha: "abc123456",
          idade: 35,
          endereco: {
            rua: "Rua Central",
            numero: 55,
            cidade: "Curitiba",
            estado: "PR",
            pais: "Brasil"
          },
          telefone: "41999999999",
          ativo: true,
          funcao: "Gerente",
          dataCadastro: "2022-12-15T08:00:00.000Z",
          status: {
            online: false,
            verificado: false,
            assinaturaAtiva: true,
            ultimoAcesso: "2023-07-30T12:00:00.000Z"
          }
        },

        {
  nome: "Ana Lima",
  email: "ana.lima@example.com",
  senha: "ana123secure",
  idade: 29,
  endereco: {
    rua: "Rua da Paz",
    numero: 12,
    cidade: "Belo Horizonte",
    estado: "MG",
    pais: "Brasil"
  },
  telefone: "31988887777",
  ativo: true,
  funcao: "UX Designer",
  dataCadastro: "2023-07-12T10:20:00.000Z",
  status: {
    online: true,
    verificado: true,
    assinaturaAtiva: true,
    ultimoAcesso: "2023-08-03T09:30:00.000Z"
  }
},
{
  nome: "Bruno Rocha",
  email: "bruno.rocha@example.com",
  senha: "senhaBruno456",
  idade: 33,
  endereco: {
    rua: "Rua Verde",
    numero: 89,
    cidade: "Fortaleza",
    estado: "CE",
    pais: "Brasil"
  },
  telefone: "85912349876",
  ativo: false,
  funcao: "QA Tester",
  dataCadastro: "2023-06-18T11:45:00.000Z",
  status: {
    online: false,
    verificado: false,
    assinaturaAtiva: false,
    ultimoAcesso: "2023-07-25T08:00:00.000Z"
  }
},
{
  nome: "Camila Dias",
  email: "camila.dias@example.com",
  senha: "camilaSafe789",
  idade: 24,
  endereco: {
    rua: "Rua Azul",
    numero: 10,
    cidade: "Salvador",
    estado: "BA",
    pais: "Brasil"
  },
  telefone: "71987654321",
  ativo: true,
  funcao: "Estagiária",
  dataCadastro: "2023-09-01T13:00:00.000Z",
  status: {
    online: true,
    verificado: true,
    assinaturaAtiva: false,
    ultimoAcesso: "2023-09-01T13:00:00.000Z"
  }
},
{
  nome: "Daniel Martins",
  email: "daniel.martins@example.com",
  senha: "danielM2023",
  idade: 40,
  endereco: {
    rua: "Rua das Palmeiras",
    numero: 200,
    cidade: "Brasília",
    estado: "DF",
    pais: "Brasil"
  },
  telefone: "61999998888",
  ativo: true,
  funcao: "Product Owner",
  dataCadastro: "2023-01-20T07:50:00.000Z",
  status: {
    online: false,
    verificado: true,
    assinaturaAtiva: true,
    ultimoAcesso: "2023-08-04T09:45:00.000Z"
  }
},
{
  nome: "Fernanda Alves",
  email: "fernanda.alves@example.com",
  senha: "fern@2023safe",
  idade: 31,
  endereco: {
    rua: "Av. Independência",
    numero: 350,
    cidade: "Recife",
    estado: "PE",
    pais: "Brasil"
  },
  telefone: "81911112222",
  ativo: false,
  funcao: "Scrum Master",
  dataCadastro: "2023-03-15T09:30:00.000Z",
  status: {
    online: false,
    verificado: false,
    assinaturaAtiva: false,
    ultimoAcesso: "2023-06-01T10:00:00.000Z"
  }
},
{
  nome: "Eduardo Nascimento",
  email: "eduardo.nascimento@example.com",
  senha: "edNasc#321",
  idade: 36,
  endereco: {
    rua: "Rua do Sol",
    numero: 77,
    cidade: "Porto Alegre",
    estado: "RS",
    pais: "Brasil"
  },
  telefone: "51987654321",
  ativo: true,
  funcao: "Arquiteto de Software",
  dataCadastro: "2023-02-11T08:10:00.000Z",
  status: {
    online: false,
    verificado: true,
    assinaturaAtiva: true,
    ultimoAcesso: "2023-07-31T15:25:00.000Z"
  }
},
{
  nome: "Juliana Castro",
  email: "juliana.castro@example.com",
  senha: "julianaCast@1",
  idade: 26,
  endereco: {
    rua: "Rua do Comércio",
    numero: 150,
    cidade: "Manaus",
    estado: "AM",
    pais: "Brasil"
  },
  telefone: "92911223344",
  ativo: true,
  funcao: "Desenvolvedora",
  dataCadastro: "2023-04-25T12:40:00.000Z",
  status: {
    online: true,
    verificado: true,
    assinaturaAtiva: false,
    ultimoAcesso: "2023-08-03T16:00:00.000Z"
  }
},
{
  nome: "Pedro Gomes",
  email: "pedro.gomes@example.com",
  senha: "pedroGomes123",
  idade: 38,
  endereco: {
    rua: "Av. das Américas",
    numero: 401,
    cidade: "Florianópolis",
    estado: "SC",
    pais: "Brasil"
  },
  telefone: "48999991111",
  ativo: true,
  funcao: "DevOps",
  dataCadastro: "2023-06-05T09:15:00.000Z",
  status: {
    online: false,
    verificado: true,
    assinaturaAtiva: true,
    ultimoAcesso: "2023-08-02T14:50:00.000Z"
  }
},
{
  nome: "Larissa Melo",
  email: "larissa.melo@example.com",
  senha: "larimelo@456",
  idade: 22,
  endereco: {
    rua: "Rua Nova",
    numero: 5,
    cidade: "João Pessoa",
    estado: "PB",
    pais: "Brasil"
  },
  telefone: "83999887766",
  ativo: true,
  funcao: "Suporte Técnico",
  dataCadastro: "2023-07-01T17:00:00.000Z",
  status: {
    online: true,
    verificado: true,
    assinaturaAtiva: false,
    ultimoAcesso: "2023-08-03T18:30:00.000Z"
  }
},
{
  nome: "Thiago Ramos",
  email: "thiago.ramos@example.com",
  senha: "tRamos2023*",
  idade: 45,
  endereco: {
    rua: "Rua Antiga",
    numero: 99,
    cidade: "Natal",
    estado: "RN",
    pais: "Brasil"
  },
  telefone: "84988776655",
  ativo: false,
  funcao: "Administrador",
  dataCadastro: "2023-05-01T06:20:00.000Z",
  status: {
    online: false,
    verificado: false,
    assinaturaAtiva: false,
    ultimoAcesso: "2023-06-28T11:45:00.000Z"
  }
}
];
      
