export const font = ({ fs, fw, lh }) => `
  font-size: ${fs ? `${fs}px` : "16px"};
  font-weight: ${fw ?? 500};
  line-height: ${lh ? Number(lh / fs).toFixed(2) : 1.5};`;

export const flex = ({ fw, ai, jc }) => `
display: flex;
flex-wrap: ${fw ?? "no-wrap"};
align-items:${ai ?? "center"};
justify-content:${jc ?? "center"};
  `;

export const block = `
  display: block;
  margin: 0 auto;
`;

export const widthHeight = (w, h) => `
  width: ${w ? `${w}px` : "100%"};
  height: ${h ? `${h}px` : "auto"} ;
`;
