import { Certificate, EducationItem, Project, SkillGroup, ToolItem } from '../types';

export const personalInfo = {
  name: 'Miqdad',
  fullName: 'Miqdad',
  role: 'Siswa TKJ @ SMK Madinatulquran',
  headline: 'Cisco & Linux Server Admin | Web Dev & AI',
  bio: '',
  extendedBio: [
    'Saya adalah siswa di SMK Madinatulquran jurusan Teknik Komputer dan Jaringan (TKJ). Saya memiliki ketertarikan yang mendalam dalam dunia teknologi informasi, khususnya dalam merancang topologi jaringan, mengonfigurasi perangkat router/switch, mengelola server Linux, serta mengembangkan aplikasi web modern.',
    'Bagi saya, teknologi adalah sarana untuk memecahkan masalah nyata. Saya selalu senang mempelajari teknologi baru, bereksperimen dengan berbagai tools otomatisasi & artificial intelligence (AI), dan membangun proyek berstandar industri.'
  ],
  stats: [
    { value: '5+', label: 'Project Selesai', description: 'Web, Server, & Networking' },
    { value: '6+', label: 'Sertifikat Terverifikasi', description: 'Cisco, LPI, MikroTik, Web' },
    { value: '100%', label: 'Semangat Belajar', description: 'Haus Ilmu & Eksplorasi' },
    { value: 'TKJ', label: 'Spesialisasi Utama', description: 'Teknik Komputer Jaringan' },
  ],
  focusPillars: [
    {
      title: 'Arsitektur Jaringan',
      description: 'Merancang VLAN, Routing OSPF, Switching, & NAT berstandar enterprise dengan topologi berketahanan tinggi.',
      icon: 'Network',
      badge: 'Cisco & MikroTik'
    },
    {
      title: 'Administrasi Server',
      description: 'Mengelola Debian/Ubuntu Server, Nginx, Apache, Docker containerization, serta DNS Bind9 & Samba.',
      icon: 'Server',
      badge: 'Linux SysAdmin'
    },
    {
      title: 'Pengembangan Web',
      description: 'Membangun antarmuka web yang interaktif, cepat, dan responsif menggunakan teknologi web modern.',
      icon: 'Code2',
      badge: 'Full Stack Basics'
    },
    {
      title: 'Otomatisasi & DevOps',
      description: 'Menggunakan Ansible, Prometheus, & Grafana untuk efisiensi sistem dan observability server real-time.',
      icon: 'Cpu',
      badge: 'Automation'
    }
  ],
  focusTags: [
    'Networking',
    'Linux Server',
    'Cisco',
    'Mikrotik',
    'Web Development',
    'Automation',
    'Artificial Intelligence'
  ],
  contact: {
    email: 'miqdad2124@gmail.com',
    whatsapp: '+62 85890721930',
    whatsappClean: '6285890721930',
    github: 'https://github.com/miqdad18',
    githubUsername: 'miqdad18',
    linkedin: 'https://www.linkedin.com/in/miqdad-miqdad-260185332/',
    linkedinUsername: 'miqdad-miqdad-260185332',
    instagram: 'https://instagram.com/mik_ksb',
    instagramUsername: '@mik_ksb',
    location: 'Indonesia',
    status: 'Tersedia untuk Magang, Proyek & Diskusi Tech'
  }
};

export const skillGroups: SkillGroup[] = [
  {
    id: 'networking',
    title: 'Networking & Telecommunications',
    icon: 'Network',
    skills: [
      { name: 'Cisco IOS Configuration', level: 90, tag: 'Enterprise' },
      { name: 'MikroTik RouterOS', level: 88, tag: 'Routing' },
      { name: 'VLAN & 802.1Q Trunking', level: 92, tag: 'Switching' },
      { name: 'Routing (OSPF / Static Routing)', level: 85, tag: 'Routing' },
      { name: 'Switching & Spanning Tree (STP)', level: 88, tag: 'Layer 2' },
      { name: 'DHCP, NAT & Port Forwarding', level: 95, tag: 'Core Services' },
    ]
  },
  {
    id: 'server',
    title: 'Server & System Administration',
    icon: 'Server',
    skills: [
      { name: 'Debian Linux & Ubuntu Server', level: 90, tag: 'OS' },
      { name: 'Web Server (Nginx & Apache2)', level: 85, tag: 'Web Services' },
      { name: 'DNS Server (Bind9) & Samba File Sharing', level: 82, tag: 'Infrastructure' },
      { name: 'SSH Hardening & Remote Management', level: 95, tag: 'Security' },
      { name: 'Docker Containerization', level: 80, tag: 'DevOps' },
    ]
  },
  {
    id: 'programming',
    title: 'Programming & Web Development',
    icon: 'Code2',
    skills: [
      { name: 'HTML5 & Modern CSS3', level: 92, tag: 'Frontend' },
      { name: 'JavaScript (ES6+ & DOM APIs)', level: 85, tag: 'Frontend' },
      { name: 'PHP Backend Scripting', level: 80, tag: 'Backend' },
      { name: 'Python (Scripting & Automation)', level: 78, tag: 'Automation' },
      { name: 'Node.js & REST APIs', level: 75, tag: 'Backend' },
    ]
  },
  {
    id: 'database',
    title: 'Database Management',
    icon: 'Database',
    skills: [
      { name: 'MySQL Database', level: 88, tag: 'RDBMS' },
      { name: 'MariaDB Administration', level: 85, tag: 'Open Source' },
      { name: 'Relational Schema Design & SQL Queries', level: 84, tag: 'Data Modeling' },
    ]
  }
];

export const toolsEcosystem: ToolItem[] = [
  { name: 'Git', category: 'Version Control', icon: 'GitBranch' },
  { name: 'GitHub', category: 'Collaboration', icon: 'Github' },
  { name: 'VS Code', category: 'Code Editor', icon: 'Code' },
  { name: 'Figma', category: 'UI/UX Design', icon: 'Figma' },
  { name: 'Cisco Packet Tracer', category: 'Network Sim', icon: 'Network' },
  { name: 'VMware Workstation', category: 'Virtualization', icon: 'Layers' },
  { name: 'VirtualBox', category: 'Virtualization', icon: 'Box' },
  { name: 'Proxmox VE', category: 'Hypervisor', icon: 'Server' },
  { name: 'Docker', category: 'Container', icon: 'Container' },
  { name: 'Ansible', category: 'Automation', icon: 'Terminal' },
  { name: 'Wireshark', category: 'Packet Analysis', icon: 'Radio' },
  { name: 'PuTTY / Termius', category: 'SSH Client', icon: 'TerminalSquare' },
];

export const certificates: Certificate[] = [
  {
    id: 'cert-1',
    title: 'ccna-introduction-to-networks',
    issuer: 'Class2Class.org & Cisco Networking Academy',
    issueDate: '10 Oktober 2025',
    type: 'International',
    description: 'Certificate of successful completion of the "Explore Cultures" Learning Journey through the "Sports and Hobbies in Your Country" international collaboration project, focusing on foundational networking and collaborative technology.',
    skillsVerified: ['Networking Basics', 'Global Collaboration', 'IP Addressing', 'Network Protocols', 'Cisco Ecosystem'],
    credentialId: 'CCNA-ITN-2025-C2C-8891',
    badgeColor: 'from-amber-500/20 to-orange-500/10 border-amber-500/40 text-amber-400'
  },
  {
    id: 'cert-2',
    title: 'Cisco Enterprise Networking Essentials',
    issuer: 'Cisco Networking Academy',
    issueDate: '15 Agustus 2025',
    type: 'Verified',
    description: 'Sertifikasi keahlian dalam merancang arsitektur jaringan enterprise, routing OSPF, Inter-VLAN routing, switching Cisco Catalyst, dan pengamanan akses switch.',
    skillsVerified: ['OSPF Dynamic Routing', 'VLAN & Trunking 802.1Q', 'Spanning Tree Protocol', 'ACL Security', 'Enterprise Topologies'],
    credentialId: 'CSCO-NET-ENT-7621-MQ',
    badgeColor: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/40 text-cyan-400'
  },
  {
    id: 'cert-3',
    title: 'Linux Server Administration Fundamentals',
    issuer: 'Linux Professional Institute (LPI)',
    issueDate: '20 Juli 2025',
    type: 'Verified',
    description: 'Sertifikasi administrasi sistem operasi Linux Debian & Ubuntu Server, pengamanan akses SSH, permission manajemen, serta konfigurasi layanan DNS & Web.',
    skillsVerified: ['Debian/Ubuntu Server', 'SSH Security Hardening', 'File Permissions & Users', 'Nginx/Apache Config', 'Systemd Services'],
    credentialId: 'LPI-LNX-ADM-5542-ID',
    badgeColor: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/40 text-emerald-400'
  },
  {
    id: 'cert-4',
    title: 'MikroTik Certified Network Associate (MTCNA)',
    issuer: 'MikroTik Training Center',
    issueDate: '05 September 2025',
    type: 'Verified',
    description: 'Manajemen RouterOS MikroTik, firewall filter & mangle, Source/Destination NAT, bandwidth management (Simple Queue), dan konfigurasi Wireless AP.',
    skillsVerified: ['RouterOS Configuration', 'Firewall Filter & NAT', 'Bandwidth Queue', 'DHCP Server/Client', 'Wireless AP Setup'],
    credentialId: 'MT-MTCNA-2025-9914-ID',
    badgeColor: 'from-rose-500/20 to-pink-500/10 border-rose-500/40 text-rose-400'
  },
  {
    id: 'cert-5',
    title: 'Responsive Web Development Certificate',
    issuer: 'Web Tech Academy',
    issueDate: '12 Januari 2026',
    type: 'Verified',
    description: 'Sertifikasi pembuatan web responsif modern dengan standar HTML5 semantik, CSS3 Flexbox/Grid, JavaScript ES6+, dan implementasi desain modern yang elegan.',
    skillsVerified: ['Semantic HTML5', 'Responsive CSS Grid/Flexbox', 'JavaScript ES6+', 'Mobile-First Layouts', 'Clean UI/UX'],
    credentialId: 'WTA-RWD-2026-3382-EX',
    badgeColor: 'from-blue-500/20 to-indigo-500/10 border-blue-500/40 text-blue-400'
  },
  {
    id: 'cert-6',
    title: 'Python Scripting & Automation Fundamentals',
    issuer: 'OpenEDG Python Institute',
    issueDate: '01 Februari 2026',
    type: 'Verified',
    description: 'Pemrograman Python untuk otomatisasi tugas sistem, manipulasi file & direktori, penanganan skrip jaringan sederhana, serta konsumsi REST API.',
    skillsVerified: ['Python Core Syntax', 'System Task Automation', 'File I/O Handling', 'Network Automation Scripts', 'API Data Fetching'],
    credentialId: 'PCAP-AUT-2026-1049-PY',
    badgeColor: 'from-purple-500/20 to-violet-500/10 border-purple-500/40 text-purple-400'
  }
];

export const projects: Project[] = [
  {
    id: 'toko-online',
    title: 'Website Toko Online',
    shortDesc: 'Aplikasi e-commerce lengkap dengan fitur katalog produk, keranjang belanja, manajemen stok, dan checkout order.',
    fullDesc: 'Sistem e-commerce berbasis web yang dirancang khusus untuk operasional retail toko. Dilengkapi katalog dinamis, session keranjang belanja, perhitungan otomatis, dan modul dashboard admin untuk monitoring pesanan baru serta manajemen stok inventaris secara real-time.',
    category: 'Web Dev',
    tags: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
    features: [
      'Katalog produk dinamis dengan filter kategori & search bar',
      'Keranjang belanja berbasis Session dengan kalkulasi otomatis',
      'Manajemen stok produk otomatis berkurang setelah checkout',
      'Halaman dashboard admin untuk kelola item & pantau order',
      'Antarmuka ramah perangkat mobile (responsif)'
    ],
    architecture: 'MVC Architecture dengan PHP Native & MySQL Database, Bootstrap/Tailwind UI',
    systemSpecs: {
      'Web Server': 'Apache 2.4 / Nginx',
      'Database': 'MySQL 8.0 / MariaDB',
      'Language': 'PHP 8.2 + Vanilla JavaScript',
      'Styling': 'Responsive CSS3'
    },
    icon: 'ShoppingCart',
    accentColor: 'from-blue-600 to-cyan-500'
  },
  {
    id: 'barcode-scanner',
    title: 'Barcode Scanner JavaScript',
    shortDesc: 'Aplikasi pemindai kode batang & QR code berbasis web menggunakan kamera perangkat secara real-time.',
    fullDesc: 'Aplikasi web interaktif yang memanfaatkan HTML5 Media Stream API untuk menangkap umpan kamera secara langsung di browser dan mendeteksi berbagai format barcode (Code 128, EAN-13, QR Code) tanpa memerlukan instalasi aplikasi tambahan. Sangat praktis untuk absensi, inventarisasi, atau verifikasi tiket.',
    category: 'Web Dev',
    tags: ['JavaScript', 'HTML5 Camera API', 'CSS3', 'Web APIs'],
    features: [
      'Akses kamera real-time dengan pemilihan lensa depan/belakang',
      'Dukungan barcode 1D (EAN, Code128) dan 2D (QR Code)',
      'Audio feedback instan saat barcode sukses terdeteksi',
      'Riwayat pemindaian tersimpan lokal dengan waktu deteksi',
      'Ekspor daftar hasil pemindaian langsung ke format teks/CSV'
    ],
    architecture: 'Client-side Web Worker + MediaDevices.getUserMedia + BarcodeDetector API',
    systemSpecs: {
      'Runtime': 'Browser Standar (Chrome, Firefox, Safari)',
      'Camera API': 'HTML5 MediaStream API',
      'Engine': 'JavaScript ES6+ High Performance Canvas',
      'UI Layout': 'Glassmorphism Dark Interface'
    },
    icon: 'ScanLine',
    accentColor: 'from-cyan-500 to-teal-400'
  },
  {
    id: 'cisco-enterprise',
    title: 'Konfigurasi Jaringan Cisco Enterprise',
    shortDesc: 'Perancangan arsitektur jaringan multi-building dengan redundant routing OSPF, Inter-VLAN routing, dan Security ACL.',
    fullDesc: 'Simulasi topologi jaringan skala menengah untuk kawasan kantor multi-gedung menggunakan Cisco Packet Tracer. Menghubungkan divisi Manajemen, IT, Keuangan, dan Guest WiFi dengan segmentasi VLAN terpisah, routing dinamis OSPF Area 0, redundancy link menggunakan HSRP/STP, dan konfigurasi NAT Overload menuju Gateway Internet.',
    category: 'Jaringan',
    tags: ['Cisco Packet Tracer', 'OSPF', 'VLAN', 'NAT', 'ACL'],
    features: [
      'Segmentasi VLAN terisolasi dengan 802.1Q Inter-VLAN Routing',
      'Routing Dinamis OSPF Single/Multi Area dengan fast-convergence',
      'Proteksi akses antar departemen menggunakan Extended ACL',
      'DHCP Server otomatis dengan IP helper-address pada router',
      'PAT (Port Address Translation) untuk efisiensi alokasi IP publik'
    ],
    architecture: 'Hierarchical Network Model (Core, Distribution, Access Layers)',
    systemSpecs: {
      'Perangkat Router': 'Cisco 2911 & Cisco 1941 ISR',
      'Perangkat Switch': 'Cisco Catalyst 2960 (Layer 2) & 3560 (Layer 3)',
      'Routing Protocol': 'OSPF (Open Shortest Path First)',
      'Keamanan': 'Port Security, Access Control Lists (ACL)'
    },
    icon: 'Network',
    accentColor: 'from-sky-500 to-blue-600'
  },
  {
    id: 'monitoring-prometheus',
    title: 'Monitoring Server Prometheus & Grafana',
    shortDesc: 'Sistem pemantauan kesehatan server real-time, grafik penggunaan CPU/RAM/Network, dan notifikasi peringatan otomatis.',
    fullDesc: 'Implementasi stack observability lengkap berbasis kontainer Docker pada Ubuntu Server. Node Exporter mengekstrak metrik hardware dan sistem operasi secara kontinyu, Prometheus melakukan scraping interval 5 detik, dan Grafana menyajikan visualisasi grafik interaktif. Sistem dilengkapi webhook alert yang mengirimkan notifikasi instan jika utilisasi server kritis.',
    category: 'Server & DevOps',
    tags: ['Ubuntu Server', 'Prometheus', 'Grafana', 'Docker'],
    features: [
      'Dashboard visual Grafana real-time untuk CPU, RAM, Disk I/O & Network',
      'Deployment seluruh komponen menggunakan Docker Compose terpadu',
      'Alertmanager rule untuk notifikasi otomatis saat pemakaian > 85%',
      'Time-series data storage dengan retensi metrik hingga 30 hari',
      'Resource overhead rendah di bawah 3% konsumsi CPU host'
    ],
    architecture: 'Node Exporter -> Prometheus TSDB -> Grafana Visualization -> Alerting Notification',
    systemSpecs: {
      'Host OS': 'Ubuntu Server 22.04 LTS',
      'Engine': 'Docker Engine 24.x + Docker Compose',
      'Visualisasi': 'Grafana Open Source v10',
      'Time Series DB': 'Prometheus v2.45'
    },
    icon: 'Activity',
    accentColor: 'from-emerald-500 to-cyan-500'
  },
  {
    id: 'automation-ansible',
    title: 'Automation Deployment Ansible',
    shortDesc: 'Otomatisasi konfigurasi multi-node server Web & DNS menggunakan Ansible Playbook secara konsisten dan efisien.',
    fullDesc: 'Automasi infrastruktur (Infrastructure as Code) untuk melakukan provisioning dan instalasi server Debian baru dari nol. Playbook Ansible mengeksekusi konfigurasi SSH Key exchange, instalasi Nginx, deployment file website, konfigurasi firewall UFW, serta setup zona forward/reverse DNS server Bind9 dalam waktu kurang dari 3 menit tanpa konfigurasi manual yang repetitif.',
    category: 'Server & DevOps',
    tags: ['Debian Linux', 'Ansible', 'YAML', 'SSH Automation'],
    features: [
      'Ansible Playbook terstruktur dengan modularitas Roles & Variables',
      'Idempotensi tinggi: tidak menduplikasi konfigurasi yang sudah benar',
      'Pengamanan otomatisasi dengan enkripsi rahasia Ansible Vault',
      'Pengaturan otomatis Nginx VirtualHost dan SSL Let\'s Encrypt',
      'Peningkatan kecepatan deployment server hingga 90% lebih cepat'
    ],
    architecture: 'Control Node (Ansible Core) -> SSH (Key Authentication) -> Managed Linux Nodes',
    systemSpecs: {
      'Control Node': 'Debian 12 Bookworm with Ansible Core',
      'Managed Target': 'Multi-node Debian & Ubuntu VPS',
      'Protokol': 'SSH Port 22 dengan Ed25519 Keys',
      'Bahasa Playbook': 'YAML Declarative Syntax'
    },
    icon: 'Terminal',
    accentColor: 'from-purple-500 to-indigo-500'
  }
];

export const educationList: EducationItem[] = [
  {
    period: '2024 - 2027',
    school: 'SMK Madinatulquran',
    major: 'Teknik Komputer dan Jaringan (TKJ)',
    description: 'Fokus pada pembelajaran mendalam mengenai Infrastruktur Jaringan Komputer, Administrasi Server Linux/Windows, Cybersecurity dasar, Troubleshooting hardware/software, serta Dasar-dasar Pemrograman Web dan Otomatisasi Sistem.',
    skills: [
      'Computer Networks & Subnetting',
      'Linux Server Administration',
      'Cisco & MikroTik Routing',
      'Web Development & Database',
      'Network Security Fundamentals'
    ],
    status: 'Sedang Berjalan (Siswa Aktif)',
    achievements: [
      'Aktif mempraktikkan konfigurasi topologi jaringan enterprise di lab sekolah',
      'Membuat sistem monitoring server mandiri untuk simulasi lingkungan produksi',
      'Meraih berbagai sertifikasi kompetensi jaringan dan sistem operasi skala internasional'
    ]
  }
];

export const terminalCommandsHelp = [
  { cmd: 'help', desc: 'Menampilkan daftar perintah terminal yang tersedia' },
  { cmd: 'whoami', desc: 'Informasi singkat tentang profil Miqdad' },
  { cmd: 'about', desc: 'Membaca latar belakang dan dedikasi di bidang TKJ' },
  { cmd: 'skills', desc: 'Menampilkan ringkasan keahlian teknis' },
  { cmd: 'projects', desc: 'Melihat daftar proyek unggulan' },
  { cmd: 'certs', desc: 'Melihat sertifikat yang telah diraih' },
  { cmd: 'contact', desc: 'Informasi kontak dan media sosial' },
  { cmd: 'ping 8.8.8.8', desc: 'Simulasi ping jaringan DNS Google' },
  { cmd: 'neofetch', desc: 'Menampilkan spesifikasi sistem ala Linux sysadmin' },
  { cmd: 'clear', desc: 'Membersihkan layar terminal' }
];
