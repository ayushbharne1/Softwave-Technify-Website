import axis from "../assets/banks/axis.png";
import hdfc from "../assets/banks/hdfc.png";
import sbi from "../assets/banks/sbi.png";
import yes from "../assets/banks/yes.png";
import kotak from "../assets/banks/kotak.png";
import rbl from "../assets/banks/rbl.png";
import indusind from "../assets/banks/indusind.webp";
import pnb from "../assets/banks/pnb.png";
import bob from "../assets/banks/bob.png";
import idfc from "../assets/banks/idfc.png";
import federal from "../assets/banks/federal.png";
import au from "../assets/banks/au.jpg";
import citi from "../assets/banks/citi.png";
import icici from "../assets/banks/icici.jpg";


export const bankLogos = [
  { name: "Axis", logo: axis },
  { name: "HDFC", logo: hdfc },
  { name: "SBI", logo: sbi },
  { name: "YES", logo: yes },
  { name: "Kotak", logo: kotak },
  { name: "RBL", logo: rbl },
  { name: "IndusInd", logo: indusind },
  { name: "PNB", logo: pnb },
  { name: "BOB", logo: bob },
  { name: "IDFC", logo: idfc },
  { name: "Federal", logo: federal },
  { name: "AU", logo: au },
  { name: "Citi", logo: citi },
  { name: "ICICI", logo: icici },
];

export const getBankLogo = (bankName) => {
  return bankLogos.find(
    (b) => b.name.toLowerCase() === bankName.toLowerCase()
  )?.logo;
};