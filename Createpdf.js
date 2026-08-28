// ============================================================
//  Nurse Assistência Domiciliar — geração de comprovativo PDF
//  Ficheiro: app.js
//  Dependência: jsPDF (já incluído no HTML)
// ============================================================

function gerarPDFInscricao(nome, curso, telefone, email) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const hoje = new Date().toLocaleDateString('pt-PT');

  // Faixa de topo — azul navy
  doc.setFillColor(13, 27, 42);
  doc.rect(0, 0, 210, 28, 'F');

  // Nome da escola — laranja
  doc.setFontSize(20);
  doc.setTextColor(245, 166, 35);
  doc.setFont('helvetica', 'bold');
  doc.text('NURSE', 105, 13, { align: 'center' });

  // Subtítulo
  doc.setFontSize(8);
  doc.setTextColor(143, 168, 191);
  doc.setFont('helvetica', 'normal');
  doc.text('ASSISTÊNCIA DOMICILIAR', 105, 20, { align: 'center' });

  // Linha verde
  doc.setDrawColor(44, 184, 76);
  doc.setLineWidth(1);
  doc.line(20, 32, 190, 32);

  // Título do documento
  doc.setFontSize(16);
  doc.setTextColor(13, 27, 42);
  doc.setFont('helvetica', 'bold');
  doc.text('Comprovativo de Inscrição', 105, 48, { align: 'center' });

  // Corpo
  doc.setFontSize(12);
  doc.setTextColor(40, 40, 40);
  doc.setFont('helvetica', 'normal');
  doc.text('Confirmamos a inscrição do(a) formando(a):', 20, 68);

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(13, 27, 42);
  doc.setFontSize(14);
  doc.text(nome, 20, 78);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(60, 60, 60);
  doc.text('no seguinte curso:', 20, 90);

  // Caixa do curso — fundo azul claro
  doc.setFillColor(230, 240, 255);
  doc.roundedRect(18, 95, 174, 16, 3, 3, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(30, 111, 200);
  doc.setFontSize(12);
  doc.text(curso, 105, 105, { align: 'center', maxWidth: 165 });

  // Dados de contacto
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(80, 80, 80);
  doc.setFontSize(10);
  doc.text('Telefone: ' + telefone, 20, 125);
  if (email) doc.text('Email: ' + email, 20, 133);

  // Caixa de boas-vindas
  doc.setFillColor(245, 250, 245);
  doc.roundedRect(18, 145, 174, 28, 3, 3, 'F');
  doc.setDrawColor(44, 184, 76);
  doc.setLineWidth(0.5);
  doc.roundedRect(18, 145, 174, 28, 3, 3, 'S');
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(44, 184, 76);
  doc.setFontSize(11);
  doc.text('Boas-vindas!', 105, 156, { align: 'center' });
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(60, 60, 60);
  doc.setFontSize(9);
  doc.text('Estamos muito felizes por teres escolhido a Nurse para a tua formação.', 105, 164, { align: 'center' });
  doc.text('Prepara-te para aprender, crescer e fazer a diferença na saúde de Angola.', 105, 170, { align: 'center' });

  // Rodapé
  doc.setDrawColor(13, 27, 42);
  doc.setLineWidth(0.5);
  doc.line(20, 270, 190, 270);
  doc.setFontSize(8);
  doc.setTextColor(143, 168, 191);
  doc.text('Nurse Assistência Domiciliar · Luanda, Angola', 105, 277, { align: 'center' });
  doc.text('Data de inscrição: ' + hoje, 105, 283, { align: 'center' });

  //vamos substituir por outro método 
  //doc.save(`Certificado_${nome}.pdf`);
  
  // Cria um "blob" (o arquivo) e uma URL temporária
const pdfBlob = doc.output('blob');
const url = URL.createObjectURL(pdfBlob);

// Cria um link invisível e clica nele para forçar o download
const link = document.createElement('a');
link.href = url;
link.download = `Certificado_${nome}.pdf`;
document.body.appendChild(link);
link.click();
document.body.removeChild(link);

// Limpa a memória
URL.revokeObjectURL(url);
  //oba
}
