export const menuData = [
  { label: 'Home', href: '/' },
  {
    label: 'Meet Us',
    href: '/about/meetthedoctors',
    children: [
      {
        heading: 'More about us',
        submenu: [
          // { label: 'About OCCFAD', href: '/about/occfad' },
          { label: 'Meet Us, Address', href: '/about/meetthedoctors' },
          // { label: 'Google Maps and Parking', href: 'about/address' },
          // { label: 'Office Tour (location / building / how to access / photos)', href: 'about/officetour' },
          // { label: 'Patient Experiences', href: '/about/patientexperiences' }
        ],
      }
    ],
  },
  {
    label: 'Patient Care Services',
    href: '/services',
    children: [
      {
        heading: 'Oral and Perio Surgery',
        submenu: [
          { label: 'Tooth Extractions (including Wisdom Teeth)', href: '/services/toothextractions' },
          { label: 'Full Mouth Extractions', href: '/services/fullmouthextractions' },
          { label: 'Bone Augmentations (PRF and BMP)', href: '/services/boneaugmentations' },
          { label: 'Gingival / Gum Contouring', href: '/services/gingivalgumcontouring' },
          { label: 'Gum Treatment', href: '/services/gumtreatment' }
        ],
      },
      {
        heading: 'Implants and Prosthetics',
        submenu: [
          { label: 'Implant Treatment', href: '/services/implanttreatment' },
          { label: 'Failed Implant Treatment', href: '/services/failedimplanttreatment' },
          { label: 'Sinus Lift', href: '/services/sinuslift' },
          { label: 'Implant Supported Dentures', href: '/services/implantsupporteddentures' },
          { label: 'All on X and All on 4s', href: '/services/allonx' },
          { label: 'Other Prosthetics', href: '/services/otherprosthetics' }
        ],
      },
      
      {
        heading: 'All On Xs',
        submenu: [
          { label: 'All On Xs', href: '/services/allonxs' },
        ],
      },
      {
        heading: 'Cosmetic and Restorative Dentistry',
        submenu: [
          { label: 'Smile Design', href: '/services/smiledesign' },
          {
            label:
              'Veneers/Crowns',
            href: '/services/veneers',
          },
          { label: 'Teeth Whitening', href: '/services/teethwhitening' },
          { label: 'Crown Lengthening', href: '/services/crownlengthening' },
          { label: 'Gingival/Gum Contouring', href: '/services/gingivalgumcontouring' },
          { label: 'Fillings (Resin and porcelain)', href: '/services/fillings' },
          { label: 'Root Canals', href: '/services/rootcanals' },
        ],
      },
      {
        heading: 'Preventative Dentistry',
        submenu: [
          { label: 'Checkup and Cleanings', href: '/services/checkupandcleanings' },
          { label: 'Sealants', href: '/services/sealants' },
          { label: 'Flouride Treatments', href: '/services/flouridetreatments' }
        ],
      },
      
      {
        heading: 'Sedation and Tech advancements',
        submenu: [
          { label: 'Sedation', href: '/services/sedation' },
          { label: '3D Dental Printers', href: '/services/3DDentalPrinters' },
          { label: '3D Image / CT Scans', href: '/services/3dimagectscans' },
          { label: 'Intraoral Scanners', href: '/services/intraoralscanners' },
          // { label: 'Biolase Laser', href: '/services/biolaselaser' },
          { label: 'Soft Tissue Lasers', href: '/services/softtissuelasers' },
          // { label: 'Bone Grafting', href: '/services/bonegrafting' }
        ],
      },

    ],
  },
  {
    label: 'Insurance',
    href: '',
    children: [
      {
        heading: 'MEDICARE: We are in the network for MEDICARE, all PPO insurances and most HMO insurances.',
        submenu: [
        
        ],
      }
    ],
  },
];
