import { BlueArchiveInvCard } from "../lib/canvas.js";
import _ from "lodash";


const list = [
    {
        "id": 1,
        "name": "Asuna card",
        "rarity": "r",
        "costume": "normal",
        "on_event": false,
        "role": "attacker",
        "img": "./src/assets/images/ba_assets/asuna_b1.png"
    },
    {
        "id": 2,
        "name": "Ayane card",
        "rarity": "r",
        "costume": "swimsuit",
        "on_event": false,
        "role": "tactical_support",
        "img": "./src/assets/images/ba_assets/ayane_swimsuit_b1.png"
    },
    {
        "id": 3,
        "name": "Chinatsu card",
        "rarity": "r",
        "costume": "normal",
        "on_event": false,
        "role": "healer",
        "img": "./src/assets/images/ba_assets/chinatsu_b1.png"
    },
    {
        "id": 4,
        "name": "Fubuki card",
        "rarity": "r",
        "costume": "normal",
        "on_event": false,
        "role": "attacker",
        "img": "./src/assets/images/ba_assets/fubuki_b1.png"
    },
    {
        "id": 5,
        "name": "Akane card",
        "rarity": "sr",
        "costume": "normal",
        "on_event": false,
        "role": "support",
        "img": "./src/assets/images/ba_assets/akane_b2.png"
    },
    {
        "id": 6,
        "name": "Akari card",
        "rarity": "sr",
        "costume": "normal",
        "on_event": false,
        "role": "attacker",
        "img": "./src/assets/images/ba_assets/akari_b2.png"
    },
    {
        "id": 7,
        "name": "Momoi card",
        "rarity": "sr",
        "costume": "normal",
        "on_event": false,
        "role": "attacker",
        "img": "./src/assets/images/ba_assets/momoi_b2.png"
    },
    {
        "id": 8,
        "name": "Yuuka card",
        "rarity": "sr",
        "costume": "normal",
        "on_event": false,
        "role": "tank",
        "img": "./src/assets/images/ba_assets/yuuka_b2.png"
    },
    {
        "id": 9,
        "name": "Arisu card",
        "rarity": "ssr",
        "costume": "normal",
        "on_event": false,
        "role": "attacker",
        "img": "./src/assets/images/ba_assets/arisu_b3.png"
    },
    {
        "id": 10,
        "name": "Arisu card",
        "rarity": "ssr",
        "costume": "maid",
        "on_event": true,
        "role": "attacker",
        "img": "./src/assets/images/ba_assets/arisu_maid_b3.png"
    },
    {
        "id": 11,
        "name": "Midori card",
        "rarity": "ssr",
        "costume": "normal",
        "on_event": false,
        "role": "attacker",
        "img": "./src/assets/images/ba_assets/midori_b3.png"
    },
    {
        "id": 12,
        "name": "Yuuka card",
        "rarity": "ssr",
        "costume": "normal",
        "on_event": false,
        "role": "tank",
        "img": "./src/assets/images/ba_assets/yuuka_b3.png"
    }
]

const row = _.chunk(list, 5);
const page = _.chunk(row, 2);
const data = {
    list: page[0],
    page: page.length,
    max_page: page.length
}

const canvas = new BlueArchiveInvCard();
await canvas.new(data);
canvas.save("test");