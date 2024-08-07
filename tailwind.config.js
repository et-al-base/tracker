/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        colors: {
            'lightGrey': '#F7F8FC',
            'grey': '#E3E3E4',
            'taupe': '#DED5D0',
            'nude': '#EADDD5',
            'yellow': '#FFF7E8',
            'orange': '#FCD7C5',
            'pink': '#FFE7E7',
            'dark': '#060043',
            'blue': '#DBE5FF',
            'error': '#9A005C'
        },
        fontSize: {
            f24150: ['24px', '36px'],
            f22120: ['22px', '26.4px'],
            f22140: ['22px', '30.8px'],
            f20140: ['20px', '28px'],
            f18: ['18px'],
            f18140: ['18px', '25.2px'],
            f16: ['16px'],
            f16140: ['16px', '22.4px'],
            f14: ['14px'],
            f14140: ['14px', '19.6px'],
            f14160: ['14px', '22.4px'],
            f12: ['12px'],
            f12140: ['12px', '16.8px'],
        },
        boxShadow: {
            'centred1': '5px 5px 5px 5px rgba(6, 0, 67, 0.05)', 
            'centred2': '-5px -5px 5px rgba(6, 0, 67, 0.05)', 
            '2centred1': '5px 5px 5px rgba(6, 0, 67, 0.15)', 
            '2centred2': '-5px -5px 5px rgba(6, 0, 67, 0.15)',
            '3centred1': '5px 5px 5px rgba(6, 0, 67, 0.1)', 
            '3centred2': '-5px -5px 5px rgba(6, 0, 67, 0.1)',
            '4centred1': '5px 5px 5px rgba(6, 0, 67, 0.07)', 
            '4centred2': '-5px -5px 5px rgba(6, 0, 67, 0.07)',
            'pos': '0px 8px 8px rgba(6, 0, 67, 0.1)', 
            'neg': '0px -8px 8px rgba(6, 0, 67, 0.05)', 
        },
        textUnderlineOffset: {
          4: '4px'
        },
    },

  },
  plugins: [],
}

