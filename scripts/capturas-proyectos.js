const { chromium } = require("playwright");
const fs = require("fs/promises");
const path = require("path");

const proyectos = [
  {
    nombre: "datauno",
    url: "https://www.datauno.cl/",
    esperaExtra: 1200,
  },
  {
    nombre: "essential-decant",
    url: "https://essentialdecant.netlify.app/catalogo",
    esperaExtra: 1800,
  },
  {
    nombre: "arizona-burger",
    url: "https://shimmering-empanada-b9500e.netlify.app/",
    esperaExtra: 1000,
  },
  {
    nombre: "citas-veterinarias",
    url: "https://aesthetic-druid-986032.netlify.app",
    esperaExtra: 1000,
  },
  {
    nombre: "administrador-citas",
    url: "https://lambent-treacle-791eb6.netlify.app/",
    esperaExtra: 1000,
  },
  {
    nombre: "calculadora-gastos",
    url: "https://eloquent-donut-eb1fbc.netlify.app/",
    esperaExtra: 1000,
  },
];

async function tomarCapturas() {
  const carpetaDestino = path.join(__dirname, "..", "img", "proyectos");
  await fs.mkdir(carpetaDestino, { recursive: true });

  const navegador = await chromium.launch({
    headless: true,
  });

  const pagina = await navegador.newPage({
    viewport: {
      width: 1440,
      height: 900,
    },
    deviceScaleFactor: 1,
  });

  for (const proyecto of proyectos) {
    const rutaSalida = path.join(carpetaDestino, `${proyecto.nombre}.png`);

    try {
      console.log(`Capturando ${proyecto.nombre}...`);

      await pagina.goto(proyecto.url, {
        waitUntil: "networkidle",
        timeout: 60000,
      });

      await pagina.waitForTimeout(proyecto.esperaExtra || 1000);

      await pagina.screenshot({
        path: rutaSalida,
        fullPage: false,
      });

      console.log(`OK -> img/proyectos/${proyecto.nombre}.png`);
    } catch (error) {
      console.log(`No se pudo capturar ${proyecto.nombre}`);
      console.log(error.message);
    }
  }

  await navegador.close();
}

tomarCapturas();
