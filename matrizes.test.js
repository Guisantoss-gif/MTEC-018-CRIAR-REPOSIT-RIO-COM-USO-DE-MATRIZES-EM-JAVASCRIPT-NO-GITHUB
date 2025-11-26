const { getCarro, getMoto, getCaminhao } = require('./matrizes');

describe('Testes de Busca de Veículos', () => {

  test('getCarro deve retornar o objeto do "monza"', () => {
    const expectedCarro = { modelo: "monza", cilindrada: 2000, marca: "chevrolet", ano: 1993 };
    const result = getCarro('monza');
    expect(result).toEqual(expectedCarro);
  });
  
  test('getCarro deve retornar undefined para um modelo inexistente', () => {
    const result = getCarro('Fusca'); 
    expect(result).toBeUndefined();
  });

  test('getMoto deve retornar o objeto da "cb 500"', () => {
    const expectedMoto = { modelo: "cb 500", cilindrada: 500, marca: "honda", ano: 2020 };
    const result = getMoto('CB 500');
    expect(result).toEqual(expectedMoto);
  });
  
  test('getCaminhao deve retornar o objeto do "volvo fh"', () => {
    const expectedCaminhao = { modelo: "volvo fh", cilindrada: 13000, marca: "volvo", ano: 2022 };
    const result = getCaminhao('volvo fh');
    expect(result).toEqual(expectedCaminhao);
  });

});