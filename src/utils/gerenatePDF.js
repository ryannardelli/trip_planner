import { jsPDF } from 'jspdf';
export const generatePDF = () => {
  const doc = new jsPDF();

  // Adicionando título
  doc.setFontSize(18);
  doc.text('Relatório de Previsão do Tempo', 20, 20);

  // Adicionando conteúdo ao PDF (informações do tempo)
  doc.setFontSize(12);
  doc.text(`Temperatura: 25°C`, 20, 40);
  doc.text(`Condição: Ensolarado`, 20, 50);
  doc.text(`Umidade: 65%`, 20, 60);
  doc.text(`Vento: 15 km/h`, 20, 70);

  doc.text('Previsão para os próximos dias:', 20, 85);
  doc.text('Segunda-feira: Máx: 28°C, Mín: 18°C, Ensolarado', 20, 95);
  doc.text('Terça-feira: Máx: 25°C, Mín: 20°C, Parcialmente nublado', 20, 105);
  doc.text('Quarta-feira: Máx: 30°C, Mín: 22°C, Chuva leve', 20, 115);

  doc.text(`Localização: São Paulo, SP`, 20, 125);
  doc.text(`Última atualização: 12:30 PM`, 20, 135);

  // Gerando o arquivo PDF
  doc.save('relatorio_previsao_tempo.pdf');
};
