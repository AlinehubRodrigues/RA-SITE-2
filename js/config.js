/**
 * ===================================================================
 * RA EMPILHADEIRAS - CENTRAL DE CONFIGURAÇÃO E DADOS DE CONTATO
 * ===================================================================
 * 
 * Este arquivo centraliza todas as informações de contato da empresa.
 * Os dados abaixo foram extraídos do cartão oficial de visita da RA:
 * - WhatsApp Principal: (16) 99268-9771
 * - Telefone Fixo: (16) 3419-9704
 * - Anthony: (16) 99129-4888
 * - Douglas: (16) 99173-9634
 * - Endereço: R. Arthur Rodrigues de Castro, 876 - Jardim São Paulo, São Carlos/SP, 13570-410
 * 
 * Para alterar qualquer contato, basta modificar os valores abaixo.
 */

const RA_CONFIG = {
  // Define se exibe os dados reais do cartão oficial ou exibe marcadores [A preencher]
  useOfficialCardData: true,

  company: {
    name: "RA Empilhadeiras",
    shortName: "R.A",
    subtitle: "Manutenção e Locação / Prensagem de Pneus Maciços",
    slogan: "Sua operação não pode parar."
  },

  // Contatos comerciais
  contacts: {
    whatsapp: {
      number: "5516992689771",
      formatted: "(16) 99268-9771",
      label: "WhatsApp Comercial",
      defaultMessage: "Olá! Gostaria de solicitar um orçamento com a RA Empilhadeiras para a minha empresa."
    },
    phoneFixed: {
      number: "1634199704",
      formatted: "(16) 3419-9704",
      label: "Telefone Fixo"
    },
    team: [
      {
        name: "Anthony",
        role: "Comercial / Atendimento",
        number: "5516991294888",
        formatted: "(16) 99129-4888"
      },
      {
        name: "Douglas",
        role: "Técnico / Operacional",
        number: "5516991739634",
        formatted: "(16) 99173-9634"
      }
    ],
    email: {
      address: "contato@raempilhadeiras.com.br",
      label: "E-mail de Contato"
    },
    address: {
      street: "R. Arthur Rodrigues de Castro, 876",
      district: "Jardim São Paulo",
      city: "São Carlos",
      state: "SP",
      cep: "13570-410",
      full: "R. Arthur Rodrigues de Castro, 876 - Jardim São Paulo, São Carlos/SP - CEP 13570-410",
      googleMapsLink: "https://www.google.com/maps/search/?api=1&query=R.+Arthur+Rodrigues+de+Castro,+876+-+Jardim+S%C3%A3o+Paulo,+S%C3%A3o+Carlos+-+SP"
    },
    businessHours: "Segunda a Sexta-feira das 07h30 às 18h00"
  },

  // Textos para modo placeholder (caso useOfficialCardData seja desativado)
  placeholders: {
    whatsapp: "[ (00) 00000-0000 ]",
    phoneFixed: "[ (00) 0000-0000 ]",
    email: "[ contato@raempilhadeiras.com.br ]",
    address: "[ Endereço a preencher - Cidade/UF ]",
    businessHours: "[ Horário de atendimento a preencher ]"
  }
};
