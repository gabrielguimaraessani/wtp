function doGet(e)
{
  var pg = HtmlService.createTemplateFromFile('tela');
  return pg.evaluate().setTitle('Pesquisa');
}

function inserirdados(id,quemcoletou,	idade,	sexo,	contas,	ponv50,	ponv0,	recall50,	recall0,	pain50,	pain0,	hypothermia50,	hypothermia0, hanestesia, hnvpo, hdor, hhipotermia, hconsciencia) {
var bdaddress = "1OgnugqRyxun6A5gHUdO6FqMFDwlBSTC58RJLKilDOHo";
  var dados = SpreadsheetApp.openById(bdaddress);
  const sheet = _getDbSheet_(dados, 'data');  
  var timeZone = "America/Sao_Paulo";
  var timestamp = Utilities.formatDate(new Date(), "GMT-3", "dd-MM-yyyy HH:mm:ss");  
  sheet.appendRow([timestamp,id,quemcoletou,	idade,	sexo,	contas,	ponv50,	ponv0,	recall50,	recall0,	pain50,	pain0,	hypothermia50,	hypothermia0, hanestesia, hnvpo, hdor, hhipotermia, hconsciencia]);
  return 0; 
}

function corrigedata(dia){
  var timeZone = "America/Sao_Paulo";
      var dataf=new Date(dia);
var resultado = Utilities.formatDate(dataf, "GMT", 'dd/MM/yyyy');
  return resultado;
}

function _getDbSheet_(wb, name)
{
  var sheet = wb.getSheetByName(name);
  if (!sheet)
  {
    sheet = wb.insertSheet(name);
    _initDbSheet_(sheet);
  }
  return sheet;
}

