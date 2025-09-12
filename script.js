document.addEventListener('DOMContentLoaded', () => {

    // URL do seu Web App publicado no Google Apps Script.
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxVh9elcj4HhZU09sFBiR2Dkt4nzlMD4yqJkcHEfnfgclrZ4qVaSamdu3UgcXW488Dl/exec";

    // Mapeamento dos elementos do HTML para variáveis
    const idInput = document.getElementById('idInput');
    const userInfoDiv = document.getElementById('userInfo');
    const tradeSectionDiv = document.getElementById('tradeSection');
    const itemSelect = document.getElementById('itemSelect');
    const tamanhoTenhoSelect = document.getElementById('tamanhoTenho');
    const tamanhoPrecisoSelect = document.getElementById('tamanhoPreciso');
    const tradeForm = document.getElementById('tradeForm');
    const tradeListBody = document.getElementById('tradeList');
    const loadingMessage = document.getElementById('loadingMessage');
    const formMessage = document.getElementById('formMessage');

    // --- BASE DE DADOS COMPLETA DOS MILITARES ---
    const dadosMilitares = [
        { idFuncional: "4279310", graduacao: "Cap", nomeGuerra: "MARTINS", secao: "CMT CIA" },
        { idFuncional: "3146316", graduacao: "Cap", nomeGuerra: "LOPES", secao: "CMT CIA" },
        { idFuncional: "3696790", graduacao: "2º Sgt", nomeGuerra: "DA COSTA", secao: "CIA" },
        { idFuncional: "2822130", graduacao: "Sd", nomeGuerra: "MEDEIROS", secao: "CIA" },
        { idFuncional: "3205614", graduacao: "Sd", nomeGuerra: "HERMENEGILDO", secao: "CIA" },
        { idFuncional: "4672410", graduacao: "Sd", nomeGuerra: "GARIBALDI", secao: "CIA" },
        { idFuncional: "2262363", graduacao: "1º TEN PME", nomeGuerra: "TERRAS", secao: "SLOG" },
        { idFuncional: "2328798", graduacao: "1º TEN PME", nomeGuerra: "PRADES", secao: "SLOG" },
        { idFuncional: "3698653", graduacao: "2º Sgt", nomeGuerra: "JÚLIA", secao: "SADM" },
        { idFuncional: "2891301", graduacao: "Sd", nomeGuerra: "FERREIRA", secao: "SLOG" },
        { idFuncional: "3698360", graduacao: "Sd", nomeGuerra: "VILELA", secao: "SCOR" },
        { idFuncional: "4354737", graduacao: "Sd", nomeGuerra: "BRUNO", secao: "SADM" },
        { idFuncional: "4551990", graduacao: "Sd", nomeGuerra: "MUNDEL", secao: "SODC" },
        { idFuncional: "4550757", graduacao: "Sd", nomeGuerra: "WESTPHALEN", secao: "SODC" },
        { idFuncional: "4782917", graduacao: "Sd", nomeGuerra: "NATHAN", secao: "SLOG" },
        { idFuncional: "3718123", graduacao: "Sd", nomeGuerra: "SCHULTZ", secao: "SCOR" },
        { idFuncional: "4982924", graduacao: "Sd", nomeGuerra: "CECCON", secao: "SCOR" },
        { idFuncional: "4981340", graduacao: "Sd", nomeGuerra: "BRUNA", secao: "SODC" },
        { idFuncional: "4490541", graduacao: "SD BMT", nomeGuerra: "SPERLING", secao: "SLOG" },
        { idFuncional: "2328674", graduacao: "1º TEN PME", nomeGuerra: "TAIRONE", secao: "COV ALFA 4" },
        { idFuncional: "2267373", graduacao: "1º TEN PME", nomeGuerra: "DILMAR", secao: "ADJUNTO" },
        { idFuncional: "2262070", graduacao: "1º TEN PME", nomeGuerra: "RIBEIRO", secao: "COV ALFA 4" },
        { idFuncional: "2260280", graduacao: "1º TEN PME", nomeGuerra: "MOREIRA", secao: "ADJUNTO" },
        { idFuncional: "2241951", graduacao: "1º TEN PME", nomeGuerra: "DONATTO", secao: "ADJUNTO" },
        { idFuncional: "2993996", graduacao: "Sd", nomeGuerra: "ESPINOSA", secao: "ADJUNTO" },
        { idFuncional: "3696391", graduacao: "Sd", nomeGuerra: "BOTTINI", secao: "ADJUNTO" },
        { idFuncional: "2328828", graduacao: "1º Sgt", nomeGuerra: "FRANCO", secao: "AFASTADO" },
        { idFuncional: "2414155", graduacao: "1º Ten", nomeGuerra: "FREITAS", secao: "CMT PELOTÃO" },
        { idFuncional: "2688034", graduacao: "1º Sgt", nomeGuerra: "SOARES", secao: "AÇORIANOS" },
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
        { idFuncional: "4496990", graduacao: "SD BMT", nomeGuerra: "FILIPE", secao: "BELÉM NOVO" },
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
        { idFuncional: "4490843", graduacao: "SD BMT", nomeGuerra: "W. BOTTINI", secao: "FLORESTA" },
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

    const militaresDB = dadosMilitares.reduce((acc, militar) => {
        acc[militar.idFuncional] = {
            graduacao: militar.graduacao,
            nome: militar.nomeGuerra,
            secao: militar.secao
        };
        return acc;
    }, {});


    // --- TAMANHOS DISPONÍVEIS POR ITEM ---
    const tamanhosPorItem = {
        "Camiseta": ["P", "M", "G", "GG", "XG"],
        "Gandola": ["P", "M", "G", "GG", "XG"],
        "Calça Farda": ["38", "40", "42", "44", "46", "48"],
        "Cobertura": ["55", "56", "57", "58", "59", "60"],
        "Parká": ["P", "M", "G", "GG"]
    };

    // --- FUNÇÕES ---

    /**
     * Busca e exibe os dados do militar baseado na ID funcional.
     */
    function buscarMilitar() {
        const id = idInput.value;
        const militar = militaresDB[id];

        if (militar) {
            document.getElementById('userGraduacao').textContent = militar.graduacao;
            document.getElementById('userNome').textContent = militar.nome;
            document.getElementById('userSecao').textContent = militar.secao;
            userInfoDiv.classList.remove('user-info-hidden');
            tradeSectionDiv.classList.remove('trade-section-hidden');
        } else {
            userInfoDiv.classList.add('user-info-hidden');
            tradeSectionDiv.classList.add('trade-section-hidden');
        }
    }

    /**
     * Popula os seletores de tamanho baseado no item escolhido.
     * @param {string} item O nome do item selecionado.
     */
    function popularTamanhos(item) {
        const tamanhos = tamanhosPorItem[item] || [];
        
        tamanhoTenhoSelect.innerHTML = '<option value="" disabled selected>-- Selecione --</option>';
        tamanhoPrecisoSelect.innerHTML = '<option value="" disabled selected>-- Selecione --</option>';

        tamanhos.forEach(tamanho => {
            tamanhoTenhoSelect.innerHTML += `<option value="${tamanho}">${tamanho}</option>`;
            tamanhoPrecisoSelect.innerHTML += `<option value="${tamanho}">${tamanho}</option>`;
        });

        tamanhoTenhoSelect.disabled = false;
        tamanhoPrecisoSelect.disabled = false;
    }

    /**
     * Busca a lista de trocas na planilha e exibe na tabela.
     */
    async function carregarListaDeTrocas() {
        loadingMessage.style.display = 'block';
        tradeListBody.innerHTML = '';

        try {
            const response = await fetch(SCRIPT_URL);
            if (!response.ok) throw new Error('Erro de rede ao buscar dados.');
            
            const data = await response.json();
            
            if (data.length === 0) {
                 loadingMessage.textContent = "Nenhuma solicitação de troca encontrada.";
                 return;
            }

            data.forEach(item => {
                const tr = document.createElement('tr');
                const dataFormatada = new Date(item.data).toLocaleDateString('pt-BR');
                
                if (item.status === 'Concluída') {
                    tr.classList.add('concluida');
                }

                // *** A ORDEM DAS COLUNAS FOI ALTERADA AQUI ***
                tr.innerHTML = `
                    <td>${dataFormatada}</td>
                    <td>${item.nomeGuerra}</td>
                    <td>${item.secao}</td>
                    <td>${item.item}</td>
                    <td>${item.tamanhoTenho}</td>
                    <td>${item.tamanhoPreciso}</td>
                    <td>${item.contato || 'N/A'}</td>
                    <td>
                        <button 
                            class="action-button ${item.status === 'Concluída' ? 'concluido' : ''}" 
                            data-row="${item.rowNumber}" 
                            ${item.status === 'Concluída' ? 'disabled' : ''}>
                            ${item.status === 'Concluída' ? 'Concluído' : 'Concluir'}
                        </button>
                    </td>
                `;
                tradeListBody.appendChild(tr);
            });

            loadingMessage.style.display = 'none';

        } catch (error) {
            loadingMessage.textContent = `Falha ao carregar a lista: ${error.message}`;
            console.error("Erro ao buscar trocas:", error);
        }
    }

    /**
     * Envia os dados do formulário para a planilha.
     * @param {Event} e O evento de submit do formulário.
     */
    async function registrarTroca(e) {
        e.preventDefault();

        const idFuncional = idInput.value;
        const militar = militaresDB[idFuncional];

        if (!militar) {
            exibirMensagem("ID Funcional inválida.", "error");
            return;
        }
        if (tamanhoTenhoSelect.value === tamanhoPrecisoSelect.value) {
            exibirMensagem("O tamanho que você tem não pode ser igual ao que você precisa.", "error");
            return;
        }

        const dados = {
            action: "create",
            idFuncional: idFuncional,
            nomeGuerra: militar.nome,
            secao: militar.secao,
            item: itemSelect.value,
            tamanhoTenho: tamanhoTenhoSelect.value,
            tamanhoPreciso: tamanhoPrecisoSelect.value,
            contato: document.getElementById('contatoInput').value
        };

        try {
            exibirMensagem("Enviando solicitação...", "loading");
            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                body: JSON.stringify(dados),
                headers: { 'Content-Type': 'application/json' }
            });

            const result = await response.json();

            if (result.status === "success") {
                exibirMensagem("Solicitação registrada com sucesso!", "success");
                tradeForm.reset();
                popularTamanhos('');
                tamanhoTenhoSelect.disabled = true;
                tamanhoPrecisoSelect.disabled = true;
                carregarListaDeTrocas();
            } else {
                throw new Error(result.message || "Erro desconhecido.");
            }
        } catch (error) {
            exibirMensagem(`Erro ao registrar: ${error.message}`, "error");
        }
    }

    /**
     * Atualiza o status de uma troca para "Concluída".
     * @param {number} rowNumber O número da linha na planilha.
     */
    async function concluirTroca(rowNumber) {
        const verifierId = prompt("Para confirmar, digite a ID Funcional de quem criou este anúncio:");
        if (!verifierId) return;

        const dados = {
            action: "updateStatus",
            rowNumber: rowNumber,
            verifierId: verifierId
        };
        
        try {
            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                body: JSON.stringify(dados),
                headers: { 'Content-Type': 'application/json' }
            });
            
            const result = await response.json();

            if (result.status === "success") {
                alert("Troca marcada como concluída com sucesso!");
                carregarListaDeTrocas();
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            alert(`Falha ao atualizar: ${error.message}`);
        }
    }
    
    /**
     * Exibe uma mensagem de feedback para o usuário.
     * @param {string} msg A mensagem a ser exibida.
     * @param {string} type O tipo de mensagem ('success', 'error', 'loading').
     */
    function exibirMensagem(msg, type) {
        formMessage.textContent = msg;
        formMessage.className = type;
    }


    // --- EVENT LISTENERS (OUVINTES DE EVENTOS) ---
    idInput.addEventListener('input', buscarMilitar);
    itemSelect.addEventListener('change', () => popularTamanhos(itemSelect.value));
    tradeForm.addEventListener('submit', registrarTroca);
    
    tradeListBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('action-button') && !e.target.disabled) {
            const row = e.target.dataset.row;
            concluirTroca(row);
        }
    });

    carregarListaDeTrocas();
});

