const actions = [
    {
        type: 'random result',
        callbackMessage: {
            'yes': 'Takımınız, isteklerini yerine getirdiğiniz için mutlu',
            'no': 'Bazı fizyoterapist masrafları çıktı'
        },
        buttons: {
            'yes': 'Yeni Ofis Malzemeleri Alınsın',
            'no': 'Şu Anki Malzemeler Gayet İyi'
        },  
        callbacks: {
            'yes': ['team', 'boardOfDirectors', 'respect'],
            'no': ['team', 'respect']
        },
        title: {
            tr: 'takım ofis için yeni ergonomik malzemeler istiyor',
            en: 'the team wants new ergonomic materials for the office',
            fr: "l'équipe veut de nouveaux matériaux ergonomiques pour le bureau",
        },
        icon: 'team'
    },
    {
        type: 'random result',
        callbackMessage: {
            'yes': 'Yönetim Kurulu Bu Projeyi Beğendi',
            'no': 'Diğer Şirket Projeyi Kaptı ve Üzerinden Kâr Sağlıyor'
        },
        buttons: {
            'yes': 'Sunum Yapılsın',
            'no': 'Projeyi Beğenmedim'
        },
        callbacks: {
            'yes': ['boardOfDirectors', 'respect'],
            'no': ['boardOfDirectors']
        },
        title: {
            tr: 'kuluçka merkezine yeni bir proje geldi',
            en: 'there is a new project at incubation center',
            fr: "il y a un nouveau projet au centre d'incubation"
        },
        icon: 'incubation'
    },
    {
        type: 'random result',
         callbackMessage: {
            'yes': 'Takım, maaşlarına zam yapıldığı için mutlu',
            'no': 'Takımdan ayrılmak isteyenler var'
        },
        buttons: {
            'yes': 'Maaşlara Zam Yapılsın',
            'no': 'Maaşlar Zaten Çok Yüksek'
        },
        callbacks: {
            'yes': ['team,', 'boardOfDirectors', 'respect'],
            'no': ['team', 'respect']
        },
        title: {
            tr: 'Takım maaşına zam istiyor',
            en: 'The team want to salary increase',
            fr: "L'équipe veut augmenter son salaire"
        },
        icon: 'team'
    },
    {
        type: 'random result',
        callbackMessage: {
            'yes': 'Yönetim Kurulu Hırsızlık Olayı Üzerinde Durmandan Memnun',
            'no': 'Yönetim Kurulu Hırsızın Bulunması İstiyor'
        },
        buttons: {
            'yes': 'Yakalanması Gerekli Her Şey Yapılsın!',
            'no': 'Olayın Üzerinde Pek Durma'
        },
        callbacks: {
            'yes': ['team', 'boardOfDirectors'],
            'no': ['team', 'boardOfDirectors', 'respect']
        },
        title: {
            tr: 'Ofise hırsız girdi',
            en: 'A robber entered the office',
            fr: 'Un voleur est entré dans le bureau'
        },
        icon: 'robber'
    },
    {
        type: 'random result',
        callbackMessage: {
            'yes': 'Müşteriler Servislerin Düzeltimesinden Memnun',
            'no': 'Müşteriler Servislerin Çökmesinden Rahatsız!'
        },
        buttons: {
            'yes': 'Çabuk Düzetlemek İçin Gerekenler Yapılsın!',
            'no': 'Kendi Çöktü Kendi Düzelir'
        },
        callbacks: {
            'yes': [''],
            'no': ['team', 'boardOfDirectors', 'respect']
        },
        title: {
            tr: 'Servisleriniz çöktü!',
            en: 'Your servers are down',
            fr: 'Vos serveurs sont en panne'
        },
        icon: 'servers'
    },
    {
        type: 'random result',
        callbackMessage: {
            'yes': 'Yönetim Kurulu Üyesi Sizinle Çalıştığı İçin Çok Mutlu Olduğunu İletmemi İstedi',
            'no': 'Yönetim Kurulunda Bazı Huzursuzluklar Var'
        },
        buttons: {
            'yes': 'İstifası Kabul Edilsin',
            'no': 'İstifası Reddedildi'
        },
        callbacks: {
            'yes': ['respect'],
            'no': ['respect', 'boardOfDirectors']
        },
        title: {
            tr: 'Bir yönetim kurulu üyesi istifasını masanıza bıraktı',
            en: 'A board of directors member wants to resignate',
            fr: "Un membre du conseil d'administration veut démissionner"
        },
        icon: 'board-of-directors'
    },
    {
        type: 'random result',
        callbackMessage: {
            'yes': 'Harcamalarda Düzenlemere Gidildi',
            'no': 'Bazı Zararlarımız Var'
        },
        buttons: {
            'yes': 'Harcamalar Gözden Geçirilsin',
            'no': 'Gereksiz Harcama Yok'
        },
        callbacks: {
            'yes': ['boardOfDirectors'],
            'no': ['boardOfDirectors', 'respect']
        },
        title: {
            tr: 'Bazı Gereksiz Harcamalarımız var',
            en: 'We are have some redundant expenses',
            fr: 'Nous avons des dépenses redondantes'
        },
        icon: 'salary'
    },
    {
        type: 'bad result',
        callbackMessage: "Yaptığınız Yolsuzluk Ortaya SeaApi'nin yüz karasısın KOVULDUN!",
        callbacks: {
            'yes': ['finish'],
            'no': []
        },
        buttons: {
            'yes': 'Daha Fazla Para Karşılığında Kabul Et',
            'no': 'Anlaşmayı Reddet',
        },
        title: {
            tr: 'Bir Şirket, Para Karşılığında Kullanıcı Verilerini sızdırmak istiyor',
            en: 'A company wants to leak your data for money',
            fr: "Une entreprise veut divulguer vos données pour de l'argent"
        },
        icon: 'data-leak'
    },
    {
        type: 'bad result',
        callbackMessage: "Liyakat bizdeki  en önemli şeydir burada akrabalarını çalıştıramazsın KOVULDUN",
        callbacks: {
            'yes': ['finish'],
            'no': []
        },
        buttons: {
            'yes': 'Hoş geldiniz şirket sizin',
            'no': 'Bizde torpil geçmez kardeş',
        },
        title: {
            tr: 'Akrabaların Ofiste Çalışmak İstiyor',
            en: 'Your relatives wants to work in office',
            fr: 'Vos proches veulent travailler au bureau'
        },
        icon: 'relatives'
    },
    {
        type: 'bad result',
        callbackMessage: "Hükümet İle Yasadışı Bir İş Yaptığınız Ortaya Çıktı Müşterilerimiz Bizimle Çalışmayı Bırakıyor KOVULDUN",
        buttons: {
            'yes': 'Anlaşmayı Kabul Et',
            'no': 'Anlaşmayı Reddet',
        },
        callbacks: {
            'yes': ['finish'],
            'no': []
        },
        title: {
            tr: 'Hükümet sizden bazı kullanıcıların bilgilerini istiyor',
            en: 'The goverment wants some users data from you',
            fr: 'Le gouvernement veut des données sur vos utilisateurs'
        },
        icon: 'goverment'
    },
]

export default actions