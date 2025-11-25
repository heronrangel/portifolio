const xamarin_icon = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xamarin/xamarin-original.svg";
const csharp_icon = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg";
const ios_icon = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg";
const android_icon = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg";
const sqlite_icon = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg";
const woo_icon = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/woocommerce/woocommerce-original.svg";
const wordpress_icon = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg";
const php_icon = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg";
const js_icon = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg";
const json_icon = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg";
const net_icon = "./assets/images/languages/net.png";
const vba_icon = "./assets/images/languages/vba_icon.svg";
const access_icon = "./assets/images/languages/access_icon.svg";
const sql_server_icon = "./assets/images/icon-sql.svg";
const mysql_icon = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg";
const excel_icon = "./assets/images/icon-excel.svg";

const projetos = {
  '1': {
    titulo: 'App de Pedidos',
    categoria: 'mobile',
    tecnologias: [
      { src: csharp_icon, alt: "C#" },
      { src: net_icon, alt: ".NET MAUI" },
      { src: xamarin_icon, alt: "Xamarin Forms" },
      { src: sqlite_icon, alt: "SQLite" },
      { src: json_icon, alt: "JSON" },
      { src: android_icon, alt: "Android" },
      { src: ios_icon, alt: "iOS" }
    ],
    descricaoCurta: 'App mobile para gestão de pedidos e orçamentos.',
    descricaoCompleta: 'App mobile desenvolvido para a força de vendas, permitindo a gestão completa de clientes, cadastro de produtos, e emissão de pedidos e orçamentos online e offline. A sincronização de dados é feita via API e atualmente conta com mais de 250 usuários ativos.',
    imagens: [
      { src: "./assets/images/projetos/control_master.png", alt: "Demonstração do projeto" }
    ]
  },
    '2': {
    titulo: 'App Cortinas e Persianas',
    categoria: 'mobile',
    tecnologias: [
      { src: csharp_icon, alt: "C#" },
      { src: net_icon, alt: ".NET MAUI" },
      { src: xamarin_icon, alt: "Xamarin Forms" },
      { src: sqlite_icon, alt: "SQLite" },
      { src: json_icon, alt: "JSON" },
      { src: android_icon, alt: "Android" },
      { src: ios_icon, alt: "iOS" }
    ],
    descricaoCurta: 'App mobile para montagem de cortinas e persianas.',
    descricaoCompleta: 'App mobile desenvolvido para auxiliar revendas na montagem de cortinas e persianas. O produto possui uma estrutura totalmente dinâmica, permitindo configurar medidas, sobras de tecido, cortes e valores personalizados para cada item da lista. Ao final, a cortina ou persiana é consolidada em um único produto, enviado diretamente ao sistema da fábrica já pronto para produção. Atualmente, o app atende duas revendas ativas, cada uma com mais de 120 usuários.',
    imagens: [
      { src: "./assets/images/projetos/mobile_persianas.png", alt: "Demonstração do projeto" }
    ]
  },
  '3': {
    titulo: 'Gerador de Certificados',
    categoria: 'desktop',
    capa: 'desktop',
    tecnologias: [
      { src: csharp_icon, alt: "C#" },
      { src: net_icon, alt: ".NET Framework" },
      { src: json_icon, alt: "JSON" },
      { src: access_icon, alt: "Access" }
    ],
    descricaoCurta: 'Software de geração de certificados para APIs bancárias.',
    descricaoCompleta: 'Ferramenta Windows para geração de certificados de APIs bancárias (boletos e PIX) integrada com banco de dados Access. Com a diversidade de tipos de certificados exigidos pelos bancos e as diferentes maneiras de gerá-los via OpenSSL, GitBash e outras ferramentas, este software reúne todo o processo em uma única interface simples e intuitiva. Ele padroniza a criação dos certificados e entrega o resultado final em um arquivo PFX, garantindo praticidade, consistência e redução de erros.',
    imagens: [
      { src: "./assets/images/projetos/conversor_certificados.png", alt: "Demonstração do projeto" }
    ]
  },
  '4': {
    titulo: 'Lojas Virtuais',
    categoria: 'desktop',
    tecnologias: [
      { src: vba_icon, alt: "VBA" },
      { src: access_icon, alt: "Access" },
      { src: woo_icon, alt: "WooCommerce" },
      { src: json_icon, alt: "JSON" },
      { src: wordpress_icon, alt: "WordPress" }
    ],
    descricaoCurta: 'Software integrador de lojas e-commerce.',
    descricaoCompleta: 'Solução de integração entre ERP e plataformas de e-commerce. Desenvolvida em VBA Access, esta solução conecta o sistema interno de gestão a lojas virtuais como WooCommerce, Bagy e NuvemShop. A integração via API inclui a atualização de preços, estoque e importação de pedidos, garantindo praticidade e a redução de retrabalho.',
    imagens: [
      { src: "./assets/images/projetos/loja_virtual.png", alt: "Demonstração do projeto" }
    ]
  },
  '5': {
    titulo: 'API REST',
    categoria: 'desktop',
    tecnologias: [
      { src: csharp_icon, alt: "C#" },
      { src: net_icon, alt: "ASP.NET" },
      { src: vba_icon, alt: "VBA" },
      { src: access_icon, alt: "Access" }
    ],
    descricaoCurta: 'API REST para banco de dados Access.',
    descricaoCompleta: 'Desenvolvimento de uma API RESTful para servir como ponte entre banco de dados Access e diversas aplicações.',
    imagens: [
      { src: "./assets/images/projetos/api_vba.png", alt: "Diagrama da arquitetura da API" }
    ]
  },
    '6': {
    titulo: 'Software de backup',
    categoria: 'desktop',
    tecnologias: [
      { src: csharp_icon, alt: "C#" },
      { src: access_icon, alt: "Access" },
      { src: net_icon, alt: ".NET Framework" }
    ],
    descricaoCurta: 'Software de backup FTP.',
    descricaoCompleta: 'Este software lê um arquivo XML contendo uma fila de arquivos a serem compactados e enviados como backup. Após o processamento, os arquivos são transmitidos via FTP para o servidor do sistema ERP.',
    imagens: [
      { src: "./assets/images/projetos/backup.png", alt: "Demonstração do projeto" }
    ]
  },
    '7': {
    titulo: 'Instalador de Sistema ERP',
    categoria: 'desktop',
    tecnologias: [
      { src: csharp_icon, alt: "C#" },
      { src: access_icon, alt: "Access" },
      { src: net_icon, alt: ".NET Framework" }
    ],
    descricaoCurta: 'Instalador de sistema ERP.',
    descricaoCompleta: 'Este software centraliza toda a estrutura necessária para a instalação do sistema ERP, incluindo o registro de DLLs e demais utilitários essenciais. Além disso, oferece recursos para migração e atualização completa do sistema.',
    imagens: [
      { src: "./assets/images/projetos/instalador_sisop.png", alt: "Demonstração do projeto" }
    ]
  },
    '8': {
    titulo: 'Organizador de Backups',
    categoria: 'desktop',
    tecnologias: [
      { src: csharp_icon, alt: "C#" },
      { src: net_icon, alt: ".NET Framework" }
    ],
    descricaoCurta: 'Software gerenciador de backups de sistema ERP.',
    descricaoCompleta: 'Este software monitora, a cada hora, a pasta local de backups, evitando a ocupação excessiva do disco rígido. Ele mantém apenas uma quantidade definida de arquivos, garantindo que sempre permaneçam armazenados os backups mais recentes.',
    imagens: [
      { src: "./assets/images/projetos/organiza_backup.png", alt: "Demonstração do projeto" }
    ]
  },
    '9': {
    titulo: 'Instalador de serviço IIS',
    categoria: 'desktop',
    tecnologias: [
      { src: csharp_icon, alt: "C#" },
      { src: net_icon, alt: ".NET Framework" }
    ],
    descricaoCurta: 'Software Instalador de API IIS.',
    descricaoCompleta: 'Este software instala uma API localmente no IIS, utilizando o IP e a porta definidos durante o processo de instalação. Todos os recursos necessários são baixados via FTP e instalados automáticamente. Também oferece recursos de gerenciamento da aplicação, permitindo iniciar, parar e realizar testes de funcionamento. Além disso, possibilita atualizar a API para versões mais recentes.',
    imagens: [
      { src: "./assets/images/projetos/instalador_api.png", alt: "Demonstração do projeto" }
    ]
  },
    '10': {
    titulo: 'Gerenciador SFTP',
    categoria: 'desktop',
    tecnologias: [
      { src: csharp_icon, alt: "C#" },
      { src: net_icon, alt: ".NET Framework" },
      { src: json_icon, alt: "JSON" }
    ],
    descricaoCurta: 'Gerenciador SFTP.',
    descricaoCompleta: 'Este software facilita o gerenciamento de arquivos e versões de um sistema ERP. Com ele, é possível criar uma lista de processos que devem ser executados, como o envio de arquivos para um servidor SFTP. Também é possível definir se o arquivo será compactado antes do envio ou enviado em sua forma original.',
    imagens: [
      { src: "./assets/images/projetos/gerenciador_sftp.png", alt: "Demonstração do projeto" }
    ]
  },
  '11': {
    titulo: 'Site SysOpRS',
    categoria: 'web',
    tecnologias: [
      { src: wordpress_icon, alt: "WordPress" },
      { src: php_icon, alt: "PHP" }
    ],
    descricaoCurta: 'Site institucional SysOpRS.',
    descricaoCompleta: 'O site institucional da SysOpRS apresenta o sistema de gestão SisOp, destacando suas funcionalidades, benefícios e soluções para empresas. A plataforma combina facilidade de navegação, design responsivo e integração de recursos personalizados, oferecendo uma experiência completa aos visitantes.',
    imagens: [
      { src: "./assets/images/projetos/site_sisop.png", alt: "Demonstração do projeto" }
    ],
    linkExterno: 'https://sisop.com.br'
  },
  '12': {
    titulo: 'Site Seven Sports',
    categoria: 'web',
    tecnologias: [
      { src: wordpress_icon, alt: "WordPress" },
      { src: php_icon, alt: "PHP" },
      { src: js_icon, alt: "JavaScript" }
    ],
    descricaoCurta: 'Site institucional Seven Sports.',
    descricaoCompleta: 'O site institucional da Seven Sports permite a exibição detalhada dos atletas, organizados por nacionalidade, posição, altura e peso. Além da apresentação pública, conta com um painel interno intuitivo e dinâmico, que possibilita aos moderadores cadastrar e gerenciar os atletas de forma prática, garantindo atualização constante das informações.',
    imagens: [
      { src: "./assets/images/projetos/site_seven.png", alt: "Demonstração do projeto" }
    ],
    linkExterno: 'https://sevenfutsal.com.br'
  },
  '13': {
    titulo: 'Site SysOpRS - Central de Ajuda',
    categoria: 'web',
    tecnologias: [
      { src: wordpress_icon, alt: "WordPress" },
      { src: php_icon, alt: "PHP" },
      { src: js_icon, alt: "JavaScript" },
      { src: json_icon, alt: "JSON" }
    ],
    descricaoCurta: 'Site Central de Ajuda SysOpRS.',
    descricaoCompleta: 'O site da Central de Ajuda do SisOp reúne mais de 550 manuais e tutoriais sobre os diversos módulos do sistema, oferecendo suporte completo aos usuários. Além da seção pública de conteúdo, conta com um painel de moderação totalmente personalizado, que permite a criação de novos manuais, atualização de conteúdos existentes e gerenciamento de contatos, garantindo um suporte ágil e organizado.',
    imagens: [
      { src: "./assets/images/projetos/site_central_ajuda.png", alt: "Demonstração do projeto" }
    ],
    linkExterno: 'https://sisop.com.br/central-ajuda'
  },
  '14': {
    titulo: 'Site HALL 239',
    categoria: 'web',
    tecnologias: [
      { src: wordpress_icon, alt: "WordPress" },
      { src: php_icon, alt: "PHP" }
    ],
    descricaoCurta: 'Site casa de festas HALL 239.',
    descricaoCompleta: 'Site institucional para a casa de festas HALL 239, destacando o ambiente, serviços e facilidade de agendamento de visitas/orçamentos com galeria de fotos integrada.',
    imagens: [
      { src: "./assets/images/projetos/site_hall.png", alt: "Demonstração do projeto" }
    ],
    linkExterno: 'https://hall239.com.br'
  },
  '15': {
    titulo: 'Site WL-TecField',
    categoria: 'web',
    tecnologias: [
      { src: wordpress_icon, alt: "WordPress" },
      { src: php_icon, alt: "PHP" },
      { src: js_icon, alt: "JavaScript" },
      { src: json_icon, alt: "JSON" }
    ],
    descricaoCurta: 'Site WL-TecField.',
    descricaoCompleta: 'O site da WL-TecField apresenta os equipamentos de caixa de auto-atendimento oferecidos pela empresa, destacando suas funcionalidades e diferenciais. Além disso, a plataforma conta com uma seção dedicada ao recrutamento de técnicos em todo o Brasil, facilitando a candidatura e gestão de novos profissionais.',
    imagens: [
      { src: "./assets/images/projetos/site_wl.png", alt: "Demonstração do projeto" }
    ],
    linkExterno: 'https://wltecfield.com'
  }
};