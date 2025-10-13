// #################### CONFIGURAÇÃO ####################
// 1. COLE A URL DO SEU SCRIPT DO GOOGLE AQUI
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbye70-pcq58IWPIsLXX1g9l-zj7WTi9rqXMMlzDWT-CP0bQ9tbF5f0w3DREuNGlK12j/exec';

// 2. LISTA DE MILITARES
const dadosMilitares = [
    { idFuncional: "4279310", graduacao: "Cap", nomeGuerra: "MARTINS", secao: "CMT CIA" },
    { idFuncional: "3146316", graduacao: "Cap", nomeGuerra: "LOPES", secao: "CMT CIA" },
    { idFuncional: "3696790", graduacao: "2º Sgt", nomeGuerra: "DA COSTA", secao: "CIABM" },
    { idFuncional: "2822130", graduacao: "Sd", nomeGuerra: "MEDEIROS", secao: "CIABM" },
    { idFuncional: "3205614", graduacao: "Sd", nomeGuerra: "HERMENEGILDO", secao: "CIABM" },
    { idFuncional: "4672410", graduacao: "Sd", nomeGuerra: "GARIBALDI", secao: "CIABM" },
    { idFuncional: "2262363", graduacao: "1º TEN PME", nomeGuerra: "TERRAS", secao: "ADM" },
    { idFuncional: "2328798", graduacao: "1º TEN PME", nomeGuerra: "PRADES", secao: "ADM" },
    { idFuncional: "3698653", graduacao: "2º Sgt", nomeGuerra: "JÚLIA", secao: "ADM" },
    { idFuncional: "2891301", graduacao: "Sd", nomeGuerra: "FERREIRA", secao: "ADM" },
    { idFuncional: "3698360", graduacao: "Sd", nomeGuerra: "VILELA", secao: "ADM" },
    { idFuncional: "4354737", graduacao: "Sd", nomeGuerra: "BRUNO", secao: "ADM" },
    { idFuncional: "4551990", graduacao: "Sd", nomeGuerra: "MUNDEL", secao: "ADM" },
    { idFuncional: "4550757", graduacao: "Sd", nomeGuerra: "WESTPHALEN", secao: "ADM" },
    { idFuncional: "4782917", graduacao: "Sd", nomeGuerra: "NATHAN", secao: "ADM" },
    { idFuncional: "3718123", graduacao: "Sd", nomeGuerra: "SCHULTZ", secao: "ADM" },
    { idFuncional: "4982924", graduacao: "Sd", nomeGuerra: "CECCON", secao: "ADM" },
    { idFuncional: "4981340", graduacao: "Sd", nomeGuerra: "BRUNA", secao: "ADM" },
    { idFuncional: "4490541", graduacao: "SD BMT", nomeGuerra: "SPERLING", secao: "PASSO D'AREIA" },
    { idFuncional: "2328674", graduacao: "1º TEN PME", nomeGuerra: "TAIRONE", secao: "ADJUNTO" },
    { idFuncional: "2267373", graduacao: "1º TEN PME", nomeGuerra: "DILMAR", secao: "ADJUNTO" },
    { idFuncional: "2262070", graduacao: "1º TEN PME", nomeGuerra: "RIBEIRO", secao: "ADJUNTO" },
    { idFuncional: "2260280", graduacao: "1º TEN PME", nomeGuerra: "MOREIRA", secao: "ADJUNTO" },
    { idFuncional: "2241951", graduacao: "1º TEN PME", nomeGuerra: "DONATTO", secao: "ADJUNTO" },
    { idFuncional: "2993996", graduacao: "Sd", nomeGuerra: "ESPINOSA", secao: "ADJUNTO" },
    { idFuncional: "3696391", graduacao: "Sd", nomeGuerra: "BOTTINI", secao: "ADJUNTO" },
    { idFuncional: "2328828", graduacao: "1º Sgt", nomeGuerra: "FRANCO", secao: "AFASTADO" },
    { idFuncional: "2414155", graduacao: "1º Ten", nomeGuerra: "FREITAS", secao: "CMT PELOTÃO" },
    { idFuncional: "2879620", graduacao: "1º Sgt", nomeGuerra: "FLÁVIO", secao: "AÇORIANOS" },
    { idFuncional: "2328925", graduacao: "1º Sgt", nomeGuerra: "DELAVECHIA", secao: "AÇORIANOS" },
    { idFuncional: "2262290", graduacao: "1º Sgt PME", nomeGuerra: "ARAGÃO", secao: "AÇORIANOS" },
    { idFuncional: "3696715", graduacao: "2º Sgt", nomeGuerra: "KANOFRE", secao: "AÇORIANOS" },
    { idFuncional: "4279808", graduacao: "2º Sgt", nomeGuerra: "GUIMARÃES", secao: "AÇORIANOS" },
    { idFuncional: "2810727", graduacao: "Sd", nomeGuerra: "HOFFMANN", secao: "AÇORIANOS" },
    { idFuncional: "3150631", graduacao: "Sd", nomeGuerra: "ESEQUIEL", secao: "AÇORIANOS" },
    { idFuncional: "3164071", graduacao: "Sd", nomeGuerra: "VINÍCIUS", secao: "AÇORIANOS" },
    { idFuncional: "3696944", graduacao: "Sd", nomeGuerra: "LAGO", secao: "AÇORIANOS" },
    { idFuncional: "4289102", graduacao: "Sd", nomeGuerra: "ALISSON", secao: "AÇORIANOS" },
    { idFuncional: "4387759", graduacao: "Sd", nomeGuerra: "JULIAN", secao: "AÇORIANOS" },
    { idFuncional: "3872319", graduacao: "Sd", nomeGuerra: "ALESSANDRO", secao: "AÇORIANOS" },
    { idFuncional: "4387767", graduacao: "Sd", nomeGuerra: "IBALDO", secao: "AÇORIANOS" },
    { idFuncional: "4550552", graduacao: "Sd", nomeGuerra: "PIRES", secao: "AÇORIANOS" },
    { idFuncional: "4626290", graduacao: "Sd", nomeGuerra: "MAURÍCIO", secao: "AÇORIANOS" },
    { idFuncional: "4782534", graduacao: "Sd", nomeGuerra: "ASSUNÇÃO", secao: "AÇORIANOS" },
    { idFuncional: "4843673", graduacao: "Sd", nomeGuerra: "TEIXEIRA", secao: "AÇORIANOS" },
    { idFuncional: "4490193", graduacao: "SD BMT", nomeGuerra: "CORREA", secao: "AÇORIANOS" },
    { idFuncional: "4490266", graduacao: "SD BMT", nomeGuerra: "PAULINO", secao: "AÇORIANOS" },
    { idFuncional: "2423219", graduacao: "1º Ten", nomeGuerra: "VIEIRA", secao: "CMT PELOTÃO" },
    { idFuncional: "2414066", graduacao: "1º Sgt", nomeGuerra: "LUCIANO", secao: "TERESÓPOLIS" },
    { idFuncional: "2823900", graduacao: "1º Sgt", nomeGuerra: "ALBUQUERQUE", secao: "TERESÓPOLIS" },
    { idFuncional: "3148947", graduacao: "1º SGT", nomeGuerra: "GOMES", secao: "TERESÓPOLIS" },
    { idFuncional: "2519720", graduacao: "2º Sgt", nomeGuerra: "BEN HUR", secao: "TERESÓPOLIS" },
    { idFuncional: "2248204", graduacao: "2º Sgt PME", nomeGuerra: "CARGNELUTTI", secao: "TERESÓPOLIS" },
    { idFuncional: "2968550", graduacao: "Sd", nomeGuerra: "DOMINGUES", secao: "TERESÓPOLIS" },
    { idFuncional: "3695034", graduacao: "Sd", nomeGuerra: "THIAGO COELHO", secao: "TERESÓPOLIS" },
    { idFuncional: "3718093", graduacao: "Sd", nomeGuerra: "ZEMPER", secao: "TERESÓPOLIS" },
    { idFuncional: "4289366", graduacao: "Sd", nomeGuerra: "DEIVID", secao: "TERESÓPOLIS" },
    { idFuncional: "4278623", graduacao: "Sd", nomeGuerra: "CASSIANO", secao: "TERESÓPOLIS" },
    { idFuncional: "4353781", graduacao: "Sd", nomeGuerra: "TOMIELLO", secao: "TERESÓPOLIS" },
    { idFuncional: "4354273", graduacao: "Sd", nomeGuerra: "GONÇALVES", secao: "TERESÓPOLIS" },
    { idFuncional: "4388178", graduacao: "Sd", nomeGuerra: "HIDALGO", secao: "TERESÓPOLIS" },
    { idFuncional: "4550846", graduacao: "Sd", nomeGuerra: "JORDAN", secao: "TERESÓPOLIS" },
    { idFuncional: "4490614", graduacao: "SD BMT", nomeGuerra: "CARDOSO", secao: "TERESÓPOLIS" },
    { idFuncional: "2683520", graduacao: "1º Ten", nomeGuerra: "SITENESKI", secao: "CMT PELOTÃO" },
    { idFuncional: "2414600", graduacao: "1º Sgt", nomeGuerra: "LINCOLN", secao: "ASSUNÇÃO" },
    { idFuncional: "2878143", graduacao: "2º Sgt", nomeGuerra: "PANAZZOLO", secao: "ASSUNÇÃO" },
    { idFuncional: "2877708", graduacao: "2º Sgt", nomeGuerra: "JUNIOR", secao: "ASSUNÇÃO" },
    { idFuncional: "4353927", graduacao: "2º Sgt", nomeGuerra: "COAN", secao: "ASSUNÇÃO" },
    { idFuncional: "2994500", graduacao: "Sd", nomeGuerra: "LEANDRO", secao: "ASSUNÇÃO" },
    { idFuncional: "3697193", graduacao: "Sd", nomeGuerra: "BRUM", secao: "ASSUNÇÃO" },
    { idFuncional: "3142647", graduacao: "Sd", nomeGuerra: "DIEIQUE", secao: "ASSUNÇÃO" },
    { idFuncional: "4355113", graduacao: "Sd", nomeGuerra: "RAUBACH", secao: "ASSUNÇÃO" },
    { idFuncional: "4387821", graduacao: "Sd", nomeGuerra: "PORCELIS", secao: "ASSUNÇÃO" },
    { idFuncional: "4490576", graduacao: "Sd", nomeGuerra: "BAIGORRA", secao: "ASSUNÇÃO" },
    { idFuncional: "4490169", graduacao: "SD BMT", nomeGuerra: "MAIA", secao: "ASSUNÇÃO" },
    { idFuncional: "4490355", graduacao: "SD BMT", nomeGuerra: "PETER", secao: "ASSUNÇÃO" },
    { idFuncional: "4490452", graduacao: "SD BMT", nomeGuerra: "PINTO", secao: "ASSUNÇÃO" },
    { idFuncional: "2689138", graduacao: "1º Ten", nomeGuerra: "PATRÍCIO", secao: "CMT PELOTÃO" },
    { idFuncional: "3136019", graduacao: "1º Sgt", nomeGuerra: "POSENATO", secao: "RESTINGA" },
    { idFuncional: "2615134", graduacao: "1º Sgt", nomeGuerra: "RONALDO", secao: "RESTINGA" },
    { idFuncional: "2691175", graduacao: "2º Sgt", nomeGuerra: "LUIZ", secao: "RESTINGA" },
    { idFuncional: "2877015", graduacao: "2º Sgt", nomeGuerra: "PRADIER", secao: "RESTINGA" },
    { idFuncional: "2250470", graduacao: "2º Sgt PME", nomeGuerra: "SALDANHA", secao: "RESTINGA" },
    { idFuncional: "3137600", graduacao: "Sd", nomeGuerra: "BERGHAHN", secao: "RESTINGA" },
    { idFuncional: "2871980", graduacao: "Sd", nomeGuerra: "PESSOTA", secao: "RESTINGA" },
    { idFuncional: "3136671", graduacao: "Sd", nomeGuerra: "FINGER", secao: "RESTINGA" },
    { idFuncional: "3698602", graduacao: "Sd", nomeGuerra: "FÁBIO", secao: "RESTINGA" },
    { idFuncional: "3697673", graduacao: "Sd", nomeGuerra: "BRUNO", secao: "RESTINGA" },
    { idFuncional: "3696758", graduacao: "Sd", nomeGuerra: "BARRETO", secao: "RESTINGA" },
    { idFuncional: "4353935", graduacao: "Sd", nomeGuerra: "VANDERLAN", secao: "RESTINGA" },
    { idFuncional: "4388380", graduacao: "Sd", nomeGuerra: "MARTINS", secao: "RESTINGA" },
    { idFuncional: "4230760", graduacao: "Sd", nomeGuerra: "DAYKER", secao: "RESTINGA" },
    { idFuncional: "4845544", graduacao: "Sd", nomeGuerra: "THIAGO", secao: "RESTINGA" },
    { idFuncional: "4983793", graduacao: "Sd", nomeGuerra: "CATELAN", secao: "RESTINGA" },
    { idFuncional: "4490800", graduacao: "SD BMT", nomeGuerra: "VOLZ", secao: "RESTINGA" },
    { idFuncional: "2303876", graduacao: "1º Ten", nomeGuerra: "EDSON", secao: "CMT PELOTÃO" },
    { idFuncional: "3085120", graduacao: "1º Sgt", nomeGuerra: "ASSIS", secao: "BELÉM NOVO" },
    { idFuncional: "2612887", graduacao: "1º Sgt PME", nomeGuerra: "JULIANO", secao: "BELÉM NOVO" },
    { idFuncional: "2880601", graduacao: "2º Sgt", nomeGuerra: "CHIEZA", secao: "BELÉM NOVO" },
    { idFuncional: "3697630", graduacao: "2º Sgt", nomeGuerra: "MENDES", secao: "BELÉM NOVO" },
    { idFuncional: "3136728", graduacao: "Sd", nomeGuerra: "FERREIRA", secao: "BELÉM NOVO" },
    { idFuncional: "2826097", graduacao: "Sd", nomeGuerra: "MARTINEZ", secao: "BELÉM NOVO" },
    { idFuncional: "3696510", graduacao: "Sd", nomeGuerra: "RAUBUSTT", secao: "BELÉM NOVO" },
    { idFuncional: "3697290", graduacao: "Sd", nomeGuerra: "ROGER", secao: "BELÉM NOVO" },
    { idFuncional: "3726207", graduacao: "Sd", nomeGuerra: "MAURÍCIO", secao: "BELÉM NOVO" },
    { idFuncional: "4299140", graduacao: "Sd", nomeGuerra: "DETONI", secao: "BELÉM NOVO" },
    { idFuncional: "4388283", graduacao: "Sd", nomeGuerra: "ADRIANO BARBOSA", secao: "BELÉM NOVO" },
    { idFuncional: "4395476", graduacao: "Sd", nomeGuerra: "RAFAEL", secao: "BELÉM NOVO" },
    { idFuncional: "4982975", graduacao: "Sd", nomeGuerra: "COSME", secao: "BELÉM NOVO" },
    { idFuncional: "4496990", graduacao: "SD BMT", nomeGuerra: "FOLLETO", secao: "BELÉM NOVO" },
    { idFuncional: "4490479", graduacao: "SD BMT", nomeGuerra: "EVERTON", secao: "BELÉM NOVO" },
    { idFuncional: "2686589", graduacao: "1º Sgt", nomeGuerra: "GUEDES", secao: "FLORESTA" },
    { idFuncional: "2856476", graduacao: "1º Sgt", nomeGuerra: "PAIM", secao: "FLORESTA" },
    { idFuncional: "2915219", graduacao: "2º Sgt", nomeGuerra: "SAUL", secao: "FLORESTA" },
    { idFuncional: "3695832", graduacao: "2º Sgt", nomeGuerra: "CASTRO", secao: "FLORESTA" },
    { idFuncional: "2260670", graduacao: "2º SGT PME", nomeGuerra: "DACHI", secao: "FLORESTA" },
    { idFuncional: "2919478", graduacao: "Sd", nomeGuerra: "FARIAS", secao: "FLORESTA" },
    { idFuncional: "3140717", graduacao: "Sd", nomeGuerra: "VICENTE", secao: "FLORESTA" },
    { idFuncional: "3139859", graduacao: "Sd", nomeGuerra: "DANILO", secao: "FLORESTA" },
    { idFuncional: "2985675", graduacao: "Sd", nomeGuerra: "BOTEGA", secao: "FLORESTA" },
    { idFuncional: "3701638", graduacao: "Sd", nomeGuerra: "CRISTIANO", secao: "FLORESTA" },
    { idFuncional: "3697550", graduacao: "Sd", nomeGuerra: "DA SILVA", secao: "FLORESTA" },
    { idFuncional: "3698734", graduacao: "Sd", nomeGuerra: "ROGAN", secao: "FLORESTA" },
    { idFuncional: "3696847", graduacao: "Sd", nomeGuerra: "ACÁCIO", secao: "FLORESTA" },
    { idFuncional: "4355229", graduacao: "Sd", nomeGuerra: "FRANCIS", secao: "FLORESTA" },
    { idFuncional: "4387775", graduacao: "Sd", nomeGuerra: "CAMPOS", secao: "FLORESTA" },
    { idFuncional: "4375149", graduacao: "Sd", nomeGuerra: "FONTANA", secao: "FLORESTA" },
    { idFuncional: "4672445", graduacao: "Sd", nomeGuerra: "KINGESKI", secao: "FLORESTA" },
    { idFuncional: "4490665", graduacao: "SD BMT", nomeGuerra: "DOTTA", secao: "FLORESTA" },
    { idFuncional: "4490258", graduacao: "SD BMT", nomeGuerra: "SIQUEIRA", secao: "FLORESTA" },
    { idFuncional: "4490843", graduacao: "SD BMT", nomeGuerra: "BOTTINI", secao: "FLORESTA" },
    { idFuncional: "2684640", graduacao: "1º Ten", nomeGuerra: "MEDINA", secao: "PASSO D'AREIA" },
    { idFuncional: "2919540", graduacao: "1º Sgt", nomeGuerra: "AIRTON", secao: "PASSO D'AREIA" },
    { idFuncional: "3137473", graduacao: "1º Sgt", nomeGuerra: "MATHEUS", secao: "PASSO D'AREIA" },
    { idFuncional: "2885450", graduacao: "2º Sgt", nomeGuerra: "FABRÍCIO", secao: "PASSO D'AREIA" },
    { idFuncional: "2882337", graduacao: "2º Sgt", nomeGuerra: "THAÍS", secao: "PASSO D'AREIA" },
    { idFuncional: "3696111", graduacao: "Sd", nomeGuerra: "BITENCOURT", secao: "PASSO D'AREIA" },
    { idFuncional: "3695212", graduacao: "Sd", nomeGuerra: "PEDRO", secao: "PASSO D'AREIA" },
    { idFuncional: "3696669", graduacao: "Sd", nomeGuerra: "THALIN", secao: "PASSO D'AREIA" },
    { idFuncional: "3696570", graduacao: "Sd", nomeGuerra: "DREYER", secao: "PASSO D'AREIA" },
    { idFuncional: "3699145", graduacao: "Sd", nomeGuerra: "THIAGO RIBEIRO", secao: "PASSO D'AREIA" },
    { idFuncional: "4353986", graduacao: "Sd", nomeGuerra: "MONTEIRO", secao: "PASSO D'AREIA" },
    { idFuncional: "4355822", graduacao: "Sd", nomeGuerra: "BARBOSA", secao: "PASSO D'AREIA" },
    { idFuncional: "4354435", graduacao: "Sd", nomeGuerra: "ISMAEL", secao: "PASSO D'AREIA" },
    { idFuncional: "4388003", graduacao: "Sd", nomeGuerra: "BUENO", secao: "PASSO D'AREIA" },
    { idFuncional: "4388305", graduacao: "Sd", nomeGuerra: "EIDER", secao: "PASSO D'AREIA" },
    { idFuncional: "4395140", graduacao: "Sd", nomeGuerra: "GAUTIER", secao: "PASSO D'AREIA" },
    { idFuncional: "4490738", graduacao: "SD BMT", nomeGuerra: "SOARES", secao: "PASSO D'AREIA" },
    { idFuncional: "2690721", graduacao: "1º Sgt", nomeGuerra: "FERNANDO", secao: "PARTENON" },
    { idFuncional: "2993767", graduacao: "1º Sgt", nomeGuerra: "ARIAS", secao: "PARTENON" },
    { idFuncional: "2688379", graduacao: "2º Sgt", nomeGuerra: "BECKER", secao: "PARTENON" },
    { idFuncional: "2237423", graduacao: "3º Sgt", nomeGuerra: "RAMOS", secao: "PARTENON" },
    { idFuncional: "2971577", graduacao: "Sd", nomeGuerra: "BARREIRO", secao: "PARTENON" },
    { idFuncional: "2987120", graduacao: "Sd", nomeGuerra: "JUSSIE", secao: "PARTENON" },
    { idFuncional: "3169804", graduacao: "Sd", nomeGuerra: "PATRICK", secao: "PARTENON" },
    { idFuncional: "3696049", graduacao: "Sd", nomeGuerra: "BATISTA", secao: "PARTENON" },
    { idFuncional: "4289064", graduacao: "Sd", nomeGuerra: "BELOMO", secao: "PARTENON" },
    { idFuncional: "3725570", graduacao: "Sd", nomeGuerra: "BRUNO EDUARDO", secao: "PARTENON" },
    { idFuncional: "4354583", graduacao: "Sd", nomeGuerra: "JONATHAN", secao: "PARTENON" },
    { idFuncional: "4354532", graduacao: "Sd", nomeGuerra: "SANTOS", secao: "PARTENON" },
    { idFuncional: "4354680", graduacao: "Sd", nomeGuerra: "VARGAS", secao: "PARTENON" },
    { idFuncional: "3622363", graduacao: "Sd", nomeGuerra: "BERNARDES", secao: "PARTENON" },
    { idFuncional: "4843584", graduacao: "Sd", nomeGuerra: "CABRAL", secao: "PARTENON" },
    { idFuncional: "4490053", graduacao: "SD BMT", nomeGuerra: "RENAN", secao: "PARTENON" },
    { idFuncional: "4490339", graduacao: "SD BMT", nomeGuerra: "ZANETTI", secao: "PARTENON" },
    { idFuncional: "2919591", graduacao: "1º Sgt", nomeGuerra: "LAMADRIL", secao: "AUTO RESGATE" },
    { idFuncional: "3694623", graduacao: "2º Sgt", nomeGuerra: "SCHNEIDER", secao: "AUTO RESGATE" },
    { idFuncional: "4356047", graduacao: "2º Sgt", nomeGuerra: "VIANEI", secao: "AUTO RESGATE" },
    { idFuncional: "2423146", graduacao: "Sd", nomeGuerra: "DORNELES", secao: "AUTO RESGATE" },
    { idFuncional: "2970031", graduacao: "Sd", nomeGuerra: "BRUM", secao: "AUTO RESGATE" },
    { idFuncional: "3697100", graduacao: "Sd", nomeGuerra: "GUTERRES", secao: "AUTO RESGATE" },
    { idFuncional: "4355148", graduacao: "Sd", nomeGuerra: "LOPES", secao: "AUTO RESGATE" },
    { idFuncional: "4626672", graduacao: "Sd", nomeGuerra: "AZEREDO", secao: "AUTO RESGATE" },
    { idFuncional: "4845510", graduacao: "Sd", nomeGuerra: "VILAR", secao: "AUTO RESGATE" },
    { idFuncional: "4982924", graduacao: "Sd", nomeGuerra: "ROSEANE", secao: "AUTO RESGATE" },
    { idFuncional: "4982991", graduacao: "Sd", nomeGuerra: "ARAUJO", secao: "AUTO RESGATE" },
    { idFuncional: "4980662", graduacao: "Sd", nomeGuerra: "SANTOS", secao: "AUTO RESGATE" },
    { idFuncional: "4490835", graduacao: "SD BMT", nomeGuerra: "AMARANTE", secao: "AUTO RESGATE" }
];

// 3. OPÇÕES DE TAMANHO PARA CADA ITEM
const tamanhosPorItem = {
    "Camiseta": ["P", "M", "G", "GG", "XGG"],
    "Gandola": ["1", "2", "3", "4", "5", "6", "7"],
    "Calça Farda": ["38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"],
    "Cobertura": ["54", "55", "56", "57", "58", "59", "60", "61", "62"],
    "Parká": ["PP", "P", "M", "G", "GG", "XGG"]
};
// ######################################################


// --- LÓGICA DA APLICAÇÃO ---

const idInput = document.getElementById('idInput');
const userInfoDiv = document.getElementById('userInfo');
const userGraduacaoSpan = document.getElementById('userGraduacao');
const userNomeSpan = document.getElementById('userNome');
const userSecaoSpan = document.getElementById('userSecao');
const tradeSectionDiv = document.getElementById('tradeSection');
const tradeForm = document.getElementById('tradeForm');
const formMessage = document.getElementById('formMessage');
const tradeListTbody = document.getElementById('tradeList');
const loadingMessage = document.getElementById('loadingMessage');
const itemSelect = document.getElementById('itemSelect');
const tamanhoTenhoSelect = document.getElementById('tamanhoTenho');
const tamanhoPrecisoSelect = document.getElementById('tamanhoPreciso');

let militarLogado = null; 

function formatarData(dataString) {
    if (!dataString) return '-';
    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    const data = new Date(dataString);
    const dia = data.getDate();
    const mes = meses[data.getMonth()];
    return `${dia}/${mes}`;
}

function atualizarOpcoesDeTamanho() {
    const itemSelecionado = itemSelect.value;
    const tamanhos = tamanhosPorItem[itemSelecionado] || [];
    tamanhoTenhoSelect.innerHTML = '';
    tamanhoPrecisoSelect.innerHTML = '';

    if (tamanhos.length > 0) {
        tamanhoTenhoSelect.disabled = false;
        tamanhoPrecisoSelect.disabled = false;
        tamanhoTenhoSelect.add(new Option("-- Selecione --", ""));
        tamanhoPrecisoSelect.add(new Option("-- Selecione --", ""));
        
        tamanhos.filter(t => t).forEach(tamanho => {
            tamanhoTenhoSelect.add(new Option(tamanho, tamanho));
            tamanhoPrecisoSelect.add(new Option(tamanho, tamanho));
        });
    } else {
        tamanhoTenhoSelect.disabled = true;
        tamanhoPrecisoSelect.disabled = true;
        tamanhoTenhoSelect.add(new Option("-- Primeiro, escolha um item --", ""));
        tamanhoPrecisoSelect.add(new Option("-- Primeiro, escolha um item --", ""));
    }
}

itemSelect.addEventListener('change', atualizarOpcoesDeTamanho);

idInput.addEventListener('input', () => {
    const id = idInput.value;
    const militarEncontrado = dadosMilitares.find(m => m.idFuncional === id);

    if (militarEncontrado) {
        militarLogado = militarEncontrado;
        userGraduacaoSpan.textContent = militarEncontrado.graduacao;
        userNomeSpan.textContent = militarEncontrado.nomeGuerra;
        userSecaoSpan.textContent = militarEncontrado.secao;
        userInfoDiv.className = 'user-info-visible';
        tradeSectionDiv.className = 'card trade-section-visible';
    } else {
        militarLogado = null;
        userInfoDiv.className = 'user-info-hidden';
        tradeSectionDiv.className = 'card trade-section-hidden';
    }
});

tradeForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!militarLogado) {
        alert("Por favor, insira uma ID Funcional válida primeiro.");
        return;
    }
    
    const formData = {
        idFuncional: militarLogado.idFuncional,
        nomeGuerra: militarLogado.nomeGuerra,
        secao: militarLogado.secao,
        item: document.getElementById('itemSelect').value,
        tamanhoTenho: document.getElementById('tamanhoTenho').value,
        tamanhoPreciso: document.getElementById('tamanhoPreciso').value,
        contato: document.getElementById('contatoInput').value,
    };

    if (!formData.item || !formData.tamanhoTenho || !formData.tamanhoPreciso) {
        alert("Por favor, preencha todos os campos para a troca.");
        return;
    }

    formMessage.textContent = 'Enviando...';

    try {
        await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(formData),
        });

        formMessage.style.color = 'green';
        formMessage.textContent = 'Solicitação de troca registrada com sucesso! A lista será atualizada em breve.';
        tradeForm.reset();
        atualizarOpcoesDeTamanho();
        setTimeout(carregarTrocas, 2000);

    } catch (error) {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Erro ao registrar a solicitação. Tente novamente.';
        console.error('Erro:', error);
    }
});

async function carregarTrocas() {
    loadingMessage.style.display = 'block';
    tradeListTbody.innerHTML = '';

    try {
        const response = await fetch(GOOGLE_SCRIPT_URL);
        const trocas = await response.json();

        if (trocas.length === 0) {
            tradeListTbody.innerHTML = '<tr><td colspan="7">Nenhuma solicitação de troca registrada ainda.</td></tr>';
        } else {
            trocas.forEach(troca => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${formatarData(troca.data)}</td>
                    <td>${troca.nomeGuerra || '-'}</td>
                    <td>${troca.secao || '-'}</td>
                    <td>${troca.item || '-'}</td>
                    <td>${troca.tamanhoTenho || '-'}</td>
                    <td>${troca.tamanhoPreciso || '-'}</td>
                    <td>${troca.contato || '-'}</td>
                `;
                tradeListTbody.appendChild(tr);
            });
        }
    } catch (error) {
        tradeListTbody.innerHTML = '<tr><td colspan="7">Erro ao carregar a lista de trocas.</td></tr>';
        console.error('Erro ao carregar trocas:', error);
    } finally {
        loadingMessage.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', carregarTrocas);
