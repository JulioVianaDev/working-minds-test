/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        dark: "rgb(0,0,0)",
        aside: "#11224B",
        primary: "#FFF",
        purple: "#9747FF",
        h4top: "#343A40",
        letterFooter: '#6C757D',
        searchBackground: "#F8F9FA",
        iconsArrow: '#DFDFDF',
        currentFilter: '#9747FF',
        borderRow: '#EAEAEA',
        donebg: 'rgba(40, 167, 69, 0.17)',
        textDone: "#28A745",
        cancelbg: 'rgba(220, 133, 53, 0.17)',
        textCancel: "#DC8535",
        rowSelected: "rgba(151, 71, 255, 0.24)",
        modalSelected: "rgba(0, 0, 0, 0.44)",
      },
      width: {
        '128': '268px',
        'nav-aside': "250px",
        'nav-top':"1652px",
        'search-w': "400px",
        '30px': "30px",
        '51px': "51px",
        '58px': "58px",
        'profile': "67px",
        'nome': "432px",
        'birth': "236px",
        'address': "203px",
        'celphone': "306px",
        'status': "235px",
        'action': "115px",
        'done': '33px',
        'cancel': '43px'
      },
      height:{
        'nav-aside': "50px",
        'nav-top': "70px",
        'search-h': "36px",
        'button-content': '85px',
        'footer-h': "60px",
        '30px': "30px",
        'checkbox-height': "50px",
        'campus-row': '26px'
      },
      padding: {
        '128': '284px',
        'icons-left': "18px",
        'p-top-right': "31px",
        'padding-button-top': "7px",
        'padding-button-sides':"15px",
        'padding-filter':"10px",
        "14px": "14px"
      },
      margin:{
        'icons-right': "14px",
      },
      borderRadius:{
        'choose': "30px",
        'search': "20px",
        'buttonTop': "20px",
        '2px': '2px',
        '4px': '4px',
      },
      fontSize:{
        'h4-top-letter': ['20px', {
          lineHeight: '24px',
          fontWeight: '500',
        }],
        'footer-text': ['14px', {
          lineHeight: '22px',
          fontWeight: 400,
        }
        ]
      } ,
      boxShadow: {
        '3xl': '0px 8px 16px 0px rgba(0, 0, 0, 0.15);',
      }
      
    },
    
  },
  plugins: [],
}
