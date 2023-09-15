import {
  slateDark,
  iris,
  green,
  redDark,
  sage,

  
} from '@radix-ui/colors';

const theme = {
    colors: {
      ...slateDark,
      ...iris,
      ...green,
      ...redDark,
      ...sage,

    },


    background1: slateDark.slate2,
    background2: slateDark.slate3,
    background3: slateDark.slate5,

    text1: sage.sage4,
    text2: sage.sage5,
    text3: sage.sage6,
    text4: iris.iris8,
    text5: iris.iris9,
    text6: iris.iris10,
    text7: green.green8,
    text8: green.green9,

    danger1: redDark.red8,
    danger2: redDark.red9,



};

export default theme;