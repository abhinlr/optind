import { abort } from "process";

export type ProductsInterface = {
  id:number,
  about:{
    number: string;
    name?: string;
    subname?: string;
    description: string;
    image:string
    bg?:string
  };
  features:string[];
  specs:{key:string;value?:string,description?:string[]}[]
  specimg?:string,
  video?:string,
  cardlist?:{img:string,title:string}[];

};

export const Products: ProductsInterface[] = [
  {id:1,about:{number:'1',bg:'/images/Benzene-bg.png',image: "/images/p1.png", name: "Benzene Monitor",
  description:'Benzene Monitor is a standalone monitor to measure atmospheric benzene that comes from industrial sources,particularly petroleum industry, and vehicular pollution. US EPaA has a new regulation to monitor with 9 microgram per cubic meter in one minutes averaging measurements. No instrument is available in the market that can comply.'},
  features:['In-situ realtime monitoring','Upto ~3 ppb detection limit',' Easy to deploy','Solar powered',' Cloud connected Data Analytics'],
  specs:[
    {key:'Instrument model -',value:'BX020-23'},
    {key:'Sensor Type -',value:'Optical cavity'},
    {key:'Application', description:[
      'Fence line monitoring in oil refineries Real time point measurements in :',
        'Chemical plants',
        'Waste-water treatment plants',
        'Processing facilities',
        'Storage facilities' ,
        'Transportation equipment (rail, road, and maritime)'

      ]},
    {key:'Minimum detection limit -',value:'3 ppb'},
    {key:'Operating conditions', description:[
        'Temperature - 0° to 80°',
        'Humidity – 0 to 90 %',
        'Condensing   Dust and moisture protection – Equipped with HEPA filter'
      ]},
    {key:'Power', description:[
      '  Dual mode – 110/230 V AC',
      'Current consumption - < 6 ampere',
      'Equipped with solar connectivity ports',
      ]},
    {key:'Value Additions', description:[
        ' Solar panel with battery units (24 hour back-up) and power converter',
        'SaaS: Data analysis platform on subscription basis',
        'AMC'
      ]},

  ],
    specimg:'/images/top.png',
    cardlist:[
      {img:'/images/Gridlowcost.png',title:'Low Cost'},
      {img:'/images/Gridunique.png',title:'Unique Algorithm'},
      {img:'/images/Gridhigh.png',title:'High Sensitivity'},
      {img:'/images/Gridcloud.png',title:'Cloud Analytics'},
    ],
    video: '/videos/Benzeen.mp4'
  },

  {id:2,about:{number:'2',bg:'/images/2bg.png',image: "/images/p2.png", name: "UVS-OPID-255", subname:'UV light source',description:'The UVS-OPID-255 is a collimated UV light source with a center wavelength of 255 nm, delivering output power greater than 50 mW. This plug-and-play instrument operates on a 220-230V, 50Hz power supply, making it convenient and user-friendly for various applications requiring reliable and precise UV illumination.'},
    features:['UV Light Sources: Plug and play collimated UV light source ' ,
    'Centre Wavelength at 255nm' ,
    'Output power>50mW' ,
    'Operated at 220-230v, 50Hz'],
    specs:[]},
  {id:3,about:{number:'3',bg:'/images/3bg.png',image: "/images/p3.png", subname: "Visible Integrating Nephelometer",description:''},features:[],
    specs:[
      {
        key:'Visible Integrating Nephelometer: ',
        description:['It is scientific instruments to measure and','characterize aerosol optical properties for climate, health and compliance' ,'applications.  Generally single wavelength nephelometers are commercially available that limits the applications of measurements.','Direct measurement of Scattering coefficient of aerosol',

        ]

      },
      {
        key:'LED',
        description: [
          'based cost effective instrument',
          'Continuous broadband measurement',
          'Sophisticated Electronics and software interface for both forward and backward' ,
          'scattering measurement'
        ]
      }
    ]},
  {id:4,about:{number:'4',bg:'/images/4bg.png',image: "", name: "Visible Optical Resonator",
      description:'This is a optical resonator for measuring muti specious  trace gas NO2 NO3 and O3 it contains'},
    features:['2 high reflectivity mirrors (99.9%) ','1 collimating lens','1 focusing lens','Light source:high intensity 3W white LED ','Detector: Ocean optics QePro '],
    specs:[

    ],
    specimg:'',
    cardlist:[]
  }

];
