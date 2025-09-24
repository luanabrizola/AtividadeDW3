import { error } from 'node:console';
import { ContatoRepository } from './contato.repository.js';

export class ContatoService {
    
  // Agora o Service RECEBE o repositório. Ele não o cria mais.
  constructor(contatoRepository) {
    this.contatoRepository = contatoRepository;

  }

  getAllContatos() {
    return this.contatoRepository.findAll();
  }

  getContatoById(id) {
    return this.contatoRepository.findById(id);
  }

  getContatoByEmail(email){
    return this.contatoRepository.findByEmail(email);
  }

  createContato(contatoData) {

    if(!contatoData.nome || contatoData.nome.length < 3){
      return(this.createContato)
    }

    return this.contatoRepository.create(contatoData);
  }

  updateContato(id, contatoData) {
    return this.contatoRepository.update(id, contatoData);
  }

  deleteContato(id) {
    return this.contatoRepository.remove(id);
  }
}
