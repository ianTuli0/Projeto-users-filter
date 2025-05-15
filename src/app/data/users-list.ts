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
        }
];
      
