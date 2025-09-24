import { ContatoService } from './contato.service.js';

export class ContatoController {
  
  // O Controller está "amarrado" à implementação do ContatoService.
  constructor(contatoService) {
    this.contatoService = contatoService;
  }

  async getContatos(request, reply) {
    const contatos = this.contatoService.getAllContatos();
    return reply.send(contatos);
  }

  async getContatoById(request, reply) {
    const { id } = request.params;
    const contato = this.contatoService.getContatoById(id);

    if (!contato) {
      return reply.code(404).send({ message: 'Contato não encontrado' });
    }
    return reply.send(contato);
  }

  async getContatoByEmail(request, reply){
    const {email} = request.params;
    const contatoEmail = this.contatoService.getContatoByEmail(email);

    if(!contatoEmail) {
      return reply.code(404).send({message:'Contato não encotrado'})
    }
    return reply.send(contatoEmail)

  }

  async createContato(request, reply) {
    const novoContato = this.contatoService.createContato(request.body);

    if (!novoContato){
      return reply.code(404).send({message: 'Não foi possível criar o novo contato'})
    }
    return reply.send(novoContato);
  }

  async updateContato(request, reply) {
    const { id } = request.params;
    const contatoAtualizado = this.contatoService.updateContato(id, request.body);

    if (!contatoAtualizado) {
      return reply.code(404).send({ message: 'Contato não encontrado' });
    }
    return reply.send(contatoAtualizado);
  }

  async deleteContato(request, reply) {
    const { id } = request.params;
    const sucesso = this.contatoService.deleteContato(id);

    if (!sucesso) {
      return reply.code(404).send({ message: 'Contato não encontrado' });
    }
    return reply.code(204).send();
  }
}
