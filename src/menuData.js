export const menuData = [
  { label: 'Home', href: '/' },
  {
    label: 'Meet Us',
    href: '/about',
    children: [
      {
        heading: 'More about us',
        submenu: [
          { label: 'About OCCFAD', href: '/about/occfad' },
          { label: 'Meet the Doctors', href: '/about/meetthedoctors' },
          { label: 'Address / Google Map / Location Dot', href: 'about/address' },
          { label: 'Office Tour (location / building / how to access / photos)', href: 'about/officetour' },
          { label: 'Patient Experiences', href: '/about/patientexperiences' }
        ],
      }
    ],
  },
  {
    label: 'Patient Care Services',
    href: '/services',
    children: [
      {
        heading: 'Cosmetic and Restorative Dentistry',
        submenu: [
          { label: 'Smile Design', href: '#' },
          {
            label:
              'Veneers',
            href: '#',
          },
          { label: 'Crowns', href: '#' },
          { label: 'Teeth Whitening', href: '#' },
          { label: 'Crown Lengthening', href: '#' },
          { label: 'Gingival/Gum Contouring', href: '#' },
          { label: 'Fillings (Resin and porcelain)', href: '#' },
          { label: 'Root Canals', href: '#' },
        ],
      },
      {
        heading: 'Oral and Perio Surgery',
        submenu: [
          { label: 'Tooth Extractions (including Wisdom Teeth)', href: '/toothextractions' },
          { label: 'Full Mouth Extractions', href: '/fullmouthextractions' },
          { label: 'Bone Augmentations (PRF and BMP)', href: '/boneaugmentations' },
          { label: 'Gingival / Gum Contouring', href: '/gingivalgumcontouring' },
          { label: 'Gum Treatment', href: '/gumtreatment' }
        ],
      },
      {
        heading: 'Implants and Prosthetics',
        submenu: [
          { label: 'Implant Treatment', href: '/implanttreatment' },
          { label: 'Failed Implant Treatment', href: '/failedimplanttreatment' },
          { label: 'Sinus Lift', href: '/sinuslift' },
          { label: 'Implant Supported Dentures', href: '/implantsupporteddentures' },
          { label: 'All on X and All on 4s', href: '/allonxandallon4s' },
          { label: 'Other Prosthetics', href: '/otherprosthetics' }
        ],
      },
      {
        heading: 'Preventative Dentistry',
        submenu: [
          { label: 'Checkup and Cleanings', href: '/checkupandcleanings' },
          { label: 'Sealants', href: '/sealants' },
          { label: 'Fluoride Treatments', href: '/fluoridetreatments' }
        ],
      },
      {
        heading: 'Sedation',
        submenu: [
          { label: 'IV Anesthesia Sedation', href: '/ivanestesiasedation' },
          { label: 'Oral Sedation', href: '/oralsedation' }
        ],
      },
      {
        heading: 'Technological Advancements',
        submenu: [
          { label: '3D Image / CT Scans', href: '/3dimagectscans' },
          { label: 'Intraoral Scanners', href: '/intraoralscanners' },
          { label: 'Biolase Laser', href: '/biolaselaser' },
          { label: 'Soft Tissue Lasers', href: '/softtissuelasers' },
          { label: 'Bone Grafting', href: '/bonegrafting' }
        ],
      },

    ],
  },
];
