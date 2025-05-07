// Palettes are defined in the script, as well as in the PMP Configuration as an enum
let palettes = [
  {
    name: "Midnight Citrus",
    colors: ["#0f0f1c", "#ffcc00", "#ff7f11", "#ffa69e", "#4d194d"],
  },
  {
    name: "Electric Bloom",
    colors: ["#8ecae6", "#219ebc", "#023047", "#ffb703", "#fb8500"],
  },
  {
    name: "Forest Neon",
    colors: ["#073b3a", "#0b6e4f", "#08a045", "#d4d700", "#fdfcdc"],
  },
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  let R = new Random();

  // ---------- PMP-BASED COLOR PALETTE ----------
  // Default - source palette from token hash
  let palette = R.random_choice(palettes);
  console.log("original token palette:", palette.name);
  // Check for PMP override, assign if defined
  // note: configured as the 0th Flex Dependency in Creator Dashboard
  const pmp = tokenData.externalAssetDependencies[0];
  if (pmp?.data?.["Palette"]) {
    palette = palettes.find((p) => p.name === pmp.data["Palette"]);
    console.log("pmp-configured token palette:", palette.name);
  }
  // ---------- END PMP-BASED COLOR PALETTE ----------

  for (let i = 0; i < 100; i++) {
    let x = R.random_dec() * width;
    let y = R.random_dec() * height;
    let r = R.random_dec() * 90 + 10;
    let col = R.random_choice(palette.colors);
    fill(col + "80"); // semi-transparent
    circle(x, y, r);
  }
}

// boilerplate Art Blocks style prng
class Random {
  constructor() {
    this.useA = false;
    let sfc32 = function (uint128Hex) {
      let a = parseInt(uint128Hex.substring(0, 8), 16);
      let b = parseInt(uint128Hex.substring(8, 16), 16);
      let c = parseInt(uint128Hex.substring(16, 24), 16);
      let d = parseInt(uint128Hex.substring(24, 32), 16);
      return function () {
        a |= 0;
        b |= 0;
        c |= 0;
        d |= 0;
        let t = (((a + b) | 0) + d) | 0;
        d = (d + 1) | 0;
        a = b ^ (b >>> 9);
        b = (c + (c << 3)) | 0;
        c = (c << 21) | (c >>> 11);
        c = (c + t) | 0;
        return (t >>> 0) / 4294967296;
      };
    };
    // seed prngA with first half of tokenData.hash
    this.prngA = new sfc32(tokenData.hash.substring(2, 34));
    // seed prngB with second half of tokenData.hash
    this.prngB = new sfc32(tokenData.hash.substring(34, 66));
    for (let i = 0; i < 1e6; i += 2) {
      this.prngA();
      this.prngB();
    }
  }
  // random number between 0 (inclusive) and 1 (exclusive)
  random_dec() {
    this.useA = !this.useA;
    return this.useA ? this.prngA() : this.prngB();
  }
  // random number between a (inclusive) and b (exclusive)
  random_num(a, b) {
    return a + (b - a) * this.random_dec();
  }
  // random integer between a (inclusive) and b (inclusive)
  // requires a < b for proper probability distribution
  random_int(a, b) {
    return Math.floor(this.random_num(a, b + 1));
  }
  // random value in an array of items
  random_choice(list) {
    return list[this.random_int(0, list.length - 1)];
  }
}
